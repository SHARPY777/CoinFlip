import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL, SystemProgram,Keypair, Transaction } from '@solana/web3.js';
import { connection } from './solanaConfig';

// Function to connect wallet
export const connectWallet = async () => {
    if (typeof window !== "undefined" && window.solana && window.solana.isPhantom) {
      try {
        const response = await window.solana.connect();
        console.log('Connected to wallet:', response.publicKey.toString());
        return response.publicKey.toString();
      } catch (err) {
        console.error("Connection failed:", err);
      }
    } else {
      alert("Phantom wallet not found! Please install the Phantom wallet extension.");
    }
  };
  // solanaConfig.js
  export const flipCoin = async (publicKey, amount, side) => {
    try {
      // Ensure the Phantom wallet is available
      if (!window.solana || !window.solana.isPhantom) {
        throw new Error('Phantom wallet not found');
      }
  
      const provider = window.solana; // Phantom wallet provider
  
      // Connect to wallet
      await provider.connect();
      const walletPublicKey = provider.publicKey;
  
      // Fetch the latest blockhash
      const { blockhash } = await connection.getLatestBlockhash();
  
      // Create a new transaction
      const transaction = new Transaction({
        recentBlockhash: blockhash,
        feePayer: walletPublicKey
      }).add(
        SystemProgram.transfer({
          fromPubkey: walletPublicKey,
          toPubkey: new PublicKey(publicKey), // Replace with the actual recipient's public key
          lamports: amount * LAMPORTS_PER_SOL / 100, // Adjust amount as necessary
        })
      );
  
      // Sign the transaction
      let signedTransaction;
      try {
        signedTransaction = await provider.signTransaction(transaction);
        if (!signedTransaction || !signedTransaction.signature) {
          throw new Error('Transaction is not signed properly');
        }
      } catch (signError) {
        console.error("Signing failed:", signError);
        throw new Error('Transaction signing failed');
      }
  
      // Send the transaction
      const signature = await connection.sendTransaction(signedTransaction, [], { skipPreflight: false });
      console.log(`Transaction signature: ${signature}`);
  
      // Confirm the transaction
      await connection.confirmTransaction(signature, 'confirmed');
      console.log('Transaction confirmed.');
  
      // Determine win/lose for testing purposes
      const result = Math.random() > 0.5 ? 'heads' : 'tails';
      return result === side ? 'win' : 'lose';
    } catch (error) {
      console.error("Transaction failed:", error);
      return 'error';
    }
  };