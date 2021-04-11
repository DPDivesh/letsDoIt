//ideas
//#1 Have the buttons have an event Listener to call each function could module pattern for security

function mainContentBuilder(){
  //create container
  //Determine what page we're on if we dont use function call event listeners or make this a constructor and have the event listener call said constructor
  //example *click button* calls specificButton.Today();
  //newProjectBuilder

}


const specificButton=(()=>{
  //individual button maker
  //build todos as part of a button maker
  //prebuilt buttons

})();




function defaultButton(){
  //prebuilt buttons

}

function containerBuilder(){
  const queryBody = document.querySelector(body);
  console.log(queryBody);
  const toMain =document.createElement('div');
  toMain.className = 'mainContentContainer';
  queryBody.appendChild(toMain);

  }
