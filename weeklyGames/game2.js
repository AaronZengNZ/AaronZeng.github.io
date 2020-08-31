var questArr = [
  "Okay, umm, hi?",
  "I am the questMaster.",
  "Obtain artifacts by doing as I say.",
  "Quest 1: You have to eat an apple.",
  "Okay, um, you ate the apple.",
  "Your artifact is an apple core, LMAO",
  "Okay, um, quest 2.",
  "Quest 2: Find something very important!!!",
  "Okay, soo, umm, this is boring isn't it?",
  "What about we do something intresting?",
  "Like a fight?",
  "Oh yes, by the way, you are only a soul.",
  "And souls can't fight.",
  "How about this, we create some ground, and wait for humans to come.",
  "And then you can use their body!",
  "Deal?",
  "Okay then, lets get going.",
  "It will take 30 seconds to make the ground.",
  "Start build!",
  "Okay, the ground is finished!",
  "Now, wait for humans to come.",
  "Then choose if you want their body based on their stats!",
  "Then when you're ready, click fight!",
  "Here, have a starter body, 100HP, 0DEF, 1DMG, LVL 1, COMMON.",
  "I will talk to you after you have done something really important!",
];
var quest = document.getElementById("quest");
var apple = document.getElementById("secretApple");
var deal = document.getElementById("deal");
var dirt = document.getElementById("grass.");
var questNum = 0;
var items = 0;
var itemNumber;
var arrayItem = "";
var text = "";
var type = "|";
var finish = 1;
var timeoutOnce = 0;
var questDoing = 0;
var questDone = 1;
var questCheck = 0;
var ranks = [
  "COMMON",
  "UNCOMMON",
  "RARE",
  "EPIC",
  "ENCHANTED",
  "UNSTABLE",
  "ANTIMATTER",
  "MYSTICAL",
  "OTHERWORLDLY",
  "DIMENSIONAL",
  "VOIDIC",
  "BEYOND",
  "INFINITE",
  "GODLY",
];
var human = [
  document.getElementById("human"),
  document.getElementById("accept"),
  document.getElementById("decline"),
  1,
  5,
  0,
  1,
  1,
];
var stats = [1, 10, 0, 1, "COMMON"];
var enemies = [
  "Walking Nugget",
  "Gold Figurine",
  "Living Katana",
  "Floating Stream",
  "Moving Statue",
  "Emperor's Throne",
];
var fightStats = [
  document.getElementById("fightBtn"),
  document.getElementById("upgrade"),
  document.getElementById("gold"),
  { opHp: 5, opDmg: 1, opDef: 0, opLvl: 1, opType: "", opSize: 1 },
  document.getElementById("fightstats"),
];
var statsText = [
  document.getElementById("dmg"),
  document.getElementById("hp"),
  document.getElementById("def"),
  document.getElementById("lv"),
  document.getElementById("rank"),
];
var emStats = 0;
var fighting = false;
var gold = 0;
var humStats = {
  dmg: 1,
  hp: 100,
  def: 0,
  lev: 1,
  rank: "COMMON",
  statTotal: 0,
};
var upgradeBtn = {
  statments: [
    "Add some gold for faster attraction",
    "Make a house for higher stats",
    "Add a statue for intimidation",
    "Make a bed for higher health",
    "Expand the house for faster attraction",
    "Add golden food for better health",
    "Make a turret for more intimidation",
    "Add rooms for faster attraction",
    "Make weapons for better stats",
    "Do a dance for intimidation",
    "Make a decoy for faster attraction",
  ],
  btn: document.getElementById("upgrade"),
  statgains: [0, 20, 0, 30, 0, 35, 0, 0, 65, 0, 0],
  enemygains: [0, 0, 35, 0, 0, 0, 65, 0, 0, 50, 0],
  speedgains: [650, 650, 650, 400, 400, 400, 250, 250, 250, 100],
  costs: [
    1000,
    2500,
    7500,
    20000,
    35000,
    80000,
    150000,
    275000,
    400000,
    750000,
    1300000,
  ],
  buyNum: 0,
};
function upgrade() {
  if (gold >= upgradeBtn.costs[upgradeBtn.buyNum]) {
    gold -= upgradeBtn.costs[upgradeBtn.buyNum];
    maxStats += upgradeBtn.statgains[upgradeBtn.buyNum];
    maxEnemy
  }
}
function weightConvert(weight, extraText = "") {
  var weightClone = weight;
  if (weightClone >= 1000000) {
    return Math.floor(weightClone / 10000) / 100 + " TONS" + extraText;
  } else {
    if (weightClone >= 1000) {
      return Math.floor(weightClone / 10) / 100 + " KILOS" + extraText;
    } else {
      return weightClone + " GRAMS" + extraText;
    }
  }
}
function fightTick() {
  fightStats[3].opHp -= humStats.dmg - fightStats[3].opDef;
  humStats.hp -= fightStats[3].opDmg - humStats.def;
  fightStats[4].innerHTML =
    "WEIGHT " +
    weightConvert(fightStats[3].opSize) +
    " LVL " +
    fightStats[3].opLvl +
    " " +
    fightStats[3].opType +
    "|HP:" +
    fightStats[3].opHp +
    "|DMG:" +
    fightStats[3].opDmg +
    "|DEF:" +
    fightStats[3].opDef +
    "|LVL:" +
    fightStats[3].opLvl;
  statsText[0].innerHTML = "DMG:" + humStats.dmg;
  statsText[1].innerHTML = "HP:" + humStats.hp;
  statsText[2].innerHTML = "DEF:" + humStats.def;
  statsText[3].innerHTML = "LVL:" + humStats.lev;
  statsText[4].innerHTML = "RANK:" + humStats.rank;
}
window.setInterval(function () {
  if (fighting == true) {
    if (fightStats[3].opHp > 0) {
      fightTick();
      if (humStats.hp < 1) {
        fighting = false;
        fightStats[4].innerHTML = "K.O.";
      }
    } else {
      fighting = false;
      fightStats[4].innerHTML =
        "WIN! +" + weightConvert(fightStats[3].opSize) + " OF GOLD";
      gold += fightStats[3].opSize;
      fightStats[2].innerHTML = weightConvert(gold, " OF ") + " GOLD";
    }
  }
}, 100);
var maxEnemy = 50;
fightStats[0].onclick = () => {
  console.log(fightStats.opHp);
  if (fighting == false) {
    emStats = Math.floor(Math.random() * maxEnemy) + 50;
    fightStats[3].opLvl = Math.floor((emStats - 10) % 20);
    fightStats[3].opType = enemies[Math.floor((emStats - 50) / 20)];
    fightStats[3].opSize =
      fightStats[3].opLvl * Math.floor((emStats - 50) / 20) + emStats;
    console.log(Math.floor((20 % emStats) - 10));
    fightStats[3].opLvl = Math.floor(
      (emStats - 40) / Math.floor(Math.random() * 5 + 5)
    );
    fightStats[3].opHp = Math.ceil(Math.random() * Math.floor(emStats)) + 50;
    emStats -= Math.floor(fightStats[3].opHp * 0.5);
    fightStats[3].opDmg = Math.ceil(Math.random() * 3 + 2);
    emStats -= Math.floor(fightStats[3].opDmg * 5);
    fightStats[3].opDef = Math.floor(emStats / 10);
    fighting = true;
  }
};
dirt.addEventListener("mouseover", function () {
  if (questDoing == "findGrass" && questDone == 0) {
    dirt.className = "m-3 text-info";
  }
});
dirt.onclick = function () {
  if (questDoing == "findGrass" && questDone == 0) {
    questDone = 1;
    dirt.innerHTML = "GRASS -> |||_||_|_|_||||_||_||";
    dirt.className = "m-3 text-success";
  }
};
apple.addEventListener("mouseover", function () {
  if (questDoing == "apple" && questDone == 0) {
    apple.innerHTML = "Apple";
    apple.className = "m-3 text-danger";
  }
});
apple.onclick = function () {
  if (questDoing == "apple" && questDone == 0) {
    questDone = 1;
    apple.innerHTML = "Apple Core";
    apple.className = "m-3 text-warning";
  }
};
deal.onclick = function () {
  if (questDoing == "deal" && questDone == 0) {
    questDone = 1;
    deal.classList.add("d-none");
  }
};
var timeout = 0;
function slowType(typo) {
  console.log(typo);
  items = typo.length;
  string = typo;
  itemNumber = 0;
  text = "";
  console.log(text);
  console.log(string);
  console.log(items);
  console.log(arrayItem);
}
var timeText = document.getElementById("timeText");
window.setInterval(function () {
  if (timeout > 1) {
    timeout -= 1;
    timeText.innerHTML = timeout - 2;
    if (timeout == 1) {
      questDone = 1;
      timeText.innerHTML = "";
    }
  }
}, 900);
var humanAlreadyExists = true;
var statTotal = 0;
var rank = "";
var humHp = 0;
var humDmg = 0;
var humDef = 0;
var humLev = 1;
var timeout = {
  time: 0,
  timeSet: 1000,
};
var maxStats = 50;
window.setInterval(function () {
  if (humanAlreadyExists) {
  } else {
    if (timeout.time >= timeout.timeSet) {
      timeout.time = 0;
      human[2].classList.remove("d-none");
      human[1].classList.remove("d-none");
      humanAlreadyExists = true;
      statTotal = Math.floor(Math.random() * maxStats) + 50;
      var set = statTotal;
      if (statTotal > humStats.statTotal) {
        human[0].classList.remove();
        human[0].classList.add("text-success");
      } else {
        human[0].classList.remove();
        human[0].classList.add("text-danger");
      }
      rank = ranks[Math.floor((statTotal - 50) / 20)];
      humLev = Math.floor((statTotal - 10) % 20);
      console.log(Math.floor((20 % statTotal) - 10));
      humHp = Math.ceil(Math.random() * Math.floor(statTotal)) + 50;
      statTotal -= Math.floor(humHp * 0.5);
      humDmg = Math.ceil(Math.random() * 3 + 2);
      statTotal -= Math.floor(humDmg * 6);
      humDef = Math.floor(statTotal / 10);
      statTotal = set;
      human[0].innerHTML =
        "Dmg:" +
        humDmg +
        "|Hp:" +
        humHp +
        "|Def:" +
        humDef +
        "|Level:" +
        humLev +
        "|Rank:" +
        rank;
    } else {
      human[0].classList.remove();
      human[0].classList.add("text-info");
      if (timeout.time > 0) {
        human[0].innerHTML = timeout.time + "/" + timeout.timeSet;
      }
      timeout.time += 1;
    }
  }
}, 15);
human[1].onclick = function () {
  if (humanAlreadyExists == true) {
    human[1].classList.add("d-none");
    human[2].classList.add("d-none");
    humStats.statTotal = statTotal;
    humanAlreadyExists = false;
    statsText[0].innerHTML = "DMG:" + humDmg;
    statsText[1].innerHTML = "HP:" + humHp;
    statsText[2].innerHTML = "DEF:" + humDef;
    statsText[3].innerHTML = "LVL:" + humLev;
    statsText[4].innerHTML = "RANK:" + rank;
    humStats.dmg = humDmg;
    humStats.hp = humHp;
    humStats.def = humDef;
    humStats.lev = humLev;
    humStats.rank = rank;
  }
};
human[2].onclick = function () {
  if (humanAlreadyExists == true) {
    human[1].classList.add("d-none");
    human[2].classList.add("d-none");
    humanAlreadyExists = false;
  }
};
slowType(questArr[questNum]);
window.setInterval(function () {
  if (finish == 1) {
    if (questNum == 4) {
      questDoing = "apple";
      if (questCheck == 0) {
        questCheck = 1;
        questDone = 0;
      }
    }
    if (questNum == 8) {
      questDoing = "findGrass";
      if (questCheck == 0) {
        questCheck = 1;
        questDone = 0;
      }
    }
    if (questNum == 16) {
      questDoing = "deal";
      if (questCheck == 0) {
        questCheck = 1;
        questDone = 0;
        var deal = document.getElementById("deal");
        deal.classList.remove("d-none");
      }
    }
    if (questNum == 19) {
      questDoing = "interval";
      if (questCheck == 0) {
        timeout = 33;
        questCheck = 1;
        questDone = 0;
      }
    }
    if (questNum == questArr.length - 1) {
      document.getElementById("stats").classList.remove("d-none");
      human[0].innerHTML = "___";
      questDoing = "done";
      questDone = 1;
      humanAlreadyExists = false;
    }

    if (questDone == 1) {
      finish = 0;
      timeoutOnce = 0;
      questCheck = 0;
      slowType(questArr[questNum]);
      questNum++;
    }
    if (questNum == questArr.length) {
      questDone = 0;
    }
  }
}, 100);
window.setInterval(function () {
  if (items > 0) {
    if (itemNumber < items) {
      arrayItem = string[itemNumber];
      text += arrayItem;
      itemNumber++;
      quest.innerHTML = text;
    } else {
      if (timeoutOnce == 0) {
        timeoutOnce = 1;
        window.setTimeout(function () {
          finish = 1;
        }, 500);
      }
    }
  }
}, 50);
