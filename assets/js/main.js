let input = document.querySelector("#number");
let sendBtn = document.querySelector("#send");

let code = Math.random().toFixed(4).slice(2,6);
alert(code)
sendBtn.addEventListener("click",()=>{
    if(code == input.value){
        document.querySelector("body").innerHTML = '<h1>SUCCESS</h1><h5 onclick="reload()">RELOAD</h5>';

    }else{
        alert(`"Yanlış kod:" ${input.value}`)
        document.querySelector("body").innerHTML = '<h2>WRONG</h2><h5 onclick="reload()">RELOAD</h5>';
    }
});
function reload (){
    addEventListener("click",()=>{
        location.reload();
    })
}
let minute = 2;
let secound = 59;
let interval = setInterval(()=>{
    if(secound === 0){
        minute--;
        secound = 59;
    }else {
        secound --;
        document.querySelector("#reset").disabled = true;
        if(minute == 0 && secound == 0){
            clearInterval(interval);
            document.querySelector("#reset").disabled = false;
            document.querySelector("#reset").addEventListener("click",()=>{
                location.reload();
            })
        }
    }
    document.querySelector("span").innerHTML = `0${minute} : ${secound}`
},1000);




