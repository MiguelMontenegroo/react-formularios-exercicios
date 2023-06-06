import React from 'react'
import { MainContainer, Form, Input } from './styles'
import useForm from '../../hooks/useForm'
function MainPage() {
 
  const {form,onChange} = useForm({curso:'',modulos:'', tecnologias:'', responsavel:''})
 
  const enviaLogin = (e) => {
    e.preventDefault()
    console.log(form)
  }


  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={enviaLogin}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name='curso'
          value={form.curso}
          onChange={onChange}
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name='modulos'
          value={form.modulos}
          onChange={onChange}
          required
          pattern=''
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name='tecnologias'
          value={form.tecnologias}
          onChange={onChange}
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name='responsavel'
          value={form.responsavel}
          onChange={onChange}
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
