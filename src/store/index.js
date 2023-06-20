import { createStore } from "vuex";
import axios from 'axios';

const uri_students = "http://localhost:8088/api/student/lazyGetStudents";
const uri_events = "https://univent-rest-api.herokuapp.com/api/event/getAllEvents" ;

const store = createStore({
  
  state: {
    events: [],
    visibleEvents: [],
    students:[ ],
    visibleStudents: [ ],
    isLoading: false,
    page: 1,
    pageSizeStudents: 11,
    pageSizeEvents: 4,
  },

  getters: {
    allStudents: (state) => state.students,
    visibleStudents: (state) => state.visibleStudents,
    allEvents: (state) => state.events,
    visibleEvents: (state) => state.visibleEvents,
  },
  
  actions: {
    async fetchStudents({ commit }) {
      // Fetch students and commit the mutation to update the state
      const response = await axios.get(uri_students)
      commit("setStudents", response.data.content);
      commit("setVisibleStudents", response.data.content.slice(0, this.state.pageSizeStudents));
    }, 
    fetchMoreStudents({ state, commit }) {
      // Fetch more students and append them to the visible students
      const startIndex = state.visibleStudents.length;
      const endIndex = startIndex + state.pageSizeStudents;
      const moreStudents = state.students.slice(startIndex, endIndex);
      commit("setVisibleStudents", [...state.visibleStudents, ...moreStudents]);
      console.log(this.state.visibleStudents );

      // console.log(visibleStudents + "fetchmore");
    },

    async lazyFetchStudents({ commit, state }, nextPageIndex) {
      const response = await axios.get(`${uri_students}?page=${nextPageIndex}&size=${state.pageSizeStudents}`);
      commit("setVisibleStudents", [...state.visibleStudents, ...response.data.content]);
    },
    
    

    async fetchEvents({ commit }) {
      // Fetch students and commit the mutation to update the state
      const response = await axios.get(uri_events)
      commit("setEvents", response.data);
      commit("setVisibleEvents", response.data.slice(0, this.state.pageSizeEvents));
    },
    fetchMoreEvents({ state, commit }) {
      const startIndex = state.visibleEvents.length;
      const endIndex = startIndex + state.pageSizeEvents;
      const moreEvents = state.events.slice(startIndex, endIndex);
      commit("setVisibleEvents", [...state.visibleEvents, ...moreEvents]);
      console.log(this.state.visibleEvents );
  },
}, 
  mutations: {
    setStudents: (state, students) => (state.students = students),
    setVisibleStudents: (state, visibleStudents) => (state.visibleStudents = visibleStudents),
    setEvents: (state, events) => (state.events = events),
    setVisibleEvents: (state, visibleEvents) => (state.visibleEvents = visibleEvents),


  },
  modules: {},
});

export default store;