import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

export default buildModule('StorageModule', (m) => {
    const storage = m.contract('Storage');
    return { storage };
});
//npx hardhat run ignition/modules/Storage.ts --network polkadotTestnet

//Hardhat Ignition is the new deployment system built into Hardhat. Instead of writing ad‑hoc deployment scripts, you define deployment modules that describe what contracts to deploy and how. Ignition then handles the deployment process, tracks state, and makes it reproducible.