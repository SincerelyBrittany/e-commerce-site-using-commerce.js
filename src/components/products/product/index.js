import { useLocation } from "react-router-dom";

function Product() {
  const location = useLocation();
  const { ProductId } = location.state;
  console.log(ProductId, "productIs");
  return (
    <>
      <h1>Brand: {ProductId.brand}</h1>
      <h2>ID: {ProductId.id}</h2>
      <h2>
        Price:
        {ProductId.price}
      </h2>
      <h2>
        Description:
        {ProductId.description}
      </h2>
      <h2>Title: {ProductId.title}</h2>
      <img
        src={ProductId.images[0]}
        className="image-overlay"
        alt={ProductId.title}
      />
    </>
  );
}

export default Product;
