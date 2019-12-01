import React from 'react'
import { useSpring, animated } from 'react-spring'
import {Spring} from 'react-spring/renderprops'

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 3]
  const trans1 = (x, y) => `translate3d(${x / 15}px,${y / 25}px,0)`
  const trans2 = (x, y) => `translate3d(${x / 11 + 20}px,${y / 20 + 10 }px,0)`
  const trans3 = (x, y) => `translate3d(${x / 11 - 20}px,${y / 15 - 50 }px,0)`

  function Card() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
      <div className="card--container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
        <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
        <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      </div>
    )
  }


function Intro() {
    return (
      <div>
        <h1 className="f2 mb3">I’m Mike Heitzke, a technical product designer, manager and enthusiast</h1>
        <h2>+ DesignOps + 90’s JDM cars + Powerlifting</h2>
      </div>
    )
  }

export default () => (
  <animated.div style={useSpring({
      from: {opacity: 0, marginTop: -10},
      to: {opacity: 1, marginTop: 0}
    })}>
    <div className="intro pa5 pb6">
      <animated.div className="intro--block container ml-auto mr-auto flex mb5" style={useSpring({
          to: {opacity: 1, marginTop: 0, duration: 4000, delay: 4000},
          from: {opacity: 0, marginTop: -40, duration: 4000, delay: 10000}
        })}>
      <Card />
        <Spring config={{delay: 150}}
          from={{ transform: 'translate3d(0,-10px,0)' }}
          to={{ transform: 'translate3d(0,0x,0)' }}>
          {props => <img style={props} src="profile.png" width="325px"/>}
        </Spring>
        <div className="pa4 intro--block-text bg-white">
          <div className="mt2">
          <Spring config={{delay: 250}}
            from={{ transform: 'translate3d(-2px,-20px,0)', opacity: 0 }}
            to={{ transform: 'translate3d(0,0,0)', opacity: 1 }}>
            {props => <div style={props}><Intro /></div>}
            </Spring>
          </div>
        </div>
      </animated.div>
    </div>
    <div className="tc partners">
      <div className="container">
        <h4 className="silver f4 ml-auto mr-auto fw2 w-80 lh-copy">I’ve been fortunate to partner with great brands in interesting and diverse problems</h4>
        <div className="flex w-80 mt4 mb3 mr-auto ml-auto partner-logos">
          <img width="175px" src="AP.svg" />
          <img width="145px" src="ATT.svg" />
          <img src="eBay.svg" />
          <img src="Sprint.svg" />
          <img src="VZW.svg" />
          <img src="Walmart.svg" />
          <img src="watchbox.svg" />
        </div>
        <a href="#?" className="btn  btn--disabled">I'm workin' on casestudies</a>
        <span className="w-100 tc db f6 mt3 silver">Ask me more, or check back soon</span>
      </div>
    </div>
    <div className="contact">
      <div className="container">
        <div className="w-70 pa4">
          <h3 className="f3 mb4">More?</h3>
          <p className="lh-copy mb3">
            I&rsquo;ve been designing and building products for 10yrs now and have delivered in many different roles, different teams and differing needs. 5 tool players build better teams. I don’t watch baseball but I love the analogy.
          </p>
          <p className="lh-copy">
            Let’s solve some interesting problems together.
          </p>
          <a className="mt4 fl black" href="mailto:mike@heitzke.com">mike@heitzke.com</a>
        </div>
      </div>
      <div className="tr w-80 db b--black-10 pa3 mt3 bt-l ml-auto mr-auto">
          <p className="black-40">'93 'til ∞</p>
        </div>
    </div>
  </animated.div>
)
