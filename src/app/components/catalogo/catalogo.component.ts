import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseAllPhotos } from 'src/app/interfaces/request.interface';
import { ApiService } from 'src/app/services/api.service';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit{

  respuestaImagenes = {} as ResponseAllPhotos;

  constructor(
    public apiService: ApiService,
    public compartidoService: CompartidoService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.compartidoService.isMostrarHeader = true;
    this.apiService.consultaFotos()
      .subscribe({
        next: (res) => {
          console.log('Response GET /catalogos', res);
          this.respuestaImagenes = res;
        },
        error: (error) => {
          console.log('Falló GET /catalogos: ', error);
        },
        complete: () => { },
      });
  }


  //Recupera el id de la imagen seleccionada para mandarla con paramétro en URL y redirigir a la página de "imagen"
  verItem(id: number){
    this.compartidoService.isMostrarHeader = true;
    this.router.navigate(["/imagen", id]);
  }

}
