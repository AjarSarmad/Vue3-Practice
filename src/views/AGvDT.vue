<template>
    <div class="container">
    <div class="upper">
        <EventsDataAG></EventsDataAG>
    </div>
    <div class="lower">
        <!-- <StudentsDataDT></StudentsDataDT> -->
    </div>
    </div>
</template>

<script>
import EventsDataAG from './EventsDataAG.vue'
// import StudentsDataDT from './StudentsDataDT.vue'
export default {
    components: {
        EventsDataAG,
        //  StudentsDataDT
    }
}
</script>

<style>
.container{
    flex-direction: column;
    display: flex;
}
.upper {
    height: 200px;
            display: block;
            /* width: 50%; */
            /* background-color: green; */
            /* overflow-y: scroll; */
        }
.lower {
            height: 150px;
            /* background-color: red; */
            display: block;
            /* width: 50%; */
            /* overflow-y: scroll; */
        }
</style>