import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
 @Input() faceSnap!: FaceSnap;

  AlreadySnapped!: boolean;
  SnappeButtonLabel!: string;

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
    this.faceSnap.addSnap();
    this.SnappeButtonLabel = 'Remove snap';
    this.AlreadySnapped = true;
  }

  removeSnap(){
    this.faceSnap.removeSnap();
    this.SnappeButtonLabel = 'Snap';
    this.AlreadySnapped = false;
  }
}
