import {Platform, Page, ActionSheet, NavController,nav} from 'ionic-framework/ionic';
import {Http, httpInjectables} from 'angular2/http';
@Page({
  templateUrl: 'build/pages/home/home.html'
})

export class home {
message;

 people: Object;

    constructor( public platform: Platform,
    public nav: NavController) {
 
  this.user = "Kush";
  this.messages = [];

  var ref = new Firebase("https://ymt.firebaseio.com/chat");
  
	
	
	this.sendMessage=function(){
console.log(this.message);
  var d = new Date();
  var n = d.getTime();
 ref.child(n).child("message").set(this.message);
  ref.child(n).child("who").set(this.user);
   ref.child(n).child("date").set(n);
	ref.child("last").set(n);
	};


 ref.on("value", function(data) {

 var reff= data.child(data.child("last").val()).val();
    messages=data.val();
	var arr=messages;
	delete arr["last"]; 
	messages=arr;
	console.log(messages);
  });
	

	
	 this.openMenu=function() {
	 
	 console.log(this.people);
    let buttonHandler = (index) => {
      console.log('Button clicked', index);
      if (index == 1) { return false; }
      return true;
    }

    if (this.platform.is('android')) {
      var androidSheet = {
        title: 'Chat Room',
        buttons: [
          { text: 'Global',
            handler: buttonHandler,
            icon: 'md-globe'
          },
          { text: 'Country',
            handler: buttonHandler,
            icon: 'arrow-dropright-circle'
          },
          { text: 'City',
            handler: buttonHandler,
            icon: 'md-heart-outline'
          },
          { text: 'Nearby',
            handler: buttonHandler,
            icon: 'md-heart-outline'
          },
          {
            text: 'Cancel',
            icon: 'md-close',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ],
      };
    }

    let actionSheet = ActionSheet.create( androidSheet || {
      buttons: [
        {
          text: 'Global',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Country',
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'City',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Nearby',
          style: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Cancel',
          style: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    this.nav.present(actionSheet);
  }


	
	}
}

