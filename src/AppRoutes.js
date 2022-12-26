import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const routes = [ ];

export const AppRoutes = () => {
    <Router>
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    element={<route.Componet />}
                >                 
                </Route>
            ))}
        </Routes>
    </Router>
}