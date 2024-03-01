import { Component,Input } from '@angular/core';

type colorButton  = 'primary'  | 'secondary'

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  
    @Input('btn-text') text : string = ''
    @Input() colorVariant : colorButton = 'primary'

    onSubmit(): void{
      console.log('ola')
    }
}
