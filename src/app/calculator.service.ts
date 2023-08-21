import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService 
{
  constructor() { }

  public Add(x: number, y: number): number
  {
    return (x + y);
  }
  public Subtract(x: number, y: number): number
  {
    return (x - y);
  }
  public Multiply(x: number, y: number): number
  {
    return (x * y);
  }
  public Divide(x: number, y: number): number
  {
    return (x / y);
  }
}
