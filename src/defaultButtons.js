import {
  emoji
} from './navBarBuilder';
import {
  projectsExpandListerner,
  projectsAddListerner,
  defaultButtonListerner
} from './defaultButtonListeners';
//Notification
//Today
//This week
//This month
let defaultButtons = [];


export const defaultNotifications = () => {
  let pageState = {
    name: "Notifications",
    emoji: emoji.Notifications,
    id: 'notifPage'
  }

  let objectFunctions = {
    makePage: () => {
      console.log("Notifications Page");
      notificationPage();
    }
  }
  return Object.assign({},
    createButton(pageState), objectFunctions, pageState
  )

}

export const defaultToday = (name) => {
  let pageState = {
    name: "Today",
    emoji: emoji.Today,
    id: 'TodayPage'
  }
  let objectFunctions = {
    makePage: () => {
      console.log("Today Page");
      todayPage();

    }
  }
  return Object.assign({},
    createButton(pageState), objectFunctions, pageState
  )
}

export const defaultWeek = () => {
  let pageState = {
    name: 'This Week',
    emoji: emoji.thisWeek,
    id: "weekPage"
  }
  let objectFunctions = {
    makePage: () => {
      console.log("Week Page");
      weekPage();
    }
  }
  return Object.assign({},
    createButton(pageState), objectFunctions, pageState
  )
}


export const defaultMonth = () => {
  let pageState = {
    name: 'This Month',
    emoji: emoji.thisMonth,
    id: 'monthPage'
  }
  let objectFunctions = {
    makePage: () => {
      console.log("Month Page");
      monthPage();
    }
  }
  return Object.assign({},
    createButton(pageState), objectFunctions, pageState
  )
}

//create assignment objects for values
//things in common
//property to build button with listener and
//change page to the state of what is chosen
//



const createButton = (pageState) => ({

  build: () => {
    console.log(pageState.name + "hi")
    let buttonLocation = document.querySelector('.defaultButtonContainer');
    let newButton = document.createElement('div');
    let newButtonText = document.createElement('p');
    let buttonIcon = document.createElement('img');
    newButton.id = pageState.id;
    buttonIcon.src = pageState.emoji;
    buttonIcon.className = 'buttonIcon';
    defaultButtonListerner(newButton, defaultButtons);

    newButton.append(buttonIcon);
    newButton.className = 'defaultButtons';
    console.log(buttonLocation);
    buttonIcon.style.marginLeft = '12%';
    newButtonText.innerHTML = pageState.name;
    newButton.append(newButtonText);
    buttonLocation.appendChild(newButton);
    console.log(buttonLocation, 'hi');


  }

})





export function addProjects() {
  //make container and font for projects
  const queryNav = document.querySelector('.navContentContainer');
  let projectsAdd = document.createElement('div');
  projectsAdd.className = ('projectsNav');
  //create close/expand tab for projects
  // const projectExpand = document.createElement('img');
  // projectExpand.src = emoji.arrowExpand;
  // projectExpand.className = 'imgExpand';
  // console.log('imma test');
  // projectsExpandListerner(projectExpand);
  // projectsAdd.appendChild(projectExpand);
  //create projects text
  let projectsText = document.createElement('p');
  projectsText.innerHTML = "Projects";
  projectsAdd.appendChild(projectsText);
  queryNav.appendChild(projectsAdd);
  //create the add new projects button
  let buttonExpandIcon = document.createElement('img');
  buttonExpandIcon.src = emoji.plusIcon;
  buttonExpandIcon.className = 'imgExpand';
  projectsAddListerner(buttonExpandIcon);
  projectsAdd.appendChild(buttonExpandIcon);
}

export function projectViewAllButton(projectHold) {
  const projectViewAll = document.createElement('input');
  projectViewAll.type = 'submit';
  projectViewAll.value = 'View All Projects';
  projectViewAll.className = 'viewAllProjectsButton';
  projectHold.appendChild(projectViewAll);


};

//create pages
function notificationPage() {
  console.log("hey it's Zuko here");
  document.querySelector('body').style.color='red';
  let notifArea = document.querySelector('.mainContentContainer');

};

function todayPage() {
  document.querySelector('body').style.color='blue';
  console.log("hey it's Zuko here");
};

function weekPage() {
  document.querySelector('body').style.color='orange';

  console.log("hey it's Zuko here");
};

function monthPage() {
  document.querySelector('body').style.color='pink';

  console.log("hey it's Zuko here");
};


const todos = (() => {
  //make todos for each default button

})();

export {
  defaultButtons
}
