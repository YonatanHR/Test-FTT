import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router,
    public compartidoService: CompartidoService,
  ){}

  irInicio(){
    this.compartidoService.isMostrarHeader = false;
    this.router.navigate(["/"])
  }

}
