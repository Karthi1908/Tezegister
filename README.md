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

The Tezegister Game is a social game to prove one's personhood in which one's reputation and trust can be traded for a monetary benefit. People form a group, verify other members of the group, pool in the funds and grant rights to all the members to loot the group pool of funds either fully or partially. The Game comes to an end after the given time period. The group as a whole wins the game if none of the members exercises their rights to loot the funds. The members then get access to mint a Trust token and membership in Tezegister. The group loses even if a member decides to steal the funds.

The Game has two phases.

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

- The game is completely coded into a smart contract and its non-core feature are completely flexible.
- The game introduces the NTT (Non-Transferable Tokens ) ie tokens that are attached to the wallets and cannot be moved to another wallet. The NTT ( Trust and MisTrust Token) acts as a reputation filter to let the wallet holder to participate in other games. 
- The game as such doesn't specify the verification method which lets people choose their convenient method. This may be one to one interactions or a group interaction which should be the preferred way that may pave way for more team building activities.
- Wallet relationships can also be used for graph analysis to identify future Sybil attacks

### Benefits:

1. The Main benefit of Tezegister is a Sybil resistant proof of personhood that will establish one's SSI
2. Trusted wallets as DID in a trustless ecosystem
2. Social Credit Score for uncollateralized lending
3. Proof of personhood help with the governance process of DAOs that implement one person one vote strategy
4. Gain of reputation 

### Inspiration and references:

- Upala https://docs.upala.id/en/latest/explosive-bots.html
- BrightId https://www.brightid.org/about-us
- Humanity Dao https://humanitydao.gitbook.io/humanity/

- https://medium.com/@simondlr/city-walls-bo-taoshi-exploring-the-power-of-token-curated-registries-588f208c17d5
- Sybilproof Reputation Mechanisms http://www.eecs.harvard.edu/cs286r/courses/fall08/files/paper-CheFri.pdf
- Robust Incentive Techniques for Peer-to-Peer Networks http://www.csl.mtu.edu/cs6461/www/Reading/Feldman04.pdf


Screenshots

Registry

![image](https://user-images.githubusercontent.com/33004854/146681457-c95eef80-7eec-4713-86be-78e18bdf7c65.png)

The Game List
![image](https://user-images.githubusercontent.com/33004854/146681473-b27d363b-8771-4b91-a582-74540e194c64.png)

NTTs

- Mistrust token
![image](https://user-images.githubusercontent.com/33004854/146681521-8f724990-d7f4-4928-86a3-052873d5e2d2.png)

Mistrust Token with amount stolen details
![image](https://user-images.githubusercontent.com/33004854/146681552-dc8e4f3f-bf29-488c-82fa-3c81a0eb5bee.png)



- Trust token fromat ( Pot size in tez X Group Size X Holding Days)

![image](https://user-images.githubusercontent.com/33004854/146681635-202741c4-809e-4a21-8376-90123ae6de2a.png)

![image](https://user-images.githubusercontent.com/33004854/146681650-ddb72cea-d061-425d-b119-72a0b30af181.png)

Explorer screenshots.
- Game Details:

 ![image](https://user-images.githubusercontent.com/33004854/146681718-e6b6ef63-5b99-48a4-8c09-9b660b7239fc.png)

- Registry 

![image](https://user-images.githubusercontent.com/33004854/146681754-e43255bd-5b27-4abe-b995-0c0a56167ba6.png)

- Partcipants List

![image](https://user-images.githubusercontent.com/33004854/146681776-ed673a34-d2f2-4d0a-a9cd-6e84a1611476.png)

- Referrals

![image](https://user-images.githubusercontent.com/33004854/146681801-5f02b3df-2df6-4c02-94b2-b282c6089e92.png)






