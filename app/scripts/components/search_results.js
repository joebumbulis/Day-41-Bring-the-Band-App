import React from "react";
import {
  Col,
  Card,
  CardTitle,
  Row,
  CardPanel,
  Button,
  Icon
} from "react-materialize";
import voteBand from "../actions/vote_band.js";
import { connect } from "react-redux";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(band) {
    this.props.dispatch(voteBand(band));
  }

  render() {
    let searching = "";
    if (this.props.searching) {
      searching = <h2 className="searching">searching...</h2>;
    }
    return (
      <div>
        {searching}
        {this.props.bands.map((band, i) => {
          var imageSource = " ";
          if (band.images.length >= 2) {
            imageSource = band.images[1].url;
          } else {
            imageSource =
              "http://www.freeiconspng.com/uploads/no-image-icon-11.PNG";
          }
          return (
            <div key={i} className="align-left">
              <Col l={4} m={6} s={12}>
                <Card
                  className="small teal lighten-5"
                  header={
                    <CardTitle image={imageSource}>
                      {band.name}
                    </CardTitle>
                  }
                  actions={[
                    <div className="col s12 offset-s2">
                      <a href={band.uri}>Vote for this Artist</a>
                      <Button
                        onClick={() => this.clickHandler(band)}
                        floating
                        large
                        className="search-btn"
                        waves="light"
                        icon="thumb_up"
                      />
                    </div>
                  ]}
                />
              </Col>
            </div>
          );
        })}
      </div>
    );
  }
}
export default connect()(SearchResults);
