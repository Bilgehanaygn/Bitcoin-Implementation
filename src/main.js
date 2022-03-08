const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('f9d53750f939aa1728bd6f9e147655bcb9ba0f7f21621d9d69ee88b98c98be30')
const myWalletAddress = myKey.getPublic('hex')

const secondUsersAddress = '0419d5d843b98fe9cce3f8fca2b92ea4afda01d39a2826bffc5dfccfdfd6c39e457c55bc835b34aacc705e7b298df7a821f95d42837b0b2a4d8447c82cac951413'

let myRandomCoin = new Blockchain();


const tx1 = new Transaction(myWalletAddress, secondUsersAddress, 10);
tx1.signTransaction(myKey);
myRandomCoin.addTransaction(tx1);

console.log(myRandomCoin.isChainValid());

console.log("Starting the miner");
myRandomCoin.minePendingTransactions(myWalletAddress);



console.log(myRandomCoin.isChainValid());

