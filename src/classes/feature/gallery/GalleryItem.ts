import {IIconpendiumItemData, IconpendiumItem} from '../../IconpendiumItem'
import {ItemType} from '../../Enum'
import { PlayerAddon } from '../addons/Addon'

interface IGalleryItem extends IIconpendiumItemData {
    path: string;
    description: string;
}

class GalleryItem extends IconpendiumItem {
    public readonly path;
    public readonly description;
    public Addons: PlayerAddon[] = [];
    
    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IGalleryItem)
    {
        super(data)
        this.path = data.path;
        this.description = data.description
        this.ItemType = ItemType.Gallery;
        
    }

}

export {IGalleryItem, GalleryItem}

