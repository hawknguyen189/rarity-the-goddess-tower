import React, { useContext } from "react";
import Classes from "../../constants/Classes";
import { CharacterContext } from "../../Context/CharacterContext";

const Character = ({ heroID }) => {
  const { heroes } = useContext(CharacterContext);
  return (
    <div>
      {heroes[heroID] && (
        <div className="character-section py-5">
          <p style={{ whiteSpace: "pre-line" }}>
            {Classes[heroes[heroID].class.toLowerCase()].intro}
          </p>
        </div>
      )}
    </div>
  );
};

export default Character;
