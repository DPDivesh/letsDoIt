import { object } from "firebase-functions/v1/storage";

const db = firebase.firestore();
const {serverTimestamp} = firebase.firestore.FieldValue;

export const createProject = (name,taskName)=>{
  let projectName = name;
  let tasks= [];
  // const testFunciton =()=> {
  //   console.log('hi');
  // }

return {name,tasks, };
};

  const updateProject = (name,taskName)=>{
    console.log("update project start")
  let tasks= [];
  let projectsRef;
  // // let tasksRef;
  // let uid;
  // uid = getUserId(uid);
    projectsRef =  db.collection('users').doc(firebase.auth().currentUser.uid);
   console.log(taskName,'tasknameeee', name,'nameeee')
    projectsRef.get().then((doc) =>{
    let indexVal = doc.data().project.findIndex(element=>element.name == name)
    console.log(indexVal);
      console.log(doc.data().project[indexVal].tasks,'nameee');
      //https://fireship.io/snippets/read-a-single-firestore-document/
      // console.log(doc.data());
      // doc.data().project[indexVal].tasks.push(taskName);
      db.collection('users').doc(firebase.auth().currentUser.uid).update("project",firebase.firestore.FieldValue.arrayUnion());
      // doc.data().project[indexVal].tasks.set({
      //   task:taskName
      // }, {merge:true})
    
          })
  // const testFunciton =()=> {
  //   console.log('hi');
  // }

return {name,tasks, };
};

// async function getUserId(uid){
//   console.log("promise?")
//   const projectsRef = await db.collection('users').where('uid','==', firebase.auth().currentUser.uid).get();
// console.log('projkekdkd');
//   if (!projectsRef.empty){
//     const snapshot = projectsRef.docs[0];
//     const data = snapshot.data();
//     console.log(data.uid);
//     uid = data;
//     return uid;
//   }
//   else{
//     console.log('not found')
//   }

// }

export function createTask(taskName,taskRef,projectName,taskDoc){
  console.log("update Project")
//  let index = taskRef.findIndex(tasks=> tasks===`[${projectName}]`);
 
  // db.collection('users').doc(firebase.auth().currentUser.uid
  //   ).update("project",firebase.firestore.FieldValue.arrayUnion());
 //using this function and manually updating vs using built in array union
 //allows there to be multiples 
  updateProject(projectName,taskName);
};


//whats inside projects 
//subcategories inside projects and they get emojis
  //tasks go inside subcategories
  //todos go inside subcategories

  //project functions 