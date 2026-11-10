
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  // Plant categories and products
  const categories = [
    {
      name: 'Indoor Plants',
      plants: [
        {
          id: 1,
          name: 'Snake Plant',
          price: 299,
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
        },
        {
          id: 2,
          name: 'Money Plant',
          price: 199,
          image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400'
        },
        {
          id: 3,
          name: 'Peace Lily',
          price: 349,
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
        },
        {
          id: 4,
          name: 'Areca Palm',
          price: 499,
          image: 'https://images.unsplash.com/photo-1597055181300-c6c5b4d0c8b6?w=400'
        },
        {
          id: 5,
          name: 'ZZ Plant',
          price: 399,
          image: 'https://images.unsplash.com/photo-1632207691143-643e2b7a538d?w=400'
        },
        {
          id: 6,
          name: 'Rubber Plant',
          price: 449,
          image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
        }
      ]
    },
    {
      name: 'Succulent Plants',
      plants: [
        {
          id: 7,
          name: 'Aloe Vera',
          price: 149,
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
        },
        {
          id: 8,
          name: 'Echeveria',
          price: 179,
          image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
        },
        {
          id: 9,
          name: 'Jade Plant',
          price: 199,
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
        },
        {
          id: 10,
          name: 'Haworthia',
          price: 229,
          image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
        },
        {
          id: 11,
          name: 'String of Pearls',
          price: 299,
          image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400'
        },
        {
          id: 12,
          name: 'Cactus',
          price: 159,
          image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
        }
      ]
    },
    {
      name: 'Flowering Plants',
      plants: [
        {
          id: 13,
          name: 'Rose Plant',
          price: 249,
          image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400'
        },
        {
          id: 14,
          name: 'Hibiscus',
          price: 199,
          image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400'
        },
        {
          id: 15,
          name: 'Orchid',
          price: 399,
          image: 'https://images.unsplash.com/photo-1566907225472-514a9c1d7a4a?w=400'
        },
        {
          id: 16,
          name: 'Peace Lily Flower',
          price: 349,
          image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400'
        },
        {
          id: 17,
          name: 'Marigold',
          price: 149,
          image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400'
        },
        {
          id: 18,
          name: 'Anthurium',
          price: 449,
          image: 'https://images.unsplash.com/photo-1597055181300-c6c5b4d0c8b6?w=400'
        }
      ]
    }
  ];

  // Calculate total cart quantity
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Add plant to cart
  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  // Check whether plant is already added
  const isAdded = (plantId) => {
    return cartItems.some(
      (item) => item.id === plantId
    );
  };

  return (
    <div className="product-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">
            Cart 🛒 ({cartCount})
          </a>
        </div>
      </nav>

      {/* Page Heading */}
      <header className="product-header">
        <h1>Our Beautiful Houseplants</h1>
        <p>
          Bring nature home with our beautiful collection
          of indoor plants.
        </p>
      </header>

      {/* Display Plant Categories */}
      {categories.map((category) => (
        <section
          className="plant-category"
          key={category.name}
        >
          <h2>{category.name}</h2>

          <div className="product-grid">

            {category.plants.map((plant) => (
              <div
                className="product-card"
                key={plant.id}
              >

                <img
                  src={plant.image}
                  alt={plant.name}
                />

                <h3>{plant.name}</h3>

                <p className="price">
                  ₹{plant.price}
                </p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isAdded(plant.id)}
                  className="add-button"
                >
                  {isAdded(plant.id)
                    ? 'Added to Cart'
                    : 'Add to Cart'}
                </button>

              </div>
            ))}

          </div>
        </section>
      ))}

    </div>
  );
}

export default ProductList;
