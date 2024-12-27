function organizarDados() {
  let dados = document.getElementById("dados").value;
  let frontend = document.getElementById("info");
  const linhas = dados.split("\n");
  let sucursal = "";
  let apolice = "";
  let dataInicioVigencia = "";
  let dataFimVigencia = "";
  let dataEmissao = "";
  for (const linha of linhas) {
    if (linha.includes("Sucursal")) {
      // Extrair Sucursal e Apólice
      const match = linha.match(/Sucursal\s+(\d+).*Apólice\s+(\d+)/);
      if (match) {
        sucursal = match[1];
        apolice = match[2];
      }
    }
    if (linha.includes("Data Inicio Vigência")) {
      // Extrair datas de início e fim da vigência
      const match = linha.match(
        /Data Inicio Vigência\s+([\d/]+).*Data Fim Vigência\s+([\d/]+)/
      );
      if (match) {
        dataInicioVigencia = match[1];
        dataFimVigencia = match[2];
      }
    }
    if (linha.includes("Data da Emissão")) {
      // Extrair data da emissão
      const match = linha.match(/Data da Emissão\s+([\d/]+)/);
      if (match) {
        dataEmissao = match[1];
      }
    }
  }

  // Montar o resultado
  const resultado = {
    sucursalApolice: sucursal + apolice, // Concatenar sucursal com apólice
    dataInicioVigencia,
    dataFimVigencia,
    dataEmissao,
  };
  console.log(resultado)
  frontend.innerHTML = `
        <p>Data de Emissão: ${resultado.dataEmissao}</p>
        <p>Data de Ínicio da Vigência: ${resultado.dataInicioVigencia}</p>
        <p>Data de Fim da Vigência: ${resultado.dataFimVigencia}</p>
        <p>N da Apólice + Sucursal: ${resultado.sucursalApolice}</p>
        <p>Sucursal: ${sucursal}</p>
        <p>Apólice: ${apolice}</p>
    `
  return resultado;
}


function organizarPagamento(){
    let pagamentos = document.getElementById("pagamentos").value
    const linhas = pagamentos.split("\n");

    // Inicializar variáveis para armazenar os dados
    let vencimentoPrestacao1 = null;
    let vencimentoPrestacao2 = null;

    // Processar as linhas
    for (const linha of linhas) {
        const colunas = linha.split("\t");

        // Verificar se a linha tem pelo menos 2 colunas e capturar dados
        if (colunas.length >= 2) {
            const numeroPrestacao = colunas[0].trim();
            const dataVencimento = colunas[1].trim();

            // Capturar a data de vencimento da prestação 1
            if (numeroPrestacao === "1") {
                vencimentoPrestacao1 = dataVencimento;
            }

            // Capturar a data de vencimento da prestação 2
            if (numeroPrestacao === "2") {
                vencimentoPrestacao2 = dataVencimento;
            }
        }
    }
    let pagamentosinfo = document.getElementById('pagamentosInfo')
    pagamentosinfo.innerHTML = `
        <p>Vencimento prestação 1 ${vencimentoPrestacao1}</p>
        <p>Vencimento prestação 2 ${vencimentoPrestacao2}</p>
    `

}