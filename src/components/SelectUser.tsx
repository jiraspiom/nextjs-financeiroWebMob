import AsyncSelect from 'react-select/async'
import Select from 'react-select'

export default function SelectUser() {
  const loadOption = () => {
    return [
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 2, value: 3 },
    ]
  }

  const loadOptionAsinc = async () => {
    return [
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 2, value: 3 },
    ]
  }

  return (
    <div>
      <Select options={loadOption()} />
      <AsyncSelect loadOptions={loadOptionAsinc} />
    </div>
  )
}
