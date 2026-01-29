import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ignition";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    polkadotTestnet: {
      type: "http", // 👈 required in Hardhat 3.x
      url: "https://services.polkadothub-rpc.com/testnet",
      chainId: 420420417,
      accounts: [process.env.POLKADOT_TESTNET_PRIVATE_KEY!],
    },
  },
};

export default config;
