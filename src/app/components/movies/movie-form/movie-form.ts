import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../../models/movie.model';
import { joinArray, splitAndTrim } from '../../../utils/helpers';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-form.html',
  styleUrls: ['./movie-form.css']
})
export class MovieFormComponent implements OnInit {
  @Input() initialData: Movie | null = null;
  @Input() submitLabel: string = 'Save';
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();

  formData = {
    title: '',
    sypnosis: '',
    rating: 0,
    year: 0,
    length: 0,
    trailerLink: '',
    styles: '',
    realisators: '',
    scenarists: '',
    actors: '',
    producers: ''
  };

  ngOnInit(): void {
    if (this.initialData) {
      this.formData = {
        title: this.initialData.title || '',
        sypnosis: this.initialData.sypnosis || '',
        rating: this.initialData.rating || 0,
        year: this.initialData.year || 0,
        length: this.initialData.length || 0,
        trailerLink: this.initialData.trailerLink || '',
        styles: joinArray(this.initialData.styles) || '',
        realisators: joinArray(this.initialData.realisators) || '',
        scenarists: joinArray(this.initialData.scenarists) || '',
        actors: joinArray(this.initialData.actors) || '',
        producers: joinArray(this.initialData.producers) || ''
      };
    }
  }

  onSubmit(): void {
    const movieData = {
      title: this.formData.title,
      sypnosis: this.formData.sypnosis,
      rating: Number(this.formData.rating) || 0,
      year: Number(this.formData.year) || 0,
      length: Number(this.formData.length) || 0,
      trailerLink: this.formData.trailerLink,
      styles: splitAndTrim(this.formData.styles),
      realisators: splitAndTrim(this.formData.realisators),
      scenarists: splitAndTrim(this.formData.scenarists),
      actors: splitAndTrim(this.formData.actors),
      producers: splitAndTrim(this.formData.producers)
    };

    this.formSubmit.emit(movieData);
  }

  onCancel(): void {
    this.formCancel.emit();
  }
}