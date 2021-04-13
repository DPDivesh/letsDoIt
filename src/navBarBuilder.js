import {addProjects} from './defaultButtons';


export function navBarBuilder(){
  //Make Structure
  //Make Buttons
  //Make View All Button
  console.log('big test');
  navContainerBuilder();
  addProjects();
}

export function structureBuilder(){
  containerBuilder();

  //build Main container
  //Button Builder function
  //build Default Button Container
  //build added Button Container


};

//Two choices either build buttons in both containers or when called in structure
//will do build in both to avoid breakin solid rules
 function buttonBuilder(){
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
  


  }

  function defaultButtonContainerBuilder(mainContainerAppender){
    const deafaultContainer = document.createElement('div');
    deafaultContainer.className=('defaultButtonContainer')
    mainContainerAppender.appendChild(deafaultContainer);

  }
  