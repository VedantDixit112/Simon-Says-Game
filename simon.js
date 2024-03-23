let game=[];
let user=[];
let btns=["first","second","third","four"];
let started=false;
let level=0;
let  max=0;
let head=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        head.innerText="game starts press any key";
        started=true;
        levelup();
    }
});
function levelup(){
    user=[];
    level++;
    head.innerText=`level ${level}`;
    let rindex=Math.floor(Math.random()*3);
    let rcolor=btns[rindex];
    let rbutton=document.querySelector(`.${rcolor}`);
    game.push(rcolor);
    Btnflash(rbutton);
}
function Btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}
function btnpress(){
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    user.push(usercolor);
    checkans(user.length-1);
}
let but=document.querySelectorAll(".btn");
for(l of but){
    l.addEventListener("click",btnpress);
}
function checkans(idx){
    if(user[idx]==game[idx]){
        if(user.length==game.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        max=Math.max(max,level);
        head.innerHTML=`Game Over !! your score was <b>${level}</b> press any key to start  the game <br>
        <br>
        <br>
          MAX SCORE = ${max} `;
        let body= document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="black";
        },160);
        reset();
    }
}
function reset(){
    started=false;
    user=[];
    game=[];
    level=0;
}
