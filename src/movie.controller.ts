import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDTO } from './movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get(':title')
  async getMovieByTitle(@Param('title') title: string): Promise<MovieDTO> {
    return this.movieService.getMovieByTitle(title);
  }
}
