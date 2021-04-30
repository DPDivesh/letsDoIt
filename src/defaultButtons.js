import {emoji} from './navBarBuilder';
//Notification
//Today
//This week
//This month


export const defaultNotifications=(name)=>{
  let pageState = {
    name,
    emoji:emoji.Notifications
  }
return Object.assign(
  {},
  createButton(pageState),
)

}

export const defaultToday=(name)=>{
  let pageState = {
    name,
    emoji:emoji.Today  }
return Object.assign(
  {},
  createButton(pageState),
)
}

export const defaultWeek=(name)=>{
  let pageState = {
    name,
    emoji:emoji.thisWeek  }
return Object.assign(
  {},
  createButton(pageState),
)
}


export const defaultMonth=(name)=>{
  let pageState = {
    name,
    emoji:emoji.thisMonth  }
return Object.assign(
  {},
  createButton(pageState),
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
  buttonIcon.width='25'
  newButton.append(buttonIcon);
  newButton.className = pageState.name + "DefaultButtonContainer";
  console.log(buttonLocation);
  newButton.style.width='100%';
  newButton.style.height='5.5vh'; 
  newButton.style.minHeight='50px'; 
  newButton.style.backgroundColor='#F6F6F6';
  newButton.style.display='flex';
  buttonIcon.style.marginLeft='15%'

  newButtonText.innerHTML = pageState.name;
  
  newButton.style.alignItems='center';
  newButton.style.fontSize='calc(10px + 1vw)';
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

function projectsListerner(divContainer,elementClicked){

  const expand = document.querySelector('imgExpand');
  divContainer.addEventListener('click',()=>{
    //change state of content 
    //add animation 
    console.log('test');
  })
  divContainer.appendChild(elementClicked)

}

const todos=(()=>{
  //make todos for each default button

})();
