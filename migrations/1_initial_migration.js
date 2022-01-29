const DAresToken = artifacts.require("DAresToken");
var warTokenAddress = '0x809Efde6011DD5D641394f03f3F260B43D083a32'
module.exports = function (deployer) {
  deployer.deploy(DAresToken,warTokenAddress);
};


// const WarToken = artifacts.require("WarToken");
// module.exports = function (deployer) {
//   deployer.deploy(WarToken);
// };
