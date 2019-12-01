import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import ReactGA from 'react-ga';

import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import { useSpring, animated } from 'react-spring'

import './app.css'

const trackingId = "UA-11264440-1";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  const fadeAnimation = useSpring({
    from: { opacity: 1 },
    to: { opacity: 1 }
  });

  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={
          <animated.div className="tc intro fixed w-100 h-100" style={fadeAnimation}>
          </animated.div>
        }>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
