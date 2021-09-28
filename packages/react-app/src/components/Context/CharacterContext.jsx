import React, { createContext, useState, useMemo } from "react";
export const CharacterContext = createContext();

const CharacterContextProvider = ({ children }) => {
  const [heroes, setHeroes] = useState({});
  const [primaryStats, setPrimaryStats] = useState({});
  const [secondary, setSecondaryStats] = useState({});
  const [tokenID, setTokenID] = useState([]);
  const contextValues = useMemo(
    () => ({
      heroes,
      setHeroes,
      tokenID,
      setTokenID,
      primaryStats,
      setPrimaryStats,
      secondary,
      setSecondaryStats,
    }),
    [heroes, tokenID, primaryStats, secondary]
  );
  return (
    <CharacterContext.Provider value={contextValues}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
