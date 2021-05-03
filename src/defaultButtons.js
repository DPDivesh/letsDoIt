import {emoji,} from './navBarBuilder';
import {projectsListerner,defaultButtonListerner} from './defaultButtonListeners';

//Notification
//Today
//This week
//This month
let defaultButtons = []


export function buttonBuilder(){
  defaultNotifications().build();
  defaultButtons.push(defaultNotifications());
  defaultToday().build();
  defaultButtons.push(defaultToday());
  console.log(defaultButtons);

  defaultWeek().build();
  defaultButtons.push(defaultWeek());
  defaultMonth().build();
  defaultButtons.push(defaultMonth());
  console.log(defaultButtons);
  //build Buttons calls Default Button Aggregate
  //build Buttons added Button

    //maybe add an eraser for the added Button Container for easy reload, or make a general eraser for classes
};

 const defaultNotifications=()=>{
  let pageState = {
    name:"Notications",
    emoji:emoji.Notifications,
    id: "notifPage",
    // makeNotifPage:()=>{console.log('making the notifs') 
  };
  const makeNotifPage={
    makeNotifPage:()=>{console.log('making the notifs') 

  }
  }

return Object.assign( {},
  createButton(pageState),pageState,makeNotifPage
)

}

const defaultToday=()=>{
  let pageState = {
    name:'Today',
    emoji:emoji.Today,
    id: "todayPage",
  }
return Object.assign(
  {},
  createButton(pageState),pageState
)
}

 const defaultWeek=()=>{
  let pageState = {
    name:'This Week',
    emoji:emoji.thisWeek,
    id: "weekPage",
  }
return Object.assign(
  {},
  createButton(pageState),pageState
)
}


 const defaultMonth=()=>{
  let pageState = {
    name:'This Month',
    emoji:emoji.thisMonth,
    id: "monthPage",
  }
return Object.assign(
  {},
  createButton(pageState),pageState
)
}

//create assignment objects for values
//things in common 
//property to build button with listener and 
//change page to the state of what is chosen
// 


const createButton = (pageState)=>({

build:()=>{
  let buttonLocation = document.querySelector('.defaultButtonContainer');
  let newButton = document.createElement('div');
  let newButtonText = document.createElement('p');
  let buttonIcon = document.createElement('img');
  buttonIcon.src = pageState.emoji;
  buttonIcon.className='buttonIcon';
  newButton.append(buttonIcon);
  newButton.className = 'defaultButtons';
  newButton.id = pageState.id;
  buttonIcon.style.marginLeft='12%'
  newButtonText.innerHTML = pageState.name;
  newButton.append(newButtonText);
  buttonLocation.appendChild(newButton);
  const newButtonEvent = document.getElementById(pageState.id);
  defaultButtonListerner(newButtonEvent,defaultButtons);

}

})






export function addProjects(){
  //make container and font for projects
  const queryNav = document.querySelector('.navContentContainer');
  let projectsAdd = document.createElement('div');
  projectsAdd.className = ('projectsNav');
   //create close/expand tab for projects
   const projectExpand = document.createElement('img');
   projectExpand.src = emoji.arrowExpand;
   projectExpand.className='imgExpand';
   console.log('imma test')
   projectsListerner(projectsAdd,projectExpand);
   //create projects text
  let projectsText = document.createElement('p');
  projectsText.innerHTML = "Projects";
  projectsAdd.appendChild(projectsText);  
  queryNav.appendChild(projectsAdd);
}

export function projectViewAllButton(projectHold){
  const projectViewAll =document.createElement('input');
  projectViewAll.type='submit';
  projectViewAll.value='View All Projects';
  projectViewAll.className = 'viewAllProjectsButton';
  projectHold.appendChild(projectViewAll);
   

};



const todos=(()=>{
  //make todos for each default button

})();


export {defaultButtons}