import styles from "./styles.module.css";
import { Cinemas } from "../../shared/models";
import { GENRES } from "../../shared/const";
import { OnChangeInputFunc, OnChangeSelectFunc, State } from "@/app/shared/types";
import { useGetCinemasQuery } from "@/app/redux/services/movieApi";

export const Filters = (props: {
  filtersState: State;
  onNameChange: OnChangeInputFunc;
  onGenreChange: OnChangeSelectFunc;
  onCinemaChange: OnChangeSelectFunc;
}) => {
  const { data } = useGetCinemasQuery();
  let cinemas = data || [];

  return (
    <div className={styles.filter}>
      <div className={styles.filterHeader}>Фильтр поиска</div>
      <div className={styles.filterItem}>
        <label htmlFor="name">Название</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Введите название"
          onChange={props.onNameChange}
        />
      </div>
      <div className={styles.filterItem}>
        <label htmlFor="genre">Жанр</label>
        <select
          name="genre"
          id="genre"
          defaultValue=""
          onChange={props.onGenreChange}
        >
          <option value="">Любой жанр</option>
          {GENRES.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterItem}>
        <label htmlFor="cinema">Кинотеатр</label>
        <select
          name="cinema"
          id="cinema"
          defaultValue=""
          onChange={props.onCinemaChange}
        >
          <option value="">Любой кинотеатр</option>
          {cinemas.map((cinema: Cinemas) => (
            <option key={cinema.id} value={cinema.id}>
              {cinema.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
