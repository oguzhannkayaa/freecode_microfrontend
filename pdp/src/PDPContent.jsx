import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "home/products";

export default function PDPContent() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">{product.price}</div>
        </div>
      </div>
    </div>
  );
}
