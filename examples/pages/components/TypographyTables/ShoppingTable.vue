<template>
  <div class="table-shopping">
    <el-table :data="productsTable"
              style="width: 100%">
      <el-table-column align="left" min-width="150">
        <div class="img-container" slot-scope="{row}">
          <img :src="row.image" alt="Agenda">
        </div>
      </el-table-column>
      <el-table-column align="left" label="Product" min-width="220">
        <div class="td-name" slot-scope="{row}">
          <a href="#jacket">{{row.title}}</a>
          <br>
          <small>{{row.description}}</small>
        </div>
      </el-table-column>
      <el-table-column align="left" label="Color" min-width="80" prop="color"></el-table-column>
      <el-table-column align="left" label="Size" min-width="60" prop="size"></el-table-column>
      <el-table-column header-align="right" label="Price" min-width="180">
        <div class="td-number" slot-scope="{row}">
          <small>€</small>
          {{row.price}}
        </div>
      </el-table-column>
      <el-table-column header-align="right" label="Quantity" min-width="180">
        <div class="td-number" slot-scope="{row}">
          {{row.quantity}}
          <div class="btn-group">
            <n-button @click.native="decreaseQuantity(row)" size="sm" type="info">
              <i class="now-ui-icons ui-1_simple-delete"></i>
            </n-button>
            <n-button @click.native="increaseQuantity(row)" size="sm" type="info">
              <i class="now-ui-icons ui-1_simple-add"></i>
            </n-button>
          </div>
        </div>
      </el-table-column>
      <el-table-column header-align="right" label="Amount" min-width="170">
        <div class="td-number" slot-scope="{row}">
          <small>€</small>
          {{row.amount}}
        </div>
      </el-table-column>
      <el-table-column label="" min-width="100">
        <div class="td-actions" slot-scope="{row}">
          <n-button type="neutral">
            <i class="now-ui-icons ui-1_simple-remove"></i>
          </n-button>
        </div>
      </el-table-column>
    </el-table>
    <div class="table table-stats">
      <div class="td-total">
        Total
      </div>
      <div class="td-price">
        <small>€</small>
        {{shoppingTotal}}
      </div>
      <div class="text-right">
        <button class="btn btn-info btn-round " data-original-title="" rel="tooltip" title=""
                type="button">
          Complete Purchase
          <i class="now-ui-icons arrows-1_minimal-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import { Table, TableColumn } from 'element-ui/types';
  import { Button } from '@/components';

  export default {
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Button.name]: Button
    },
    data () {
      return {
        productsTable: [
          {
            image: 'img/saint-laurent.jpg',
            title: 'Suede Biker Jacket ',
            description: 'by Saint Laurent',
            color: 'Black',
            size: 'M',
            price: 3390,
            quantity: 1,
            amount: 3390
          },
          {
            image: 'img/balmain.jpg',
            title: 'Jersey T-Shirt',
            description: 'by Balmain',
            color: 'Black',
            size: 'M',
            price: 499,
            quantity: 2,
            amount: 998
          },
          {
            image: 'img/prada.jpg',
            title: '\tSlim-Fit Swim Short ',
            description: 'by Prada',
            color: 'Red',
            size: 'M',
            price: 200,
            quantity: 1,
            amount: 200
          }
        ]
      };
    },
    computed: {
      shoppingTotal () {
        return this.productsTable.reduce((accumulator, current) => {
          return accumulator + current.amount;
        }, 0);
      }
    },
    methods: {
      increaseQuantity (row) {
        row.quantity++;
        this.computeAmount(row);
      },
      decreaseQuantity (row) {
        if (row.quantity > 1) {
          row.quantity--;
          this.computeAmount(row);
        }
      },
      computeAmount (row) {
        row.amount = row.quantity * row.price;
      }
    }
  };
</script>
<style>
  .table-stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
