import { type Address, zeroAddress as ETH_ADDRESS } from 'viem'
import { Chains } from './chain-ids'

export const ethereumTokenAddresses: Address[] = [
  ETH_ADDRESS, // ETH
  '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
  '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', // WBTC
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  '0x514910771AF9Ca656af840dff83E8264EcF986CA', // LINK
  '0xc00e94Cb662C3520282E6f5717214004A7f26888', // COMP
  '0x6810e776880C02933D47DB1b9fc05908e5386b96', // GNO
  '0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24', // RNDR
  '0xd4d42F0b6DEF4CE0383636770eF773390d85c61A', // SUSHI
]

export const optimismTokenAddresses: Address[] = [
  ETH_ADDRESS, // ETH
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', // DAI
  '0xFdb794692724153d1488CcdBE0C56c252596735F', // LIDO
  '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6', // LINK
  '0x4200000000000000000000000000000000000042', // OP
  '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85', // USDC
  '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', // USDCE
  '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', // USDT
  '0x68f180fcCe6836688e9084f035309E29Bf0A2095', // WBTC
  '0x4200000000000000000000000000000000000006', // WETH
]

export const polygonTokenAddresses: Address[] = [
  ETH_ADDRESS, // MATIC
  '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3', // BAL
  '0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c', // COMP
  '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', // DAI
  '0xC3C7d422809852031b44ab29EEC9F1EfF2A58756', // LIDO
  '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a', // SUSHI
  '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', // USDC
  '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // USDCE
  '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', // USDT
  '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6', // WBTC
  '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', // WETH
  '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', // WMATIC
]

export const baseTokenAddresses: Address[] = [
  ETH_ADDRESS, // ETH
  '0x4158734D47Fc9692176B5085E0F52ee0Da5d47F1', // BAL
  '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22', // cbETH
  '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb', // DAI
  '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA', // USDbC
  '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', // USDC
  '0x4200000000000000000000000000000000000006', // WETH
]

export const arbitrumTokenAddresses: Address[] = [
  ETH_ADDRESS, // ETH
  '0x912CE59144191C1204E64559FE8253a0e49E6548', // ARB
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', // DAI
  '0xd4d42F0b6DEF4CE0383636770eF773390d85c61A', // SUSHI
  '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', // USDC
  '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', // USDCE
  '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', // USDT
  '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', // WBTC
  '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', // WETH
]

const zkSyncEraTokenAddresses: Address[] = [
  ETH_ADDRESS, // ETH
  '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4', // USDC
  '0x493257fD37EDB34451f62EDf8D2a0C418852bA4C', // USDT
  '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91', // WETH
]

const blastTokenAddresses: Address[] = [
  ETH_ADDRESS, // ETH
  '0x4300000000000000000000000000000000000003', // USDB
  '0x4300000000000000000000000000000000000004', // WETH
]

export const CHAIN_TO_TOKENS: { [chainId: number]: Address[] | undefined } = {
  [Chains.ETHEREUM]: ethereumTokenAddresses,
  [Chains.OPTIMISM]: optimismTokenAddresses,
  [Chains.ARBITRUM_ONE]: arbitrumTokenAddresses,
  [Chains.POLYGON_POS]: polygonTokenAddresses,
  [Chains.BASE]: baseTokenAddresses,
  [Chains.ZK_SYNC_ERA]: zkSyncEraTokenAddresses,
  [Chains.BLAST]: blastTokenAddresses,
}

// Deployer Address. Can be used for simulations
export const DEFAULT_ACCOUNT = '0x017f8ad14a2e745ea0f756bd57cd4852400be78c'

// This needs to exist and be set for every network with refer on
export const BOOST_TREASURY_ADDRESS =
  '0x48E6a039bcF6d99806Ce4595fC59e4A7C0CaAB19'
