namespace server
{
	public interface IChatHub
	{
		//Ao definir uma interface, posso definir os métodos da classe ChatHub de forma padronizada
		public Task ReceberMensagem(string mensagem);
	}
}
