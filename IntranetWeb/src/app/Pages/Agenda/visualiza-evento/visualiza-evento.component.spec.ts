import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaEventoComponent } from './visualiza-evento.component';

describe('VisualizaEventoComponent', () => {
  let component: VisualizaEventoComponent;
  let fixture: ComponentFixture<VisualizaEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizaEventoComponent]
    });
    fixture = TestBed.createComponent(VisualizaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
