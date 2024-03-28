type Product = {
  id: number;
  itemName: string;
  inCart: boolean;
};

type Props = {
  product: Product;
  addToCart: (product: Product) => {};
};

//Here basically we are making the component to buy the product and there are two button one for buying and one for checkout both should give the notification when we click on the button we are tempted to do it using useEffect but when we use useEffect whenever use navigate to the page the notification showed up because component mount and unmount when product is in the cart is always true so it's better to male handlers add use them to shoe the notification
const NoNotification = ({ product, addToCart }: Props) => {
  const buyProduct = () => {
    addToCart(product);
    alert(`${product.itemName} added to cart`);
  };
  const handleCheckout = () => {
    buyProduct();
    //some navigation code here
  };
  const handleBuyClick = () => {
    buyProduct();
  };

  return (
    <div>
      <h1>{product.itemName}</h1>
      <button onClick={handleCheckout}>Checkout</button>
      <button onClick={handleBuyClick}>Add to cart</button>
    </div>
  );
};
export default NoNotification;
