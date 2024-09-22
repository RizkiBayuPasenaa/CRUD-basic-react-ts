  import { ReactNode } from "react";

  interface ButtonProps {
    type: "button" | "submit" | "reset";
    children: ReactNode;
    onClick?: () => void;

  }

  function Button({ type, children, onClick }: ButtonProps) {

 
    return (
      <div>
        <button type={type} onClick={onClick} >{children}</button>
      </div>
    );
  }

  export default Button;
