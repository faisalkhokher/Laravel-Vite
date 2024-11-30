import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state: {
        token: localStorage.getItem("token"),
        hashObject: {},
    },
    mutations: {
        UPDATE_TOKEN(state, payload) {
            console.log("This is payload from store", payload);
            state.token = payload;
        },
        REMOVE_TOKEN(state) {
            state.token = null;
            state.hashObject.isLoggedIn = false
            state.hashObject.isLoggedOut = "Backend logged out";
        },
        ADD_HASH(state, payload) {
            state.hashObject = payload;
        },
    },
    actions: {
        updateToken(context, payload) {
            localStorage.setItem("token", payload);
            context.commit("UPDATE_TOKEN", payload);
        },
        removeToken(context) {
            localStorage.removeItem("token");
            context.commit("REMOVE_TOKEN");
        },
        addHash(context, payload) {
            context.commit("ADD_HASH", payload);
        },
    },
    getters: {
        token: (state) => state.token,
        getHash: (state) => state.hashObject,
    },
    plugins: [createPersistedState()] // Adds persistence
});

export default store;
