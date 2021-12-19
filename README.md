# Tezegister

Trust Registry on Tezos


### Smart Contracts:

Tezegister : https://smartpy.io/explorer.html?address=KT1Vx3pf9SarzJ7TfGpnUypmXuN8iAcaa5dW

Trust Token Contract: https://smartpy.io/explorer.html?address=KT1HthyHF7NfS6tWAtnkpoCp47bQBGtkcMCP

Mistrust Token Contract: https://smartpy.io/explorer.html?address=KT1VT8vnPcfTP5L2MQNoZLZfHJ4ZtjoFoBq4



### Introduction:

Self-sovereign identity (SSI) is an approach to digital identity that gives individuals control of their digital identities. For an identity system to be self-sovereign, users control the verifiable credentials that they hold and their consent is required to use those credentials. Decentralized Identifiers (DID) play an important role in the SSI system as it is used to identify the person uniquely. In a decentralized ecosystem such as tezos ecosystem, the wallets can act as the DID. The problem with wallets is that one can create multiple wallet addresses at almost zero cost. This hinders the prospect of wallet being used as a unique identifier from a  simple airdrop, whitelisting to complex Universal Basic Income schemes, community voting as the service providers cannot be sure that each wallet belongs to a distinct individual. The solution lies in creating a curated list of distinct identities.



### Tezos Curated Registry

Token-curated registries are decentrally-curated lists with intrinsic economic incentives for token holders to curate the list’s contents judiciously. - Mike Goldin

So the economic incentives are needed to be aligned so that the list is curated for high-quality content. In our case of decentralise registry , the incentives need to be aligned so that the registry contains only the wallet address of distinct humans and not the sybil addresses of the same human. The entry to the registry need to be strict and can only be done by playing the (Squid) Game. Here the game players act as the gatekeepers for the registry as their staked amount depends on it. As a decentralised 


### The Game

The Tezegister Game is a social game that has two phases.

###### Recruiting Phase :

 1. Covener creates a game, and sets surety amount in Tez, holding period and minimum group size.

 2. Tezegister Games are invite-only games. So an existing member needs to refer the new members to take part in the game.

 3. All the members joining the game should pay the surety amount. Surety amount goes into the game's treasury.

 4. The members need to verify each other using any means such as discord/telegram/WhatsApp chat/call and can determine if they are distinct individuals or not.

 5. A verified members credentials can be challenged by another member of the game.  

 6. If the member is found to be a bot or a duplicate, then their surety amount will be forfeited and they will be removed from the game.

 7. Once the verified members count crosses the minimum threshold, the group can decide to move to the next phase of the game.



###### Holding Phase:


1. In the holding phase, access to the game's treasury, is given to all the game members. ie The members have access to the games fund and if they wish they can steal it.

2. The amount, a member can steal, which is decided at the start of the Game can vary from 20% to 100%.

3. If a member chooses to steal, along with the looted money in tezos , an NTT(Non-Transferable Token) will also be sent to the wallet to mark it as UNTRUSTWORTHY.

4. If no member chooses to steal till the end of the holding phase, the game is considered to end successfully. 

5. The members of the successful games are provided with the option to mint Trust token ( NTT) and register with Tezegister.  


### Salient features

The game is completely coded into a smart contract and its non-core feature are completely flexible.

The game introduces the NTT (Non-Transferable Tokens ) ie tokens that are attached to the wallets and cannot be moved to another wallet. The NTT ( Trust and MisTrust Token) acts as a reputation filter to let the wallet holder to participate in other games. 

The game as such doesn't specify the verification method which lets people choose their convenient method. This may be one to one interactions or a group interaction which should be the preferred way that may pave way for more team building activities.

Wallet relationships can also be used for graph analysis to identify future Sybil attacks



