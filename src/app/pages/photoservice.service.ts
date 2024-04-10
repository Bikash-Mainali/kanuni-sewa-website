import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable()
export class PhotoService {
    private imagesUpdatedSource = new Subject<any[]>()
    private imageSelectedIndexUpdatedSource = new Subject<any>()
    private showImageViewerSource = new Subject<any>()
  
    imagesUpdated$: Observable<any[]> = this.imagesUpdatedSource.asObservable()
    imageSelectedIndexUpdated$: Observable<number> = this.imageSelectedIndexUpdatedSource.asObservable()
    showImageViewerChanged$: Observable<boolean> = this.showImageViewerSource.asObservable()
  
    updateImages(images: any[]): void {
      this.imagesUpdatedSource.next(images)
    }
  
    updateSelectedImageIndex(newIndex: number): void {
      this.imageSelectedIndexUpdatedSource.next(newIndex)
    }
  
    showImageViewer(show: boolean): void {
      this.showImageViewerSource.next(show)
    }  
}    
 