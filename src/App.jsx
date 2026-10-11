
import { useEffect, useState } from "react";
import Login from "./Login";
import "./App.css";

const categories = [
  "All",
  "Vegetables",
  "Fruits",
  "Dairy",
  "Grains",
  "Snacks",
  "Essentials",
];

const demoProducts = [
  { id: 101, name: "Tomatoes", category: "Vegetables", price: 30, unit: "1 Kg", emoji: "🍅" },
  { id: 102, name: "Potatoes", category: "Vegetables", price: 25, unit: "1 Kg", emoji: "🥔" },
  { id: 103, name: "Onions", category: "Vegetables", price: 35, unit: "1 Kg", emoji: "🧅" },
  { id: 104, name: "Carrots", category: "Vegetables", price: 40, unit: "1 Kg", emoji: "🥕" },
  { id: 201, name: "Apples", category: "Fruits", price: 120, unit: "1 Kg", emoji: "🍎" },
  { id: 202, name: "Bananas", category: "Fruits", price: 50, unit: "1 Dozen", emoji: "🍌" },
  { id: 401, name: "Milk", category: "Dairy", price: 60, unit: "1 Litre", emoji: "🥛" },
  { id: 402, name: "Curd", category: "Dairy", price: 35, unit: "500 g", emoji: "🥣" },
  { id: 501, name: "Rice", category: "Grains", price: 60, unit: "1 Kg", emoji: "🍚" },
  { id: 502, name: "Wheat Flour", category: "Grains", price: 45, unit: "1 Kg", emoji: "🌾" },
  { id: 601, name: "Biscuits", category: "Snacks", price: 20, unit: "1 Pack", emoji: "🍪" },
  { id: 602, name: "Instant Noodles", category: "Snacks", price: 15, unit: "1 Pack", emoji: "🍜" },
  { id: 301, name: "Cooking Oil", category: "Essentials", price: 140, unit: "1 Litre", emoji: "🛢️" },
  { id: 302, name: "Sugar", category: "Essentials", price: 45, unit: "1 Kg", emoji: "🧂" },
  { id: 303, name: "Bath Soap", category: "Essentials", price: 35, unit: "1 Piece", emoji: "🧼" },
  { id: 105, name: "Green Chilli", category: "Vegetables", price: 50, unit: "1 Kg", emoji: "🌶️" },
  { id: 106, name: "Brinjal", category: "Vegetables", price: 35, unit: "1 Kg", emoji: "🍆" },
  { id: 107, name: "Cabbage", category: "Vegetables", price: 30, unit: "1 Kg", emoji: "🥬" },
  { id: 108, name: "Cauliflower", category: "Vegetables", price: 40, unit: "1 Piece", emoji: "🥦" },
  { id: 109, name: "Cucumber", category: "Vegetables", price: 30, unit: "1 Kg", emoji: "🥒" },
  { id: 110, name: "Pumpkin", category: "Vegetables", price: 35, unit: "1 Kg", emoji: "🎃" },

  // More Fruits
  { id: 203, name: "Oranges", category: "Fruits", price: 80, unit: "1 Kg", emoji: "🍊" },
  { id: 204, name: "Mangoes", category: "Fruits", price: 100, unit: "1 Kg", emoji: "🥭" },
  { id: 205, name: "Grapes", category: "Fruits", price: 90, unit: "1 Kg", emoji: "🍇" },
  { id: 206, name: "Watermelon", category: "Fruits", price: 40, unit: "1 Piece", emoji: "🍉" },
  { id: 207, name: "Papaya", category: "Fruits", price: 50, unit: "1 Piece", emoji: "🍈" },

  // More Dairy
  { id: 403, name: "Butter", category: "Dairy", price: 55, unit: "100 g", emoji: "🧈" },
  { id: 404, name: "Paneer", category: "Dairy", price: 90, unit: "200 g", emoji: "🧀" },
  { id: 405, name: "Cheese Slices", category: "Dairy", price: 120, unit: "1 Pack", emoji: "🧀" },
  { id: 406, name: "Buttermilk", category: "Dairy", price: 20, unit: "500 ml", emoji: "🥛" },

  // More Grains
  { id: 503, name: "Toor Dal", category: "Grains", price: 140, unit: "1 Kg", emoji: "🫘" },
  { id: 504, name: "Moong Dal", category: "Grains", price: 120, unit: "1 Kg", emoji: "🫘" },
  { id: 505, name: "Chickpeas", category: "Grains", price: 90, unit: "1 Kg", emoji: "🫘" },
  { id: 506, name: "Poha", category: "Grains", price: 45, unit: "500 g", emoji: "🍚" },
  { id: 507, name: "Ragi Flour", category: "Grains", price: 55, unit: "1 Kg", emoji: "🌾" },

  // More Snacks
  { id: 603, name: "Potato Chips", category: "Snacks", price: 20, unit: "1 Pack", emoji: "🍟" },
  { id: 604, name: "Chocolate", category: "Snacks", price: 30, unit: "1 Bar", emoji: "🍫" },
  { id: 605, name: "Popcorn", category: "Snacks", price: 25, unit: "1 Pack", emoji: "🍿" },
  { id: 606, name: "Peanuts", category: "Snacks", price: 40, unit: "500 g", emoji: "🥜" },
  { id: 607, name: "Cake", category: "Snacks", price: 50, unit: "1 Pack", emoji: "🍰" },

  // More Essentials
  { id: 304, name: "Salt", category: "Essentials", price: 25, unit: "1 Kg", emoji: "🧂" },
  { id: 305, name: "Tea Powder", category: "Essentials", price: 90, unit: "250 g", emoji: "🍵" },
  { id: 306, name: "Coffee Powder", category: "Essentials", price: 120, unit: "200 g", emoji: "☕" },
  { id: 307, name: "Detergent Powder", category: "Essentials", price: 60, unit: "1 Kg", emoji: "🧺" },
  { id: 308, name: "Toothpaste", category: "Essentials", price: 55, unit: "1 Pack", emoji: "🪥" },

  // Vegetables: 111–120
  { id: 111, name: "Spinach", category: "Vegetables", price: 25, unit: "1 Bunch", emoji: "🥬" },
  { id: 112, name: "Drumstick", category: "Vegetables", price: 60, unit: "500 g", emoji: "🌿" },
  { id: 113, name: "Bitter Gourd", category: "Vegetables", price: 40, unit: "1 Kg", emoji: "🥒" },
  { id: 114, name: "Bottle Gourd", category: "Vegetables", price: 35, unit: "1 Piece", emoji: "🥒" },
  { id: 115, name: "Lady Finger", category: "Vegetables", price: 40, unit: "1 Kg", emoji: "🥬" },
  { id: 116, name: "Radish", category: "Vegetables", price: 30, unit: "1 Kg", emoji: "🥕" },
  { id: 117, name: "Beetroot", category: "Vegetables", price: 45, unit: "1 Kg", emoji: "🫜" },
  { id: 118, name: "Green Peas", category: "Vegetables", price: 70, unit: "1 Kg", emoji: "🫛" },
  { id: 119, name: "Garlic", category: "Vegetables", price: 100, unit: "1 Kg", emoji: "🧄" },
  { id: 120, name: "Ginger", category: "Vegetables", price: 80, unit: "1 Kg", emoji: "🫚" },

  // Fruits: 208–217
  { id: 208, name: "Pomegranate", category: "Fruits", price: 140, unit: "1 Kg", emoji: "🍎" },
  { id: 209, name: "Guava", category: "Fruits", price: 60, unit: "1 Kg", emoji: "🍐" },
  { id: 210, name: "Pineapple", category: "Fruits", price: 60, unit: "1 Piece", emoji: "🍍" },
  { id: 211, name: "Lemon", category: "Fruits", price: 50, unit: "500 g", emoji: "🍋" },
  { id: 212, name: "Strawberries", category: "Fruits", price: 120, unit: "1 Box", emoji: "🍓" },
  { id: 213, name: "Kiwi", category: "Fruits", price: 40, unit: "1 Piece", emoji: "🥝" },
  { id: 214, name: "Sweet Lime", category: "Fruits", price: 70, unit: "1 Kg", emoji: "🍊" },
  { id: 215, name: "Pear", category: "Fruits", price: 100, unit: "1 Kg", emoji: "🍐" },
  { id: 216, name: "Coconut", category: "Fruits", price: 35, unit: "1 Piece", emoji: "🥥" },
  { id: 217, name: "Dates", category: "Fruits", price: 100, unit: "250 g", emoji: "🌴" },

  // Dairy: 407–415
  { id: 407, name: "Ghee", category: "Dairy", price: 150, unit: "200 ml", emoji: "🧈" },
  { id: 408, name: "Flavoured Milk", category: "Dairy", price: 35, unit: "200 ml", emoji: "🥛" },
  { id: 409, name: "Lassi", category: "Dairy", price: 30, unit: "200 ml", emoji: "🥤" },
  { id: 410, name: "Fresh Cream", category: "Dairy", price: 65, unit: "200 ml", emoji: "🥛" },
  { id: 411, name: "Milk Powder", category: "Dairy", price: 130, unit: "200 g", emoji: "🥛" },
  { id: 412, name: "Mozzarella Cheese", category: "Dairy", price: 110, unit: "200 g", emoji: "🧀" },
  { id: 413, name: "Greek Yogurt", category: "Dairy", price: 50, unit: "100 g", emoji: "🥣" },
  { id: 414, name: "Toned Milk", category: "Dairy", price: 30, unit: "500 ml", emoji: "🥛" },
  { id: 415, name: "Flavoured Curd", category: "Dairy", price: 35, unit: "100 g", emoji: "🥣" },

  // Grains and pulses: 508–517
  { id: 508, name: "Basmati Rice", category: "Grains", price: 100, unit: "1 Kg", emoji: "🍚" },
  { id: 509, name: "Brown Rice", category: "Grains", price: 90, unit: "1 Kg", emoji: "🍚" },
  { id: 510, name: "Urad Dal", category: "Grains", price: 120, unit: "1 Kg", emoji: "🫘" },
  { id: 511, name: "Chana Dal", category: "Grains", price: 90, unit: "1 Kg", emoji: "🫘" },
  { id: 512, name: "Masoor Dal", category: "Grains", price: 110, unit: "1 Kg", emoji: "🫘" },
  { id: 513, name: "Besan", category: "Grains", price: 60, unit: "500 g", emoji: "🌾" },
  { id: 514, name: "Maida", category: "Grains", price: 35, unit: "1 Kg", emoji: "🌾" },
  { id: 515, name: "Rava", category: "Grains", price: 40, unit: "1 Kg", emoji: "🌾" },
  { id: 516, name: "Corn Flour", category: "Grains", price: 45, unit: "500 g", emoji: "🌽" },
  { id: 517, name: "Oats", category: "Grains", price: 90, unit: "500 g", emoji: "🥣" },

  // Snacks: 608–617
  { id: 608, name: "Mixture", category: "Snacks", price: 30, unit: "200 g", emoji: "🥨" },
  { id: 609, name: "Murukku", category: "Snacks", price: 35, unit: "200 g", emoji: "🥨" },
  { id: 610, name: "Roasted Chana", category: "Snacks", price: 30, unit: "200 g", emoji: "🫘" },
  { id: 611, name: "Cashews", category: "Snacks", price: 150, unit: "200 g", emoji: "🥜" },
  { id: 612, name: "Almonds", category: "Snacks", price: 170, unit: "200 g", emoji: "🥜" },
  { id: 613, name: "Raisins", category: "Snacks", price: 80, unit: "200 g", emoji: "🍇" },
  { id: 614, name: "Corn Flakes", category: "Snacks", price: 100, unit: "250 g", emoji: "🥣" },
  { id: 615, name: "Energy Bar", category: "Snacks", price: 30, unit: "1 Piece", emoji: "🍫" },
  { id: 616, name: "Cup Cake", category: "Snacks", price: 25, unit: "1 Piece", emoji: "🧁" },
  { id: 617, name: "Namkeen", category: "Snacks", price: 25, unit: "150 g", emoji: "🥨" },

  // Essentials: 309–324
  { id: 309, name: "Dishwash Bar", category: "Essentials", price: 20, unit: "1 Piece", emoji: "🧽" },
  { id: 310, name: "Floor Cleaner", category: "Essentials", price: 90, unit: "1 Litre", emoji: "🧴" },
  { id: 311, name: "Handwash", category: "Essentials", price: 65, unit: "250 ml", emoji: "🧴" },
  { id: 312, name: "Shampoo", category: "Essentials", price: 80, unit: "180 ml", emoji: "🧴" },
  { id: 313, name: "Hair Oil", category: "Essentials", price: 75, unit: "200 ml", emoji: "🧴" },
  { id: 314, name: "Toothbrush", category: "Essentials", price: 25, unit: "1 Piece", emoji: "🪥" },
  { id: 315, name: "Laundry Soap", category: "Essentials", price: 30, unit: "1 Piece", emoji: "🧼" },
  { id: 316, name: "Tissue Paper", category: "Essentials", price: 40, unit: "1 Pack", emoji: "🧻" },
  { id: 317, name: "Matchbox", category: "Essentials", price: 2, unit: "1 Box", emoji: "📦" },
  { id: 318, name: "Agarbatti", category: "Essentials", price: 25, unit: "1 Pack", emoji: "🪔" },
  { id: 319, name: "Toor Dal Masala", category: "Essentials", price: 35, unit: "100 g", emoji: "🌶️" },
  { id: 320, name: "Turmeric Powder", category: "Essentials", price: 35, unit: "100 g", emoji: "🟡" },
  { id: 321, name: "Red Chilli Powder", category: "Essentials", price: 45, unit: "100 g", emoji: "🌶️" },
  { id: 322, name: "Coriander Powder", category: "Essentials", price: 35, unit: "100 g", emoji: "🌿" },
  { id: 323, name: "Mustard Seeds", category: "Essentials", price: 25, unit: "100 g", emoji: "🌱" },
  { id: 324, name: "Cumin Seeds", category: "Essentials", price: 35, unit: "100 g", emoji: "🌿" },
 ];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [backendProducts, setBackendProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("");
  const [latestOrderId, setLatestOrderId] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [trackedOrder, setTrackedOrder] = useState(null);
  const [trackingMessage, setTrackingMessage] = useState("");
  const [trackingLoading, setTrackingLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load backend products");
        }
        return response.json();
      })
      .then((data) => {
        setBackendProducts(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.warn("Using demo products:", error.message);
      });
  }, []);

  useEffect(() => {
    if (!message) return undefined;

    const timer = window.setTimeout(() => setMessage(""), 2500);

    return () => window.clearTimeout(timer);
  }, [message]);

  const backendIds = new Set(
    backendProducts.map((product) => Number(product.id))
  );

  const allProducts = [
    ...backendProducts.map((product) => ({
      ...product,
      id: Number(product.id),
      price: Number(product.price),
      unit: product.unit || "1 Piece",
      emoji:
        product.category === "Vegetables" ? "🥦" :
        product.category === "Fruits" ? "🍎" :
        product.category === "Dairy" ? "🥛" :
        product.category === "Grains" ? "🍚" :
        product.category === "Snacks" ? "🍪" : "🛒",
    })),
    ...demoProducts.filter(
      (product) => !backendIds.has(Number(product.id))
    ),
  ];

  const visibleProducts = allProducts.filter((product) => {
    const matchesCategory =
      category === "All" ||
      product.category?.toLowerCase() === category.toLowerCase();

    const matchesSearch = product.name
      ?.toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const delivery = subtotal === 0 || subtotal >= 99 ? 0 : 10;
  const total = subtotal + delivery;

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      return existing
        ? current.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...current, { ...product, quantity: 1 }];
    });

    setMessage(`${product.name} added to cart!`);
  }

  function changeQuantity(id, amount) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  async function placeOrder() {
    if (cart.length === 0) {
      setMessage("Please add products to your cart first.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1,
          subtotal,
          village: "Hyderabad",
          status: "ORDER_PLACED",
        }),
      });

      if (!response.ok) {
        throw new Error(`Order failed (HTTP ${response.status}).`);
      }

      const order = await response.json();

      setLatestOrderId(String(order.id));
      setTrackingId(String(order.id));
      setMessage(`Order placed successfully! Order ID: ${order.id}`);
    } catch (error) {
      setMessage(error.message || "Unable to place order.");
    }
  }

  async function trackOrder() {
    const id = trackingId.trim();

    if (!id || !/^\d+$/.test(id)) {
      setTrackingMessage("Please enter a valid order ID.");
      setTrackedOrder(null);
      return;
    }

    setTrackingLoading(true);
    setTrackingMessage("");
    setTrackedOrder(null);

    try {
      const response = await fetch(
        `http://localhost:8080/orders/${encodeURIComponent(id)}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Order not found. Check the order ID.");
        }
        throw new Error(`Could not load order (HTTP ${response.status}).`);
      }

      setTrackedOrder(await response.json());
    } catch (error) {
      console.error("Track order error:", error);
      setTrackingMessage(
        error.message || "Could not connect to the backend."
      );
    } finally {
      setTrackingLoading(false);
    }
  }

  // Display login before the homepage.
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  // Existing homepage.
  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#top">
          🌿 Gramora<span>AI</span>
        </a>

        <div className="location">
          📍 Delivering to <strong>Hyderabad</strong>
        </div>

        <a className="cart-link" href="#cart">
          🛒 Cart (
          {cart.reduce((count, item) => count + item.quantity, 0)})
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">
            SMARTER SHOPPING • STRONGER VILLAGES
          </p>
          <h1>Fresh groceries, right at your doorstep.</h1>
          <p>
            Local products, simple ordering and intelligent stock awareness.
          </p>
          <a className="hero-button" href="#products">
            Shop groceries ↓
          </a>
          <p>🚚 Free delivery on orders ₹99+</p>
        </section>

        <section className="section" id="products">
          <h2>Shop groceries</h2>

          <input
            className="search-input"
            type="search"
            placeholder="Search groceries..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search groceries"
          />

          <p>{visibleProducts.length} products found</p>

          <div className="categories">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item ? "category active" : "category"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article
                className="product-card"
                key={`${product.id}-${product.name}`}
              >
                <div className="product-image">
                  <span
                    className="product-emoji"
                    role="img"
                    aria-label={product.name}
                  >
                    {product.emoji || "🛒"}
                  </span>
                </div>

                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.unit}</p>

                <strong>
                  ₹{Number(product.price).toFixed(2).replace(/\.00$/, "")}
                </strong>

                <button onClick={() => addToCart(product)}>
                  + Add
                </button>
              </article>
            ))}

            {visibleProducts.length === 0 && (
              <p>No matching products found. Try another search.</p>
            )}
          </div>
        </section>

        <section className="section" id="cart">
          <h2>Your shopping cart 🛒</h2>

          {cart.length === 0 && (
            <p>Your cart is empty. Add some groceries!</p>
          )}

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <span>
                {item.emoji} {item.name}
              </span>

              <button
                onClick={() => changeQuantity(item.id, -1)}
                aria-label={`Remove one ${item.name}`}
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => changeQuantity(item.id, 1)}
                aria-label={`Add one ${item.name}`}
              >
                +
              </button>

              <strong>
                ₹
                {(Number(item.price) * item.quantity)
                  .toFixed(2)
                  .replace(/\.00$/, "")}
              </strong>
            </div>
          ))}

          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>Delivery: {delivery === 0 ? "FREE" : `₹${delivery}`}</p>
          <h3>Total: ₹{total.toFixed(2)}</h3>

          <button onClick={placeOrder}>Place Order</button>
        </section>

        <section className="section" id="tracking">
          <h2>📦 Track Your Order</h2>
          <p>Enter your order ID to check its latest status.</p>

          {latestOrderId && (
            <p>
              Your latest order: <strong>#{latestOrderId}</strong>
            </p>
          )}

          <form
            className="tracking-form"
            onSubmit={(event) => {
              event.preventDefault();
              trackOrder();
            }}
          >
            <input
              type="number"
              min="1"
              value={trackingId}
              onChange={(event) => setTrackingId(event.target.value)}
              placeholder="Enter order ID (e.g. 6)"
              aria-label="Order ID"
              required
            />

            <button type="submit" disabled={trackingLoading}>
              {trackingLoading ? "Checking..." : "Track Order"}
            </button>
          </form>

          {trackingMessage && <p role="alert">{trackingMessage}</p>}

          {trackedOrder && (
            <div className="tracking-card">
              <h3>Order #{trackedOrder.id}</h3>
              <p>
                Status: <strong>{trackedOrder.status}</strong>
              </p>

              {trackedOrder.totalAmount != null && (
                <p>Total: ₹{trackedOrder.totalAmount}</p>
              )}

              {trackedOrder.village && (
                <p>Village: {trackedOrder.village}</p>
              )}

              <button
                type="button"
                onClick={trackOrder}
                disabled={trackingLoading}
              >
                Refresh Status
              </button>
            </div>
          )}
        </section>

        <section className="ai-banner">
          <h3>🤖 Gramora AI · Smart Inventory</h3>
          <p>
            Helping local stores monitor stock and identify products that
            need restocking.
          </p>
        </section>
      </main>

      <footer>
        🌿 GramoraAI · Supporting local stores and rural communities
      </footer>

      {message && (
        <div className="toast" role="status">
          {message}
        </div>
      )}
    </div>
  );
}
export default App;