import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocorrencia } from './ocorrencia';

describe('Ocorrencia', () => {
  let component: Ocorrencia;
  let fixture: ComponentFixture<Ocorrencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ocorrencia],
    }).compileComponents();

    fixture = TestBed.createComponent(Ocorrencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
