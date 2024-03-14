
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livro.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) { }

  ngOnInit(): void {
    this.servLivros.obterLivros()
      .then(livros => this.livros = livros);
  }  

  excluir(codigo: string): void {
    this.servLivros.excluir(codigo)
      .then(() => this.servLivros.obterLivros())
      .then(livros => this.livros = livros);
  }  

  incluir(): void {
    // Se necessário, implemente a lógica para criar um novo livro e redirecionar para a página de inclusão
  }

  obterNome(codEditora: number): string {
    // Aqui você pode adicionar a lógica para obter o nome da editora com base no código da editora
    return "Nome da Editora"; // Exemplo: substitua "Nome da Editora" pelo nome real da editora
  }
}