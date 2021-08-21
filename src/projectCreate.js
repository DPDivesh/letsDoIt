const db = firebase.firestore();
const {serverTimestamp} = firebase.firestore.FieldValue;

export const createProject = (name)=>{

  let tasks= [];
  // const testFunciton =()=> {
  //   console.log('hi');
  // }

return {name,tasks, };
};

export function createTask(taskName,taskRef){
  db.collection('projects').doc(taskRef).update({
    'project.tasks':firebase.firestore.FieldValue.arrayUnion(taskName)
  });
 
};



//whats inside projects 
//subcategories inside projects and they get emojis
  //tasks go inside subcategories
  //todos go inside subcategories

  //project functions 
  