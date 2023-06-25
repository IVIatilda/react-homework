import styles from "./styles.module.css";
import { Review } from "../../shared/models";
import { ReviewItem } from "./Review";
import { useGetReviewsMovieQuery } from "@/app/redux/services/movieApi";

export const Reviews = (props: { movieId: string }) => {
  const { data, isLoading, error } = useGetReviewsMovieQuery(props.movieId);

  if (isLoading) {
    return (
      <div className={styles.reviewsList}>
        <div className="card">Загружаем отзывы...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.reviewsList}>
        <div className="card">Упс, что-то пошло не так...</div>
      </div>
    );
  }

  return (
    <div className={styles.reviewsList}>
      {data.map((review: Review, index: number) => (
        <ReviewItem key={index} review={review} />
      ))}
    </div>
  );
};
