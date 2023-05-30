import { useState, useEffect } from "react";
import "./style.css";

const CreateNew = () => {
  const [newNpc, setNewNpc] = useState({});

  return (
    <div className="create">
      <form>
        <div className="detail">
          <label>
            What is your NPC's name?
            <input type="text" name="name" />
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's occupation?
            <input type="text" name="name" />
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's history?
            <input type="text" name="name" />
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's appearance?
            <input type="text" name="name" />
          </label>
        </div>


        
      </form>
    </div>
  );
};

export default CreateNew;
