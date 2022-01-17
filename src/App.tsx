import React from 'react'
import {Suspense, lazy} from 'react'
import {Loading} from './pages/loading'

function App() {

  const Index = lazy(() => import('./pages/index')) 

  return (
    <Suspense fallback={() => <Loading />}>
     <Index />
    </Suspense>
  );
}

export default App;
