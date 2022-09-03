import { expect } from "chai";
import { getExplorerLink } from "../lib/index";

const ACCOUNT = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
const TX = "65VTdMUcxMtLqUsRRif4HDjoM8sTCchE758oVNwF7kJorMZZHrDyJpfwtuyPKt25MuMzUUU9VgoGB14fMBBQnMm4";

describe("solana.fm", () => {
	it("mainnet account", async () => {
		const expectedURL = `https://solana.fm/address/${ACCOUNT}`;
		expect(getExplorerLink(ACCOUNT, { explorer: "solana.fm" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana.fm", cluster: "mainnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana.fm", type: "account" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana.fm", cluster: "mainnet", type: "account" })).to.be.eql(expectedURL);
	});

	it("mainnet tx", async () => {
		const expectedURL = `https://solana.fm/tx/${TX}`;
		expect(getExplorerLink(TX, { explorer: "solana.fm" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana.fm", cluster: "mainnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana.fm", type: "tx" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana.fm", cluster: "mainnet", type: "tx" })).to.be.eql(expectedURL);
	});

	it("testnet account", async () => {
		const expectedURL = `https://solana.fm/address/${ACCOUNT}?cluster=testnet-solana`;
		expect(getExplorerLink(ACCOUNT, { explorer: "solana.fm", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana.fm", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana.fm", type: "account", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana.fm", cluster: "testnet", type: "account" })).to.be.eql(expectedURL);
	});

	it("testnet tx", async () => {
		const expectedURL = `https://solana.fm/tx/${TX}?cluster=testnet-solana`;
		expect(getExplorerLink(TX, { explorer: "solana.fm", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana.fm", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana.fm", type: "tx", cluster: "testnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana.fm", cluster: "testnet", type: "tx" })).to.be.eql(expectedURL);
	});

	it("devnet account", async () => {
		const expectedURL = `https://solana.fm/address/${ACCOUNT}?cluster=devnet-solana`;
		expect(getExplorerLink(ACCOUNT, { explorer: "solana.fm", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana.fm", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana.fm", type: "account", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(ACCOUNT, { explorer: "solana.fm", cluster: "devnet", type: "account" })).to.be.eql(expectedURL);
	});

	it("devnet tx", async () => {
		const expectedURL = `https://solana.fm/tx/${TX}?cluster=devnet-solana`;
		expect(getExplorerLink(TX, { explorer: "solana.fm", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana.fm", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana.fm", type: "tx", cluster: "devnet" })).to.be.eql(expectedURL);
		expect(getExplorerLink(TX, { explorer: "solana.fm", cluster: "devnet", type: "tx" })).to.be.eql(expectedURL);
	});
});
