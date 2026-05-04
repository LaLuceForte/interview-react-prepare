import { useMemo, useState } from "react";
import CartList, { type Item } from "./cartList";
import FormToAdd from "./formToAdd";
import Summary from "./summary";
import styles from "./styles.module.scss";

const apiList: Item[] = [
  {
    id: 1,
    name: "apples",
    price: 300,
    quantity: 5,
  },
  {
    id: 2,
    name: "oranges",
    price: 400,
    quantity: 50,
  },
  {
    id: 3,
    name: "bananas",
    price: 100,
    quantity: 15,
  },
  {
    id: 4,
    name: "pineapples",
    price: 500,
    quantity: 30,
  },
  {
    id: 5,
    name: "lemones",
    price: 700,
    quantity: 24,
  },
];

export default function Cart(): React.ReactElement {
  const [list, setList] = useState<Item[]>(apiList);

  const calcSum = useMemo(() => {
    return list.reduce((a, b) => a + b.price * b.quantity, 0);
  }, [list]);

  const calcQuantity = useMemo(() => {
    return list.reduce((a, b) => a + b.quantity, 0);
  }, [list]);

  return (
    <div className={styles.cart}>
      <CartList list={list} setList={setList} />
      <FormToAdd setList={setList} />
      <Summary quantity={calcQuantity} sum={calcSum} />
    </div>
  );
}
