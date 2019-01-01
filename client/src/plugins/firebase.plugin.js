import {initializeApp, auth, storage, firestore} from "firebase";
import config from '../../config/firebase'

export default {
    install : function (Vue, options) {
        initializeApp(config)
        Vue.prototype.$auth = auth()
        Vue.prototype.$storage = storage()
        Vue.prototype.$firestore = firestore()
    }
}