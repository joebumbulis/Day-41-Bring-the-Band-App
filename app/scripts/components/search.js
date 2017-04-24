import React from "react";
import { Forms, Button } from "react-materialize";
import searchBand from "../actions/search_band.js";
import { connect } from "react-redux";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let searchQuery = this.refs.search.value;
    this.props.dispatch(searchBand(searchQuery));
    this.refs.search.value = " ";
  }

  render() {
    return (
      <main className="row search-field">
        <div>
          <input
            ref="search"
            className="col s4 offset-s3"
            placeholder="search an artist"
          />
          <Button
            onClick={this.clickHandler}
            onKeyUp={this.keyHandler}
            floating
            large
            className="search-btn"
            waves="light"
            icon="add"
          />
        </div>
      </main>
    );
  }
}

export default connect()(Search);
