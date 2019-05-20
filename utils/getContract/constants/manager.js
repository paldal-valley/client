// import truffleJSON from '../../../../../truffle/build/contracts/DietManager'

// const networks = truffleJSON.networks
// const keys = Object.keys(networks)
// const lastIdxOfKeys = keys.length - 1

// const ABI = truffleJSON.abi
const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_useraddress",
				"type": "address"
			}
		],
		"name": "createListing",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_tokenAddr",
				"type": "address"
			}
		],
		"name": "setTokenAddr",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_tokenAddr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "listings",
		"outputs": [
			{
				"name": "seller",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
// const address = networks['4649'].address
// const address = networks[keys[lastIdxOfKeys]].address
const address = "0xf2c125bf0d9a3b4af06a26c774dfc55be92ccaba"
export { ABI, address }
