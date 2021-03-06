import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app-component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Conoce tu aula',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Calendario',
      url: '/calendar',
      icon: 'calendar'
    },
    {
      title: 'Mis tareas',
      url: '/tasks',
      icon: 'briefcase'
    },
    {
      title: 'Profesor',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Sobre',
      url: '/about',
      icon: 'information-circle-outline'
    }
  ];

  lastConnectionDate: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['access']);
        }
      });
    });
  }
}
