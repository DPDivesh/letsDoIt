//ideas
//#1 Have the buttons have an event Listener to call each function could module pattern for security
const db = firebase.firestore();

export function mainContentBuilder(){
  //create container
  //Determine what page we're on if we dont use function call event listeners or make this a constructor and have the event listener call said constructor
  //example *click button* calls specificButton.Today();
  //newProjectBuilder
  mainContainerBuilder();

}


const specificButton=(()=>{
  //individual button maker
  //build todos as part of a button maker
  //prebuilt buttons

})();




function defaultButton(){
  //prebuilt buttons

}

function mainContainerBuilder(){
  const queryBody = document.body;
  console.log(queryBody);
  const toMain =document.createElement('div');
  toMain.className = 'mainContentContainer';
  queryBody.appendChild(toMain);

  }

  export function addedButtonTaskView(queryValue){
    let projectsRef;
    let unsubscribe;
    let mainContent = document.querySelector(".mainContentContainer");
    mainContent.style.backgroundColor="red";
    console.log('yoo',queryValue,firebase.auth().currentUser.uid);
    unsubscribe = projectsRef;
    projectsRef = db.collection('projects').where('uid','==', firebase.auth().currentUser.uid)
    // console.log(projectsRef);
    .onSnapshot(querySnapshot =>{
      querySnapshot.forEach((doc)=>{
        // console.log('echeckinnn',doc.data().name)
        if(queryValue == doc.data().name ){
             console.log(doc.data().name,'the doc name');
             //in here we're gonna grab the tasks
             // and either append them with a class and make the style 
             //here or find a another method
             //maybe have this whole function call a format after wiping one
             addedContentLayout();

        }
      })
    });
  };

function addedContentLayout(){
  console.log("making layout")
createTaskSubmitCircle();

}

function createTaskSubmitCircle(){
console.log('making circle');
let mainContent = document.querySelector('mainContentContainer');
let circle = document.createElement('div');
circle.className='circleSubmit';
console.log('huh')

circle.addEventListener('click',()=>{console.log('circle technique')
console.log('huh')
})
mainContent.append(circle);

console.log(document.querySelector('.circleSubmit'))

}