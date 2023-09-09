import Cart from './Cart';

export default function Posts() {
  return (
    <div 
      className="row"
      style={{ 
        width: "100%", 
        padding: "20px 20px",
        margin: "0",
      }}
    >
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
    </div>
  );
}