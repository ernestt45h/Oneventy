import Vue from '../main'

export default {
    namespaced: true,
    state: {
        info: {
            first_name: 'Ama',
            last_name: 'Frank'
        }
    },
    getters:{
        fullName(state){
            return `${state.info.first_name} ${state.info.last_name}`
        }
    },
    mutations: {},
    actions: {
        signup({}, payload){
            Vue.$Loading.start()
            Vue.$auth.createUserWithEmailAndPassword(payload.email, payload.password).then((msg)=>{
                Vue.$Message.success({
                    content: 'account succefully created', 
                    duration: 3
                })
                setTimeout(()=>{
                    Vue.$router.push({name: 'App'})
                }, 3000)
                this
                Vue.$Loading.finish()
            }).catch((error)=>{
                Vue.$Message.error({
                    content: error.message,
                    duration: 3
                })
                Vue.$Loading.error()
            })
        }
    }
}