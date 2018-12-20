<template>
    <div>
        <input type="text" @keyup="buscarArticulos">
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'BuscadorArticulos',
    methods:{
      ...mapActions(['buscarArticulos'])
    },
    computed:{
    ...mapState(['articulos'])
    }
}
</script>
