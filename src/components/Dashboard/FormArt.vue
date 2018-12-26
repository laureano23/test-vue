<template>
    
    <div class="container-fluid">
        <TableList v-if="showModal" v-model="showModal" @close="cerrarModal" @agregarArt="agregar"></TableList>
        <form class="needs-validation" novalidate>
            <div class="form-inline">
                <label for="codigo">Código</label>
                <input type="text" class="form-control" id="codigo" v-model="articulo.codigo" :disabled="disabled" required>  
                <div class="invalid-feedback">
                    Please choose a username.
                </div>
                <button class="btn btn-primary" @click="abrir">Buscar</button>
            </div>
            <div class="form-group">
                <label for="descripcion">Descripcion</label>
                <input type="text" class="form-control" id="descripcion" v-model="articulo.descripcion" :disabled="disabled" required>
            </div>
            <button class="btn btn-warning" @click="edit">Editar</button>
            <button type="submit" class="btn btn-primary" @click="submit(articulo, disabled)">Submit</button>
        </form>
    </div>
</template>
<script>
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import {mapActions, mapState, mapGetters} from 'vuex'
export default {
    name:"formArt",
    
    components:{
        TableList
    },
    data(){
        return{
            showModal: false,
            disabled: true,
            articulo: {
                codigo: '',
                descripcion: '',
            }
        }
    },
    methods: {
        //...mapActions(['submit']),
        submit(articulo, disabled){
            var me=this;
            this.$store.dispatch('submit',{
                articulo
            }).then(function(val){
                console.log(val)
                if(val===true){
                    console.log("entramos")
                    me.disabled=true    
                }
                
            })
        },
        edit(){
            this.disabled=false
        },
        abrir(){
            this.showModal=true
        },
        cerrarModal(){
            this.showModal=false
        },
        agregar(val){
            this.articulo.codigo=val
            this.filter
        },
    },
    computed:{
      ...mapState(['articulos']),
      filter() {          
          this.articulo= this.$store.getters.matchExact(this.articulo.codigo)[0]
      },
    },
    mounted() {
    }
}
</script>

