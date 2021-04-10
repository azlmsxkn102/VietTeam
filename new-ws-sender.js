// ==UserScript==
// @name       New WS SENDER
// @namespace    -
// @version    2.0
// @description NO
// @author       VN
// @match        *://sandbox.moomoo.io/*
// @match        *://moomoo.io/*
// @grant        none
// @require      https://greasyfork.org/scripts/423602-msgpack/code/msgpack.js
// @require      https://greasyfork.org/scripts/410512-sci-js-from-ksw2-center/code/scijs%20(from%20ksw2-center).js

// ==/UserScript==

let hue = 0;

let replaceInterval = setInterval(() => {
if (CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = ((oldFunc) => function() { if (this.fillStyle == "#8ecc51") this.fillStyle = `hsl(${hue}, 100%, 50%)`; return oldFunc.call(this, ...arguments); })(CanvasRenderingContext2D.prototype.roundRect);
  clearInterval(replaceInterval);
}}, 10);

function changeHue() {
  hue += Math.random() * 3;
}

setInterval(changeHue, 10);

let mouseX;
let mouseY;

let width;
let height;
setInterval(() => {
    if(autoaim == true) {
        doNewSend(["2", [nearestEnemyAngle]]);
        setInterval(()=>{
            doNewSend(["2", [nearestEnemyAngle]]);
        }, 5);
    }
}, 0);

setInterval(() => {
    if(autoprimary == true) {
        doNewSend(["5", [primary, true]]);
    }
}, 0);

setInterval(() => {
    if(autosecondary == true) {
        doNewSend(["5", [secondary, true]]);
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

var nearestEnemy;
var nearestEnemyAngle;
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
       if (data[2] == 50) {
           if(lastHealth == 25 && enemiesNear){
                                    place(foodType, null);
                                };
       }
       if (data[2] < 16 && data[2] > 0) {
           place(foodType, null);
       }
       if (data[2] < 94 && data[2] > 0) {
           setTimeout(()=>{
               place(foodType, null);
               place(foodType, null);
               place(foodType, null);
               place(foodType, null);
               place(foodType, null);
           }, 140 - delay);
       }
       if (data[2] < 100 && data[2] > 94){
           setTimeout(()=>{
               place(foodType, null);
           }, 300 - delay);
       }
       lastHealth = data[2];
   }
   update();
}
var lastHealth = 0;
var pingms = 0;
var delay = 0;
setInterval(()=>{
    var getPing = document.getElementById("pingDisplay").innerText;
    var text1 = getPing.replace("Ping:", "");
    var text2 = text1.replace("ms", "");
    pingms = parseInt(text2);
    if (pingms < 140) {
        delay = pingms;
    } else {
        delay = 0;
    }
    console.log(140 - delay);
}, 500);

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

function placeQ(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, boostDir]]);
    doNewSend(["c", [0, boostDir]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
    doNewSend(["2", [nearestEnemyAngle]]);
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


const healer1 = repeater(100, () => {placeQ(foodType, boostDir);
                                    placeQ(foodType, boostDir);
                                    placeQ(foodType, boostDir)}, 50);
const healer2 = repeater(81, () => {placeQ(foodType, boostDir);
                                    placeQ(foodType, boostDir);
                                    placeQ(foodType, boostDir)}, 50);
const boostPlacer = repeater(97, () => {place(boostType)}, 0);
const fourSpawnpader = repeater(75, fourSpawnpad, 0);
const spikePlacer = repeater(86, () => {place(spikeType)}, 0);
const millPlacer = repeater(78, () => {place(millType)}, 0);
const turretPlacer = repeater(72, () => {place(turretType)}, 0);

document.addEventListener('keydown', (e)=>{
    spikePlacer.start(e.keyCode);
    fourSpawnpader.start(e.keyCode);
    healer1.start(e.keyCode);
    healer2.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    millPlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);
//KeyCode event
})

document.addEventListener('keyup', (e)=>{
    spikePlacer.stop(e.keyCode);
    fourSpawnpader.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer1.stop(e.keyCode);
    healer2.stop(e.keyCode);
})


function isElementVisible(e) {
    return (e.offsetParent !== null);
}

function fourSpawnpad() {
       place(spawnpadType, myPlayer.dir + toRad(135));
       place(spawnpadType, myPlayer.dir + toRad(150));
       place(spawnpadType, myPlayer.dir + toRad(165));
       place(spawnpadType, myPlayer.dir + toRad(180));
       place(spawnpadType, myPlayer.dir + toRad(270));
       place(spawnpadType, myPlayer.dir + toRad(360));
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
document.getElementById("adCard").style.display = "none";
document.getElementById("promoImgHolder").style.display = "none";
document.getElementById("moomooio_728x90_home").remove();
    document.getElementById("pre-content-container").remove();

//rewrite more by EnDeRYuuki
var i,x;
var menumsc = false;
var randomi = 0;
document.addEventListener("keydown", (e)=>{
    if (e.keyCode == 113) {
        e.preventDefault();
        if (!menumsc){
        document.getElementById("menu_music_enderyuuki").style.display = "block";
            menumsc = true;
        } else {
        document.getElementById("menu_music_enderyuuki").style.display = "none";
        menumsc = false;
        }
    }
}, false);
    var divmusic = document.createElement("div");
    divmusic.id = "menu_music_enderyuuki";
    divmusic.style = "text-align:center; position:absolute; z-index:99999999; width:50%; height:auto; left:25%; top:10%; background-color:#333333; color:red; display:none; border-style:solid; border-radius:10px;";
    divmusic.innerHTML = `
    <b>Lofi Music by EnderYuuki - She's from VietNam =D</b><br />
    <span style="color:white; font-size:18px; font-family:Arial; margin:5px;" id="music1">Chẳng thể tìm được em!</span> <br />
    <span style="color:white; font-size:18px; font-family:Arial; margin:5px;" id="music2">Nàng thơ :333</span> <br />
    <span style="color:white; font-size:18px; font-family:Arial; margin:5px;" id="music3">Hẹn yêu Moe =D</span> <br />
    <span style="color:white; font-size:18px; font-family:Arial; margin:5px;" id="music4">Anh mất em :< </span> <br />
    <span style="color:white; font-size:18px; font-family:Arial; margin:5px;" id="music5">Chuyện rằng ~~</span> <br />
    <span style="color:white; font-size:18px; font-family:Arial; margin:5px;" id="music6">Chỉ muốn bên em lúc này ~3~</span> <br />
    `;
    document.body.appendChild(divmusic);
    setInterval(()=>{
        if (menumsc){
            switch (randomi) {
                case 0:
                    document.getElementById("menu_music_enderyuuki").style.color = "red"
                    randomi++;
                    break;
                case 1:
                    document.getElementById("menu_music_enderyuuki").style.color = "green";
                    randomi++;
                    break;
            }
            if (randomi == 2) {randomi = 0;}
        }
    }, 200);
    //event for this menu
        document.getElementById("music1").onclick = ()=>{
    nangtho.pause();
    henyeu.pause();
    anhmatem.pause();
    chuyenrang.pause();
    chimuonbenemlucnay.pause();
        changthetimduocem.currentTime = 0;
        changthetimduocem.play();
    };
    document.getElementById("music1").onmousemove = ()=>{
        document.getElementById("music1").style.color = "red";
    };
    document.getElementById("music1").onmouseout = ()=>{
        document.getElementById("music1").style.color = "white";
    };


            document.getElementById("music2").onclick = ()=>{
    changthetimduocem.pause();
    henyeu.pause();
    anhmatem.pause();
    chuyenrang.pause();
    chimuonbenemlucnay.pause();
        nangtho.currentTime = 0;
        nangtho.play();
    };
    document.getElementById("music2").onmousemove = ()=>{
        document.getElementById("music2").style.color = "red";
    };
    document.getElementById("music2").onmouseout = ()=>{
        document.getElementById("music2").style.color = "white";
    };


    document.getElementById("music3").onclick = ()=>{
    changthetimduocem.pause();
    nangtho.pause();
    anhmatem.pause();
    chuyenrang.pause();
    chimuonbenemlucnay.pause();
        henyeu.currentTime = 0;
        henyeu.play();
    };
    document.getElementById("music3").onmousemove = ()=>{
        document.getElementById("music3").style.color = "red";
    };
    document.getElementById("music3").onmouseout = ()=>{
        document.getElementById("music3").style.color = "white";
    };


    document.getElementById("music4").onclick = ()=>{
    changthetimduocem.pause();
    nangtho.pause();
    henyeu.pause();
    chuyenrang.pause();
    chimuonbenemlucnay.pause();
        anhmatem.currentTime = 0;
        anhmatem.play();
    };
    document.getElementById("music4").onmousemove = ()=>{
        document.getElementById("music4").style.color = "red";
    };
    document.getElementById("music4").onmouseout = ()=>{
        document.getElementById("music4").style.color = "white";
    };


    document.getElementById("music5").onclick = ()=>{
    changthetimduocem.pause();
    nangtho.pause();
    henyeu.pause();
    anhmatem.pause();
    chimuonbenemlucnay.pause();
        chuyenrang.currentTime = 0;
        chuyenrang.play();
    };
    document.getElementById("music5").onmousemove = ()=>{
        document.getElementById("music5").style.color = "red";
    };
    document.getElementById("music5").onmouseout = ()=>{
        document.getElementById("music5").style.color = "white";
    };
document.getElementById("music6").onclick = ()=>{
    changthetimduocem.pause();
    nangtho.pause();
    henyeu.pause();
    anhmatem.pause();
    chuyenrang.pause();
        chimuonbenemlucnay.currentTime = 0;
        chimuonbenemlucnay.play();
    };
    document.getElementById("music6").onmousemove = ()=>{
        document.getElementById("music6").style.color = "red";
    };
    document.getElementById("music6").onmouseout = ()=>{
        document.getElementById("music6").style.color = "white";
    };
var changthetimduocem = new Audio("https://cdn.discordapp.com/attachments/745662811828387960/830032343610687538/y2mate.com_-_Chang_The_Tim_uoc_Em_PhucXp_ft_Freak_D_Audio_Official.mp3");
var nangtho = new Audio("https://cdn.discordapp.com/attachments/745662811828387960/830032684277301248/y2mate.com_-_Nang_Tho_Lofi_Ver_Hoang_Dung_x_Freak_D.mp3");
var henyeu = new Audio("https://cdn.discordapp.com/attachments/745662811828387960/830032711497941053/y2mate.com_-_Hen_Yeu_Lofi_Ver_Duy_Zuno_x_CaoTri_Nhac_Lofi_Chill_2020.mp3");
var anhmatem = new Audio("https://cdn.discordapp.com/attachments/745662811828387960/830032733350133771/y2mate.com_-_anh_Mat_Em_Lofi_Ver_Quang_ang_Tran_x_Freak_D.mp3");
var chuyenrang = new Audio("https://cdn.discordapp.com/attachments/745662811828387960/830032754766250014/y2mate.com_-_Chuyen_Rang_Lofi_Ver_Thinh_Suy_x_Freak_D.mp3");
var chimuonbenemlucnay = new Audio("https://cdn.discordapp.com/attachments/745662811828387960/830462081747910656/y2mate.com_-_Chi_Muon_Ben_Em_Luc_Nay_Freak_D_Lofi_Ver_Jiki_X_ft_Huy_Vac.mp3");
//add by EnderYuuki, best friend is EnderThreePro!
