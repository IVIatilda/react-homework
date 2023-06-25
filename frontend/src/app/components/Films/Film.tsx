import styles from "./styles.module.css";
import Image from "next/image"
import { TicketBuy } from "../../components/TicketBuy/TicketBuy";
import { getGenreName } from "@/app/shared/functions";
import { useGetMovieQuery } from "@/app/redux/services/movieApi";

export const FilmItem = (props: { movieId: string }) => {

  const { data, isLoading, error } = useGetMovieQuery(props.movieId);

  if (isLoading) {
    return <div className="card">Загружаем информацию о фильме...</div>;
  }

  if (error) {
    return <div className="card">Упс, что-то пошло не так...</div>;
  }

  return (
    <div className="card card-flex">
      <Image src={data.posterUrl} alt={data.title} className={styles.filmItemImg} width={400} height={600} />
      <div className={styles.filmItemText}>
        <div className={styles.filmItemHeader}>
          <div className={styles.filmItemTitle}>{data.title}</div>
          <TicketBuy id={data.id} />
        </div>
        <div className={styles.filmItemShortDesc}>
          <p>
            <strong>Жанр: </strong>
            {getGenreName(data.genre)}
          </p>
          <p>
            <strong>Год выпуска: </strong>
            {data.releaseYear}
          </p>
          <p>
            <strong>Рейтинг: </strong>
            {data.rating}
          </p>
          <p>
            <strong>Режиссер: </strong>
            {data.director}
          </p>
        </div>
        <div className={styles.filmItemDesc}>
          <p>
            <strong>Описание</strong>
          </p>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};
