<template>
  <div class="container">
    <ag-grid-vue
      class="ag-theme-alpine"
      style="height: 500px; width: 100%"
      :columnDefs="columnDefs"
      :rowData="visibleStudents"
      rowSelection="multiple"
      animateRows="true"
      pagination="true"
      :paginationPageSize="10"
      :gridOptions="gridOptions"
      @paginationChanged="handlePageChange"
      @gridReady="onGridReady"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default {
  name: 'StudentsDataAG',
  components: {
    AgGridVue,
  },
  data() {
    return {
      columnDefs: [
        { field: 'id', headerName: 'Student Id' },
        { field: 'name', headerName: 'Student Name' },
        { field: 'email', headerName: 'Email' },
        { field: 'password', headerName: 'Password' },
        { field: 'dob', headerName: 'Date of Birth' },
        { field: 'phone', headerName: 'Mobile no.' },
        { field: 'gender', headerName: 'Gender' },
      ],
      gridApi: null,
      gridColumnApi: null,
      gridOptions: {},
      visitedPages: [],
    };
  },
  computed: {
    ...mapGetters(['allStudents']),
    ...mapGetters(['visibleStudents']),
  },
  methods: {
    ...mapActions(['fetchStudents']),
    ...mapActions(['lazyFetchStudents']),
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
    },
    handlePageChange(event) {
      if (event.newPage) {
        const currentPageIndex = this.gridApi.paginationGetCurrentPage() + 1;
        if (!this.visitedPages.includes(currentPageIndex)) {
          // console.log(currentPageIndex + "yaaaaaaaho");
          this.lazyFetchStudents(currentPageIndex);
          this.visitedPages.push(currentPageIndex);
        }
      }
    },
  },
  mounted() {
    this.lazyFetchStudents(1);
    this.visitedPages.push(1); 
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: auto;
  overflow-y: scroll;
}
.scrollable {
  overflow-y: scroll;
  height: auto;
}
.ag-body-vertical-scroll-viewport {
  overflow-y: scroll;
}
</style>
