function App() {
    const [cart, setCart] = React.useState({});

    const updateQty = (key, delta) => {
        setCart((prev) => {
            const next = { ...prev };
            const qty = (next[key]?.qty || 0) + delta;

            if (qty <= 0) delete next[key];
            else next[key] = { qty, addons: next[key]?.addons || {} };

            return next;
        });
    };

    const toggleAddon = (key, addonId) => {
        setCart((prev) => {
            const next = { ...prev };
            next[key].addons[addonId] = !next[key].addons[addonId];
            return next;
        });
    };

    const getTotal = () => {
        let total = 0;

        Object.entries(cart).forEach(([key, cartItem]) => {
            const [catId, itemId] = key.split("__");
            const category = MENU.find((c) => c.categoryId === catId);
            const item = category.items.find((i) => i.id === itemId);

            let itemTotal = item.price * cartItem.qty;

            Object.entries(cartItem.addons).forEach(([addonId, selected]) => {
                if (selected) {
                    const addon = category.addons.find((a) => a.id === addonId);
                    itemTotal += addon.price * cartItem.qty;
                }
            });

            total += itemTotal;
        });

        return total;
    };

    const orderWhatsApp = () => {
        let msg = `Hi Absolute Shawarma 👋\n\n🧾 *Order Details*\n`;

        Object.entries(cart).forEach(([key, cartItem]) => {
            const [catId, itemId] = key.split("__");
            const category = MENU.find((c) => c.categoryId === catId);
            const item = category.items.find((i) => i.id === itemId);

            msg += `• ${item.name} x${cartItem.qty} – ₹${
                item.price * cartItem.qty
            }\n`;

            Object.entries(cartItem.addons).forEach(([addonId, selected]) => {
                if (selected) {
                    const addon = category.addons.find((a) => a.id === addonId);
                    msg += `   ◦ ${addon.name} (+₹${addon.price})\n`;
                }
            });
        });

        msg += `\nSubtotal: ₹${getTotal()}\n`;
        msg +=
            getTotal() >= 999
                ? "🚚 Delivery: Porter FREE\n"
                : "🚚 Delivery: Porter (Customer Pays)\n";

        window.open(
            `https://wa.me/918660466183?text=${encodeURIComponent(msg)}`,
            "_blank"
        );
    };

    return (
        <div className="container py-4">
            <h3 className="text-center mb-4">Absolute Shawarma 🌯</h3>

            <div className="text-center mb-4">
                <small className="text-muted">
                  Revisit menu:{" "}
                  <a
                    href="https://bit.ly/absVarthur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bit.ly/absVarthur
                  </a>
                </small>
              </div>

            <div className="accordion">
                {MENU.map((category, idx) => (
                    <Category
                        key={category.categoryId}
                        category={category}
                        index={idx}
                        cart={cart}
                        updateQty={updateQty}
                        toggleAddon={toggleAddon}
                    />
                ))}
            </div>

            <div className="card my-3">
                <div className="card-body">
                    <strong>Total: ₹{getTotal()}</strong>
                </div>
            </div>

            <button
                className="btn btn-success w-100 btn-lg"
                onClick={orderWhatsApp}
            >
                Order on WhatsApp
            </button>
        </div>
    );
}

function Category({ category, index, cart, updateQty, toggleAddon }) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${index ? "collapsed" : ""}`}
                    data-bs-toggle="collapse"
                    data-bs-target={`#${category.categoryId}`}
                >
                    {category.categoryName}
                </button>
            </h2>

            <div
                id={category.categoryId}
                className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                }`}
            >
                <div className="accordion-body">
                    {category.items.map((item) => {
                        const key = `${category.categoryId}__${item.id}`;
                        const cartItem = cart[key];

                        return (
                            <div className="card mb-3" key={key}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6>{item.name}</h6>
                                            <strong>₹{item.price}</strong>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <button
                                                className="btn btn-outline-secondary qty-btn"
                                                onClick={() =>
                                                    updateQty(key, -1)
                                                }
                                            >
                                                −
                                            </button>
                                            <span className="mx-2">
                                                {cartItem?.qty || 0}
                                            </span>
                                            <button
                                                className="btn btn-outline-secondary qty-btn"
                                                onClick={() =>
                                                    updateQty(key, 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {cartItem?.qty > 0 && category.addons && (
                                        <div className="mt-2">
                                            {category.addons.map((addon) => (
                                                <div
                                                    className="form-check"
                                                    key={addon.id}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        checked={
                                                            !!cartItem.addons[
                                                                addon.id
                                                            ]
                                                        }
                                                        onChange={() =>
                                                            toggleAddon(
                                                                key,
                                                                addon.id
                                                            )
                                                        }
                                                    />
                                                    <label className="form-check-label">
                                                        {addon.name} (+₹
                                                        {addon.price})
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
