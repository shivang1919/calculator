const text = document.querySelector('.text_mid');
const strtext = text.textContent;
const splitText = strtext.split("");
text.textContent = "";
for(let i=0;i<splitText.length;i++){
    text.innerHTML += "<span>"+ splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(ontick, 50);
function ontick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer = null;
}
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (event)=>{
        if(event.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(event.target.innerHTML == 'clear'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(event.target);
            string = string + event.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})
