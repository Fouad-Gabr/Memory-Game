let imgs = [
            'z images/1.jpg',
            'z images/2.jpg',
            'z images/3.png',
            'z images/5.jpg',
            'z images/6.png',
            'z images/7.png',
            'z images/8.jpg',
            'z images/9.png',
            'z images/12.jpg',
            'z images/13.jpg',];


let score = 0;

let main = document.getElementById('main');
let allDivs = document.getElementsByTagName('div');

let rightChoise = new Audio('z images/10.mp3');
let falseChoise = new Audio('z images/11.mp3');

function doubleimgs(){
    for (let i=0; i<imgs.length; i++) {

        main.innerHTML += '<div><img src="'+imgs[i]+'"></div>';
    }

}           
doubleimgs();
doubleimgs();

var flg = true;
var arr = [];

for (let j=0; j<allDivs.length; j++){
    allDivs[j].addEventListener('click', function(){
        if(flg){
            if(this.firstChild.style.opacity == 0){
                this.firstChild.style.opacity = '1';
                if(arr.length == 0){
                    arr[0] = this;
                }else if(arr.length == 1){
                    arr[1] = this;
                } 
                
                if(arr.length == 2){
                    flg = false;

                    setTimeout(check, 500);
                }
                
            }    
        }else{
            return;
        }
    })
    
    function check(){
        if(arr[0].firstChild.getAttribute('src') == arr[1].firstChild.getAttribute('src')){
            rightChoise.play();
            
            score++ ;
            show_score();
            if(score === 10){
                GameOver();
            }
            
        }else{
            arr[0].firstChild.style.opacity = 0;
            arr[1].firstChild.style.opacity = 0;
            falseChoise.play();
        }
        arr = [];
        flg = true;
        
    }
}

function GameOver(){
    setTimeout(() => {
        let win = confirm("YOU WIN Congratulations!!");
        if(win === true){
            location.reload();
        }

    }, 1000)
}

function show_score(){
    document.getElementById('real_score').innerHTML = score;
    
}