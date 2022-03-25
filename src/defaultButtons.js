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

  let objectFunctions = {
    makePage: () => {
    }
  }
  return Object.assign({},
    createButton(pageState), objectFunctions, pageState
  )

}

export const defaultCompleted = (name) => {
  let pageState = {
    name: "Completed",
    emoji: emoji.Today,
    id: 'completedTasks'
  }
  let objectFunctions = {
    makePage: () => {

    }
  }
  return Object.assign({},
    createButton(pageState), objectFunctions, pageState
  )
}

export const defaultWeek = () => {
  let pageState = {
    name: 'This Week',
    emoji: emoji.thisWeek,
    id: "weekPage"
  }
  let objectFunctions = {
    makePage: () => {
    }
  }
  return Object.assign({},
    createButton(pageState), objectFunctions, pageState
  )
}


export const defaultMonth = () => {
  let pageState = {
    name: 'This Month',
    emoji: emoji.thisMonth,
    id: 'monthPage'
  }
  let objectFunctions = {
    makePage: () => {
    }
  }
  return Object.assign({},
    createButton(pageState), objectFunctions, pageState
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
    console.log('hi')
    let tasksRef;
    tasksRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects");

    let allProjects = [];
   

    tasksRef.get()
    .then((querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      allProjects.push(doc.data());
      console.log(allProjects)
    
      
  
      })


    })

    tasksRef.orderBy('tasks.date').onSnapshot(querySnapshot => {
      let taskHolder = []
      let mainPageScheduleList = document.querySelector('.main-page-schedule-list');
      let wipe = document.querySelector('.main-page-schedule-list');
      //remove children, starts clean slate 
      if (wipe.firstChild != null) {
        while (wipe.firstChild) {
          wipe.removeChild(wipe.firstChild);
        }
      }
  
      //map it all like you mapped the docs for projects
  
      querySnapshot.docs.map(doc => {
        console.log(doc.data());
        taskHolder.push(
          `<div class="added-tasks" data-id=${doc.id}><div class='taskbar-options'><div class='task-selection'><input type="checkbox" class="todo-checkbox"><label class="added-tasks-text" data-id=${doc.data().id}>${doc.data().tasks.task}</label></div><div class='taskbar-edit-delete'><img src=${emoji.editIcon} class="edit-icon" alt=""><img src=${emoji.trashIcon} alt="" class="trash-icon">
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

  const thisWeekPage = () =>{

  };

  const thisMonthPage = () =>{

  };

  const completedTasks = () =>{

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
