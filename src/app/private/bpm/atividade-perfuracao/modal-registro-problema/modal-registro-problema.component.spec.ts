import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistroProblemaComponent } from './modal-registro-problema.component';

describe('ModalRegistroProblemaComponent', () => {
  let component: ModalRegistroProblemaComponent;
  let fixture: ComponentFixture<ModalRegistroProblemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRegistroProblemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegistroProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
