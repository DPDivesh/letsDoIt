

//create event listeners for other default buttons

import {defaultNotifications} from "./defaultButtons";

export function defaultButtonListerner(newButtonDiv,pageName){
newButtonDiv.addEventListener('click',()=>{
  console.log(newButtonDiv);


})



}



//projects up down arrow
export function projectsExpandListerner(elementClicked){
  elementClicked.addEventListener('click',()=>{
    //change state of content
    //add animation
    console.log('Expand');
  })

}
//projects Add Button
export function projectsAddListerner(elementClicked){
  elementClicked.addEventListener('click',()=>{
    //create submit additional projects mini form 
    console.log('Add');
    let createSubmitComponent = document.createElement('div');
    createSubmitComponent.className = 'projectAdd';
    let createBackgroundComponent = document.createElement('div');
    createBackgroundComponent.style.width='52.2vw'
    createBackgroundComponent.style.backgroundColor="#560BAD";
    let createSecondLayer = document.createElement('div');
    createBackgroundComponent.style.backgroundColor="#FFFFF";
    let contentDocuement = document.getElementById(content)
    contentDocuement.appendChild(createSubmitComponent);
    createSubmitComponent.appendChild(createBackgroundComponent);

  })

}