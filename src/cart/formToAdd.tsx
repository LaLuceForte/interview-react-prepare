import React, { useRef } from "react";
import type { Item } from "./cartList";
import styles from "./styles.module.scss";

export default function FormToAdd({
  setList,
}: {
  setList: React.Dispatch<React.SetStateAction<Item[]>>;
}): React.ReactElement {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const addItem = (e: React.MouseEvent) => {
    e.preventDefault();

    const newItem = {
      name: nameRef?.current?.value || "name",
      id: Date.now(),
      price: priceRef?.current?.value ? +priceRef.current.value : 0,
      quantity: 1,
    };
    setList((prev) => [...prev, newItem]);
  };

  return (
    <form action="submit" className={styles.addingForm}>
      <h2>Добавить товар</h2>
      <span>
        <label htmlFor="item-title">Название:</label>
        <input ref={nameRef} name="item-title" type="text" />
      </span>
      <span>
        <label htmlFor="item-price">Цена:</label>
        <input ref={priceRef} type="number" name="item-price" />
      </span>

      <button onClick={addItem}>Добавить</button>
    </form>
  );
}
