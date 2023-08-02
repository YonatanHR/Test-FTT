import { Component } from '@angular/core';
import { CompartidoService } from './services/compartido.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public compartidoService: CompartidoService,
  ){}

  title = 'examen-ftt';
}
