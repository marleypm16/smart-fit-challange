import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgOptimizedImage,BtnComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
      form : FormGroup
      constructor(){
        this.form = new FormGroup(
          {
            manha : new FormControl(),
            tarde: new FormControl(),
            noite : new FormControl(),
            unidadesFechadas: new FormControl(false)
          }
        )
      }
}
