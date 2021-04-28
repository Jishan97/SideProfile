import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const HomePage = lazy(() => import('../pages/home/index'))
const AboutPage = lazy(() => import('../pages/about/index'))
const ServicePages = lazy(() => import('../pages/services/index'))
const DevelopmentPage = lazy(() => import('../pages/development/index'))
const DesignPage = lazy(() => import('../pages/design/index'))
const NavbarComponent = lazy(() => import('../components/navbar/NavbarComponent'))
const FooterComponent = lazy(() => import('../components/footer/FooterComponent'))

const routesView = () => {
    const routes = [
        {
            path : "/",
            exact : true,
            navbar : props => <NavbarComponent active = "Home" {...props} />,
            footer : () => <FooterComponent />,
            main : props => <HomePage {...props} />
        },
        {
            path : "/services",
            exact : true,
            navbar : props => <NavbarComponent active = "Home" {...props} />,
            footer : () => <FooterComponent />,
            main : props => <ServicePages {...props} />
        },
        {
            path : "/about",
            exact : true,
            navbar : props => <NavbarComponent active = "Home" {...props} />,
            footer : () => <FooterComponent />,
            main : props => <AboutPage {...props} />
        },
        {
            path : "/development",
            exact : true,
            navbar : props => <NavbarComponent active = "Home" {...props} />,
            footer : () => <FooterComponent />,
            main : props => <DevelopmentPage {...props} />
        },
        {
            path : "/design",
            exact : true,
            navbar : props => <NavbarComponent active = "Home" {...props} />,
            footer : () => <FooterComponent />,
            main : props => <DesignPage {...props} />
        },
    ]

    return (
        <Suspense
            fallback = {
                <div>
                    <p>Portfolio Website</p>
                </div>
            }
        >
            <Router>
                <Switch>
                    {
                        routes.map((route, index) => (
                            <Route 
                                key = {index}
                                path = {route.path}
                                exact = {route.exact}
                                children = {props => <route.navbar {...props} />}
                            />
                        ))
                    }
                </Switch>
                <Switch>
                    {
                        routes.map((route, index) => (
                            <Route 
                                key = {index}
                                path = {route.path}
                                exact = {route.exact}
                                children = {props => <route.main {...props} />}
                            />
                        ))
                    }
                </Switch>
                <Switch>
                    {
                        routes.map((route, index) => (
                            <Route 
                                key = {index}
                                path = {route.path}
                                exact = {route.exact}
                                children = {props => <route.footer {...props} />}
                            />
                        ))
                    }
                </Switch>
            </Router>
        </Suspense>
    )
}

export default routesView