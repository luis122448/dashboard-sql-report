import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_COMPONENTS } from '../../shared/shared';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, SHARED_COMPONENTS],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent{

  constructor() { }

}
