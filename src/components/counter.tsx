import { ethToEvmos } from "@tharsis/address-converter";
import { useState } from "react";
import Web3 from "web3";
import { sleep, verifyEIP191 } from "../verifyTx";

const Counter = () => {
  const ABI = JSON.parse(
    '[{"inputs":[],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"subtract","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
  );
  const BYTECOE =
    "60806040526000805534801561001457600080fd5b506101bd806100246000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634f2be91f146100465780636deebae3146100505780638ada066e1461005a575b600080fd5b61004e610078565b005b610058610091565b005b6100626100aa565b60405161006f91906100cc565b60405180910390f35b60008081548092919061008a90610116565b9190505550565b6000808154809291906100a39061015e565b9190505550565b60008054905090565b6000819050919050565b6100c6816100b3565b82525050565b60006020820190506100e160008301846100bd565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610121826100b3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610153576101526100e7565b5b600182019050919050565b6000610169826100b3565b91506000820361017c5761017b6100e7565b5b60018203905091905056fea2646970667358221220b9a1447fcb244ff4a69bca76e5f8e21d67d048604d4108a6b59efdd09d2e42ce64736f6c634300080d0033";

  const [txHash, setTxHash] = useState("");
  const [addTxHash, setAddTxHash] = useState("");
  const [contractHash, setContractHash] = useState("");
  const [connectedWallet, setConnectedWallet] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [addLogs, setAddLogs] = useState("");
  const [eip191Sig, setEip191Sig] = useState("?");

  const provider = new Web3("http://localhost:8545");
  const counter = new provider.eth.Contract(ABI);

  async function verifyTransaction(txHash: string) {
    const tx = await provider.eth.getTransaction(txHash);
    verifyEIP191(tx, connectedWallet, setEip191Sig);
  }
  return (
    <>
      <button
        className="border-2 p-2 rounded-md"
        onClick={async () => {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setConnectedWallet(accounts[0]);
        }}
      >
        Connect Wallet
      </button>
      <p>
        Connected Wallet = {connectedWallet} ({ethToEvmos(connectedWallet)})
      </p>
      <button
        className="border-2 p-2 rounded-md"
        onClick={async () => {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          const counterDeploy = counter.deploy({
            data: BYTECOE,
            arguments: [5],
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
        Deploy
      </button>

      <p>Deployed TxHash = {txHash}</p>
      <p>Deployed Contract = {contractHash}</p>

      <button
        className="border-2 p-2 rounded-md"
        onClick={async () => {
          verifyTransaction(txHash);
        }}
      >
        Is contract creation EIP191?
      </button>

      <p>Is EIP191 signature = {eip191Sig}</p>

      <button
        className="border-2 p-2 rounded-md"
        onClick={async () => {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          const params = [
            {
              from: accounts[0],
              to: contractHash,
              gas: "0x76c00",
              gasPrice: "0x9184e72a000",
              value: "0x0",
              data: counter.methods.add().encodeABI(),
            },
          ];
          console.log(params);

          const txHashGenerated = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: params,
          });

          setAddTxHash(txHashGenerated);
          setAddLogs("Waiting 6 seconds for the tx to be in a block");
          await sleep(6000);

          const receipt = await provider.eth.getTransactionReceipt(
            txHashGenerated
          );
          console.log(receipt);
          setAddLogs(JSON.stringify(receipt));
        }}
      >
        Add 1
      </button>

      <p>Add TxHash = {addTxHash}</p>
      <p>Add tx logs = {addLogs}</p>

      <button
        className="border-2 p-2 rounded-md"
        onClick={async () => {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const myContract = new provider.eth.Contract(ABI, contractHash);
          const data = await myContract.methods
            .getCounter()
            .call({ from: accounts[0] });
          console.log(data);
          setCurrentValue(data);
        }}
      >
        Query counter amount
      </button>

      <p>Counter amount = {currentValue}</p>
    </>
  );
};

export default Counter;
