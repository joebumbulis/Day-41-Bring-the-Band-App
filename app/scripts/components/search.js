import React from "react";
import { Forms, Button } from "react-materialize";

onKeyUp {
  if ()
}

class Search extends React.Component {
  render() {
    return (
      <main className="row search-field">
        <div>
          <input className="col s4 offset-s3" placeholder="search an artist" />
          <Button
            onClick={this.Search}
            onKeyUp={this.Search}
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

export default Search;
