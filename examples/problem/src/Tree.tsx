import React from 'react'
import BranchTree from './BranchTree'

const Tree = ({ branchs, expand }) => {
  const [expanded, setExpanded] = React.useState(expand)
  const [newBranchs, setBranchs] = React.useState(branchs)

  const onClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div
      style={{
        height: 300,
        width: 300,
        padding: 20,
        border: '1px solid green'
      }}
    >
      <button onClick={onClick}>Expand</button>
      <h3>Time de uma Pessoa</h3>
      {expanded && (
        <div style={{}}>
          <ul>
            {newBranchs.map((branch) => (
              <li key={branch}>BranchId: {branch}</li>
            ))}
          </ul>

          <BranchTree branchs={branchs} />
        </div>
      )}
    </div>
  )
}
export default Tree
