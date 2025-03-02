import React from 'react'

const Remote1 = React.lazy(() => import('remote1/App'))

export default function App() {
  return (
    <section>
      <p>Shell</p>
      <React.Suspense fallback={<p>Loading Remote1...</p>}>
        <Remote1 />
      </React.Suspense>
    </section>
  )
}
