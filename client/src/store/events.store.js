import App from '../main'
export default {
    namespaced: true,
    state: {
        recent: [],
        favorites: [],
    },
    getters:{
        getRecent(state){
            return state.recent
        },
        
        getFavorites(state){
            return state.favorites
        }
    },
    mutations: {
        setRecent(state, payload){
            state.recent = payload
        },
        addRecent(state, payload){
            payload.forEach(feed => {
                state.recent.push(feed)
            });
        }
    },
    actions:{
        fetchRecent({commit}, payload){
            let ref
            if(payload.category != '*')
                ref = App.$firestore.collection('events')
                .where('category', '==', payload.category)
            else 
                ref = App.$firestore.collection('events')

            if(!payload) payload.limit = 100

            App.$Loading.start()   
            ref.orderBy("date_created", "desc")     
            ref.limit(100)
            ref.get()
            .then(snap=>{
                console.log('snap', snap)
                let feeds = []
                if(!snap.empty){
                    snap.forEach(doc=>{
                        feeds.push({id: doc.id, ...doc.data()})
                    })
                    commit('setRecent', feeds)
                }
                App.$Loading.finish()   
            })
            .catch(error=>{
                App.$Message.error({
                    content: error.message,
                    duration: 10
                })
                App.$Loading.error()
            })
        },
        fetchById({}, id){
            App.$Loading.start()
            return App.$firestore.collection('events').doc(id).get()
            .then(doc=>{
                App.$Loading.finish()
                if(doc.exists){
                    let data = doc.data() 
                    // console.log(data);
                    
                    return data
                }
                else
                    throw {message: 'Event not found'}
            }).catch(error=>{
                App.$Message.error({
                    content: error.message,
                    duration: 5
                })
                App.$Loading.error()
                throw error
            })
        }
    }
}