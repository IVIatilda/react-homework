"use client";
import { useState, useEffect } from "react";
import { Reviews } from "../../components/Reviews/Reviews";
import { FilmItem } from "../../components/Films/Film";
import { Movie } from "@/app/shared/models";
import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";

export default function Page({ params }: { params: { id: string } }) {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    fetch("http://localhost:3001/api/movie?movieId=" + params.id)
      .then((response) => response.json())
      .then((data: Movie) => setMovie(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <div className="content">
        <FilmItem movieId={params.id} />
        <Reviews movieId={params.id} />
      </div>
      <Footer />
    </>
  );
}
