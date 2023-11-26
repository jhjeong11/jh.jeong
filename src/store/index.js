import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        comments: [],
    },
    mutations: {
        addComment(state, comment) {
            state.comments.push(comment);
        },
    },
    actions: {
        addComment({ commit }, comment) {
            commit('addComment', comment);
        },
    },
    getters: {
        getCommets: state => state.comments,
    },
});