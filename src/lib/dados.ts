export function getDespesaJson() {
  return [
    {
      id: 11,
      status: 0,
      data: '05/12/2024',
      descricao: 'padaria',
      categoria: 'Alimentacao',
      conta: 'Carteira',
      valor: '30',
    },
    {
      id: 12,
      status: 1,
      data: '20/12/2025',
      descricao: 'padaria',
      categoria: 'Alimentacao',
      conta: 'Carteira',
      valor: '5',
    },
    {
      id: 13,
      status: 1,
      data: '20/12/2024',
      descricao: 'energia',
      categoria: 'Casa',
      conta: 'Itau',
      valor: '300',
    },
    {
      id: 14,
      status: 1,
      data: '20/12/2024',
      descricao: 'Restaurante menstral',
      categoria: 'Alimentacao',
      conta: 'Carteira',
      valor: '45',
    },
  ]
}
export function getReceitaJson() {
  return [
    {
      id: 1,
      status: 1,
      data: '01/12/2024',
      descricao: 'salario novembro',
      categoria: 'Salario',
      conta: 'Itau',
      valor: '4000',
    },

    {
      id: 2,
      status: 0,
      data: '23/01/2024',
      descricao: 'comissao',
      categoria: 'Bonificacao',
      conta: 'Itau',
      valor: '500',
    },
  ]
}

export function getTransferencia() {
  return [
    {
      id: 121,
      status: 1,
      data: '19/12/2024',
      observacao: 'primeira',
      de: 'nubanco',
      para: 'itauu',
      valor: '100',
    },
    {
      id: 122,
      status: 1,
      data: '19/12/2024',
      observacao: 'segunda',
      de: 'Carteira',
      para: 'nubanco',
      valor: '50',
    },
  ]
}

export function getContas() {
  return [
    {
      id: 1,
      nome: 'Carteira',
      tipo: 'dinheiro',
      saldoAtual: 0,
      saldoPrevisto: 0,
    },
    {
      id: 2,
      nome: 'c_nubanck',
      tipo: 'corrente',
      saldoAtual: 500,
      saldoPrevisto: 500,
    },
    {
      id: 3,
      nome: 'c_itau',
      tipo: 'corrente',
      saldoAtual: 1000,
      saldoPrevisto: 1000,
    },
  ]
}
