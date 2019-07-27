import {App, Platform} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';
import {login} from './pages/login/login';
import {home} from './pages/home/home';
import {profile} from './pages/profile/profile';



@App({
  template: '<ion-menu [content]="mycontent"> <ion-toolbar><ion-title>Pages</ion-title>      </ion-toolbar>      <ion-content>        <ion-list>          <button ion-item (click)="openPage(loginPage)">            Login          </button>          <button ion-item (click)="openPage(signupPage)">            Signup          </button>        </ion-list>      </ion-content></ion-menu><ion-nav #mycontent [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  constructor(@Inject(Platform) platform) {
    this.rootPage = home;

    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }
}
