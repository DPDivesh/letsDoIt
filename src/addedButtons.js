import {addedButtonTaskView} from "./mainContentBuilder";
let unsubscribe;
let projectsRef;

export function addedButtonEventListener(){
    let getButtons = document.querySelectorAll('.addedButtons');
    console.log(getButtons,'getttin buttonsdsadas');
    getButtons.forEach(button=>
        button.addEventListener('click', (e)=>{
            console.log('this is a button click test',e.target.textContent)
            //grab the names tasks and format them 
            //use generic format functiion (make one)
            //that function will be used to create more
            //send the info and query at the generic function 
            addedButtonTaskView(e.target.textContent);
        }))
    
}