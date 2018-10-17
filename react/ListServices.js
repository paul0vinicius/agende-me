import React, { Component } from "react";

// GraphQL query wrapper for React
import { graphql } from "react-apollo";

// You can import any react component you wish
import { Service } from "./nested_components/service";

// GraphQL Query
//import listProductsQuery from './graphql/listProducts.graphql'

// Default maxItems to show
const MAX_ITEMS = 3;

// This is just an usual React component
class ListServices extends Component {
  render() {
    return (
      <div>
        <div className="mh5-ns f4">
          Aqui tem uma lista de serviços oferecidos pelo posto.
        </div>
      </div>
    );
  }
}

// Defining propTypes correctly is very important for react+graphql integration
ListServices.defaultProps = {
  maxItems: MAX_ITEMS
};

ListServices.propTypes = {
  maxItems: PropTypes.number
};

export default ListServices;

// JSON Schema with in-app settings.
// You can play around with this config at the `edit` button in the lower right corner
// ListServices.getSchema = (props) => {
//   return {
//     title: 'ListServices',
//     description: 'A simple shelf',
//     type: 'object',
//     properties: {
//       maxItems: {
//         title: 'Max Items',
//         type: 'number',
//         default: ListServices.defaultProps.maxItems,
//       },
//     },
//   }
// }

// // Exports the wrapped Component with the GraphQL Query
// export default graphql(listProductsQuery, {
//   // We need to initialize the query variables
//   // since it will be running before rendering the component
//   options: ({
//     maxItems = ListServices.defaultProps.maxItems,
//   }) => ({
//     variables: {
//       from: 0,
//       to: maxItems-1
//     }
//   })
// })(ListServices)
