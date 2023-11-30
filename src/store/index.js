import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const post = {
    externalData: [
        {
            id: '1',
            title: '안녕하세요',
            name: '정주희',
            count: '',
        },
        {
            id: '2',
            title: '반갑습니다',
            name: '정주희',
            count: '',
        },
        {
            id: '3',
            title: '주희입니다',
            name: '정주희',
            count: '',
        },
        {
            id: '4',
            title: '안녕하세요',
            name: '정주희',
            count: '',
        },
        {
            id: '5',
            title: '안녕하세요',
            name: '정주희',
            count: '',
        },
        {
            id: '6',
            title: '안녕하세요',
            name: '정주희',
            count: '',
        },
        {
            id: '7',
            title: '안녕하세요',
            name: '정주희',
            count: '',
        },
        {
            id: '8',
            title: '안녕하세요',
            name: '정주희',
            count: '',
        },
        {
            id: '9',
            title: '안녕하세요',
            name: '정주희',
            count: '',
        },
        {
            id: '10',
            title: '안녕하세요',
            name: '정주희',
            count: '',
        },
        {
            id: '11',
            title: '안녕하세요',
            name: '정주희',
            count: '',
        },
        {
            id: '12',
            title: '안녕하세요',
            name: '정주희',
            count: '',
        },
    ],
};

export default new Vuex.Store({
    state: {
        posts: [...post.externalData],
        comments: {},
    },
    mutations: {
        addComment(state, { postId, comment }) {
            console.log(postId, comment)
            if (!state.comments[postId]) {
                console.log(postId)
                Vue.set(state.comments, postId, []);
            }
            console.log(postId)
            state.comments[postId].push({
                id: Math.random(),
                text: comment.text,
            });
            console.log(postId)
        },
    },
    actions: {
        addComment({ commit }, { postId, comment }) {
            commit('addComment', { postId, comment });
        },
    },
    getters: {
        getComments: (state) => (postId) => {
            return state.comments[postId] || [];
        },
    },
});