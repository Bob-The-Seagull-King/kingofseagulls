import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import { ViewAbilitiesCollection } from '../../classes/viewmodel/collections/ViewAbilitiesCollections'
import { AllAbilitiesListPage } from '../../classes/viewmodel/pages/AllAbilitiesListPage'
import { AbilitiesFilterManager } from '../../classes/viewmodel/collections/filters/AbilitiesFilterManager'

import logo from '../../resources/images/iconpendium_logo.png'

import AbilityDisplay from '../components/features/abilities/AbilityDisplay'
import ViewTableItemDisplay from '../components/subcomponents/list/ViewTableItemDisplay'
import AbilityFilterSelectDisplay from '../components/subcomponents/filters/filterselectors/AbilityFilterSelectDisplay'

const ProjectIconpendiumPage = (prop: any) => {
    // Initialize controllers and managers
    const ViewPageController: AllAbilitiesListPage = prop.controller
    const AbilitiesCollectionController: ViewAbilitiesCollection = ViewPageController.Collection;
    const FilterManager: AbilitiesFilterManager = ViewPageController.FilterManager;

    // Initialize Use State
    const [_activeItems, returnstate] = useState(AbilitiesCollectionController.AbilitiesList);
    const [_foundItems, returntable] = useState(AbilitiesCollectionController.itemcollection);
    const [_keyval, updatekey] = useState(1);

    let listcolourval = 0;

    // Functions -----------------------------------------------------------------------------------

    /**
     * @return the current colour value + 1
     */
    function getcolor() {
        listcolourval += 1;
        return listcolourval;
    }

    /**
     * Update state of the list of abilities currently active
     */
    function ItemRecall() {
        returnstate(RecallAbilities())
    }

    /**
     * Get the controller to update the search, then update
     * the state of the ability/item list arrays. Update the
     * keyval in order to force a rerender of elements.
     */
    function UpdateSearch() {
        ViewPageController.updateSearch();
        returntable(RecallTable())
        returnstate(RecallAbilities())
        updatekey(_keyval+1)
    }

    /**
     * @returns Update the state of the abilities selected
     */
    function RecallAbilities() {
        const abilities = AbilitiesCollectionController.ReturnAbilities();
        return abilities;
    }

    /**
     * @returns Update the state of the items available to select
     */
    function RecallTable() {
        const table = AbilitiesCollectionController.ReturnItems();
        return table;
    }

    /**
     * @returns The filter display component
     */
    function ReturnSearchFilterBox() {
        return (
            <AbilityFilterSelectDisplay controller={ViewPageController} runfunction={UpdateSearch}/>
        )
    }

    // Return result -----------------------------
    return (
        <div className="container">
            <div className="row justify-content-center m-0 p-0">
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className="row" style={{width:"100%"}}>
                        {/*<div className="col-12" style={{display:"flex",alignItems:"center",textAlign:"center"}}>
                                <h1 className="packsubtitle" style={{width:"100%",textAlign:"center"}}>
                                    Yes I Am Very Normal About TTRPGs Why Do You Ask?
                                </h1>
    </div>*/}
                    </div>
                    <div className="row">
                        <img src={logo} style={{maxWidth:"100%"}} />
                    </div>
                    <div className="row">
                        <div className="separator"><h3 style={{fontFamily:"Libre Baskerville"}}>What is Iconpendium?</h3></div>
                    </div>
                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sx-1 row-cols-xs-1 row-cols-1">
                        <div className="col">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default ProjectIconpendiumPage