import { Component } from '@angular/core';
import { FormComponent } from './form.component';
import { CalculatorComponent } from './calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {}
