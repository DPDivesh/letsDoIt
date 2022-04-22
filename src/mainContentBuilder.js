import {
  id
} from "date-fns/locale";
import {
  createTask
} from "./projectCreate";
const {
  serverTimestamp
} = firebase.firestore.FieldValue;
import {
  signOut
} from "./defaultButtons";
import {
  emoji
} from "./navBarBuilder";
import {
  addDays,
  format
} from "date-fns";
import {
  editButtonEventListener,
  trashButtonEventListener,checkMarkEventListener
} from "./addedButtons";
import { defaultButtonPageBuilders } from "./defaultButtons";
import { docID } from "./projectCreate";
import { webPageBuilder } from "./webPageBuilder";

//ideas
//#1 Have the buttons have an event Listener to call each function could module pattern for security
const db = firebase.firestore();
const auth = firebase.auth();

export function mainContentBuilder() {
  //create container
  //Determine what page we're on if we dont use function call event listeners or make this a constructor and have the event listener call said constructor
  //example *click button* calls specificButton.Today();
  //newProjectBuilder
  if (document.querySelector('.mainContentContainer')==null){
  mainContainerBuilder();

  }
}


const specificButton = (() => {
  //individual button maker
  //build todos as part of a button maker
  //prebuilt buttons

})();




function defaultButton() {
  //prebuilt buttons

}

function mainContainerBuilder() {
  const queryBody = document.body;
  const toMain = document.createElement('div');
  toMain.className = 'mainContentContainer';
  queryBody.appendChild(toMain);

  signOutButtonContainer(toMain);
  const signOutContainer = document.querySelector('.signOutContainer');
  if(signOutContainer.firstChild == null){
  signOut(signOutContainer);
  }

}

function signOutButtonContainer(mainContainerAppender) {
  const signOutButton = document.createElement('div');
  signOutButton.className = 'signOutContainer';
  mainContainerAppender.appendChild(signOutButton);
};

export function defaultButtonTaskView(pageName) {
  let tasksRef;
  let unsubscribe;
  let mainContent = document.querySelector(".mainContentContainer");
  unsubscribe = tasksRef;

  //in here we're gonna grab the tasks
  // and either append them with a class and make the style 
  //here or find a another method
  //maybe have this whole function call a format after wiping one
  defaultButtonContentLayout(mainContent);
  let mainPageSchedule = document.createElement('div');
  mainPageSchedule.className = 'main-page-schedule';
  let headerText = document.createElement('h2');
  headerText.className = 'main-page-schedule-title';
  headerText.innerHTML = 'Todos'
  mainPageSchedule.append(headerText);
  let mainPageScheduleList = document.createElement('div');
  mainPageScheduleList.className = 'main-page-schedule-list';
  mainPageSchedule.append(mainPageScheduleList);
  mainContent.append(mainPageSchedule)

};



export function addedButtonTaskView(onClickID) {
  let tasksRef;
  let unsubscribe;
  let projectsRef;
  let mainContent = document.querySelector(".mainContentContainer");
  unsubscribe = tasksRef;
  projectsRef = db.collection('users').where('uid', '==', firebase.auth().currentUser.uid)
  //in here we're gonna grab the tasks
  // and either append them with a class and make the style 
  //here or find a another method
  //maybe have this whole function call a format after wiping one
  addedButtonContentLayout(mainContent,onClickID);
  let mainPageSchedule = document.createElement('div');
  mainPageSchedule.className = 'main-page-schedule';
  let headerText = document.createElement('h2');
  headerText.className = 'main-page-schedule-title';
  headerText.innerHTML = 'Todos'
  mainPageSchedule.append(headerText);
  let mainPageScheduleList = document.createElement('div');
  mainPageScheduleList.className = 'main-page-schedule-list';
  mainPageSchedule.append(mainPageScheduleList);
  mainContent.append(mainPageSchedule)

  tasksRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects").doc(onClickID).collection("tasks");


  tasksRef.orderBy('tasks.date').onSnapshot(querySnapshot => {
    let taskHolder = []
    let wipe = document.querySelector('.main-page-schedule-list');
    //remove children, starts clean slate 
    if (wipe.firstChild != null) {
      while (wipe.firstChild) {
        wipe.removeChild(wipe.firstChild);
      }
    }

    //map it all like you mapped the docs for projects

    querySnapshot.docs.map(doc => {
      taskHolder.push(
        `<div class="added-tasks" id=${doc.data().tasks.id} data-id=${doc.id}><div class='taskbar-options'><div class='task-selection'><input type="checkbox" class="todo-checkbox"><label class="added-tasks-text" data-id=${doc.data().id}>${doc.data().tasks.task}</label></div><div class='taskbar-edit-delete'><img src=${emoji.editIcon} class="edit-icon" alt=""><img src=${emoji.trashIcon} alt="" class="trash-icon">
              </div></div>
              <div class='deadline-date'><label>${doc.data().tasks.date}</label>
              </div>
            </div>`)
      //let the color of the date equal the priority 

    });
    //in here we're gonna grab the tasks
    // and either append them with a class and make the style 
    //here or find a another method
    //maybe have this whole function call a format after wiping one



    mainPageScheduleList.innerHTML = taskHolder.join('');
    editButtonEventListener();
    trashButtonEventListener();
    checkMarkEventListener();


  });
};

function defaultButtonContentLayout(){
   let mainContent = document.querySelector(".mainContentContainer");
  let headerTitle = document.createElement('div');
  let headerText = document.createElement('h1');
  headerText.innerHTML = document.title;
  headerTitle.className = 'page-header';
  headerText.className = 'page-header-text';
  headerTitle.appendChild(headerText);
  document.querySelector(".mainContentContainer").append(headerTitle);

}

function addedButtonContentLayout(mainContent,onClickID) {
  let headerTitle = document.createElement('div');
  let headerText = document.createElement('h1');
  let headerCheckBox = document.createElement('input');
  console.log(onClickID,'see me?')
  headerCheckBox.addEventListener("click",()=>{
    let projectRef=db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects").doc(onClickID)
    let taskRef = projectRef.collection('tasks');

    taskRef.get().then((querySnapshot)=>{
      querySnapshot.docs.map(doc=>{
      taskRef.doc(doc.data().id).update({
        tasks:{ status:"task-completed",task:doc.data().tasks.task},
        id:doc.data().id
      });  
      })
        projectRef.set({
        status:"completed",
      })
      document.body.innerHTML=(" ")
     webPageBuilder();
      
  
   
    })
    
  })
  headerCheckBox.type='checkbox';
  headerCheckBox.className ='project-done';
  headerText.innerHTML = document.title;
  headerTitle.className = 'page-header';

  headerText.className = 'page-header-text';
  headerText.id = onClickID;
  headerTitle.appendChild(headerText);
  headerTitle.appendChild(headerCheckBox);
  document.querySelector(".mainContentContainer").append(headerTitle);

  createTaskSubmitCircle();


}

function createTaskSubmitCircle() {
  let mainContent = document.querySelector('.mainContentContainer');
  let circle = document.createElement('button');
  circle.className = 'circleSubmit';


  circle.addEventListener('click', () => {
    if (document.querySelector('.project-add') == null && document.querySelector('.task-add') == null) {

      createInputForm();




    }

  })

  function createInputForm() {
    let createSubmitComponent = document.createElement('div');
    createSubmitComponent.className = 'task-add';
    let createBackgroundComponent = document.createElement('div');
    createBackgroundComponent.className = 'task-add__innerLayer';
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
    createInputFormPriorityDropDownSpan.innerHTML = 'Priority';
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
    createInputFormPriorityDropDown.appendChild(createInputFormPriorityDropDownSpan);
    createInputFormPriorityDropDown.append(createInputFormPriority);
    createInputFormPriority.append(createInputFormPriorityText1, createInputFormPriorityText2, createInputFormPriorityText3);


    createInputFormDate.id = 'myDate';
    createInputFormDate.className = 'date-picker';
    createInputFormDate.value = format(new Date(), "yyyy-MM-dd");
    createInputFormDate.min = format(new Date(), "yyyy-MM-dd");
    createInputFormDate.max = format(addDays(new Date(), 730), "yyyy-MM-dd");
    createInputFormDate.type = 'date';
    createInputFormDatePickerLabel.innerHTML = 'Due Date:'
    let formLabel = document.createElement('label');
    let inputForm = document.createElement('div');
    inputForm.className = "task-submit"
    inputFormContainer.className = 'form-container';
    formLabel.className = 'form-group';
    formLabel.setAttribute('for', 'createNewTask');
    formLabel.innerHTML = 'Submit a New Task';
    createInputFormTitle.name = 'createNewTask'
    createInputFormTitle.className = 'input-tasks';
    createInputFormTitle.type = 'text';
    createInputFormTitle.required = true;
    createInputFormTitle.pattern = '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$';
    createInputFormTitle.id = 'taskName'

    createInputFormTitle.placeholder = 'Task Title';
    createBackgroundComponent.style.backgroundColor = "#FFFFF";
    let contentDocument = document.querySelector('.mainContentContainer');
    createBackgroundComponent.appendChild(inputFormContainer);
    inputForm.appendChild(formLabel);
    inputForm.appendChild(createInputFormTitle);
    inputFormContainer.appendChild(inputForm);
    // inputFormContainer.appendChild(formLabel)
    inputFormContainer.appendChild(document.createElement('br'))
    contentDocument.appendChild(createSubmitComponent);
    // inputFormContainer.appendChild(createInputFormTitle);
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
      let dateVal = format(addDays(new Date(document.getElementById('myDate').value),1), 'MM/dd/yyyy');
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
      let projectsRef;
      unsubscribe = tasksRef;
      let projectName = document.querySelector('.page-header-text')

      tasksRef = db.collection('users').where('uid', '==', firebase.auth().currentUser.uid)
      tasksRef
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            createTask(projectName.innerHTML, taskName, priorityLevel, dateVal,);

          })
        })


      exitForm();

    })

    cancelButton.addEventListener('click', (e) => {
      e.preventDefault();

      exitForm();
    })
  }

  mainContent.append(circle);


}

function exitForm() {
  let formToExit = document.querySelector('.task-add');
  formToExit.remove();
};

export function priorityPick(pOne, pTwo, pThree, spanChange) {
  pOne.addEventListener('click', () => {
    spanChange.innerHTML = pOne.innerHTML;
    spanChange.style.color = '#780000'
    spanChange.id = spanChange.id;
    spanChange.setAttribute('data-priority', 1);
  })

  pTwo.addEventListener('click', () => {
    spanChange.innerHTML = "Priority 2"
    spanChange.style.color = '#BDAA01'
    spanChange.id = spanChange.id;
    spanChange.setAttribute('data-priority', 2);
  })

  pThree.addEventListener('click', () => {
    spanChange.innerHTML = "Priority 3"
    spanChange.style.color = '#097200'
    spanChange.id = spanChange.id;
    spanChange.setAttribute('data-priority', 3);
  })
}