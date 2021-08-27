import { defaultButtonListerner } from './defaultButtonListeners';

import {webPageBuilder} from './webPageBuilder';
const db = firebase.firestore();

const login =(()=>{
  const authLog = ()=>{
    const auth = firebase.auth(); 
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.onAuthStateChanged(user=>{
    let userDb;
    console.log(userDb,' info');
     db.collection('users').where('uid','==', user.uid)
    .get()
    .then((querySnapshot)=>{
      querySnapshot.docs.forEach(doc=>{
        userDb = doc.data();
        return userDb 
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ",'Generating New File', error);
     
    
  });
    console.log(userDb,' info');
      // we can only read the .uid within the query 





      // useless 
      let uidQuery = db.collection('users').where(user.uid,'==','uid');
      console.log(uidQuery.email);
      if(uidQuery.uid != undefined){
      console.log('welcome',user.displayName,user.email);
      console.log(db.collection('users').where('uid','==',user.uid).uid);
      // document.querySelector('.site-login').remove();
      // AdditionalUserInfo:{isNewUser:}
      //move the qualifier above?
      console.log(db.collection('users').where(user.uid,'==','uid'));
      db.collection('users').where(user.uid,'==','uid')
      .get()
      .then((querySnapshot)=>{
        querySnapshot.docs.map(doc =>{
          console.log(doc.data().uid,'uid')
            console.log('is there files')
            webPageBuilder();
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ",'Generating New File', error);
       
          const {serverTimestamp
        } = firebase.firestore.FieldValue;
  
          db.collection('users').doc(user.id).set({
            uid: user.uid,
            userName: user.displayName,
            email: user.email,
            createdAt: serverTimestamp()
  
      
          })
      
    });

      
    }
        else{
          console.log('User Logged Out',user.uid, db.collection('users').where(user.uid,'==','uid').uid);
          let createSubmitComponent = document.createElement('div');
          createSubmitComponent.className = 'site-login';
          let createBackgroundComponent = document.createElement('div');
          createBackgroundComponent.className = 'site-login_innerLayer';
          let googleSignIn = document.createElement('div');
          googleSignIn.className ="goog-sign-in";
          let googButton = document.createElement('button');
          googButton.className="goog-button";
          let googImg = document.createElement('img');
          googImg.className='goog-logo';
          googImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png'
          googImg.alt='Google Logo';
          let googText = document.createElement('p');
          googText.innerHTML='Sign in with Google'
          googText.className='goog-text';
          googButton.appendChild(googImg);
          googButton.appendChild(googText);
          googleSignIn.appendChild(googButton)
          createBackgroundComponent.style.backgroundColor="#FFFFF";
          let contentDocuement = document.body;

          contentDocuement.appendChild(createSubmitComponent);
          createSubmitComponent.appendChild(createBackgroundComponent);
          let signInInnerLayer = document.querySelector('.site-login_innerLayer');

          console.log(googleSignIn);
          signInInnerLayer.append(googleSignIn);
          googButton.onclick = ()=>{ auth.signInWithPopup(provider);
            if(db.collection('users').where(user.uid,'==','uid').uid == undefined){
            const {serverTimestamp
            } = firebase.firestore.FieldValue;
      
              db.collection('users').doc(user.id).set({
                uid: user.uid,
                userName: user.displayName,
                email: user.email,
                createdAt: serverTimestamp()
      
              })}
            }

        }
      
    });

  };
  return{
    authLog
  }
})();
// login.authLog();
login.authLog();



