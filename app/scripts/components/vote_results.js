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
import { connect } from "react-redux";

class VoteResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="row">
        {this.props.votes.map((vote, j) => {
          var imageSource = " ";
          if (vote.image) {
            imageSource = vote.image;
          } else {
            imageSource =
              "http://www.freeiconspng.com/uploads/no-image-icon-11.PNG";
          }
          return (
            <div key={j} className="align-left">
              <Col l={4} m={6} s={12}>
                <Card
                  className="medium teal lighten-5"
                  header={
                    <CardTitle image={imageSource}>
                      {vote.name}
                    </CardTitle>
                  }
                  actions={[
                    <div className="col s12 offset-s2">
                      <a href={vote.href}>User Choice</a>
                      <Button
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
export default VoteResults;
