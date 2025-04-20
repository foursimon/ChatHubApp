import {useState} from "react"

export default function FormMessage({conn, mensagens}){
    const [dado, setDado] = useState({
        username: "Roberto",
        mensagem: "Bom dia"
    })
    async function EnviarMensagem(formData){
        const dados = Object.fromEntries(formData)
        await conn.invoke("EnviarMensagem", dados.username, dados.mensagem)
    }

    function handleChange(e){
        const {name, value} = e.currentTarget
        setDado(prevDado => ({...prevDado, [name]: value}))
    }
    return(
        <>
            <form action={EnviarMensagem} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <label htmlFor="username">Usuário:</label>
                <input value={dado.username} onChange={handleChange} id="username" name="username" type="text" />
                <label htmlFor="mensagem">mensagem:</label>
                <input value={dado.mensagem} onChange={handleChange} id="mensagem" name="mensagem" type="text" />
                <button style={{display:"block"}}>Enviar mensagem</button>
            </form>
            <section>
                <ul>{mensagens.map((mensagem, idx) => <li key={idx}><p>{mensagem}</p></li>)}</ul>
            </section>
      </>
    )
}