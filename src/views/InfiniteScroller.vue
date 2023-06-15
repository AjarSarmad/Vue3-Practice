<template>
  <div class="container">
  <div class="left">
      <StudentsData></StudentsData>
    </div>
  <div class="right">
  <EventsData></EventsData>
  </div>
  </div>
</template>

<script>
import StudentsData from './StudentsData.vue'
import EventsData from './EventsData.vue'
export default {
  name: 'InfiniteScroller',
  components: {
    StudentsData,
    EventsData
  },
  data () {
    return {
      
    }
  },

}

</script>

<style>
.container {
            display: flex;
            flex-direction: row;
        }
        .left {
            height: 200px;
            display: block;
            width: 50%;
            /* background-color: green; */
            overflow-y: scroll;
        }
        .right {
            height: 200px;
            /* background-color: red; */
            display: block;
            width: 50%;
            overflow-y: scroll;
        }

</style>