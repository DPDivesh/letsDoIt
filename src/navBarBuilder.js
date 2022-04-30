
import {
  addProjects,
  defaultNotifications,
  defaultToday,
  defaultWeek,
  defaultMonth,
  defaultButtons,
  signOut,
  defaultCompleted
} from './defaultButtons';
import {
  addedButtonEventListener
} from './addedButtons';
import {
  user
} from 'firebase-functions/v1/auth';
import { defaultButtonListener } from './defaultButtonListeners';
const db = firebase.firestore();
const auth = firebase.auth();

export const emoji = {
  arrowExpand: 'images/arrowExpand.png',
  Notifications: 'images/notifications.png',
  Today: 'images/today.png',
  thisWeek: 'images/thisWeek.png',
  thisMonth: 'images/thisMonth.png',
  plusIcon: 'images/plusIcon.png',
  trashIcon: 'images/trashIcon.png',
  editIcon: 'images/editIcon.png'
}

export function navBarBuilder() {
  //Make Structure
  //Make Buttons
  //Make View All Button
  navContainerBuilder();
  buttonBuilder();

}


//Two choices either build buttons in both containers or when called in structure
//will do build in both to avoid breakin solid rules
function buttonBuilder() {
  defaultNotifications().build();
  defaultButtons.push(defaultNotifications());
  defaultWeek().build();
  defaultButtons.push(defaultWeek());
  defaultMonth().build();
  defaultButtons.push(defaultMonth());
  defaultCompleted().build();
  defaultButtons.push(defaultCompleted());

  //build Buttons calls Default Button Aggregate
  //build Buttons added Button

  //maybe add an eraser for the added Button Container for easy reload, or make a general eraser for classes
};


// each default button has its own function and they go to an aggregate
function defaultButtonAggregate() {
  //calls all default button functions from default buttons module

}

function navContainerBuilder() {
  //create the overall container for nav
  const queryBody = document.getElementsByTagName('main');
  const toMain = document.createElement('div');
  toMain.className = 'navContentContainer';
  queryBody[0].appendChild(toMain);
  //create the default buttons container
  defaultButtonContainerBuilder(toMain);
  //create projects button
  addProjects();
  //create the added buttons container
  addedButtonContainerBuilder(toMain);



}



function defaultButtonContainerBuilder(mainContainerAppender) {
  const defaultContainer = document.createElement('div');
  defaultContainer.className = ('defaultButtonContainer');
  mainContainerAppender.appendChild(defaultContainer);

}

function addedButtonContainerBuilder(mainContainerAppender) {
  const addedButtonContainerBuilder = document.createElement('div');
  addedButtonContainerBuilder.className = ('addedButtonContainer');
  //add users projects real time

  let unsubscribe;
  let projectsRef;
  auth.onAuthStateChanged(user => {
    if (user) {
      unsubscribe = projectsRef
      projectsRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection('projects').onSnapshot(querySnapshot => {
        let projects = [];
        querySnapshot.docs.map(doc => {
          if (doc.data().id != undefined){
          projects.push(`<div class=addedButtons><p class='projectTitle'id=${doc.data().id}>${doc.data().project.name}</p></div>`)
          }

        });
        document.querySelector('.addedButtonContainer').innerHTML = projects.join("");


        addedButtonEventListener();


      });
    } else {
      unsubscribe && unsubscribe();
    }
  });
  mainContainerAppender.appendChild(addedButtonContainerBuilder);

}




export {
  defaultButtons
};