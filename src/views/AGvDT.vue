<template>
    <div class = "container">
        <!-- <div class = "upper">
            <h1 style="background-color: aqua;">DATA TABLE EXAMPLE</h1>
            <StudentsDataDT></StudentsDataDT>
        </div> -->
        <div class = "lower">
            <h1 style="background-color: aquamarine;">AG GRID EXAMPLE</h1>
            <StudentsDataAG></StudentsDataAG>
        </div>   
    </div>
</template>

<script>
// import StudentsDataDT from './StudentsDataDT.vue'
import StudentsDataAG from './StudentsDataAG.vue';
export default {
    components: {
        //  StudentsDataDT,
         StudentsDataAG
    }
}
</script>

<style>
.container{
    flex-direction: column;
    display: flex;
}

</style>