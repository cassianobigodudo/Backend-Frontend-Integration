// Importando hook, axios e estilização
import { useState } from 'react'
import axios from 'axios'
import './App.css'

// Função principal para renderização e funcionamento do front
function App() {

  // Declaração para controle de estados do dado digitado no input
  const[registrar, setRegistrar] = useState({username:'', idade:''})
  const[users, setUsers] = useState([])

  // Função chamada no clique do botão
  const handleClick = async (e) => {
    e.preventDefault()
      try { 
        // Utilizando o axios para enviar requisição de post do front para o back
        const response = await axios.post('http://localhost:3000/Users', registrar)
          if (response.status === 201) {
            setRegistrar(response.data);
            alert('Usuário cadastrado no banco de dados! :D')
          }
          
      } catch (error) {
          console.error('Erro ao cadastrar usuário! :(', error)
      }

      try { 
        // Utilizando o axios para enviar requisição de post do front para o back
        const response = await axios.get('http://localhost:3000/Users')
          if (response.status === 200) {
            setUsers(response.data)
          }
      } catch (error) {
          console.error('Erro ao buscar usuário! :(', error)
      }
  }
  // Retorno da função App, com os elementos visuais do front
  return (
    <>
      <div className='cardRegister'>
        <label className='lblTitle'>User Register</label>
        <label className='lblLabel'>Username</label>
        <input className='inptInput' value={registrar.username} onChange={(e) => setRegistrar({ ...registrar, username: e.target.value })} />
        <label className='lblLabel'>Idade</label>
        <input className='inptInput' value={registrar.idade} onChange={(e) => setRegistrar({ ...registrar, idade: e.target.value })} />
        <button className='btnRegister' onClick={handleClick}>REGISTER</button>
      </div>

      <div className='cardRegister'>
        <label className='lblTitle'>Mostrar Tabela</label>
        <table className='userTable'>
          <thead>
            <tr>
              <th>Username</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.idade}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </>
  )
}

// Exportando a função App
export default App