const express = require('express')
const app = express()

app.use(express.static('public'))

// const Vue = require('vue')
// const Vuex = require('vuex')

// import {PipeDream} from '@pipe-dream/core'
// import {PipeDreamVueTools} from '@pipe-dream/core'
// import LaravelFileFactory from '@pipe-dream/laravel-file-factory';
// import LaravelNovaFileFactory from 'laravel-nova-file-factory'

// /* setup Vue to use Vuex and Pipe Dream components */
// Vue.use(Vuex)
// Vue.use(PipeDreamVueTools)
// Vue.config.debug = true
// window.Vue = Vue

// /* Create Pipe Dream default store
//  * Attach it to window to make it accessible inside core and file factories */

// window.store = new Vuex.Store(
//     new PipeDream({
//         fileFactories: [
//             LaravelFileFactory,
//             //LaravelNovaFileFactory,            
//         ],
//         ...window.__ENV__
//     }).defaultStore
// )

// /* Let's go */
// new Vue({
//     el: '#app',
//     store
// })

const port = 3000

app.get('/', (req, res) => res.send('Hello Il Cafe World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))