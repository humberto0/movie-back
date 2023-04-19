import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MovieDTO } from './movie.dto';

@Injectable()
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/';
  private apiKey = 'f53f1f9c'; // substitua pelo seu próprio API key

  async getMovieByTitle(title: string): Promise<MovieDTO> {
    const response = await axios.get(this.apiUrl, {
      params: {
        apikey: this.apiKey,
        t: title,
      },
    });
    const movieData = response.data;

    const movie = new MovieDTO();
    movie.title = movieData.Title;
    movie.year = movieData.Year;
    movie.plot = movieData.Plot;
    movie.imdbRating = movieData.imdbRating;
    movie.poster = movieData.Poster;
    movie.actors = movieData.Actors.split(', ');

    return movie;
  }
}
