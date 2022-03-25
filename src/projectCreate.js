import {
  object
} from "firebase-functions/v1/storage";

const db = firebase.firestore();
const {
  serverTimestamp
} = firebase.firestore.FieldValue;

export const createProject = (name, taskName) => {
  return {
    name: name,
  }
};


export const createTask=((projectName, taskName, priorityLevel, dateVal)=> {
 
  //using this function and manually updating vs using built in array union
  //allows there to be multiples 
  const projectFunc = (projectName, task, priorityLevel, date) => {
    return {
      projectName,
      task,
      priorityLevel,
      date,
    };
  };

  const updateProject = (projectVals) => {
    //update project for the most part updates the task
    let projectsRef;
    // // let tasksRef;
    // let uid;
    // uid = getUserId(uid);
    projectsRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects").doc(document.title);
    projectsRef.get().then(() => {
      // console.log(doc.data().project[indexVal].tasks.arrayUnion(),'nameee');
      //https://fireship.io/snippets/read-a-single-firestore-document/
      // console.log(doc.data());
      // doc.data().project[indexVal].tasks.push(taskName);
      projectsRef.collection('tasks').add({
          tasks: projectVals
        })
        .then((docRef) => {
          projectsRef.collection('tasks').doc(docRef.id).update({id:docRef.id});
        });
      // db.collection('users').doc(firebase.auth().currentUser.uid).update("project",firebase.firestore.FieldValue.arrayUnion());
  
    })
    
    // const testFunciton =()=> {
    //   console.log('hi');
    // }
  
  };

  const projectVals = projectFunc(projectName, taskName, priorityLevel, dateVal);

  updateProject(projectVals);
  
  
  return{
  

  }
});



export const updateTask =((projectName, taskName, priorityLevel, dateVal,taskId)=>{
  let projectsRef;
  const projectVals = {projectName:projectName,
     task:taskName,
     priorityLevel:priorityLevel,
     date:dateVal}
  projectsRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects").doc(document.title);
  projectsRef.get().then(() => {

    projectsRef.collection('tasks').doc(taskId).update({
        tasks: projectVals
      })
      .then(() => {
        projectsRef.collection('tasks').doc(taskId).update({id:taskId});
      });
    // db.collection('users').doc(firebase.auth().currentUser.uid).update("project",firebase.firestore.FieldValue.arrayUnion());

  })
  return{

  }
})

export const completeTask =((taskId)=>{
  let projectsRef;
  
  projectsRef = db.collection('users').doc(firebase.auth().currentUser.uid).collection("projects").doc(document.title);
  projectsRef.get().then(() => {

    projectsRef.collection('tasks').doc(taskId).update({
        tasks: "task-completed"
      })
      .then(() => {
        projectsRef.collection('tasks').doc(taskId).update({id:taskId});
      });
    // db.collection('users').doc(firebase.auth().currentUser.uid).update("project",firebase.firestore.FieldValue.arrayUnion());

  })
  return{

  }
})


// whats inside projects 
// subcategories inside projects and they get emojis
// tasks go inside subcategories
// todos go inside subcategories

// project functions 