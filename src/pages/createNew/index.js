import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const CreateNew = () => {
  const emptyNpc = {
    id: "",
    name: "",
    occupation: "",
    history: "",
    appearance: {
      trait: "",
      detail: "",
    },
    abilities: {
      high: "",
      low: "",
    },
    talent: "",
    mannerism: "",
    interactions: "",
    personality: {
      alignment: "",
      ideals: "",
      bond: "",
      flaw: "",
    },
    usefulKnowledge: "",
  };

  const [newNpc, setNewNpc] = useState(emptyNpc);
  const navigate = useNavigate()

  //   Roll tables for details

  const appearanceList = [
    "Distinctive jewelry",
    "Piercings",
    "Flamboyant or outlandish clothes",
    "Formal, clean clothes",
    "Ragged, dirty clothes",
    "Pronounced scar",
    "Missing teeth",
    "Missing fingers",
    "Unusual eye colour",
    "Tattoos",
    "Birthmark",
    "Unusual skin colour",
    "Bald",
    "Braided beard or hair",
    "Unusual hair colour",
    "Nervous eye twitch",
    "Distinctive nose",
    "Distinctive posture",
    "Exceptionally beautiful",
    "Exceptionally ugly",
  ];

  const highAbilityList = [
    "Strength - powerful, brawny, strong as an ox",
    "Dexterity -lithe, agile, graceful",
    "Constitution - hardy, hale, healthy",
    "Intelligence - studious, learned, inquisitive",
    "Wisdom - perceptive, spiritual, insightful",
    "Charisma - persuasive, forceful, born leader",
  ];

  const lowAbilityList = [
    "Strength - feeble, scrawny",
    "Dexterity - clumsy, fumbling",
    "Constitution - sickly, pale",
    "Intelligence - dim-witted, slow",
    "Wisdom - oblivious, absentminded",
    "Charisma - dull, boring",
  ];

  const talentList = [
    "Plays a musical instrument",
    "Speaksseveral languages fluently",
    "Unbelievably luck",
    "Perfect memory",
    "Great with animals",
    "Great with children",
    "Great at solving puzzles",
    "Great at one game",
    "Grat at impersonations",
    "Draws beautifully",
    "Paints beautifully",
    "Sings beautifully",
    "Drinks everyone under the table",
    "Expert carpenter",
    "Expert cook",
    "Expert dart thrower and rock skipper",
    "Expert juggler",
    "SKilled actor and master of disguise",
    "Skilled dancer",
    `Knows thieves' cant`,
  ];

  const mannerismList = [
    "Prone to singing, whistling, or humming quietly",
    "Speaks in rhyme or some other peculiar way",
    "Particularly low or high voice",
    "Slurs words, lisps, or stutters",
    "Enunciates overly clearly",
    "Speaks loudly",
    "Whispers",
    "Uses flowery speech or long words",
    "Frequently uses the wrong word",
    "Uses colourful oaths and exclamations",
    "Makes constant jokes or puns",
    "Prone to predictions of doom",
    "Fidgets",
    "Squints",
    "Stares into the distance",
    "Chews something",
    "Paces",
    "Taps fingers",
    "Bites fingernails",
    "Twirls hair or tugs beard",
  ];

  const interactionList = [
    "Argumentative",
    "Arrogant",
    "Blustering",
    "Rude",
    "Curious",
    "Friendly",
    "Honest",
    "Hot tempered",
    "Irritable",
    "Ponderous",
    "Quiet",
    "Suspicious",
  ];

  //   sort out npc ideals with alignment

  const alignmentList = [
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil",
  ];

  const goodIdeals = [
    "Beauty",
    "Charity",
    "Greater good",
    "Life",
    "Respect",
    "Self-sacrifice",
  ];

  const evilIdeals = [
    "Domination",
    "Greed",
    "Might",
    "Pain",
    "Retribution",
    "Slaughter",
  ];

  const lawfulIdeals = [
    "Community",
    "Fairness",
    "Honour",
    "Logic",
    "Responsibility",
    "Tradition",
  ];

  const chaoticIdeals = [
    "Change",
    "Creativity",
    "Freedom",
    "Independence",
    "No limits",
    "Whimsy",
  ];

  const neutralIdeals = [
    "Balance",
    "Knowledge",
    "Live and let live",
    "Moderation",
    "Neutrality",
    "People",
  ];

  // This one is only 9 as opposed to the 10 listed in the rulebook as the rulebook
  // has roll twice when a 10 is rolled
  const bondList = [
    "Dedicated to fulfilling a personal life goal",
    "Protective of close family members",
    "Protective of colleagues or compatriots",
    "Loyal to a benefactor, patron, or employer",
    "Captivated by a romantic interest",
    "Drawn to a special place",
    "Protective of a sentimental keepsake",
    "Protective of a valuable possession",
    "Out for revenge",
  ];

  const flawList = [
    "Forbidden love or susceptibility to romance",
    "Enjoys decadent pleasures",
    "Arrogance",
    "Envies another creature's possessions or station",
    "Overpowering greed",
    "Prone to rage",
    "Has a powerful enemy",
    "Specific phobia",
    "Shameful or scandalous history",
    "Secret crime or misdeed",
    "Possession of forbidden lore",
    "Foolhardy bravery",
  ];

  //   Functions to roll each list

  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function rollAppearance() {
    let val = randomInt(20);
    return appearanceList[val];
  }

  //   Handle functions

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "name") {
      setNewNpc({ ...newNpc, name: inputValue });
    } else if (inputName === "occupation") {
      setNewNpc({ ...newNpc, occupation: inputValue });
    } else if (inputName === "history") {
      setNewNpc({ ...newNpc, history: inputValue });
    } else if (inputName === "appearance") {
      if (inputValue === "Random") {
        const randAppear = rollAppearance();
        setNewNpc((prevState) => ({
          ...prevState,
          appearance: {
            ...prevState.appearance,
            trait: randAppear,
          },
        }));
      } else {
        setNewNpc((prevState) => ({
          ...prevState,
          appearance: {
            ...prevState.appearance,
            trait: inputValue,
          },
        }));
      }
    } else if (inputName === "appearanceDetail") {
      setNewNpc((prevState) => ({
        ...prevState,
        appearance: {
          ...prevState.appearance,
          detail: inputValue,
        },
      }));
    } else if (inputName === "mannerism") {
      if (inputValue === "Random") {
        const randManner = mannerismList[randomInt(20)];
        setNewNpc({ ...newNpc, mannerism: randManner });
      } else {
        setNewNpc({ ...newNpc, mannerism: inputValue });
      }
    } else if (inputName === "interactions") {
      if (inputValue === "Random") {
        const randInter = interactionList[randomInt(12)];
        setNewNpc({ ...newNpc, interactions: randInter });
      } else {
        setNewNpc({ ...newNpc, interactions: inputValue });
      }
    } else if (inputName === "alignment") {
      if (inputValue === "Random") {
        const randAlign = alignmentList[randomInt(9)];
        setNewNpc((prevState) => ({
          ...prevState,
          personality: {
            ...prevState.personality,
            alignment: randAlign,
          },
        }));
      } else {
        setNewNpc((prevState) => ({
          ...prevState,
          personality: {
            ...prevState.personality,
            alignment: inputValue,
          },
        }));
      }
    } else if (inputName === "ideals") {
      setNewNpc((prevState) => ({
        ...prevState,
        personality: {
          ...prevState.personality,
          ideals: [inputValue],
        },
      }));
    } else if (inputName === "bond") {
      if (inputValue === "Random") {
        const randBond = bondList[randomInt(9)];
        setNewNpc((prevState) => ({
          ...prevState,
          personality: {
            ...prevState.personality,
            bond: randBond,
          },
        }));
      } else {
        setNewNpc((prevState) => ({
          ...prevState,
          personality: {
            ...prevState.personality,
            bond: inputValue,
          },
        }));
      }
    } else if (inputName === "flaw") {
      if (inputValue === "Random") {
        const randFlaw = flawList[randomInt(12)];
        setNewNpc((prevState) => ({
          ...prevState,
          personality: {
            ...prevState.personality,
            flaw: randFlaw,
          },
        }));
      } else {
        setNewNpc((prevState) => ({
          ...prevState,
          personality: {
            ...prevState.personality,
            flaw: inputValue,
          },
        }));
      }
    } else if (inputName === "highAbility") {
      if (inputValue === "Random") {
        const randHAbil = highAbilityList[randomInt(6)];
        setNewNpc((prevState) => ({
          ...prevState,
          abilities: {
            ...prevState.abilities,
            high: randHAbil,
          },
        }));
      } else {
        setNewNpc((prevState) => ({
          ...prevState,
          abilities: {
            ...prevState.abilities,
            high: inputValue,
          },
        }));
      }
    } else if (inputName === "lowAbility") {
      if (inputValue === "Random") {
        const randLAbil = lowAbilityList[randomInt(6)];
        setNewNpc((prevState) => ({
          ...prevState,
          abilities: {
            ...prevState.abilities,
            low: randLAbil,
          },
        }));
      } else {
        setNewNpc((prevState) => ({
          ...prevState,
          abilities: {
            ...prevState.abilities,
            low: inputValue,
          },
        }));
      }
    } else if (inputName === "talent") {
      if (inputValue === "Random") {
        const randTalent = talentList[randomInt(20)];
        setNewNpc({ ...newNpc, talent: randTalent });
      } else {
        setNewNpc({ ...newNpc, talent: inputValue });
      }
    } else if (inputName === "knowledge") {
      setNewNpc({ ...newNpc, usefulKnowledge: inputValue });
    }
  }

 function handleSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:4000/npcs`, {
        method: "POST",
        body: JSON.stringify(newNpc),
        headers: {'Content-Type': "application/json"}
 })

  }

  return (
    <div className="create">
        <button onClick={() => navigate("/")}>Go home</button>
      <form onSubmit={handleSubmit}>
        <div className="detail">
          <label>
            What is your NPC's name?
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <p>{`Current name: ${newNpc.name}`}</p>
        </div>

        <div className="detail">
          <label>
            What is your NPC's occupation?
            <input type="text" name="occupation" onChange={handleChange} />
            <p>{`Current occupation: ${newNpc.occupation}`}</p>
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's history?
            <textarea name="history" onChange={handleChange} />
            <p>{`Current history: ${newNpc.history}`}</p>
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's appearance?
            <select name="appearance" onChange={handleChange}>
              {appearanceList.map((appearance) => {
                return <option value={appearance}>{appearance}</option>;
              })}
              <option value={"Random"}>Random</option>
            </select>
            <input
              type="text"
              name="appearanceDetail"
              placeholder="Please give details"
              onChange={handleChange}
            />
            <p>{`Current appearance: ${newNpc.appearance.trait}`}</p>
            <p>{`Current appearance details: ${newNpc.appearance.detail}`}</p>
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's mannerism?
            <select name="mannerism" onChange={handleChange}>
              {mannerismList.map((mannerism) => {
                return <option value={mannerism}>{mannerism}</option>;
              })}
              <option value={"Random"}>Random</option>
            </select>
            <p>{`Current mannerism: ${newNpc.mannerism}`}</p>
          </label>
        </div>

        <div className="detail">
          <label>
            What are your NPC's interactions with others?
            <select name="interactions" onChange={handleChange}>
              {interactionList.map((interaction) => {
                return <option value={interaction}>{interaction}</option>;
              })}
              <option value={"Random"}>Random</option>
            </select>
            <p>{`Current mannerism: ${newNpc.interactions}`}</p>
          </label>
        </div>

        {/* Alignment goes here */}
        <div className="detail">
          <label>
            What is your NPC's alignment?
            <select name="alignment" onChange={handleChange}>
              {alignmentList.map((alignment) => {
                return <option value={alignment}>{alignment}</option>;
              })}
              <option value={"Random"}>Random</option>
            </select>
            <p>{`Current aligment: ${newNpc.personality.alignment}`}</p>
          </label>
        </div>

        <div className="detail">
          <label>
            What are your NPC's ideals?
            <input type="text" name="ideals" />
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's bond?
            <select name="bond" onChange={handleChange}>
              {bondList.map((bond) => {
                return <option value={bond}>{bond}</option>;
              })}
              <option value={"Random"}>Random</option>
            </select>
            <p>{`Current bond: ${newNpc.personality.bond}`}</p>
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's flaw?
            <select name="flaw" onChange={handleChange}>
              {flawList.map((flaw) => {
                return <option value={flaw}>{flaw}</option>;
              })}
              <option value={"Random"}>Random</option>
            </select>
            <p>{`Current flaw: ${newNpc.personality.flaw}`}</p>
          </label>
        </div>

        {/* Important info */}
        <div className="detail">
          <label>
            What is your NPC's highest ability?
            <select name="highAbility" onChange={handleChange}>
              {highAbilityList.map((ability) => {
                return <option value={ability}>{ability}</option>;
              })}
              <option value={"Random"}>Random</option>
            </select>
            <p>{`Current high ability: ${newNpc.abilities.high}`}</p>
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's lowest ability?
            <select name="lowAbility" onChange={handleChange}>
              {lowAbilityList.map((ability) => {
                return <option value={ability}>{ability}</option>;
              })}
              <option value={"Random"}>Random</option>
            </select>
            <p>{`Current low ability: ${newNpc.abilities.low}`}</p>
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's talent?
            <select name="talent" onChange={handleChange}>
              {talentList.map((talent) => {
                return <option value={talent}>{talent}</option>;
              })}
              <option value={"Random"}>Random</option>
            </select>
            <p>{`Current talent: ${newNpc.talent}`}</p>
          </label>
        </div>

        <div className="detail">
          <label>
            What useful knowledge does your NPC have?
            <textarea name="knowledge"></textarea>
          </label>
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default CreateNew;
