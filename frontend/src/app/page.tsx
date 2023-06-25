"use client";

import { Filters } from "./components/Filters/Filters";
import { Films } from "./components/Films/Films";
import { initialFilterState } from "./shared/const";
import { ChangeEvent, useReducer } from "react";
import { State } from "./shared/types";
import { FILTER_ACTIONS } from "./shared/const";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  const reducer = (state: State, action: any) => {
    switch (action?.type) {
      case FILTER_ACTIONS.SET_NAME:
        return { ...state, name: action.payload.name };
      case FILTER_ACTIONS.SET_GENRE:
        return { ...state, genre: action.payload.genre };
      case FILTER_ACTIONS.SET_CINEMA:
        return { ...state, cinema: action.payload.cinema };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialFilterState);

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FILTER_ACTIONS.SET_NAME,
      payload: { name: event.target.value },
    });
  };

  const onGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: FILTER_ACTIONS.SET_GENRE,
      payload: { genre: event.target.value },
    });
  };

  const onCinemaChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: FILTER_ACTIONS.SET_CINEMA,
      payload: { cinema: event.target.value },
    });
  };

  return (
    <>
      <Header />
      <div className="content">
        <div className="front-page">
          <Filters
            filtersState={state}
            onNameChange={onNameChange}
            onGenreChange={onGenreChange}
            onCinemaChange={onCinemaChange}
          />
          <Films filtersState={state} />
        </div>
      </div>
      <Footer />
    </>
  );
}
