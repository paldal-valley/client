import { getWeb3, pollWeb3 } from "../utils/getWeb3"
import getContract from "../utils/getContract"

export const strict = false

export const state = () => ({
  web3: {
    web3Instance: null,
    networkId: null,
    coinbase: null,
    balance: null,
    doatBalance: null,
  },
  contractInstance: null,
  isIntervalExist: false,
})

export const getters = {
  WEB3_META: state => state.web3,
  CONTRACT_METHODS: state => state.contractInstance().methods
}

export const mutations = {
  SET_WEB3_META (state, payload) {
    state.web3 = {
      web3Instance: payload.web3,
      networkId: payload.networkId,
      balance: Number(payload.balance),
      coinbase: payload.coinbase,
    }
    pollWeb3(state)
  },
  SET_CONTRACT_INSTANCE (state, payload) {
    const { contractInstance, doatBalance } = payload
    state.web3.doatBalance = doatBalance
    state.contractInstance = () => contractInstance
  }
}

export const actions = {
  async FETCH_WEB3({ commit, state }) {
    try {
      let result = await getWeb3()
      commit('SET_WEB3_META', result)
    } catch (err) {
      pollWeb3(state)
    }
  },
  async FETCH_CONTRACT_INSTANCE({ commit, state }) {
    // const web3 = new Web3(window.web3.currentProvider)

    try {
      const contractInstance = await getContract()
      const doatBalance = await contractInstance.methods.balanceOf(state.web3.coinbase).call()

      commit('SET_CONTRACT_INSTANCE', {
        contractInstance,
        doatBalance: doatBalance / Math.pow(10, 18)
      })
    } catch (err) {
      throw console.error('Error in action FETCH_CONTRACT_INSTANCE', err)
    }
  }
}
