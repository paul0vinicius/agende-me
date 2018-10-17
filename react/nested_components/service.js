import React, { Component } from "react";
import PropTypes from "prop-types";

// We can make any architecture we wish using default React
export class Service extends Component {
  render() {
    const {
      service: { id, name }
    } = this.props;
    return (
      <Card>
        {id}: {name}
      </Card>
    );
  }
}

Service.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })
};
