import React from "react";

export default function SelectedOption(props) {
  return (
    <div className="feature__item">
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.item.name} ({props.USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}
