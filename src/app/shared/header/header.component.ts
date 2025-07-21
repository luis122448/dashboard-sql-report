import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { SHARED_COMPONENTS } from '../shared';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...SHARED_COMPONENTS],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  baseUrl: string;
  constructor(
    private router:Router,
    private location:Location,
    private dialog: Dialog
  ){
    this.baseUrl = this.location.prepareExternalUrl('/')
  }

  toRedirec(path: string){
    const redirectUrl = `${this.baseUrl}/${path}`; // Construir la URL de redirección
    this.router.navigateByUrl(redirectUrl); // Redirigir a la URL especificada
  }

}
