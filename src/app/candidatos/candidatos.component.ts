import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  cargos = ['Presidente', 'Governador', 'Senador', 'Dep. Federal', 'Dep. Estadual'];

  constructor(@Inject(Router) public router: Router) { }

  ngOnInit() {
  }

  selecionaCargo(cargo) {
    this.router.navigate(['candidatos', cargo]);
  }
}
