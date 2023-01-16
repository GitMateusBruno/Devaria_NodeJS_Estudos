
try{
    const listaDeProdutosDisponiveis = [
        "Pao",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrao",
        "Sabonete",
        "Detergente",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listadeProdutosSolicitadosDisponiveis  = listaDeProdutosDisponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    listadeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Nos temos esse produto: ${produto}`));
    
    const listadeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    })
    listadeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nos nao temos: ${argumento}`));
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`));
}catch(e){
    console.log('Nao foi possivel executar pedido de compra');
}
