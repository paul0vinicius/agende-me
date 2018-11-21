import React, { Component } from 'react';
import ProductName from 'vtex.store-components/ProductName'

class Service extends Component {
  render() {
    return (
      <div>
        <ProductName
          name="Teste"
          skuName="SKUTeste"
          brandName="testeMarca"
        />
      </div>
    )
  }
}

export default Service;