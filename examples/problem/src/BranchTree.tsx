import React from 'react'
import Tree from './Tree'
import { generateRandomBranchs } from './utils'
const BranchTree = ({ branchs }) => {
  return <Tree expand={false} branchs={generateRandomBranchs(2, 2)} />
}
export default BranchTree
