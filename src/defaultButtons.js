import {
  emoji
} from './navBarBuilder';
import {
  projectsExpandListerner,
  projectsAddListerner,
  defaultButtonListener
} from './defaultButtonListeners';
import{allContentErase, mainContentErase} from './addedButtons'
import { defaultButtonTaskView, mainContentBuilder } from './mainContentBuilder';
import {
  editButtonEventListener,
  trashButtonEventListener,checkMarkEventListener
} from "./addedButtons";
import { el } from 'date-fns/locale';
import { isBefore, isThisMonth, isThisWeek, isToday, toDate } from 'date-fns';
const db = firebase.firestore();
const auth = firebase.auth();
//Notification
//Today
//This week
//This month
let defaultButtons = [];



export const defaultNotifications = () => {
  let pageState = {
    name: "Notifications",
    emoji: emoji.Notifications,
    id: 'notifPage'
  }

  return Object.assign({},
    createButton(pageState), pageState
  )

}

export const defaultCompleted = (name) => {
  let pageState = {
    name: "History",
    emoji: emoji.Today,
    id: 'completedTasks'
  }
  
  return Object.assign({},
    createButton(pageState), pageState
  )
}

export const defaultWeek = () => {
  let pageState = {
    name: 'This Week',
    emoji: emoji.thisWeek,
    id: "weekPage"
  }
  
  return Object.assign({},
    createButton(pageState), pageState
  )
}


export const defaultMonth = () => {
  let pageState = {
    name: 'This Month',
    emoji: emoji.thisMonth,
    id: 'monthPage'
  }
  
  return Object.assign({},
    createButton(pageState), pageState
  )
}

//create assignment objects for values
//things in common
//property to build button with listener and
//change page to the state of what is chosen
//



const createButton = (pageState) => ({

  build: () => {
    let buttonLocation = document.querySelector('.defaultButtonContainer');
    let newButton = document.createElement('div');
    let newButtonText = document.createElement('p');
    let buttonIcon = document.createElement('img');
    newButton.id = pageState.id;
    buttonIcon.src = pageState.emoji;
    buttonIcon.className = 'buttonIcon';
    defaultButtonListener(newButton);

    newButton.append(buttonIcon);
    newButton.className = 'defaultButtons';
    buttonIcon.style.marginLeft = '12%';
    newButtonText.innerHTML = pageState.name;
    newButtonText.id="titleText"
    newButton.append(newButtonText);
    buttonLocation.appendChild(newButton);


  }

})

export const defaultButtonPageBuilders=(()=>{
  const notificationPage = () =>{
    let mainPageScheduleList = document.querySelector('.main-page-schedule-list')
    let taskHolder =[];    
    let wipe = document.querySelector('.main-page-schedule-list');
    const taskNode = document.querySelectorAll('.projectTitle');
    const taskArray = [...taskNode];
    let tasks = db.collectionGroup('tasks').where('userId','==',firebase.auth().currentUser.uid)
    tasks.orderBy('tasks.date').onSnapshot((querySnapshot)=>{
      taskHolder=[];
      //remove children, starts clean slate 
      if (wipe != null && wipe.firstChild != null) {
        while (wipe.firstChild) {
          wipe.removeChild(wipe.firstChild);
        }
      }
     querySnapshot.forEach((doc)=>{
      const taskDate =Date.parse(doc.data().tasks.date);
      if(isToday(taskDate)||isBefore(taskDate,new Date(), "yyyy-MM-dd")){ 
      taskHolder.push(
        `<div class="added-tasks"  id=${doc.data().tasks.id}  data-id=${doc.id}><div class='taskbar-options'><div class='task-selection'><input type="checkbox" class="todo-checkbox"><label class="added-tasks-text" data-id=${doc.data().id}>${doc.data().tasks.task}</label></div><div class='taskbar-edit-delete'><img src=${emoji.editIcon} class="edit-icon" alt=""><img src=${emoji.trashIcon} alt="" class="trash-icon">
              </div></div>
              <div class='deadline-date'><label>${doc.data().tasks.date}</label>
              </div>
            </div>`)
          }

     })
     
      mainPageScheduleList.innerHTML = taskHolder.join('');
    editButtonEventListener();
    trashButtonEventListener();
    checkMarkEventListener();
    })
    
  
  };

  const thisWeekPage = () =>{
    let mainPageScheduleList = document.querySelector('.main-page-schedule-list')
    let taskHolder =[];    
    let wipe = document.querySelector('.main-page-schedule-list');
    const taskNode = document.querySelectorAll('.projectTitle');
    const taskArray = [...taskNode];
    let tasks = db.collectionGroup('tasks').where('userId','==',firebase.auth().currentUser.uid)
    tasks.orderBy('tasks.date').onSnapshot((querySnapshot)=>{
      taskHolder=[];
      //remove children, starts clean slate 
      if (wipe.firstChild != null) {
        while (wipe.firstChild) {
          wipe.removeChild(wipe.firstChild);
        }
      }
     querySnapshot.forEach((doc)=>{
      if(isThisWeek(Date.parse(doc.data().tasks.date))){ 
      taskHolder.push(
        `<div class="added-tasks"  id=${doc.data().tasks.id}  data-id=${doc.id}><div class='taskbar-options'><div class='task-selection'><input type="checkbox" class="todo-checkbox"><label class="added-tasks-text" data-id=${doc.data().id}>${doc.data().tasks.task}</label></div><div class='taskbar-edit-delete'><img src=${emoji.editIcon} class="edit-icon" alt=""><img src=${emoji.trashIcon} alt="" class="trash-icon">
              </div></div>
              <div class='deadline-date'><label>${doc.data().tasks.date}</label>
              </div>
            </div>`)
          }

     })
     
      mainPageScheduleList.innerHTML = taskHolder.join('');
    editButtonEventListener();
    trashButtonEventListener();
    checkMarkEventListener();
    })
  };

  const thisMonthPage = () =>{
    let mainPageScheduleList = document.querySelector('.main-page-schedule-list')
    let taskHolder =[];    
    let wipe = document.querySelector('.main-page-schedule-list');
    const taskNode = document.querySelectorAll('.projectTitle');
    const taskArray = [...taskNode];
    let tasks = db.collectionGroup('tasks').where('userId','==',firebase.auth().currentUser.uid)
    tasks.orderBy('tasks.date').onSnapshot((querySnapshot)=>{
      taskHolder=[];
      //remove children, starts clean slate 
      if (wipe.firstChild != null) {
        while (wipe.firstChild) {
          wipe.removeChild(wipe.firstChild);
        }
      }
     querySnapshot.forEach((doc)=>{
      if(isThisMonth(Date.parse(doc.data().tasks.date))){ 
      taskHolder.push(
        `<div class="added-tasks"  id=${doc.data().tasks.id}  data-id=${doc.id}><div class='taskbar-options'><div class='task-selection'><input type="checkbox" class="todo-checkbox"><label class="added-tasks-text" data-id=${doc.data().id}>${doc.data().tasks.task}</label></div><div class='taskbar-edit-delete'><img src=${emoji.editIcon} class="edit-icon" alt=""><img src=${emoji.trashIcon} alt="" class="trash-icon">
              </div></div>
              <div class='deadline-date'><label>${doc.data().tasks.date}</label>
              </div>
            </div>`)
          }

     })
     
      mainPageScheduleList.innerHTML = taskHolder.join('');
    editButtonEventListener();
    trashButtonEventListener();
    checkMarkEventListener();
    })
  };

  const completedTasks = () =>{
    let mainPageScheduleList = document.querySelector('.main-page-schedule-list')
    let taskHolder =[];    
    let wipe = document.querySelector('.main-page-schedule-list');
    const taskNode = document.querySelectorAll('.projectTitle');
    const taskArray = [...taskNode];
    let tasks = db.collectionGroup('tasks').where('userId','==',firebase.auth().currentUser.uid)
    tasks.onSnapshot((querySnapshot)=>{
      taskHolder=[];
      //remove children, starts clean slate 
      if (wipe.firstChild != null) {
        while (wipe.firstChild) {
          wipe.removeChild(wipe.firstChild);
        }
      }
     querySnapshot.forEach((doc)=>{
      if(doc.data().tasks.status == 'task-completed'){ 
      taskHolder.push(
        `<div class="added-tasks"  id=${doc.id} ><div class='taskbar-options'><div class='task-selection'><label class="added-tasks-text" data-id=${doc.data().id}>${doc.data().tasks.task}</label></div></div>
              <div class='deadline-date'><label>${doc.data().tasks.status}</label>
              </div>
            </div>`)
          }

     })
     
      mainPageScheduleList.innerHTML = taskHolder.join('');
    editButtonEventListener();
    trashButtonEventListener();
    checkMarkEventListener();
    })
  };


  return {
    notificationPage,thisWeekPage,thisMonthPage,completedTasks
  }
})();



export function addProjects() {
  //make container and font for projects
  const queryNav = document.querySelector('.navContentContainer');
  let projectsAdd = document.createElement('div');
  projectsAdd.className = ('projectsNav');

  let projectsText = document.createElement('p');
  projectsText.innerHTML = "Projects";
  projectsAdd.appendChild(projectsText);
  queryNav.appendChild(projectsAdd);
  //create the add new projects button
  let buttonExpandIcon = document.createElement('img');
  buttonExpandIcon.src = emoji.plusIcon;
  buttonExpandIcon.className = 'imgExpand';
  projectsAddListerner(buttonExpandIcon);
  projectsAdd.appendChild(buttonExpandIcon);
}



export function signOut(signOutHold){
  const signOutContainer = document.createElement('input');
  signOutContainer.type = 'submit';
  signOutContainer.value = 'Sign Out';
  signOutContainer.className = 'signOut';
  signOutContainer.addEventListener('click',()=>{
   allContentErase();
    firebase.auth().signOut().then(()=>{
    })
    .catch((error)=>{
    })
  })
  signOutHold.appendChild(signOutContainer);
}

//create pages



const todos = (() => {
  //make todos for each default button

})();

export {
  defaultButtons
}
