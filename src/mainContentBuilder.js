import { id } from "date-fns/locale";
import { createTask } from "./projectCreate";
const {serverTimestamp} = firebase.firestore.FieldValue;

//ideas
//#1 Have the buttons have an event Listener to call each function could module pattern for security
const db = firebase.firestore();

export function mainContentBuilder(){
  //create container
  //Determine what page we're on if we dont use function call event listeners or make this a constructor and have the event listener call said constructor
  //example *click button* calls specificButton.Today();
  //newProjectBuilder
  mainContainerBuilder();

}


const specificButton=(()=>{
  //individual button maker
  //build todos as part of a button maker
  //prebuilt buttons

})();




function defaultButton(){
  //prebuilt buttons

}

function mainContainerBuilder(){
  const queryBody = document.body;
  console.log(queryBody);
  const toMain =document.createElement('div');
  toMain.className = 'mainContentContainer';
  queryBody.appendChild(toMain);
z
  }

  export function addedButtonTaskView(queryValue){
    let tasksRef;
    let unsubscribe;
    let projectsRef;
    let mainContent = document.querySelector(".mainContentContainer");
    console.log('yoo',queryValue,firebase.auth().currentUser.uid);
    unsubscribe = tasksRef;
    projectsRef = db.collection('projects').where('uid','==', firebase.auth().currentUser.uid)
    //in here we're gonna grab the tasks
    // and either append them with a class and make the style 
    //here or find a another method
    //maybe have this whole function call a format after wiping one
    addedButtonContentLayout(mainContent,);
    let mainPageSchedule = document.createElement('div');
    mainPageSchedule.className='main-page-schedule';
    let headerText = document.createElement('h2');
    headerText.className = 'main-page-schedule-title';
    headerText.innerHTML = 'Todos'
    mainPageSchedule.append(headerText);
    let mainPageScheduleList = document.createElement('div');
    mainPageScheduleList.className = 'main-page-schedule-list';
    mainPageSchedule.append(mainPageScheduleList);
    mainContent.append(mainPageSchedule)
    tasksRef = projectsRef.where('name','==',document.title).orderBy('createdAt')
    // tasksRef =  projectsRef.doc.data().tasks;
    // console.log(projectsRef);
    .onSnapshot(querySnapshot =>{
             let task = querySnapshot.docs.map(doc =>{
               console.log(doc.data().project.tasks.length,'length');
              //work this out 
              //maybe send this to a function to build and loop through array
              let taskHolder =[]
              for(let i=0; i<doc.data().project.tasks.length;i++){
                taskHolder.push(
              `<div class="added-tasks" data-id=${doc.id}><input type="checkbox" class="todo-checkbox"><label class="added-tasks-text">${doc.data().project.tasks[i]}</label></div>`)
              console.log(taskHolder);
              if(taskHolder.length==doc.data().project.tasks.length){
                console.log(taskHolder);
                return taskHolder.join('   ');
              }

              }
          
            });

            console.log('why these tabs', task);    
             //in here we're gonna grab the tasks
             // and either append them with a class and make the style 
             //here or find a another method
             //maybe have this whole function call a format after wiping one
     

             console.log(task,'sdasd')
             mainPageScheduleList.innerHTML = task;

    });
  };

function addedButtonContentLayout(){
  let mainContent = document.querySelector(".mainContentContainer");
  let headerTitle = document.createElement('div');
  let headerText = document.createElement('h1');
  headerText.innerHTML=document.title;
  headerTitle.className= 'page-header';
  headerText.className='page-header-text';
  headerTitle.appendChild(headerText);
  document.querySelector(".mainContentContainer").append(headerTitle);
  console.log(mainContent,headerText,headerTitle);
  console.log('i am def working :(((')
  createTaskSubmitCircle();


}

function createTaskSubmitCircle(){
console.log('making circle');
let mainContent = document.querySelector('.mainContentContainer');
let circle = document.createElement('button');
circle.className='circleSubmit';

console.log('huh')

circle.addEventListener('click',()=>{console.log('circle technique');
if (document.querySelector('.project-add') == null && document.querySelector('.task-add') == null ) {
  console.log('Add');

  createInputForm();
  



}

})

function createInputForm(){
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
  createInputFormPriorityDropDown.className='drop-down';
  let createInputFormPriorityDropDownSpan = document.createElement('span');
  createInputFormPriorityDropDownSpan.innerHTML = 'Priority';  
  let createInputFormPriority = document.createElement('div');
  createInputFormPriority.className='input-dropdown'
  let createInputFormPriorityText1 = document.createElement('p');
  let createInputFormPriorityText2 = document.createElement('p');
  let createInputFormPriorityText3 = document.createElement('p');
  createInputFormPriorityText1.innerHTML = 'Priority 1';
  createInputFormPriorityText2.innerHTML = 'Priority 2';
  createInputFormPriorityText3.innerHTML = 'Priority 3';
  createInputFormPriorityText1.className='priority-one';
  createInputFormPriorityText2.className='priority-two';
  createInputFormPriorityText3.className='priority-three';
  createInputFormPriorityDropDown.appendChild(createInputFormPriorityDropDownSpan);
  createInputFormPriorityDropDown.append(createInputFormPriority);
    createInputFormPriority.append(createInputFormPriorityText1,createInputFormPriorityText2,createInputFormPriorityText3);
    

  createInputFormDate.id = 'myDate';
  createInputFormDate.className = 'date-picker';
  createInputFormDate.type = 'date';
  createInputFormDate.value = '';
  createInputFormDatePickerLabel.innerHTML='Due Date:'
  let formLabel = document.createElement('label');
  inputFormContainer.className = 'form-container';
  formLabel.className = 'form-group';
  formLabel.setAttribute('for', 'createNewTask');
  formLabel.innerHTML = 'Submit a New Task';
  createInputFormTitle.name = 'createNewTask'
  createInputFormTitle.className = 'input-tasks';
  createInputFormTitle.type = 'text';
  createInputFormTitle.required = true;
  createInputFormTitle.pattern = "^[a-zA-Z]{3,10}$";
  createInputFormTitle.id = 'taskName'

  createInputFormTitle.placeholder = 'Task Title';
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
  priorityPick(createInputFormPriorityText1,createInputFormPriorityText2,createInputFormPriorityText3,createInputFormPriorityDropDownSpan);
  //create event listener for form to send to factory function
  //submit event listener
  inputFormContainer.addEventListener('submit', (e) => {

    e.preventDefault();

    let taskName = document.getElementById('taskName').value;
    taskName = taskName.toLowerCase();
    console.log(taskName);
    const titleCase = taskName.split(" ");
    //  console.log(titleCase[0].charAt(0).toUpperCase(),"test");
    // console.log(titleCase,"???");
    for (let i = 0; i < titleCase.length; i++) {

      titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1);

    }


    taskName = titleCase.join(" ");
console.log(taskName);
    // let Tasks = createTask(taskName);
    let tasksRef;
    let unsubscribe;
    let projectsRef;
    unsubscribe = tasksRef;

    projectsRef = db.collection('projects').where('uid','==', firebase.auth().currentUser.uid)
    tasksRef = projectsRef.where('name','==',document.title).orderBy('createdAt');
    // tasksRef =  projectsRef.doc.data().tasks;
    console.log('reference point')
    tasksRef.get().then((snapshot)=>{
      snapshot.docs.forEach(doc => {
        console.log(doc.id,'data')
        createTask(taskName,doc.id);

      })
    })

//redo structure of db users 


    // db.collection('projects').doc("uuNtImwicCuXLPjDxcvr").update({
    //   tasks:firebase.firestore.FieldValue.arrayUnion("test")
    // });
    


//     .onSnapshot(querySnapshot =>{
//       // const setWithMerge=tasksRef.set({
//       //   tasks:true
//       // },{merge:true});
//       const task = querySnapshot.docs.map(doc =>{
//        console.log(doc.data().project.tasks,'tasks');
      
//        console.log(doc.data().project.tasks,'tasks');
//      });
     
//      console.log('why these tabs', task);    

// });

   
    console.log('------')
    //  Projects.readTasks()
 
    // let projectsRef;
    // auth.onAuthStateChanged(user => {
    //   if (user) {
    //     projectsRef = db.collection('projects')
    //     const {
    //       serverTimestamp
    //     } = firebase.firestore.FieldValue;

    //     projectsRef.add({
    //       uid: user.uid,
    //       userName: user.displayName,
    //       project: Projects,
    //       name: Projects.name,
    //       createdAt: serverTimestamp()

    //     })
    //     console.log('working?')

    //   } else {
    //     console.log('User Logged Out');

    //   }

    // });

    exitForm();
    // console.log('hidasdas',document.getElementById('projectName').value)
    
  })
  
  //cancel event listener 
  cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    exitForm();
  })
}

mainContent.append(circle);

console.log(document.querySelector('.circleSubmit'))

}

function exitForm() {
  let formToExit = document.querySelector('.task-add');
  formToExit.remove();
};

function priorityPick(pOne,pTwo,pThree,spanChange){
  pOne.addEventListener('click',()=>{
    spanChange.innerHTML="Priority 1"
    spanChange.style.color='#780000'
  })
  
  pTwo.addEventListener('click',()=>{
    spanChange.innerHTML="Priority 2"
    spanChange.style.color='#BDAA01'
  })
  
  pThree.addEventListener('click',()=>{
    spanChange.innerHTML="Priority 3"
    spanChange.style.color='#097200'
  })
}