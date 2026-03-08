export default function ImageInput({ onChange }) {
  return (
    <label className="w-1/2 aspect-square bg-white/10 rounded-md p-5 flex items-center justify-center cursor-pointer">
      <span>Adicionar imagem</span>

      <input type="file" onChange={onChange} className="hidden" />
    </label>
  );
}
