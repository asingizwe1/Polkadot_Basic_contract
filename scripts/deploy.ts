// scripts/deploy.ts
const { ignition } = require("@nomicfoundation/hardhat-ignition");

async function main() {
  const deployment = await ignition.deploy("ignition/modules/Storage.ts");
  console.log("Deployment complete:", deployment);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
