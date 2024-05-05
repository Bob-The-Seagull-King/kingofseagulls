import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import logo from '../../resources/images/iconpendium_logo.png'

const ProjectIconpendiumPage = (prop: any) => {

    function NavigateNewPage(dir: string) {
        window.open(dir,"_blank", "noreferrer");
    }

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
                                    Created by the co-creator of Lancer and the creator of Kill Six Billion Demons, ICON is a fantasy role playing game heavily inspired by the vast, unknown spaces of classic mythic fantasy, anime, and video games.
                                </p>
                                <p className="bodytext">
                                    ICON is built with a robust narrative system similar to games such as Blades In The Dark, alongside a final-fantasy inspired tactical combat system - with either or both systems usable for play. The game is in it{"'"}s free playtest stage, currently at version 1.5, and is fully playable.
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
                                    ICONpendium is my fan-created and maintained web app that aims to make running ICON easier and more accessible. The current version of ICONpendium, 1.0, serves as a searchable database of player-facing content for ICON including Jobs, Classes, Relics, Bonds, and more.
                                </p>
                                <p className="bodytext">
                                    Also available is a PC compiler that lets you select the player options relevant to your character for even faster referencing, as well as highlightable glossery terms to check what an ability means easily.
                                </p>
                                <p className="bodytext">
                                    In preperation for the release of ICON 2.0, ICONpendium 2.0 is a total rework that includes advanced filtering, adding homebrew content, step by step character creation, as well as GM facing content. This version will be available ASAP to be played alongside the next ICON edition.
                                </p>
                            </div>
                        </div>
                        <div className="col justify-content-center">
                            <div className="subpageaccessbox bordersubpurple">
                                <h1 className="pageaccestext">
                                    More About ICON
                                </h1>
                            </div>
                            
                            <div style={{marginTop:"1em"}} />

                            <div className="row justify-content-center" style={{width:"100%", margin:"0em"}}>
                                <div className="col-11 justify-content-center">              
                                        <div className="pageaccessbox bordersubblue hovermouse" onClick={() => NavigateNewPage("https://massif-press.itch.io/icon")}>
                                            <h1 className="pageaccestextblue" style={{fontSize:"1.25em"}}>
                                                Get ICON on Itch.io
                                            </h1>
                                        </div>     
                                        <br/> 
                                        <div className="pageaccessbox bordersubgreen hovermouse" onClick={() => NavigateNewPage("https://discord.gg/lancer")}>
                                            <h1 className="pageaccestextgreen" style={{fontSize:"1.25em"}}>
                                                Join the ICON Discord
                                            </h1>
                                        </div>     
                                        <br/> 
                                        <div className="pageaccessbox bordersubyellow hovermouse" onClick={() => NavigateNewPage("https://twitter.com/orbitaldropkick")}>
                                            <h1 className="pageaccestextyellow" style={{fontSize:"1.25em"}}>
                                                Follow the Creator
                                            </h1>
                                        </div>     
                                        <br/> 
                                </div>
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
                                    ICONpendium is a client-side web app build using REACT and Typescript. For styling, a combination of SCSS and Bootstrap is used, alongside a number of packages/modules for features such as toasts, popups, etc.
                                </p>
                                <p className="bodytext">
                                    Data is stored in a JSON format that is searched and read. ICONpendium 2.0 uses a software-neutral structure for use across multiple ICON projects that can be searched by a number of parameters.
                                </p>
                            </div>
                            <div className="row justify-content-center" style={{width:"100%", margin:"0em"}}>
                                <div className="col-11 justify-content-center">              
                                        <div className="pageaccessbox bordersubblue hovermouse" onClick={() => NavigateNewPage("https://github.com/Bob-The-Seagull-King/icon-react")}>
                                            <h1 className="pageaccestextblue" style={{fontSize:"1.25em"}}>
                                                Check out the GITHUB repo
                                            </h1>
                                        </div>     
                                        <br/>
                                </div>
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