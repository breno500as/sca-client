import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaAtividadePerfuracaoComponent } from './pesquisa-atividade-perfuracao.component';

describe('PesquisaAtividadePerfuracaoComponent', () => {
  let component: PesquisaAtividadePerfuracaoComponent;
  let fixture: ComponentFixture<PesquisaAtividadePerfuracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaAtividadePerfuracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaAtividadePerfuracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
