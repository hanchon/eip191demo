import { keccak256, splitSignature } from "ethers/lib/utils";
import { useState } from "react";
import Web3 from "web3";
import { sleep } from "../verifyTx";

const Eip191 = () => {
  const ABI = JSON.parse(
    '[{"inputs":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"bytes32","name":"hash","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"isValid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"recoverAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"}]'
  );
  const BYTECOE =
    "608060405234801561001057600080fd5b50610515806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631552a3691461003b5780638428cf831461006b575b600080fd5b61005560048036038101906100509190610277565b61009b565b604051610062919061030d565b60405180910390f35b61008560048036038101906100809190610328565b6100e2565b604051610092919061039e565b60405180910390f35b60008573ffffffffffffffffffffffffffffffffffffffff166100c0868686866100e2565b73ffffffffffffffffffffffffffffffffffffffff1614905095945050505050565b6000806040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250905060008187604051602001610132929190610454565b6040516020818303038152906040528051906020012090506001818787876040516000815260200160405260405161016d949392919061049a565b6020604051602081039080840390855afa15801561018f573d6000803e3d6000fd5b5050506020604051035192505050949350505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101d5826101aa565b9050919050565b6101e5816101ca565b81146101f057600080fd5b50565b600081359050610202816101dc565b92915050565b6000819050919050565b61021b81610208565b811461022657600080fd5b50565b60008135905061023881610212565b92915050565b600060ff82169050919050565b6102548161023e565b811461025f57600080fd5b50565b6000813590506102718161024b565b92915050565b600080600080600060a08688031215610293576102926101a5565b5b60006102a1888289016101f3565b95505060206102b288828901610229565b94505060406102c388828901610262565b93505060606102d488828901610229565b92505060806102e588828901610229565b9150509295509295909350565b60008115159050919050565b610307816102f2565b82525050565b600060208201905061032260008301846102fe565b92915050565b60008060008060808587031215610342576103416101a5565b5b600061035087828801610229565b945050602061036187828801610262565b935050604061037287828801610229565b925050606061038387828801610229565b91505092959194509250565b610398816101ca565b82525050565b60006020820190506103b3600083018461038f565b92915050565b600081519050919050565b600081905092915050565b60005b838110156103ed5780820151818401526020810190506103d2565b838111156103fc576000848401525b50505050565b600061040d826103b9565b61041781856103c4565b93506104278185602086016103cf565b80840191505092915050565b6000819050919050565b61044e61044982610208565b610433565b82525050565b60006104608285610402565b915061046c828461043d565b6020820191508190509392505050565b61048581610208565b82525050565b6104948161023e565b82525050565b60006080820190506104af600083018761047c565b6104bc602083018661048b565b6104c9604083018561047c565b6104d6606083018461047c565b9594505050505056fea26469706673582212204ec9f88da43a1ea86968beaf7cb6db9c486805a78ea2b3e78edb2f366efad45064736f6c634300080d0033";

  const [txHash, setTxHash] = useState("");
  const [contractHash, setContractHash] = useState("");

  const [s, setS] = useState("");
  const [r, setR] = useState("");
  const [v, setV] = useState<number>();
  const [hashMessage, setHashMessage] = useState(
    keccak256(Buffer.from("test", "utf-8"))
  );

  const [contractResponse, setContractResponse] = useState("");

  const provider = new Web3("http://localhost:8545");
  const counter = new provider.eth.Contract(ABI);
  return (
    <>
      <h2 className="text-2xl font-bold">Eip191 Contract</h2>
      <button
        className="border-2 p-2 rounded-md"
        onClick={async () => {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          const counterDeploy = counter.deploy({
            data: BYTECOE,
            arguments: [],
          });
          console.log(accounts[0]);
          const params = [
            {
              from: accounts[0],
              gas: "0x76c00",
              gasPrice: "0x9184e72a000",
              value: "0x0",
              data: counterDeploy.encodeABI(),
            },
          ];
          console.log(params);

          const txHashGenerated = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: params,
          });

          setTxHash(txHashGenerated);

          // Wait for the tx to be included in a block
          setContractHash("Waiting 6 seconds for the tx to be in a block");
          await sleep(6000);

          const receipt = await provider.eth.getTransactionReceipt(
            txHashGenerated
          );

          setContractHash(
            receipt.contractAddress ? receipt.contractAddress : ""
          );
        }}
      >
        Deploy a signature validator contract
      </button>

      <p>Deployed TxHash = {txHash}</p>
      <p>Deployed Contract = {contractHash}</p>

      <button
        className="border-2 p-2 rounded-md"
        onClick={async () => {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          const params = [accounts[0], hashMessage];
          console.log(params);

          const signature = await window.ethereum.request({
            method: "personal_sign",
            params: params,
          });

          const sig = splitSignature(signature);
          setS(sig.s);
          setR(sig.r);
          setV(sig.v);
        }}
      >
        Sign a EIP191 message
      </button>
      <p>Hashed Message = {hashMessage}</p>
      <p>R = {r}</p>
      <p>S = {s}</p>
      <p>V = {v}</p>

      <button
        className="border-2 p-2 rounded-md"
        onClick={async () => {
          if (contractHash === "") {
            alert("Deploy the EIP191 contract first!");
            return;
          }
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          const myContract = new provider.eth.Contract(ABI, contractHash);
          const data = await myContract.methods
            .isValid(
              accounts[0],
              hashMessage,
              v,
              Buffer.from(r.slice(2), "hex"),
              Buffer.from(s.slice(2), "hex")
            )
            .call({ from: accounts[0] });
          console.log(data);
          setContractResponse(
            data === true ? "Signature is correct" : "Signature is not correct!"
          );
        }}
      >
        Validate using contract
      </button>
      <p>Response = {contractResponse}</p>
    </>
  );
};

export default Eip191;
