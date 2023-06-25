"use client";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { Films } from "../components/Films/Films";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import {
  selectAllProductAmount,
  selectFilmsIds,
} from "../redux/features/cart/selector";

export default function Cart() {
  const films = useSelector((state) => selectFilmsIds(state));
  const countTickets = useSelector((state) => selectAllProductAmount(state));

  return (
    <>
      <Header />
      <div className="content content-flex">
        {films.length > 0 && <Films filterIds={films} showRemove={true} />}
        {!films.length && <div className="card">Корзина пуста</div>}
        {films.length > 0 && (
          <div className={styles.cartResult}>
            <div>Итого билетов:</div>
            <div>{countTickets}</div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
