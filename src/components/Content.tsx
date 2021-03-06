import { GenreResponseProps, MovieProps } from '../App';
import { MovieCard  } from './MovieCard';


import '../styles/content.scss'

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}


export function Content({ movies, selectedGenre }: ContentProps) {
  return(
    <div className="container">
      <header>
        <span className='category'>
          Category:<span>{selectedGenre.title}</span>
          </span>
      </header>

      <main>
        <div className="movie-list">
          {movies.map(movie => (
            <MovieCard 
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}           
            />
          ))}
        </div>
      </main>
    </div>
  );
}