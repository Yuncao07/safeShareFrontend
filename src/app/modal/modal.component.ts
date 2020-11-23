import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() show = true;
  @Output() onClose = new EventEmitter();

  close() {
    this.show = false;
    this.onClose.emit();  
  }


  ngOnInit(): void {
  }

}
