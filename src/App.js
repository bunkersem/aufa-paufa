import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

// pages
import HomePage from './pages/Home'
import ActingPage from './pages/Acting'
import ArtPage from './pages/Art'
import GraphicDesignPage from './pages/GraphicDesign'
import PersonalPage from './pages/Personal'
import PhotographyPage from './pages/Photography'

class App extends Component {
    render() {
        const routes = [
            { name: 'Home', path: '/', component: HomePage },
            { name: 'Acting', path: '/acting', component: ActingPage },
            { name: 'Art', path: '/art', component: ArtPage },
            { name: 'Graphic Design', path: '/graphic-design', component: GraphicDesignPage },
            { name: 'Personal', path: '/personal', component: PersonalPage },
            { name: 'Photography', path: '/photography', component: PhotographyPage },
        ]
        const createRoutes = () =>
            routes.map((route, i) =>
                <Route key={i} exact path={route.path} component={route.component} />);
        const createLinks = () => 
            routes.map((route, i) =>
                <Link key={i} to={route.path}>{route.name}</Link>)

        return (
            <HashRouter>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to React</h1>
                        <nav>
                            {createLinks()}
                        </nav>
                    </header>
                    <main>
                        {createRoutes()}
                    </main>
                </div>
            </HashRouter>

        );
    }
}

export default App;
