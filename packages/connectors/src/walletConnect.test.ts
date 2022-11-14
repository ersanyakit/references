import { chain, defaultChains } from '@wagmi/core'
import { describe, expect, it } from 'vitest'

import { WalletConnectConnector } from './walletConnect'

describe('WalletConnectConnector', () => {
  it('inits', () => {
    const connector = new WalletConnectConnector({
      chains: defaultChains,
      options: {
        rpc: {
          [chain.foundry.id]: chain.foundry.rpcUrls.default,
        },
      },
    })
    expect(connector.name).toEqual('WalletConnect')
  })
})