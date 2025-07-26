import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlModalComponent } from './url-modal.component';

describe('UrlModalComponent', () => {
  let component: UrlModalComponent;
  let fixture: ComponentFixture<UrlModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
