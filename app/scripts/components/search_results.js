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

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Col m={6} s={12}>
            <Card
              className="small"
              header={<CardTitle image="">Card Title</CardTitle>}
              actions={[
                <div>
                  <a href="#">Vote for this Artist</a>
                  {" "}
                  <Button
                    onClick={this.clickHandler}
                    onKeyUp={this.keyHandler}
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
  }
}
export default SearchResults;
