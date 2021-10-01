import { Web3Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import {
  FANTOM_NETWORK,
  FANTOM_ID,
  RARITY_ADDRESS,
  ATTRIBUTES_CONTRACT,
  // RARITY_ADDRESS_NAMES,
  RARITYWORKER_CONTRACT,
  GOLD_CONTRACTS,
  DUNGEONS,
} from "./config";

import RARITY_ABI from "../constants/abis/rarity.json";
import GOLD_ABI from "../constants/abis/gold.json";
import ATTRIBUTES_ABI from "../constants/abis/attributes.json";
import RARITYWORKER_ABI from "../constants/abis/rarityworker.json";
import CELLAR_ABI from "../constants/abis/cellar.json";

export const setupContracts = async ({ onError, onRefresh }) => {
  const defaultProvider = new Web3Provider(window.ethereum, "any", {
    etherscan: process.env.REACT_APP_ETHERSCAN_API_TOKEN,
    infura: process.env.REACT_APP_INFURA_ID,
    // Or if using a project secret:
    // infura: {
    //   projectId: YOUR_INFURA_PROJECT_ID,
    //   projectSecret: YOUR_INFURA_PROJECT_SECRET,
    // },
    alchemy: process.env.REACT_APP_ALCHEMY_ID,
    pocket: process.env.REACT_APP_POCKET_ID,
    // Or if using an application secret key:
    // pocket: {
    //   applicationId: ,
    //   applicationSecretKey:
  });
  // const defaultProvider = ethers.getDefaultProvider("homestead", {
  //   etherscan: process.env.REACT_APP_ETHERSCAN_API_TOKEN,
  //   infura: process.env.REACT_APP_INFURA_ID,
  //   // Or if using a project secret:
  //   // infura: {
  //   //   projectId: YOUR_INFURA_PROJECT_ID,
  //   //   projectSecret: YOUR_INFURA_PROJECT_SECRET,
  //   // },
  //   alchemy: process.env.REACT_APP_ALCHEMY_ID,
  //   pocket: process.env.REACT_APP_POCKET_ID,
  //   // Or if using an application secret key:
  //   // pocket: {
  //   //   applicationId: ,
  //   //   applicationSecretKey:
  //   // }
  // }); //fantom chain id

  // Force page refreshes on network changes
  // The "any" network will allow spontaneous network changes
  // defaultProvider.on("network", (newNetwork, oldNetwork) => {
  //   // When a Provider makes its initial connection, it emits a "network"
  //   // event with a null oldNetwork along with the newNetwork. So, if the
  //   // oldNetwork exists, it represents a changing network
  //   if (oldNetwork) {
  //     window.location.reload();
  //   }
  // });

  const signer = await defaultProvider.getSigner();
  const webId = await signer.getChainId();
  if (webId !== FANTOM_ID) {
    const confirmation = onError("Please, switch networks to use Fantom");
    if (confirmation) {
      await window.ethereum.request(FANTOM_NETWORK);
      onRefresh(true);
    }
  } else {
    const accounts = await signer.getAddress();
    const rarityContract = new Contract(RARITY_ADDRESS, RARITY_ABI, signer);
    const attributesContract = new Contract(
      ATTRIBUTES_CONTRACT,
      ATTRIBUTES_ABI,
      signer
    );
    // const namesContract = new Contract(
    //   RARITY_ADDRESS_NAMES,
    //   RARITY_ABI_NAMES,
    //   signer
    // );
    const rarityWorkerContract = new Contract(
      RARITYWORKER_CONTRACT,
      RARITYWORKER_ABI,
      signer
    );
    const cellarContract = new Contract(
      DUNGEONS.cellar.contract,
      CELLAR_ABI,
      signer
    );
    const goldContract = new Contract(GOLD_CONTRACTS, GOLD_ABI, signer);

    return {
      accounts: accounts,
      chainID: webId,
      rarityContract: rarityContract,
      contractAttributes: attributesContract,
      // contract_names: namesContract,
      cellarContract: cellarContract,
      rarityWorkerContract: rarityWorkerContract,
      signer: signer,
      goldContract: goldContract,
    };
  }
};
