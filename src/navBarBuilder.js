import {addProjects,projectViewAllButton,defaultNotifications,defaultToday,defaultWeek,defaultMonth} from './defaultButtons';



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
  defaultToday().build();
  defaultWeek().build();
  defaultMonth().build();


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
    addedButtonContainerBuilder.className=('addedButtonContainer')
    mainContainerAppender.appendChild(addedButtonContainerBuilder);
  }

  const Project = ()=>{

  };

  function projectViewAllButtonContainer(mainContainerAppender){
    const projectViewAllButton = document.createElement('div');
    projectViewAllButton.className='viewAllProjectsContainer';
    mainContainerAppender.appendChild(projectViewAllButton);

  };
