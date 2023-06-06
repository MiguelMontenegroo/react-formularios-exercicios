import { useState } from "react";

const useForm = (initialState) => {
 // Cria um estado "form" utilizando o hook useState, inicializado com o valor enviado durante a chamada do hook.
  const [form, setForm] = useState(initialState); 

  const onChange = (event) => {
    const { name, value } = event.target; 
    setForm({ ...form, [name]: value }); 
  };

  const cleanFields = () => {
    // Limpa todos os campos do formulário, restaurando o estado inicial para "form" (iniciamos ele vazio heim!)
    setForm(initialState); 
  };
// Retorna um objeto contendo o estado "form", a função "onChange" e a função "cleanFields"
  return { form, onChange, cleanFields }; 
};

export default useForm; 
