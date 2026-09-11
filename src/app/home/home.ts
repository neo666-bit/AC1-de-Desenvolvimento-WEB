import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
 


@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
    lista :string[] = ['organização', 'mercado', 'academia', 'estudos', 'trabalho']
    selLista: string = ''
    novoRecado : string = ''
    lido: boolean = false
    curtidas: number = 0

    

    adicionarRecado() {
        if (this.novoRecado.trim() !== '') {
            this.lista.push(this.novoRecado);
            this.novoRecado = '';
        }

    }

    curtir(){
        this.curtidas++;
    }

}
