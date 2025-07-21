import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private selectedCompanyIdSubject = new BehaviorSubject<number | null>(null);
  selectedCompanyId$: Observable<number | null> = this.selectedCompanyIdSubject.asObservable();

  constructor() { }

  setSelectedCompany(id: number | null) {
    this.selectedCompanyIdSubject.next(id);
  }
}
