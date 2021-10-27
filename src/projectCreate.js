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
  let projectName = name;
  let tasks= [];
  // let projectsRef;
  // // let tasksRef;
  let uid;
  getUserId(uid);
  console.log(uid,'uid');
  //   projectsRef =  db.collection('users').where('uid','==', firebase.auth().currentUser.uid)
    // tasksRef = projectsRef.where('name','==',document.title).orderBy('createdAt')
    // tasksRef =  projectsRef.doc.data().tasks;

   
    // projectsRef.get().then((doc) =>{
    //   console.log(doc[0].data(),'name');
    //   //https://fireship.io/snippets/read-a-single-firestore-document/
    //   // console.log(doc.data());
    //     let task = querySnapshot.docs.map(doc =>{
    //       console.log(doc.data(),'length');
    //      //work this out 
    //      //maybe send this to a function to build and loop through array
    //      let taskHolder =[]
    //      for(let i=0; i<doc.data().project.tasks.length;i++){
    //      console.log(taskHolder,'taskholder');
    //      if(taskHolder.length==doc.data().project.tasks.length){
    //        console.log(taskHolder);
    //        return taskHolder.join('   ');
    //      }

    //      }
     
    //    }); 

    //       })
  tasks.push(taskName);
  // const testFunciton =()=> {
  //   console.log('hi');
  // }

return {name,tasks, };
};

async function getUserId(uid){
  const projectsRef = await db.collection('users').where('uid','==', firebase.auth().currentUser.uid).get();
console.log('projkekdkd');
  if (!projectsRef.empty){
    const snapshot = projectsRef.docs[0];
    const data = snapshot.data();
    console.log(data.uidt);
    uid = data;
    return uid;
  }
  else{
    console.log('not found')
  }

}

export function createTask(taskName,taskRef,projectName,taskDoc){
  console.log("update Project")
//  let index = taskRef.findIndex(tasks=> tasks===`[${projectName}]`);
 
  db.collection('users').doc('sovU3DmGyLVxvInHjJp5N5L7Wkj1'
    ).update("project",firebase.firestore.FieldValue.arrayUnion(updateProject(projectName,taskName)));
 
};


//whats inside projects 
//subcategories inside projects and they get emojis
  //tasks go inside subcategories
  //todos go inside subcategories

  //project functions 