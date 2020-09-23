import React from "react";
import Item from "./Item";
import slugify from "slugify";
import SelectedOption from "./SelectedOption";

export default function Form(props) {
  console.log(props);
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = props.features[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <SelectedOption
          itemHash={itemHash}
          key={itemHash}
          item={item}
          name={slugify(feature)}
          onChange={(e) => props.updateFeature(feature, item)}
          USCurrencyFormat={props.USCurrencyFormat}
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
//6
