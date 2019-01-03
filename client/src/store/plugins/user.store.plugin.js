export default store => {
    store.subscribe((mutation, state) => {
        if(mutation.type == 'user/setUser')
            localStorage.setItem(mutation.type, mutation.payload)
    })
}