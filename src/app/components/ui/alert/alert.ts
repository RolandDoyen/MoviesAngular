import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      *ngIf="message"
      [class]="'alert message-box ' + (type === 'success' ? 'alert-success' : 'alert-danger')"
    >
      {{ message }}
      <button 
        type="button" 
        class="btn-close float-end" 
        (click)="onClose()"
        aria-label="Close"
      ></button>
    </div>
  `,
  styles: []
})
export class AlertComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success';
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}