import React from 'react'
import TeamMemberTree from './TeamMemberTree'
import { generateRandomBranchs } from './utils'

const MyTeamFromMemberTree = ({ members }) => {
  return <TeamMemberTree expand={false} members={generateRandomBranchs(2, 2)} />
}
export default MyTeamFromMemberTree
