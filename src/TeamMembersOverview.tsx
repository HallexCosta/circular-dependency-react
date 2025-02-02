import React from 'react'
import TeamMemberTree from './TeamMemberTree'
const TeamMembersOverview = () => {

  return (
    <div style={{
      height: 100,
      width: 300,
      padding: 20,
      border: '1px solid red'
    }}>
      <button>Expand</button>
      <TeamMemberTree expand={false} members={[0, 1, 2, 3, 4, 5, 6]} />
    </div>
  )
}
export default TeamMembersOverview