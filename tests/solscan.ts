import { expect } from "chai";
import { getExplorerLink } from "../lib/index";

const ACCOUNT = "FAJtvs7CxbC7xHhDTox1fPtxRk3i3Euvgthzbrmj26in";
const TX = "5rR9EPLAkfqvXASiXaBQTqxcULvPbH5ZjKT3NF1PddNpxGRv3sGFzU4Jr5EQCsFuWEngYBDcbdUb1fjfBznraAYb";

describe("solscan", () => {
	it("mainnet account", async () => {
		const expectedURL = `https://solscan.io/account/${ACCOUNT}`;
		expect(getExplorerLink(ACCOUNT, { explorer: "solscan" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solscan", cluster: "mainnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solscan", type: "account" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solscan", cluster: "mainnet", type: "account" })).to.be.eql(expectedURL);
	});

	it("mainnet tx", async () => {
		const expectedURL = `https://solscan.io/tx/${TX}`;
		expect(getExplorerLink(TX, { explorer: "solscan" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solscan", cluster: "mainnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solscan", type: "tx" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solscan", cluster: "mainnet", type: "tx" })).to.be.eql(expectedURL);
	});

	it("testnet account", async () => {
		const expectedURL = `https://solscan.io/account/${ACCOUNT}?cluster=testnet`;
		expect(getExplorerLink(ACCOUNT, { explorer: "solscan", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solscan", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solscan", type: "account", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solscan", cluster: "testnet", type: "account" })).to.be.eql(expectedURL);
	});

	it("testnet tx", async () => {
		const expectedURL = `https://solscan.io/tx/${TX}?cluster=testnet`;
		expect(getExplorerLink(TX, { explorer: "solscan", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solscan", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solscan", type: "tx", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solscan", cluster: "testnet", type: "tx" })).to.be.eql(expectedURL);
	});

	it("devnet account", async () => {
		const expectedURL = `https://solscan.io/account/${ACCOUNT}?cluster=devnet`;
		expect(getExplorerLink(ACCOUNT, { explorer: "solscan", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solscan", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solscan", type: "account", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solscan", cluster: "devnet", type: "account" })).to.be.eql(expectedURL);
	});

	it("devnet tx", async () => {
		const expectedURL = `https://solscan.io/tx/${TX}?cluster=devnet`;
		expect(getExplorerLink(TX, { explorer: "solscan", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solscan", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solscan", type: "tx", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solscan", cluster: "devnet", type: "tx" })).to.be.eql(expectedURL);
	});
});
