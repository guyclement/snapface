import { Component } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
    new FaceSnap('Face Snap', 'This is a face snap component', new Date(), 0, 'https://www.w3schools.com/howto/img_avatar.png')
    ,new FaceSnap('Second Face Snap', 'This is my second face snap component', new Date(), 0, 'https://images.unsplash.com/photo-1724685010983-2770a37658b0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    ,new FaceSnap('Last Face Snap', 'This is my last face snap component', new Date(), 0, 'https://images.unsplash.com/photo-1723039914210-a6f13a6931af?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    ];
    this.faceSnaps[1].setLocation('New York');
  }
}
