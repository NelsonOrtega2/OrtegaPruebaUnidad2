import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BienesService } from 'src/app/services/bienes.service';

@Component({
  selector: 'app-listar-bienes',
  templateUrl: './listar-bienes.component.html',
  styleUrls: ['./listar-bienes.component.scss']
})
export class ListarBienesComponent implements OnInit{
  title = "Lista de datos de bienes raices"
  lstBienes = new Array()
  bienes: any

  constructor(private router: Router,
    private bienesService: BienesService){}

  ngOnInit(): void {
    this.loadBienes()
  }

  loadBienes(){
    this.bienes = this.bienesService.getBienesFire()
  }
}
