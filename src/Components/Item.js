import React from "react";
import slugify from "slugify";
import SelectedOption from "./SelectedOption";

export default function Item(props) {
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
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
  return features;
}
