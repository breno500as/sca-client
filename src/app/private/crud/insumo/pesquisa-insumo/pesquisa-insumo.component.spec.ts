import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaInsumoComponent } from './pesquisa-insumo.component';

describe('PesquisaInsumoComponent', () => {
  let component: PesquisaInsumoComponent;
  let fixture: ComponentFixture<PesquisaInsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaInsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
