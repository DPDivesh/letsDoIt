import { mainContentErase } from './addedButtons.js';
import { defaultButtonPageBuilders } from './defaultButtons.js';
import { defaultButtonTaskView, mainContentBuilder } from './mainContentBuilder.js';
import {
  createProject
} from './projectCreate.js';

// import { doc, setDoc } from firebase.firestore; 

//create event listeners for other default buttons
const db = firebase.firestore();
const auth = firebase.auth();

export function defaultButtonListener(newButtonDiv) {
  newButtonDiv.addEventListener('click', (e) => {
    document.title =e.target.textContent;

    mainContentErase();
    mainContentBuilder();
   defaultButtonTaskView(e.target.textContent);
   switch (e.target.textContent) {
     case "Notifications":
       defaultButtonPageBuilders.notificationPage();
       break;
     case "This Week":
      defaultButtonPageBuilders.thisWeekPage();

       break;
       case "This Month":
        defaultButtonPageBuilders.thisMonthPage();

       break;
       case "Completed":
        defaultButtonPageBuilders.completedTasks();
        break;
       
     default:
       break;
   }
  })



}



//projects up down arrow
export function projectsExpandListerner(elementClicked) {
  elementClicked.addEventListener('click', () => {
    //change state of content
    //add animation
  })

}
//projects Add Button
export function projectsAddListerner(elementClicked) {
  elementClicked.addEventListener('click', () => {
    //create submit additional projects mini form
    if (document.querySelector('.project-add') == null && document.querySelector('.task-add') == null) {
      let createSubmitComponent = document.createElement('div');
      createSubmitComponent.className = 'project-add';
      let createBackgroundComponent = document.createElement('div');
      createBackgroundComponent.className = 'project-add__innerLayer';
      let submitButton = document.createElement('input');
      submitButton.type = 'submit';
      submitButton.className = 'submit-project';
      let cancelButton = document.createElement('div');
      cancelButton.className = 'cancel-submit';
      cancelButton.innerHTML = 'Cancel'
      let inputFormContainer = document.createElement('form');
      let createInputForm = document.createElement('input');
      let formLabel = document.createElement('label');
      inputFormContainer.className = 'form-container';
      formLabel.className = 'form-group';
      formLabel.setAttribute('for', 'createNewProject');
      formLabel.innerHTML = 'Submit a New Project';
      createInputForm.name = 'createNewProject'
      createInputForm.className = 'input-projects';
      createInputForm.type = 'text';
      createInputForm.required = true;
      createInputForm.pattern = '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$';
      createInputForm.id = 'projectName'

      createInputForm.placeholder = 'Project Title';
      createBackgroundComponent.style.backgroundColor = "#FFFFF";
      let contentDocuement = document.querySelector('.mainContentContainer');
      createBackgroundComponent.appendChild(inputFormContainer);
      inputFormContainer.appendChild(formLabel)
      inputFormContainer.appendChild(document.createElement('br'))
      contentDocuement.appendChild(createSubmitComponent);
      inputFormContainer.appendChild(createInputForm);
      createSubmitComponent.appendChild(createBackgroundComponent);
      let buttonContainer = document.createElement('div');
      buttonContainer.className = 'project-button-holder'
      buttonContainer.append(submitButton);
      buttonContainer.append(cancelButton);
      inputFormContainer.append(buttonContainer);
      //create event listener for form to send to factory function
      //submit event listener
      inputFormContainer.addEventListener('submit', (e) => {

        e.preventDefault();

        let projectName = document.getElementById('projectName').value;
        projectName = projectName.toLowerCase();
        const titleCase = projectName.split(" ");

        for (let i = 0; i < titleCase.length; i++) {

          titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1);

        }


        projectName = titleCase.join(" ");

        let Projects = createProject(projectName);
        // Projects.collection('sdasds').doc('message');
        //  Projects.readTasks()

        let projectsRef;
        auth.onAuthStateChanged(user => {
          if (user) {
            projectsRef = db.collection('users')
            const {
              serverTimestamp
            } = firebase.firestore.FieldValue;
            projectsRef.get().then(()=>{
              projectsRef.doc(user.uid).collection("projects").add({
                project: Projects
              })
              .then((docRef) => {
                db.collection('users').doc(user.uid).collection("projects").doc(docRef.id).update({id:docRef.id});
              });
  

            })
           
          } else {

          }

        });

        exitForm();
      })
      //cancel event listener 
      cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        exitForm();
      })

    }
  })

}

function exitForm() {
  let formToExit = document.querySelector('.project-add');
  formToExit.remove();
};