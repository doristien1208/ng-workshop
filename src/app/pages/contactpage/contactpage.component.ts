import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as p5 from 'p5';
@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent implements OnInit {
  @ViewChild('sketchHolder') sketchHolder!:ElementRef;
  gamecanvas:any;
  sketchHeight=100;
  sketchWidth=100;
  ;
  constructor() { }

  ngOnInit(): void {
    let value=0;
    const sketch=(s:p5)=>{
      s.setup=()=>{
        let canvas = s.createCanvas(this.sketchWidth,this.sketchHeight,s.WEBGL);
        canvas.parent('sketch-holder');
      }
      s.draw=()=>{
        s.fill(value);
        s.rect(25,25,50,50);
      }
      s.mousePressed=()=>{
        console.log(value);
        if(value ===0){
          value=255;
        }
        else{
          value=0;
        }
      }
    }
    this.gamecanvas=new p5(sketch);
  }

}
