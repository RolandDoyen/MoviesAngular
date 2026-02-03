import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieComponent } from './create-movie';

describe('CreateMovieComponent', () => {
  let component: CreateMovieComponent;
  let fixture: ComponentFixture<CreateMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMovieComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
