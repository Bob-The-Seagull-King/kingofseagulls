import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'

import ProjectIconpendiumPage from '../pages/ProjectIconpendiumPage'
import ProjctVisionsUnveiledPage from '../pages/ProjectVisionsUnveiledPage'
import { AllAbilitiesListPage } from '../../classes/viewmodel/pages/AllAbilitiesListPage'
import path from 'path'

const ProjectRoute: React.FC = () => {

    // Initialize Controller //
    const AbilitiesCollectionController = new AllAbilitiesListPage()

    // Return result -----------------------------
    return (
        <Routes>
            <Route path={ROUTES.PROJECT_ICON_ROUTE} element={<ProjectIconpendiumPage/>} />
            <Route path={ROUTES.PROJECT_VU_ROUTE} element={<ProjctVisionsUnveiledPage controller={AbilitiesCollectionController}/>} />
        </Routes>
    )
    // -------------------------------------------
}

export default ProjectRoute