import { expect } from "chai";
import { getExplorerLink } from "../lib/index";

const ACCOUNT = "FAJtvs7CxbC7xHhDTox1fPtxRk3i3Euvgthzbrmj26in";
const TX = "5rR9EPLAkfqvXASiXaBQTqxcULvPbH5ZjKT3NF1PddNpxGRv3sGFzU4Jr5EQCsFuWEngYBDcbdUb1fjfBznraAYb";

describe("solana explorer", () => {
	it("mainnet account", async () => {
		const expectedURL = `https://explorer.solana.com/address/${ACCOUNT}`;
		expect(getExplorerLink(ACCOUNT)).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana-explorer" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { cluster: "mainnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { type: "account" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana-explorer", cluster: "mainnet", type: "account" })).to.be.eql(expectedURL);
	});

	it("mainnet tx", async () => {
		const expectedURL = `https://explorer.solana.com/tx/${TX}`;
		expect(getExplorerLink(TX)).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana-explorer" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { cluster: "mainnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { type: "tx" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana-explorer", cluster: "mainnet", type: "tx" })).to.be.eql(expectedURL);
	});

	it("testnet account", async () => {
		const expectedURL = `https://explorer.solana.com/address/${ACCOUNT}?cluster=testnet`;
		expect(getExplorerLink(ACCOUNT, { cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana-explorer", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { type: "account", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana-explorer", cluster: "testnet", type: "account" })).to.be.eql(expectedURL);
	});

	it("testnet tx", async () => {
		const expectedURL = `https://explorer.solana.com/tx/${TX}?cluster=testnet`;
		expect(getExplorerLink(TX, { cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana-explorer", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { type: "tx", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana-explorer", cluster: "testnet", type: "tx" })).to.be.eql(expectedURL);
	});

	it("devnet account", async () => {
		const expectedURL = `https://explorer.solana.com/address/${ACCOUNT}?cluster=devnet`;
		expect(getExplorerLink(ACCOUNT, { cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana-explorer", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { type: "account", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana-explorer", cluster: "devnet", type: "account" })).to.be.eql(expectedURL);
	});

	it("devnet tx", async () => {
		const expectedURL = `https://explorer.solana.com/tx/${TX}?cluster=devnet`;
		expect(getExplorerLink(TX, { cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana-explorer", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { type: "tx", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana-explorer", cluster: "devnet", type: "tx" })).to.be.eql(expectedURL);
	});
});
