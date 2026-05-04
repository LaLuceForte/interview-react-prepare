import React, { useEffect, useState } from "react";
import type { Item } from "./cartList";
import styles from "./styles.module.scss";

const CartItem = React.memo(function CartItem({
  item,
  changeItemQuantity,
  removeItem,
}: {
  item: Item;
  changeItemQuantity: (id: number, v: number) => void;
  removeItem: (id: number) => void;
}): React.ReactElement {
  const [quantity, setQuantity] = useState<number>(item.quantity);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const changeQnt = (value: number) => {
    setQuantity(value);
    changeItemQuantity(item.id, value);
  };

  console.log(`item with id = ${item.id} is rerendered`);
  return (
    <div className={styles.item}>
      <span className={styles.itemName}> {item.name}</span>
      <input
        className={styles.quantityInput}
        type="number"
        placeholder={String(item.quantity)}
        onChange={(e) => changeQnt(+e.target.value)}
        value={quantity}
      />
      <button
        className={styles.quantityButton}
        onClick={() => changeQnt(quantity - 1)}
      >
        -
      </button>
      <button
        className={styles.quantityButton}
        onClick={() => changeQnt(quantity + 1)}
      >
        +
      </button>
      <span className={styles.quantity}>
        Количество:
        {quantity}
      </span>
      <button
        className={styles.deleteButton}
        onClick={() => removeItem(item.id)}
      >
        x
      </button>
    </div>
  );
});

export default CartItem;
