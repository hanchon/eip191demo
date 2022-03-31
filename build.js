const path = require("path");
const fs = require("fs");
const solc = require("solc");
// Compile contract
const contractPath = path.resolve(__dirname, "src/blockchain/eip191.sol");
const source = fs.readFileSync(contractPath, "utf8");
const input = {
  language: "Solidity",
  sources: {
    "eip191.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
const tempFile = JSON.parse(solc.compile(JSON.stringify(input)));
const contractFile = tempFile.contracts["eip191.sol"]["SignatureVerifier"];
console.log(JSON.stringify(contractFile.abi));
console.log(JSON.stringify(contractFile.evm.bytecode.object));
