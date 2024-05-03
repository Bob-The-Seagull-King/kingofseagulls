import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './resources/routes-constants'
import './resources/styles/_icon.scss'

/* 
    Major routes are placed here.
    These routes have NO states, and are where the controllers/manager
    objects are created for Main routes.
*/
import HomeRoute from './display/superroutes/HomeRoute'
import CatalogRoute from './display/superroutes/CatalogRoute'
import ProjectRoute from './display/superroutes/ProjectRoute'
import SuperHeader from './display/headers/SuperHeader'

const RootComponent: React.FC = () => {
    return (
        <div>
            <Router>
                <SuperHeader/>
                <Routes>
                    <Route path={ROUTES.PROJECT_ROUTE} element={<ProjectRoute />} />
                    <Route path={ROUTES.CATALOG_ROUTE} element={<CatalogRoute />} />
                    <Route path={ROUTES.HOME_ROUTE} element={<HomeRoute />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RootComponent
