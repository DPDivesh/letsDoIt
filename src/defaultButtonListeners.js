

//create event listeners for other default buttons



export function defaultButtonListerner(newButtonDiv,defaultButtons){
  
newButtonDiv.addEventListener('click',(e)=>{
  console.log(defaultButtons.length,'huh');

  for (let i=0; i<defaultButtons.length; i++){

    if( defaultButtons[i].id==newButtonDiv.id){
      console.log(defaultButtons[i].name,'I matched');
      defaultButtons[i].makePage();
    }
  }

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
    createBackgroundComponent.style.width='10.2vw'
    createBackgroundComponent.style.height='10.2vw'

    createBackgroundComponent.style.backgroundColor="#560BAD";
    let createSecondLayer = document.createElement('div');
    createBackgroundComponent.style.backgroundColor="#FFFFF";
    let contentDocuement = document.querySelector('.mainContentContainer'
    )
    contentDocuement.appendChild(createSecondLayer)

    contentDocuement.appendChild(createSubmitComponent);
    createSubmitComponent.appendChild(createBackgroundComponent);

  })

}


