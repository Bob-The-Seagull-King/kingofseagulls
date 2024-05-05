import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import logo from '../../resources/images/iconpendium_logo.png'

const ProjectIconpendiumPage = (prop: any) => {

    // Return result -----------------------------
    return (
        <div className="container">
            <div className="row justify-content-center m-0 p-0">
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className="row">
                        <img src={logo} style={{maxWidth:"100%"}} />
                    </div>
                    <div style={{marginTop:"1.5em"}} />
                    <div className="row">
                        <div className="separator"><h3 style={{fontFamily:"Libre Baskerville"}}>Project Information</h3></div>
                    </div>
                    
                    <div style={{marginTop:"2em"}} />
                    
                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sx-1 row-cols-xs-1 row-cols-1">
                        <div className="col">
                            <div className="subpageaccessbox bordersubpurple">
                                <h1 className="pageaccestext">
                                    What Is ICON?
                                </h1>
                            </div>
                            
                            <div style={{marginTop:"1em"}} />

                            <div className="row textHolder">
                                <p className="bodytext">
                                    Content packs are structured JSON files that allow people to make their ICON content accessable in
                                    ICONpendium. Here, you can add or delete content packs to include them in the ICONpendium. You can
                                    hold up to 5MB of content packs at any given time.
                                </p>
                                <p className="bodytext">
                                    Once uploaded you can activate or deactive a content pack. Deactivating it removes it from the ICONpendium,
                                    but still keeps the file stored on your browser and can be turned on again at any time.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="subpageaccessbox bordersubpurple">
                                <h1 className="pageaccestext">
                                    What Is Iconpendium?
                                </h1>
                            </div>
                            
                            <div style={{marginTop:"1em"}} />

                            <div className="row textHolder">
                                <p className="bodytext">
                                    Content packs are structured JSON files that allow people to make their ICON content accessable in
                                    ICONpendium. Here, you can add or delete content packs to include them in the ICONpendium. You can
                                    hold up to 5MB of content packs at any given time.
                                </p>
                                <p className="bodytext">
                                    Once uploaded you can activate or deactive a content pack. Deactivating it removes it from the ICONpendium,
                                    but still keeps the file stored on your browser and can be turned on again at any time.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="subpageaccessbox bordersubpurple">
                                <h1 className="pageaccestext">
                                    More About ICON
                                </h1>
                            </div>
                            
                            <div style={{marginTop:"1em"}} />

                            <div className="row textHolder">
                                <p className="bodytext">
                                    Content packs are structured JSON files that allow people to make their ICON content accessable in
                                    ICONpendium. Here, you can add or delete content packs to include them in the ICONpendium. You can
                                    hold up to 5MB of content packs at any given time.
                                </p>
                                <p className="bodytext">
                                    Once uploaded you can activate or deactive a content pack. Deactivating it removes it from the ICONpendium,
                                    but still keeps the file stored on your browser and can be turned on again at any time.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="subpageaccessbox bordersubpurple">
                                <h1 className="pageaccestext">
                                    Iconpendium Tech Stack
                                </h1>
                            </div>
                            
                            <div style={{marginTop:"1em"}} />

                            <div className="row textHolder">
                                <p className="bodytext">
                                    Content packs are structured JSON files that allow people to make their ICON content accessable in
                                    ICONpendium. Here, you can add or delete content packs to include them in the ICONpendium. You can
                                    hold up to 5MB of content packs at any given time.
                                </p>
                                <p className="bodytext">
                                    Once uploaded you can activate or deactive a content pack. Deactivating it removes it from the ICONpendium,
                                    but still keeps the file stored on your browser and can be turned on again at any time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop:"1.5em"}} />
                    <div className="row">
                        <div className="separator"><h3 style={{fontFamily:"Libre Baskerville"}}>Project Gallery</h3></div>
                    </div>
                    
                    <div style={{marginTop:"2em"}} />
                </div>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default ProjectIconpendiumPage