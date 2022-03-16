require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const alchemyUrl = process.env.ALCHEMY_URL;

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      forking: {
        url: alchemyUrl,
        blockNumber: 4043801
      }
    }
  }
};
