import React, { useState, useContext, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { RARITY_ADDRESS } from "./components/utils/config.js";
// import { Web3Provider } from "@ethersproject/providers";
// import { ethers } from "ethers";
// import { Contract } from "@ethersproject/contracts";
import { Body, Header } from "./components/index.jsx";
import Heroes from "./components/Heroes/Heroes";
import Tavern from "./components/Tavern/Tavern";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HeroCave from "./components/HeroCave/HeroCave";
import GoddessTower from "./components/GoddessTower/GoddessTower";
import { CharacterContext } from "./components/Context/CharacterContext.jsx";
import { ContractContext } from "./components/Context/ContractContext.jsx";
import { setupContracts } from "./components/utils/setupContracts";

function App() {
  const [refresh, setRefresh] = useState(false);
  const { setTokenID } = useContext(CharacterContext);
  const { contract, setContract } = useContext(ContractContext);

  const initiateRarityData = async () => {
    try {
      if (window.ethereum) {
        const contracts = await setupContracts({
          onError: (message) => window.confirm(message),
          onRefresh: () => setRefresh(!refresh),
        });
        console.log("contract", contracts);
        setContract(contracts);
      } else {
        alert.error(
          "Please, try to use Metamask or some client to connect your wallet"
        );
      }
    } catch (ex) {
      console.log({ isError: true, stack: ex });
    }
  };
  React.useEffect(() => {
    // initiate data signer then account address
    const initiateData = async () => {
      // if (!loading && !error && data && data.transfers) {
      initiateRarityData();
      // }
    };
    initiateData();
  }, [refresh]);
  // }, [loading, error, data]);

  React.useEffect(() => {
    //fethcing all NFT of the address using etherscan API
    const fetchHeroes = async () => {
      try {
        const response = await fetch(
          `https://api.ftmscan.com/api?module=account&action=tokennfttx&contractaddress=${RARITY_ADDRESS}&address=${contract?.accounts}&page=1&offset=100&sort=asc&apikey=${process.env.REACT_APP_ETHERSCAN_API_TOKEN}`
        );
        const data = await response.json();
        const temp = [];
        data.result.forEach((e) => {
          temp.push({ id: e.tokenID });
        });
        //update tokenID for heroes
        setTokenID(temp);
      } catch (error) {
        console.log("error", error);
      }
    };
    if (contract?.accounts && contract?.signer) {
      fetchHeroes();
    }
  }, [contract?.accounts, contract?.signer]);

  return (
    <div className="App">
      <HashRouter>
        <Route path="/">
          <Header>
            <NavBar></NavBar>
          </Header>
        </Route>
        <Body>
          <Switch>
            <Route exact path="/">
              <Heroes></Heroes>
              <Tavern></Tavern>
            </Route>
            <Route path="/herocave/:tokenID">
              <HeroCave></HeroCave>
            </Route>
            <Route path="/goddesstower">
              <GoddessTower></GoddessTower>
            </Route>
          </Switch>
        </Body>
        <Route path="/">
          <Footer></Footer>
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
