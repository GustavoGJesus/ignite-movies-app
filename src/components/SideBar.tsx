import { useState, useEffect  } from 'react';
import { GenreResponseProps } from '../App';
import { Button } from './Button';
import { api } from '../services/api'

import '../styles/sidebar.scss'

interface SideBarProps {
  genres: GenreResponseProps[];
  handleClickButton(id: number): void;
  selectedGenreId: number;
}

export function SideBar({ genres, handleClickButton, selectedGenreId,}: SideBarProps){
  const [genre, setGenre] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genre").then((response) => {
      setGenre(response.data)
    });
  },[]);


  return(
    <nav className="sidebar"> 
      <span>
        Watch <p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button 
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId == genre.id}
          />
        ))}
      </div>
    </nav>
  );
}