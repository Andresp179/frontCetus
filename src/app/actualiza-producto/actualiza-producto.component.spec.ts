import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaProductoComponent } from './actualiza-producto.component';

describe('ActualizaProductoComponent', () => {
  let component: ActualizaProductoComponent;
  let fixture: ComponentFixture<ActualizaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
