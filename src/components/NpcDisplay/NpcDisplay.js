import "./style.css";

const NpcDisplay = ({ selectedNpc }) => {
  return (
    <div className="npc-info">
      <div className="basic-info">
        <h2>{`${selectedNpc.name}`}</h2>
        <p>Occupation: {`${selectedNpc.occupation}`}</p>
        <p>History: {`${selectedNpc.history}`}</p>
      </div>

      <div className="details">
        <div className="traits">
          <div className="external-traits">
            <div className="appearance">
              <h4>Appearance</h4>
              <p>{`${selectedNpc.appearance}`}</p>
            </div>
            <div className="mannerism">
              <h4>Mannerism</h4>
              <p>{`${selectedNpc.mannerism}`}</p>
            </div>
            <div className="interactions">
              <h4>Interactions</h4>
              <p>{`${selectedNpc.interactions}`}</p>
            </div>
          </div>

          <div className="personality-traits">
            <h4>Personality</h4>
            <p>{`Ideals: ${selectedNpc.ideals}`}</p>
            <p>{`Bond: ${selectedNpc.bond}`}</p>
            <p>{`Flaw: ${selectedNpc.flaw}`}</p>
          </div>
        </div>

        <div className="important-info">
          <p>{`My highest ability is: ${selectedNpc.abilities.high}`}</p>
          <p>{`My lowest ability is: ${selectedNpc.abilities.low}`}</p>
          <p>{`Talent: ${selectedNpc.talent}`}</p>
          <p>{`Useful knowledge: ${selectedNpc.usefulKnowledge}`}</p>
        </div>
      </div>
    </div>
  );
};

export default NpcDisplay;
