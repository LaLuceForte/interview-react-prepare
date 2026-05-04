import { useCallback, type SetStateAction } from "react";
import CartItem from "./cartItem";

export interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function CartList({
  list,
  setList,
}: {
  list: Item[];
  setList: React.Dispatch<SetStateAction<Item[]>>;
}): React.ReactElement {
  console.log("list rendered");

  const changeItemQuantity = useCallback((id: number, value: number) => {
    setList((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: value } : i)),
    );
  }, []);

  const removeItem = useCallback((id: number) => {
    setList((prev) => prev.filter((i) => i.id !== id));
  }, []);

  return (
    <ul>
      {list.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          removeItem={removeItem}
          changeItemQuantity={changeItemQuantity}
        />
      ))}
      <button
        onClick={() =>
          setList(list.map((i) => (i.id === 1 ? { ...i, quantity: 999 } : i)))
        }
      >
        Force update
      </button>
    </ul>
  );
}
