import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngMVCEtWebAPI';

  constructor(public account:AccountService){
  }

  async register(){
    try{
      await this.account.register();
    }
    catch(e){
      alert("Erreur pendant l'enregistrement!!!!!");
      return;
    }
    alert("L'enregistrement a été un succès!");
  }

  async login(){
    await this.account.login();
  }

  async logout(){
    await this.account.logout();
  }

  async publicCall(){
    await this.account.publicCall();
  }

  async privateCall(){
    await this.account.privateCall();
  }

  isLoggedIn() : Boolean{
    return this.account.isLoggedIn();
  }
}
