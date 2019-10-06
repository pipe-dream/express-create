const path = require('path')
const admZip = require('adm-zip');

module.exports = class {
    static make(projectName, files) {
        var bundle = new this()
        bundle.projectName = projectName
        bundle.files = files
        bundle.id = Math.random().toString(36).substr(2, 5)
        bundle.storageFileName = `${bundle.id}-${projectName}`
        bundle.storagePath = path.join('./storage', bundle.storageFileName)
        return bundle
    }

    static find(id) {
        var bundle = new this();
        bundle.id = id.split(/^([a-z0-9]*)-/)[1]
        bundle.projectName = id.split(/-(.+)/)[1]
        console.log(bundle.id, bundle.projectName)
        bundle.storageFileName = `${bundle.id}-${bundle.projectName}`
        bundle.storagePath = path.join('./storage', bundle.storageFileName)        
        return bundle
    }

    saveAsZip() {
        var zip = new admZip();   
        this.files.forEach(file => {
            zip.addFile(file.path, file.content,'',"0644");
        });
            
        zip.writeZip(this.storagePath);
    }



    url() {
        return `http://localhost:3000/pipe-dream/api/bundles/${this.storageFileName}`
    }
}