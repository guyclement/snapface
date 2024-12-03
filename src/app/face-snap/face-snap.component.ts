import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,NgClass, TitleCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
 @Input() faceSnap!: FaceSnap;

  AlreadySnapped!: boolean;
  SnappeButtonLabel!: string;

  constructor(private faceSnapService: FaceSnapsService) {
  }

  ngOnInit(): void {
    this.AlreadySnapped = false;	
    this.SnappeButtonLabel = 'Snap';
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
}
