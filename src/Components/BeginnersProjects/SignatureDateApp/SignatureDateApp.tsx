import { useState } from 'react'
import DataSignAndDate from './DataSignAndDate'

const SignatureDateApp = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  const NameHandler = (e: any) => {
    setName(e.target.value)
  }
  const DateHandler = (e: any) => {
    setDate(e.target.value)
  }
  return (
    <>
      <DataSignAndDate name={name} date={date} />
      <input type="text" value={name} onChange={NameHandler} />
      <input type="date" value={date} onChange={DateHandler} />
    </>
  )
}

export default SignatureDateApp
