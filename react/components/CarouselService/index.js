import React, { Component } from "react";
import ProductPrice from "vtex.store-components/ProductPrice";
import Service from '../Service/service';

// import { ExtensionPoint } from "render";

serviceList = {
  "1": { "name": "Hemograma", "short_name": "Exame de Sangue", "price": 25, "type": "Exame", "id": "1" },
  "2": { "name": "Glicemia", "short_name": "Glicemia", "price": 50, "type": "Exame", "id": "2" },
  "3": { "name": "Gravidez", "short_name": "Gravidez", "price": 20, "type": "Exame", "id": "3" },
  "3": { "name": "Radiografia", "short_name": "Radiografia", "price": 1200, "type": "Exame", "id": "3" },
  "4": { "name": "Ultrassonografia", "short_name": "Ultrassonografia", "price": 400, "type": "Exame", "id": "4" },
  "5": { "name": "Tomografia computadorizada", "short_name": "Tomografia computadorizada", "price": 1800, "type": "Exame", "id": "5" },
  "6": { "name": "Ressonância Magnética", "short_name": "Ressonância Magnética", "price": 1300, "type": "Exame", "id": "6" },
};

class CarouselService extends Component {

  render() {
    return (
      <div>
        <ProductPrice
          listPrice={22}
          sellingPrice={22.5}
          installments={[]}
          showListPrice={true}
          showLabels={true}
          showInstallments={false}
        />
        <Service />
      </div>
    );
  }
}

export default CarouselService;
