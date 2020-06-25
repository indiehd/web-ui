<template>
  <table class="table">
    <thead>
      <tr>
        <slot name="columns">
          <th :key="column" v-for="column in columns">{{column}}</th>
        </slot>
      </tr>
    </thead>
    <tbody>
      <tr :key="index"
          v-for="(item, index) in data">
        <slot :row="item">
          <td :key="column"
              v-for="column in columns"
              v-if="hasValue(item, column)">
            {{itemValue(item, column)}}
          </td>
        </slot>
      </tr>
      <tr v-if="$slots['summary-row']">
        <slot name="summary-row"></slot>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'n-table',
    props: {
      columns: Array,
      data: Array
    },
    methods: {
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined';
      },
      itemValue (item, column) {
        return item[column.toLowerCase()];
      }
    }
  };
</script>
<style>
</style>
