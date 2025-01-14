import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isLogged = false;
  isLogginFail = false
  loginUsuario: LoginUsuario
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;
  eso:string = 'http://localhost:4200/dashboard';



  constructor(private tokenService: TokenService, private authServices: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authServices.login(this.loginUsuario).subscribe(
      data =>{
        this.isLogged = true;
        this.isLogginFail= false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthrities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['dashboard']);
        // window.location.reload();
        // sessionStorage.setItem("iniciado", "si" )
        
      },err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      })
  }

  

}
