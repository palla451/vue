// store/modules/apiModule.js
import { createStore } from 'vuex';
import axios from 'axios';

const apiModule = {
    namespaced: true,
    state: {
        items: null
    },
    getters: {
        getItems: (state) => state.items
    },
    mutations: {
        setItems(state, items) {
            state.items = items;
        }
    },
    actions: {
        async fetchData({ commit }) {
            try {
                const result = await axios.get('http://mcc-be.local/api/auth/sw_version');
                commit('setItems', result.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
};

export default apiModule;
