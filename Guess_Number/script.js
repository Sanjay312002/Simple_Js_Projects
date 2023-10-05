/*document.querySelector('.guess').value=15;
console.log(document.querySelector('.guess').value);*/
let secretNumber=Math.trunc(Math.random() * 20)+1;
let score=20;
let highscore=0;
document.querySelector('.check').addEventListener  //using class of check button
('click',function()
    {
        const guess=Number(document.querySelector('.guess').value);   //guess is a class of number box
        console.log( guess ,typeof guess);             // in js take input any type and then covert into string type of data
                                                        //but in this project we compare two number so use Number function for convert into string into number 
        if(!guess)     //in this if stmtnt if we are no values put in the box then click it will be respond some message
        {
            document.querySelector('.messageguess').textContent='No Number'; //textcontent used for change the existing value in html element during ruuning time
        }                           //in this guess class will be start guessing element
        else if(guess==secretNumber)
        {
            document.querySelector('.messageguess').textContent='correct Number';
            document.querySelector('.Number').textContent=secretNumber;
            document.querySelector('body').style.backgroundColor='green';
            document.querySelector('.number').style.width='30rem';
            if(score > highscore)
            {
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }
        
        }
        else if(guess>secretNumber)
        {
            if(score>1)
            {document.querySelector('.messageguess').textContent='Too High';
            score--;                                                //if the guessing value is high the score will be decreased initially
            document.querySelector('.score').textContent=score;}     //the score is 20 it will decrease each and every wrong value   
            else{
                document.querySelector('.messageguess').textContent='You Lost The Game';
                document.querySelector('.score').textContent='0';
            }
        }
        else if(guess<secretNumber)
        {
            if(score>1)
            {
                document.querySelector('.messageguess').textContent='Too Low';
            score--;                                                       //if the guessing value is low the score will be decreased initially
            document.querySelector('.score').textContent=score;             //the score is 20 it will decrease each and every wrong value
        }
        else{
            document.querySelector('.messageguess').textContent='You Lost The Game';
            document.querySelector('.score').textContent='0';
        }
        
        }
    });                                         
document.querySelector('.again').addEventListener
('click',function()
    {
        score =20;
        secretNumber = Math.trunc(Math.random() * 20) + 1
        document.querySelector('.messageguess').textContent='start guessing';
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value='';
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='15rem';
    }
);
