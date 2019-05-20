import { ABI, address } from './constants/manager'
import Web3 from 'web3'

export const getContract = new Promise((resolve, reject) => {
    let web3 = new Web3(window.web3.currentProvider)
    // let web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.43.50:8545'))
    // console.log(web3)
    let contractInstance = new web3.eth.Contract(ABI, address)
    resolve(contractInstance)
})
