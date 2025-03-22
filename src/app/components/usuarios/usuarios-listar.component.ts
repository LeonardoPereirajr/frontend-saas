import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.css']
})
export class UsuariosListarComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioEdit: Usuario | null = null;
  isMenuOpen = true; 
  isAdmin = true;
  isEditModalOpen: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      },
      (error) => {
        console.error('Erro ao carregar usuários:', error);
      }
    );
  }

  editarUsuario(usuario: Usuario) {
    this.usuarioEdit = { ...usuario };  
    this.isEditModalOpen = true;  
  }

  fecharEditModal() {
    this.isEditModalOpen = false; 
  }

  excluirUsuario(usuario: Usuario) {
    if (confirm(`Tem certeza que deseja excluir o usuário ${usuario.nome}?`)) {
      this.usuarioService.excluirUsuario(usuario.id).subscribe(
        () => {
          alert('Usuário excluído com sucesso!');
          this.listarUsuarios(); 
        },
        (error) => {
          console.error('Erro ao excluir usuário:', error);
        }
      );
    }
  }

  adicionarUsuario() {

    this.usuarioEdit = null; 

  }

  atualizarUsuario() {
    this.usuarioService.atualizarUsuario(this.usuarioEdit).subscribe(
      (response) => {
        console.log('Usuário atualizado com sucesso!', response);
        this.listarUsuarios(); 
        this.fecharEditModal(); 
      },
      (error) => {
        console.error('Erro ao atualizar usuário:', error);
        alert('Erro ao atualizar usuário!');
      }
    );
  }
}