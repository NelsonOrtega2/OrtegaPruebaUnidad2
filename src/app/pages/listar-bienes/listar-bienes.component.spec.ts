import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBienesComponent } from './listar-bienes.component';

describe('ListarBienesComponent', () => {
  let component: ListarBienesComponent;
  let fixture: ComponentFixture<ListarBienesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBienesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarBienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
