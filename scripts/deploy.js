// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log(
  //   `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );

  const nftContractFactory = await hre.ethers.getContractFactory("Nft"); // get the contract
  const nftContract = await nftContractFactory.deploy(); // deploy --> convert to computer language
  await nftContract.deployed(); // wait for it to deploy
  console.log("Contract deployed to:", nftContract.address);

  // let txn = await nftContract.createNft(); // mint the nft
  // await txn.wait(); // wait for the mint

  // txn = await nftContract.createNft(); // mint another nft (we set 2 as the max supply, can't mint more)
  // await txn.wait(); // wait for the mint
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
