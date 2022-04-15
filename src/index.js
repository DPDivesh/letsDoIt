import { allContentErase, mainContentErase } from './addedButtons';
import { defaultButtonListener } from './defaultButtonListeners';
import { createProject } from './projectCreate';

import {webPageBuilder} from './webPageBuilder';
const db = firebase.firestore();

const login =(()=>{
  const authLog = ()=>{
    const auth = firebase.auth(); 
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.onAuthStateChanged(user=>{
   
      if(user){

  
        webPageBuilder();
      
    }
        else{
          
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

          signInInnerLayer.append(googleSignIn);
          googButton.onclick = ()=>{ auth.signInWithPopup(provider).then((result)=>{
            allContentErase();
            if(result.additionalUserInfo.isNewUser == true){
              const {serverTimestamp
              } = firebase.firestore.FieldValue;
              const newUser = db.collection('users').doc(result.user.uid);
                newUser.set({
                  uid: result.user.uid,
                  userName: result.user.displayName,
                  email: result.user.email,
                  createdAt: serverTimestamp()
                })   
                  // newUser.collection("projects").doc('demo').collection('tasks').doc('demo');
                  newUser.collection("projects").add({project:{name:"demo"},
                }).then((docRef) => {
                    newUser.collection("projects").doc(docRef.id).update({id:docRef.id
                    });
                  });
                  defaultButtonPageBuilders.notificationPage();

              }


              

                else{
                  allContentErase();
                  defaultButtonPageBuilders.notificationPage();

                }
          });
          
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



