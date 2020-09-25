import React from "react";
import Item from "./Item";

export default function Form(props) {
  console.log(props);
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <Item
        features={props.features}
        selected={props.selected}
        update={props.update}
      />
    </form>
  );
}
