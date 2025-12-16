import "./Button.css";

function Button({ children, variant, ...props }) {
  let className = "btn-default ";

  if (variant === "secondary") {
    className += "btn-secondary ";
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;