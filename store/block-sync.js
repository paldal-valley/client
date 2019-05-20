import {getWeb3, pollWeb3} from "../utils/getWeb3";
import {getContract} from "../utils/getContract";

export const strict = false

export const state = () => ({
    web3: {
        web3Instance: null,
        networkID: null,
        coinbase: null,
        balance: null
    },
    contractInstance: null
})

export const getters = {
    contractMethods: state => state.contractInstance().methods
}

export const mutations = {
    setWeb3Meta (state, payload) {
        let web3Copy = state.web3
        web3Copy.web3Instance = payload.web3
        web3Copy.networkID = payload.networkID
        web3Copy.coinbase = payload.coinbase
        web3Copy.balance = parseInt(payload.balance, 10)
        state.web3 = web3Copy
        pollWeb3(state)
    },
    setContractInstance (state, payload) {
        state.contractInstance = () => payload
    }
}

export const actions = {
    async checkWeb3({ commit, state }) {
        try {
            let result = await getWeb3()
            commit('setWeb3Meta', result)
        } catch (err) {
            pollWeb3(state)
        }
    },
    async getContractInstance({ commit }) {
        try {
            let result = await getContract
            commit('setContractInstance', result)
        } catch (err) {
            throw console.error('Error in action getContractInstance', err)
        }
    }
}