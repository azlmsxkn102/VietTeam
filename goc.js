// ==UserScript==
// @name       ʚ๖ۣۜNσɾα‏
// @namespace    -
// @version   v1.0
// @description by Wibu in VietNam XD
// @author       Duong Thai Tan Dat
// @match        *://sandbox.moomoo.io/*
// @match        *://moomoo.io/*
// @grant        none
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @require https://cdn.jsdelivr.net/gh/emn178/js-sha3/build/sha3.min.js

// ==/UserScript==

document.addEventListener("mousedown", (e)=>{
    if (e.which == 3) {
        hat(40);
        acc(19);
    }
}, false);
document.addEventListener("mouseup", (e)=>{
    if (e.which == 3) {
        if (myPlayer.y < 2400){
                    hat(15);
                } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                    hat(31);
                } else {
                    hat(12);
                }
                acc(11);
    }
}, false);

let mouseX;
let mouseY;

let width;
let height;

setInterval(() => {
    if(autoaim == true) {
        doNewSend(["2", [nearestEnemyAngle]]);
    }
}, 0);

setInterval(() => {
    if(hatToggle == 1) {
        if(oldHat != normalHat) {
            hat(normalHat);
            console.log("Tried. - Hat")
        }
        if(oldAcc != normalAcc) {
            acc(normalAcc);
            console.log("Tried. - Acc")
        }
        oldHat = normalHat;
        oldAcc = normalAcc
    }
}, 25);

function normal() {
    hat(normalHat);
    acc(normalAcc);
}

function aim(x, y){
     var cvs = document.getElementById("gameCanvas");
     cvs.dispatchEvent(new MouseEvent("mousemove", {
         clientX: x,
         clientY: y

     }));
}

let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");

var instaSpeed = 235;
var nearestEnemy;
var nearestEnemyAngle;
var cps = false;
var isEnemyNear;
var primary;
var secondary;
var foodType;
var wallType;
var spikeType;
var millType;
var mineType;
var boostType;
var turretType;
var spawnpadType;
var autoaim = false;
var autoprimary = false;
var autosecondary = false;
var tick = 1;
var oldHat;
var oldAcc;
var enemiesNear;
var normalHat;
var normalAcc;
var ws;
var msgpack5 = msgpack;
var boostDir;
let myPlayer = {
    id: null,
    x: null,
    y: null,
    dir: null,
    object: null,
    weapon: null,
    clan: null,
    isLeader: null,
    hat: null,
    accessory: null,
    isSkull: null
};

let healSpeed = 60;
var messageToggle = 0;
var clanToggle = 0;
let healToggle = 1;
let hatToggle = 1;

document.msgpack = msgpack;
function n(){
     this.buffer = new Uint8Array([0]);
     this.buffer.__proto__ = new Uint8Array;
     this.type = 0;
}
WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m){
    if (!ws){
        document.ws = this;

        ws = this;
        socketFound(this);
    }
    this.oldSend(m);
};


function socketFound(socket){
    socket.addEventListener('message', function(message){
        handleMessage(message);
    });
}

function handleMessage(m){
    let temp = msgpack5.decode(new Uint8Array(m.data));
    let data;
    if(temp.length > 1) {
        data = [temp[0], ...temp[1]];
        if (data[1] instanceof Array){
            data = data;
        }
    } else {
      data = temp;
    }
    let item = data[0];
    if(!data) {return};

    if(item === "io-init") {
            let cvs = document.getElementById("gameCanvas");
            width = cvs.clientWidth;
            height = cvs.clientHeight;
            $(window).resize(function() {
                width = cvs.clientWidth;
                height = cvs.clientHeight;
            });
            cvs.addEventListener("mousemove", e => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
        }

    if (item == "1" && myPlayer.id == null){
        myPlayer.id = data[1];
    }

    if (item == "33") {
        enemiesNear = [];
        for(let i = 0; i < data[1].length / 13; i++) {
            let playerInfo = data[1].slice(13*i, 13*i+13);
            if(playerInfo[0] == myPlayer.id) {
                myPlayer.x = playerInfo[1];
                myPlayer.y = playerInfo[2];
                myPlayer.dir = playerInfo[3];
                myPlayer.object = playerInfo[4];
                myPlayer.weapon = playerInfo[5];
                myPlayer.clan = playerInfo[7];
                myPlayer.isLeader = playerInfo[8];
                myPlayer.hat = playerInfo[9];
                myPlayer.accessory = playerInfo[10];
                myPlayer.isSkull = playerInfo[11];
            } else if(playerInfo[7] != myPlayer.clan || playerInfo[7] === null) {
                enemiesNear.push(playerInfo);
            }
        }
    }

    isEnemyNear = false;
    if(enemiesNear) {
        nearestEnemy = enemiesNear.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
    }

    if(nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 0) {
            isEnemyNear = true;
            if(autoaim == false && myPlayer.hat != 7 && myPlayer.hat != 53) {
                normalHat = 6;
                if(primary != 8) {
                    normalAcc = 19
                }
            };
        }
    }
    if(isEnemyNear == false && autoaim == false) {
        normalAcc = 11;
        if (myPlayer.y < 2400){
            normalHat = 15;
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            normalHat = 31;
        } else {
	        normalHat = 12;
        }
    }
    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
    }

   if(item == "h" && data[1] == myPlayer.id) {
       if(data[2] < 100 && data[2] > 0 && healToggle == 1) {
           setTimeout( () => {
               place(foodType, null);
               place(foodType, null);
               place(foodType, null);
               place(foodType, null);
           }, healSpeed);

       }
   }
   update();
}


function doNewSend(sender){
    ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));
}

function acc(id) {
    doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, id, 1]]);
}

function hat(id) {
    doNewSend(["13c", [0, id, 0]]);
}


function place(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
}

function boostSpike() {
    if(boostDir == null) {
        boostDir = nearestEnemyAngle;
    }
    place(spikeType, boostDir + toRad(90));
    place(spikeType, boostDir - toRad(90));
    place(boostType, boostDir);
    doNewSend(["33", [boostDir]]);
}

var repeater = function(key, action, interval) {
    let _isKeyDown = false;
    let _intervalId = undefined;

    return {
        start(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = true;
                if(_intervalId === undefined) {
                    _intervalId = setInterval(() => {
                        action();
                        if(!_isKeyDown){
                            clearInterval(_intervalId);
                            _intervalId = undefined;
                            console.log("claered");
                        }
                    }, interval);
                }
            }
        },

        stop(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = false;
            }
        }
    };


}


const healer1 = repeater(100, () => {place(foodType, boostDir);
                                    place(foodType, boostDir);
                                    place(foodType, boostDir)}, 50);
const boostPlacer = repeater(97, () => {place(boostType)}, 0);
const spikePlacer = repeater(86, () => {place(spikeType)}, 0);
const millPlacer = repeater(78, () => {place(millType)}, 0);
const turretPlacer = repeater(72, () => {place(turretType)}, 0);
var diem = false;
document.addEventListener('keydown', (e)=>{
    spikePlacer.start(e.keyCode);
    healer1.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    millPlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);
    if (e.keyCode == 13 && diem == false) {
        diem = true;
    } else {
        if (e.keyCode == 13 && diem == true) {
            diem = false;
        }
    }
    if (e.keyCode == 96 && diem == false) {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["c", [1]]);

       setTimeout(()=>{
           doNewSend(["13c", [0, 53, 0]]);
           doNewSend(["13c", [0, 0, 1]]);
           doNewSend(["13c", [0, 19, 1]]);
           doNewSend(["5", [secondary, true]]);
       }, instaSpeed - 130);

        setTimeout (()=>{
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
             doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 0, 1]]);
                if (myPlayer.y < 2400){
                    hat(15);
                } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                    hat(31);
                } else {
                    hat(12);
                }
                acc(11);
            setTimeout (()=>{
                doNewSend(["5", [secondary, true]]);
                setTimeout(()=>{
                    doNewSend(["5", [primary, true]]);
                },2000);
            },1000);
            autoaim = null;
        }, instaSpeed);
    }
    if (e.keyCode == 36 && diem == false) {
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
    }
})

document.addEventListener('keyup', (e)=>{
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer1.stop(e.keyCode);
})


function isElementVisible(e) {
    return (e.offsetParent !== null);
}

function toRad(angle) {
    return angle * 0.01745329251;
}

function dist(a, b){
    return Math.sqrt( Math.pow((b.y-a[2]), 2) + Math.pow((b.x-a[1]), 2) );
}

function update() {
    for (let i=0;i<9;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            primary = i;
        }
    }

    for (let i=9;i<16;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            secondary = i;
        }
    }

    for (let i=16;i<19;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            foodType = i - 16;
        }
    }

    for (let i=19;i<22;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            wallType = i - 16;
        }
    }

    for (let i=22;i<26;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            spikeType = i - 16;
        }
    }

    for (let i=26;i<29;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            millType = i - 16;
        }
    }

    for (let i=29;i<31;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            mineType = i - 16;
        }
    }

    for (let i=31;i<33;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            boostType = i - 16;
        }
    }

   for (let i=33;i<36;i++){
       if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
           turretType = i - 16;
       }
   }

   for (let i=36;i<37;i++){
       if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
           spawnpadType = i - 16;
       }
   }

   for (let i=37;i<39;i++){
       if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
           turretType = i - 16;
       }
   }
}
