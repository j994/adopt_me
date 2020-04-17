import React, {useState} from 'react';
import SearchParams from './searchParams';
import {Router, Link} from '@reach/router';
import Details from './Details';
import ThemeContext from './ThemeContext';
import NavBar from './NavBar';


const App = () => {
    const theme = useState("darkblue")
    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <NavBar />
                <Router>
                    <SearchParams path="/" />
                    <Details path="/details/:id" />
                </Router>
            </div>
        </ThemeContext.Provider>
    )
}

export default App;