﻿# Solana tools

## Intro
I'm just learning about interacting with the solana blockchain via code and wanted
a place to record what I get up too. You probably won't find anything too groundbreaking 
or complicated here, but that's not really the point. I'm using javascript/typescript
for now and using the public RPCs provided by Solana Labs.

## Some basic actions
- new_keypair.ts: Creates a new keypair, prints the public key, and writes the private key to an output file.
- new_keypair_special.ts: Does the same as new_keypair.ts, but filters for keypairs that start or end with a certain character sequence. This might take a while if you're looking for a long string.
- get_balance.ts: Gets the balance of a solana accont.
- send_sol.ts: Sends sol from one account to another.

## Some slightly more complicated actions
