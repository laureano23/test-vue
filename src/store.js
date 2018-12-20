import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'Axios'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        state: {
            articulos: []
        },
        mutations: {
            setArticulos (state, articulos) {
                state.articulos = articulos
            },
            buscarArticulos (state, key) {
                console.log(key.srcElement.value)
                state.articulos.filter(function(item){
                    console.log(item)
                    item.descripcion.includes(key.srcElement.value)
                })
               
            }
        },
        actions: {
            buscarArticulos({commit}, key){
                commit('buscarArticulos', key)
                
            },
            getArticulos({commit}){
                const articulos = []
                const options = {
                    method: 'GET',
                    headers: { 'content-type': 'application/form-data' },
                    url: 'static/articulos.js',
                };
                axios(options)
                    .then(resp=>{
                    resp.data.forEach(el => {
                        articulos.push(el)
                    });
                })
    
                commit('setArticulos', articulos)
          
              },
        }
    }
)