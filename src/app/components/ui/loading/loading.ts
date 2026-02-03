import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  template: `
    <div class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">{{ message }}</span>
      </div>
      <p class="mt-3">{{ message }}</p>
    </div>
  `,
  styles: []
})
export class LoadingComponent {
  @Input() message: string = 'Loading...';
}