import './Button.css';

function Button({ children, ...props }) {
  return (
    <button className="btn-default" {...props}>
      {children}
    </button>
  );
}

export default Button;