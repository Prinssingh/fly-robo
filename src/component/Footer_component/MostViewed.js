import React from "react";
import ProductCard from "./ProductCard";
import "../styles/footer/mostviewed.css";

export default class MostViewed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          title: "Hobbywing XRotor X6 Plus 150KV Brushless Motor and 2480 Folding Propeller Combo Kit - CCW",
          price: "11,369",
          discountPrice: "5,999", 
          originalPrice: "6,999", 
          image: "https://placehold.co/100x100",
        },
        {
          id: 2,
          title: "Hobbywing XRotor X6 Plus 150KV Brushless Motor and 2480 Folding Propeller Combo Kit - CCW",
          price: "15,999",
          discountPrice: "5,999", 
          originalPrice: "6,999", 
          image: "https://placehold.co/100x100",
        },
        {
          id: 3,
          title: "Hobbywing XRotor X6 Plus 150KV Brushless Motor and 2480 Folding Propeller Combo Kit - CCW",
          price: "4,599",
          discountPrice: "5,999", 
          originalPrice: "6,999", 
          image: "https://placehold.co/100x100",
        },
        {
          id: 3,
          title: "Hobbywing XRotor X6 Plus 150KV Brushless Motor and 2480 Folding Propeller Combo Kit - CCW",
          price: "4,599",
          discountPrice: "5,999", 
          originalPrice: "6,999", 
          image: "https://placehold.co/100x100",
        },
      ],
      cart: [],
      wishlist: [],
      isLoading: false,
      error: null,
    };
  }

  handleAddToCart = (productId) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, productId],
    }));
  };

  handleAddToWishlist = (productId) => {
    this.setState((prevState) => ({
      wishlist: prevState.wishlist.includes(productId)
        ? prevState.wishlist.filter((id) => id !== productId)
        : [...prevState.wishlist, productId],
    }));
  };

  render() {
    const { products, wishlist, isLoading, error } = this.state;

    if (isLoading) {
      return <div className="empty-state">Loading products...</div>;
    }

    if (error) {
      return <div className="error-state">Error: {error}</div>;
    }

    if (!products.length) {
      return <div className="empty-state">No products found</div>;
    }

    return (
      <div className="product-container">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              discountPrice={product.discountPrice} 
              onAddToCart={() => this.handleAddToCart(product.id)}
              onAddToWishlist={() => this.handleAddToWishlist(product.id)}
              isInWishlist={wishlist.includes(product.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}