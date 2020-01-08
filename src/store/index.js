/* eslint-disable no-console */
import Vue from 'vue'

const state = {
    device: {},
    params: {},
    info: {},
    package: {},
    sequence: {},
    frequence: {}
}

const getters = {
    getDevice: (state) => {
        return state.device
    },
    getInfo: (state) => {
        return state.info
    },
    getPackage: (state) => {
        return state.package
    },
    getSequence: (state) => {
        return state.sequence
    },
    getFrequence: (state) => {
        return state.frequence
    }
}

const mutations = {
    resetParam (state) {
        state.param = {}
    },
    updateParam (state, {key, value}) {
        state.params[key] = value
    },
    updateDevice (state, payload) {
        state.device = payload
    },
    updateInfo (state, payload) {
        state.info = payload
    },
    updatePackage (state, payload) {
        state.package = payload
    },
    updateSequence (state, payload) {
        state.sequence = payload
    },
    updateFrequence (state, payload) {
        state.frequence = payload
    }
}

const actions = {
    fetchDevice ({commit, state}) {
        Vue.axios.post('/api/deviceInfo', state.params).then((res) => {
            commit('updateDevice', res.data)
        }, (err) => {
            console.error(err)
        })
    },
    addDevice({commit, state}) {
        Vue.axios.post('/api/addDevice', state.params).then((res) => {
            commit('updateInfo', res.data)
        }, (err) => {
            console.error(err)
        })
    },
    fetchPackage ({commit, state}) {
        Vue.axios.post('/api/updatePackage', state.params).then((res) => {
            commit('updatePackage', res.data)
        }, (err) => {
            console.error(err)
        }) 
    },
    fetchSequence ({commit, state}) {
        Vue.axios.post('/api/updateSequence', state.params).then((res) => {
            commit('updateSequence', res.data)
        }, (err) => {
            console.log(err)
        })
    },
    fetchFrequence ({commit, state}) {
        Vue.axios.post('/api/updateFrequence', state.params).then((res) => {
            commit('updateFrequence', res.data)
        }, (err) => {
            console.log(err)
        })
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}