import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'sbx-ng-scaled',
  templateUrl: './sbx-ng-scaled.component.html',
  styleUrls: ['./sbx-ng-scaled.component.scss']
})
export class SbxNgScaledComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() height: number;
  @Input() width: number;
  @Input() scale: number = 1 ;  

  @ViewChild("scaledWrapper") scaledWrapperRef: ElementRef;

  constructor(
    private elementRef: ElementRef
  ){
  }

  ngOnInit(): void {
    this.rescaleHost();
  }

  ngAfterViewInit(): void {
    this.rescaleWrapper();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rescaleHost();
    
    if (this.scaledWrapperRef) {
      this.rescaleWrapper();
    }
  }


  private rescaleHost(): void {
    this.elementRef.nativeElement.style.width = `${this.width * this.scale}px`;
    this.elementRef.nativeElement.style.height = `${this.height * this.scale}px`;
  }

  private rescaleWrapper(): void {
    this.scaledWrapperRef.nativeElement.style.width = `${this.width}px`;
    this.scaledWrapperRef.nativeElement.style.height = `${this.height}px`;
    this.scaledWrapperRef.nativeElement.style.marginLeft = `-${this.width/2}px`;
    this.scaledWrapperRef.nativeElement.style.marginTop = `-${this.height/2}px`;
    this.scaledWrapperRef.nativeElement.style.transform = `scale(${this.scale})`;
  }
  
}
