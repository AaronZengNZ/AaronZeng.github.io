var money = document.getElementById('money')
var getMoney = document.getElementById('getMoney')
var tickDecBtn = document.getElementById('up')
var timeOut = 0;
var timeoutLength = 1000 
var moneyCount = 0;
var tickDecCost = 1;

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