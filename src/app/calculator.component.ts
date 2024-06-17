import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface HistoryEntry {
  time: string;
  firstNumber: number;
  operation: string;
  secondNumber: number;
  result: number;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule] // Import FormsModule here
})
export class CalculatorComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
  operation: string = '+';
  result: number | null = null;
  history: HistoryEntry[] = [];
  operations: string[] = ['+', '-', '*', '/'];

  calculate() {
    let res: number;
    switch (this.operation) {
      case '+':
        res = this.firstNumber + this.secondNumber;
        break;
      case '-':
        res = this.firstNumber - this.secondNumber;
        break;
      case '*':
        res = this.firstNumber * this.secondNumber;
        break;
      case '/':
        res = this.secondNumber !== 0 ? this.firstNumber / this.secondNumber : NaN;
        break;
      default:
        res = NaN;
        break;
    }
    this.result = res;
    this.addToHistory(res);
  }

  addToHistory(res: number) {
    const entry: HistoryEntry = {
      time: new Date().toLocaleString(),
      firstNumber: this.firstNumber,
      operation: this.operation,
      secondNumber: this.secondNumber,
      result: res
    };
    this.history.push(entry);
  }

  removeHistory(index: number) {
    this.history.splice(index, 1);
  }
}
