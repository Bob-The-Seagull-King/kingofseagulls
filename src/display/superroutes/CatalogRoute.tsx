import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'

import CatalogArtPage from '../pages/CatalogArtPage'
import CatalogWritingPage from '../pages/CatalogWritingPage'
import CatalogBlogPage from '../pages/CatalogBlogPage'
import { AllAbilitiesListPage } from '../../classes/viewmodel/pages/AllAbilitiesListPage'
import path from 'path'

const CatalogRoute: React.FC = () => {

    // Initialize Controller //
    const AbilitiesCollectionController = new AllAbilitiesListPage()

    // Return result -----------------------------
    return (
        <Routes>
            <Route path={ROUTES.CATALOG_ART_ROUTE} element={<CatalogArtPage controller={AbilitiesCollectionController}/>} />
            <Route path={ROUTES.CATALOG_WRITING_ROUTE} element={<CatalogWritingPage controller={AbilitiesCollectionController}/>} />
            <Route path={ROUTES.CATALOG_BLOG_ROUTE} element={<CatalogBlogPage controller={AbilitiesCollectionController}/>} />
        </Routes>
    )
    // -------------------------------------------
}

export default CatalogRoute