import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'g-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  private dots = [];
  private mouse = {
    x: 0,
    y: 0,
  };
  constructor() {

    // const Dot = this.DotFunction();

    addEventListener('mousemove', (event) => {
      this.mouse.x = event.pageX;
      this.mouse.y = event.pageY;
      // console.log(this.mouse.y + '&&' + this.mouse.x);
      // Dot;
    });
  }

  ngOnInit(): void {

  }

  private DotFunction(): void {
    const x = 0;
    const y = 0;
    const node = (() => {
    });
    const n = document.createElement('div');
    n.className = 'MouseTrail';
    document.body.appendChild(n);
    // return n;
    // alert('k');
  }

  // Dot.prototype.draw = () => {
  //   this.node.style.left = this.x + 'px';
  //   this.node.style.top = this.y + 'px';
  // };

  // for (let i = 0; i < 12; i++) {
  //   const d = new Dot();
  //   dots.push(d);
  // }

  private draw() {
    let x = this.mouse.x;
    let y = this.mouse.y;

    this.dots.forEach((dot, index, dots) => {
      const nextDot = dots[index + 1] || dots[0];
      dot.x = x;
      dot.y = y;
      dot.draw();
      x += (nextDot.x - dot.x) * .6;
      y += (nextDot.y - dot.y) * .6;
    });
  }

  // ngOnInit(): void {
  //   const dots = [],
  //     mouse = {
  //       x: 0,
  //       y: 0
  //     };

  //   const Dot = function() {
  //     this.x = 0;
  //     this.y = 0;
  //     this.node = (() => {
  //       const n = document.createElement('div');
  //       n.className = 'MouseTrail';
  //       document.body.appendChild(n);
  //       return n;
  //     };);
  //   };

  //   Dot.prototype.draw = function() {
  //     this.node.style.left = this.x + 'px';
  //     this.node.style.top = this.y + 'px';
  //   };

  //   for (let i = 0; i < 12; i++) {
  //     const d = new Dot();
  //     dots.push(d);
  //   }


  //   function draw() {

  //     let x = mouse.x,
  //       y = mouse.y;

  //     dots.forEach(function(dot, index, dots) {
  //       const nextDot = dots[index + 1] || dots[0];

  //       dot.x = x;
  //       dot.y = y;
  //       dot.draw();
  //       x += (nextDot.x - dot.x) * .6;
  //       y += (nextDot.y - dot.y) * .6;

  //     });
  //   }

  //   addEventListener('mousemove', function(event) {
  //     mouse.x = event.pageX;
  //     mouse.y = event.pageY;
  //   });

  //   function animate() {
  //     draw();
  //     requestAnimationFrame(animate);
  //   }

  //   animate();
  // }

}
