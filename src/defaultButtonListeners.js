
//create event listeners for other default buttons


export function defaultButtonListerner(newButtonDiv,defaultButtons){
newButtonDiv.addEventListener('click',(e)=>{
  for (let i=0; i<defaultButtons.length; i++){
    defaultButtons[i].name;

    if( defaultButtons[i].id==newButtonDiv.id){
      console.log(defaultButtons[i].name,'I matched');
      console.log(defaultButtons[i])
      defaultButtons[i].makeNotifPage();
    }
  }

})



}






//projects up down arrow
export function projectsListerner(divContainer,elementClicked){
  divContainer.addEventListener('click',()=>{
    //change state of content 
    //add animation 
    console.log('test');
  })
  divContainer.appendChild(elementClicked)

}