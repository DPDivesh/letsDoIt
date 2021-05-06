

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
    if(document.querySelector('.project-add')==null ){
    console.log('Add');
    let createSubmitComponent = document.createElement('div');
    createSubmitComponent.className = 'project-add';
    let createBackgroundComponent = document.createElement('div');
    createBackgroundComponent.className = 'project-add__innerLayer';
    let createSecondLayer = document.createElement('div');
    let inputFormContainer = document.createElement('form');
    let createInputForm = document.createElement('input');
    let formLabel = document.createElement('label');
    inputFormContainer.className='form-container';
    formLabel.className = 'form-group';
    formLabel.setAttribute('for','createNewProject')
    formLabel.innerHTML='Create New Project';
    createInputForm.name='createNewProject'
    createInputForm.className = 'input-projects';
    createInputForm.placeholder='Project Title';

    createBackgroundComponent.style.backgroundColor="#FFFFF";
    let contentDocuement = document.querySelector('.mainContentContainer'
    )
    createBackgroundComponent.appendChild(inputFormContainer);
    inputFormContainer.appendChild(formLabel)
    contentDocuement.appendChild(createSubmitComponent);
    inputFormContainer.appendChild(createInputForm);
    createSubmitComponent.appendChild(createBackgroundComponent);
}
  })

}
