export default function Input({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
}) {
  return (
    <div className="w-full">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mb-3 w-full rounded-md py-1 px-2 bg-[#0C887E]/20 text-white"
      />
    </div>
  );
}
