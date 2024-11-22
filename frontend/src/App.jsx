// Importando hook, axios e estilização
import { useState } from 'react'
import axios from 'axios'
import './App.css'

// Função principal para renderização e funcionamento do front
function App() {

  // Declaração para controle de estados do dado digitado no input
  const[username, setUsername] = useState({username:''})

  // Função chamada no clique do botão
  const handleClick = async (e) => {
    e.preventDefault()
      try {
        // Utilizando o axios para enviar requisição de post do front para o back
        const response = await axios.post('http://localhost:3000/Users', username)
          if (response.status === 201) {
            setUsername(response.data);
            alert('Usuário cadastrado no banco de dados! :D')
          }
      } catch (error) {
          console.error('Erro ao cadastrar usuário! :(', error)
      }
  }

  // Retorno da função App, com os elementos visuais do front
  return (
    <>
      <div className='cardRegister'>
        <label className='lblTitle'>User Register</label>
        <label className='lblLabel'>Username</label>
        <input className='inptInput' value={username.username} onChange={(e) => setUsername({ ...username, username: e.target.value })} />
        <button className='btnRegister' onClick={handleClick}>REGISTER</button>
      </div>
    </>
  )
}

// Exportando a função App
export default App