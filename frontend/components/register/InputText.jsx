export default function InputText({ label, placeholder, value, onChange }) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <textarea name={label} id={label} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="bg-gray-50 text-black p-2 w-full rounded-md"></textarea>
    </>
  );
}
