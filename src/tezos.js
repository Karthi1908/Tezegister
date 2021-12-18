import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';

// Update CONTRACT_ADDRESS and other constants below as required
const DAPP_NAME = "Tezegister"
const RPC_URL = " https://hangzhounet.api.tez.ie";
const NETWORK = "hangzhounet"
const CONTRACT_ADDRESS = "KT1Vx3pf9SarzJ7TfGpnUypmXuN8iAcaa5dW"

// Initialize TezosToolkit
const Tezos = new TezosToolkit(RPC_URL);

// Initialize BeaconWallet
const wallet = new BeaconWallet({
		name : DAPP_NAME,
		preferredNetwork: NETWORK,
		colorMode: 'light'
		});

// Setting the wallet as the wallet provider for Taquito.

Tezos.setWalletProvider(wallet)

const network = {
    type: NETWORK,
    rpcUrl: RPC_URL
};


// Create getActiveAccount function to connect with wallet
const getActiveAccount = async () => {
	const activeAccount = await wallet.client.getActiveAccount();
	
	//no active account get permission first
	if (!activeAccount) {
		await wallet.requestPermissions({ network });
		return getActiveAccount();
	}
	return activeAccount;
};

// Create clearActiveAccount function to disconnect the wallet
const clearActiveAccount = async () => {
	return wallet.client.clearActiveAccount();
}
// Fetching contract
const getContract = async () => {
	return Tezos.wallet.at(CONTRACT_ADDRESS);
}

// Fetching Contract's storage
const getContractStorage = async () => {
	return (await getContract()).storage();
}

export {
    Tezos,
    wallet,
    getActiveAccount,
    clearActiveAccount,
    getContract,
    getContractStorage
};
