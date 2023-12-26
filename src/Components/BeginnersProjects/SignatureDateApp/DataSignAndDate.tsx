import React from 'react'

const DataSignAndDate = ({ name, date }: SignDateProps) => {
  return (
    <React.Fragment>
      <h3> {name ? name : 'Name:'}</h3>
      <h3> {date ? date : 'Date'}</h3>
    </React.Fragment>
  )
}

export default DataSignAndDate
