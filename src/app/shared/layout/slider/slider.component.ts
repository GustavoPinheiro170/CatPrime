import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  @Output() informations = new EventEmitter();

  @Output() video: Object = [];

  arrayFilmes: any= [];
  funcionSlider: void | Object ;

  slider: any;
  wrap: any;
  wrapper: string = '';

  dist = {
    finalPosition: 0,
    startX: 0,
    movement: 0,
    movePosition: 0
  }

  move: boolean = true

  showInformation: boolean = false;

  constructor(
    private service: LayoutService,

  ) { }


  ngOnInit(): void {
    this.service.getFilmes().subscribe((item: any) => this.arrayFilmes = item)
    this.funcionSlider = this.Slider('.slider_itens', '.container_hover');
    this.init();

  }


  Slider(slide: string, wrapper: string) {
    return (
      this.slider = document.querySelector(slide),
      this.wrap = document.querySelector(wrapper)
    )
  }

  positionElement(element: any) {
    return element.offsetLeft
  }

  moveSlide(distX: number) {
    this.transition();
    this.dist.movePosition = distX;
    this.slider.style.transform = `translate3d(${distX}px, 0, 0)`;
    const slideArray = [...this.wrap.children].map((element) => {
      const position = this.positionElement(element)
      return {
        element,
        position
      }
    })

    const index = slideArray.length - 1;

    if (distX > slideArray[0].position) {
      this.transition();
      this.dist.movePosition = slideArray[0].position
      distX = this.dist.movePosition;
      this.slider.style.transform = `translate3d(${slideArray[0].position}px, 0, 0)`;
      return false
    }
    else if (distX < slideArray[index].position - 200) {
      this.service.getFilmes().subscribe((item: any) => {
        return [this.arrayFilmes.push(...item)]
        } 
      )
    }
    return true
  }

  transition() {
    this.slider.style.transition = 'transform .3s';
  }
  updatePosition(clientX: any) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event: any) {
    let movetype;
    if (event.type == 'mousedown') {
      event.preventDefault();
      this.dist.startX = event.clientX;
      movetype = 'mousemove'
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      movetype = 'touchmove'
    }
    this.wrap.addEventListener(movetype, this.onMove);
  }

  onMove(event: any) {
    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0]
    if (this.move) {
      const finalPosition = this.updatePosition(pointerPosition)
      this.moveSlide(finalPosition);
    } else {
      this.moveSlide(-296);
      this.move = true
    }
  }

  onEnd(event: any) {
    const movetype = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';
    this.wrap.removeEventListener(movetype, this.onMove);
    this.dist.finalPosition = this.dist.movePosition
  }

  addSlideEvents() {
    this.wrap.addEventListener('mousedown', this.onStart);
    this.wrap.addEventListener('touchstart', this.onStart);
    this.wrap.addEventListener('mouseup', this.onEnd);
    this.wrap.addEventListener('touchend', this.onEnd);


  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }


  init() {
    this.bindEvents()
    this.addSlideEvents();
    return this;
  }


  // Recupera dados para banner


  opacityAnimation() {
    const image = document.getElementById('js-animation');
    if (image) {
      image.style.animation = 'opacityDown 3s forwards';
      setTimeout(() => {
        image.style.animation = 'none';
      }, 4000)
    }
  }
  getInfo(event: any) {
    this.informations.emit(event)
    this.opacityAnimation()
  }

}
