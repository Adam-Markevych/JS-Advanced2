import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public arr : Array<any> = [];
  public obj = {};
  public login!: string;
  public password!: any;
  public email!: any;
  public expression = true;
  public saveIndex!: number;
  public btnDel_disabled = false
  public logregxp: RegExp = /^[a-zA-z]{3,16}$/; 
  public passregxp: RegExp = /^[a-zA-Z0-9_]{4,16}$/;
  public emailregxp: RegExp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  public logExp: any; 
  public passExp: any;
  public emailExp: any;
  public check_btnAdd = false;
  public red1 = false;
  public green1 = false;
  public red2 = false;
  public green2 = false;
  public red3 = false;
  public green3 = false;

  constructor(){}

  checkLogin(): void {
    this.logExp = this.logregxp.test(this.login);
    if(this.logExp){
      this.red1 = false;
      this.green1 = true;
      this.check_btnAdd = false;
    } 
    else {
       this.red1 = true;
       this.green1 = false;
    }
  }
  checkPassword(): void {
    this.passExp = this.passregxp.test(this.password);
    if(this.passExp){
      this.red2 = false;
      this.green2 = true;
      this.check_btnAdd = false;
    } 
    else {
       this.red2 = true;
       this.green2 = false;
    }
  }
  checkEmail(): void{
    this.emailExp = this.emailregxp.test(this.email);
    if(this.emailExp){
      this.red3 = false;
      this.green3 = true;
      this.check_btnAdd = false;
    } 
    else {
       this.red3 = true;
       this.green3 = false;
    }
  }
  addUser(): void{
    if(this.login.length != 0 && this.password.length != 0 && this.email.length != 0 && this.logExp && this.emailExp && this.passExp ){
      this.check_btnAdd = false;
      this.obj = {
        login: this.login,
        password: this.password,
        email: this.email
      }
      this.arr.push(this.obj);
      console.log(this.obj);
      this.login = '';
      this.password ='';
      this.email = '';
      this.red1 = false;
      this.green1 = false;
      this.red2 = false;
      this.green2 = false;
      this.red3 = false;
      this.green3 = false;
    }
    else{
      this.check_btnAdd = true;
    }
  }
  deleteUser(index: number): void{
    this.arr.splice(index, 1);
  }
  editUser(index: number): void{
   this.btnDel_disabled = true;
   this.expression = false;
   this.saveIndex = index;
   this.login = this.arr[index].login;
   this.password = this.arr[index].password;
   this.email = this.arr[index].email;
  }
  save_EditUser(): void{
    if(this.login.length != 0 && this.password.length != 0 && this.email.length != 0 && this.logExp && this.emailExp && this.passExp ){
      let newObj = {
        login: this.login,
        password: this.password,
        email: this.email
      }
      this.arr[this.saveIndex] = newObj;
      this.login = '';
      this.password ='';
      this.email = '';
      this.expression = true;
      this.btnDel_disabled = false;
      this.red1 = false;
      this.green1 = false;
      this.red2 = false;
      this.green2 = false;
      this.red3 = false;
      this.green3 = false;
    }
    else{
      this.check_btnAdd = true;
    }
    
  }
}
