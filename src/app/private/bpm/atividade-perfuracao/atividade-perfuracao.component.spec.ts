import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadePerfuracaoComponent } from './atividade-perfuracao.component';

describe('AtividadePerfuracaoComponent', () => {
  let component: AtividadePerfuracaoComponent;
  let fixture: ComponentFixture<AtividadePerfuracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadePerfuracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadePerfuracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
