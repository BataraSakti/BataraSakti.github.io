var _=Object.defineProperty;var v=(c,i,e)=>i in c?_(c,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[i]=e;var t=(c,i,e)=>(v(c,typeof i!="symbol"?i+"":i,e),e);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))h(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&h(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function h(s){if(s.ep)return;s.ep=!0;const l=e(s);fetch(s.href,l)}})();const m=3,a=50,k=185/2,L=135/2,A="white",B="black",x=100,I=50,M="pink",R="Start",z=20,N="black",X=18,H="gray",P=18,D="green",$=26,U="black",W=200;class G{constructor(i,e,h,s,l,r,u,b,O){t(this,"running");t(this,"ctx");t(this,"holes");t(this,"mole");t(this,"startButton");t(this,"elapsedTime");t(this,"clickCounter");t(this,"winText");t(this,"titleText");t(this,"canvas");t(this,"elapsed");t(this,"elapsedStart");t(this,"canShowMole");this.running=!1,this.ctx=i,this.holes=e,this.mole=h,this.startButton=s,this.elapsedTime=l,this.clickCounter=r,this.winText=u,this.titleText=b,this.canvas=O,this.elapsed=0,this.elapsedStart=0,this.canShowMole=!0,this.render()}start(){this.running=!0,this.startButton.text="Stop",this.render(),this.elapsedStart=Date.now(),this.winText.visible=!1,this.elapsed=0,this.elapsedTime.second=0,this.clickCounter.clicks=0,this.elapsedTime.visible=!0,this.clickCounter.visible=!0,this.startButton.y=this.canvas.height/2+a*2+30,this.update()}stop(){cancelAnimationFrame(1),this.running=!1,this.mole.hide(),this.startButton.text="Start",this.winText.visible||(this.elapsedTime.second=0,this.clickCounter.clicks=0),this.render()}update(){if(this.running){let i=Math.floor(Math.random()*m);this.showMole(this.holes[i].x,this.holes[i].y),this.updateSecond(),requestAnimationFrame(()=>this.update())}}updateSecond(){this.elapsed=Date.now()-this.elapsedStart,this.elapsedTime.second=Math.floor(this.elapsed/1e3),this.render()}showMole(i,e){this.canShowMole&&(this.mole.show(i,e),this.render())}render(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let i of this.holes)i.draw();this.mole.draw(),this.startButton.draw(),this.elapsedTime.draw(),this.clickCounter.draw(),this.winText.draw(),this.titleText.draw()}}function Y(c,i,e,h){return c(),h=setTimeout(()=>i(),e),h}class K{constructor(i,e,h,s,l,r,u){t(this,"x");t(this,"y");t(this,"width");t(this,"height");t(this,"color");t(this,"text");t(this,"ctx");this.x=i,this.y=e,this.width=h,this.height=s,this.color=l,this.text=r,this.ctx=u}draw(){this.ctx.beginPath(),this.ctx.rect(this.x,this.y,this.width,this.height),this.ctx.fillStyle=this.color,this.ctx.fill(),this.ctx.closePath(),this.ctx.font=`${this.height/2}px Arial`,this.ctx.fillStyle=A,this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(this.text,this.x+this.width/2,this.y+this.height/2)}isClicked(i,e){return i>=this.x&&i<=this.x+this.width&&e>=this.y&&e<=this.y+this.height}}class Z{constructor(i,e,h,s){t(this,"x");t(this,"y");t(this,"radius");t(this,"ctx");this.x=i,this.y=e,this.radius=h,this.ctx=s}draw(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2),this.ctx.fillStyle=B,this.ctx.fill(),this.ctx.closePath()}isClicked(i,e){return i>=this.x-this.radius&&i<=this.x+this.radius&&e>=this.y-this.radius&&e<=this.y+this.radius}}class q{constructor(i,e,h,s,l){t(this,"x");t(this,"y");t(this,"width");t(this,"height");t(this,"visible");t(this,"timer");t(this,"image");t(this,"ctx");this.x=i,this.y=e,this.width=h,this.height=s,this.visible=!1,this.timer=0,this.ctx=l,this.image=new Image(this.width,this.height),this.image.src="mole.png",this.image.onload=this.draw}draw(){this.visible&&this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height)}show(i,e){this.timer===0&&(this.visible=!0,this.x=i-this.width/2,this.y=e-this.height/2,this.timer=setTimeout(()=>this.hide(),Math.random()*200+400))}hide(){this.visible=!1,clearTimeout(this.timer),this.timer=0,this.timer=setTimeout(()=>{clearTimeout(this.timer),this.timer=0},Math.random()*200+400)}isClicked(i,e){return this.visible&&i>=this.x&&i<=this.x+this.width&&e>=this.y&&e<=this.y+this.height}}class F{constructor(i,e,h,s,l,r){t(this,"x");t(this,"y");t(this,"second");t(this,"size");t(this,"color");t(this,"ctx");t(this,"visible");this.x=i,this.y=e,this.second=h,this.size=s,this.color=l,this.ctx=r,this.visible=!1}draw(){this.visible&&(this.ctx.font=`${this.size}px Arial`,this.ctx.fillStyle=this.color,this.ctx.textAlign="center",this.ctx.textBaseline="top",this.ctx.fillText(`Elapsed time: ${this.second} seconds`,this.x,this.y))}}class j{constructor(i,e,h,s,l,r){t(this,"x");t(this,"y");t(this,"clicks");t(this,"size");t(this,"color");t(this,"ctx");t(this,"visible");this.x=i,this.y=e,this.clicks=h,this.size=s,this.color=l,this.ctx=r,this.visible=!1}draw(){this.visible&&(this.ctx.font=`${this.size}px Arial`,this.ctx.fillStyle=this.color,this.ctx.textAlign="center",this.ctx.textBaseline="top",this.ctx.fillText(`Clicks: ${this.clicks}`,this.x,this.y))}}class J{constructor(i,e,h,s,l){t(this,"x");t(this,"y");t(this,"size");t(this,"color");t(this,"visible");t(this,"ctx");this.x=i,this.y=e,this.size=h,this.color=s,this.ctx=l,this.visible=!1}draw(){this.visible&&(this.ctx.font=`${this.size}px Arial`,this.ctx.fillStyle=this.color,this.ctx.textAlign="center",this.ctx.textBaseline="top",this.ctx.fillText("You win!",this.x,this.y))}}class Q{constructor(i,e,h,s,l){t(this,"x");t(this,"y");t(this,"size");t(this,"color");t(this,"ctx");this.x=i,this.y=e,this.size=h,this.color=s,this.ctx=l}draw(){this.ctx.font=`${this.size}px Arial`,this.ctx.fillStyle=this.color,this.ctx.textAlign="center",this.ctx.textBaseline="top",this.ctx.fillText("Batara's Catch A Mole!",this.x,this.y)}}let o,d,T,g,p,y,C,E,f,n,w=0,S;function V(c){if(!c)return;o=c,d=o.getContext("2d"),o.width=window.innerWidth,o.height=window.innerHeight;let i=o.width/2-m*a*2/2+30,e=o.height/2-a;T=[];for(let h=0;h<m;h++)T.push(new Z(i,e,a,d)),i+=a*2+15;g=new q(i,e,k,L,d),p=new K(o.width/2-x/2,o.height/2+a*2,x,I,M,R,d),f=0,y=new F(o.width/2-x/2+50,o.height/2+a*2,f,z,N,d),S=new j(o.width/2-x/2+50,o.height/2+a*2-40,f,X,H,d),C=new J(o.width/2-x/2+50,o.height/2+a*2-90,P,D,d),E=new Q(o.width/2-x/2+50,o.height/2-a*2-90,$,U,d),n=new G(d,T,g,p,y,S,C,E,o),o.addEventListener("click",h=>{tt(h),n.winText.visible&&setTimeout(()=>{window.alert(`Gotcha! Time to catch ${n.elapsedTime.second} seconds and ${n.clickCounter.clicks} clicks`)},100)})}function tt(c){let i=o.getBoundingClientRect(),e=c.clientX-i.left,h=c.clientY-i.top;if(n.running&&n.clickCounter.clicks++,p.isClicked(e,h)&&(n.running?n.stop():n.start()),g.isClicked(e,h))n.winText.visible=!0,n.stop();else for(let s of n.holes)s.isClicked(e,h)&&(clearTimeout(w),w=Y(it,et,W*5,w))}function it(){n.canShowMole=!1}function et(){n.canShowMole=!0}V(document.querySelector("canvas"));
