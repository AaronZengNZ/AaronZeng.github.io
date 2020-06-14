let taps = 0;
let count = 0;
var main;
const messages = ['Hi, sir.'
    , 'I am the space bar.'
    , 'I\'ve heard that you want a game.', 'Well then, bad luck, this is not a game.'
    , 'It\'s just an annoying AI that wants to annoy you.'
    , 'Or is it...???', 'Maybe we should stop talking about these mysterious stuff.'
    , 'Lets get on with the game.', '']
const talking = [
    '.'
    , '..'
    , '...'
    , '(^_^)'
    , '(-_-)'
    , '(-_-)z'
    , '(-_-)zz'
    , '(-_-)zzz'
    , '(\'_\')'
    , '(\'_\')-why are you still here?'
    , '(\'_\')-oh, what? You\'re here for a game?'
    , '(\'_\')-...'
    , '(\'_\')-okay, im gonna leave.'
    , '_(\'_\')'
    , '__(\'_\')'
    , '___(\'_\')'
    , '____(\'_\')__|'
    , '_____(\'_\')_|'
    , '______(\'_\')|'
    , '______(\'_\')| -clunk- '
    , '_____(-_-)| -ow.'
    , '_____(-_-)| -hurt.'
    , '______(\'_\')|'
    , '_____(\'_\')_|'
    , '____(\'_\')__|'
    , '___(\'_\')'
    , '__(\'_\')'
    , '_(\'_\')'
    , '(\'_\')-this is getting boring.'
    , '(\'_\')-lets get on with something.'
    , '(\'_\')-like a new upgrade?'
    , ''
    , ''
    , '...'
    , 'Like what?'
    , 'Why are you still here?'
    , 'Go on! Press 1!'
    , 'You just like annoying me don\'t you?'
    , 'Uggh.'
    , ''
    , 'WHAT? you didn\' think this was gonna end?'
    , 'You\'re stupid or something.'
    , 'Fine. Easter egg, here you go.'
    , 'undefined.'
]
const cursor = ['__<-'
    , '_<-'
    , 'X<-'
]
var speed = 1;
var cost = 150;
var floor = 50;
let cursorCount = 0;
let cursorMove = 0;
let isCursor = 0;
let speedIsBuy = 0;
let speedCost = 250;
let mapCost = 500;
let maps = 0;
let hpBase = 100;
let dmgBaseS = 1;
let dmgBaseB = 10;
let battle = 0;
let enemyHp = 0;
let hp = hpBase;
const names = [
    'Wolf'
    , 'Python'
    , 'Tiger'
    , 'Hyena'
    , 'Magical Wizard'
    , 'Elder Wand'
    , 'Starlight Shadow'
    , 'Sun\'s Curse'
    , 'Dimensional crack'
    , 'Spirit of the Void'
    , '< NULL >'
    , 'The Horror'
]
let add = 0;
let name = ''
let hpCost = 100;
let dmgCost = 150;
let enemyBase = 0;
let cashM = 1;
let cashMcost = 500;
let yesMap = 0;
let enemyDmgM = 0;
let enemyDmgB = 0;
let isJump = 0;
let playerPos = 1;
let makeMore = 0;
let spikeposition = [
    10,
    20,
    30
];
let spikeposition2 = [
    13,
    23,
    33
];
let fakeX = [
    0
]
let fakeX2 = [
    0
]
let textShow = 0
let text = ['C',
'O',
'N',
'G',
'A',
'T',
'S',
',',
'Y',
'O',
'U',
'_',
'W',
'O',
'N',
'!',
'M',
'A',
'D',
'E',
'_',
'B',
'Y',
'_',
'A',
'A',
'R',
'O',
'N',
'_',
'Z',
'.']
function posReload(dimension){
    let pos = ''
    pos+='|'
    for(i = 1; i < 48; i++){
        if(textShow == 1 && i <= 16){
            if(dimension == 1){
                pos+=text[i-1]
            }
            else{
                pos+=text[i + 15]
            }
        }
        else{
        if(playerPos == i){
            if(dimension == 1){
                if(isJump == 0){
                    if(spikeposition.includes(playerPos) == true){
                        if(dimension == 1){
                        playerPos = 1;
                        }
                        else{
                        }
                    }
                    else{
                    pos+='O'
                    }
                }
                else {
                    if (spikeposition.includes(i) == true) {
                        if(empty == 1){
                            pos+=' '
                        }
                        else{
                            pos+='X'
                        }
                    }
                    else{
                        pos+='_'
                    }
                }
            }
            else {
                if (isJump == 1){
                    if(dimension == 2 && spikeposition2.includes(playerPos)){
                        playerPos = 1;
                    }
                    if(playerPos == i){
                    pos+='O'
                    }
                    else{
                        if(spikeposition2.includes(i)){
                            if(empty == 1){
                                pos+=' '
                            }
                            else{
                                pos+='X'
                            }
                        }
                    }
                }
                else{
                    if(spikeposition2.includes(i)){
                        if(empty == 1){
                            pos+=' '
                        }
                        else{
                            pos+='X'
                        }
                    }
                    else{
                    pos+='_'
                    }
                }
            }
        }
        else{
            if(spikeposition.includes(i) == true){
                if(dimension == 1){
                    if(empty == 1){
                        pos+=' '
                    }
                    else{
                        pos+='X'
                    }
                }
                else{
                    if(spikeposition2.includes(i) == true){
                        if(dimension == 2){
                            if(empty == 1){
                                pos+=' '
                            }
                            else{
                                pos+='X'
                            }
                        }
                    }
                    else{
                    pos+='_'
                    }
                }
            }
            else{
            if(spikeposition2.includes(i) == true){
                if(dimension == 2){
                    if(empty == 1){
                        pos+=' '
                    }
                    else{
                        pos+='X'
                    }
                }
                else{
                    pos+='_'
                }
            }
            if(dimension == 1){
                if(fakeX.includes(i) == true){
                    pos+='X'
                }
                else{
                    pos+='_'
                }
            }
            else{
                if(dimension == 2){
                    if(fakeX2.includes(i) == true){
                        pos+='X'
                    }
                    else{
                        pos+='_'
                    }
                }
            }
            }
        }
    }
}
    pos+='|'
    return pos;
}
var level = 0;
var message = [
    'Beware of the dimensional shifts.',
    'Tricks of the mind can blind you.',
    'Patience, That\'s what you need.',
    'A simple level, but alas, that\'s only what you see.',
    'More tricks of the mind, see the difference for yourself.',
    'You mind is what you see, not what you feel.',
    'What is beyond may question you, but don\'t be a fool, even if it\'s only a small gap.',
    'You want to make more out of your life, but that may only be a dream.',
    'Never let your mind block you from your dreams.',
    'It is too simple to comprehend, so just believe it, as it might give you what you want.'
]
let empty = 0
function levelRender() {
    if (level == 0) {
        fakeX = [0]
        fakeX2 = [0]
        spikeposition = [
            10,
            20,
            30
        ]
        spikeposition2 = [
            15,
            25,
            35
        ]
    }
    if (level == 1) {
        spikeposition = [
            12,
            22,
            32,
            41,
            47
        ]
        spikeposition2 = [
            3,
            17,
            27,
            37,
            43
        ]
    }
    if (level == 2) {
        spikeposition = [
            2,
            3,
            7,
            8,
            12,
            13,
            17,
            18,
            22,
            23,
            27,
            28,
            32,
            33,
            37,
            38,
            42,
            43,
            47
        ]
        spikeposition2 = [
            5,
            10,
            15,
            20,
            25,
            30,
            35,
            40,
            45
        ]
    }
    if (level == 3) {
        spikeposition = [
            2,
            6,
            10,
            14,
            18,
            22,
            26,
            30,
            34,
            38,
            42,
            46
        ]
        spikeposition2 = [
            4,
            8,
            12,
            16,
            20,
            24,
            28,
            32,
            36,
            40,
            44
        ]
    }

    if (level == 4) {
        spikeposition = [
            3,
            
            9,
            
            15,
            
            20,
            
            26,
            
            32,
            
            38,
            44,
        ]
        spikeposition2 = [
            5,
            11,
            17,
            22,
            28,
            34,
            40,
            46
        ]
    }

    if (level == 5) {
        fakeX = [
            5,
            15,
            35,
            25,
            45
        ]
        fakeX2 = [
            5,
            15,
            35,
            25,
            45
        ]
        spikeposition = [0]
        spikeposition2 = [0]
    }

    if (level == 6) {
        fakeX = [
            3,
            6,
            9,
            12,
            15,
            18,
            20,
            23,
            26,
            29,
            32,
            35,
            38,
            41,
            44,
            47
        ]
        fakeX2 = [
            2
        ]
        spikeposition = [
            2
        ]
        spikeposition2 = [
            5,
            8,
            11,
            14,
            17,
            22,
            25,
            28,
            31,
            34,
            37,
            40,
            43,
            46
        ]
    }

    if (level == 7) {
        empty = 1;
        fakeX = [0]
        fakeX2 = [0]
        spikeposition = [
            10,
            20,
            30
        ]
        spikeposition2 = [
            15,
            25,
            35
        ]
    }

    if (level == 8) {
        spikeposition = [
            2,
            6,
            10,
            14,
            18,
            22,
            26,
            30,
            34,
            38,
            42,
            46
        ]
        spikeposition2 = [
            4,
            8,
            12,
            16,
            20,
            24,
            28,
            32,
            36,
            40,
            44
        ]
    }
    if (level == 9) {
        fakeX = [
            3,
            6,
            9,
            12,
            15,
            18,
            20,
            23,
            26,
            29,
            32,
            35,
            38,
            41,
            44,
            47
        ]
        fakeX2 = [
            2
        ]
        spikeposition = [
            2
        ]
        spikeposition2 = [
            5,
            8,
            11,
            14,
            17,
            22,
            25,
            28,
            31,
            34,
            37,
            40,
            43,
            46
        ]
    }

    if (level == 10) {
        main = document.getElementById('show')
        count += Infinity;
        fakeX = [0]
        fakeX2 = [0]
        spikeposition = [0]
        spikeposition2 = [0]
        textShow = 1;
        main.innerHTML = `${count}$ ` + cursor[cursorMove]
    }


}
document.addEventListener('keyup', event => {
    main = document.getElementById('show')
    cursorBuy = document.getElementById('buyCursor')
    speedBuy = document.getElementById('buyTap')
    mapBuy = document.getElementById('buyMap')
    map1 = document.getElementById('Map1')
    map2 = document.getElementById('Map2')
    map3 = document.getElementById('Map3')
    batlle = document.getElementById('fight')
    buyHp = document.getElementById('BuyHp')
    buyDmg = document.getElementById('BuyDmg')
    buyMult = document.getElementById('BuyCash')
    buyMore = document.getElementById('BuyMore')
    makeMoreOutOfYouLife = document.getElementById('MakeMore')
    up1 = document.getElementById('Jump')
    var a = event.keyCode;
    console.log(a)
    if (makeMore == 1){
        up1.innerHTML = posReload(2)
    }
    if (a == 39 && makeMore == 1){
        if(playerPos < 47){
            playerPos++;
            if(isJump > 0){
                up1.innerHTML = posReload(2)
            }
            else{
                let pos = ''
            pos += '|'
            for (i = 1; i < 48; i++) {
                if (playerPos == i) {
                    pos += 'O'
                }
                else {
                    pos += '_'
                }
            }
            pos += '|'
            makeMoreOutOfYouLife.innerHTML = pos;
            }
            makeMoreOutOfYouLife.innerHTML = posReload(1)
        }
        else{
            playerPos = 1;
            level ++;
            levelRender()
        }
    }
    if (a == 38 && makeMore == 1) {
        if (isJump == 0) {
            isJump = 1;
            makeMoreOutOfYouLife.innerHTML = posReload(1)
            up1.innerHTML = posReload(2)
            let pos = ''
            pos += '|'
            for (i = 1; i < 48; i++) {
                if(spikeposition2.includes(i) == true){
                    if(spikeposition2.includes(playerPos) == true){
                        if(empty == 1){
                            pos+=' '
                        }
                        else{
                            pos+='X'
                        }
                    playerPos = 1;
                    }
                    else{
                        if(empty == 1){
                            pos+=' '
                        }
                        else{
                            pos+='X'
                        }
                    }
                }
                else{
                    if(playerPos == i){
                        pos+='O'
                    }
                    else{
                        if(fakeX2.includes(i) == true){
                            pos+='X'
                        }
                        else{
                            pos+='_'
                        }
                    }
                }
            }
            pos += '|'
            up1.innerHTML = pos;
        }
    }
    if (a == 40 && makeMore == 1) {
        if (isJump == 1) {
            isJump = 0;
            makeMoreOutOfYouLife.innerHTML = posReload(1)
            up1.innerHTML = posReload(2)
            let pos = ''
            pos += '|'
            for (i = 1; i < 48; i++) {
                if(spikeposition.includes(i) == true){
                    if(spikeposition.includes(playerPos) == true){
                        if(empty == 1){
                            pos+=' '
                        }
                        else{
                            pos+='X'
                        }
                    playerPos = 1;
                    }
                    else{
                        if(empty == 1){
                            pos+=' '
                        }
                        else{
                            pos+='X'
                        }
                    }
                }
                else{
                    if(playerPos == i){
                        pos+='O'
                    }
                    else{
                        if(fakeX.includes(i) == true){
                            pos+='X'
                        }
                        else{
                            pos+='_'
                        }
                    }
                }
            }
            pos += '|'
            makeMoreOutOfYouLife.innerHTML = pos;
        }
    }
    if (a == 37 && makeMore == 1){
        if(playerPos > 1){
            playerPos--;
            if(isJump > 0){
                up1.innerHTML = posReload(2)
            }
            else{
                let pos = ''
            pos += '|'
            for (i = 1; i < 48; i++) {
                if (playerPos == i) {
                    pos += 'O'
                }
                else {
                    pos += '_'
                }
            }
            pos += '|'
            makeMoreOutOfYouLife.innerHTML = pos;
            }
            makeMoreOutOfYouLife.innerHTML = posReload(1)
        }
    }
    if (a == 55){
        if(count >= 10000000000000){
            makeMore = 1;
            buyMore.innerHTML = 'Use the arrow keys to navigate. Dimensional shifts may appear when you switch dimensions.'
        }
    }
    if (a == 187) {
        count += 5000000000000001;
        level += 1;
        levelRender()
    }
    if (a == 49) {
        if (count >= cost) {
            if (isCursor == 0) {
                cursorCount = 4;
            }
            count -= cost;
            cost = floor;
            isCursor = 1;
            cursorCount++;
            floor += cursorCount * 5;
            main.innerHTML = `${count}$ ` + cursor[cursorMove]
            cursorBuy.innerHTML = `-Press 1- Buy cursor for ${cost}$ Cursors: ` + (cursorCount - 4) + ', earning ' + cursorCount + '$ per 3 taps.'
        }
    }
    if (a == 50) {
        if (count >= speedCost) {
            count -= speedCost;
            speedIsBuy = 1;
            speed += speed;
            speedCost += speed * 50;
            main.innerHTML = `${count}$ ` + cursor[cursorMove]
            speedBuy.innerHTML = `-Press 2- Buy $ per tap for ${speedCost}$ Upgrades: ` + (speed - 1) + '.'
        }
    }
    if (a == 53){
        if(count >= hpCost){
            count-=hpCost;
            hpCost += hpBase;
            hpBase += Math.floor(hpBase / 5)
            buyDmg.innerHTML = '-Press 4- Buy more dmg for ' + dmgCost + '$, Max dmg:' + dmgBaseB + ', Least dmg:' + dmgBaseS + '.'
            buyHp.innerHTML = '-Press 5- Buy more hp for ' + hpCost + '$, your hp is ' + hpBase + '.'
            buyMult.innerHTML = '-Press 6- Buy battling mult for ' + cashMcost + '$, your current mult is ' + cashM + '.'
            main.innerHTML = `${count}$ ` + cursor[cursorMove]
        }
    }
    if (a == 52){
        if(count >= dmgCost){
            count-=dmgCost
            dmgCost += dmgBaseB * 8
            dmgCost = Math.floor(dmgCost)
            dmgBaseB += Math.ceil(dmgBaseB*4)/10
            dmgBaseS += Math.ceil(dmgBaseS*4)/10
            dmgBaseB = Math.floor(dmgBaseB * 10)/10
            dmgBaseS = Math.floor(dmgBaseS * 10)/10
            buyDmg.innerHTML = '-Press 4- Buy more dmg for ' + dmgCost + '$, Max dmg:' + dmgBaseB + ', Least dmg:' + dmgBaseS + '.'
            buyHp.innerHTML = '-Press 5- Buy more hp for ' + hpCost + '$, your hp is ' + hpBase + '.'
            buyMult.innerHTML = '-Press 6- Buy battling mult for ' + cashMcost + '$, your current mult is ' + cashM + '.'
            main.innerHTML = `${count}$ ` + cursor[cursorMove]
        }
    }
    if (a == 54){
        if(count >= cashMcost){
            count -= cashMcost;
            cashMcost += Math.floor(cashM * 400);
            cashM += Math.floor(cashM)/10
            cashM = Math.floor(cashM*10)/10
            buyDmg.innerHTML = '-Press 4- Buy more dmg for ' + dmgCost + '$, Max dmg:' + dmgBaseB + ', Least dmg:' + dmgBaseS + '.'
            buyHp.innerHTML = '-Press 5- Buy more hp for ' + hpCost + '$, your hp is ' + hpBase + '.'
            buyMult.innerHTML = '-Press 6- Buy battling mult for ' + cashMcost + '$, your current mult is ' + cashM + '.'
            main.innerHTML = `${count}$ ` + cursor[cursorMove]
        }
    }
    if (a == 81) {
        if (maps >= 1 && battle == 0) {
            battle = 1;
            name = names[Math.floor(Math.random() * 4)]
            enemyBase = Math.floor(Math.random() * 1250) + 875
            enemyHp = enemyBase
            hp = hpBase;
            enemyDmgM = 10;
            enemyDmgB = 25
            fight.innerHTML = 'You - HP:' + hp + '_' + name + ' - HP:' + enemyHp;
        }
    }
    if (a == 87) {
        if (maps >= 2 && battle == 0) {
            battle = 2;
            name = names[Math.floor(Math.random() * 4) + 4]
            enemyBase = Math.floor(Math.random() * 11665000) + 7750000
            enemyHp = enemyBase
            hp = hpBase;
            enemyDmgM = 280;
            enemyDmgB = 820;
            fight.innerHTML = 'You - HP:' + hp + '_' + name + ' - HP:' + enemyHp;
        }
    }
    if (a == 69) {
        if (maps >= 3 && battle == 0) {
            battle = 3;
            name = names[Math.floor(Math.random() * 4) + 8]
            enemyBase = Math.floor(Math.random() * 25000000000) + 90000000000
            enemyHp = enemyBase
            hp = hpBase;
            enemyDmgM = 7800000;
            enemyDmgB = 69000000;
            fight.innerHTML = 'You - HP:' + hp + '_' + name + ' - HP:' + enemyHp;
        }
    }
    if (a == 51) {
        if (count >= mapCost) {
            count -= mapCost;
            maps += 1;
            mapCost = mapCost * mapCost * 4
            mapBuy.innerHTML = `-Press 3- Buy map for ${mapCost}$.`
            if (maps == 1) {
                map1.innerHTML = 'Press q to journey to the wild plains!'
                yesMap = 1;
            }
            else {
                if (maps == 2) {
                    map2.innerHTML = 'Press w to journey to the magical realm!'
                }
                else {
                    map3.innerHTML = 'Press e to journey to the alternate dimension!'
                }
            }
        }
    }
    if(makeMore == 1 && level >= 1){
        buyMore.innerHTML = message[level-1]
    }
    if (event.code === 'Space') {
        count = Math.round(count)
        if (yesMap >= 1) {
            buyDmg.innerHTML = '-Press 4- Buy more dmg for ' + dmgCost + '$, Max dmg:' + dmgBaseB + ', Least dmg:' + dmgBaseS + '.'
            buyHp.innerHTML = '-Press 5- Buy more hp for ' + hpCost + '$, your hp is ' + hpBase + '.'
            buyMult.innerHTML = '-Press 6- Buy battling mult for ' + cashMcost + '$, your current mult is ' + cashM + '.'
        }
        if (battle >= 1) {
            enemyHp -= Math.floor(Math.random() * dmgBaseB - (dmgBaseS - 1) + 1) + Math.floor(dmgBaseS)
            hp -= Math.floor(Math.random() * enemyDmgB - (enemyDmgM - 1)) + Math.floor(enemyDmgM - 1)
            fight.innerHTML = 'You - HP:' + hp + '_' + name + ' - HP:' + enemyHp;
            if (enemyHp <= 0) {
                battle = 0;
                if (battle == 2) {
                    add = Math.floor(Math.floor(Math.random() * 7500) + 5000 * cashM)
                }
                else {
                    if (battle == 3){
                        add = Math.floor(Math.floor(Math.random * 80000000000) + 120000000000)
                    }
                    else {
                        add = Math.floor(Math.floor(Math.random() * 400) + 600 * cashM)
                    }
                }
                fight.innerHTML = 'Win : +' + add + '$, Extra cash gain based on difficulty: ' + Math.floor(enemyBase*cashM) + '$.'
                count += add + enemyBase * cashM;
                main.innerHTML = `${count}$ ` + cursor[cursorMove]
            }
            if (hp <= 0) {
                battle = 0;
                fight.innerHTML = 'K.O.  Cash gain based on dmg dealt: ' + Math.floor(Math.floor(enemyBase - enemyHp)* cashM) + '$'
                count += Math.floor(enemyBase - enemyHp) * cashM
                main.innerHTML = `${count}$ ` + cursor[cursorMove]
            }
        }
        else {
            if(count >= 1000000000000 && makeMore == 0){
                buyMore.innerHTML = '-Press 7- Make more out of your life for 10,000,000,000,000$.'
            }
            else{
            }
            if (messages[taps] != '') {
                main.innerHTML = messages[taps]
                taps++;
            }
            else {
                count += speed;
                if (count >= mapCost) {
                    mapBuy.innerHTML = `-Press 3- Buy map for ${mapCost}$.`
                }
                if (count >= cost || isCursor == 1) {
                    cursorBuy.innerHTML = `-Press 1- Buy cursor for ${cost}$ Cursors: ` + (cursorCount - 4) + ', earning ' + cursorCount + '$ per 3 taps.'
                }
                if (count >= speedCost || speedIsBuy == 1) {
                    speedBuy.innerHTML = `-Press 2- Buy $ per tap for ${speedCost}$ Upgrades: ` + (speed - 1) + '.'
                }
                if (isCursor == 1) {
                    main.innerHTML = `${count}$ ` + cursor[cursorMove]
                    cursorMove++;
                    if (cursorMove == 3) {
                        cursorMove = 0;
                        count += cursorCount;
                    }
                }
                else {
                    main.innerHTML = `${count}$ ` + talking[Math.floor(count / 5)]
                    if (talking[Math.floor(count / 5)] == 'undefined.') {
                        count = 500;
                    }
                }
            }
        }
    }
});