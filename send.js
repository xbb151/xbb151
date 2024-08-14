import Web3 from 'web3';

// 替换为你的节点URL
const providerUrl = '173.249.31.146:8545';

// 创建Web3实例
const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

// 设置交易数据
const txData = {
    from: '0xdf15d6a8b725dd8a22e824b688686bbead6be49b', // 替换为你的地址
    to: '0xdf15d6a8b725dd8a22e824b688686bbead6be49b', // 替换为接收方地址
    value: web3.utils.toWei('0.1', 'ether') // 发送金额，单位为 ether
};

// 私钥，用于签名交易
const privateKey = 'E9CE65982475BB51E7C731E3A50C8C496A3A16F8D61B25883A4F25C3C726129A'; // 替换为你的私钥

async function signAndSendTransaction() {
    try {
        // 获取当前的 gas 价格
        const gasPrice = await web3.eth.getGasPrice();
        
        // 估算交易所需的 gas 量
        const estimatedGas = await web3.eth.estimateGas(txData);
        
        // 设置交易数据中的 gas 和 gasPrice
        txData.gas = estimatedGas;
        txData.gasPrice = gasPrice;

        // 签名交易
        const signedTx = await web3.eth.accounts.signTransaction(txData, privateKey);
        
        // 发送已签名的交易并获取回执
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        
        // 打印交易回执
        console.log('Transaction receipt:', receipt);
    } catch (error) {
        console.error('Error signing or sending transaction:', error);
    }
}

// 每6秒执行一次交易
setInterval(signAndSendTransaction, 6000);
