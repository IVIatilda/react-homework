import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/app/shared/models";
import { TicketBuy } from "../../components/TicketBuy/TicketBuy";
import { getGenreName } from "@/app/shared/functions";

export const FilmCard = (props: { movie: Movie, showRemove?: boolean }) => {
  return (
    <div className="card card-flex">
      <Image
        src={props.movie.posterUrl}
        alt={props.movie.title}
        className={styles.filmImg}
        width={80}
        height={120}
      />
      <div className="card-text">
        <Link href={`/film/${props.movie.id}`} className={styles.filmTitle}>
          {props.movie.title}
        </Link>
        <div className={styles.filmGenre}>
          <strong>Жанр: </strong>
          {getGenreName(props.movie.genre)}
        </div>
        <div className={styles.filmGenre}>
          <strong>Рейтинг: </strong>
          {props.movie.rating}
        </div>
      </div>
      <TicketBuy id={props.movie.id} showRemove={props.showRemove} />
    </div>
  );
};
