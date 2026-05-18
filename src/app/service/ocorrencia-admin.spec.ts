import { TestBed } from '@angular/core/testing';

import { OcorrenciaAdmin } from './ocorrencia-admin';

describe('OcorrenciaAdmin', () => {
  let service: OcorrenciaAdmin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcorrenciaAdmin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
