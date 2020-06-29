var money = document.getElementById('money')
var getMoney = document.getElementById('getMoney')
var tickDecBtn = document.getElementById('up')
var timeOut = 0;
var timeoutLength = 1000 
var moneyCount = 0;
var tickDecCost = 1;
var fight = document.getElementById('battleBtn')
var fightText = document.getElementById('battle')
var yourHp = 100;
var enemyHp = 100;
var isFight = 0;
var fightTimeout = 0;
var waste = document.getElementById('waste')
var wasteCount = -1;
var talkArray = [
    'Owo',
    'UwU',
    'Uwu?',
    'Owo...',
    'Null',
    'nwn',
    '...?',
    'U waster',
    '0w0',
    'y?',
    'sturp',
    'gah',
    'gahhhh',
    'GAAAAH!',
    '911',
    'police coming',
    'wee woo',
    '*siren',
    'kiel him.',
    'sry cant do that',
    '...?',
    '...!',
    'o w o',
    '*silence',
    '.....',
    'seriously stop',
    'ur wasting time',
    'preshous time',
    '!w!',
    'ko...',
    '021,022,88529',
    'hello me dev',
    'kil him',
    'no',
    'owowo',
    'OWO',
    'oWo',
    'xWx',
    'oki he ded',
    'here have muni',
    'oops i mean bone',
    'ok gud bye'
]
var bone = 0;
var boneShow = document.getElementById('bones')
var boneMonsterWait = 0;
var boneMonster = document.getElementById('boneMonster')
var boneWait = 0
var canFeed = false
var productionbonerate = 0;

function boneMonsterGo(){
    productionbonerate = 0.1
    canFeed = true;
    window.setInterval(function(){
        if(boneWait == 0){
            boneWait = 30;
            boneMonster.innerHTML = 'VVV=_ am bone monster | bone production ['+productionbonerate+']'
            bone += productionbonerate
            bone = Math.round(bone * 10) / 10
            boneShow.innerHTML = 'You have '+bone+' bones. [The bone monster is coming... '+boneMonsterWait+']'
            
        }
        else{
            boneWait -= 1;
            boneMonster.innerHTML = 'VVV=O am bone monster | bone production ['+productionbonerate+']'
        }
    },100)
}
window.setInterval(function(){
    if(boneMonsterWait >= 2){
        boneShow.innerHTML = 'You have '+bone+' bones. [The bone monster is coming... '+boneMonsterWait+']'
        if(boneMonsterWait == 1){
            boneMonsterGo()
            boneShow.innerHTML = 'You have '+bone+' bones. [The bone monster is here...]'
        }
        boneMonsterWait -= 1;
    }
},800)
waste.onclick = function(){
    if(moneyCount >= 1){
        moneyCount -= 1;
        wasteCount += 1
        if(talkArray[wasteCount] == 'here have muni'){
            bone++;
            boneShow.innerHTML = 'You have '+bone+' bones.'
            boneMonsterWait = 30;
        }
        if(talkArray[wasteCount] == undefined){
            waste.innerHTML = '??? | waste ur muny here? [1]'
        }
        else{
        waste.innerHTML = talkArray[wasteCount] + ' | waste ur muny here! [1]'
        }
    }
}
window.setInterval(function(){
    if(isFight == 1){
        fightText.innerHTML = 'Your Hp:' + yourHp + ' | Enemy Hp:' + enemyHp;
        fight.innerHTML = 'Attack'
        if(yourHp >= 1){
            yourHp -= 1;
        }
        else{
            loose()
        }
    }
},170)
window.setInterval(function(){
    if(fightTimeout >= 1){
        fightTimeout -= 1;
    }
    else{
        fight.innerHTML = 'Fight Someone [15]'
    }
},500)
fight.onclick = function(){
    if(isFight == 0 && fightTimeout == 0){
        if(moneyCount >= 15){
            moneyCount -= 15;
            isFight = 1;
        }
    }
    else{
        if(fightTimeout != 0){
            
        }
        else{
        fightText.innerHTML = 'Your Hp:' + yourHp + ' | Enemy Hp:' + enemyHp;
        enemyHp -= 1;
        if(enemyHp <= 0){
            win()
        }
    }
    }
}
function loose(){
    isFight = 0;
    yourHp = 100;
    enemyHp = 100;
    fightText.innerHTML = 'K.O.'
    fightTimeout = 3;
}
function win(){
    isFight = 0;
    yourHp = 100;
    enemyHp = 100;
    moneyCount += 30;
    fightText.innerHTML = 'Success! +30$'
    fightTimeout = 3;
}
function round(returner){
    thingrounded = returner
    if(returner >= 1000000000000000000000){
        thingrounded = Math.floor(thingrounded / 10000000000000000000) / 100
        thingrounded = thingrounded + 'Sx'
    }
    else{
        if(returner >= 1000000000000000000){
            thingrounded = Math.floor(thingrounded / 10000000000000000) / 100
        thingrounded = thingrounded + 'Qt'
        }
        else{
            if(returner >= 1000000000000000){
                thingrounded = Math.floor(thingrounded / 10000000000000) / 100
        thingrounded = thingrounded + 'Qd'
            }
            else{
                if(returner >= 1000000000000){
                    thingrounded = Math.floor(thingrounded / 10000000000) / 100
        thingrounded = thingrounded + 'T'
                }
                else{
                    if(returner >= 1000000000){
                        thingrounded = Math.floor(thingrounded / 10000000) / 100
        thingrounded = thingrounded + 'B'
                    }
                    else{
                        if(returner >= 1000000){
                            thingrounded = Math.floor(thingrounded / 10000) / 100
        thingrounded = thingrounded + 'M'
                        }
                        else{
                            
                        }
                    }
                }
            }
        }
    }
    return thingrounded
}
window.setInterval(function(){
    
    money.innerHTML = round(moneyCount) +'$'
    if(timeOut > 0){
        timeOut -= 1;
        getMoney.innerHTML = '['+timeOut+']'
    }
    else{
    getMoney.innerHTML = 'Get Some Money'
    }
},15)
getMoney.onclick = function(){
    if(timeOut <= 0){
    timeOut = timeoutLength
    moneyCount++;
    }
}
tickDecBtn.onclick = function(){
    if(moneyCount >= tickDecCost){
        moneyCount -= tickDecCost;
        timeoutLength -= Math.floor(timeoutLength / 10)
        tickDecCost += Math.floor(tickDecCost * 2)
        if(timeoutLength <= 10){
            tickDecCost = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
            tickDecBtn.innerHTML = 'Sold Out [inf] [10 => 10]'
        }
        else{
        tickDecBtn.innerHTML = 'Decrease Tick Count ['+round(tickDecCost)+'] ['+timeoutLength+' => '+(timeoutLength - Math.floor(timeoutLength / 10))+']'
    }}
}