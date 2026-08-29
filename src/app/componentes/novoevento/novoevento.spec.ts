import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Novoevento } from './novoevento';

describe('Novoevento', () => {
  let component: Novoevento;
  let fixture: ComponentFixture<Novoevento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Novoevento],
    }).compileComponents();

    fixture = TestBed.createComponent(Novoevento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
