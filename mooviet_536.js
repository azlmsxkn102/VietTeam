﻿// ==UserScript==
// @name           MooViet
// @namespace      -
// @version        5.3.6
// @description    MooViet
// @author         VietTeam
// @match          *://moomoo.io/*
// @match          *://dev.moomoo.io/*
// @match          *://*sandbox.moomoo.io/*
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// ==/UserScript==

// MooViet 2020. v-5.3.6 . Real Version! No Fake MooViet

//
//   I decided to leave MooViet as a userscript for now. All of my other mods will be based
//   on google chrome extensions (with firefox/edge support in the future).
//
//   MooMoo.io Hacks>
//   Fixed All Fealtures And Uptades! By VietTeam>

//   Never Coppy MooViet Codes!
//   Same Noobs Copied MooViet! But We Trust You , You Never Coppying!

// <<Changelog>>
// v5.3.6  Added
//
//
// v4.7.0  Uptaded Hat/Acc Selector's(All Selector's).
//         Old Hat/Acc Selector Deleted(All Selector's).
//         Insta Kill Uptaded And Fixed("Sametime insta kill no work" Problem Fixed).
//         River Click Fixed("No Work" Problem Fixed).
//         Help Menu Uptaded.
//         Added Place Chat's (in Chat Menu).
// v3.2.9  Added ChangeWeapon Menu>Katana,CrossBow,Musket.
//         Help Menu Uptaded.
//         Added Speed Armor's.
//         Added River Click.
//         Added MooViet Own Map.
//         Added Better Big Map.
//         Auto Chats Menu.
// v2.9.1  Changed Hat-Macro Menu.
//         Added Insta Kill Menu.
//         Added Choose Secondary Weapon Check.
//         Added Reload Secondary Weapon Check.
//         Added Reload Secondary Weapon Chat.
//         Added Reload Secondary Weapon Hat/Acc Sellector.
//         Added End Hat/Acc(Insta Kill For).
//         Added Music Menu(END).
//         Added Hat Macro Menu(HOME).
//         Added Chat Menu(ESC).
// v2.6.3  Added Insta kill Chat.
//         Added Bot Mode.
//         Added Defence Heal.
//         Added Auto Reset Hat/Acc.
//         Added Clicking Enemy.
//         Added Clicking No Enemy.
//         Added New Hotkey For The Winmills.
//         Added Hat Hotkeys Menu.
//         Added Boost+Spike Setting.
//         Added Insta Kill Setting.
//         Added New Menu (ESC)
// v2.6.2  Fixed All Fealtures!!!
// v2.6.1  Added update message popup
// v2.6    MENU HOTKEY CHANGED TO ESCAPE!!!
//         Added true autoupdating for MooViet
//         Settings now saved on reload/update
//         Spike and trap circles added
//         New hotkeys for the circles and turrets
// v2.5    Updated domain matches to include sandbox
//         Added MooViet menu button to the moomoo login
//         Added a close button to the MooViet Menu
// v2.4    Added keybind menu
//         Fixed bug: Map markers not displaying
//         Fixed bug: Instakill sometimes quits working
// v2.3    Fixed offensive and support clicking hats.
//         Fixed free hats not being equipped
// v2.2    Updated encoding to be compatible with moomoo.io v1.6.3
// v2.1    Disactivated the video ad blocker to prevent problems until I convert this to an extension
//         I highly suggest you download AdBLockPlus Extension until this gets fixed
// v2.0    Added an improved in-game menu

var fh = false; var xml;
setInterval(()=>{null}, 100);
$("#enterGame").click( () => {
   if (fh == false) {
    fh = true
   } else {
       fh = false
   }
})
setInterval(() => {
if (fh == false) {
    $("#youtuberOf").html(`<div id="youtuberOf">
    ?
		<div class="spanLink" id="featuredYoutube"><a target="_blank" class="ytLink" href=""><i class="material-icons" style="vertical-align: top;">?</i> VietTeam</a></div></div>

	</div>
Featured Hacker:`)
}
}, 100);


document.getElementById("gameName").style = "color:red; font-size:100px;";
document.getElementById("gameName").innerHTML = "Onii-Chan";
document.getElementById("loadingText").style = "font-size:45px; color:yellow; text-align: center;";
document.getElementById("loadingText").innerHTML = "Sản phẩm của @Dat";
document.getElementById("enterGame").innerHTML = "LinhKa Sờ tát tô!";
document.getElementById("enterGame").style = "background-color:red; color:yellow; width:100% padding-bottom:10px;";
document.getElementById("mapDisplay").style = "position: absolute; bottom: 20px; left: 20px; display: inline-block; width: 130px; height: 130px; pointer-events: all; background-color: rgba(0, 0, 0, 0.25); border-radius: 4px; outline-style:solid; outline-color:red;";
document.getElementById("foodDisplay").style = "color:yellow; outline-style:solid; outline-color:red;";
document.getElementById("woodDisplay").style = "color:yellow; outline-style:solid; outline-color:red;";
document.getElementById("stoneDisplay").style = "color:yellow; outline-style:solid; outline-color:red;";
document.getElementById("allianceButton").style = "outline-style:solid; outline-color:red;";
document.getElementById("storeButton").style = "outline-style:solid; outline-color:red;";
document.getElementById("chatButton").style = "outline-style:solid; outline-color:red;";
document.getElementById("ageBar").style = "outline-style:solid; outline-color:red;";
document.getElementById("ageText").style = "color:yellow; background-color:red; border-style:solid; border-color:red; opacity:0.4; width:50px; height:20px; left:610px; bottom:600px;";
document.getElementById("topInfoHolder").style = "outline-style:solid; outline-color:red;";
document.getElementById("killCounter").style = "outline-style:solid; outline-color:red;";
document.getElementById("upgradeHolder").style = "outline-style:solid; outline-color:red; background-color:red; z-index:100; width: 100%; position: absolute; text-align: center; top: 10px;";
document.getElementById("chatBox").style = "outline-style:solid; outline-color:red; padding: 6px; font-size: 20px; color:red; background-color: rgba(255, 215, 0, 0.3); border-radius: 4px; pointer-events: all; border: 0;";
document.getElementById("chatBox").placeholder = "Oni-Chan Kowaii...";
document.getElementById("diedText").innerHTML = "Địt mẹ mày! Mày ngu vãi LỒN!";

let mouseX;
let mouseY;

let width;
let height;

setInterval(() => {
   if(clanToggle == 1) {
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
    }
    doNewSend(["testing", [6]]);
}, 200);

setInterval(() => {
    if(messageToggle == 1) {
        doNewSend(["ch", [animate(true, 5)]])
    }
}, 200);

setInterval(() => {
    if(autoaim == true) {
        doNewSend(["2", [nearestEnemyAngle]]);
    }
}, 0);
var botSpan = document.createElement("span");
botSpan.innerHTML=""
botSpan.id="ezgetrekt"
            var ageDiv = document.getElementById("ageText");
             ageDiv.prepend(botSpan);
setInterval(() => {
    if(BotToggle == 1) {
botSpan.innerHTML="VietTeam Bot "
        ageDiv.prepend(botSpan);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["6", [3]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [9]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
        doNewSend(["10", ["MooViet"]]);
        doNewSend(["ch", [""]]);
        doNewSend(["33", [nearestEnemyAngle]]);
        setTimeout( () => {
            doNewSend(["ch", ['']]);
        }, 5000);}else{
botSpan.innerHTML=""
        }
}, 1);

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
//texts
var gamenametext = "MooViet"
var AutoReset;
var nearestEnemy;
var nearestEnemyAngle;
var isEnemyNear;
var instaSpeed = 210;
var speedinsta;
var bigmap = true;
var instakill;
var primary;
var Speed = false;
var Speedanti = false;
var movechat;
var chat123;
var chatplace;
var secondary;
var foodType;
var ResetHat
var wallType;
var spikeType = false;
var millType = false;
var mineType;
var boostType = false;
var turretType = false;
var spawnpadType;
var autohealspeed = "99X"
var endhat = "Soldier Helmet"
var endacc = "Corrupt X Wings"
var lt = "Spike"
var rt = "Spike"
var instalt = "Bull Helmet"
var instart = "Turret Gear"
var defencehat = "Soldier Helmet"
var defenceacc = "Corrupt X Wings"
var clickenemyhat = "Bull Helmet"
var clickenemyacc = "Blood Wings"
var clicknoenemyhat = "Samurai Armor"
var clicknoenemyacc = "None"
var bowhat = "Turret Gear"
var bowacc = "None"
var instahat = "Bull Helmet"
var insta2hat = "Turret Gear"
var instaacc = "Blood Wings"
var insta2acc = "None"
var speedhat = "Booster Hat"
var speedacc = "Monkey Tail"
var reloadhat = "Samurai Armor"
var reloadacc = "None"
var otherinsta = ""
var speedarmorhat = "Booster Hat"
var speedarmoracc = "Monkey Tail"
var speedarmorriverhat = "Flipper Hat"
var speedarmorriveracc = "Monkey Tail"
var speedarmorwinterhat = "Winter Cap"
var speedarmorwinteracc = "Monkey Tail"
var instaother;
var autoaim = false;
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


let healSpeed = 95;
var messageToggle = 0;
var clanToggle = 0;
let healToggle = 0;
let healToggledef = 0;
var BotToggle = 0;
let hatToggle = 0;
var AimBotToggle = 0

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
    if (item == "h" && data[1] == myPlayer.id) {
        var hp = data[2];
        var currentheal = hp;
        document.getElementById("healthDisplay").innerHTML = hp.toString();
        if(currentheal <= 50 && currentheal > 25){
            document.getElementById("healthDisplay").style.color = "yellow"
        }else if(currentheal <= 25 && currentheal > 10){
            document.getElementById("healthDisplay").style.color = "orange"
        }else if(currentheal <= 10 && currentheal < 25){
            document.getElementById("healthDisplay").style.color = "red"
        }else if(currentheal >= 51 && currentheal > 50){
            document.getElementById("healthDisplay").style.color = "lime"
        }
    }
    if(data[0]=="2"){
    document.getElementById("healthDisplay").innerHTML = "100";
    document.getElementById("healthDisplay").style.color = "lime"
    }
    if(data[0] == "11"){
    document.getElementById("healthDisplay").innerHTML = "0";
    document.getElementById("healthDisplay").style.color = "red"
    }
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
var Acc = document.getElementById("acc").value;
    var Hat = document.getElementById("Hat").value;
    if(nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 205) {
            isEnemyNear = true;
            if(autoaim == false && myPlayer.hat != 26 && myPlayer.hat != 26) {
                normalHat = Hat;
                if(primary != 8) {
                    normalAcc = Acc
                }
            };
        }
    }
    if(isEnemyNear == false && Speed == true) {
        var Accspeedwinter = document.getElementById("accspeedwinter").value;
    var Hatspeedwinter = document.getElementById("hatspeedwinter").value;
                var Accspeedriver = document.getElementById("accspeedriver").value;
    var Hatspeedriver = document.getElementById("hatspeedriver").value;
                        var Accspeednormal = document.getElementById("accspeednormal").value;
    var Hatspeednormal = document.getElementById("hatspeednormal").value;
        if (myPlayer.y < 2400){
                 normalHat = Hatspeedwinter;
                 normalAcc = Accspeedwinter;
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                 normalHat = Hatspeedriver;
                 normalAcc = Accspeedriver;
        } else {
                 normalHat = Hatspeednormal;
                 normalAcc = Accspeednormal;
        }
    }
    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
    }
       if(item == "h" && data[1] == myPlayer.id) {
       if(data[2] < 100 && data[2] > 0 && healToggledef == 1) {
               place(foodType, null);
               place(foodType, null);

       }
   }
   if(item == "h" && data[1] == myPlayer.id) {
       if(data[2] < 100 && data[2] > 0 && healToggle == 1) {
           setTimeout( () => {
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
        boostDir = nearestEnemyAngle;
        boostDir = myPlayer.dir
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

const healer = repeater(81, () => {place(foodType)}, 0);
const boostPlacer = repeater(70, () => {place(boostType)}, 0);
const spikePlacer = repeater(86, () => {place(spikeType)}, 0);
const millPlacer = repeater(78, () => {place(millType)}, 0);
const turretPlacer = repeater(72, () => {place(turretType)}, 0);
const boostSpiker = repeater(71, boostSpike, 0);

document.addEventListener('keydown', (e)=>{
    spikePlacer.start(e.keyCode);
    healer.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    boostSpiker.start(e.keyCode);
    millPlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);

   if (e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
       for (let i=0;i<4;i++){
            let angle = myPlayer.dir + toRad(i * 90);
            place(spikeType, angle)
       }
   }

       if (e.keyCode == 79 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
             let angle = myPlayer.dir + toRad(i * 90);
             place(boostType, angle)
        }
    }
    if (e.keyCode == BullHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);

    }
    if (e.keyCode == SoldierHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 6, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 21, 1]]);
    }
    if (e.keyCode == TankGearKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 40, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 19, 1]]);
    }
    if (e.keyCode == TurretKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 53, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 13, 1]]);
    }

    if (e.keyCode == SamuraiArmorKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 20, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
    }

    if (e.keyCode == BoosterHatKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 12, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 11, 1]]);
    }
        if (e.keyCode == 77 && bigmap== true && document.activeElement.id.toLowerCase() !== 'chatbox') {
        $("#mapDisplay").css({'position': 'absolute',
                  'width': '500px',
                  'height': '500px',});
        setTimeout( () => {
      bigmap = false
    }, 200);
    }
            if (e.keyCode == 77 && bigmap == false && document.activeElement.id.toLowerCase() !== 'chatbox') {
        $("#mapDisplay").css({'position': 'absolute',
                  'width': '130px',
                  'height': '130px',});
        setTimeout( () => {
      bigmap = true
    }, 200);
    }
                   //this insta now useing not put key!
    if(e.keyCode == 0 && document.activeElement.id.toLowerCase() !== 'chatbox') {
             if (otherinsta == "WorldLifeMod") {
                         autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
         doNewSend(["ch", ["WHOWIN?MEYEAH"]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 160);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 52, 0]]);
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 19, 1]]);
            doNewSend(["13c", [0, 12, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 11, 1]]);
            autoaim = false;
        }, instaSpeed);
             }
             if (otherinsta == "OverlyDedMod") {
                         autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
                    doNewSend(["ch", ["BaomDednUbHA"]]);

            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 160);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 52, 0]]);
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 19, 1]]);
            doNewSend(["13c", [0, 12, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 11, 1]]);
            autoaim = false;
        }, instaSpeed);
             }
             if (otherinsta == "PitonMod") {
        autoaim = false;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
                        doNewSend(["ch", ["HahaWhoIsKing?EznUb"]]);
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 200);
        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 6, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 21, 1]]);
        autoaim=false
        }, instaSpeed);
             }
             if (otherinsta == "DraGonMod") {
                         autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
                doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["ch", [messd(true, 5)]])
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 130);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
                        doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 52, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["13c", [0, 13, 1]]);
            doNewSend(["13c", [0, 11, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["13c", [0, 19, 1]]);
            doNewSend(["13c", [0, 12, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 11, 1]]);
            autoaim = null;
        }, instaSpeed);
             }
             if (otherinsta == "DeathMod") {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["ch", [mess(true, 5)]])
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 160);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 52, 0]]);
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 19, 1]]);
            doNewSend(["13c", [0, 12, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 11, 1]]);
            autoaim = false;
        }, instaSpeed);
                         }//deathmodend
    }

          if(e.keyCode == 86 && chatplace == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Placed Spike"]]);
    }
              if(e.keyCode == 70 && chatplace == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Placed Trap/BoostPad"]]);
    }
              if(e.keyCode == 78 && chatplace == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Placed Windmill"]]);
    }
              if(e.keyCode == 72 && chatplace == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Placed Turret"]]);
    }
    if(e.keyCode == 87 && movechat == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Up Moved"]]);
    }

   if(e.keyCode == 83 && movechat == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Down Moved"]]);
    }

   if(e.keyCode == 65 && movechat == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Left Moved"]]);
    }

   if(e.keyCode == 68 && movechat == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Right Moved"]]);
    }
   if(e.keyCode == 49 && chat123 == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Choosed First Weapon"]]);
    }
   if(e.keyCode == 50 && chat123 == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Choosed Secondary Weapon"]]);
    }
   if(e.keyCode == 51 && chat123 == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Choosed Food"]]);
    }
   if(e.keyCode == 52 && chat123 == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Choosed Wall"]]);
    }
   if(e.keyCode == 53 && chat123 == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Choosed Spike"]]);
    }
       if(e.keyCode == 54 && chat123 == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Choosed Windmill"]]);
    }
       if(e.keyCode == 55 && chat123 == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Choosed Trap/BoostPad"]]);
    }
      if(e.keyCode == 56 && chat123 == true && document.activeElement.id.toLowerCase() !== 'chatbox') {
                         doNewSend(["ch", ["Choosed Turret/Teleport/Edc"]]);
    }

    if(e.keyCode == 50 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                       doNewSend(["6", [15]]);
    }


    if(e.keyCode == 49 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                       doNewSend(["6", [4]]);
    }


    if(e.keyCode == 51 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                       doNewSend(["6", [12]]);
    }

    if(e.keyCode == 1 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        messageToggle = (messageToggle + 1) % 2;
    }

    if(e.keyCode == 1 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        clanToggle = (clanToggle + 1) % 2;
    }

    if(e.keyCode == autoheal && document.activeElement.id.toLowerCase() !== 'chatbox') {
        healToggle = (healToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "MooViet"
            } else {
                document.title = "MooViet"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "MooViet"
            } else {
                document.title = "MooViet"
            }
        }
    }
    if(e.keyCode == botmodeKey && document.activeElement.id.toLowerCase() !== 'chatbox') {
        BotToggle = (BotToggle + 1) % 2;
            if(BotToggle == 0) {
                document.title = "MooViet"
            } else {
                document.title = "MooViet"
            }
    }
        if(e.keyCode == AimBot && document.activeElement.id.toLowerCase() !== 'chatbox') {
        AimBotToggle = (AimBotToggle + 1) % 2;
            if(AimBotToggle == 0) {
                document.title = "MooViet"
            } else {
                document.title = "MooViet"
            }
    }
    if(e.keyCode == hathacking && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hatToggle = (hatToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "MooViet"
            } else {
                document.title = "MooViet"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "MooViet"
            } else {
                document.title = "MooViet"
            }
        }
    }
})

document.addEventListener('keyup', (e)=>{
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    boostSpiker.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer.stop(e.keyCode);
    if(e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        setTimeout( () => {
            doNewSend(["33", [null]]);
            boostDir = null;
        }, 10);
    }

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

function animate(space, chance) {
    let result = '';
    let characters;
    if(space) {
        characters = '';
    } else {
        characters = '';
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 2 && characters.charAt(i) != " ") {
           result += "_";
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}

function mess(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'BooMOneShot';
   }
   if(space) {
       characters = characters.padStart((30 - characters.length) / 2 + characters.length)
       characters = characters.padEnd(30);
   }
   let count = 0;
   for (let i = 0; i < characters.length; i++ ) {
      if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
          result += "";
          count++
      } else {
          result += characters.charAt(i);
      }
   }
   return result;
}

function messd(space, chance) {
   let result = '';
   let characters;
   if(space) {
       characters = 'eZGetREKT';
   }
   if(space) {
       characters = characters.padStart((30 - characters.length) / 2 + characters.length)
       characters = characters.padEnd(30);
   }
   let count = 0;
   for (let i = 0; i < characters.length; i++ ) {
      if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
          result += "";
          count++
      } else {
          result += characters.charAt(i);
      }
   }
   return result;
}
document.title = "MooViet"

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

    for (let i=33;i<39;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString())) && i != 36){
            turretType = i - 16;
        }
    }
    spawnpadType = 36;
}

var ID_WinterCap = 15;
var ID_AssassinGear = 56;
var ID_Bloodthirster = 55;
var ID_FlipperHat = 31;
var ID_MarksmanCap = 1;
var ID_BushGear = 10;
var ID_SoldierHelmet = 6;
var ID_AntiVenomGear = 23;
var ID_MusketeerHat = 32;
var ID_MedicGear = 13;
var ID_BullHelmet = 7;
var ID_EmpHelmet = 22;
var ID_BoosterHat = 12;
var ID_BarbarianArmor = 26;
var katanaKey = 49
var MusketKey = 50
var bowKey = 51
var ID_BullMask = 46;
var ID_WindmillHat = 14;
var ID_SpikeGear = 11;
var ID_BushidoArmor = 16;
var ID_SamuraiArmor = 20;
var ID_ScavengerGear = 27;
var ID_TankGear = 40;
var ID_TurretGear = 53;
var TankGearKey = 90;
var AssassinGearKey = 107;
var BullHelmetKey = 75;
var SoldierHelmetKey = 66;
var TurretKey = 67;
var BoosterHatKey = 11;

var uneqiup = 189;
var SpikeGearKey = 220;
var BushGearKey = 186;
var EmpHelmetKey = 221;
var SamuraiArmorKey = 74;

window.onbeforeunload = null;

const card = document.querySelector("#setupCard");
const button = document.createElement("button");
const menu = document.createElement("div");
const styles = document.createElement("style");

menu.classList.add("i-container");
menu.id = "mm-menu-container";

styles.type = "text/css";
styles.innerHTML = `
  .open-menu-button {
    background-color: #f03535;
    margin-top: 5px;
  }

  .open-menu-button:hover {
    background-color: #f03535;
  }
.keyPressLow {
    margin-left: 8px;
    font-size: 16px;
    margin-right: 8px;
    height: 25px;
    width: 50px;
    background-color: #fcfcfc;
    border-radius: 3.5px;
    border: none;
    text-align: center;
    color: #4a4a4a;
    border: 0.5px solid #f2f2f2;
}
  #mm-menu-container {
    user-select: none;
    font-size: 14px;

    overflow: hidden;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
    height: 366px;
    width: 500px;
    margin-top: -183px;
    margin-left: -250px;
    z-index: 2147000000;
  }

  .i-checkbox-label {
    font-size: 12px;
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    display: block;
    margin: 4px;
  }

  .i-checkbox-label {
    font-size: 12px;
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
  }

  #mm-main-menu {
    font-size: 12px;
    user-select: none;
    background-color: #424040;

    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    padding: .5em 1em;
    border-top: none;
    margin-left: 130px;
    display: none;
  }
 #mm-hathack-menu {
    font-size: 12px;
    user-select: none;
    background-color: #424040;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    padding: .5em 1em;
    border-top: none;
    margin-left: 130px;
    display: none;
  }
  #mm-offense-menu {
    font-size: 12px;
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    background-color: #424040;

    padding: .5em 1em;
    border-top: none;
    margin-left: 130px;
    display: block;
  }

  #mm-defense-menu {
font-size: 12px;
user-select: none;
color: #fff;
    background-color: #424040;

font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
  }

  #mm-support-menu {
font-size: 12px;
user-select: none;
color: #fff;
font-family: Verdana,sans-serif;
    background-color: #424040;

box-sizing: border-box;
position: relative;
height: 100%;
padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
  }
  #mm-map-menu {
font-size: 12px;
user-select: none;
color: #fff;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
    background-color: #424040;

padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
  }
  #mm-hatmacro-menu {
font-size: 12px;
user-select: none;
color: #fff;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
    background-color: #424040;

padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
  }
  #mm-music-menu {
font-size: 12px;
user-select: none;
color: #fff;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
    background-color: #424040;

padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
  }
  #mm-instakill-menu {
font-size: 12px;
user-select: none;
color: #fff;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
    background-color: #424040;

padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
  }
  #mm-controls-menu {
font-size: 12px;
user-select: none;
color: #fff;
font-family: Verdana,sans-serif;
    background-color: #424040;
box-sizing: border-box;
position: relative;
height: 100%;
padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
  }
  #mm-help-menu {
font-size: 12px;
user-select: none;
color: #fff;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
    background-color: #424040;

padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
  }
  #mm-changeweapon-menu {
font-size: 12px;
user-select: none;
color: #fff;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
    background-color: #424040;

padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
  }
  #mm-help-menu {
font-size: 12px;
user-select: none;
color: #fff;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
    background-color: #424040;

padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
  }


  #mm-chat-menu {
font-size: 12px;
user-select: none;
color: #fff;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
    background-color: #424040;

padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
  }

  #mm-test-menu {
font-size: 12px;
user-select: none;
color: #fff;
font-family: Verdana,sans-serif;
box-sizing: border-box;
position: relative;
height: 100%;
    background-color: #424040;

padding: .5em 1em;
border-top: none;
margin-left: 130px;
display: none;
  }
  .i-tab-container {
    font-size: 12px;
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    background-color: #ff0000;

    width: 100%;
    height: 100%;
    background-color: #424040;
  }

  .i-tab-menu, .sidebar {
    font-size: 12px;
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    position: relative;
    background-color: #333;
    display: block;
    overflow: auto;
    float: left;
    width: 130px;
    height: 100%;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);
  }

  .i-tab-menu-item {
    font-size: 12px;
    user-select: none;
    text-decoration: none;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    color: #d15151;
  }
  .i-tab-menu-item:hover {
    background-color: rgb(77, 73, 73) !important;
  }
  #mm-main-menu-item {
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    float: left;
    background-color: inherit;
    padding: 8px 8px;
    margin: 0;
    border: none;
    font-size: 14px;
    text-align: center;
    outline: 0;
    transition: .3s;
    width: 100%;
  }
  #mm-hathack-menu-item {
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    float: left;
    background-color: inherit;
    padding: 8px 8px;
    margin: 0;
    border: none;
    font-size: 14px;
    text-align: center;
    outline: 0;
    transition: .3s;
    width: 100%;
  }
  #mm-offense-menu-item {
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    float: left;
    background-color: inherit;
    padding: 8px 8px;
    margin: 0;
    border: none;
    font-size: 14px;
    text-align: center;
    outline: 0;
    transition: .3s;
    width: 100%;
  }

  #mm-defense-menu-item {
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    float: left;
    padding: 8px 8px;
    margin: 0;
    border: none;
    font-size: 14px;
    text-align: center;
    outline: 0;
    transition: .3s;
    width: 100%;
  }

  #mm-support-menu-item {
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    float: left;
    background-color: inherit;
    padding: 8px 8px;
    margin: 0;
    border: none;
    font-size: 14px;
    text-align: center;
    outline: 0;
    transition: .3s;
    width: 100%;
  }

  #mm-instakill-menu-item {
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    float: left;
    background-color: inherit;
    padding: 8px 8px;
    margin: 0;
    border: none;
    font-size: 14px;
    text-align: center;
    outline: 0;
    transition: .3s;
    width: 100%;
  }

  #mm-hatmacro-menu-item {
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    float: left;
    background-color: inherit;
    padding: 8px 8px;
    margin: 0;
    border: none;
    font-size: 14px;
    text-align: center;
    outline: 0;
    transition: .3s;
    width: 100%;
  }

  #mm-changewepaon-menu-item {
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    float: left;
    background-color: inherit;
    padding: 8px 8px;
    margin: 0;
    border: none;
    font-size: 14px;
    text-align: center;
    outline: 0;
    transition: .3s;
    width: 100%;
  }
  #mm-music-menu-item {
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    float: left;
    background-color: inherit;
    padding: 8px 8px;
    margin: 0;
    border: none;
    font-size: 14px;
    text-align: center;
    outline: 0;
    transition: .3s;
    width: 100%;
  }
  .i-tab-menu-item {
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    float: left;
    background-color: inherit;
    padding: 8px 8px;
    margin: 0;
    border: none;
    font-size: 14px;
    text-align: center;
    outline: 0;
    transition: .3s;
    width: 100%;
  }

  #mm-controls-menu-item {
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    float: left;
    background-color: inherit;
    padding: 8px 8px;
    margin: 0;
    border: none;
    font-size: 14px;
    text-align: center;
    outline: 0;
    transition: .3s;
    width: 100%;
  }

  #mm-help-menu-item {
    user-select: none;
    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    float: left;
    background-color: inherit;
    padding: 8px 8px;
    margin: 0;
    border: none;
    font-size: 14px;
    text-align: center;
    outline: 0;
    transition: .3s;
    position: absolute;
    right: 0;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  .is-active {
    background-color: rgb(129, 34, 34) !important;
  }


  .i-close {
    font-size: 12px;
    user-select: none;

    color: #fff;
    font-family: Verdana,sans-serif;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: 0;
    width: 25px;
    height: 25px;
    margin: 0;
    border-bottom-left-radius: 5px;
    overflow: hidden;
  }
.keyPressLow {
    margin-left: 8px;
    font-size: 16px;
    margin-right: 8px;
    height: 25px;
    width: 50px;
    background-color: #fcfcfc;
    border-radius: 3.5px;
    border: none;
    text-align: center;
    color: #4A4A4A;
    border: 0.5px solid #f2f2f2;
}

.menuPrompt {
    font-size: 17px;
    font-family: 'Hammersmith One';
    color: #4A4A4A;
    flex: 0.2;
    text-align: center;
    margin-top: 10px;
    display: inline-block;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    overflow: auto;
    height: 100%;
    width: 100%;
}

.modalx {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    overflow: auto;
    height: 100%;
    width: 100%;
}

.Msgmodal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    overflow: auto;
    height: 100%;
    width: 100%;
}

.modal-content {
    margin: 10% auto;
    width: 40%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
    font-size: 14px;
    line-height: 1.6;
}

.modal-headerx h2,
.modal-footerx h3 {
  margin: 0;
}

.modal-headerx {
    background: #404040;
    padding: 15px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.modal-footerx {
    background: #404040;
    padding: 10px;
    color: #fff;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.modal-headerwtf h2,
.modal-footerwtf h3 {
  margin: 0;
}

.modal-headerwtf {
    background: #404040;
    padding: 15px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.modal-footerwtf {
    background: #404040;
    padding: 10px;
    color: #fff;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}


.modal-header h2,
.modal-footer h3 {
  margin: 0;
}

.modal-header {
    background: #404040;
    padding: 15px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.modal-body {
    padding: 10px 20px;
    background: #fff;
}

.modal-footer {
    background: #404040;
    padding: 10px;
    color: #fff;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.closeBtn {
    color: #ccc;
    float: right;
    font-size: 30px;
    color: #fff;
}

.closeBtn:hover,
.closeBtn:focus {
    color: #dd4a42;
    text-decoration: none;
    cursor: pointer;
}

.closeBtnx {
    color: #ccc;
    float: right;
    font-size: 30px;
    color: #fff;
}

.closeBtnx:hover,
.closeBtnx:focus {
    color: #dd4a42;
    text-decoration: none;
    cursor: pointer;
}

.MsgcloseBtn {
    color: #ccc;
    float: right;
    font-size: 30px;
    color: #fff;
}

.MsgcloseBtn:hover,
.MsgcloseBtn:focus {
    color: #dd4a42;
    text-decoration: none;
    cursor: pointer;
}

/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

`;

menu.innerHTML = `
    <div class="i-tab-container">
      <div class="i-tab-menu sidebar">
        <a><h2 class="i-tab-menu-item">MooViet</h2></a>
        <button id="mm-main-menu-item" class="i-tab-menu-item is-active">Main</button>
        <button id="mm-offense-menu-item" class="i-tab-menu-item">Offense</button>
        <button id="mm-defense-menu-item" class="i-tab-menu-item">Defense</button>
        <button id="mm-support-menu-item" class="i-tab-menu-item">Support</button>
        <button id="mm-map-menu-item" class="i-tab-menu-item">Map</button>
        <button id="mm-controls-menu-item" class="i-tab-menu-item">Controls</button>
        <button id="mm-instakill-menu-item" class="i-tab-menu-item">InstaKill</button>
        <button id="mm-instakill-menu-item" class="i-tab-menu-item">ChangeWeapon</button>
        <button id="mm-instakill-menu-item" class="i-tab-menu-item">Chat</button>
        <button id="mm-instakill-menu-item" class="i-tab-menu-item">HatMacro</button>
        <button id="mm-instakill-menu-item" class="i-tab-menu-item">Music</button>
        <button id="mm-instakill-menu-item" class="i-tab-menu-item">Help</button>
        <button id="mm-instakill-menu-item" class="i-tab-menu-item">Test</button>
      </div>
      <div id="mm-main-menu" class="i-tab-content">
        <h3>Main</h3>
<div
        <label class="AutoHeal"><input id="AutoHeal" type="checkbox" class="i-checkbox">Tu dong buff hp</label>
</div>
<div
        <label class="AimBot"><input id="AimBot" type="checkbox" class="i-checkbox">Tu dong chon muc tieu</label>
</div>
<div
        <label class="InstaKill"><input id="InstaKill" type="checkbox" class="i-checkbox">Giet nhanh</label>
</div>
<div
        <label class="Bot"><input id="Bot" type="checkbox" class="i-checkbox">Che do bot</label>
</div>
<div
        <label class="Block"><input id="Block" type="checkbox" class="i-checkbox">BLock Quang cao</label>
</div>
<label>Auto Chat: <input id="ach1" type="text" minlength="0" maxlength="30" style="width: 250px;" placeholder="This text will display automatically" class="i-checkbox"></label>
<fieldset>
          <legend>Hats/Accessories</legend>
<div
          <label class="Click0"><input id="Click0" type="checkbox" class="i-checkbox">Offense</label>
</div>
<div

          <label class="HatHacking"><input id="HatHacking" type="checkbox" class="i-checkbox">Defensive Gear</label>
</div>
<div

          <label class="notfound"><input id="notfound" type="checkbox" class="i-checkbox">Support Gear</label>
</div>
        </fieldset>
        <div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-hathack-menu" class="i-tab-content">
        <h3>Hat-Macro</h3>
        <label class="i-checkbox-label"><input id="autohealmenu" type="checkbox" class="i-checkbox">Auto Heal</label>
        <label class="i-checkbox-label"><input id="mm-autoAim" type="checkbox" class="i-checkbox">Auto Aim</label>
        <label class="i-checkbox-label"><input id="mm-instaKill" type="checkbox" class="i-checkbox">Insta-Kill</label>
        <label class="i-checkbox-label"><input id="mm-drawPlayerArrows" type="checkbox" class="i-checkbox">Draw Player Arrows</label>
        <label class="i-checkbox-label"><input id="mm-blockAds" type="checkbox" class="i-checkbox">Block Ads</label>
        <br>Auto Chat:<input type="text" value="" id="ach1" style="width: 250px;" maxlength="30" placeholder="This text will display automatically" height="50"/><br>
         <fieldset>
          <legend>Hats/Accessories</legend>
          <label class="i-checkbox-label"><input id="mm-useOffensiveGear" type="checkbox" class="i-checkbox">Offensive Gear</label>
          <label class="i-checkbox-label"><input id="mm-useDefensiveGear" type="checkbox" class="i-checkbox">Defensive Gear</label>
          <label class="i-checkbox-label"><input id="mm-useSupportGear" type="checkbox" class="i-checkbox">Support Gear</label>
        </fieldset>
        <div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-offense-menu" class="i-tab-content" style="display: none;">
        <h3>Offense</h3>
        <fieldset>
          <legend>Clicking Enemy: </legend>
    <body>
           <form action="/action_page.php">
              <label for="cars">Hat:</label>
              <select name="xD" id="HaTs_ID_CLICK">
                <option value="7">Bull Helmet</option>
                <option value="0">none</option>
                <option value="51">Moo Cap</option>
                <option value="50">Apple Cap</option>
                <option value="28">Moo Head</option>
                <option value="29">Pig Head</option>
                <option value="30">Fluff Head</option>
                <option value="36">Pandou Head</option>
                <option value="37">Bear Head</option>
                <option value="38">Monkey Head</option>
                <option value="44">Polar Head</option>
                <option value="35">Fez Hat</option>
                <option value="42">Enigma Hat</option>
                <option value="43">Blitz Hat</option>
                <option value="49">Bob XIII Hat</option>
                <option value="57">Pumpkin</option>
                <option value="8">Bummle Hat</option>
                <option value="2">Straw Hat</option>
                <option value="15">Winter Cap</option>
                <option value="5">Cowboy Hat</option>
                <option value="4">Ranger Hat</option>
                <option value="18">Explorer Hat</option>
                <option value="31">Flipper Hat</option>
                <option value="1">Marksman Cap</option>
                <option value="10">Bush Gear</option>
                <option value="48">Halo</option>
                <option value="6">Soldier Helmet</option>
                <option value="32">Anti Venom Gear</option>
                <option value="13">Medic Gear</option>
                <option value="9">Miners Helmet</option>
                <option value="32">Musketeer Hat</option>
                <option value="7">Bull Helmet</option>
                <option value="22">Emp Helmet</option>
                <option value="12">Booster Hat</option>
                <option value="26">Barbarian Armor</option>
                <option value="21">Plague Mask</option>
                <option value="46">Bull Mask</option>
                <option value="14">Windmill Hat</option>
                <option value="11">Spike Gear</option>
                <option value="53">Turret Gear</option>
                <option value="20">Samurai Armor</option>
                <option value="58">Dark Knight</option>
                <option value="27">Scavenger Gear</option>
                <option value="40">Tank Gear</option>
                <option value="52">Thief Gear</option>
                <option value="55">Bloodthirster</option>
                <option value="56">Assassin Gear</option>
              </select>
            </form>
           <form action="/action_page.php">
              <label for="cars">Accessory:</label>
              <select name="cars" id="AccS_ID_CLICK">
                <option value="18">Blood Wings</option>
                <option value="0">None</option>
                <option value="12">Snowball</option>
                <option value="9">Tree Cape</option>
                <option value="10">Stone Cape</option>
                <option value="3">Cookie Cape</option>
                <option value="8">Cow Cape</option>
                <option value="11">Monkey Tail</option>
                <option value="17">Apple Basket</option>
                <option value="6">Winter Cape</option>
                <option value="4">Skull Cape</option>
                <option value="5">Dash Cape</option>
                <option value="2">Dragon Cape</option>
                <option value="1">Super Cape</option>
                <option value="7">Troll Cape</option>
                <option value="14">Thorns</option>
                <option value="15">Blockades</option>
                <option value="20">Devils Tail</option>
                <option value="16">Sawblade</option>
                <option value="13">Angel Wings</option>
                <option value="19">Shadow Wings</option>
                <option value="18">Blood Wings</option>
                <option value="21">Corrupt X Wings</option>
              </select>
            </form>
    </body>
</fieldset>
        <fieldset id="mm-supportDefaults">
          <legend>Click No Enemy</legend>
           <form action="/action_page.php">
              <label for="cars">Hat:</label>
              <select name="xD" id="A_HaTs_ID_CLICK">
                <option value="20">Samurai Armor</option>
                <option value="0">none</option>
                <option value="51">Moo Cap</option>
                <option value="50">Apple Cap</option>
                <option value="28">Moo Head</option>
                <option value="29">Pig Head</option>
                <option value="30">Fluff Head</option>
                <option value="36">Pandou Head</option>
                <option value="37">Bear Head</option>
                <option value="38">Monkey Head</option>
                <option value="44">Polar Head</option>
                <option value="35">Fez Hat</option>
                <option value="42">Enigma Hat</option>
                <option value="43">Blitz Hat</option>
                <option value="49">Bob XIII Hat</option>
                <option value="57">Pumpkin</option>
                <option value="8">Bummle Hat</option>
                <option value="2">Straw Hat</option>
                <option value="15">Winter Cap</option>
                <option value="5">Cowboy Hat</option>
                <option value="4">Ranger Hat</option>
                <option value="18">Explorer Hat</option>
                <option value="31">Flipper Hat</option>
                <option value="1">Marksman Cap</option>
                <option value="10">Bush Gear</option>
                <option value="48">Halo</option>
                <option value="6">Soldier Helmet</option>
                <option value="32">Anti Venom Gear</option>
                <option value="13">Medic Gear</option>
                <option value="9">Miners Helmet</option>
                <option value="32">Musketeer Hat</option>
                <option value="7">Bull Helmet</option>
                <option value="22">Emp Helmet</option>
                <option value="12">Booster Hat</option>
                <option value="26">Barbarian Armor</option>
                <option value="21">Plague Mask</option>
                <option value="46">Bull Mask</option>
                <option value="14">Windmill Hat</option>
                <option value="11">Spike Gear</option>
                <option value="53">Turret Gear</option>
                <option value="20">Samurai Armor</option>
                <option value="58">Dark Knight</option>
                <option value="27">Scavenger Gear</option>
                <option value="40">Tank Gear</option>
                <option value="52">Thief Gear</option>
                <option value="55">Bloodthirster</option>
                <option value="56">Assassin Gear</option>
              </select>
            </form>
           <form action="/action_page.php">
              <label for="cars">Accessory:</label>
              <select name="cars" id="A_AccS_ID_CLICK">
                <option value="0">none</option>
                <option value="12">Snowball</option>
                <option value="9">Tree Cape</option>
                <option value="10">Stone Cape</option>
                <option value="3">Cookie Cape</option>
                <option value="8">Cow Cape</option>
                <option value="11">Monkey Tail</option>
                <option value="17">Apple Basket</option>
                <option value="6">Winter Cape</option>
                <option value="4">Skull Cape</option>
                <option value="5">Dash Cape</option>
                <option value="2">Dragon Cape</option>
                <option value="1">Super Cape</option>
                <option value="7">Troll Cape</option>
                <option value="14">Thorns</option>
                <option value="15">Blockades</option>
                <option value="20">Devils Tail</option>
                <option value="16">Sawblade</option>
                <option value="13">Angel Wings</option>
                <option value="19">Shadow Wings</option>
                <option value="18">Blood Wings</option>
                <option value="21">Corrupt X Wings</option>
              </select>
            </form>
</fieldset>
        <fieldset>
          <legend>River Click</legend>
    <body>
           <form action="/action_page.php">
              <label for="cars">Hat:</label>
              <select name="xD" id="hatriverclick">
                <option value="7">Bull Helmet</option>
                <option value="0">none</option>
                <option value="51">Moo Cap</option>
                <option value="50">Apple Cap</option>
                <option value="28">Moo Head</option>
                <option value="29">Pig Head</option>
                <option value="30">Fluff Head</option>
                <option value="36">Pandou Head</option>
                <option value="37">Bear Head</option>
                <option value="38">Monkey Head</option>
                <option value="44">Polar Head</option>
                <option value="35">Fez Hat</option>
                <option value="42">Enigma Hat</option>
                <option value="43">Blitz Hat</option>
                <option value="49">Bob XIII Hat</option>
                <option value="57">Pumpkin</option>
                <option value="8">Bummle Hat</option>
                <option value="2">Straw Hat</option>
                <option value="15">Winter Cap</option>
                <option value="5">Cowboy Hat</option>
                <option value="4">Ranger Hat</option>
                <option value="18">Explorer Hat</option>
                <option value="31">Flipper Hat</option>
                <option value="1">Marksman Cap</option>
                <option value="10">Bush Gear</option>
                <option value="48">Halo</option>
                <option value="6">Soldier Helmet</option>
                <option value="32">Anti Venom Gear</option>
                <option value="13">Medic Gear</option>
                <option value="9">Miners Helmet</option>
                <option value="32">Musketeer Hat</option>
                <option value="7">Bull Helmet</option>
                <option value="22">Emp Helmet</option>
                <option value="12">Booster Hat</option>
                <option value="26">Barbarian Armor</option>
                <option value="21">Plague Mask</option>
                <option value="46">Bull Mask</option>
                <option value="14">Windmill Hat</option>
                <option value="11">Spike Gear</option>
                <option value="53">Turret Gear</option>
                <option value="20">Samurai Armor</option>
                <option value="58">Dark Knight</option>
                <option value="27">Scavenger Gear</option>
                <option value="40">Tank Gear</option>
                <option value="52">Thief Gear</option>
                <option value="55">Bloodthirster</option>
                <option value="56">Assassin Gear</option>
              </select>
            </form>
           <form action="/action_page.php">
              <label for="cars">Accessory:</label>
              <select name="cars" id="accriverclick">
                <option value="18">Blood Wings</option>
                <option value="0">None</option>
                <option value="12">Snowball</option>
                <option value="9">Tree Cape</option>
                <option value="10">Stone Cape</option>
                <option value="3">Cookie Cape</option>
                <option value="8">Cow Cape</option>
                <option value="11">Monkey Tail</option>
                <option value="17">Apple Basket</option>
                <option value="6">Winter Cape</option>
                <option value="4">Skull Cape</option>
                <option value="5">Dash Cape</option>
                <option value="2">Dragon Cape</option>
                <option value="1">Super Cape</option>
                <option value="7">Troll Cape</option>
                <option value="14">Thorns</option>
                <option value="15">Blockades</option>
                <option value="20">Devils Tail</option>
                <option value="16">Sawblade</option>
                <option value="13">Angel Wings</option>
                <option value="19">Shadow Wings</option>
                <option value="18">Blood Wings</option>
                <option value="21">Corrupt X Wings</option>
              </select>
            </form>
    </body>
       </fieldset>
        <div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-defense-menu" class="i-tab-content" style="display: none;">
        <h3>Defense</h3>
        <fieldset>
          <legend>Default</legend>
           <form action="/action_page.php">
              <label for="cars">Hat: </label>
              <select name="xD" id="HaTs_ID">
                <option value="6">Soldier Helmet</option>
                <option value="0">none</option>
                <option value="51">Moo Cap</option>
                <option value="50">Apple Cap</option>
                <option value="28">Moo Head</option>
                <option value="29">Pig Head</option>
                <option value="30">Fluff Head</option>
                <option value="36">Pandou Head</option>
                <option value="37">Bear Head</option>
                <option value="38">Monkey Head</option>
                <option value="44">Polar Head</option>
                <option value="35">Fez Hat</option>
                <option value="42">Enigma Hat</option>
                <option value="43">Blitz Hat</option>
                <option value="49">Bob XIII Hat</option>
                <option value="57">Pumpkin</option>
                <option value="8">Bummle Hat</option>
                <option value="2">Straw Hat</option>
                <option value="15">Winter Cap</option>
                <option value="5">Cowboy Hat</option>
                <option value="4">Ranger Hat</option>
                <option value="18">Explorer Hat</option>
                <option value="31">Flipper Hat</option>
                <option value="1">Marksman Cap</option>
                <option value="10">Bush Gear</option>
                <option value="48">Halo</option>
                <option value="6">Soldier Helmet</option>
                <option value="32">Anti Venom Gear</option>
                <option value="13">Medic Gear</option>
                <option value="9">Miners Helmet</option>
                <option value="32">Musketeer Hat</option>
                <option value="7">Bull Helmet</option>
                <option value="22">Emp Helmet</option>
                <option value="12">Booster Hat</option>
                <option value="26">Barbarian Armor</option>
                <option value="21">Plague Mask</option>
                <option value="46">Bull Mask</option>
                <option value="14">Windmill Hat</option>
                <option value="11">Spike Gear</option>
                <option value="53">Turret Gear</option>
                <option value="20">Samurai Armor</option>
                <option value="58">Dark Knight</option>
                <option value="27">Scavenger Gear</option>
                <option value="40">Tank Gear</option>
                <option value="52">Thief Gear</option>
                <option value="55">Bloodthirster</option>
                <option value="56">Assassin Gear</option>
              </select>
            </form>
           <form action="/action_page.php">
              <label for="cars">Accessory: </label>
              <select name="cars" id="AccS_ID">
                <option value="21">Corrupt X Wings</option>
                <option value="0">none</option>
                <option value="12">Snowball</option>
                <option value="9">Tree Cape</option>
                <option value="10">Stone Cape</option>
                <option value="3">Cookie Cape</option>
                <option value="8">Cow Cape</option>
                <option value="11">Monkey Tail</option>
                <option value="17">Apple Basket</option>
                <option value="6">Winter Cape</option>
                <option value="4">Skull Cape</option>
                <option value="5">Dash Cape</option>
                <option value="2">Dragon Cape</option>
                <option value="1">Super Cape</option>
                <option value="7">Troll Cape</option>
                <option value="14">Thorns</option>
                <option value="15">Blockades</option>
                <option value="20">Devils Tail</option>
                <option value="16">Sawblade</option>
                <option value="13">Angel Wings</option>
                <option value="19">Shadow Wings</option>
                <option value="18">Blood Wings</option>
                <option value="21">Corrupt X Wings</option>
              </select>
            </form>
</fieldset>
        <h3>Defense Main</h3>
<div
        <label class="defheal"><input id="defheal" type="checkbox" class="i-checkbox">Defence Heal</label>
</div>
                  <h3>Boost+Spike Setting</h3>
Left Type<input class="textarea" value="${lt}" type="textarena" id="lt">Right Type<input class="textarea" value="${rt}" type="textarena" id="rt">

             <div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-support-menu" class="i-tab-content" style="display: none;">
        <h3>Support</h3>
<div
        <label class="ResetHat"><input id="ResetHat" type="checkbox" class="i-checkbox">Auto Reset Hat/Ac(Every 10 Sec)</label>
</div>
        <label class="Speed"><input id="Speed" type="checkbox" class="i-checkbox">Auto Equip Speed Armor's</label>
        <fieldset>
          <legend>Speed Armor Normal</legend>
           <form action="/action_page.php">
              <label for="cars">Hat: </label>
              <select name="xD" id="Hatnormalarmor">
                <option value="12">Booster Hat</option>
                <option value="0">none</option>
                <option value="51">Moo Cap</option>
                <option value="50">Apple Cap</option>
                <option value="28">Moo Head</option>
                <option value="29">Pig Head</option>
                <option value="30">Fluff Head</option>
                <option value="36">Pandou Head</option>
                <option value="37">Bear Head</option>
                <option value="38">Monkey Head</option>
                <option value="44">Polar Head</option>
                <option value="35">Fez Hat</option>
                <option value="42">Enigma Hat</option>
                <option value="43">Blitz Hat</option>
                <option value="49">Bob XIII Hat</option>
                <option value="57">Pumpkin</option>
                <option value="8">Bummle Hat</option>
                <option value="2">Straw Hat</option>
                <option value="15">Winter Cap</option>
                <option value="5">Cowboy Hat</option>
                <option value="4">Ranger Hat</option>
                <option value="18">Explorer Hat</option>
                <option value="31">Flipper Hat</option>
                <option value="1">Marksman Cap</option>
                <option value="10">Bush Gear</option>
                <option value="48">Halo</option>
                <option value="6">Soldier Helmet</option>
                <option value="32">Anti Venom Gear</option>
                <option value="13">Medic Gear</option>
                <option value="9">Miners Helmet</option>
                <option value="32">Musketeer Hat</option>
                <option value="7">Bull Helmet</option>
                <option value="22">Emp Helmet</option>
                <option value="12">Booster Hat</option>
                <option value="26">Barbarian Armor</option>
                <option value="21">Plague Mask</option>
                <option value="46">Bull Mask</option>
                <option value="14">Windmill Hat</option>
                <option value="11">Spike Gear</option>
                <option value="53">Turret Gear</option>
                <option value="20">Samurai Armor</option>
                <option value="58">Dark Knight</option>
                <option value="27">Scavenger Gear</option>
                <option value="40">Tank Gear</option>
                <option value="52">Thief Gear</option>
                <option value="55">Bloodthirster</option>
                <option value="56">Assassin Gear</option>
              </select>
            </form>
           <form action="/action_page.php">
              <label for="cars">Accessory: </label>
              <select name="cars" id="Accnormalarmor">
                <option value="11">Monkey Tail</option>
                <option value="0">none</option>
                <option value="12">Snowball</option>
                <option value="9">Tree Cape</option>
                <option value="10">Stone Cape</option>
                <option value="3">Cookie Cape</option>
                <option value="8">Cow Cape</option>
                <option value="11">Monkey Tail</option>
                <option value="17">Apple Basket</option>
                <option value="6">Winter Cape</option>
                <option value="4">Skull Cape</option>
                <option value="5">Dash Cape</option>
                <option value="2">Dragon Cape</option>
                <option value="1">Super Cape</option>
                <option value="7">Troll Cape</option>
                <option value="14">Thorns</option>
                <option value="15">Blockades</option>
                <option value="20">Devils Tail</option>
                <option value="16">Sawblade</option>
                <option value="13">Angel Wings</option>
                <option value="19">Shadow Wings</option>
                <option value="18">Blood Wings</option>
                <option value="21">Corrupt X Wings</option>
              </select>
            </form>
</fieldset>
        <fieldset>
          <legend>Speed Armor River</legend>
           <form action="/action_page.php">
              <label for="cars">Hat: </label>
              <select name="xD" id="Hatriverarmor">
                <option value="31">Flipper Hat</option>
                <option value="0">none</option>
                <option value="51">Moo Cap</option>
                <option value="50">Apple Cap</option>
                <option value="28">Moo Head</option>
                <option value="29">Pig Head</option>
                <option value="30">Fluff Head</option>
                <option value="36">Pandou Head</option>
                <option value="37">Bear Head</option>
                <option value="38">Monkey Head</option>
                <option value="44">Polar Head</option>
                <option value="35">Fez Hat</option>
                <option value="42">Enigma Hat</option>
                <option value="43">Blitz Hat</option>
                <option value="49">Bob XIII Hat</option>
                <option value="57">Pumpkin</option>
                <option value="8">Bummle Hat</option>
                <option value="2">Straw Hat</option>
                <option value="15">Winter Cap</option>
                <option value="5">Cowboy Hat</option>
                <option value="4">Ranger Hat</option>
                <option value="18">Explorer Hat</option>
                <option value="31">Flipper Hat</option>
                <option value="1">Marksman Cap</option>
                <option value="10">Bush Gear</option>
                <option value="48">Halo</option>
                <option value="6">Soldier Helmet</option>
                <option value="32">Anti Venom Gear</option>
                <option value="13">Medic Gear</option>
                <option value="9">Miners Helmet</option>
                <option value="32">Musketeer Hat</option>
                <option value="7">Bull Helmet</option>
                <option value="22">Emp Helmet</option>
                <option value="12">Booster Hat</option>
                <option value="26">Barbarian Armor</option>
                <option value="21">Plague Mask</option>
                <option value="46">Bull Mask</option>
                <option value="14">Windmill Hat</option>
                <option value="11">Spike Gear</option>
                <option value="53">Turret Gear</option>
                <option value="20">Samurai Armor</option>
                <option value="58">Dark Knight</option>
                <option value="27">Scavenger Gear</option>
                <option value="40">Tank Gear</option>
                <option value="52">Thief Gear</option>
                <option value="55">Bloodthirster</option>
                <option value="56">Assassin Gear</option>
              </select>
            </form>
           <form action="/action_page.php">
              <label for="cars">Accessory: </label>
              <select name="cars" id="Accriverarmor">
                <option value="11">Monkey Tail</option>
                <option value="0">none</option>
                <option value="12">Snowball</option>
                <option value="9">Tree Cape</option>
                <option value="10">Stone Cape</option>
                <option value="3">Cookie Cape</option>
                <option value="8">Cow Cape</option>
                <option value="11">Monkey Tail</option>
                <option value="17">Apple Basket</option>
                <option value="6">Winter Cape</option>
                <option value="4">Skull Cape</option>
                <option value="5">Dash Cape</option>
                <option value="2">Dragon Cape</option>
                <option value="1">Super Cape</option>
                <option value="7">Troll Cape</option>
                <option value="14">Thorns</option>
                <option value="15">Blockades</option>
                <option value="20">Devils Tail</option>
                <option value="16">Sawblade</option>
                <option value="13">Angel Wings</option>
                <option value="19">Shadow Wings</option>
                <option value="18">Blood Wings</option>
                <option value="21">Corrupt X Wings</option>
              </select>
            </form>
     </fieldset>
        <fieldset>
          <legend>Speed Armor Winter</legend>
    <body>
           <form action="/action_page.php">
              <label for="cars">Hat: </label>
              <select name="xD" id="Hatwinterarmor">
                <option value="15">Winter Cap</option>
                <option value="0">none</option>
                <option value="51">Moo Cap</option>
                <option value="50">Apple Cap</option>
                <option value="28">Moo Head</option>
                <option value="29">Pig Head</option>
                <option value="30">Fluff Head</option>
                <option value="36">Pandou Head</option>
                <option value="37">Bear Head</option>
                <option value="38">Monkey Head</option>
                <option value="44">Polar Head</option>
                <option value="35">Fez Hat</option>
                <option value="42">Enigma Hat</option>
                <option value="43">Blitz Hat</option>
                <option value="49">Bob XIII Hat</option>
                <option value="57">Pumpkin</option>
                <option value="8">Bummle Hat</option>
                <option value="2">Straw Hat</option>
                <option value="15">Winter Cap</option>
                <option value="5">Cowboy Hat</option>
                <option value="4">Ranger Hat</option>
                <option value="18">Explorer Hat</option>
                <option value="31">Flipper Hat</option>
                <option value="1">Marksman Cap</option>
                <option value="10">Bush Gear</option>
                <option value="48">Halo</option>
                <option value="6">Soldier Helmet</option>
                <option value="32">Anti Venom Gear</option>
                <option value="13">Medic Gear</option>
                <option value="9">Miners Helmet</option>
                <option value="32">Musketeer Hat</option>
                <option value="7">Bull Helmet</option>
                <option value="22">Emp Helmet</option>
                <option value="12">Booster Hat</option>
                <option value="26">Barbarian Armor</option>
                <option value="21">Plague Mask</option>
                <option value="46">Bull Mask</option>
                <option value="14">Windmill Hat</option>
                <option value="11">Spike Gear</option>
                <option value="53">Turret Gear</option>
                <option value="20">Samurai Armor</option>
                <option value="58">Dark Knight</option>
                <option value="27">Scavenger Gear</option>
                <option value="40">Tank Gear</option>
                <option value="52">Thief Gear</option>
                <option value="55">Bloodthirster</option>
                <option value="56">Assassin Gear</option>
              </select>
            </form>
           <form action="/action_page.php">
              <label for="cars">Accessory: </label>
              <select name="cars" id="Accwinterarmor">
                <option value="11">Monkey Tail</option>
                <option value="0">None</option>
                <option value="12">Snowball</option>
                <option value="9">Tree Cape</option>
                <option value="10">Stone Cape</option>
                <option value="3">Cookie Cape</option>
                <option value="8">Cow Cape</option>
                <option value="11">Monkey Tail</option>
                <option value="17">Apple Basket</option>
                <option value="6">Winter Cape</option>
                <option value="4">Skull Cape</option>
                <option value="5">Dash Cape</option>
                <option value="2">Dragon Cape</option>
                <option value="1">Super Cape</option>
                <option value="7">Troll Cape</option>
                <option value="14">Thorns</option>
                <option value="15">Blockades</option>
                <option value="20">Devils Tail</option>
                <option value="16">Sawblade</option>
                <option value="13">Angel Wings</option>
                <option value="19">Shadow Wings</option>
                <option value="18">Blood Wings</option>
                <option value="21">Corrupt X Wings</option>
              </select>
            </form>
    </body>
</fieldset>
                <div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-map-menu" class="i-tab-content" style="display: none;">
        <h3>Map</h3>
        <label class="Map"><input id="Map" type="checkbox" class="i-checkbox">Use biome map</label>
<div
        <label class="store"><input id="store" type="checkbox" class="i-checkbox">Change Store</label>
</div>
<div
        <label class="storebig"><input id="storebig" type="checkbox" class="i-checkbox">Big Store</label>
</div>
<div
        <label class="notfound"><input id="notfound" type="checkbox" class="i-checkbox">Not Found.</label>
</div>

<div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-controls-menu" class="i-tab-content" style="display: none;">
        <h3>Controls</h3>
<label>Menu-1<button id="mm-keybind-placeSpike" class="i-button i-bold i-right i-inline i-keybind">Tab</button></label>
        <br>
        <label class="i-checkbox-labe"><input id="mm-betterControl" type="checkbox" class="i-checkbox">Custom Controls</label>
<br>
        <fieldset id="i-keybinds">
          <legend>Keybinds</legend>
<div          <label>Place Spike: <button id="mm-keybind-placeSpike" class="i-button i-bold i-right i-inline i-keybind">QWERTY: V</button></label>  </div>
<div          <label>Place Spike Circle: <button id="mm-keybind-placeSpikeCircle" class="i-button i-bold i-right i-inline i-keybind">QWERTY: L</button></label>  </div>
<div          <label>Place Pit Trap/Boost Pad: <button id="mm-keybind-placeTrap" class="i-button i-bold i-right i-inline i-keybind">QWERTY: F</button></label>  </div>
<div          <label>Place Trap Circle: <button id="mm-keybind-placeTrapCircle" class="i-button i-bold i-right i-inline i-keybind">QWERTY: O</button></label>  </div>
<div          <label>Place Turret: <button id="mm-keybind-placeTurret" class="i-button i-bold i-right i-inline i-keybind">QWERTY: H</button></label>  </div>
<div          <label>Place Winmill: <button id="mm-keybind-placeTurret" class="i-button i-bold i-right i-inline i-keybind">QWERTY: N</button></label>  </div>
<div          <label>Heal (Eats food): <button id="mm-keybind-eatFood" class="i-button i-bold i-right i-inline i-keybind">QWERTY: Q</button></label>          </div>
<div          <label>Boost+Spike: <button id="mm-keybind-eatFood" class="i-button i-bold i-right i-inline i-keybind">QWERTY: G</button></label>          </div>
<div          <label>Better Big Map <button id="mm-keybind-eatFood" class="i-button i-bold i-right i-inline i-keybind">QWERTY: M</button></label>          </div>
</fieldset>
<div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-instakill-menu" class="i-tab-content" style="display: none;">
        <h3>Insta Kill</h3>
        <fieldset>
          <legend>Insta Kill:</legend>
    <body>
           <form action="/action_page.php">
              <label for="cars">Hat-1: </label>
              <select name="xD" id="Hatinstakill">
                <option value="7">Bull Helmet</option>
                <option value="0">none</option>
                <option value="51">Moo Cap</option>
                <option value="50">Apple Cap</option>
                <option value="28">Moo Head</option>
                <option value="29">Pig Head</option>
                <option value="30">Fluff Head</option>
                <option value="36">Pandou Head</option>
                <option value="37">Bear Head</option>
                <option value="38">Monkey Head</option>
                <option value="44">Polar Head</option>
                <option value="35">Fez Hat</option>
                <option value="42">Enigma Hat</option>
                <option value="43">Blitz Hat</option>
                <option value="49">Bob XIII Hat</option>
                <option value="57">Pumpkin</option>
                <option value="8">Bummle Hat</option>
                <option value="2">Straw Hat</option>
                <option value="15">Winter Cap</option>
                <option value="5">Cowboy Hat</option>
                <option value="4">Ranger Hat</option>
                <option value="18">Explorer Hat</option>
                <option value="31">Flipper Hat</option>
                <option value="1">Marksman Cap</option>
                <option value="10">Bush Gear</option>
                <option value="48">Halo</option>
                <option value="6">Soldier Helmet</option>
                <option value="32">Anti Venom Gear</option>
                <option value="13">Medic Gear</option>
                <option value="9">Miners Helmet</option>
                <option value="32">Musketeer Hat</option>
                <option value="7">Bull Helmet</option>
                <option value="22">Emp Helmet</option>
                <option value="12">Booster Hat</option>
                <option value="26">Barbarian Armor</option>
                <option value="21">Plague Mask</option>
                <option value="46">Bull Mask</option>
                <option value="14">Windmill Hat</option>
                <option value="11">Spike Gear</option>
                <option value="53">Turret Gear</option>
                <option value="20">Samurai Armor</option>
                <option value="58">Dark Knight</option>
                <option value="27">Scavenger Gear</option>
                <option value="40">Tank Gear</option>
                <option value="52">Thief Gear</option>
                <option value="55">Bloodthirster</option>
                <option value="56">Assassin Gear</option>
              </select>
            </form>
           <form action="/action_page.php">
              <label for="cars">Accessory-1: </label>
              <select name="cars" id="Accinstakill">
                <option value="18">Blood Wings</option>
                <option value="0">None</option>
                <option value="12">Snowball</option>
                <option value="9">Tree Cape</option>
                <option value="10">Stone Cape</option>
                <option value="3">Cookie Cape</option>
                <option value="8">Cow Cape</option>
                <option value="11">Monkey Tail</option>
                <option value="17">Apple Basket</option>
                <option value="6">Winter Cape</option>
                <option value="4">Skull Cape</option>
                <option value="5">Dash Cape</option>
                <option value="2">Dragon Cape</option>
                <option value="1">Super Cape</option>
                <option value="7">Troll Cape</option>
                <option value="14">Thorns</option>
                <option value="15">Blockades</option>
                <option value="20">Devils Tail</option>
                <option value="16">Sawblade</option>
                <option value="13">Angel Wings</option>
                <option value="19">Shadow Wings</option>
                <option value="18">Blood Wings</option>
                <option value="21">Corrupt X Wings</option>
              </select>
            </form>
    </body>
        <div <label class="key2"><input id="key2" type="checkbox" class="i-checkbox">Choose Secondary Weapon</label> </div>
<label>Insta Chat:<input id="ach2" type="text" minlength="0" maxlength="30" style="width: 250px;" placeholder="If You Used Insta This text display" class="i-checkbox"></label>
    <body>
           <form action="/action_page.php">
              <label for="cars">Hat-2: </label>
              <select name="xD" id="Hatinstakill2">
                <option value="53">Turret Gear</option>
                <option value="0">none</option>
                <option value="51">Moo Cap</option>
                <option value="50">Apple Cap</option>
                <option value="28">Moo Head</option>
                <option value="29">Pig Head</option>
                <option value="30">Fluff Head</option>
                <option value="36">Pandou Head</option>
                <option value="37">Bear Head</option>
                <option value="38">Monkey Head</option>
                <option value="44">Polar Head</option>
                <option value="35">Fez Hat</option>
                <option value="42">Enigma Hat</option>
                <option value="43">Blitz Hat</option>
                <option value="49">Bob XIII Hat</option>
                <option value="57">Pumpkin</option>
                <option value="8">Bummle Hat</option>
                <option value="2">Straw Hat</option>
                <option value="15">Winter Cap</option>
                <option value="5">Cowboy Hat</option>
                <option value="4">Ranger Hat</option>
                <option value="18">Explorer Hat</option>
                <option value="31">Flipper Hat</option>
                <option value="1">Marksman Cap</option>
                <option value="10">Bush Gear</option>
                <option value="48">Halo</option>
                <option value="6">Soldier Helmet</option>
                <option value="32">Anti Venom Gear</option>
                <option value="13">Medic Gear</option>
                <option value="9">Miners Helmet</option>
                <option value="32">Musketeer Hat</option>
                <option value="7">Bull Helmet</option>
                <option value="22">Emp Helmet</option>
                <option value="12">Booster Hat</option>
                <option value="26">Barbarian Armor</option>
                <option value="21">Plague Mask</option>
                <option value="46">Bull Mask</option>
                <option value="14">Windmill Hat</option>
                <option value="11">Spike Gear</option>
                <option value="53">Turret Gear</option>
                <option value="20">Samurai Armor</option>
                <option value="58">Dark Knight</option>
                <option value="27">Scavenger Gear</option>
                <option value="40">Tank Gear</option>
                <option value="52">Thief Gear</option>
                <option value="55">Bloodthirster</option>
                <option value="56">Assassin Gear</option>
              </select>
            </form>
           <form action="/action_page.php">
              <label for="cars">Accessory-2: </label>
              <select name="cars" id="Accinstakill2">
                <option value="0">None</option>
                <option value="12">Snowball</option>
                <option value="9">Tree Cape</option>
                <option value="10">Stone Cape</option>
                <option value="3">Cookie Cape</option>
                <option value="8">Cow Cape</option>
                <option value="11">Monkey Tail</option>
                <option value="17">Apple Basket</option>
                <option value="6">Winter Cape</option>
                <option value="4">Skull Cape</option>
                <option value="5">Dash Cape</option>
                <option value="2">Dragon Cape</option>
                <option value="1">Super Cape</option>
                <option value="7">Troll Cape</option>
                <option value="14">Thorns</option>
                <option value="15">Blockades</option>
                <option value="20">Devils Tail</option>
                <option value="16">Sawblade</option>
                <option value="13">Angel Wings</option>
                <option value="19">Shadow Wings</option>
                <option value="18">Blood Wings</option>
                <option value="21">Corrupt X Wings</option>
              </select>
            </form>
    </body>
        <fieldset>
          <legend>Reload</legend>
        <div <label class="reloadweapon"><input id="reloadweapon" type="checkbox" class="i-checkbox">Reload Secondary Weapon</label> </div>
<label>Reload Chat:<input id="ach3" type="text" minlength="0" maxlength="30" style="width: 250px;" placeholder="This text display in Reload Time" class="i-checkbox"></label>

           <form action="/action_page.php">
              <label for="cars">Reload-Hat: </label>
              <select name="xD" id="ReloadHat">
                <option value="20">Samurai Armor</option>
                <option value="0">none</option>
                <option value="51">Moo Cap</option>
                <option value="50">Apple Cap</option>
                <option value="28">Moo Head</option>
                <option value="29">Pig Head</option>
                <option value="30">Fluff Head</option>
                <option value="36">Pandou Head</option>
                <option value="37">Bear Head</option>
                <option value="38">Monkey Head</option>
                <option value="44">Polar Head</option>
                <option value="35">Fez Hat</option>
                <option value="42">Enigma Hat</option>
                <option value="43">Blitz Hat</option>
                <option value="49">Bob XIII Hat</option>
                <option value="57">Pumpkin</option>
                <option value="8">Bummle Hat</option>
                <option value="2">Straw Hat</option>
                <option value="15">Winter Cap</option>
                <option value="5">Cowboy Hat</option>
                <option value="4">Ranger Hat</option>
                <option value="18">Explorer Hat</option>
                <option value="31">Flipper Hat</option>
                <option value="1">Marksman Cap</option>
                <option value="10">Bush Gear</option>
                <option value="48">Halo</option>
                <option value="6">Soldier Helmet</option>
                <option value="32">Anti Venom Gear</option>
                <option value="13">Medic Gear</option>
                <option value="9">Miners Helmet</option>
                <option value="32">Musketeer Hat</option>
                <option value="7">Bull Helmet</option>
                <option value="22">Emp Helmet</option>
                <option value="12">Booster Hat</option>
                <option value="26">Barbarian Armor</option>
                <option value="21">Plague Mask</option>
                <option value="46">Bull Mask</option>
                <option value="14">Windmill Hat</option>
                <option value="11">Spike Gear</option>
                <option value="53">Turret Gear</option>
                <option value="20">Samurai Armor</option>
                <option value="58">Dark Knight</option>
                <option value="27">Scavenger Gear</option>
                <option value="40">Tank Gear</option>
                <option value="52">Thief Gear</option>
                <option value="55">Bloodthirster</option>
                <option value="56">Assassin Gear</option>
              </select>
            </form>
           <form action="/action_page.php">
              <label for="cars"> Reload-Accessory: </label>
              <select name="cars" id="ReloadAcc">
                <option value="0">none</option>
                <option value="12">Snowball</option>
                <option value="9">Tree Cape</option>
                <option value="10">Stone Cape</option>
                <option value="3">Cookie Cape</option>
                <option value="8">Cow Cape</option>
                <option value="11">Monkey Tail</option>
                <option value="17">Apple Basket</option>
                <option value="6">Winter Cape</option>
                <option value="4">Skull Cape</option>
                <option value="5">Dash Cape</option>
                <option value="2">Dragon Cape</option>
                <option value="1">Super Cape</option>
                <option value="7">Troll Cape</option>
                <option value="14">Thorns</option>
                <option value="15">Blockades</option>
                <option value="20">Devils Tail</option>
                <option value="16">Sawblade</option>
                <option value="13">Angel Wings</option>
                <option value="19">Shadow Wings</option>
                <option value="18">Blood Wings</option>
                <option value="21">Corrupt X Wings</option>
              </select>
            </form>
        </fieldset>
           <form action="/action_page.php">
              <label for="cars">End Hat: </label>
              <select name="xD" id="Hatinstakill3">
                <option value="6">Soldier Gear</option>
                <option value="0">none</option>
                <option value="51">Moo Cap</option>
                <option value="50">Apple Cap</option>
                <option value="28">Moo Head</option>
                <option value="29">Pig Head</option>
                <option value="30">Fluff Head</option>
                <option value="36">Pandou Head</option>
                <option value="37">Bear Head</option>
                <option value="38">Monkey Head</option>
                <option value="44">Polar Head</option>
                <option value="35">Fez Hat</option>
                <option value="42">Enigma Hat</option>
                <option value="43">Blitz Hat</option>
                <option value="49">Bob XIII Hat</option>
                <option value="57">Pumpkin</option>
                <option value="8">Bummle Hat</option>
                <option value="2">Straw Hat</option>
                <option value="15">Winter Cap</option>
                <option value="5">Cowboy Hat</option>
                <option value="4">Ranger Hat</option>
                <option value="18">Explorer Hat</option>
                <option value="31">Flipper Hat</option>
                <option value="1">Marksman Cap</option>
                <option value="10">Bush Gear</option>
                <option value="48">Halo</option>
                <option value="6">Soldier Helmet</option>
                <option value="32">Anti Venom Gear</option>
                <option value="13">Medic Gear</option>
                <option value="9">Miners Helmet</option>
                <option value="32">Musketeer Hat</option>
                <option value="7">Bull Helmet</option>
                <option value="22">Emp Helmet</option>
                <option value="12">Booster Hat</option>
                <option value="26">Barbarian Armor</option>
                <option value="21">Plague Mask</option>
                <option value="46">Bull Mask</option>
                <option value="14">Windmill Hat</option>
                <option value="11">Spike Gear</option>
                <option value="53">Turret Gear</option>
                <option value="20">Samurai Armor</option>
                <option value="58">Dark Knight</option>
                <option value="27">Scavenger Gear</option>
                <option value="40">Tank Gear</option>
                <option value="52">Thief Gear</option>
                <option value="55">Bloodthirster</option>
                <option value="56">Assassin Gear</option>
              </select>
            </form>
           <form action="/action_page.php">
              <label for="cars">End Accessory: </label>
              <select name="cars" id="Accinstakill3">
                <option value="21">Corrupt X Wings</option>
                <option value="0">None</option>
                <option value="12">Snowball</option>
                <option value="9">Tree Cape</option>
                <option value="10">Stone Cape</option>
                <option value="3">Cookie Cape</option>
                <option value="8">Cow Cape</option>
                <option value="11">Monkey Tail</option>
                <option value="17">Apple Basket</option>
                <option value="6">Winter Cape</option>
                <option value="4">Skull Cape</option>
                <option value="5">Dash Cape</option>
                <option value="2">Dragon Cape</option>
                <option value="1">Super Cape</option>
                <option value="7">Troll Cape</option>
                <option value="14">Thorns</option>
                <option value="15">Blockades</option>
                <option value="20">Devils Tail</option>
                <option value="16">Sawblade</option>
                <option value="13">Angel Wings</option>
                <option value="19">Shadow Wings</option>
                <option value="18">Blood Wings</option>
                <option value="21">Corrupt X Wings</option>
              </select>
            </form>
    </body>
</fieldset>
<div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-changeweapon-menu" class="i-tab-content" style="display: none;">
        <h3>ChangeWeapon</h3>
        <fieldset>
          <legend>Change Weapon Keys</legend>
             <div   <h3 class="menuPrompt">Age 8:Katana: </h3> <input value="${String.fromCharCode(katanaKey)}" id="katana" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>    </div>
             <div   <h3 class="menuPrompt">Age 8:CrossBow: </h3> <input value="${String.fromCharCode(bowKey)}" id="crossbow" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>    </div>
             <div   <h3 class="menuPrompt">Age 9:Musket: </h3> <input value="${String.fromCharCode(MusketKey)}" id="musket" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>    </div>
</fieldset>
<div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-chat-menu" class="i-tab-content" style="display: none;">
        <h3>Chat Menu</h3>
        <fieldset>
          <legend>Auto Chater</legend>
<div
        <label class="movechat"><input id="movechat" type="checkbox" class="i-checkbox">Move Message's</label>
</div>
<div
        <label class="chat123"><input id="chat123" type="checkbox" class="i-checkbox">Choose Message's</label>
</div>
<div
        <label class="chatplace"><input id="chatplace" type="checkbox" class="i-checkbox">Place Message's(MooVietPlacer)</label>
</div>
</fieldset>
<div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-hatmacro-menu" class="i-tab-content">
        <h3>Hat-Macro</h3>
             <div   <h3 class="menuPrompt">Tank Gear+Shadow Wing: </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>    </div>
             <div   <h3 class="menuPrompt">Bull Helmet+Blood Wing: </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>    </div>
             <div   <h3 class="menuPrompt">Soldier Helmet+Corrupt X Wing: </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>    </div>
             <div   <h3 class="menuPrompt">Samurai Armor+Blood Wings: </h3> <input value="${String.fromCharCode(SamuraiArmorKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>    </div>
             <div   <h3 class="menuPrompt">Turret Gear+Angel Wing: </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>    </div>
             <div   <h3 class="menuPrompt">Booster Hat+Monkey Tail: </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>    </div>
        <div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-music-menu" class="i-tab-content">
        <h3>MooViet Music</h3>
<iframe width="112px" height="100px" src="https://www.youtube.com/embed/cJsK01njRgg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="112px" height="100px" src="https://www.youtube.com/embed/zMWmX-vEs3g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="112px" height="100px" src="https://www.youtube.com/embed/a5ZKAVC4A78" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-help-menu" class="i-tab-content">
        <h3>Help</h3>
        <ul>
          <li><strong>Hack:</strong> MooViet 2020 Product 4.7.0</li>
          <li><strong>Insta Kill:</strong> First Open Insta Kill Check(In Main) , Insta Kill=Right Click.</li>
          <li><strong>Selector:</strong> You Can Change Hat/Acc Selector.</li>
          <li><strong>Member:</strong> Code's By VietTeam.</li>
        </ul>
        <div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-test-menu" class="i-tab-content">
        <h3>TEST</h3>
Hatriver<input class="textarea" value="6" type="textarena" placeholder="ID" id="riverHatClick">
Accessory<input class="textarea" value="19" type="textarena" placeholder="ID" id="riverAccClick">
HatRELOAD<input class="textarea" value="6" type="textarena" placeholder="ID" id="reloadHat">
Accessory<input class="textarea" value="19" type="textarena" placeholder="ID" id="reloadAcc">
Hat------<input class="textarea" value="6" type="textarena" placeholder="ID" id="Hat">
Accessory<input class="textarea" value="19" type="textarena" placeholder="ID" id="acc">
Hat------<input class="textarea" value="6" type="textarena" placeholder="Put Hat Id" id="AFHatClick">
Accessory<input class="textarea" value="19" type="textarena" placeholder="Put Acc Id" id="AFAccClick">
Hat------<input class="textarea" value="6" type="textarena" placeholder="Put Hat Id" id="HatClick">
Accessory<input class="textarea" value="18" type="textarena" placeholder="Put Acc Id" id="AccClick">
Hat------<input class="textarea" value="6" type="textarena" placeholder="Put Hat Id" id="hatspeedwinter">
Accessory<input class="textarea" value="18" type="textarena" placeholder="Put Acc Id" id="accspeedwinter">
Hat------<input class="textarea" value="6" type="textarena" placeholder="Put Hat Id" id="hatspeedriver">
Accessory<input class="textarea" value="18" type="textarena" placeholder="Put Acc Id" id="accspeedriver">
Hat------<input class="textarea" value="6" type="textarena" placeholder="Put Hat Id" id="hatspeednormal">
Accessory<input class="textarea" value="18" type="textarena" placeholder="Put Acc Id" id="accspeednormal">
Hat------<input class="textarea" value="6" type="textarena" placeholder="Put Hat Id" id="Hatinsta">
Accessory<input class="textarea" value="18" type="textarena" placeholder="Put Acc Id" id="Accinsta">
Hat------<input class="textarea" value="6" type="textarena" placeholder="Put Hat Id" id="Hatinsta2">
Accessory<input class="textarea" value="18" type="textarena" placeholder="Put Acc Id" id="Accinsta2">
Hat------<input class="textarea" value="6" type="textarena" placeholder="Put Hat Id" id="Hatinsta3">
Accessory<input class="textarea" value="18" type="textarena" placeholder="Put Acc Id" id="Accinsta3">
        <div class="i-palomita">Made - by <a href="">VietTeam</a></div>
      </div>
      <div id="mm-help-menu" class="i-tab-content" style="display: none;">
        <h3>Help</h3>
        <p>Bot Mode auto Controling and atacking players .Offense,Defense And Support Hat/Acc menus.Defense heal , if your defence hat/acc open,your auto heal up to 2X.</p>
        <ul>
          <li><strong>Offense:</strong> Equips when you use a weapon (click) with an enemy in attacking range.(Hammer might not work atm) (Bows might not work atm)</li>
          <li><strong>Defense:</strong> Equips when you are within range to attack another player but you are not currently attacking.</li>
          <li><strong>Support:</strong> Equips regularly when no enemy players are in range.</li>
          <li><strong>Insta Kill:</strong>If Insta Kill Off , Right Click Useing Bow,Musket.</li>
          <li><strong>Menu-2(ESC):</strong>Menu-2 For Same Fealtures Setting.</li>
          <li><strong>MooViet:</strong> Fixed , Working in 2020.</li>
        </ul>
 <h3>You Heal</h3>
         <div id='healthDisplay' class='resourceDisplay'> <div align="right"><img src="https://vignette.wikia.nocookie.net/moom/images/8/81/Healing_Pad.png"></div></div>

              <div class="i-palomita">Subscribe To <a href="">VietTeam</a></div>
      </div>

</div>
</div>
      </div>
    </div>
    <div class="i-close"></div>`;

button.classList.add("menuButton");
button.classList.add("open-menu-button");
button.textContent = "Open MooViet Menu";

window.addEventListener("keydown", keydown);
button.addEventListener("click", toggleMenu);

card.appendChild(button);
document.body.appendChild(styles);
document.body.appendChild(menu);

function keydown(e) {
  if (e.key === "Tab") {
    e.preventDefault();
    toggleMenu();
  }
}

document.querySelectorAll(".i-tab-menu-item").forEach(elem => {
  elem.addEventListener("click", click);
});

function click(e) {
  const { target } = e;

  hideall();

  for (const c of [
    "main",
    "offense",
    "defense",
    "support",
    "map",
    "controls",
    "instakill",
    "changeweapon",
    "chat",
    "hatmacro",
    "music",
    "help",
    "test",
    "help"
  ]) {
    if (target.textContent.toLowerCase() == c)
      document.querySelector(`#mm-${c}-menu`).style.display = "block";
      target.classList.add("is-active");
  }
}

function hideall() {
  for (const c of [
    "#mm-main-menu",
    "#mm-offense-menu",
    "#mm-defense-menu",
    "#mm-support-menu",
    "#mm-map-menu",
    "#mm-controls-menu",
    "#mm-instakill-menu",
    "#mm-changeweapon-menu",
    "#mm-chat-menu",
    "#mm-hatmacro-menu",
    "#mm-music-menu",
    "#mm-help-menu",
    "#mm-test-menu",
    "#mm-help-menu"
  ]) {
    document.querySelector(c).style.display = "none";

    document.querySelectorAll(".i-tab-menu-item").forEach(item => item.classList.remove("is-active"));
  }
}

function toggleMenu() {
  menu.style.display = menu.style.display == "block" ? "none" : "block";
}
toggleMenu()
toggleMenu()




var BarabarianKey = 84;
var SpikeKey = 86
var key2;
var menu1 = 1;
var menu3 = 1;
var menu2 = 1;
try {
    document.getElementById("moomooio_728x90_home").style.display = "none";
    $("moomooio728x90_home").parent().css({display: "none"});
} catch (e) {
    console.log("There was an error removing the ads.");
}


var menuChange = document.createElement("div");
menuChange.className = "menuCard";
menuChange.id = "mainSettings";
menuChange.innerHTML = `
<div id="simpleModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span class="closeBtn">&times;</span>
            <h2 style="font-size: 17px;"color: #ff0000>MooViet Messager</h2>
        </div>
        <div class="modal-body" style="font-size: 17px;">
            <div class="flexControl">
            <h3 style="font-size: 17px;">Auto Heal Message</h3>
<label>-<input id="autohealchat" type="text" minlength="0" maxlength="30" style="width: 250px;" placeholder="If Auto Heal Worked,This Text Display" class="i-checkbox">-</label>
            <h3 style="font-size: 17px;">Hat Macro Message</h3>
<label>-<input id="hatmacro" type="text" minlength="0" maxlength="30" style="width: 250px;" placeholder="If You Used Hat Macro,This Text DisPlay" class="i-checkbox">-</label>
            <h3 style="font-size: 17px;">Hotkey Message</h3>
<label>-<input id="hotkey" type="text" minlength="0" maxlength="30" style="width: 250px;" placeholder="If You Used Hotkey,This Text Display" class="i-checkbox">-</label>
            </div>
        </div>
        <div class="modal-footer">
            <h3 style="font-size: 17px;">Good Playing</h3>
        </div>
    </div>
</div>
`
document.body.appendChild(menuChange)

var KeyChange = document.createElement("divx");
KeyChange.className = "menuCard";
KeyChange.id = "mainSettings";
KeyChange.innerHTML = `
<div id="simpleModalx" class="modalx">
<div class="modal-content">
<div class="modal-headerx">
<span class="closeBtnx">&times;</span>
<h2 style="font-size: 17px; color: #ff0000">MooViet Hat Macro</h2>
</div>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
             <div   <h3 class="menuPrompt">Tank Gear+Shadow Wing: </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>    </div>
             <div   <h3 class="menuPrompt">Bull Helmet+Blood Wing: </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>    </div>
             <div   <h3 class="menuPrompt">Soldier Helmet+Corrupt X Wing: </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>    </div>
             <div   <h3 class="menuPrompt">Samurai Armor+Blood Wings: </h3> <input value="${String.fromCharCode(SamuraiArmorKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>    </div>
             <div   <h3 class="menuPrompt">Turret Gear+Angel Wing: </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>    </div>
             <div   <h3 class="menuPrompt">Booster Hat+Monkey Tail: </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>    </div>

</div>
</div>
<div class="modal-footerx">
<p style="color: #dd00ff; font-size: 17px;">MooViet Hat Macro End</p>
</div>
</div>
</div>
`
document.body.appendChild(KeyChange)

var Msg = document.createElement("Msgdiv");
Msg.className = "menuCard";
Msg.id = "mainSettings";
Msg.innerHTML = `
<div id="MsgsimpleModal" class="Msgmodal">
<div class="modal-content">
<div class="modal-headerwtf">
<span class="MsgcloseBtn">&times;</span>
<h2 style="font-size: 17px; color: #ff0000">MooViet Music</h2>
</div>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
<iframe width="500px" height="236.25px" src="https://www.youtube.com/embed/cJsK01njRgg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="500px" height="236.25px" src="https://www.youtube.com/embed/zMWmX-vEs3g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="500px" height="236.25px" src="https://www.youtube.com/embed/a5ZKAVC4A78" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3 style="color: #d911cb;"">VietTeam Music</h3>
<iframe width="500px" height="236.25px" src="https://www.youtube.com/embed/WS-rHDjD3S4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="500px" height="236.25px" src="https://www.youtube.com/embed/HhvKvXUa4vg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
</div>
<div class="modal-footerwtf">
<p style="color: #00fffb;">Good Lissen</p>
</div>
</div>
</div>
`
document.body.appendChild(Msg)
$("#adCard").css({
    display: "none"
});


$(document).ready(function() {
});
document.addEventListener('keydown', function(e) {
    if (e.keyCode == menu3) {
        if (modalx.style.display = "none") {
            modalx.style.display = "block";
        } else {
            modalx.style.display = "none";
        }
    }
    if (e.keyCode == menu2) {//musicmenu
        if (Msgmodal.style.display = "none") {
            Msgmodal.style.display = "block";
        } else {
            Msgmodal.style.display = "none";
        }
    } else if (e.keyCode == menu1) {
        if (modal.style.display = "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    } else if (e.keyCode == TankGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TankGear);
    } else if (e.keyCode == SoldierHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SoldierHelmet);
    } else if (e.keyCode == BullHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BullHelmet);
    } else if (e.keyCode == BoosterHatKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BoosterHat);
    } else if (e.keyCode == BarabarianKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BarbarianArmor);
    } else if (e.keyCode == SpikeGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SpikeGear);
    } else if (e.keyCode == TurretKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TurretGear);
    }
})
// Get modal element
var modalx = document.getElementById("simpleModalx");
// Get close button
var closeBtnx = document.getElementsByClassName('closeBtnx')[0];

// Events
closeBtnx.addEventListener('click', closeModalx);
window.addEventListener('click', outsideClick);

// Close
function closeModalx() {
    modalx.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == modalx) {
        modalx.style.display = 'none';
    }
}
// Get modal element
var modal = document.getElementById("simpleModal");
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Events
closeBtn.addEventListener('click', closeModal);

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Get modal element
var Msgmodal = document.getElementById("MsgsimpleModal");
// Get close button
var MsgcloseBtn = document.getElementsByClassName('MsgcloseBtn')[0];

// Events
MsgcloseBtn.addEventListener('click', MsgcloseModal);

// Close
function MsgcloseModal() {
    Msgmodal.style.display = 'none';
}


setInterval(() => {
    lt = document.getElementById("lt").value;
    rt = document.getElementById("rt").value;
}, 1);
setInterval(() => {
    clicknoenemyhat = document.getElementById("clicknoenemyhat").value;
    clicknoenemyacc = document.getElementById("clicknoenemyacc").value;
}, 1);
setInterval(() => {
    bowhat = document.getElementById("bowhat").value;
    bowacc = document.getElementById("bowacc").value;
}, 1);
setInterval(() => {
    autohealspeed = document.getElementById("autohealspeed").value;
}, 1);
setInterval(() => {
    instahat = document.getElementById("instahat").value;
    instaacc = document.getElementById("instaacc").value;
}, 1);
setInterval(() => {
    insta2hat = document.getElementById("insta2hat").value;
    insta2acc = document.getElementById("insta2acc").value;
}, 1);
setInterval(() => {
    speedhat = document.getElementById("speedhat").value;
    speedacc = document.getElementById("speedacc").value;
}, 1);
setInterval(() => {
    otherinsta = document.getElementById("otherinsta").value;
}, 1);
setInterval(() => {
    reloadhat = document.getElementById("reloadhat").value;
    reloadacc = document.getElementById("reloadacc").value;
}, 1);
setInterval(() => {
    endhat = document.getElementById("endhat").value;
    endacc = document.getElementById("endacc").value;
}, 1);
setInterval(() => {
    clickenemyhat = document.getElementById("clickenemyhat").value;
    clickenemyacc = document.getElementById("clickenemyacc").value;
}, 1);
setInterval(() => {
    speedarmorhat = document.getElementById("speedarmorhat").value;
    speedarmoracc = document.getElementById("speedarmoracc").value;
    speedarmorriverhat = document.getElementById("speedarmorriverhat").value;
    speedarmorriveracc = document.getElementById("speedarmorriveracc").value;
    speedarmorwinteracc = document.getElementById("speedarmorwinteracc").value;
    speedarmorwinteracc = document.getElementById("speedarmorwinteracc").value;
}, 1);
setInterval(() => {
    defencehat = document.getElementById("defencehat").value;
    defenceacc = document.getElementById("defenceacc").value;
}, 1);
setInterval(() => {
    gamenametext = document.getElementById("gamenametext").value;
}, 1);
var RESTART = setInterval(XD, 500);
function XD(){
var W = document.getElementById('AccS_ID').value;
var W2 = document.getElementById('HaTs_ID').value;
document.getElementById('acc').value = W;
document.getElementById('Hat').value = W2;
}
var RESTART2 = setInterval(XD2, 500);
function XD2(){
var V = document.getElementById('A_AccS_ID_CLICK').value;
var V2 = document.getElementById('A_HaTs_ID_CLICK').value;
var x2 = document.getElementById('HaTs_ID_CLICK').value;
var x = document.getElementById('AccS_ID_CLICK').value;
    var riverhat0 = document.getElementById('hatriverclick').value;
var riveracc0 = document.getElementById('accriverclick').value;
document.getElementById('HatClick').value = x2;
document.getElementById('AccClick').value = x;
document.getElementById('AFHatClick').value = V2;
document.getElementById('AFAccClick').value = V;
    document.getElementById('riverHatClick').value = riverhat0;
document.getElementById('riverAccClick').value = riveracc0;
}
var RESTART3 = setInterval(XD3, 500);
function XD3(){
var wintera = document.getElementById('Accwinterarmor').value;
var winterh = document.getElementById('Hatwinterarmor').value;
document.getElementById('hatspeedwinter').value = winterh;
document.getElementById('accspeedwinter').value = wintera;
    var rivera = document.getElementById('Accriverarmor').value;
var riverh = document.getElementById('Hatriverarmor').value;
document.getElementById('hatspeedriver').value = riverh;
document.getElementById('accspeedriver').value = rivera;
        var normala = document.getElementById('Accnormalarmor').value;
var normalh = document.getElementById('Hatnormalarmor').value;
document.getElementById('hatspeednormal').value = normalh;
document.getElementById('accspeednormal').value = normala;
}
var RESTART4 = setInterval(XD4, 500);
function XD4(){
var hatinsta00 = document.getElementById('Hatinstakill').value;
var accinsta00 = document.getElementById('Accinstakill').value;
document.getElementById('Hatinsta').value = hatinsta00;
document.getElementById('Accinsta').value = accinsta00;
    var hatinsta002 = document.getElementById('Hatinstakill2').value;
var accinsta002 = document.getElementById('Accinstakill2').value;
document.getElementById('Hatinsta2').value = hatinsta002;
document.getElementById('Accinsta2').value = accinsta002;
        var hatinsta003 = document.getElementById('Hatinstakill3').value;
var accinsta003 = document.getElementById('Accinstakill3').value;
document.getElementById('Hatinsta3').value = hatinsta003;
document.getElementById('Accinsta3').value = accinsta003;
            var hatreload0 = document.getElementById('ReloadHat').value;
var accreload0 = document.getElementById('ReloadAcc').value;
document.getElementById('reloadHat').value = hatreload0;
document.getElementById('reloadAcc').value = accreload0;
}
var autoheal0 = document.querySelector("#AutoHeal")

autoheal0.addEventListener('change', function() {
    if (this.checked) {
          healToggle = true
    } else {
healToggle = false

    }
})
var reload0 = document.querySelector("#reloadweapon")

reload0.addEventListener('change', function() {
    if (this.checked) {
          reload = true
    } else {
reload = false

    }
})

var movechat0 = document.querySelector("#movechat")

movechat0.addEventListener('change', function() {
    if (this.checked) {
          movechat = true
    } else {
movechat = false

    }
})
var chat1230 = document.querySelector("#chat123")

chat1230.addEventListener('change', function() {
    if (this.checked) {
          chat123 = true
    } else {
chat123 = false

    }
})

var storechange0 = document.querySelector("#store")

storechange0.addEventListener('change', function() {
    if (this.checked) {
          $("#storeMenu").css({'position': 'absolute',
                  'width': '500px',
                  'height': '500px',});
    } else {
          $("#storeMenu").css({'position': 'absolute',
                  'width': '1200px',
                  'height': '350px',});

    }
})

var storebig0 = document.querySelector("#storebig")

storebig0.addEventListener('change', function() {
    if (this.checked) {
          $("#storeHolder").css({'position': 'absolute',
                  'width': '1000px',
                  'height': '1500px',});
    } else {
          $("#storeHolder").css({'position': 'absolute',
                  'width': '400px',
                  'height': '400px',});

    }
})
var autohealdef = document.querySelector("#defheal")

autohealdef.addEventListener('change', function() {
    if (this.checked) {
          healToggledef = true
    } else {
healToggledef = false

    }
})

var instakill0 = document.querySelector("#InstaKill")

instakill0.addEventListener('change', function() {
    if (this.checked) {
        instakill = true;
    } else {
instakill = false;

    }
})
var key20 = document.querySelector("#key2")

key20.addEventListener('change', function() {
    if (this.checked) {
             key2 = true
    } else {
            key2 = false

    }
})
var chatplace0 = document.querySelector("#chatplace")

chatplace0.addEventListener('change', function() {
    if (this.checked) {
             chatplace = true
    } else {
            chatplace = false

    }
})

var resethat0 = document.querySelector("#ResetHat")

resethat0.addEventListener('change', function() {
    if (this.checked) {
             AutoReset = true
    } else {
            AutoReset = false

    }
})

var bot0 = document.querySelector("#Bot")

bot0.addEventListener('change', function() {
    if (this.checked) {
             BotToggle = true
    } else {
            BotToggle = false

    }
})

var hathacking0 = document.querySelector("#HatHacking")

hathacking0.addEventListener('change', function() {
    if (this.checked) {
             hatToggle = true
    } else {
            hatToggle = false

    }
})
var map0 = document.querySelector("#Map")

map0.addEventListener('change', function() {
   if (this.checked) {
       $("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});
       console.log('checked')

   } else {
       $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
       console.log('unchecked')

   }
})

var aimbot0 = document.querySelector("#AimBot")

aimbot0.addEventListener('change', function() {
    if (this.checked) {
          autoaim = true
    } else {
autoaim = false

    }
})

var speed0 = document.querySelector("#Speed")

speed0.addEventListener('change', function() {
    if (this.checked) {
          Speed = true
    } else {
Speed = false

    }
})

var click0 = document.querySelector("#Click0")

click0.addEventListener('change', function() {
    if (this.checked) {
          wtf = true
    } else {
wtf = false

    }
})
var clickdef0 = document.querySelector("#Clickdef")

click0.addEventListener('change', function() {
    if (this.checked) {
          wtfdef = true
    } else {
wtfdef = false

    }
})
var clickspeed0 = document.querySelector("#Clickspeed")

click0.addEventListener('change', function() {
    if (this.checked) {
          wtfspeed = true
    } else {
wtfspeed = false

    }
})
var wtf = false;
var wtfdef = false;
var wtfspeed = false;
var ezz;
document.addEventListener("mousedown", buttonPress, false);

function buttonPress(e) {
            if (e.button == 2) {
                if (instakill = true) {
                      var Hatinsta = document.getElementById("Hatinsta").value;
              var Accinsta = document.getElementById("Accinsta").value;
                              var Hatinsta2 = document.getElementById("Hatinsta2").value;
              var Accinsta2 = document.getElementById("Accinsta2").value;
                                      var Hatinsta3 = document.getElementById("Hatinsta3").value;
              var Accinsta3 = document.getElementById("Accinsta3").value;
        doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, Hatinsta, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, Accinsta, 1]]);
    doNewSend(["ch", [ichat(true, 5)]])
        doNewSend(["c", [1]]);
        setTimeout( () => {
            if (key2 = true) {
            doNewSend(["13c", [0, Hatinsta2, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, Accinsta2, 1]]);
            doNewSend(["5", [secondary, true]]);}
        }, instaSpeed - 130);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            if (isEnemyNear == true) {
            doNewSend(["13c", [0, Hatinsta3, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, Accinsta3, 1]]);
        }
            if (isEnemyNear == false) {
                            if (myPlayer.y < 2400){
                                hat(15);
                                                            acc(11);
                            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                                hat(31);
                                                            acc(11);
                            } else {
                                hat(12);
                                                            acc(11);
                            }
            }

        }, instaSpeed);

    }
            }

document.addEventListener('keydown', (e)=>{
        if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, Hatinsta, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, Accinsta, 1]]);
    doNewSend(["ch", [ichat(true, 5)]])
        doNewSend(["c", [1]]);
        setTimeout( () => {
            if (key2 = true) {
            doNewSend(["13c", [0, Hatinsta2, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, Accinsta2, 1]]);
            doNewSend(["5", [secondary, true]]);}
        }, instaSpeed - 130);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            if (isEnemyNear == true) {
            doNewSend(["13c", [0, Hatinsta3, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, Accinsta3, 1]]);
        }
            if (isEnemyNear == false) {
                            if (myPlayer.y < 2400){
                                hat(15);
                                                            acc(11);
                            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                                hat(31);
                                                            acc(11);
                            } else {
                                hat(12);
                                                            acc(11);
                            }
            }

        }, instaSpeed);

    }
    })

      var HatClick = document.getElementById("HatClick").value;
       var AccClick = document.getElementById("AccClick").value;
      var AFHatClick = document.getElementById("AFHatClick").value;
      var AFAccClick = document.getElementById("AFAccClick").value;
          var riverHatClick = document.getElementById("riverHatClick").value;
      var riverAccClick = document.getElementById("riverAccClick").value;

    if (e.button == 0) {
        if (wtf == true) {
   if (myPlayer.y > 6850 && myPlayer.y < 7550){
       doNewSend(["5", [primary, true]]);
    doNewSend(["13c", [0, riverHatClick, 0]]);
    doNewSend(["13c", [0, riverAccClick, 1]]);
       doNewSend(["c", [1]]);
   } else {
          if(isEnemyNear == true) {
       doNewSend(["5", [primary, true]]);
    doNewSend(["13c", [0, HatClick, 0]]);
    doNewSend(["13c", [0, AccClick, 1]]);
       doNewSend(["c", [1]]);
          }
        if(isEnemyNear == false) {
       doNewSend(["5", [primary, true]]);
    doNewSend(["13c", [0, AFHatClick, 0]]);
    doNewSend(["13c", [0, AFAccClick, 1]]);
       doNewSend(["c", [1]]);
        }
          }
            doNewSend(["5", [primary, true]]);
            setTimeout(() => {
                if(isEnemyNear == false) {
                            if (myPlayer.y < 2400){
                                hat(15);
                                                            acc(11);
                            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                                hat(31);
                                                            acc(11);
                            } else {
                                hat(12);
                                                            acc(11);
                            }
                }
                if(isEnemyNear == true) {
    doNewSend(["13c", [0, 6, 0]]);
    doNewSend(["13c", [0, 21, 1]]);
        }
            }, 150);
        }
    }

}

var speed = 2000;
var reload;
var lel = false;
function nothig() {
    var lel = false;
    console.log("fOlS");
}
setInterval(() => {
    var ach = document.getElementById("ach1").value;
    if(ach == 1) {
        nothig();
    } else {
        doNewSend(["ch", [ach]]);
    }
}, 1000);

unsafeWindow.admob = {
    requestInterstitialAd: ()=>{},
    showInterstitialAd: ()=>{}
}
function ichatreload(space, chance) {
    var ach1 = document.getElementById("ach3").value;
    let result = '';
    let characters;
    if(space) {
        characters = ach1;
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
           result += "";
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}
function ichat(space, chance) {
    var ach1 = document.getElementById("ach2").value;
    let result = '';
    let characters;
    if(space) {
        characters = ach1;
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
           result += "";
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}
function hatmacro(space, chance) {
    var ach1 = document.getElementById("hatmacro").value;
    let result = '';
    let characters;
    if(space) {
        characters = ach1;
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
           result += "";
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}
function hotkey(space, chance) {
    var ach1 = document.getElementById("hotkey").value;
    let result = '';
    let characters;
    if(space) {
        characters = ach1;
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
           result += "";
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}
function autohealchat(space, chance) {
    var ach1 = document.getElementById("autohealchat").value;
    let result = '';
    let characters;
    if(space) {
        characters = ach1;
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
       if(Math.floor(Math.random() * chance) == 0 && characters.charAt(i) != "-" && count < 0 && characters.charAt(i) != " ") {
           result += "";
           count++
       } else {
           result += characters.charAt(i);
       }
    }
    return result;
}



























