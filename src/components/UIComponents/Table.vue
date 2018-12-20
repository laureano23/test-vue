<template>
  <table class="">
    <thead>
      <slot name="columns">
        <th v-for="column in columns">{{column}}</th>
      </slot>
    </thead>
    <tbody>
    <tr v-for="item in data">
      <slot :row="item">
        <td v-for="column in columns" v-if="hasValue(item, column)">{{itemValue(item, column)}}</td>
        <button class="btn btn-success">Editar</button>
        <button class="btn btn-danger">Eliminar</button>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'l-table',
    props: {
      columns: Array,
      data: Array
    },
    methods: {
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column.toLowerCase()]
      }
    }
  }
</script>
<style>
</style>
