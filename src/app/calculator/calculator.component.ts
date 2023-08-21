import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  x: number = 0;
  y: number = 0;
  result: number = 0;
  constructor(private svc: CalculatorService) { }

  ngOnInit(): void {
  }

  Add()
  {
      this.result = this.svc.Add(this.x, this.y);
  }
  Subtract()
  {
      this.result = this.svc.Subtract(this.x, this.y);
  }
  Multiply()
  {
      this.result = this.svc.Multiply(this.x, this.y);
  }
  Divide()
  {
      this.result = this.svc.Divide(this.x, this.y);
  }

}
