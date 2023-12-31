import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function SortButtons(props) {
  const [t] = useTranslation();

  const sortAZ = () => {
    props.products.sort((a, b) => a.name.localeCompare(b.name));
    props.setProducts(props.products.slice());
  };

  const sortZA = () => {
    props.products.sort((a, b) => b.name.localeCompare(a.name));
    props.setProducts(props.products.slice());
  };

  const sortPriceAsc = () => {
    props.products.sort((a, b) => a.price - b.price);
    props.setProducts(props.products.slice());
  };

  const sortPriceDesc = () => {
    props.products.sort((a, b) => b.price - a.price);
    props.setProducts(props.products.slice());
  };

  return (
    <div>
      <Button variant="outline-dark" onClick={sortAZ}>
        {t("SortA-Z")}
      </Button>
      <Button variant="outline-dark" onClick={sortZA}>
        {t("SortZ-A")}
      </Button>
      <Button variant="outline-dark" onClick={sortPriceAsc}>
        {t("Sort price asc")}
      </Button>
      <Button variant="outline-dark" onClick={sortPriceDesc}>
        {t("Sort price desc")}
      </Button>
    </div>
  );
}

export default SortButtons;
