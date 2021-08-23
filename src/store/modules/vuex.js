import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isloggedin: false,
  token: null,
};

const mutations = {
  isloggedin(state, isloggedin) {
    state.isloggedin = isloggedin;
  },
  token(state, token) {
    state.token = token;
  },
};

const actions = {
  isloggedin(context, isloggedin) {
    context.commit("isloggedin", isloggedin);
  },
  token(context, token) {
    context.commit("token", token);
  },
};
const getters = {
  isloggedin: (state) => {
    return state.isloggedin;
  },
  token: (state) => {
    return state.token;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};

// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const state = {
//   isloggedin : null,
//   token : null
// };

// const store = new Vuex.Store({
//   state,
//   mutations: {
//     isloggedin(state,isloggedin){
//       state.isloggedin= isloggedin
//     },
//     token(state,token){
//       state.token= token
//     }
//   },
//   actions: {
//     isloggedin(context,isloggedin){
//       context.commit('isloggedin',isloggedin);
//     },
//     token(context,token){
//       context.commit('token',token);
//     }
//   },
//   getters : {
// isloggedin : (state)=>{
//   return state.isloggedin
// },
// token : (state)=>{
//   return state.token
// }
//   }
// });
// export default store
