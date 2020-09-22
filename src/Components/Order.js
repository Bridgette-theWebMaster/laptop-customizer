import React from "react";
import FilteredTotal from "./FilteredTotal";
import FilteredProduct from "./FilteredProduct";

export default function Order(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];

    return (
      <FilteredProduct
        key={featureHash}
        featureHash={featureHash}
        feature={feature}
        selectedOption={selectedOption}
        cost={selectedOption.cost}
        USCurrencyFormat={props.USCurrencyFormat}
      />
    );
  });

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <FilteredTotal
        total={props.total}
        USCurrencyFormat={props.USCurrencyFormat}
      />
    </section>
  );
}
