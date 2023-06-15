
<template>
    
    <div>
        <h1>My id is </h1>
        <button @click="fetchStudents">Fetch Students</button>
        <div  class="scrollable" v-for="student in allStudents" :key="student.id">
            <h1>{{student.name}}</h1>
            <p>{{student.email}}</p>
        </div>
   
    </div>
</template>

<script>
import { mapActions , mapGetters } from 'vuex';
export default {
    name: 'InfiniteScroller',
    data() {
        return {
            id: 0
        }
    },
    
    computed : {
            ...mapGetters(['allStudents']),
    },

    methods: {
    ...mapActions(['fetchStudents']),
    fetchStudentData() {
    this.fetchStudents();
    }
}
}
</script>

<style>
.scrollable {
   overflow-y: scroll;
}
</style>