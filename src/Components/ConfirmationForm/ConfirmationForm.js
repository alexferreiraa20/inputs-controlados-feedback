import React, { useState } from 'react'
import { Form} from '../MainPage/styles'
// import {useState} from 'react'




const ConfirmationForm = () => {

  const [data, setData] = useState("")

  const onChangeData = (event) => {
    console.log(event.target.value)
    setData(event.target.value)
  } 

  return (
    <Form>
        <h2>Form exercicio 3</h2>
        <label>
        Data de nascimento: 
        <input type = "date" onChange={onChangeData} value= {data}/>
        </label>
        <label>
          Gênero: 
          <select >
            <option value = "1">Homem cisgênero</option>
            <option value = "1">Mulher cisgênero</option>
            <option value = "1">Homem trans</option>
            <option value = "1">Mulher trans</option>
            <option value = "1">Pessoa não binária</option>
            <option value = "1">Prefiro não dizer</option>
          </select>

        </label>




        
      <button>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm