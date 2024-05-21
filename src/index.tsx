/* @refresh reload */
import { Route, Router } from '@solidjs/router'
import { render } from 'solid-js/web'

import './index.css'
import 'keen-slider/keen-slider.min.css'
// import '../node_modules/solid-slider/dist/slider.css';

// Components
import { Footer } from './components/footer'
import { Header } from './components/header'

// Pages
import { AboutUs } from './pages/about-us'
import { GetInTouch } from './pages/get-in-touch'
import { Home } from './pages/home'
import { InAction } from './pages/in-action'
import { NotFound } from './pages/not-found'
import { OurAdventures } from './pages/our-adventures'
import { WhatWeOffer } from './pages/what-we-offer'

const root = document.getElementById('root')

const App = (props: any) => (
  <>
    <Header />
    <main class="mx-auto my-8">{props.children}</main>
    <Footer />
  </>
)

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  )
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/get-in-touch" component={GetInTouch} />
      <Route path="/in-action" component={InAction} />
      <Route path="/our-adventures" component={OurAdventures} />
      <Route path="/what-we-offer" component={WhatWeOffer} />
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  root!
)
