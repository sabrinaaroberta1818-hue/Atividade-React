import type { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
function Button({ children, type = "button", ...props }: ButtonProps){
  return (
    <button type={type} className="button" {...props}>
      {children}
    </button>
  );
}

export default Button;