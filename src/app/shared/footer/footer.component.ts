import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { SHARED_COMPONENTS } from '../shared';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [...SHARED_COMPONENTS],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    private dialog: Dialog
  ) { }

  stackTechs: string[] = [
    "angular",
    "tailwindcss",
    "docker",
  ]

}
