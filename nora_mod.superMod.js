// ==UserScript==
// @name       ʚ๖ۣۜNσɾα ๖ۣۜBeta
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
var obj_1 = document.createElement("div");
obj_1.id = "arrow_1";
obj_1.style = "position:absolute; display:none; width:auto; height:auto; color:red; font-size: 20px;";
obj_1.innerText = "Địch";
var obj_2 = document.createElement("div");
obj_2.id = "arrow_2";
obj_2.style = "position:absolute; display:none; width:auto; height:auto; color:red; font-size: 20px;";
obj_2.innerText = "Địch";
document.body.appendChild(obj_1);
document.body.appendChild(obj_2);

setInterval(()=>{
    if (myPlayer.x > enemyX) {
document.getElementById("arrow_1").style.display = "block";
        document.getElementById("arrow_1").style.left = "5%";
                document.getElementById("arrow_1").style.top = "50%";
        document.getElementById("arrow_1").style.right = "auto";
    } else if (myPlayer.x < enemyX) {
        document.getElementById("arrow_1").style.display = "block";
        document.getElementById("arrow_1").style.left = "auto";
                document.getElementById("arrow_1").style.top = "50%";
        document.getElementById("arrow_1").style.right = "5%";
    }

    if (myPlayer.y > enemyY) {
document.getElementById("arrow_2").style.display = "block";
        document.getElementById("arrow_2").style.top = "5%";
        document.getElementById("arrow_2").style.left = "50%";
        document.getElementById("arrow_2").style.bottom = "auto";
    } else if (myPlayer.y < enemyY) {
        document.getElementById("arrow_2").style.display = "block";
        document.getElementById("arrow_2").style.top = "auto";
        document.getElementById("arrow_2").style.left = "50%";
        document.getElementById("arrow_2").style.bottom = "25%";
    }
},0);

setInterval(()=>{
    enemyX = undefined;
    enemyY = undefined;
    document.getElementById("arrow_1").style.display = "none";
    document.getElementById("arrow_2").style.display = "none";

},5000);

var xx,yy;
let buildSpike;
let crash_auto;
var cr = false;
var rcl = 0;
var soldier_insta = false;
var emp_insta = false;
var web = false;
var instaChat = '';
var xy_player = document.createElement("div");
xy_player.style = "position:absolute; left:0; top:0; background-color:green; width:auto; height:auto;";
xy_player.id = "xyPlayer";
document.body.appendChild(xy_player);
setInterval(()=>{
    document.getElementById("xyPlayer").innerText = "X: " + myPlayer.x + ", Y: " + myPlayer.y;
},0);

var xy_enemy = document.createElement("div");
xy_enemy.style = "position:absolute; left:0; top:2%; background-color:red; width:auto; height:auto;";
xy_enemy.id = "xyEnemy";
document.body.appendChild(xy_enemy);
setInterval(()=>{
    document.getElementById("xyEnemy").innerText = "X: " + enemyX + ", Y: " + enemyY;
    if (enemyX !== xx | enemyY !== yy) {
        document.getElementById("leaderboard").style = "color:red;"
        document.getElementById("foodDisplay").style = "color:red;"
        document.getElementById("woodDisplay").style = "color:red;"
        document.getElementById("stoneDisplay").style = "color:red;"
        document.getElementById("scoreDisplay").style = "color:red;"
    } else {
        document.getElementById("leaderboard").style = "color:white;"
                document.getElementById("foodDisplay").style = "color:white;"
        document.getElementById("woodDisplay").style = "color:white;"
        document.getElementById("stoneDisplay").style = "color:white;"
        document.getElementById("scoreDisplay").style = "color:white;"
    }
xx = enemyX;
    yy = enemyY;
},0);
function crash() {
                    for (let i=0;i<4;i++){
            let angle = myPlayer.dir + toRad(i * 90);
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
            place(millType, angle)
        }
}
var mouseE = false;
document.addEventListener("mousedown", (e)=>{
    if (e.which == 1 && mouseE == true) {
doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, 18, 1]]);

    }
    if (e.which == 2) {
        buildSpike = setInterval(()=>{
        place(spikeType);
        },0);
    }
    if (e.which == 3) {
        hat(40);
        acc(19);
    }
}, false);
document.addEventListener("mouseup", (e)=>{
        if (e.which == 1 && mouseE == true) {
if (myPlayer.y < 2400){
                    hat(15);
                } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                    hat(31);
                } else {
                    hat(12);
                }
                acc(11);

    }
    if (e.which == 3) {
        if (rcl == 0) {
        if (myPlayer.y < 2400){
                    hat(15);
                } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                    hat(31);
                } else {
                    hat(12);
                }
                acc(11);
        }
        if (rcl == 1) {
            hat(22);
                doNewSend(["13c", [0, 0, 1]]);
                doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["ch",['Tank Gear + Emp Helmet']]);
        }
    }
    if (e.which == 2) {
        clearInterval(buildSpike);
    }
}, false);

let mouseX;
let mouseY;
let enemyX;
let enemyY;
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

let healSpeed = 130;
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
                enemyX = playerInfo[1];
                enemyY = playerInfo[2];
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
if (data[2] < 100) {
    if (rcl == 1) {
    doNewSend(["13c", [0, 22, 0]]);
    }
    if (rcl == 0) {
        doNewSend(["13c", [0, 6, 0]]);
    }
    setTimeout(()=>{
        place(foodType, null);
        place(foodType, null);
        place(foodType, null);
        place(foodType, null);
    }, healSpeed -30);
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
const millPlacer = repeater(78, () => {place(millType)}, 0);
const boostPlacer = repeater(97, () => {place(boostType)}, 0);
const spikePlacer = repeater(86, () => {place(spikeType)}, 0);
const turretPlacer = repeater(72, () => {place(turretType)}, 0);
var diem = false;
document.addEventListener('keydown', (e)=>{
    spikePlacer.start(e.keyCode);
    healer1.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);
    millPlacer.start(e.keyCode);
    if (e.keyCode == 13 && diem == false) {
        diem = true;
    } else {
        if (e.keyCode == 13 && diem == true) {
            diem = false;
        }
    }
    if (e.keyCode == 96 && diem == false) {
        doNewSend(["ch",[instaChat]]);
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
            if (soldier_insta == true) {
                hat(6);
            }
            if (emp_insta == true) {
                hat(22);
            }
            if (soldier_insta == false && emp_insta == false) {
                                if (myPlayer.y < 2400){
                    hat(15);
                } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                    hat(31);
                } else {
                    hat(12);
                }
            }
            setTimeout (()=>{
                acc(11);
                doNewSend(["5", [secondary, true]]);
                setTimeout(()=>{
                    doNewSend(["5", [primary, true]]);
                },1700);
            },550);
            autoaim = null;
        }, instaSpeed);
    }
    if (e.keyCode == 36 && diem == false) {
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
    }
    if (e.keyCode == 35 && cr == false) {
        crash_auto = setInterval(()=>{
                 crash();
        }, 0);
        cr = true;
    } else {
        if (e.keyCode == 35 && cr == true) {
            clearInterval(crash_auto);
            cr = false;
        }
    }
    if (e.keyCode == 103) {
        autoaim = true
        doNewSend(["5", [secondary, true]]);
        doNewSend(["c", [1]]);
        setTimeout(() => {
            doNewSend(["6", [12]]);
            doNewSend(["5", [secondary, true]]);
            doNewSend(["c", [1]]);
            setTimeout(() => {
                doNewSend(["6", [15]]);
                doNewSend(["5", [secondary, true]]);
                doNewSend(["c", [1]]);
                setTimeout(() => {
                    hat(53)
                    setTimeout(() => {
                        doNewSend(["5", [primary, true]]);
                        setTimeout(() => {
                            hat(0)
                            if (myPlayer.y < 2400) {
                                hat(15);
                            } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
                                hat(31);
                            } else {
                                hat(12);
                            }
                            acc(11);
                        }, 100);
                    }, 80);
                }, 80);
            }, 80);
        }, 80);
        autoaim = false
    }
            if (e.keyCode == 27 && web == false) {
        e.preventDefault();
       document.getElementById("mp3").style.display = "block";
        web = true;
    } else {
        if (e.keyCode == 27 && web == true) {
            e.preventDefault();
            document.getElementById("mp3").style.display = "none";
        web = false;
        }
    }
})

document.addEventListener('keyup', (e)=>{
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer1.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
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

//Giao Diện
var o_trong_thanh_pho = new Audio("https://cdn.discordapp.com/attachments/745662811828387960/747463078060228769/y2mate.com_-_O_Trong_Thanh_Pho_-_B_Ray_x_Masew_Ft._Hannah_B__XclpWJEeA2w.mp3");
var cao_oc = new Audio("https://cdn.discordapp.com/attachments/745662811828387960/750364872289812500/y2mate.com_-_Cao_Oc_20_B_Ray_x_DatG__Masew_Mix___YuVs1ihPjo.mp3");
var khoi = new Audio("https://cdn.discordapp.com/attachments/745662811828387960/750367290519846992/y2mate.com_-_Khoi_-_Thang_7_Cua_Anh_Masew_Mix_3dH2PFB7PJg.mp3");
var nhac = false;

var menu = document.createElement("div");
menu.id = "menu-party";
menu.innerHTML = `
<span> Version 1.0</span><br /><br />
<span>Xin chào! :> Hack này Việt Nam làm nhá :))</span><br />
<input id="speed-insta" type="text" placeHolder="Insta Speed here..." value="235" onclick="this.select();"/>&nbsp;<span>Insta Speed</span><br />
<input id="speed-heal" type="text" placeHolder="Heal Speed here..." value="130" onclick="this.select();"/>&nbsp;<span>Heal Speed</span><br />
<input id="chatInsta" type="text" placeHolder="InstaChat Here" onclick="this.select();"/>&nbsp;<span>--insta chat</span><br />
<p>-----------------------------------------------------------------------</p>
<input id="music" type="checkBox" />&nbsp;<span>Music</span>
<p>-----------------------------------------------------------------------</p>
<input id="emp" type="checkBox" />&nbsp;<span>Tank Gear + Emp Helmet (right Click)</span><br />
<input id="emp_insta" type="checkBox" />&nbsp;<span>Emp Helmet Insta</span><br />
<input id="soldier_insta" type="checkBox" />&nbsp;<span>Soldier Insta</span><br />
<input id="clickToBull" type="checkBox" />&nbsp;<span>Left Click To BullHelmet + BloodWings</span><br />
<span style="color:white;">@made by: azlmsxkn #8685</span>
`;
document.body.appendChild(menu);
document.getElementById("chatInsta").onkeyup = ()=>{
    var check = document.getElementById("chatInsta").value;
    instaChat = check;
};
document.getElementById("clickToBull").onclick = ()=>{
    var check = document.getElementById("clickToBull");
    if (check.checked == true) {
        mouseE = true;
    } else {
        mouseE = false;
    }
};
document.getElementById("emp_insta").onclick = ()=>{
    emp_insta = false;
    soldier_insta = false;
    document.getElementById("soldier_insta").checked = false;
    var check = document.getElementById("emp_insta");
    if (check.checked == true) {
        emp_insta = true;
    } else {
        emp_insta = false;
    }
};
document.getElementById("soldier_insta").onclick = ()=>{
    emp_insta = false;
    soldier_insta = false;
    document.getElementById("emp_insta").checked = false;
    var check = document.getElementById("soldier_insta");
    if (check.checked == true) {
        soldier_insta = true;
    } else {
        soldier_insta = false;
    }
};

document.getElementById("emp").onclick = ()=>{
    var check_a = document.getElementById("emp");
    if (check_a.checked == true) {
                   rcl = 1;
    } else {
        rcl = 0;
    }
};
document.getElementById("music").onclick = ()=>{
    var check = document.getElementById("music");
    if (check.checked == true) {
        setTimeout(()=>{
            nhac = true;
            o_trong_thanh_pho.play();
            setTimeout(()=>{
                cao_oc.play();
                setTimeout(()=>{
                      khoi.play();
                    setTimeout(()=>{
                        nhac = false;
                    },277000);
                },231000);
            },185000);
        },1000);
    } else {
        if (nhac == true) {
            document.getElementById("music").checked = true;
        }
    }
};
document.getElementById("speed-insta").onkeyup = ()=>{
    var speed_insta = document.getElementById("speed-insta").value;
    instaSpeed = parseInt(speed_insta);
};
document.getElementById("speed-heal").onkeyup = ()=>{
    var speed_heal = document.getElementById("speed-heal").value;
    healSpeed = parseInt(speed_heal);
};

setInterval(()=>{
    document.getElementById("pre-content-container").style.display = "none";
},0);
setTimeout(()=>{
    document.getElementById("gameName").innerText = "No";
    document.getElementById("gameName").style = "text-shadow:5px 10px 1px #ff00008a; color:red;";
    setTimeout(()=>{
        document.getElementById("gameName").innerText = "Nora";
        setTimeout(()=>{
            document.getElementById("gameName").innerText = "Nora Mod";
        },300);
    },300);
},1000);
document.getElementById("adCard").style.display = "none";
document.getElementById("promoImgHolder").style.display = "none";
document.getElementById("moomooio_728x90_home").remove();
document.getElementById("loadingText").innerHTML = "♦️ Loading ...♦️ Version 1.0♦️";

function haha() {
          setTimeout(()=>{
          document.getElementById("gameName").innerText = "♦️ora Mod";
          setTimeout(()=>{
              document.getElementById("gameName").innerText = "N♦️ra Mod";
              setTimeout(()=>{
                  document.getElementById("gameName").innerText = "No♦️a Mod";
                  setTimeout(()=>{
                      document.getElementById("gameName").innerText = "Nor♦️ Mod";
                      setTimeout(()=>{
                          document.getElementById("gameName").innerText = "Nora♦️Mod";
                          setTimeout(()=>{
                              document.getElementById("gameName").innerText = "Nora ♦️od";
                              setTimeout(()=>{
                                  document.getElementById("gameName").innerText = "Nora M♦️d";
                                  setTimeout(()=>{
                                      document.getElementById("gameName").innerText = "Nora Mo♦️";
                                  },200);
                              },200);
                          },200);
                      },200);
                  },200);
              },200);
          },200);
      },200);
}
setInterval(haha, 1800);

var mp3 = document.createElement("div");
mp3.id = "mp3";
mp3.innerHTML = `
<iframe src="https://www.nhaccuatui.com/" style="width:100%; height:100%;"></iframe>
`;
document.body.appendChild(mp3);

var styles = document.createElement("style");
styles.type = "text/css";
styles.innerHTML = `
#mainMenu {
background-image:url("https://cdn.discordapp.com/attachments/745662811828387960/750017511952613566/118394692_331530338089595_8284232869537882828_n.png");
background-repeat:none;
background-size: 100% 100%;
}
#guideCard, #setupCard {
background-color:#f000;
box-shadow:none;
}
.menuHeader {
color:red;
}
#nameInput {
border-style:solid;
border-color:red;
color:red;
background-color:#f000;
transition:1.5s;
}

#linksContainer2 {
display:none;
}
.menuCard {
box-shadow:none;
background-color:#f000;
}
#menu-party {
background-image:url("https://cdn.discordapp.com/attachments/745662811828387960/750344810493247568/71771183_1333893853458677_766234977493843968_n.png");
background-repeat:no-repeat;
background-size:100% 500px;
border-radius:5px;
overflow:hidden;
text-align:center;
width:40%;
height:2%;
left:30%;
top:0;
position:absolute;
background-color:#ffffff6b;
color:red;
z-index:100000;
transition:1s;
}
#menu-party:hover {
border-radius:5px;
overflow:hidden;
text-align:center;
width:40%;
height:50%;
left:30%;
top:0;
position:absolute;
background-color:white;
color:red;
z-index:100000;
}
.actionBarItem {
margin-top:2%;
}
#mp3 {
display:none;
z-index:10;
top:5%;
width:100%;
height:50%;
position:absolute;
background-color:red;
}

.menuButton {
background-color:red;
}
.menuButton:hover {
background-color:pink;
}

#gameCanvas {
cursor: url("http://cur.cursors-4u.net/cursors/cur-2/cur116.cur"),progress;
}

#storeButton, #allianceButton, #chatButton, .actionBarItem, #mapDisplay {
cursor: url("https://cur.cursors-4u.net/anime/ani-11/ani1030.cur"), auto !important;
}


`;
document.body.appendChild(styles);
var xd; xd = "https://cdn.discordapp.com/attachments/670777278699012136/724148849408606328/Ben_says_EZ_-_Sound_Effect_HD.mp3";

    var count2;

    var ezxdxdwa = new Audio(xd)

    var kills = 0;

    setInterval(getkills, 0);

    function getkills() {
        count2 = parseInt(document.getElementById("killCounter").innerText);
        if (count2 > kills) {
            ezxdxdwa.play();
            doNewSend(["ch", ["-;WutwyUDied~;-;-"]]);
        }
        kills = count2;
    }
