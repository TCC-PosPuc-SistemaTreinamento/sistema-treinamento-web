import { Activity } from './activity.model'
import { Material } from './material.model'
import { Video } from './video.model'

export class Unit {
    name: String = '';
    position: Number;
    // material: Material = new Material();
    material: any;
    videos: Video[] = [];
    // activity: Activity = new Activity();
    activity: String = null;
    
}