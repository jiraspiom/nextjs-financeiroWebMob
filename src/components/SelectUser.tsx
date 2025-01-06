import AsyncSelect from 'react-select/async'

export default function SelectUser() {
  const loadOption = async () => {
    return [
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 2, value: 3 },
    ]
  }

  return <AsyncSelect loadOptions={loadOption} />
}
