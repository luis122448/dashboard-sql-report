import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-scheduled-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-scheduled-card.component.html',
  styleUrls: ['./total-scheduled-card.component.css']
})
export class TotalScheduledCardComponent implements OnInit {

  totalReports: number | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTotalScheduledReports().subscribe(response => {
      this.totalReports = response.list.length;
    });
  }

}