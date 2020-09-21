import React from "react";
import FilteredTotal from "./FilteredTotal";
import FilteredProduct from "./FilteredProduct";

export default class Order extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <FilteredProduct
          key={featureHash}
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption}
          cost={selectedOption.cost}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <FilteredTotal
          total={this.props.total}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      </section>
    );
  }
}
