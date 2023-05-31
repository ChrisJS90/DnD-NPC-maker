import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import NpcDisplay from "../../components/NpcDisplay/NpcDisplay";

// test npc to get started before setting up json server

const testyBoy = {
  name: "Testy Boy2",
  occupation: "Test dummy",
  history: "Made simply to check code is working, what a pitiful life!",
  appearance: "Piercings",
  abilities: {
    high: "Strength",
    low: "Intelligence",
  },
  talent: "Perfect memory",
  mannerism: "Prone to singing, whistling, or humming quietly",
  interactions: "Arrogant",
  ideals: "Beauty and change",
  bond: "Out for revenge",
  flaw: "Arrogance",
  usefulKnowledge: "Telling me if my code is shite or not",
};

const Dashboard = () => {
  const [npcs, setNpcs] = useState([]);
  const [selectedNpc, setSelectedNpc] = useState(testyBoy);
  const navigate = useNavigate();

  // useEffect function to get info from .json database

  useEffect(() => {
    fetch(`http://localhost:4000/npcs`)
    .then(res => res.json())
    .then(data => {
        setNpcs(...npcs, data)
    })
  }, [])

  console.log(npcs)

  return (
    <div className="dash">
      <div className="sidebar">
        <div className="create-npc-sec">
          <button onClick={() => navigate("/create-new")}>Create New NPC</button>
        </div>
        <div className="npc-list-sec">
          <ul className="list-of-npcs">
            {/* map function on npcs to display only their names in a list */}
            {npcs.map(npc => {
                return(
                    <button onClick={() => {setSelectedNpc(npc)}}>
                        {npc.name}
                    </button>
                )
            })}
          </ul>
        </div>
      </div>
      <div className="npc-display">
        <NpcDisplay selectedNpc={selectedNpc} />
      </div>
    </div>
  );
};

export default Dashboard;
