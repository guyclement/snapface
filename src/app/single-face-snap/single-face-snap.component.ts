import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,NgClass, TitleCasePipe, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
 faceSnap!: FaceSnap;

  AlreadySnapped!: boolean;
  SnappeButtonLabel!: string;

  constructor(private faceSnapService: FaceSnapsService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.prepareinterface();
    this.getFaceSnap();
  }

  OnAddSnap(): void {
    if(this.AlreadySnapped) {
      this.removeSnap();
      return;
    }
    this.addSnap();
  }

  addSnap(){
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.SnappeButtonLabel = 'Remove snap';
    this.AlreadySnapped = true;
  }

  removeSnap(){
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.SnappeButtonLabel = 'Snap';
    this.AlreadySnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  private prepareinterface() {
    this.AlreadySnapped = false;	
    this.SnappeButtonLabel = 'Snap';
  }
}
