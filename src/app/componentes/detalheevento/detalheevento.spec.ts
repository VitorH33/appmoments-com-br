import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Detalheevento } from './detalheevento';

describe('Detalheevento', () => {
  let component: Detalheevento;
  let fixture: ComponentFixture<Detalheevento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalheevento],
    }).compileComponents();

    fixture = TestBed.createComponent(Detalheevento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
