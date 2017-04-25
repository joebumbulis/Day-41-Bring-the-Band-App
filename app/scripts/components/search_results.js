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
// import { connect } from "react-redux";
// import container from "../containers/all.js";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler() {
    console.log("Click Vote Yes");
  }

  render() {
    return (
      <div>
        {this.props.bands.map((band, i) => {
          return (
            <div>
              <div>
                <Col m={6} s={12}>
                  <Card
                    className="small"
                    header={
                      <CardTitle image={band.images[1]}>{band.name}</CardTitle>
                    }
                    actions={[
                      <div>
                        <a href="#">Vote for this Artist</a>
                        {" "}
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
            </div>
          );
        })}
      </div>
    );
  }
}
export default SearchResults;
