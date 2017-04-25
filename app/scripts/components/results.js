import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import container from "../containers/all.js";
import VoteResults from "./vote_results.js";

class Results extends React.Component {
  render() {
    return (
      <section>
        <VoteResults votes={this.props.votes} />
      </section>
    );
  }
}

export default connect(container.allState)(Results);
