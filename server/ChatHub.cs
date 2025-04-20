using Microsoft.AspNetCore.SignalR;

namespace server
{
	public sealed class ChatHub : Hub<IChatHub>
	{
		//Método herdado da classe Hub.
		//É ativado assim que um usuário se conectar ao servidor
		public override async Task OnConnectedAsync()
		{
			//Envia mensagem para todos os usários conectados ao servidor
			await Clients.All.ReceberMensagem($"{Context.ConnectionId} Entrou na conversa. Dê um oi para ele(a)!");
		}

		//Método herdado da classe Hub.
		//É ativado assim que um usuário se desconectar do servidor
		public override async Task OnDisconnectedAsync(Exception? exception)
		{
			//Envia mensagem para todos os usários conectados ao servidor
			await Clients.All.ReceberMensagem($"{Context.ConnectionId} saiu da conversa. Até mais!");
		}
		//Método que criei para enviar mensagem
		public async Task EnviarMensagem(string usuario, string mensagem)
		{
			//Envia mensagem para todos os usários conectados ao servidor
			await Clients.All.ReceberMensagem($"{usuario}: {mensagem}" );
		}
	}
}
