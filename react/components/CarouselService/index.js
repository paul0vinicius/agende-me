import React, { Component } from "react";
import ProductPrice from "vtex.store-components/ProductPrice";

class CarouselService extends Component {
  render() {
    return (
      <ProductPrice
        listPrice={22}
        sellingPrice={22.5}
        installments={[]}
        showListPrice={true}
        showLabels={true}
        showInstallments={false}
      />
    );
  }
}

export default CarouselService;
