import {Platform, Page, Alert,  ActionSheet,NavController} from 'ionic-framework/ionic';
import {home} from '../home/home';
@Page({
  templateUrl: 'build/pages/first/first.html'
})

export class profile {

 static get parameters() {
    return [[NavController]];
  }
    constructor(nav) {
   this.nav=nav;
  let ref = new Firebase("https://askp.firebaseio.com/");
	let moveReady=false; 
	
	
this.logingoogle=function(){ref.authWithOAuthPopup("google", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
   
    nav.push(home);
  
  }
});};


this.loginaskp=function(){
this.nav.push(home);

};


	}
}

