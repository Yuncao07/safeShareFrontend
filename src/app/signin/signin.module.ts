import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SigninComponent } from './signin.component';

@NgModule({
    declarations: [
        SigninComponent
    ],
    imports: [CommonModule],
    exports: [SigninComponent],
    providers: [],
    bootstrap: [SigninComponent]
})
export class SigninModule {}
