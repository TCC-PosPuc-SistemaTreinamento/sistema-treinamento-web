import { Activity } from './activity.model'
import { Material } from './material.model'
import { Video } from './video.model'

export class Unit {
    name: String = '';
    position: Number;
    visible: boolean = true;
    material: Material = new Material();
    video: Video = new Video();
    activity: Activity = new Activity();
    
}