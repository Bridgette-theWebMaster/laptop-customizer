export default function CurrencyFormat(props) {
  const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(props.cost);
}
