import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => (
  <div style={{ marginBottom: 10 }}>
    <input onChange={(ev) => props.filterChange(ev.target.value)} placeholder='Filter'/>
  </div>
)

const ConnectedFilter = connect(null, { filterChange })(Filter)
export default ConnectedFilter