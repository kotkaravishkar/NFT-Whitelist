const {ethers} = require("hardhat")


async function main() {
  const whitelistContrct = await ethers.getContractFactory("Whitelist");

  const deployedWhitelistContract = await whitelistContrct.deploy(10);

  await deployedWhitelistContract.deployed();

  console.log("Whitelist Contract Address", deployedWhitelistContract.address);

}

main()
  .then(()=> process.exit(0))
  .catch((error)=> {
    console.error(error);
    process.exit(1);
  });

  //0x6f97bb1812E7250B0863Ad56898bE06FD2Cf45d3