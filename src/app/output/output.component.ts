import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  standalone: true,
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  model: string | undefined;
  manufacturer: string | undefined;
  compatibility: boolean | undefined;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const state = this.route.snapshot.data;
    this.model = state['model'];
    this.manufacturer = state['manufacturer'];
    this.compatibility = state['compatibility'];
  }

  goBack() {
    this.router.navigate(['/input']);
  }
}
