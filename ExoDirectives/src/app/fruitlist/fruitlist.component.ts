import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
    listDeFruit = ['mangue','zorange','zannana','banane'];

    condition1 = true;
    condition2 = false;

    
}
