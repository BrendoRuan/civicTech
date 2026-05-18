import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOcorrencias } from './admin-ocorrencias';

describe('AdminOcorrencias', () => {
  let component: AdminOcorrencias;
  let fixture: ComponentFixture<AdminOcorrencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminOcorrencias],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminOcorrencias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
