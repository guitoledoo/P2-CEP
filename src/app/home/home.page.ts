import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrasilApi } from '../services/brasil-api';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,

  imports: [IonicModule, CommonModule, FormsModule,],
})
export class HomePage {
  cep = '01001000';
  dados: any;

  constructor(private api: BrasilApi) {}

  buscarCep() {
    this.api.getCep(this.cep).subscribe({
      next: (res) => (this.dados = res),
      error: (err) => console.error('Erro ao buscar CEP:', err),
    });
  }
}
