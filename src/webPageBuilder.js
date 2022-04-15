import {navBarBuilder} from "./navBarBuilder";

import {defaultButtonTaskView, mainContentBuilder} from './mainContentBuilder';

import { defaultButtonPageBuilders } from "./defaultButtons";
export function webPageBuilder(){
  navBarBuilder();
  mainContentBuilder(); 
  document.title = "Notifications"
  defaultButtonTaskView("Notifications");
  defaultButtonPageBuilders.notificationPage();
  // defaultButtonPageBuilders.notificationPage();

}