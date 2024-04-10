import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GalleryItem } from '@daelmaak/ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
    items: GalleryItem[] = [
        {
          src: 'https://cdn.pixabay.com/photo/2020/06/23/15/17/avocado-5332878_960_720.jpg',
          thumbSrc:
            'https://cdn.pixabay.com/photo/2020/06/23/15/17/avocado-5332878_960_720.jpg',
          description: 'Description <strong>w/ bold text</strong>',
        },
        {
          src: 'https://cdn.pixabay.com/photo/2017/01/12/02/34/coffee-1973549_960_720.jpg',
          thumbSrc:
            'https://cdn.pixabay.com/photo/2017/01/12/02/34/coffee-1973549_960_720.jpg',
          description: 'Description <i>w/ cursive</i>',
        },
        {
          src: 'https://cdn.pixabay.com/photo/2020/06/26/04/40/flower-5341644_960_720.jpg',
          thumbSrc:
            'https://cdn.pixabay.com/photo/2020/06/26/04/40/flower-5341644_960_720.jpg',
          description: 'Description <p>first line</p><p>second line</p>',
        },
        {
            src: 'https://cdn.pixabay.com/photo/2020/06/26/04/40/flower-5341644_960_720.jpg',
            thumbSrc:
              'https://cdn.pixabay.com/photo/2020/06/26/04/40/flower-5341644_960_720.jpg',
            description: 'Description <p>first line</p><p>second line</p>',
          },
        
      ];
}