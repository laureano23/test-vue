<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="card">
            <template slot="header">
              <h4 class="card-title">Lista de articulos</h4>
              <p class="card-category">Here is a subtitle for this table</p>
            </template>
            <div class="table-responsive">
              <BuscadorArticulos></BuscadorArticulos>
              <l-table class="table-hover"
                       :columns="table2.columns"
                       :data="articulos">
              </l-table>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'  
  import BuscadorArticulos from 'src/components/Dashboard/BuscadorArticulos.vue'  
  import {mapActions, mapState} from 'vuex'

  const tableColumns = ['Codigo', 'Descripcion', 'Costo']
  const tableData = [{
    codigo: 1,
    descripcion: 'Dakota Rice',
    costo: '$36.738'
  },]
  export default {
    components: {
      LTable,
      Card,
      BuscadorArticulos
    },
    methods:{
      ...mapActions(['getArticulos'])
    },
    computed:{
      ...mapState(['articulos'])
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    },
    mounted(){
      this.getArticulos()
    }
  }
</script>
<style>
</style>
