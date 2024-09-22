interface InputProps {
  type: string;
  placeholder: string;
  value: string | number;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ id, type, placeholder, value, onChange }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input type={type} placeholder={placeholder} value={value} id={id} onChange={onChange} />
    </>
  );
}

export default Input;
