/**
 * Benjamin Thatcher
 * December 2024
 * 
 * Generates a new solana keypair randomly.
 */

import { Keypair } from "@solana/web3.js";

function main() {
    const new_keypair = Keypair.generate()

    console.log(`New keypair: ${new_keypair.publicKey.toBase58()}`);
    console.log(`Secret key:`);
    console.log(new_keypair.secretKey);
}

main()