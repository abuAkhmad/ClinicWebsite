import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    patients: [
      {id: 'Alistair Overeem', age: 12, height: 164, weight: 65, blood: 'AB+'},
      {id: 'Eddie Alvarez', age: 14, height: 167, weight: 75, blood: 'AB+'},
      {id: 'Henry Cejudo', age: 17, height: 158, weight: 56, blood: 'AB+'},
    ],
    clinics: [
      {image: 'map1.jpg', adress: 'New Street', workTime: '10:00 - 18:00'},
      {image: 'map2.jpg', adress: 'Elway Road', workTime: '11:00 - 19:00'},
      {image: 'map3.jpg', adress: 'Downs Edge', workTime: '10:00 - 18:00'},
      {image: 'map4.jpg', adress: 'Brynsiriol', workTime: '09:00 - 17:00'}
    ]
  },
  getters: {
    patients(state) {
      return state.patients
    },
    clinics(state) {
      return state.clinics
    }
  },
  mutations: {
    ADD_PATIENT (state, payload) {
      state.patients.push(payload)
    }
  },
  actions: {
    addPatient ({commit}, payload)  {
      commit('ADD_PATIENT', payload)
    }
  }
  ,
  modules: {
  }
})
