import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'
import { useNavigate } from "react-router-dom";

import { AllAbilitiesListPage } from '../../classes/viewmodel/pages/AllAbilitiesListPage'

import logo from '../../resources/images/KOS-Logo.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFistRaised } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faFilePen } from '@fortawesome/free-solid-svg-icons'

const HomeRoute: React.FC = () => {
    const navigate = useNavigate();

    // Initialize Controller //
    const AbilitiesCollectionController = new AllAbilitiesListPage()    

    function NavigateHome(dir: string) {
        navigate('/' + dir);
    }
    // Return result -----------------------------
    return (
        <div>
            <div className="row justify-content-center m-0 p-0">
                <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className="row">
                        <img src={logo} style={{maxWidth:"100%"}} />
                    </div>
                    <div className='row'><div className='col'></div></div>
                    <div className="row">
                        <div className="separator"><h3 style={{fontFamily:"Libre Baskerville"}}>Bio</h3></div>
                    </div>
                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sx-1 row-cols-xs-1 row-cols-1">
                        <div className="col">
                            <div className="pageaccessbox bordersubpurple hovermouse" onClick={() => NavigateHome("compendium/abilities/")}>
                                <FontAwesomeIcon icon={faHeart} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    INTRODUCTION
                                </h1>
                            </div>
                            <div className="verticalspacermed"/>
                        </div>
                        <div className="col">
                            <div className="pageaccessbox bordersubpurple hovermouse" onClick={() => NavigateHome("compendium/abilities/")}>
                                <FontAwesomeIcon icon={faLink} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    SOCIALS
                                </h1>
                            </div>
                            <div className="verticalspacermed"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="separator"><h3 style={{fontFamily:"Libre Baskerville"}}>Projects</h3></div>
                    </div>
                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sx-1 row-cols-xs-1 row-cols-1">
                        <div className="col">
                            <div className="pageaccessbox bordersubpurple hovermouse" onClick={() => NavigateHome("compendium/abilities/")}>
                                <FontAwesomeIcon icon={faWrench} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    ICONPENDIUM
                                </h1>
                            </div>
                            <div className="verticalspacermed"/>
                        </div>
                        <div className='col'>
                            <div className="pageaccessbox bordersubpurple hovermouse" onClick={() => NavigateHome("compendium/abilities/")}>
                                <FontAwesomeIcon icon={faBook} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    VISIONS UNVEILED
                                </h1>
                            </div>
                            <div className="verticalspacermed"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="separator"><h3 style={{fontFamily:"Libre Baskerville"}}>Catalogs</h3></div>
                    </div>
                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sx-1 row-cols-xs-1 row-cols-1">
                        <div className="col">
                            <div className="pageaccessbox bordersubpurple hovermouse" onClick={() => NavigateHome("compendium/abilities/")}>
                                <FontAwesomeIcon icon={faPaintBrush} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    ART
                                </h1>
                            </div>
                            <div className="verticalspacermed"/>
                        </div>
                        <div className="col">
                            <div className="pageaccessbox bordersubpurple hovermouse" onClick={() => NavigateHome("compendium/abilities/")}>
                                <FontAwesomeIcon icon={faPen} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    WRITINGS
                                </h1>
                            </div>
                            <div className="verticalspacermed"/>
                        </div>
                        <div className="col">
                            <div className="pageaccessbox bordersubpurple hovermouse" onClick={() => NavigateHome("compendium/abilities/")}>
                                <FontAwesomeIcon icon={faFilePen} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    BLOG
                                </h1>
                            </div>
                            <div className="verticalspacermed"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="separator"></div>
                    </div>
                </div>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default HomeRoute