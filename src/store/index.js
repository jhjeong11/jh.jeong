import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const post = {
    externalData: [
        {
            id: '1',
            title: '안녕하세요',
            name: '정주희',
            comment: [],
        },
        {
            id: '2',
            title: '반갑습니다',
            name: '정주희',
            comment: [],
        },
        {
            id: '3',
            title: '주희입니다',
            name: '정주희',
            comment: [],
        },
        {
            id: '4',
            title: '안녕하세요',
            name: '정주희',
            comment: [],
        },
        {
            id: '5',
            title: '안녕하세요',
            name: '정주희',
            comment: [],
        },
        {
            id: '6',
            title: '안녕하세요',
            name: '정주희',
            comment: [],
        },
        {
            id: '7',
            title: '안녕하세요',
            name: '정주희',
            comment: [],
        },
        {
            id: '8',
            title: '안녕하세요',
            name: '정주희',
            comment: [],
        },
        {
            id: '9',
            title: '안녕하세요',
            name: '정주희',
            comment: [],
        },
        {
            id: '10',
            title: '안녕하세요',
            name: '정주희',
            comment: [],
        },
        {
            id: '11',
            title: '안녕하세요',
            name: '정주희',
            comment: [],
        },
        {
            id: '12',
            title: '안녕하세요',
            name: '정주희',
            comment: [],
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
            const postIndex = state.posts.findIndex(post => post.id === postId);
            if (postIndex !== -1) {
                state.posts[postIndex].count = state.comments[postId].length;
            }
        },
    },
    actions: {
        addComment({ commit }, { postId, comment }) {
            commit('addComment', { postId, comment });
        },
    },
    getters: {
        getComments: (state) => (postId) => {
            return {
                comments: state.comments[postId] || [],
                commentCount: state.posts.find(post => post.id === postId)?.count || 0,
            };
        },
    },
});