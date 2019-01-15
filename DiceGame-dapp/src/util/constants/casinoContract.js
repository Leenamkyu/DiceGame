const address = '0x45dbaa8a5ad12fcebbacb0d44437b7d4aaf14d6b';
const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "bet",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_minBet",
				"type": "uint256"
			},
			{
				"name": "_houseEdge",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "userWin",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "rewards",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "winningNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "bettingNumber",
				"type": "uint256"
			}
		],
		"name": "bettingResult",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_myContract",
				"type": "address"
			}
		],
		"name": "checkContractBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export {address, ABI};
