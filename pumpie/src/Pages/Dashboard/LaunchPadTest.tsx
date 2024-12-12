import React, { useState , useCallback } from 'react';
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";
import { toNano, Address } from '@ton/core';
import { JettonCore } from '../../../wrappers/jettonCore';
import { buildOnchainMetadata } from '../../../utils/jetton-helpers';
// import { buildOnchainMetadata, createCompactUrl } from '../../../utils/jetton-helpers';

/* export function JettonDeployForm() {
  const [tonConnectUI] = useTonConnectUI();
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleDeploy = async () => {
    try {
      // Check if wallet is connected
      const wallet = tonConnectUI.account;
      if (!wallet) {
        alert('Please connect your TON wallet first');
        return;
      }
  
      // Validate inputs
      if (!tokenName || !tokenSymbol) {
        alert('Token name and symbol are required');
        return;
      }
  
      // Predefined constants
      const Max_Supply = 100000000000000000000n;
      const initial_Price = 10000n;
      const initial_Mint_Amount = 10000000000000n;
      const PoolCore_ADDRESS = "EQCml35ZSm5pCSEFO3aWRlGi0NspQh2jbKed8_w0rbwD9R0O";
      
      // Detailed logging
      console.log('Wallet Address:', wallet.address);
      console.log('Token Name:', tokenName);
      console.log('Token Symbol:', tokenSymbol);
      console.log('Image URL:', imageUrl);
  
      // Prepare jetton parameters
      const jettonParams = {
        name: tokenName,
        description: description,
        symbol: tokenSymbol,
        image: imageUrl || ""
      };
  
      // Validate jetton parameters
      if (!jettonParams.name || !jettonParams.symbol) {
        throw new Error('Token name and symbol are required');
      }
  
      try {
        // Create content Cell
        const content = buildOnchainMetadata(jettonParams);
        console.log('Content Cell Created');
  
        // Parse addresses safely
        const senderAddress = Address.parse(wallet.address);
        const poolCoreAddress = Address.parse(PoolCore_ADDRESS);
  
        // Detailed logging of addresses
        console.log('Sender Address:', senderAddress.toString());
        console.log('Pool Core Address:', poolCoreAddress.toString());
  
        // Initialize Jetton Core contract
        const sampleJetton = await JettonCore.fromInit(
          senderAddress, 
          content, 
          Max_Supply, 
          initial_Price, 
          initial_Mint_Amount, 
          poolCoreAddress
        );
  
        console.log('Jetton Contract Initialized');
        console.log('Jetton Contract Address:', sampleJetton.address.toString());
  
        // Prepare transaction
        const transaction = {
          messages: [
            {
              address: sampleJetton.address.toString(),
              amount: toNano('0.05').toString(),
              payload: '' // Add payload if required
            }
          ],
          validUntil: Date.now() + 300000 // 5 minutes
        };
  
        console.log('Transaction Prepared:', transaction);
  
        // Send transaction
        try {
          const result = await tonConnectUI.sendTransaction(transaction);
          console.log('Transaction Sent Successfully', result);
          alert('Jetton contract deployment initiated!');
        } catch (sendError) {
          console.error('Transaction Send Error:', sendError);
          alert(`Failed to send transaction: ${sendError.message}`);
        }
  
      } catch (contractError) {
        console.error('Contract Initialization Error:', contractError);
        alert(`Failed to initialize contract: ${contractError.message}`);
      }
  
    } catch (error) {
      console.error('Deployment Error:', error);
      alert(`Deployment failed: ${error.message}`);
    }
  };

  /* const handleDeploy = async () => {
    // Check if wallet is connected
    const wallet = tonConnectUI.account;
    if (!wallet) {
      alert('Please connect your TON wallet first');
      return;
    }

    try {
      // Validate inputs
      if (!tokenName || !tokenSymbol) {
        alert('Token name and symbol are required');
        return;
      }

      // Predefined constants
      const Max_Supply = 100000000000000000000n;
      const initial_Price = 10000n;
      const initial_Mint_Amount = 10000000000000n;
      const PoolCore_ADDRESS = "EQCml35ZSm5pCSEFO3aWRlGi0NspQh2jbKed8_w0rbwD9R0O";
      const poolCoreAddress = Address.parse(PoolCore_ADDRESS);

      // Jetton parameters
      const jettonParams = {
        name: tokenName,
        description: description,
        symbol: tokenSymbol,
        image: imageUrl || "" // Pass the URL directly
      };

      // Create content Cell
      const content = buildOnchainMetadata(jettonParams);

      // Open the Jetton Core contract
      const sampleJetton = await JettonCore.fromInit(
        Address.parse(wallet.address), 
        content, 
        Max_Supply, 
        initial_Price, 
        initial_Mint_Amount, 
        poolCoreAddress
      );

      // Send deployment transaction
      await tonConnectUI.sendTransaction({
        messages: [
          {
            address: sampleJetton.address.toString(),
            amount: toNano('0.05').toString(),
            payload: '' // Add payload if required
          }
        ],
        validUntil: Date.now() + 1000000
      });

      alert('Jetton contract deployment initiated!');
    } catch (error) {
      console.error('Deployment error:', error);
      alert('Failed to deploy Jetton contract');
    }
  }; */

  /*
  return (
    <div className="container mx-auto px-4 py-8 max-w-xl">
      <div className="flex justify-center mb-6">
        <TonConnectButton />
      </div>
      
      {tonConnectUI.account && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Deploy Your Jetton Token
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Token Name
              </label>
              <input 
                type="text" 
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
                placeholder="Enter token name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Token Symbol
              </label>
              <input 
                type="text" 
                value={tokenSymbol}
                onChange={(e) => setTokenSymbol(e.target.value)}
                placeholder="Enter token symbol"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your token"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Token Image URL
              </label>
              <input 
                type="url" 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Paste image URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button 
              onClick={handleDeploy}
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Deploy Jetton Contract
            </button>
          </div>
        </div>
      )}
    </div>
  );
} */



export function JettonDeployForm() {
  const [tonConnectUI] = useTonConnectUI();
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);

  const handleDeploy = useCallback(async () => {
    // Prevent multiple simultaneous deployments
    if (isDeploying) {
      alert('Deployment is already in progress');
      return;
    }

    // Check if wallet is connected
    const wallet = tonConnectUI.account;
    if (!wallet) {
      alert('Please connect your TON wallet first');
      return;
    }

    try {
      // Set deploying state
      setIsDeploying(true);

      // Validate inputs
      if (!tokenName || !tokenSymbol) {
        throw new Error('Token name and symbol are required');
      }

      // Predefined constants
      const Max_Supply = 100000000000000000000n;
      const initial_Price = 10000n;
      const initial_Mint_Amount = 10000000000000n;
      const PoolCore_ADDRESS = "EQCml35ZSm5pCSEFO3aWRlGi0NspQh2jbKed8_w0rbwD9R0O";
      
      // Prepare jetton parameters
      const jettonParams = {
        name: tokenName,
        description: description,
        symbol: tokenSymbol,
        image: imageUrl || ""
      };

      // Create content Cell
      const content = buildOnchainMetadata(jettonParams);

      // Parse addresses safely
      const senderAddress = Address.parse(wallet.address);
      const poolCoreAddress = Address.parse(PoolCore_ADDRESS);

      // Initialize Jetton Core contract
      const sampleJetton = await JettonCore.fromInit(
        senderAddress, 
        content, 
        Max_Supply, 
        initial_Price, 
        initial_Mint_Amount, 
        poolCoreAddress
      );

      // Prepare transaction
      const transaction = {
        messages: [
          {
            address: sampleJetton.address.toString(),
            amount: toNano('0.05').toString(),
            payload: '' // Add payload if required
          }
        ],
        validUntil: Date.now() + 300000 // 5 minutes
      };

      // Send transaction
      try {
        await tonConnectUI.sendTransaction(transaction);
        alert('Jetton contract deployment initiated!');
      } catch (sendError) {
        // More specific error handling
        if (sendError.message.includes('Request already pending')) {
          alert('A transaction is already in progress. Please wait and try again.');
        } else {
          alert(`Failed to send transaction: ${sendError.message}`);
        }
        throw sendError;
      }
    } catch (error) {
      console.error('Deployment Error:', error);
      alert(`Deployment failed: ${error.message}`);
    } finally {
      // Reset deploying state
      setIsDeploying(false);
    }
  }, [
    tonConnectUI, 
    tokenName, 
    tokenSymbol, 
    description, 
    imageUrl, 
    isDeploying
  ]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-xl">
      <div className="flex justify-center mb-6">
        <TonConnectButton />
      </div>
      
      {tonConnectUI.account && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Deploy Your Jetton Token
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Token Name
              </label>
              <input 
                type="text" 
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
                placeholder="Enter token name"
                required
                disabled={isDeploying}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Token Symbol
              </label>
              <input 
                type="text" 
                value={tokenSymbol}
                onChange={(e) => setTokenSymbol(e.target.value)}
                placeholder="Enter token symbol"
                required
                disabled={isDeploying}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your token"
                disabled={isDeploying}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 h-24"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Token Image URL
              </label>
              <input 
                type="url" 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Paste image URL"
                disabled={isDeploying}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>
            
            <button 
              onClick={handleDeploy}
              disabled={isDeploying}
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDeploying ? 'Deploying...' : 'Deploy Jetton Contract'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}