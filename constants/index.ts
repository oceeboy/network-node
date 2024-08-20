const Cards: ItemCardProps[] = [
  {
    icon: "/icons/node-sync.svg",
    title: "Node Sync",
    description: "Verify / Sync your wallet from blockchain",
    openModal: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    icon: "/icons/claim.svg",
    title: "Claim",
    description: "Claim each of your rewards on the blockchain",
    openModal: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    icon: "/icons/recovery.svg",
    title: "Recovery",
    description: "Recover your coin/token using wallet recovery phrase",
    openModal: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    icon: "/icons/pairing.svg",
    title: "Pairing",
    description: "Pair with other wallet using web3 access",
    openModal: function (): void {
      throw new Error("Function not implemented.");
    },
  },
];

const Crypto = [
  {
    icon: "/images/metamask.png",
    title: "MetaMask",
  },

  {
    icon: "/images/trustwallet.png",
    title: "Trust Wallet",
  },
  {
    icon: "/images/rabbywallet.png",

    title: "Rabby Wallet",
  },
  {
    icon: "/images/ledger.png",
    title: "Ledger",
  },
  {
    icon: "/images/trezor.png",
    title: "Trezor",
  },
  {
    icon: "/images/otherwallet.png",
    title: "Other Wallet",
  },
];

export { Cards, Crypto };
