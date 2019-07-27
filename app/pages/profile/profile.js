import {Platform, Page, Alert,  ActionSheet,NavController} from 'ionic-framework/ionic';
import {home} from '../home/home';
@Page({
  templateUrl: 'build/pages/profile/profile.html'
})

export class profile {

 static get parameters() {
    return [[NavController]];
  }
    constructor(nav) {
   this.nav=nav;
	let moveReady=false; 


this.loginaskp=function(){
this.nav.push(home);

};


	}
}

