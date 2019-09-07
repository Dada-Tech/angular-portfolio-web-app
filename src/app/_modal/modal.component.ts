import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ModalService} from './modal.service';
import { FollowlinkService } from '../services/followlink.service';


@Component({
    selector: 'app-jw-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ModalComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() id: string;
    @Input() cardObj;
    private element: any;
    imageUrls = [];
    imageArr;
    dotArr;
    imageIndex = 1;

  constructor(private modalService: ModalService, private el: ElementRef, public followlink: FollowlinkService) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
        this.cmsToArr();
    }

    ngAfterViewInit(): void {
        this.initImg();
    }

    // remove self from modal service when component is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    modalClose(id) {
    this.modalService.close(id);
    }

    // open modal
    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }

    cmsToArr() {
      let i = 1;
      let temp_img;

      while (this.cardObj.acf.hasOwnProperty('company_image_' + i)) {
        temp_img = this.cardObj.acf['company_image_' + i];

        if (temp_img && (temp_img.length > 5)) {
        this.imageUrls[i - 1] = temp_img;
        }
        i++;
      }
    }

    initImg() {
      this.imageArr = document.getElementsByClassName('img-' + this.id) as HTMLCollectionOf<HTMLImageElement>;
      this.dotArr = document.getElementsByClassName('dot-' + this.id) as HTMLCollectionOf<HTMLImageElement>;
      if (this.imageArr[0] && this.dotArr[0]) {
        for (let i = 0; i < this.imageArr.length; i++) {
          this.imageArr[i].src = this.imageUrls[i];
        }
        this.showImg(1);
      }
    }

    showImg(n) {
      let i;
      if (n > this.imageArr.length) {
        this.imageIndex = 1;
      } else if (n < 1) {
        this.imageIndex = this.imageArr.length;
      } else {
        this.imageIndex = n;
      }

      for (i = 0; i < this.imageArr.length; i++) {
        this.imageArr[i].style.display = 'none';
      }

      for (i = 0; i < this.dotArr.length; i++) {
        this.dotArr[i].className = this.dotArr[i].className.replace(' dot-active', '');
      }

      this.imageArr[this.imageIndex - 1].style.display = 'block';
      this.dotArr[this.imageIndex - 1].className += ' dot-active';
    }

    nextImg(n) {
      this.showImg(this.imageIndex += n);
    }
}
