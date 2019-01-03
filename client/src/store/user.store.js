import App from '../main'
export default {
    namespaced: true,
    state: {
        info: localStorage.getItem('user/setUser') || {}
    },
    getters:{
        getUser(state){
            return state.info
        }
    },
    mutations: {
        setUser(state, payload){
            state.info = payload
        }
    },
    actions: {
        signUp({commit}, payload){
            App.$Loading.start()
            App.$auth.createUserWithEmailAndPassword(payload.email, payload.password).then((user)=>{
                commit('setUser', user)                
                App.$Message.success({
                    content: 'account succefully created', 
                    duration: 3
                })
                setTimeout(()=>{
                    App.$router.push({name: 'Recent'})
                }, 3000)
                App.$Loading.finish()
            }).catch((error)=>{
                App.$Message.error({
                    content: error.message,
                    duration: 3
                })
                App.$Loading.error()
            })
        },
        signIn({commit}, payload){
            App.$Loading.start()
            App.$auth.signInWithEmailAndPassword(payload.email, payload.password)
            .then(info=>{
                App.$Loading.finish()
                commit('setUser', info.user)
                App.$router.push({name: 'Recent'})
            })
            .catch((error)=>{
                App.$Loading.error()
                App.$Message.error(error.message)
            })
        },
        signOut(){
            App.$auth.signOut().then(()=>{
                App.$router.push({name: 'Login'})
            }).catch((error)=>{
                App.$Message.error(error.message)
            })
        }
    },
}