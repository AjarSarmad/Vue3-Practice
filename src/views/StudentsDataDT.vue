
<template>
    
    <div>
        <LoadingOverlay v-model:active="isLoading"
                 :can-cancel="flase"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
        <div v-for="student in visibleStudents" :key="student.id">
            <h1>{{student.name}}</h1>
            <p>Email: {{ student.email }}</p>
            <p>Mobile No.: {{ student.phone }}</p>
            <p>Password: {{ student.password }}</p>
            <p>Date of Birth: {{ student.dob }}</p>
        </div>
   
    </div>
</template>

<script>
import { mapActions , mapGetters } from 'vuex';
import LoadingOverlay from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


export default {
    name: 'StudentsDataDT',

    data() {
        return {
            isLoading: false
        }
    },
    
    computed : {
            ...mapGetters(['allStudents']),
            ...mapGetters(['visibleStudents']),
    },

    methods: {
    ...mapActions(['fetchStudents']),
    ...mapActions(['fetchMoreStudents']),
   
    handleScroll(event) {
        const target = event.target;
        const scrollTop = target.scrollTop;
        const scrollHeight = target.scrollHeight;
        const clientHeight = target.clientHeight;
        const scrollOffset = 50; // Adjust this value as needed

    if (scrollTop + clientHeight >= scrollHeight - scrollOffset) {
        this.fetchMoreStudents();    }
    },
    },
    
    mounted() {
        this.isLoading = true;
        const leftContainer = document.querySelector('.left');
        leftContainer.addEventListener('scroll', this.handleScroll);
        this.fetchStudents();
        setTimeout(() => {
        this.fetchMoreStudents().finally(() => {
            this.isLoading = false;
        })
        }, 17000);
        },

    components: {
        LoadingOverlay
    },

}
</script>

<style>

</style>