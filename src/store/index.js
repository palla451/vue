
import { createStore } from 'vuex';
import apiModule from './modules/apiModule';

export default createStore({
    modules: {
        api: apiModule
    }
});
