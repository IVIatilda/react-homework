import styles from "./styles.module.css";
import { Movie } from "@/app/shared/models";
import { State } from "@/app/shared/types";
import { FilmCard } from "./FilmCard";
import { useGetMoviesQuery } from "../../redux/services/movieApi";

export const Films = (props: {
  filtersState?: State;
  filterIds?: string[];
  showRemove?: boolean;
}) => {
  const cinemaId = props.filtersState?.cinema
    ? "?cinemaId=" + props.filtersState.cinema
    : "";

  const { data, isLoading, error } = useGetMoviesQuery(cinemaId);

  let movies = data || [];

  if (isLoading) {
    return <div className="card">Загружаем...</div>;
  }

  if (error) {
    return <div className="card">Упс, что-то пошло не так...</div>;
  }

  if (props.filterIds && props.filterIds.length > 0) {
    movies = movies.filter((movie: Movie) =>
      props.filterIds?.includes(movie.id)
    );
  }

  if (props.filtersState?.name || props.filtersState?.genre) {
    movies = movies.filter(
      (movie: Movie) =>
        (!props.filtersState?.name ||
          movie.title
            .toUpperCase()
            .indexOf(props.filtersState.name.toUpperCase()) > -1) &&
        (!props.filtersState?.genre || movie.genre === props.filtersState.genre)
    );
  }

  return (
    <div className={styles.filmsList}>
      {movies.map((movie: Movie) => (
        <FilmCard movie={movie} key={movie.id} showRemove={props.showRemove} />
      ))}
    </div>
  );
};
