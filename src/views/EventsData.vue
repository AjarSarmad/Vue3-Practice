<template>
    <div >
        <div v-for="event in visibleEvents" :key="event.id">
            <h1>{{event.name}}</h1>
            <p>Event id: {{ event.id }}</p>
            <p>Event Type: {{ event.eventType }}</p>
            <p>Guest Name: {{ event.guestName }}</p>
            <p>Venue: {{ event.venue }}</p>
            <p>Event Time: {{ event.eventTime }}</p>
        </div>
    </div>
</template>

<script>
import { mapActions , mapGetters } from 'vuex';
export default {
    name: 'EventsData',

    data() {
        return {
        }
    },
    
    computed : {
            ...mapGetters(['allEvents']),
            ...mapGetters(['visibleEvents']),
    },

    methods: {
    ...mapActions(['fetchEvents']),
    ...mapActions(['fetchMoreEvents']),
   
    // handleScroll() {
    //     if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
    //         this.fetchMoreEvents();
    //     }
    // }
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
        const rightContainer = document.querySelector('.right');
        rightContainer.addEventListener('scroll', this.handleScroll);

        this.fetchEvents();
        this.fetchMoreEvents();
    },
}

</script>

<style>
.scrollable{
    overflow-y: scroll;
    height: auto;
}
</style>