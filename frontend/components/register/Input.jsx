export default function Input({type = "text", value, placeholder, label, onChange}){
    return(
        <div className="flex flex-col w-full">
            <label htmlFor={label}>{label}</label>
            <input id={label} type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="bg-gray-50 text-black p-2 w-full rounded-md"/>
        </div>
    )
}