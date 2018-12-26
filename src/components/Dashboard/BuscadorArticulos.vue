<template>
    <div>
        <input type="text" @keyup="log" v-model="nombre">
        <div class="input-group">
            <div class="input-group-append">
                <div class="input-group-text">
                    <input type="radio" id="codigo" value="codigo" name="tipo" aria-label="Radio button for following text input">
                    
                    <label for="codigo">Código</label>
                    <input type="radio" id="descripcion" value="descripcion" name="tipo" aria-label="Radio button for following text input">
                    <label for="descripcion">Descripción</label>
                </div>
            </div>
        </div>
        <span> {{picked}} </span>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
export default {
    name: 'BuscadorArticulos',
    methods:{
      //...mapActions(['buscarArticulos']),
      filtrar: key => {
            console.log(key)
        },
        
      log: function(){
        console.log(this.$store)
      }
    },
    data(){
        return {
            picked:'',
            nombre: ''
        }
    },
    computed:{
      ...mapGetters(['filter']),
      filtrar: key=>{
          console.log(this.$store)
          //this.store.getters.filter(key)
      },
    },
}
</script>
