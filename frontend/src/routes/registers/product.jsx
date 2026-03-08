import { useState } from "react";
import ImageInput from "../../components/register/ImageInput";
import Input from "../../components/register/Input";
import AddButton from '../../components/buttons/AddButton';

const ProductRegister = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [code, setCode] = useState();
  const[size, setSize] = useState("");
  const [quantity, setQuantity] = useState();

  function handleImage(e) {
    setImage(e.target.files[0]);
  }

  return (
    <div className="flex flex-col md:flex-row md:gap-5 items-center">
      <ImageInput onChange={handleImage}/>
      <div className="bg-red-500 md:bg-green-500 p-10 text-white">
  BREAKPOINT TEST
</div>
      <div className="w-full">
        <Input
          value={name}
          placeholder="Informe o nome do produto..."
          onChange={setName}
          label="Nome"
        ></Input>
        <div className="flex flex-col">
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Informe a descrição do produto..."
            className="mb-3 bg-[#0C887E]/20 text-white rounded-md py-1 px-2"
          ></textarea>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5">
          <Input
            type="number"
            label="Preço"
            placeholder="Informe o preço do produto..."
            value={price}
            onChange={setPrice}
          ></Input>
          <Input
            type="number"
            label="Código"
            placeholder="Informe o código do produto..."
            value={code}
            onChange={setCode}
          ></Input>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5">
          <Input
            label="Tamanho"
            placeholder="Informe o tamanho do produto..."
            value={size}
            onChange={setSize}
          ></Input>
          <div className="flex flex-row gap-5">
            <Input
            label="Quantidade"
            placeholder={`Informe a quantidade do produto no tamanho ${size}...`}
            value={quantity}
            onChange={setQuantity}
          ></Input>
          <AddButton></AddButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRegister;
