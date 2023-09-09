import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function FilterButtons(props) {
  const [t] = useTranslation();

  const filterByCategory = (categoryClicked) => {
    const compare = props.dbProducts.filter(product => product.category === categoryClicked);
    props.setProducts(compare);
  }

  return (
    <div>
      {props.categories.map((category) => (
        <Button
          key={category.name}
          variant="outline-dark"
          onClick={() => filterByCategory(category.name)}
        >
          {t(category.name)}
        </Button>
      ))}
    </div>
  );
}

export default FilterButtons;
