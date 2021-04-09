console.log('test yo');
import doTheThing from "./defaultNav";
let navObject ={

   defaultNavButtons : [],


}
console.log(navObject.defaultNavButtons)
doTheThing(navObject);
console.log(navObject.defaultNavButtons,'status')

export default navObject;