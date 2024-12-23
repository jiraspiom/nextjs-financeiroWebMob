import { format } from 'date-fns'

export function getDataAtualFormatada() {
  const dataAtual = new Date() // Obtém a data atual

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }
  // 31/12/2024 00:00:00 data e hora atual
  return new Intl.DateTimeFormat('pt-BR', options).format(dataAtual)
}

export function getDataFormatada(dataAtual: Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }

  const datastring = new Intl.DateTimeFormat('pt-BR', options)
    .format(dataAtual)
    .split(',')
    .join('')

  // 31/12/2024 00:00
  return datastring
}

export function getDataFormatadaDisplay(valor: string) {
  const dataFormatada: string = format(new Date(valor), 'dd/MM/yyyy HH:mm:ss')

  // 31/12/2024 00:00:00
  return dataFormatada
}
