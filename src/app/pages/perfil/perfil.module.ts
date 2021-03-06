import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilPage } from './perfil.page';

import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ProfeService } from 'src/app/services/profesor.service';



const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilPage],
  providers: [
    EmailComposer, ProfeService
  ]
})
export class PerfilPageModule {}
