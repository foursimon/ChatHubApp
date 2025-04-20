import { useState, useEffect } from 'react'
import FormMessage from "./FormMessage"
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import './App.css'

function App() {
  const [conn, setConn] = useState()
  const [mensagens, setMensagens] = useState([])
  const connection = new HubConnectionBuilder()
    .withUrl("https://localhost:7003/chat")
    .configureLogging(LogLevel.Information)
    .build()
  async function ConectChatRoom(){
    try{
      await connection.start();
      setConn(connection)
      console.log("Conectou-se")
      connection.on("ReceberMensagem", (message) => setMensagens(prevMessage => [...prevMessage, message]))
    }catch(e){
      console.log(e)
    }
  }
  useEffect(() => {
    ConectChatRoom()
  }, [])


  return (
    <>
      <h1>Bem-vindo ao ChatHub!</h1>
      {conn ? <FormMessage conn={conn} mensagens={mensagens}/> : <h2>Carregando...</h2>}
    </>
  )
}

export default App
