import React from 'react'
import MyTeamFromMemberTree from './MyTeamFromMemberTree'

const TeamMemberTree = ({ members, expand }) => {
  const [expanded, setExpanded] = React.useState(expand)
  const [newMembers, setNewMembers] = React.useState(members)
  
  return (
    <div style={{
      height: 300,
      width: 300,
      padding: 20,
      border: '1px solid green'
    }}>
      <button onClick={() => {
        setExpanded(!expanded)
        console.log(expanded)
      }}>Expand</button>
      <h3>Time de uma Pessoa</h3>
      {expanded && (
        <div style={{}}>
          <ul>
            {newMembers.map(member => (
              <li key={member}>MemberId: {member}</li>
            ))}
          </ul>

          <MyTeamFromMemberTree members={members} />
        </div>
      )}
    </div>
  )
}
export default TeamMemberTree