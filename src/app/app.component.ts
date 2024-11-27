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
  mySnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap('Face Snap', 'This is a face snap component', new Date(), 10, 'https://www.w3schools.com/howto/img_avatar.png');
  }
}
