import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  cargo = '';
  candidatos = ['1', '2', '3'];

  sub: any;

  constructor(@Inject(ActivatedRoute) public route: ActivatedRoute,
    @Inject(Router) public router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.cargo = params['cargo'];
    });
  }

  retornaNavegacao() {
    this.router.navigate(['candidatos']);
  }
}
