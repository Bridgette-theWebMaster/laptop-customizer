import React from "react";

export default class SelectedOption extends React.Component {
  render() {
    return (
      <div className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={this.props.name}
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} (
          {this.props.USCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}
