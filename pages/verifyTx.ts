import { ethers } from 'ethers'
import { AccessList } from "ethers/lib/utils"


export async function verifyEIP191(rawTx: any, address: string, setEIP191: any) {
    if (address === '') {
        alert('Click on connect, we need the address to validate the type of signature!')
        return
    }
    if (rawTx === '') {
        alert('Send and wait for the contract to be mined!')
        return
    }

    let tx: ethers.utils.UnsignedTransaction = {
        type: 2,
        accessList: rawTx.accessList as AccessList,
        nonce: rawTx.nonce as number,
        gasLimit: rawTx.gas as number,
        maxPriorityFeePerGas: parseInt(rawTx.maxFeePerGas as string),
        maxFeePerGas: parseInt(rawTx.maxPriorityFeePerGas as string),
        data: new Uint8Array(Buffer.from(rawTx.input.slice(2), 'hex')),
        chainId: Number(rawTx.chainId)
    }

    // Read the signature from the proto message
    let signature = {
        r: rawTx.r,
        s: rawTx.s,
        v: Number(rawTx.v),
    }
    let ethersTx = ethers.utils.serializeTransaction(tx)
    // Generate the payload that was signed
    let toSign = ethers.utils.keccak256(Buffer.from(ethersTx.slice(2), 'hex'))

    // Recover the address
    const generatedAddress = ethers.utils.recoverAddress(Buffer.from(toSign.slice(2), 'hex'), signature);
    // If the recovered address is the same as the one provided is because it's not using eip191
    // The payload signed is just the keccak256 from the serialized transaction without any prefix included
    address.toLowerCase() === generatedAddress.toLowerCase() ? setEIP191('No') : setEIP191('Probably')
}

// import { bytesToDynamicFeeTx, bytesToMsgEthereumTx, bytesToTxBody, bytesToTxRaw } from "@tharsis/proto"
// Note: Using the ETHERMINT hash we can also validate it

// const blockchainTx = "CqUGCvEFCh8vZXRoZXJtaW50LmV2bS52MS5Nc2dFdGhlcmV1bVR4Es0FCv0ECh4vZXRoZXJtaW50LmV2bS52MS5EeW5hbWljRmVlVHgS2gQKBDkwMDAQFRoOMTAwMDAwMDAwMDAwMDAiDjEwMDAwMDAwMDAwMDAwKIDYHToBMELhA2CAYEBSYACAVTSAFWEAFFdgAID9W1BhAb2AYQAkYAA5YADz/mCAYEBSNIAVYQAQV2AAgP1bUGAENhBhAEFXYAA1YOAcgGNPK+kfFGEARleAY23uuuMUYQBQV4BjitoGbhRhAFpXW2AAgP1bYQBOYQB4VlsAW2EAWGEAkVZbAFthAGJhAKpWW2BAUWEAb5GQYQDMVltgQFGAkQOQ81tgAICBVICSkZBhAIqQYQEWVluRkFBVUFZbYACAgVSAkpGQYQCjkGEBXlZbkZBQVVBWW2AAgFSQUJBWW2AAgZBQkZBQVlthAMaBYQCzVluCUlBQVltgAGAgggGQUGEA4WAAgwGEYQC9VluSkVBQVlt/Tkh7cQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAFJgEWAEUmAkYAD9W2AAYQEhgmEAs1ZbkVB///////////////////////////////////////////+CA2EBU1dhAVJhAOdWW1tgAYIBkFCRkFBWW2AAYQFpgmEAs1ZbkVBgAIIDYQF8V2EBe2EA51ZbW2ABggOQUJGQUFb+omRpcGZzWCISILmhRH/LJE/0ppvKduX44h1n0EhgTUEIprWe/dCdLkLOZHNvbGNDAAgNADNSAQFaINv/zOPl0+vS79q9+dBhaDPr/d04egVSpzmVKZ+Urx3lYiBCxJIQ3qqRanbw1vauZjDNsHDBrVGfBPLo1pUY4gxYUREAAAAAACCCQBpCMHhhZGRhYzg2MTI0YmI2NjFlYzQ0MWUxMDcxODJiYmY0ODhmYWQ5ZDhiYmMyYzNmNjFlMDczYWJjMGQ5YThlYWFk+j8uCiwvZXRoZXJtaW50LmV2bS52MS5FeHRlbnNpb25PcHRpb25zRXRoZXJldW1UeBIlEiMKHQoGYWV2bW9zEhM0ODY0MDAwMDAwMDAwMDAwMDAwEIDYHQ=="
// const txRawProto = bytesToTxRaw(Buffer.from(blockchainTx, 'base64'))
// const bodyProto = bytesToTxBody(txRawProto.body_bytes)
// const bodyProtoMessages = bodyProto.messages as any
// const msgEthereumTxProto = bytesToMsgEthereumTx(
//     bodyProtoMessages[0].value as Uint8Array,
// )
// const msgEthTx = msgEthereumTxProto.toObject()
// const ethTx = bytesToDynamicFeeTx(msgEthTx.data?.value as Uint8Array).toObject()
// console.log(ethTx)

// Create the legacy transaction
// let tx: ethers.utils.UnsignedTransaction = {
//     type: 2,
//     accessList: ethTx.accesses as AccessList,
//     nonce: ethTx.nonce as number,
//     gasLimit: ethTx.gas as number,
//     maxPriorityFeePerGas: parseInt(ethTx.gas_fee_cap as string),
//     maxFeePerGas: parseInt(ethTx.gas_fee_cap as string),
//     data: ethTx.data as Uint8Array,
//     chainId: 9000 // CRO Chain ID
// }
// // Read the signature from the proto message
// let signature = {
//     r: `0x${Buffer.from(ethTx.r as Uint8Array).toString('hex')}`,
//     s: `0x${Buffer.from(ethTx.s as Uint8Array).toString('hex')}`,
//     v: (ethTx.v as Uint8Array)[0],
// }