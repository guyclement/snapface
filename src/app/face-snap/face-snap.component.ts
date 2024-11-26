import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'Face Snap';
    this.description = 'This is a face snap component';
    this.createdDate = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://www.w3schools.com/howto/img_avatar.png';
  }
}
