

export const createProject = (name)=>{
  let projectPart ={
    name:name 
  }
  let tasks= ['test1','test2','test3'];
  const readTasks = ()=>{
    for(let i=0;i<tasks.length;i++){
      console.log(tasks[i]);
    }
  }
return {name,tasks, readTasks,projectPart};
};

//whats inside projects 
//subcategories inside projects and they get emojis
  //tasks go inside subcategories
  //todos go inside subcategories

  