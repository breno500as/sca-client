import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaBarragemComponent } from './alerta-barragem.component';

describe('AlertaBarragemComponent', () => {
  let component: AlertaBarragemComponent;
  let fixture: ComponentFixture<AlertaBarragemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaBarragemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaBarragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
