import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngMVCEtWebAPI';
  result = "";

  constructor(public account:AccountService){
  }

  async register(){
    try{
      await this.account.register();
    }
    catch(e:any){
      console.log(e);
      alert("Erreur pendant l'enregistrement: " + e.message);
      return;
    }
    alert("L'enregistrement a été un succès!");
  }

  async login(){
    try{
      await this.account.login();
    }
    catch(e:any){
      console.log(e);
      alert("Erreur pendant la connexion: " + e.message);
    }
  }

  async logout(){
    await this.account.logout();
  }

  async publicCall(){
    try{
      let resultArray = await this.account.publicCall();
      this.result = resultArray.toString();
    }
    catch(e:any){
      console.log(e);
      this.result = e.message;
    }
  }

  async privateCall(){
    try{
      let resultArray = await this.account.privateCall();
      this.result = resultArray.toString();
    }
    catch(e:any){
      console.log(e);
      this.result = e.message;
    }
  }

  isLoggedIn() : Boolean{
    return this.account.isLoggedIn();
  }
}
