<template>
  <div>
    <DataTable
      class="display"
      :columns="columnDefs"
      :data="visibleStudents"
      :options="tableOptions"
      @page="handlePageChange"
      @onReady="onDataTableReady"

    />
    <div v-if="loading" class="loading">Loading...</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import 'datatables.net-select';
import 'datatables.net-responsive';
DataTable.use(DataTablesCore);

export default {
  name: 'StudentsDataDT',
  components: {
    DataTable,
  },
  data() {
    return {
      columnDefs: [
        { data: 'id', title: 'Student Id' },
        { data: 'name', title: 'Student Name' },
        { data: 'email', title: 'Email' },
        { data: 'password', title: 'Password' },
        { data: 'dob', title: 'Date of Birth' },
        { data: 'phone', title: 'Mobile no.' },
        { data: 'gender', title: 'Gender' },
      ],
      tableOptions: {
        select: true,
        paging: true,
        // Add other DataTable options as needed
      },
      loading: false,
      visitedPages: [],
      dataTableInstance: null,
    };
  },
  computed: {
    ...mapGetters(['allStudents']),
    ...mapGetters(['visibleStudents']),

  },
  methods: {
    ...mapActions(['fetchStudents']),
    ...mapActions(['lazyFetchStudents']),

    onDataTableReady(dataTable) {
      console.log('DataTable is ready');
      this.dataTableInstance = dataTable.api();
    },

    handlePageChange() {
      const nextPageIndex =  this.visitedPages.slice(-1)[0] + 1;
      // const nextPageIndex = this.dataTableInstance;
      console.log(this.dataTableInstance);
      if (!this.visitedPages.includes(nextPageIndex)) {
        console.log(nextPageIndex + ' page is being requested');
        this.loading = true;
        this.lazyFetchStudents(nextPageIndex)
          .then(() => {
            this.visitedPages.push(nextPageIndex);
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },

    // handleScroll(event) {
    //   const target = event.target;
    //   const scrollTop = target.scrollTop;
    //   const scrollHeight = target.scrollHeight;
    //   const clientHeight = target.clientHeight;
    //   const scrollOffset = 50;

    //   if (scrollTop + clientHeight >= scrollHeight - scrollOffset) {
    //     this.fetchMoreStudents();
    //   }
    // },

    // fetchMoreStudents() {
    //   // Implement logic to fetch more students
    //   // this.lazyFetchStudents(nextPageIndex);
    // },
  },
  mounted() {
    this.loading = true;
    // this.fetchStudents()
    //   .then(() => {
    //     this.loading = false;
    //   })
    //   .catch(() => {
    //     this.loading = false;
    //   });
    
    this.lazyFetchStudents(1);
    this.visitedPages.push(1);
  },
};
</script>

<style scoped>
@import 'datatables.net-dt';

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 18px;
  font-weight: bold;
}
</style>
