import styles from "./styles.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Review } from "../../shared/models";
import photo from "../../assets/img/photo.png";

export const ReviewItem = (props: { review: Review }) => {
  const [review, setReview] = useState<Review>();

  useEffect(() => {
    fetch("http://localhost:3001/api/movies")
      .then((response) => response.json())
      .then((data: Review) => setReview(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="card card-flex">
      <div className={styles.avatar}>
        <Image
          src={photo.src}
          alt={props.review.name}
          className={styles.filmImg}
          width={32}
          height={32}
        />
      </div>
      <div className="card-text">
        <div className={styles.reviewHeader}>
          <div className={styles.reviewTitle}>{props.review.name}</div>
          <div className={styles.reviewRating}>
            Оценка: <strong>{props.review.rating}</strong>
          </div>
        </div>
        <div className={styles.reviewText}>{props.review.text}</div>
      </div>
    </div>
  );
};
