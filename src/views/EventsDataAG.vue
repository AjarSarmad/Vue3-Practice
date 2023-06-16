<template>
    <div class="container">
      <ag-grid-vue
        class="ag-theme-alpine"
        style="height: 500px; width: 100%"
        :columnDefs="columnDefs"
        :rowData="visibleEvents"
        rowSelection="multiple"
        animateRows="true"
        @cell-clicked="cellWasClicked"
        @grid-ready="onGridReady"
      ></ag-grid-vue>
    </div>
  </template>

  
<script>
import { mapActions , mapGetters } from 'vuex';
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

export default {
    name: 'EventsDataAG',
    components: {
    AgGridVue,
  },

    data() {
        return {
            columnDefs: [
        { field: 'name', headerName: 'Event Name' },
        { field: 'id', headerName: 'Event Id' },
        { field: 'eventType', headerName: 'Event Type' },
        { field: 'guestName', headerName: 'Guest Name' },
        { field: 'venue', headerName: 'Venue' },
        { field: 'eventTime', headerName: 'Event Time' },
      ],
        }
    },
    
    computed : {
            ...mapGetters(['allEvents']),
            ...mapGetters(['visibleEvents']),
    },

    methods: {
    ...mapActions(['fetchEvents']),
    ...mapActions(['fetchMoreEvents']),
   
    
    handleScroll(event) {
        const target = event.target;
        const scrollTop = target.scrollTop;
        const scrollHeight = target.scrollHeight;
        const clientHeight = target.clientHeight;
        const scrollOffset = 50; // Adjust this value as needed

  if (scrollTop + clientHeight >= scrollHeight - scrollOffset) {
    this.fetchMoreEvents();
  }
}

    },
    
    mounted() {
        // window.addEventListener('scroll', this.handleScroll);
        const upperContainer = document.querySelector('.ag-body-vertical-scroll-viewport');
        upperContainer.addEventListener('scroll', this.handleScroll);

        this.fetchEvents();
        this.fetchMoreEvents();
    },
}

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-right: 10%;
  padding-left: 10%;
  padding-bottom: 10%;
}
.scrollable{
    overflow-y: scroll;
    height: auto;
}
.ag-theme-alpine {
  height: 100%;
}

.ag-header {
  background-color: #f8f8f8;
  border-bottom: 1px solid #ccc;
}

.ag-cell-value {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>