require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_PRIVATE_KEY =
  "e9dff2b7fbcdb3e07aa804f23e7846ce8738a990f4ed0969b70d7e2b94980c78";

const ALCHEMY_API_KEY = "dhHjxAMxStGt9HphqiODJ1sy3GocDRai";

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: "S7FVJPZKYC6MD8A2Z9FKZZ622Y82XX63TR",
    },
  },
};
