import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clienti',
  imports: [],
  templateUrl: './clienti.html',
  styleUrl: './clienti.css',
})
export class Clienti implements OnInit, OnDestroy {

  ngOnInit(): void {
    //alert("Sto per innestare il componente dei clienti");
  }

  ngOnDestroy(): void {
    //alert("Sto per distruggere il componente dei clienti");
  }

}
