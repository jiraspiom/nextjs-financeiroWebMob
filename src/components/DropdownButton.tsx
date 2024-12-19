'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'

type Option = { name: string; color: string; link: string } // 'Transações' | 'Despesas' | 'Receitas' | 'Transferências'

export default function DropDownButton(opcao: Option) {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option>({
    name: opcao.name,
    color: opcao.color,
    link: '#',
  })
  const options: Option[] = [
    { name: 'Transações', color: 'bg-purple-600', link: '/transacoes' },
    { name: 'Despesas', color: 'bg-red-600', link: '/transacoes/des' },
    { name: 'Receitas', color: 'bg-green-600', link: '/transacoes/rec' },
    {
      name: 'Transferências',
      color: 'bg-blue-600',
      link: '/transacoes/trasferencia',
    },
  ]

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option)
    setShowOptions(false) // Fechar as opções após selecionar uma
  }

  return (
    <div className="p-4">
      <Button
        className={`rounded-full px-4 py-2  ${selectedOption.color} text-white`}
        onClick={() => setShowOptions(!showOptions)}
      >
        {selectedOption.name}
      </Button>
      {showOptions && (
        <div>
          <div className="fixed z-10 bg-opacity-0">
            <ul className="mt-2 flex w-40 cursor-pointer flex-col rounded-md bg-gray-800 px-4  py-2 text-white">
              {options.map(option => (
                // </li><li key={option.name}>
                <li
                  key={option.name}
                  onKeyDown={() => {}}
                  onClick={() => handleOptionSelect(option)}
                >
                  <Link href={option.link}>
                    <span className="flex items-center text-sm font-medium text-white dark:text-white">
                      <span
                        className={`mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full ${option.color}`}
                      />
                      <div>{option.name}</div>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
