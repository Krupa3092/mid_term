import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
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
