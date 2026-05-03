export const MOCK_TOKENS = [
  { id: 'sol', symbol: 'SOL', name: 'Solana', balance: 14.5, price: 145.20, change: 5.2 },
  { id: 'usdc', symbol: 'USDC', name: 'USD Coin', balance: 1540.00, price: 1.00, change: 0.0 },
  { id: 'btc', symbol: 'BTC', name: 'Bitcoin', balance: 0.05, price: 64200.00, change: -1.2 },
  { id: 'eth', symbol: 'ETH', name: 'Ethereum', balance: 1.2, price: 3100.50, change: 2.1 },
  { id: 'ray', symbol: 'RAY', name: 'Raydium', balance: 150.0, price: 1.85, change: 12.5 },
];

export const MOCK_HISTORY = [
  { id: 1, type: 'Swap', status: 'Completed', date: 'Today, 14:30', amount: '+ 1.5 SOL', subAmount: '- 217.8 USDC', hash: '5xRy...9pL' },
  { id: 2, type: 'Receive', status: 'Completed', date: 'Yesterday, 09:15', amount: '+ 500 USDC', subAmount: 'From 8zTm...2kX', hash: '7bAq...4wZ' },
  { id: 3, type: 'Send', status: 'Completed', date: '2 Days ago', amount: '- 0.01 BTC', subAmount: 'To 1A1z...xU9', hash: '9cXy...1vM' },
];
