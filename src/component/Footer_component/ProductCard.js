import React from 'react';
import { ShoppingCart, Heart, Star, SearchX } from 'lucide-react';
import"../styles/footer/productcard.css"

export default class ProductCard extends React.Component {
  
  render() {
    const { image, title, price, discountPrice, isInWishlist, details } = this.props;

    const numericPrice = parseFloat(price.replace(/,/g, ''));
    const numericDiscountPrice = discountPrice ? parseFloat(discountPrice.replace(/,/g, '')) : null;

    return (
      <div className="product-card">
        <div className="card-detaill">


        {isInWishlist && <div className="wishlist-badge">♥</div>}
        
        <div className="image-container">
          <img 
            src={image || "/api/placeholder/100/100"}
            alt={title} 
            className="product-image"
            style={{ width: '100', height: '100' }}
          />
        <div className="quickview-badge">Quickview</div>
          <div className='serach-icon'>
          <SearchX size={15} className='Searchx' />
          </div>

        </div>

        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          
          {details && <p className="product-details">{details}</p>}

          <div className="price-container">
            {discountPrice ? (
              <>
                <div className='discounteprice-container'>
                  <span className="discounted-price">
                    ₹{numericDiscountPrice.toLocaleString()}
                  </span>
                  <span className="original-price">
                    ₹{numericPrice.toLocaleString()}
                  </span>
                </div>
                
                <div className='star-container'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="star filled " />
                  ))}
                </div>
              </>
            ) : (
              <span className="regular-price">
                ₹{numericPrice.toLocaleString()}
              </span>
            )}
          </div>

          <div className="product-actions">
            <div className="button-container">
              <ShoppingCart size={14} className="cart-button" />
              <Heart size={14}  className={`heart-icon ${isInWishlist ? 'active' : ''}`} />
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}