import React from 'react'
import { createRoot } from 'react-dom/client'
import TreeOverview from './src/TreeOverview'

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = createRoot(rootEl)
  root.render(<TreeOverview />)
}
