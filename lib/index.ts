export type ExplorerType = "solana-explorer" | "solscan" | "solana.fm";
export type ElementType = "tx" | "account";
export type Cluster = "devnet" | "testnet" | "mainnet";

export type InputParams = {
	explorer?: ExplorerType;
	cluster?: Cluster | string;
	type?: ElementType;
};

export const getExplorerLink = (data: string, { explorer, cluster, type }: InputParams = {}): string => {
	let result = "";

	if (!type) type = data.length == 44 ? "account" : "tx";
	if (!explorer) explorer = "solana-explorer";

	switch (explorer) {
		case "solana-explorer":
			{
				const typeToken = type == "account" ? "address" : "tx";
				result = `https://explorer.solana.com/${typeToken}/${data}`;
				if (cluster && cluster != "mainnet") result += `?cluster=${cluster}`;
			}
			break;

		case "solscan":
			{
				result = `https://solscan.io/${type}/${data}`;
				if (cluster && cluster != "mainnet") result += `?cluster=${cluster}`;
			}
			break;

		case "solana.fm":
			{
				const typeToken = type == "account" ? "address" : "tx";
				result = `https://solana.fm/${typeToken}/${data}`;
				if (cluster && cluster != "mainnet") {
					if (cluster == "testnet") result += `?cluster=testnet-solana`;
					if (cluster == "devnet") result += `?cluster=devnet-solana`;
				}
			}
			break;
	}

	return result;
};
