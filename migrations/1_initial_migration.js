const WarToken = artifacts.require("WarToken");
module.exports = function (deployer) {
  deployer.deploy(WarToken);
};
