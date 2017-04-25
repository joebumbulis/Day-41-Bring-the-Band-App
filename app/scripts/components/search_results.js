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
import container from "../containers/all.js";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let band = this.props.bands.band;
    this.props.dispatch(voteBand(band));
  }

  render() {
    return (
      <div>
        {this.props.bands.map((band, i) => {
          return (
            <div key={i}>

              <Col l={4} m={6} s={12}>
                <Card
                  className="medium teal lighten-5"
                  header={
                    <CardTitle image={band.images[1].url}>
                      {band.name}
                    </CardTitle>
                  }
                  actions={[
                    <div className="col s12 offset-s2">
                      <a href={band.uri}>Vote for this Artist</a>
                      <Button
                        onClick={this.clickHandler}
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
