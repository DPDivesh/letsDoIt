import {
  object
} from "firebase-functions/v1/storage";

const db = firebase.firestore();
const {
  serverTimestamp
} = firebase.firestore.FieldValue;

export const createProject = (name) => {
  return {
    name: name,
    
  }
};
export const docID = ()=>{
  let buttonsNode = document.querySelectorAll('.projectTitle');
  let buttonsArray = [...buttonsNode];
  let buttonIDValue;
  buttonsArray.forEach((button)=>{
    if(button.innerHTML == document.title){
      buttonIDValue = button.id
    }
  })
  return buttonIDValue
}

export const createTask=((projectName, taskName, priorityLevel, dateVal)=> {
 
  //using this function and manually updating vs using built in array union
  //allows there to be multiples 
  const projectFunc = (projectName, task, priorityLevel, date) => {
    return {
      projectName,
      task,
      priorityLevel,
      date,
      id:docUID,
    };
  };

    const docUID=docID();
    
  const updateProject = (projectVals) => {
    let projectsRef;
  
  

    projectsRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects").doc(docUID);
    projectsRef.get().then(() => {
    
      projectsRef.collection('tasks').add({
          tasks: projectVals
        })
        .then((docRef) => {
          projectsRef.collection('tasks').doc(docRef.id).update({id:docRef.id,      userId:firebase.auth().currentUser.uid,
          });
        });
  
    })
    
  
  };

  const projectVals = projectFunc(projectName, taskName, priorityLevel, dateVal);

  updateProject(projectVals);
  
  
  return{
  

  }
});



export const updateTask =((projectName, taskName, priorityLevel, dateVal,taskId,docId)=>{
  let projectsRef;

  const projectVals = {projectName:projectName,
     task:taskName,
     priorityLevel:priorityLevel,
     date:dateVal,
     id:docId,
    userId:firebase.auth().currentUser.uid}
  projectsRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects").doc(docId);
  projectsRef.get().then(() => {

    projectsRef.collection('tasks').doc(taskId).update({
        tasks: projectVals
      })
      .then(() => {
        projectsRef.collection('tasks').doc(taskId).update({id:taskId,      userId:firebase.auth().currentUser.uid,
        });
      });

  })
  return{

  }
})

export const completeTask =((taskId,docId)=>{
  let projectsRef;
  
  projectsRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects").doc(docId).collection('tasks').doc(taskId);
  projectsRef.get().then((doc) => {

    projectsRef.update({
        tasks:{ status:"task-completed",task:doc.data().tasks.task},
        id:taskId
      })

  })
  return{

  }
})


// whats inside projects 
// subcategories inside projects and they get emojis
// tasks go inside subcategories
// todos go inside subcategories

// project functions 