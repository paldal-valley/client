import { ABI, address } from './constants'
import Web3 from 'web3'

export default () => {
  return new Promise((resolve, reject)=> {
    const web3 = new Web3(window.web3.currentProvider)
    if (typeof web3 === 'undefined')
      reject(Error('Cannot get web3 instance'))

    const contractInstance = new web3.eth.Contract(ABI, address)
    if (typeof contractInstance === 'undefined')
      reject(Error('Cannot get contract instance'))

    resolve(contractInstance)
  })
}
