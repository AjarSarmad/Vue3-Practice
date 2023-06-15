import { createStore } from "vuex";
import axios from 'axios';

const uri = "https://univent-rest-api.herokuapp.com/api/student/getAllProfiles";

const store = createStore({
  state: {
    students:[
      {
        id : "",
        name : "",
        email : "",
        password : "",
        dob : "",
        gender : "",
        phone : "",
        image : "",
      }
    ]
  },

  getters: {
    allStudents: (state) => state.students,
  },
  
  actions: {
    async fetchStudents({ commit }) {
      const response = await axios.get(uri);
      console.log(response.data);
      commit("setStudents", response.data);
    }
  },
  
  mutations: {
    setStudents: (state, students) => (state.students = students),
  },
  modules: {},
});

export default store;