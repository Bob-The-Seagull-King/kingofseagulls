import { ViewCollectionsModel } from "./ViewCollectionsModel";
import { IGalleryItem, GalleryItem } from "../../../classes/feature/gallery/GalleryItem";
import { AbilityFactory } from "../../../factories/features/AbilityFactory";
import { ViewTableItem } from "./ViewTableItem";
import { byPropertiesOf, getColour, sort } from "../../../utility/functions";

class ViewArtGalleryCollections extends ViewCollectionsModel {

     AbilitiesList: GalleryItem[] = [];
    
    /**
     * Empty constructor
     */
    constructor(){ 
        super()
        this.AbilitiesList = []
    }

    /**
     * After the search has been run, create ability objects
     * and assign them to the collection
     */
    public RunSearch() {
        super.RunSearch();
        this.PostSearch();
    }

    /**
     * For each entry in the data results, create an Ability object
     * and add it to the internal list.
     */
    PostSearch() {
        this.CleanupAbilities();
        this.CleanupCollection();
        let i = 0;
        this.dataresults.sort(byPropertiesOf<IGalleryItem>(['name', 'source', 'id']))
        for (i = 0; i < this.dataresults.length; i++) {
            const abilityNew = new GalleryItem(this.dataresults[i]);
            this.AbilitiesList.push(abilityNew)
        }
    }

    /**
     * When destroyed, delete all ability objects
     */
    destructor() {
        this.CleanupAbilities() 
    }

    /**
     * Delete each ability object stored in the collection
     */
    CleanupAbilities() {
        let i = 0;
        for (i = 0; i < this.AbilitiesList.length; i ++) {
            delete this.AbilitiesList[i]
        }
        this.AbilitiesList = []
    }

    CleanupCollection() {
        let i = 0;
        for (i = 0; i < this.itemcollection.length; i ++) {
            delete this.itemcollection[i]
        }
        this.itemcollection = []
    }

    /**
     * Basic get function
     */
    public ReturnAbilities() {
        this.UpdateList();
        return this.AbilitiesList;
    }

    /**
     * Basic return function
     */
    public ReturnItems() {
        return this.itemcollection;
    }
    
    /**
     * Updates the list of abilities to be displayed
     * on screen.
     */
    UpdateList() {
        let i = 0;
        this.AbilitiesList = []
        for (i = 0; i < this.itemcollection.length; i++) {
            if (this.itemcollection[i].IsActive) {
                this.AbilitiesList.push(this.itemcollection[i].HeldItem)
            }
        }
    }
}

export {ViewArtGalleryCollections}