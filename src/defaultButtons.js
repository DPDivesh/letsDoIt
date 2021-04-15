//Notification
//Today
//This week
//This month


function defaultNotifications(){


}

function defaultToday(){


}

function defaultWeek(){


}


function defaultMonth(){


}

export function addProjects(){
  //make container and font for projects
  const queryNav = document.querySelector('.navContentContainer');
  let projectsAdd = document.createElement('div');
  projectsAdd.className = ('projectsNav');
   //create close/expand tab for projects
   const projectExpand = document.createElement('img');
   projectExpand.src ='images/arrowExpand.png';
   projectExpand.className='imgExpand';
   console.log('imma test')
   projectsListerner(projectsAdd,projectExpand);
   //create projects text
  let projectsText = document.createElement('p');
  projectsText.innerHTML = "Projects";
  projectsAdd.appendChild(projectsText);  
  queryNav.appendChild(projectsAdd);
 
  //create add projects button

}

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
