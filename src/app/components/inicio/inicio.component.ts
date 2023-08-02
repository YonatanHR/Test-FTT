import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

  constructor(
    private router: Router,
    public compartidoService: CompartidoService,
  ){}


  ngOnInit(): void {
    this.compartidoService.isMostrarHeader = false;
  }


  //Te redirige a la pantalla de catálogo
  irCatalogo(){
    this.router.navigate(['/catalogo']);
  }


}
