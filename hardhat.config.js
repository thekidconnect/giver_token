require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `${process.env.ALCHEMY_SEPOLIA_URL}`,
      accounts: [`0x${process.env.SEPOLIA_PRIVATE_KEY}`],
    } 

    , mainnet: {
      url: `${process.env.ALCHEMY_MAINNET_URL}`,
      accounts: [`0x${process.env.MAINNET_PRIVATE_KEY}`],
    } 

  }
};