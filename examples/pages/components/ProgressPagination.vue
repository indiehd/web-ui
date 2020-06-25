<template>
  <div class="section section-pagination">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h4>Progress Bars</h4>
          <n-progress :value="25" label="Default" show-value>
          </n-progress>
          <n-progress :value="60" label="Default" show-value type="primary">
          </n-progress>
          <n-progress :value="60" label="Default" show-value type="danger">
          </n-progress>
          <n-progress :value="60" label="Default" show-value type="warning">
          </n-progress>
          <n-progress :value="60" label="Default" show-value type="success">
          </n-progress>
          <n-progress :value="60" label="Default" show-value type="info">
          </n-progress>
        </div>
        <div class="col-md-6">
          <h4>Pagination</h4>
          <n-pagination :page-count="10" type="primary" v-model="pagination.simple">

          </n-pagination>

          <n-pagination :page-count="10" type="default" v-model="pagination.default">

          </n-pagination>

          <div class="pagination-container justify-content-center">
            <n-pagination :page-count="10"
                          next-item-classes="arrow-margin-right"
                          prev-item-classes="arrow-margin-left"
                          type="primary"
                          v-model="pagination.full">

            </n-pagination>
          </div>
          <br>
          <h4>Labels</h4>
          <badge type="default">Default</badge>
          <badge type="primary">Primary</badge>
          <badge type="success">Success</badge>
          <badge type="info">Info</badge>
          <badge type="warning">Warning</badge>
          <badge type="danger">Danger</badge>
          <badge type="neutral">Neutral</badge>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import { Badge, Pagination, Progress } from '@/components';

  export default {
    components: {
      [Progress.name]: Progress,
      [Pagination.name]: Pagination,
      Badge
    },
    data () {
      return {
        pagination: {
          simple: 1,
          default: 2,
          full: 3
        }
      };
    }
  };
</script>
<style>
</style>
