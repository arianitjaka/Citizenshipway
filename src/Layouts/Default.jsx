import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
const About = lazy(() => import('../Pages/About'))
const Home = lazy(() => import('../Pages/Home'))
const Citizenship = lazy(() => import('../Pages/Citizenship'))
const Residency = lazy(() => import('../Pages/Residency'))
const Countries = lazy(() => import('../Pages/Countries'))
const Contact = lazy(() => import('../Pages/Contact'))

const Default = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/citizenship" component={Citizenship} />
            <Route exact path="/residency" component={Residency} />
            <Route exact path="/countries" component={Countries} />
            <Route exact path="/contact" component={Contact} />
        </Switch>

    )
}

export default Default;