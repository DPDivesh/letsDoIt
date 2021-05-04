import {emoji} from './navBarBuilder';
import {projectsListerner,defaultButtonListerner} from './defaultButtonListeners';
//Notification
//Today
//This week
//This month


export const defaultNotifications=()=>{
  let pageState = {
    name:"Notifications",
    emoji:emoji.Notifications,
  }

let objectFunctions = {
   makeNotifPage:()=>{
    console.log("Notifications Page");
  }
  }
return Object.assign(
  {},
  createButton(pageState),objectFunctions,pageState
)

}

export const defaultToday=(name)=>{
  let pageState = {
    name:"Today",
    emoji:emoji.Today  }
    let objectFunctions = {
       makeTodayPage:()=>{
        console.log("Today Page");
      }
      }
    return Object.assign(
      {},
      createButton(pageState),objectFunctions,pageState
    )
}

export const defaultWeek=()=>{
  let pageState = {
    name:'This Week',
    emoji:emoji.thisWeek  }
    let objectFunctions = {
       makeThisWeekPage:()=>{
        console.log("Week Page");
      }
      }
    return Object.assign(
      {},
      createButton(pageState),objectFunctions,pageState
    )
  }


export const defaultMonth=()=>{
  let pageState = {
    name:'This Month',
    emoji:emoji.thisMonth  }
    let objectFunctions = {
       makeMonthPage:()=>{
        console.log("Month Page");
      }
      }
    return Object.assign(
      {},
      createButton(pageState),objectFunctions,pageState
    )
}

//create assignment objects for values
//things in common
//property to build button with listener and
//change page to the state of what is chosen
//



const createButton = (pageState)=>({

build:()=>{
  console.log(pageState.name + "hi")
  let buttonLocation = document.querySelector('.defaultButtonContainer');
  let newButton = document.createElement('div');
  let newButtonText = document.createElement('p');
  let buttonIcon = document.createElement('img');
  buttonIcon.src = pageState.emoji;
  buttonIcon.className='buttonIcon';
  defaultButtonListerner(newButton);

  newButton.append(buttonIcon);
  newButton.className = 'defaultButtons';
  console.log(buttonLocation);
  buttonIcon.style.marginLeft='12%';
  newButtonText.innerHTML = pageState.name;
  newButton.append(newButtonText);
  buttonLocation.appendChild(newButton);
  console.log(buttonLocation,'hi');


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
   console.log('imma test');
   projectsListerner(projectsAdd,projectExpand);
   projectsAdd.appendChild(projectExpand)
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
