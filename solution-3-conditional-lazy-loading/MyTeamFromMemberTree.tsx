import React from 'react'
import TeamMemberTree from './TeamMemberTree'
import { generateRandomMembers } from './utils'
const MyTeamFromMemberTree = ({ members }) => {
  return <TeamMemberTree expand={false} members={generateRandomMembers(2, 2)} />
}
export default MyTeamFromMemberTree