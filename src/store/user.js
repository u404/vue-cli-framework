const state = {
    token: '',
    name: '',
    avatar: ''
}

const getters = {

}

const mutations = {
    update(state, data){
        state.token = data.token || state.token;
        state.name = data.name || state.name;
        state.avatar = data.avatar || state.avatar;
    },
}

const actions = {
    
}

const modules = {

} 

export default {
    state,
    getters,
    mutations,
    actions,
    modules
}
