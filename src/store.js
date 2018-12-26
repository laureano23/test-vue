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
        },
        getters: {
            filter(state){
                return param=> state.articulos.filter(item => item.descripcion.includes(param))
            },
            filterCod(state){
                return param=> state.articulos.filter(item => item.codigo.includes(param))
            },
            matchExact(state){
                return param=> state.articulos.filter(item => item.codigo===param)
            }
        },
        actions: {
            submit({commit}, desc){
                return new Promise((resolve, reject) => {
                    
                    const options = {
                        method: 'GET',
                        headers: { 'content-type': 'application/form-data' },
                        url: 'http://localhost/backend/articulosAdd.php',
                        params: desc
                    };
                    axios(options).then(resp=>{
                        console.log(resp)
                        if(resp.data.success===true){
                            resolve(true)
                        }else{
                            resolve(false)
                        }
                    })
                    
                })                
            },
            getArticulos({commit}){
                if(this.state.articulos.length==0){
                    const articulos = []
                    const options = {
                        method: 'GET',
                        headers: { 'content-type': 'application/form-data' },
                        url: 'http://localhost/backend/articulos.php',
                    };
                    axios(options)
                        .then(resp=>{
                        resp.data.forEach(el => {
                            articulos.push(el)
                        });
                    })
        
                    commit('setArticulos', articulos)    
                }
              },
        }
    }
)