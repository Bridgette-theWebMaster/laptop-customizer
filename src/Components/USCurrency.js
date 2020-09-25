export default function USCurrency(props) {
  const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(props.cost);
  return USCurrencyFormat;
}
