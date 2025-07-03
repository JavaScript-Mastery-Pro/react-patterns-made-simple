const product = {
  image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "Product 1",
  description: "This is a product description",
  price: 100,
  isNew: true,
};

// Monolithic card component
const App = () => {
  return (
    <main className="container text-amber-50">
      <div className="card">
        <div className="card-header">
          <img src={product.image} alt={product.name} />
          <div className="card-badge">{product.isNew ? "NEW" : ""}</div>
        </div>
        <div className="card-body">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="card-price">${product.price}</div>
        </div>
        <div className="card-footer">
          <button>Add to Cart</button>
          <button>View Details</button>
        </div>
      </div>
    </main>
  );
};

export default App;
