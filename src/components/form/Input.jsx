
export default function Input({
  label,
  required,
  type,
  placeholder,
  value,
  onChange,
  className,
  preValue,
}) {
  return (
    <div className={`mb-4 text-black  ${className}`}>
      <label className="block font-medium mb-1 ">{label}</label>
      <div
        className={`relative w-full border-2 border-stone-50 bg-slate-50 text-sm rounded-sm ${className}`}
      >
        <input
          required={required}
          type={type}
          placeholder={placeholder}
          value={preValue}
          defaultValue={value}
          onInput={onChange}
          className={`w-full h-full block outline-none bg-transparent py-2 px-2 `}
        />
      </div>
    </div>
  );
}