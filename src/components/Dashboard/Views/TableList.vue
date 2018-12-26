<template>
  <div class="container">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="close_ev">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-12">
                      <card class="card">
                        <template slot="header">
                          <h4 class="card-title">Lista de articulos</h4>
                        </template>
                        <div class="table-responsive">
                          <input type="text" v-model="nombre" ref="param">
                          <input type="radio" name="tipo" value="cod" @click="pick" v-model="tipo">codigo
                          <input type="radio" name="tipo" value="desc" v-model="tipo" @click="pick">descripcion
                          <button type="button" class="btn btn-success" @click="add_art">Aceptar</button>
                          <div class="list-group">
                            <button class="list-group-item list-group-item-action" v-for="item in filter" :key="item.codigo" @click="darCodigo(item.codigo)">
                              {{item.codigo}} - {{item.descripcion}}
                            </button>
                          
                          </div>

                        </div>
                      </card>
                    </div>
                  </div>   

                </div>
                   
              </div>
              <div class="modal-footer">
                  
              </div>
            </div>
            
          </div>
        </div>
          
      </div>
    </transition>
  </div>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue' 
  //import BuscadorArticulos from 'src/components/Dashboard/BuscadorArticulos.vue'  
  import {mapActions, mapState, mapGetters} from 'vuex'

  export default {
    components: {
      Card,
    },
    data(){
        return {
            tipo:'cod',
            nombre: '',
            codigo: '',
        }
    },
    methods:{
      ...mapActions(['getArticulos']),
      pick(el){
        var el = this.$refs.param;
        el.focus()
      },
      close_ev(){
        this.$emit('close');
      },
      add_art(){
        this.$emit('close')
        this.$emit('agregarArt', this.codigo)

      },
      darCodigo(cod){
        this.codigo=cod;
      }
    },
    computed:{
      ...mapState(['articulos']),
      //...mapGetters(['filter', '12'])
      filter() {
        if(this.tipo==='cod'){
          return this.$store.getters.filterCod(this.nombre)  
        }else{
          return this.$store.getters.filter(this.nombre)  
        }        
      }
    },
    mounted(){
      this.getArticulos()
    }
  }
</script>
<style>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-content {
  width: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  overflow-y: auto;
  max-height: 400px;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
