import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
