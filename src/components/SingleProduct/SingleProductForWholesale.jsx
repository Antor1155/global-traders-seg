import "./singleProductForWholesale.css";

export default function SingleProductForWholesale({ product }) {
  const { productName, image } = product;
  return (
    <div className="SingleProductForWholesale">
      <img src={image} alt="product image" />
      <p>{productName}</p>
    </div>
  );
}
