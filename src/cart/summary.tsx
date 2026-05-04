export default function Summary({
  quantity,
  sum,
}: {
  quantity: number;
  sum: number;
}): React.ReactElement {
  return (
    <div>
      <h1>
        <u>Summary:</u>
      </h1>
      <div>Количество товаров: {quantity}</div>
      <div>Общая сумма: {sum}</div>
    </div>
  );
}
