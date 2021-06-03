import {webPageBuilder} from './webPageBuilder';

const login =(()=>{
  const authLog = ()=>{
    const auth = firebase.auth(); 
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signOut();
//-----------------------------
console.log('does it work')
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

//create event listener for form to send to factory function
//submit event listener

//cancel event listener 
// cancelButton.addEventListener('click',(e)=>{
//   e.preventDefault();
// //  exitForm();
// })
googButton.onclick = ()=> auth.signInWithPopup(provider);
// signOutButton.onclick =()=>{ auth.signOut();
//   document.querySelector('.site-login').remove();

// };
//---------------------
    auth.onAuthStateChanged(user=>{
      if(user){
      console.log('welcome',user.displayName);
      document.querySelector('.site-login').remove();

      webPageBuilder();

      }
        else{

        }
      
    });

  };
  return{
    authLog
  }
})();
login.authLog();


console.log(firebase);

