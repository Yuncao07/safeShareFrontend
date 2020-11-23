import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ModalComponent } from './modal.component';

@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [CommonModule],
    exports: [ModalComponent],
    providers: [],
    bootstrap: [ModalComponent]
})
export class ModalModule {}