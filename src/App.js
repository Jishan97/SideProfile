import React from 'react'
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import Routes from './config/routes';

const App = () => {
  return(
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  )
}

export default App;
