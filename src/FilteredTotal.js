import React from "react";

export default class FilteredTotal extends React.Component {
  render() {
    return (
      <div>
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {this.props.USCurrencyFormat.format(this.props.total)}
          </div>
        </div>
      </div>
    );
  }
}
