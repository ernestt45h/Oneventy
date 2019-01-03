import {initializeApp, auth, storage, firestore} from "firebase";
import config from '../../config/firebase'
initializeApp(config)
let store = firestore()
store.settings({timestampsInSnapshots: true})
store.enablePersistence()
export default {
    install : function (Vue, options) {
        Vue.prototype.$auth = auth()
        Vue.prototype.$storage = storage()
        Vue.prototype.$firestore = store
    }
}