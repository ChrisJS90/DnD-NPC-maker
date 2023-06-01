import { useState, useEffect } from "react";
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
      high: {
        stat: "",
        detail: "",
      },
      low: {
        stat: "",
        detail: "",
      },
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
    { stat: "Strength", desc: "powerful, brawny, strong as an ox" },
    { stat: "Dexterity", desc: "lithe, agile, graceful" },
    { stat: "Constitution", desc: "hardy, hale, healthy" },
    { stat: "Intelligence", desc: "studious, learned, inquisitive" },
    { stat: "Wisdom", desc: "perceptive, spiritual, insightful" },
    { stat: "Charisma", desc: "persuasive, forceful, born leader" },
  ];

  const lowAbilityList = [
    { stat: "Strength", desc: "feeble, scrawny" },
    { stat: "Dexterity", desc: "clumsy, fumbling" },
    { stat: "Constitution", desc: "sickly, pale" },
    { stat: "Intelligence", desc: "dim-witted, slow" },
    { stat: "Wisdom", desc: "oblivious, absentminded" },
    { stat: "Charisma", desc: "dull, boring" },
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

  function rollAbilities() {
    let valH = randomInt(6);
    let valL = randomInt(6);
    while (valH === valL) {
      valL = randomInt(6);
    }
  }

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
            <input type="text" name="occupation" />
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's history?
            <input type="text" name="history" />
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's appearance?
            <select name="appearance">
              {appearanceList.map((value) => {
                return <option value={value}>{value}</option>;
              })}
              <option value={rollAppearance}>Random</option>
            </select>
            <input
              type="text"
              name="appearanceDetail"
              placeholder="Please give details"
            />
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's mannerism?
            <select name="mannerism">
              {mannerismList.map((value) => {
                return <option value={value}>{value}</option>;
              })}
            </select>

          </label>
        </div>

        <div className="detail">
          <label>
            What are your NPC's interactions with others?
            <select name="interactions">
                {interactionList.map((value) => {
                    return <option value={value}>{value}</option>
                })}
            </select>

          </label>
        </div>

{/* Alignment goes here */}
        <div className="detail">
          <label>
            What are your NPC's ideals?
            <input type="text" name="name" />
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's bond?
            <input type="text" name="name" />
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's flaw?
            <input type="text" name="name" />
          </label>
        </div>

{/* Important info */}
        <div className="detail">
          <label>
            What is your NPC's highest ability?
            <select name="highAbility">
                {highAbilityList.map((ability) => {
                    return <option value={ability}>{ability.stat}</option>
                })}
            </select>
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's lowest ability?
            <select name="lowAbility">
                {lowAbilityList.map((ability) => {
                    return <option value={ability}>{ability.stat}</option>
                })}
            </select>
          </label>
        </div>

        <div className="detail">
          <label>
            What is your NPC's talent?
            <select name="talent">
                {talentList.map((talent) => {
                    return <option value={talent}>{talent}</option>
                })}
            </select>
          </label>
        </div>

        <div className="detail">
          <label>
            What useful knowledge does your NPC have?
            <textarea name="knowledge"></textarea>
          </label>
        </div>
        
      </form>
    </div>
  );
};

export default CreateNew;
