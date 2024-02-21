import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  standalone: true,
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  model: string | undefined;
  manufacturers: string[] = ['Intel', 'AMD', 'Apple'];
  manufacturerSelected: string | undefined;
  compatibility: boolean | undefined;

  constructor(private router: Router) { }

  onSubmit() {
    this.router.navigate(['/output'], {
      state: {
        model: this.model,
        manufacturer: this.manufacturerSelected,
        compatibility: this.compatibility
      }
    });
  }
}
