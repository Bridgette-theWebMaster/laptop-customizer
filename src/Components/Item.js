import React from "react";
import SelectedOption from "./SelectedOption";

export default function Item(props) {
  return Object.keys({ ...props.features }).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <SelectedOption
          features={props.features}
          name={feature}
          selected={props.selected}
          update={props.update}
        />
      </fieldset>
    );
  });
}
