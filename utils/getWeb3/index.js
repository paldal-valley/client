import Web3 from 'web3'

export const getWeb3 = async () => {
  const web3 = new Web3(window.web3.currentProvider)
  const coinbase = (await web3.eth.getAccounts())[0]

  const isUserConnected = typeof coinbase !== 'undefined'

  if (isUserConnected) {
    const result = {
      web3: () => web3,
      coinbase
    }

    result.networkId = await result.web3().eth.net.getNetworkType()
      .catch(err => { throw new Error(`Unable to retrieve network ID, log: ${err}`) })

    result.balance = await result.web3().eth.getBalance(result.coinbase)
      .catch(err => { throw new Error(`Unable to retrieve balance for address: ${result.coinbase}, log: ${err}`) })

    return result
  } else {
    throw new Error('Unable to connect to Metamask')
  }
}

export const pollWeb3 = state => {
  const isIntervalExist = state.isIntervalExist

  // interval 여러개 실행 방지
  if (!isIntervalExist) {
    const web3 = new Web3(window.web3.currentProvider)

    setInterval(async () => {
      const coinbase = (await web3.eth.getAccounts())[0]
      state.isIntervalExist = true

      // 1. wallet 정보가 없을 때
      if (typeof coinbase === 'undefined') {
        clearWeb3Instance(state)
        // console.log(state)

      // 2. wallet account(coinbase)가 변경됐을 때
      } else if (state.web3.web3Instance && coinbase !== state.web3.coinbase) {
        try {
          const newCoinbase = coinbase
          const newBalance = await web3.eth.getBalance(newCoinbase)
          const newDoatBalance = await state.contractInstance()
            .methods.balanceOf(newCoinbase).call()

          changeCoinbase(state, {
            coinbase: newCoinbase,
            balance: Number(newBalance),
            doatBalance: newDoatBalance / Math.pow(10, 18)
          })

          window.location.replace('/')
        } catch (err) {
          console.error('error occurred in pollWeb3', err)
          throw err
        }
      // 3. 유저 wallet 정보가 존재할 때
      } else {
        // console.log(state)
        const newDoatBalance = await state.contractInstance()
          .methods.balanceOf(coinbase).call()

        state.web3 = {
          web3Instance: () => web3,
          networkId: await web3.eth.net.getNetworkType(),
          balance: await web3.eth.getBalance(coinbase),
          doatBalance: newDoatBalance / Math.pow(10, 18),
          coinbase,
        }
      }
    }, 2000)
  }
}


const changeCoinbase = (state, payload) => {
  state.web3.coinbase = payload.coinbase
  state.web3.balance = Number(payload.balance)
  state.web3.doatBalance = Number(payload.doatBalance)
}

const clearWeb3Instance = state => {
  state.web3.web3Instance = null
  state.web3.networkID = null
  state.web3.coinbase = null
  state.web3.balance = null
  state.web3.doatBalance = null
}
