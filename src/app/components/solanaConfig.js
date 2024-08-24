// src/solanaConfig.js
import { Connection, clusterApiUrl } from '@solana/web3.js';

const network = 'devnet'; // Or 'mainnet-beta' for production
export const connection = new Connection(clusterApiUrl(network), 'confirmed');
