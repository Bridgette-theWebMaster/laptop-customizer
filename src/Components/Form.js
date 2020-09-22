import React from "react";
import Item from "./Item";

export default function Form(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = props.features[feature].map((item) => {
      return (
        <Item
          key={idx}
          featureHash={featureHash}
          feature={feature}
          options={options}
        />
      );
    });
  });
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}
