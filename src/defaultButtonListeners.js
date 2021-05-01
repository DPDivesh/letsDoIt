

//create event listeners for other default buttons

export function defaultButtonListerner(newButtonDiv){
newButtonDiv.addEventListener('click',()=>{
  console.log("working??")
})



}






//projects up down arrow
export function projectsListerner(divContainer,elementClicked){
  divContainer.addEventListener('click',()=>{
    //change state of content
    //add animation
    console.log('test');
  })
  divContainer.appendChild(elementClicked)

}
