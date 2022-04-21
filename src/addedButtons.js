import {
  addedButtonTaskView, mainContentBuilder
} from "./mainContentBuilder";
import {
  priorityPick
} from "./mainContentBuilder";
import {
  updateTask,completeTask
} from './projectCreate'
import {
  addDays,
  format,
  parseISO
} from "date-fns";
import {
  querystring
} from "browserify/lib/builtins";
import { docID } from "./projectCreate";
import { tr } from "date-fns/locale";
const db = firebase.firestore();
const auth = firebase.auth();
let unsubscribe;
let projectsRef;

export function addedButtonEventListener() {
  let getButtons = document.querySelectorAll('.addedButtons');
  getButtons.forEach(button =>
    button.addEventListener('click', (e) => {
      // erase the main content
      console.log(e.currentTarget.querySelector('.projectTitle').id)
      document.title = e.target.textContent;
      const onClickID = e.currentTarget.querySelector('.projectTitle').id;


      mainContentErase();
      mainContentBuilder();
      //grab the names tasks and format them 
      //use generic format function (make one)
      //that function will be used to create more
      //send the info and query at the generic function 
      addedButtonTaskView(onClickID);
    },{capture:true}))

}

//adds the task to completed tasks (instead of moving to a new collection, make a completed identifier)
export function completedButtonEventListener() {
  let completedEventListener = document.querySelectorAll('.edit-icon');
  // let tasksRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects").doc(document.title).collection("tasks");



  completedEventListener.forEach(button =>
    button.addEventListener('click', (e) => {
      //unique identifier 
      let taskId = e.currentTarget.parentNode.parentNode.firstChild.querySelector('.added-tasks-text').getAttribute('data-id')
      let docId = e.currentTarget.parentNode.parentNode.parentNode.id
      projectsRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects").doc(docId).collection('tasks').doc(taskId);
      //create an interface to edit the task info, deadline, name


    }))
}

export function checkMarkEventListener() {
  let getCheckMark = document.querySelectorAll('.todo-checkbox');
  getCheckMark.forEach(checkBox=>
    checkBox.addEventListener('click',(e)=>{
      let docId = e.currentTarget.parentNode.parentNode.parentNode.id
      let taskId = e.currentTarget.parentNode.parentNode.firstChild.querySelector('.added-tasks-text').getAttribute('data-id');
      completeTask(taskId,docId,);

    }))
  }




export function editButtonEventListener() {
  let editEventListener = document.querySelectorAll('.edit-icon');
 


  editEventListener.forEach(button =>
    button.addEventListener('click', (e) => {
      //unique identifier 
      let docId = e.currentTarget.parentNode.parentNode.parentNode.id

      let taskId = e.currentTarget.parentNode.parentNode.firstChild.querySelector('.added-tasks-text').getAttribute('data-id');
      projectsRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects").doc(docId).collection('tasks').doc(taskId);
      projectsRef.get().then((doc) => {
        if (document.querySelector('.project-edit') == null && document.querySelector('.task-add') == null && document.querySelector('.project-add') == null) {
          let createSubmitComponent = document.createElement('div');
          createSubmitComponent.className = 'project-edit';
          let createBackgroundComponent = document.createElement('div');
          createBackgroundComponent.className = 'project-edit__innerLayer';
          let submitButton = document.createElement('input');
          submitButton.type = 'submit';
          submitButton.className = 'submit-task';
          let cancelButton = document.createElement('div');
          cancelButton.className = 'cancel-submit';
          cancelButton.innerHTML = 'Cancel'
          let inputFormContainer = document.createElement('form');
          let createInputFormTitle = document.createElement('input');
          let createInputFormDate = document.createElement('input');
          let createInputFormDatePickerLabel = document.createElement('label');
          let createInputFormPriorityDropDown = document.createElement('div');
          createInputFormPriorityDropDown.className = 'drop-down';
          createInputFormPriorityDropDown.id = 'drop-down';
          let createInputFormPriorityDropDownSpan = document.createElement('span');

          createInputFormPriorityDropDownSpan.id = 'drop-down-priority';

          let createInputFormPriority = document.createElement('div');
          createInputFormPriority.className = 'input-dropdown'
          let createInputFormPriorityText1 = document.createElement('p');
          let createInputFormPriorityText2 = document.createElement('p');
          let createInputFormPriorityText3 = document.createElement('p');
          createInputFormPriorityText1.innerHTML = 'Priority 1';
          createInputFormPriorityText1.setAttribute('data-priority', 1);
          createInputFormPriorityText2.innerHTML = 'Priority 2';
          createInputFormPriorityText2.setAttribute('data-priority', 2);
          createInputFormPriorityText3.innerHTML = 'Priority 3';
          createInputFormPriorityText3.setAttribute('data-priority', 3);
          createInputFormPriorityText1.className = 'priority-one';
          createInputFormPriorityText2.className = 'priority-two';
          createInputFormPriorityText3.className = 'priority-three';
          createInputFormPriorityDropDownSpan.innerHTML = 'Priority';
          createInputFormPriorityDropDown.appendChild(createInputFormPriorityDropDownSpan);
          createInputFormPriorityDropDown.append(createInputFormPriority);
          createInputFormPriority.append(createInputFormPriorityText1, createInputFormPriorityText2, createInputFormPriorityText3);


          createInputFormDate.id = 'myDate';
          createInputFormDate.className = 'date-picker';
          createInputFormDate.value = format(Date.parse(doc.data().tasks.date), "yyyy-MM-dd");
          createInputFormDate.min = format(Date.parse(doc.data().tasks.date), "yyyy-MM-dd");
          createInputFormDate.max = format(addDays(Date.parse(doc.data().tasks.date), 730), "yyyy-MM-dd");
          createInputFormDate.type = 'date';
          createInputFormDatePickerLabel.innerHTML = 'Due Date:'
          let formLabel = document.createElement('label');
          inputFormContainer.className = 'form-container';
          formLabel.className = 'form-group';
          formLabel.setAttribute('for', 'createNewTask');
          formLabel.innerHTML = 'Submit Task Edits';
          createInputFormTitle.name = 'createNewTask'
          createInputFormTitle.className = 'input-tasks';
          createInputFormTitle.type = 'text';
          createInputFormTitle.required = true;
          createInputFormTitle.pattern = '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$';
          createInputFormTitle.id = 'taskName'

          createInputFormTitle.placeholder = doc.data().tasks.task
          createBackgroundComponent.style.backgroundColor = "#FFFFF";
          let contentDocument = document.querySelector('.mainContentContainer');
          createBackgroundComponent.appendChild(inputFormContainer);
          inputFormContainer.appendChild(formLabel)
          inputFormContainer.appendChild(document.createElement('br'))
          contentDocument.appendChild(createSubmitComponent);
          inputFormContainer.appendChild(createInputFormTitle);
          inputFormContainer.appendChild(createInputFormDatePickerLabel);
          inputFormContainer.appendChild(createInputFormDate);
          inputFormContainer.appendChild(createInputFormPriorityDropDown);
          createSubmitComponent.appendChild(createBackgroundComponent);
          let buttonContainer = document.createElement('div');
          buttonContainer.className = 'task-button-holder'
          buttonContainer.append(submitButton);
          buttonContainer.append(cancelButton);
          inputFormContainer.append(buttonContainer);
          priorityPick(createInputFormPriorityText1, createInputFormPriorityText2, createInputFormPriorityText3, createInputFormPriorityDropDownSpan);
          //create event listener for form to send to factory function
          //submit event listener




          inputFormContainer.addEventListener('submit', (e) => {
            e.preventDefault();
            let priorityCheck = document.getElementById('drop-down-priority').dataset;

            // if(priorityCheck!=n)
            let taskName = document.getElementById('taskName').value;
            let dateVal = format(addDays(new Date(document.getElementById('myDate').value), 1), 'MM/dd/yyyy');
            let priorityLevel = document.getElementById('drop-down-priority').dataset.priority;
            taskName = taskName.toLowerCase();
            const titleCase = taskName.split(" ");

            for (let i = 0; i < titleCase.length; i++) {

              titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1);

            }


            taskName = titleCase.join(" ");
            // let Tasks = createTask(taskName);
            let tasksRef;
            let unsubscribe;
            unsubscribe = tasksRef;
            let projectName = document.querySelector('.page-header-text')

            tasksRef = db.collection('users').where('uid', '==', firebase.auth().currentUser.uid)
            tasksRef
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach(() => {
                  updateTask(projectName.innerHTML, taskName, priorityLevel, dateVal, taskId,docId);

                })
              })


            exitForm();

          })

          cancelButton.addEventListener('click', (e) => {
            e.preventDefault();

            exitForm();
          })

        }
      })

      //create an interface to edit the task info, deadline, name



    }))

}

function exitForm() {
  let formToExit = document.querySelector('.project-edit');
  formToExit.remove();
}



export function trashButtonEventListener() {
  let trashEventListener = document.querySelectorAll('.trash-icon');

  trashEventListener.forEach(button =>
    button.addEventListener('click', (e) => {
      //unique identifier 
      let taskId = e.currentTarget.parentNode.parentNode.firstChild.querySelector('.added-tasks-text').getAttribute('data-id');
      let docId = e.currentTarget.parentNode.parentNode.parentNode.id
      
      projectsRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects").doc(docId).collection('tasks').doc(taskId);
      projectsRef.delete()




    }))
}


export function mainContentErase() {


  let mainContent = document.querySelector('.mainContentContainer');
  mainContent.remove();
}

export function allContentErase() {


  let mainContent = document.body;
  if (mainContent.firstChild != null) {
    while (mainContent.firstChild) {
      if (mainContent.firstChild.class != ('circleSubmit')) {
        mainContent.removeChild(mainContent.firstChild);
      }
    }
  }
}