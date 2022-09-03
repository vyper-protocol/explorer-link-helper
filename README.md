# Explorer Link Helper

<p>
  <a href="https://github.com/vyper-protocol/explorer-link-helper">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="explorer-link-helper is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@vyper-protocol/explorer-link-helper">
    <img src="https://img.shields.io/npm/v/@vyper-protocol/explorer-link-helper?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
  <a href="https://twitter.com/VyperProtocol">
    <img src="https://img.shields.io/twitter/follow/VyperProtocol.svg?label=Follow%20@VyperProtocol" alt="Follow @VyperProtocol" />
  </a>
</p>

Helper library to get Solana explorers url for given accounts and transaction

## Installation

`yarn add @vyper-protocol/explorer-link-helper`

## Support

We currently support the following explorers:

- Solana explorer
- Solscan
- Solana.fm

If you need more contact us or submit a PR

## Usage

```ts
import { getExplorerLink } from "@vyper-protocol/rust-decimal-wrapper";

// https://explorer.solana.com/tx/65VTdMUcxMtLqUsRRif4HDjoM8sTCchE758oVNwF7kJorMZZHrDyJpfwtuyPKt25MuMzUUU9VgoGB14fMBBQnMm4?cluster=devnet
const solana = getExplorerLink("65VTdMUcxMtLqUsRRif4HDjoM8sTCchE758oVNwF7kJorMZZHrDyJpfwtuyPKt25MuMzUUU9VgoGB14fMBBQnMm4", { cluster: "devnet" });

// https://solscan.io/account/TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
const solscan = getExplorerLink("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA", { explorer: "solscan" });
```

## Getting Help

Join [our Discord channel](https://discord.gg/CVsFvY9G) and post a message in #developers
