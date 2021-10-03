import {addProjects,projectViewAllButton,defaultNotifications,defaultToday,defaultWeek,defaultMonth, defaultButtons, signOut} from './defaultButtons';
import {addedButtonEventListener} from './addedButtons';
const db = firebase.firestore();
const auth = firebase.auth(); 

export const emoji = {
  arrowExpand:'images/arrowExpand.png',
  Notifications:'images/notifications.png' ,
  Today:'images/today.png',
  thisWeek:'images/thisWeek.png',
  thisMonth:'images/thisMonth.png',
  plusIcon: 'images/plusIcon.png'
}

export function navBarBuilder(){
  //Make Structure
  //Make Buttons
  //Make View All Button
  navContainerBuilder();
  buttonBuilder();

}


//Two choices either build buttons in both containers or when called in structure
//will do build in both to avoid breakin solid rules
 function buttonBuilder(){
  defaultNotifications().build();
  defaultButtons.push(defaultNotifications());
  console.log(defaultButtons);
  defaultToday().build();
  defaultButtons.push(defaultToday());

  defaultWeek().build();
  defaultButtons.push(defaultWeek());
  defaultMonth().build();
  defaultButtons.push(defaultMonth());


  //build Buttons calls Default Button Aggregate
  //build Buttons added Button

    //maybe add an eraser for the added Button Container for easy reload, or make a general eraser for classes
};


// each default button has its own function and they go to an aggregate
 function defaultButtonAggregate(){
//calls all default button functions from default buttons module

}

function navContainerBuilder(){
//create the overall container for nav
  const queryBody = document.body;
  console.log(queryBody);
  const toMain =document.createElement('div');
  toMain.className = 'navContentContainer';
  queryBody.appendChild(toMain);
  //create the default buttons container
  defaultButtonContainerBuilder(toMain);
  //create projects button
  addProjects();
  //create the added buttons container
  addedButtonContainerBuilder(toMain);
  //create viewAllProjectsContainer
    projectViewAllButtonContainer(toMain);

    const projectContainer = document.querySelector('.viewAllProjectsContainer');
    projectViewAllButton(projectContainer);

  }



  function defaultButtonContainerBuilder(mainContainerAppender){
    const defaultContainer = document.createElement('div');
    defaultContainer.className=('defaultButtonContainer')
    mainContainerAppender.appendChild(defaultContainer);

  }

  function addedButtonContainerBuilder(mainContainerAppender){
    const addedButtonContainerBuilder = document.createElement('div');
    addedButtonContainerBuilder.className=('addedButtonContainer');
    //add users projects real time
    console.log('live list');

    let unsubscribe;
    let projectsRef;
    let projects;
    auth.onAuthStateChanged(user=>{
      if (user){
        unsubscribe = projectsRef
        projectsRef= db.collection('users').where('uid','==', user.uid).onSnapshot(querySnapshot =>{
        querySnapshot.docs.map(doc =>{
          console.log(doc.data(),'sadasd');
        projects=doc.data().project.map(projects => {
            console.log(projects.name,'ssss');
            console.log(projects);
            return projects=`<div class=addedButtons><p>${projects.name}</p></div>`;
            
          });
          // return `<div class=addedButtons><p>${doc.data().project[0].name}</p></div>`
          return projects;

     
        });
        console.log('why these tabss', projects);
        document.querySelector('.addedButtonContainer').innerHTML=projects.join('');
        
        console.log('testing project list')
        addedButtonEventListener();


      });
    }
    else{
      unsubscribe && unsubscribe();
    }
    });
    mainContainerAppender.appendChild(addedButtonContainerBuilder);
  
  }



  function projectViewAllButtonContainer(mainContainerAppender){
    const projectViewAllButton = document.createElement('div');
    projectViewAllButton.className='viewAllProjectsContainer';
    mainContainerAppender.appendChild(projectViewAllButton);

  };

  export {defaultButtons};