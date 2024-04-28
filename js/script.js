function trocarElementos()
{
    let saida = document.getElementById("saidas");
    let entradas = document.getElementById("entradas");

    // exibe os elementos da saida
    saida.style.display = 'flex';
    // oculta os elesmentos de entrada
    entradas.style.display = 'none'; 
}

function exibirResultado() 
{
    // elementos de entrada
    const nome = document.getElementById("nome").value;
    const qntdClassicos = document.getElementById("qntd-classicos").value;
    const qntdGranulados = document.getElementById("qntd-granulados").value;
    const dataHora = document.getElementById("data-hora").value;

    // elementos de saida
    const subtotal = document.getElementById("subtotal");
    const taxa = document.getElementById("taxa");
    const total = document.getElementById("total");

    if (nome !== '' && qntdClassicos !== '' && qntdGranulados !== '' && dataHora !== '')
    {
        trocarElementos();

        // calculo dos produtos
        const valorTaxa = 5;
        let custoClassicos = qntdClassicos * 5;
        let custoGranulados = qntdGranulados * 7;

        let valorSubtotal = custoClassicos + custoGranulados;
        let valorTotal = valorSubtotal + valorTaxa;

        // exibição dos valores para o usuario
        subtotal.innerHTML = "R$ " + valorSubtotal.toFixed(2);
        taxa.innerHTML = "R$ " + valorTaxa.toFixed(2);
        total.innerHTML = "R$ " + valorTotal.toFixed(2);
    }
    else
    {
        alert('Preencha os campos anteriores para proceguir!');
    }
}

function finalizarPedido() 
{
    alert('Pedido Confirmado!');
    location.reload();
}