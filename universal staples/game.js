var staples = 0;
var staplesShow = document.getElementById("staplesCount");
var staplesBtn = document.getElementById("mainBtn");
var wireShow = document.getElementById("wireCount");
var countDown = 0;
var hasStaplesIncreased = false;
console.log("Enter 'hack()' to hukk, but bewaer?");
function round(returner) {
  thingrounded = returner;
  if (returner >= 100000000000000000000) {
    thingrounded = Math.floor(thingrounded / 1000000000000000000) / 100;
    thingrounded = thingrounded + "Qt$";
  } else {
    if (returner >= 100000000000000000) {
      thingrounded = Math.floor(thingrounded / 1000000000000000) / 100;
      thingrounded = thingrounded + "Qd$";
    } else {
      if (returner >= 100000000000000) {
        thingrounded = Math.floor(thingrounded / 1000000000000) / 100;
        thingrounded = thingrounded + "T$";
      } else {
        if (returner >= 100000000000) {
          thingrounded = Math.floor(thingrounded / 1000000000) / 100;
          thingrounded = thingrounded + "B$";
        } else {
          if (returner >= 100000000) {
            thingrounded = Math.floor(thingrounded / 1000000) / 100;
            thingrounded = thingrounded + "M$";
          } else {
            if (returner >= 100000) {
              thingrounded = Math.floor(thingrounded / 1000) / 100;
              thingrounded = thingrounded + "K$";
            } else {
              if (returner >= 100) {
                thingrounded = Math.floor(thingrounded) / 100;
                thingrounded = thingrounded + "$";
              } else {
                thingrounded = thingrounded + "c";
              }
            }
          }
        }
      }
    }
  }
  return thingrounded;
}
var countDownSpeed = 1;
var wire = 10;
var eatStaples = document.getElementById("eatBtn");
var hasStaplesDecreased = false;
var countDown2 = 0;
var eatenStaples = 0;
var eatGlitchCountdown = 0;
var marketingIsInvisible = false;
var sellStaplesShow = document.getElementById("sellStaples");
var moneyShow = document.getElementById("moneyCount");
var sellStaplesSpeed = 1000;
var money = 0;
var staplesSellFor = 10;
var buyItemBtn = document.getElementById("buyItem");
var buyItemCost = [50, 200, 1500, 4000, 12000];
var buyItemNames = ["fett", "scott er", "bie k", "avo car do", "aay ron plane"];
var buyItemNbr = 0;
var inventory = [];
var buyItemBtnFlash = 0;
var moveBtn = document.getElementById("move");
var moveTimer = 0;
var moveSpeed = 1;
var incrementedAmount = 0;
var hasIncremented = false;
var dotDotDotsArr = ["...", "..", ".", ""];
var spamStuff = [
  "spam",
  "sPam",
  "spam!",
  "sperm?",
  "Spam",
  "Pams",
  "samp",
  "psma",
  "spaam",
  "spAm",
  "spaM",
  "SPam",
  "SpA?",
  "Agh",
  "Spmm",
  "Milk",
  "Mhhm",
  "Yess",
  "Spagm",
  "Spum",
  "Spem",
  "Spim",
  "Spem",
  "Spam",
  "Spam",
  "Spam",
  "I pity you, type 'stop_spareMe()'.",
];
var whereWireIs = 0;
var percentageDone = 0;
var percentageDoneTxt = document.getElementById("youMoving");
var blink;
var spam;

function hack() {
  money = 100000;
  staples = 5;
  console.log("ahaha why you");
  console.log("cheating is bad for your body");
  console.log("flashy");
  blink = window.setInterval(() => {
    if (Math.floor(Math.random() * 15) == 1) {
      document.getElementById("body").classList =
        "text-secondary mt-3 ml-3 d-none";
    } else {
      document.getElementById("body").classList = "text-secondary mt-3 ml-3";
    }
  }, 50);
  return "Type 'stop_spareMe()' to stop the freking blinking";
}

function allIWantIsStop() {
  window.clearInterval(blink);
}

function stop_spareMe() {
  window.clearInterval(blink);
  window.clearInterval(spam);
  var timeout = 3600;
  window.setTimeout(() => {
    console.log("Error : '//document.html' merge failed");
  }, 2000);
  window.setTimeout(() => {
    console.log(">>Identifying error source ...");
  }, 2500);
  window.setTimeout(() => {
    console.log("Error: /c/Users/User.in requires authuntication password");
  }, 3500);
  for (i = 0; i < 50; i++) {
    window.setTimeout(() => {
      console.log(Math.round(Math.random() * 90000) + 10000);
    }, timeout);
    timeout += 100;
  }
  window.setTimeout(() => {
    console.log("Authuntication Accessed");
  }, 9000);
  window.setTimeout(() => {
    console.log("Merging //document.html");
  }, 10000);
  window.setTimeout(() => {
    console.log("Error : html.doctype != html");
  }, 11000);
  window.setTimeout(() => {
    console.log("Unpacking Err.Green ...");
  }, 12000);
  window.setTimeout(() => {
    console.log("Warning: Err.Green doctype != screen.rgb");
  }, 14000);
  window.setTimeout(() => {
    console.log("Secondary backup system loading...");
  }, 16000);
  window.setTimeout(() => {
    console.log("Error : cannot transmit signal");
  }, 20000);
  window.setTimeout(() => {
    console.log(
      "Warning: Err.Green linking to hp302853/c/Users/User/Guest/Backup_Radar"
    );
  }, 22000);
  window.setTimeout(() => {
    console.log("Error : Link Failed");
  }, 25000);
  window.setTimeout(() => {
    console.log("Ending Transmission...");
  }, 25500);
  window.setTimeout(() => {
    window.setInterval(() => {
      document.getElementById("body").classList =
        "text-secondary mt-3 ml-3 d-none";
    }, 1);
  }, 27000);
  return "Warning: /c/Users/User//document.html : /c/Users/Aaron//document.html && merge";
}

window.setInterval(() => {
  if (moveTimer > 0) {
    moveTimer--;
    percentageDone = Math.round(
      (moveTimer - whereWireIs) * (100 / (300 - whereWireIs)) * 100
    );
    if (moveTimer < 41) {
      percentageDoneTxt.innerHTML = "Arrival!";
    } else {
      percentageDoneTxt.innerHTML =
        "Your " +
        inventory[inventory.length - 1] +
        " are exploring... [" +
        Math.round(percentageDone / 100 - 0.01) +
        "%]";
    }

    if (hasIncremented) {
      moveBtn.innerHTML =
        "Your " +
        inventory[inventory.length - 1] +
        " found " +
        incrementedAmount * 2 +
        "cm wire! Now go make some food for the citizens.";
      wireShow.innerHTML = "Wire: " + wire * 2 + "cm";
    } else {
      moveBtn.innerHTML = "Doo de doddle do" + dotDotDotsArr[moveTimer % 4];
    }
    if (moveTimer == whereWireIs) {
      incrementedAmount = Math.round(Math.random() * buyItemNbr * 10);
      wire += incrementedAmount;
      hasIncremented = true;
      moveTimer = 40;
      whereWireIs = -1;
    }
  } else {
    moveBtn.innerHTML =
      "Find wire using yer " + inventory[inventory.length - 1];
    hasIncremented = false;
  }
}, 70);

moveBtn.onclick = () => {
  console.log("hi");
  if (moveTimer == 0) {
    whereWireIs = Math.round(Math.random() * 105) + 45;
    moveTimer = 300;
  }
};

buyItemBtn.onclick = () => {
  if (money >= buyItemCost[buyItemNbr]) {
    money -= buyItemCost[buyItemNbr];
    inventory.push(buyItemNames[buyItemNbr]);
    buyItemNbr++;
    buyItemBtn.innerHTML =
      "Buy " +
      buyItemNames[buyItemNbr] +
      " [" +
      round(buyItemCost[buyItemNbr]) +
      "]";
    console.log("btn status: " + moveBtn);
    console.log("btn class: " + moveBtn.classList);
    console.log("btn onclick: " + moveBtn.onclick);
    moveBtn.classList.remove("d-none");
    console.log("move btn remove class complete");
    console.log("btn status: " + moveBtn);
    console.log("btn class: " + moveBtn.classList);
    console.log("btn onclick: " + moveBtn.onclick);
  }
};

window.setInterval(() => {
  if (buyItemBtnFlash > 1) {
    if (buyItemBtnFlash % 2 == 0) {
      buyItemBtn.classList.remove("d-none");
    } else {
      buyItemBtn.classList.add("d-none");
    }
    buyItemBtnFlash--;
  }
}, 80);

window.setInterval(() => {
  if (marketingIsInvisible) {
    if (money >= 0 && buyItemBtnFlash == 0) {
      buyItemBtnFlash = 11;
    }
    sellStaplesShow.innerHTML =
      "World hunger for staples: " +
      10000 / sellStaplesSpeed +
      "%." +
      " (owo everyone wants to eat your staples XD)";
    if (Math.floor(Math.random() * sellStaplesSpeed) == 0) {
      if (staples >= 1) {
        staples--;
        money += staplesSellFor;
        moneyShow.innerHTML = "Money: " + round(money);
        staplesShow.innerHTML = "Staples: " + staples;
      }
    }
  }
}, 1);

eatStaples.onclick = () => {
  if (eatenStaples >= 1) {
    if (staples >= 4 && countDown <= 0) {
      staplesShow.innerHTML = "Staples: " + staples;
      countDown2 = 1;
      hasStaplesDecreased = true;
    }
  } else {
    if (staples > 0 && countDown <= 0) {
      staplesShow.innerHTML = "Staples: " + staples;
      countDown2 = Math.ceil(1000 / countDownSpeed);
      hasStaplesDecreased = true;
    }
  }
};

window.setInterval(() => {
  if (marketingIsInvisible) {
  } else {
    if (staples <= 0) {
      eatBtn.classList = "btn btn-sm btn-secondary disabled";
    } else {
      eatBtn.classList = "btn btn-sm btn-secondary";
    }
    if (eatGlitchCountdown > 0) {
      eatGlitchCountdown--;
      if (Math.round(eatGlitchCountdown / 4) % 2 == 1) {
        eatBtn.innerHTML = "Eat staples...?";
      } else {
        eatBtn.innerHTML = "Git popular :D [4 staples]";
        if (staples <= 0) {
          eatBtn.classList = "btn btn-sm btn-danger disabled";
        } else {
          eatBtn.classList = "btn btn-sm btn-danger";
        }
      }
    }
  }
  if (countDown2 > 0) {
    countDown2--;
    eatBtn.innerHTML =
      "Chewing Staple [" + Math.round(countDown2 / 10) / 100 + "]";
  } else {
    if (hasStaplesDecreased == true) {
      hasStaplesDecreased = false;
      staples--;
      eatenStaples++;
      if (eatenStaples >= 2) {
        staples -= 3;
        marketingIsInvisible = true;
        eatBtn.classList = "d-none";
      }
      if (eatenStaples == 1) {
        eatGlitchCountdown = 500;
      }
      staplesShow.innerHTML = "Staples: " + staples;
    }
    if (eatGlitchCountdown == 0) {
      if (eatenStaples == 0) {
        eatBtn.innerHTML = "Eat staples...?";
      } else {
        eatBtn.innerHTML = "Git popular :D [4 staples]";
      }
    }
  }
}, 1);

window.setInterval(() => {
  if (wire <= 0) {
    staplesBtn.classList = "btn btn-sm btn-secondary disabled";
  } else {
    staplesBtn.classList = "btn btn-sm btn-secondary";
  }
  if (countDown > 0) {
    countDown--;
    staplesBtn.innerHTML =
      "Bending Wire [" + Math.round(countDown / 10) / 100 + "]";
  } else {
    if (hasStaplesIncreased == true) {
      hasStaplesIncreased = false;
      staples++;
      staplesShow.innerHTML = "Staples: " + staples;
    }
    staplesBtn.innerHTML = "Make staples";
  }
}, 1);

staplesBtn.onclick = () => {
  if (wire > 0 && countDown <= 0) {
    wire--;
    wireShow.innerHTML = "Wire: " + wire * 2 + "cm";
    countDown = Math.ceil(1000 / countDownSpeed);
    hasStaplesIncreased = true;
  }
};
