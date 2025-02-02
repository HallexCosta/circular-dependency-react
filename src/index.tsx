import React from 'react'
import { createRoot } from 'react-dom/client';
import TeamMembersOverview from './TeamMembersOverview';
import { ErrorBoundary } from 'react-error-boundary';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

const App = () => {
  return (
    <ErrorBoundary fallback={<p>An occurred error</p>}>
      <TeamMembersOverview />
    </ErrorBoundary>
    // <span>Hállex Costa</span>
  );
};

if (root) {
  root.render(
      <App />
  );
}
