import React from "react";
import slugify from "slugify";
import SelectedOption from "./SelectedOption";
import Item from "./ProductName";

export default class ProductTable extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <SelectedOption
            itemHash={itemHash}
            key={itemHash}
            item={item}
            name={slugify(feature)}
            onChange={(e) => this.props.updateFeature(feature, item)}
            USCurrencyFormat={this.props.USCurrencyFormat}
          />
        );
      });
      return (
        <Item
          key={idx}
          featureHash={featureHash}
          feature={feature}
          options={options}
        />
      );
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}
