
import {createProject} from './projectCreate.js';
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
    let submitButton = document.createElement('input');
    submitButton.type ='submit';
    submitButton.className='submit-project';
    let cancelButton = document.createElement('div');
    cancelButton.className='cancel-submit';
    cancelButton.innerHTML='Cancel'
    let inputFormContainer = document.createElement('form');
    let createInputForm = document.createElement('input');
    let formLabel = document.createElement('label');
    inputFormContainer.className='form-container';
    formLabel.className = 'form-group';
    formLabel.setAttribute('for','createNewProject');
    formLabel.innerHTML='Submit a New Project';
    createInputForm.name='createNewProject'
    createInputForm.className = 'input-projects';
    createInputForm.type='text';
    createInputForm.required=true;
    createInputForm.pattern="^[a-zA-Z]{3,10}+$";
    createInputForm.id = 'projectName'

    createInputForm.placeholder='Project Title';
    createBackgroundComponent.style.backgroundColor="#FFFFF";
    let contentDocuement = document.querySelector('.mainContentContainer');
    createBackgroundComponent.appendChild(inputFormContainer);
    inputFormContainer.appendChild(formLabel)
    inputFormContainer.appendChild(document.createElement('br'))
    contentDocuement.appendChild(createSubmitComponent);
    inputFormContainer.appendChild(createInputForm);
    createSubmitComponent.appendChild(createBackgroundComponent);
    let buttonContainer = document.createElement('div');
    buttonContainer.className='project-button-holder'
    buttonContainer.append(submitButton);
    buttonContainer.append(cancelButton);
    inputFormContainer.append(buttonContainer);
    //create event listener for form to send to factory function
    //submit event listener
    inputFormContainer.addEventListener('submit',(e)=>{

      e.preventDefault();

      let projectName = document.getElementById('projectName').value;
      projectName = projectName.toLowerCase();
      console.log(projectName);
     const titleCase =  projectName.split(" ");
    //  console.log(titleCase[0].charAt(0).toUpperCase(),"test");
    // console.log(titleCase,"???");
     for(let i=0; i<titleCase.length;i++){

       titleCase[i]=titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1);

          }     
          
          
    projectName= titleCase.join(" ");
       
     let Projects = createProject(projectName);
     console.log('------') 
     Projects.readTasks()
     console.log(Projects, Projects.name);
      console.log('------')
      exitForm();
      // console.log('hidasdas',document.getElementById('projectName').value)
    })
    //cancel event listener 
    cancelButton.addEventListener('click',(e)=>{
      e.preventDefault();
     exitForm();
    })

}
  })

}

function exitForm(){
  let formToExit = document.querySelector('.project-add');
  formToExit.remove();
};


