import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],  
    standalone: true, 
   
})
export class LoginComponent {
constructor() {
        console.log("LoginComponent initialized");
    }

    username: string = '';
    password: string = '';

    login() {
        // Implement login logic here
        console.log('Login attempted with', this.username, this.password);
    }
}