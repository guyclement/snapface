import {Injectable} from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [new FaceSnap('Face Snap', 'This is a face snap component', new Date(), 0, 'https://www.w3schools.com/howto/img_avatar.png')
        ,new FaceSnap('Second Face Snap', 'This is my second face snap component', new Date(), 0, 'https://images.unsplash.com/photo-1724685010983-2770a37658b0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D').withLocation('New York')
        ,new FaceSnap('Last Face Snap', 'This is my last face snap component', new Date(), 200, 'https://images.unsplash.com/photo-1723039914210-a6f13a6931af?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
        ];

    
    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    snapFaceSnapById(id: string, SnapType: SnapType): void {
        const faceSnap = this.getFaceSnapById(id);
        faceSnap.snap(SnapType);
    }

    getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
      }
}