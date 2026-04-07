import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Campus Men's Sneakers",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Campus Men's OG-03 Sneakers",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Campus Men's Classic",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Campus Men's Runner",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Air Max Street",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Urban Trail Boots",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=300&h=200&fit=crop",
  },
  {
    id: 7,
    name: "Retro Low Top",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1584735175315-9d5df23be620?w=300&h=200&fit=crop",
  },
  {
    id: 8,
    name: "Sport Flex Pro",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop",
  },
  {
    id: 9,
    name: "Court Classic White",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1520256862855-398228c41684?w=300&h=200&fit=crop",
  },
  {
    id: 10,
    name: "Slide Comfort Edition",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300&h=200&fit=crop",
  },
  {
    id: 11,
    name: "Dash Run Elite",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961a28c?w=300&h=200&fit=crop",
  },
  {
    id: 12,
    name: "Street High Top",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=300&h=200&fit=crop",
  },
  {
    id: 13,
    name: "Trek Master Outdoor",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=300&h=200&fit=crop",
  },
  {
    id: 14,
    name: "Vibe Low Casual",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=200&fit=crop",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  let total = 0;

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      return exists
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const addQuant = (p) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const reduceQuant = (p) => {
    setCart((prev) => {
      if (p.quantity === 1) {
        return prev.filter((item) => item.id !== p.id);
      } else
        return prev.map((item) =>
          item.id === p.id ? { ...item, quantity: item.quantity - 1 } : item,
        );
    });
  };

  cart.forEach((e) => {
    total = total + e.quantity * e.price;
  });

  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-wrap">
          <img
            className="logo-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Deer_-_The_Noun_Project.svg/512px-Deer_-_The_Noun_Project.svg.png"
            alt="logo"
          />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Categories</li>
          <li>About Us</li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="main">
        {/* Products grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
              )}
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <button className="add-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart */}
        <aside className="cart">
          <h2 className="cart-title">Cart</h2>
          <ul>
            {cart.length === 0
              ? null
              : cart.map((p) => (
                  <li key={p.id}>
                    <img className="cart-item-img" src={p.image} alt={p.name} />
                    <div className="cart-item-info">
                      <div className="cart-item-name">{p.name}</div>
                      <div className="cart-item-price">${p.price}</div>
                    </div>
                    <div className="quantity">
                      <button onClick={() => reduceQuant(p)}>-</button>{" "}
                      {p.quantity}{" "}
                      <button onClick={() => addQuant(p)}>+</button>
                    </div>
                  </li>
                ))}
          </ul>
          <p className="cart-total">Total: ${total}</p>
        </aside>
      </main>
    </div>
  );
}

export default App;
