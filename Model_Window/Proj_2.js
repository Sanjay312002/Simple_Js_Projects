'use strict'
/* in this code we use class class use panni ellam pannirukon*/
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal');  //if using queryselectorAll it select the all class in the name of show-model 
console.log(btnsOpenModal);
const openModel=function()
{

    modal.classList.remove('hidden'); // dot(.) is only for selectors
    overlay.classList.remove('hidden');// overlaying the existing class
};
const closeModal=function()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
for(let i=0;i<btnsOpenModal.length;i++)
btnsOpenModal[i].addEventListener('click',openModel);//call the open model function 
 btnCloseModal.addEventListener('click',closeModal);//it used close the box using click x button
overlay.addEventListener('click',closeModal);//it is describe if you click out of the box the it will be close
document.addEventListener('keydown',function(e){//if we using any character in the element
  //  console.log(e.key);                         /* if we press any key the js will generated the object*/
    if(e.key==='Escape' && !modal.classList.contains('hidden'))
    {
        
        
            closeModal();
    }
});