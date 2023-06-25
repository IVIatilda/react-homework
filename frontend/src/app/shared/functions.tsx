import { GENRES } from "./const";

export function getGenreName (id: string) {
    return GENRES.find(el => el.id === id)?.name;
}