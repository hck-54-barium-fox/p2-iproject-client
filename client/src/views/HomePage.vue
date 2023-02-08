<script>

import TableDataRow from '../components/TableDataRow.vue';
import { useAppStore } from '../stores/app';
import { mapActions, mapState } from 'pinia';

export default {
    computed: {
        ...mapState(useAppStore,['dataProduct'])
    },
    methods: {
        ...mapActions(useAppStore,['getAllData'])
    },
    components: {
        TableDataRow
    },
    created() {
        this.getAllData()

    },
}
</script>

<template>
    <!-- <div class="justify-content-center">
        
    </div> -->
    <!-- {{ dataCPU }} -->
    <div class="container">
        <div class="d-flex justify-content-center mt-2">
            <button class="btn btn-primary">All</button>
            <button class="btn btn-primary mx-3">All</button>
            <button class="btn btn-primary">All</button>
        </div>
      <div class="my-3 p-3 bg-body rounded shadow-sm">
        <h1 class="border-bottom pb-2 mb-0 mt text text-center">Product</h1>
        <!-- Table Head-->
        <div class="container">
          <div class="table-responsive">
            <table class="table table-striped table-xl">
                <thead>
                    <tr>
                        <th scope="col-2">No</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product</th>
                        <th scope="col-4">Price</th>
                        <th scope="col-2">Action</th>
                    </tr>
                </thead>
              <tbody>
                  <TableDataRow v-for="(product, index) in dataProduct" :key="product.id" :product="product" :index="index"></TableDataRow>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>