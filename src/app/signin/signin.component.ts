import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  @Output() success = new EventEmitter();
    loggedIn = false;

    login(username: string, password: string) {
        if (username === "Yun" && password === "123") {
          this.loggedIn = true;
          this.success.emit();
        } else {
          alert('Invalid login');
        }
        return false;
      }
}