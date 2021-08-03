const db = firebase.firestore();
const {serverTimestamp} = firebase.firestore.FieldValue;

export const createProject = (name)=>{
  let projectParts ={
    name:name
    }
  let tasks= [];
  // const testFunciton =()=> {
  //   console.log('hi');
  // }

return {name,tasks,projectParts, };
};

export const createTask = (name)=>{
  let tasks= [];
  // const testFunciton =()=> {
  //   console.log('hi');
  // }

return {name,tasks,projectParts, };
 
};



//whats inside projects 
//subcategories inside projects and they get emojis
  //tasks go inside subcategories
  //todos go inside subcategories

  //project functions 
  