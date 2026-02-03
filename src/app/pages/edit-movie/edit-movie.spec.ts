import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieComponent } from './edit-movie';

describe('EditMovieComponent', () => {
  let component: EditMovieComponent;
  let fixture: ComponentFixture<EditMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMovieComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
