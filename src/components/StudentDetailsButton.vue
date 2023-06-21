<template>
    <span>  
    
      <button @click="showStudentDetails">View Details</button>
        <!-- <StudentDetails v-if="isStudentDetailsVisible" :student="studentRow" :display=true @close="isStudentDetailsVisible = !isStudentDetailsVisible"></StudentDetails> -->
      </span>
</template>

<script>
// import StudentDetails from '@/views/StudentDetails.vue';
import {  mapActions, mapGetters } from 'vuex';
export default {
    name: "StudentDetailsButton",
    components: {
      // StudentDetails,
    },
    data: function() {
        return {
            studentRow: null,
            isStudentDetailsVisible: false,
        };
    },
    beforeMount() {
        // this.params contains the cell and row information and is made available to this component at creation time
        // see ICellRendererParams for more details
        // console.log("ssssssssssssssssssssssssssss")
        // console.log(this.params.node.data);
        this.studentRow = this.params.node.data;
        this.studentDetailsAction(this.studentRow);
        console.log(this.studentDetailsState.id);
    },
    methods: {
      showStudentDetails(student) {
          // Render the StudentDetails component for the selected student
          // You can use a modal or any other method to display the details
          // For example:
          // this.selectedStudent = student;
          this.isStudentDetailsVisible = true;
  },
    ...mapActions(['studentDetailsAction'])
},

    computed:{
      ...mapGetters(['studentDetailsState']),
    }

};
</script>