import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagenes } from 'src/app/interfaces/request.interface';
import { ApiService } from 'src/app/services/api.service';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss']
})
export class ImagenComponent implements OnInit {

  imagenById = {} as Imagenes;
  datosTabla: any;
  columnas = [
    {header: "Vistas", field: "views"},
    {header: "Likes", field: "likes"},
    {header: "Comentarios", field: "comments"},
    {header: "Descargas", field: "downloads"},
  ]

  constructor(
    public apiService: ApiService,
    public compartidoService: CompartidoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.compartidoService.isMostrarHeader = true;
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      if (params.get('id')) {
        this.consultaById(Number (params.get('id')));
      }
    });
  }


  //Consulta la imagen con el id que devuelve la ruta
  consultaById(id: number){
    this.apiService.consultaFotosById(id)
      .subscribe({
        next: (res) => {
          console.log('Response GET /catalogos por ID ', res);
          this.imagenById = res.hits[0];
          this.datosTabla = res.hits;
        },
        error: (error) => {
          console.log('Falló GET /catalogos por ID: ', error);
        },
        complete: () => { },
      });
  }

  //Te devuelve a la página de catálogos
  regresar(){
    this.router.navigate(["/catalogo"]);
  }


}
