var colors = "";
var rankTextShow = "";
var guns = [
  "Pistol",
  "Desert Eagle",
  "Dual Pistol",
  "Flintshot",
  "AK-47",
  "M-16",
  "Sniper R-13",
  "Shotgun F-8",
  "Shotgun F-24",
  "Bazooka B-5",
  "Dual Rifle",
  "Rifle RF-16",
  "G-Fire RF+5",
  "Sniper R-36",
  "Rifle RF-64",
  "M-60",
  "Dual Rifle RF-24",
  "Milk Gun RSQ-1",
  "Milk Gun LSP-0.5",
  "Milk Gun RSQLSP+2,1",
  "Milk Fun!",
  "Missile Fun RB-ALL",
  "Milkatov Launcher RB-ALLx5 ",
  "Orange Des RF|RECOIL-15",
  "G-Fire MILK-6",
  "Prototype 2",
  "Billy-Lauch PROTO-13",
  "Milk-62 Overtop Proto-1",
  "Milk-68 Overtop Proto-2",
  "Milk-74 Overtop Proto-3",
  "Milk-82 Overtop Proto-4",
  "Milk-96 Overtop Beta-1",
  "Milk-108 Overtop Beta-2",
  "Milk-125 Overtop Alpha AA-3",
  "Milk-134 Overtop Alpha-BW-8",
];
var realStats = [
  {
    RateOfFire: 300,
    Ammo: 6,
    ReloadSpeed: 1300,
    Damage: 3.5,
    FireCount: 1,
  },
  {
    RateOfFire: 200,
    Ammo: 8,
    ReloadSpeed: 1000,
    Damage: 4.2,
    FireCount: 1,
  },
  {
    RateOfFire: 170,
    Ammo: 12,
    ReloadSpeed: 1800,
    Damage: 3,
    FireCount: 1,
  },
  {
    RateOfFire: 1000,
    Ammo: 1,
    ReloadSpeed: 600,
    Damage: 8,
    FireCount: 1,
  },
  {
    RateOfFire: 110,
    Ammo: 48,
    ReloadSpeed: 1500,
    Damage: 2,
    FireCount: 1,
  },
  {
    RateOfFire: 80,
    Ammo: 54,
    ReloadSpeed: 1600,
    Damage: 1.5,
    FireCount: 1,
  },
  {
    RateOfFire: 650,
    Ammo: 2,
    ReloadSpeed: 800,
    Damage: 15,
    FireCount: 1,
  },
];
var statShows = [
  document.getElementById("stat1"),
  document.getElementById("stat2"),
  document.getElementById("stat3"),
  document.getElementById("stat4"),
  document.getElementById("stat5"),
  document.getElementById("stat6"),
];
function getRankInfo(rank) {
  const arrayColors = [
    "text-secondary",
    "text-warning",
    "text-danger",
    "text-primary",
    "text-success",
    "text-info",
  ];
  const ranks = [
    "Empty Cup",
    "Lemonade",
    "Coke",
    "Pepsi",
    "Dilluted Milk",
    "Milk",
  ];
  colors = arrayColors[rank];
  rankTextShow = ranks[rank];
}
var rank = 0;
var stats = ["ak47 = 10 rounds per second", "m16 = 40 rounds per 3 seconds"];
var gun = 0;
window.setInterval(function () {
  if (gun == 6) {
    gun = 0;
  } else {
    gun++;
  }
}, 1000);
window.setInterval(function () {
  if (rank == 5) {
    rank = 0;
  } else {
    rank++;
  }
}, 1000);
window.setInterval(function () {
  statShows[0].innerHTML = guns[gun];
  statShows[1].innerHTML =
    "Rate of fire: " +
    Math.round(10000 / realStats[gun].RateOfFire) / 10 +
    " shots per sec";
  statShows[2].innerHTML = "Ammo: " + realStats[gun].Ammo;
  statShows[3].innerHTML =
    "Reload speed: " +
    Math.round(10000 / realStats[gun].ReloadSpeed) / 10 +
    (Math.round(10000 / realStats[gun].ReloadSpeed) / 10 == 1
      ? " sec"
      : " secs");
  statShows[4].innerHTML = "Damage: " + realStats[gun].Damage;
  statShows[5].innerHTML = "Bullets per fire: " + realStats[gun].FireCount;
  getRankInfo(rank);
  rankText.className = "";
  rankText.classList += colors;
  rankText.innerHTML = rankTextShow;
}, 1);
var rankText = document.getElementById("showRankInfo");
