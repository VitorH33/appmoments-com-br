import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meuseventos } from './meuseventos';

describe('Meuseventos', () => {
  let component: Meuseventos;
  let fixture: ComponentFixture<Meuseventos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Meuseventos],
    }).compileComponents();

    fixture = TestBed.createComponent(Meuseventos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
