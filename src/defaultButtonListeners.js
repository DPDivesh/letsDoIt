

//create event listeners for other default buttons

import {defaultNotifications} from "./defaultButtons";

export function defaultButtonListerner(newButtonDiv,pageName){
newButtonDiv.addEventListener('click',()=>{
  console.log(newButtonDiv);


})



}



//projects up down arrow
export function projectsListerner(divContainer,elementClicked){
  divContainer.addEventListener('click',()=>{
    //change state of content
    //add animation
    console.log('test');
  })

}
