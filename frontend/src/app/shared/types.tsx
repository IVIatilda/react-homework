import { ChangeEvent } from "react";

export type State = {
  name: string;
  genre: string;
  cinema: string;
};

export type Faq = {
  id: number;
  title: string;
  text: string;
}

export type OnChangeInputFunc = (event: ChangeEvent<HTMLInputElement>) => void;
export type OnChangeSelectFunc = (
  event: ChangeEvent<HTMLSelectElement>
) => void;
