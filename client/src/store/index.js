import Vue from 'vue'
import Vuex from 'vuex'
import User from './user.store'
import Events from './events.store'
import UserPlugin from './plugins/user.store.plugin'


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        user: User,
        events: Events
    },
    plugins:[UserPlugin]

})


