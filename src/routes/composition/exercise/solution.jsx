/* Sample product data we will display. In production this might come from an API. */
const product = {
  image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "Product 1",
  description: "This is a product description",
  price: 100,
  isNew: true,
};

/* ---------------------------------------------------------------------------
   1. Card – outer shell that provides padding, background, and rounded corners
--------------------------------------------------------------------------- */
const Card = ({ children }) => <div className="card">{children}</div>;

/* ---------------------------------------------------------------------------
   2. CardHeader – shows the product image.
      It is also a “slot” for overlay children such as a badge.
--------------------------------------------------------------------------- */
const CardHeader = ({ image, children }) => (
  /* The parent is relative so overlay children can be absolutely positioned. */
  <div className="card-header">
    <img src={image} alt="Product" className="w-full rounded" />
    {children /* overlay content, e.g., badge */}
  </div>
);

/* ---------------------------------------------------------------------------
   3. CardBadge – tiny label that appears on top‑left of the header
--------------------------------------------------------------------------- */
const CardBadge = ({ label }) =>
  label ? <span className="card-badge">{label}</span> : null;

/* ---------------------------------------------------------------------------
   4. CardBody – title and description block
--------------------------------------------------------------------------- */
const CardBody = ({ title, description }) => (
  <div className="card-body">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

/* ---------------------------------------------------------------------------
   5. CardPrice – highlights the price separately so we can place it anywhere
--------------------------------------------------------------------------- */
const CardPrice = ({ value }) => <p className="card-price">${value}</p>;

/* ---------------------------------------------------------------------------
   6. CardFooter – container for one or more action buttons
--------------------------------------------------------------------------- */
const CardFooter = ({ children }) => (
  <div className="card-footer">{children}</div>
);

/* ---------------------------------------------------------------------------
   ProductCard – assembled entirely from the smaller parts above.
   Notice we can swap, remove, or add pieces without changing the internals
   of each block – that’s the power of composition.
--------------------------------------------------------------------------- */
const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardHeader image={product.image}>
        {/* The badge is optional; shown only if product.isNew is true */}
        <CardBadge label={product.isNew ? "NEW" : ""} />
      </CardHeader>

      <CardBody title={product.name} description={product.description} />

      <CardPrice value={product.price} />

      <CardFooter>
        <button>Add to Cart</button>
        <button>View Details</button>
      </CardFooter>
    </Card>
  );
};

/* ---------------------------------------------------------------------------
   App – renders a single ProductCard using the composition helpers.
   In a real shop you might map over a list of products and render many cards.
--------------------------------------------------------------------------- */
const App = () => (
  <main className="container">
    <ProductCard product={product} />
  </main>
);

export default App;

/* ---------------------------------------------------------------------------
   Why this is better than the monolithic version:

   • Reusability: Want a compact card for “featured” items? Reuse CardHeader
     and CardPrice only, omit CardBody. No duplication needed.

   • Maintainability: Styling or logic changes live in one small component.
     Adjust CardBadge once; every card badge updates automatically.

   • Flexibility: Designers can reorder pieces in JSX to form different
     layouts (horizontal cards, media‑heavy cards, etc.) without rewriting
     large chunks of markup.

   • Testability: Each piece is a pure, isolated unit, making it trivial
     to cover with small focused tests.
--------------------------------------------------------------------------- */
