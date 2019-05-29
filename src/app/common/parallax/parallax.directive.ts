import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
	exportAs: 'common-parallax',
	selector: 'common-parallax, [common-parallax]',
	host:{
		'(ionScroll)':'onCntscroll($event)',
	}
})
export class ParallaxCommonDirective{

	speed: any='0.3s';

	parallaxObj;

	parallaxTranslateObj;
	
	parallaxCollapseObj;

	parallaxCollapseStartScrollObj;
	
	parallaxBlurObj;
	
	parallaxUpObj;
	parallaxUpFastObj;
	
	parallaxDownObj;
	parallaxDownFastObj;

	constructor(public element: ElementRef, public renderer: Renderer) {
		console.log('Hello ParallaxCommon');
	}


	ngOnInit(){
		this.parallaxObj = this.element.nativeElement.parentElement.getElementsByClassName("parallax-obj");

		this.parallaxTranslateObj = this.element.nativeElement.parentElement.getElementsByClassName("parallax-translate-obj");
		this.parallaxCollapseObj = this.element.nativeElement.parentElement.getElementsByClassName("parallax-collapse-obj");
		this.parallaxBlurObj = this.element.nativeElement.parentElement.getElementsByClassName("parallax-blur-obj");
		
		this.parallaxDownObj = this.element.nativeElement.parentElement.getElementsByClassName("parallax-down-obj");
		this.parallaxDownFastObj = this.element.nativeElement.parentElement.getElementsByClassName("parallax-down-fast-obj");

		this.parallaxUpObj = this.element.nativeElement.parentElement.getElementsByClassName("parallax-up-obj");
		this.parallaxUpFastObj = this.element.nativeElement.parentElement.getElementsByClassName("parallax-up-fast-obj");

		this.parallaxCollapseStartScrollObj = this.element.nativeElement.parentElement.getElementsByClassName("parallax-collapse-start-scroll-obj");

	}

	onCntscroll(ev){

		let willScrool = ev.detail.scrollTop;

		for (var item of this.parallaxTranslateObj) {
			this.renderer.setElementStyle(item, 'webkitTransition', this.speed);
			if(item.getBoundingClientRect().y <= 50){
				this.renderer.setElementStyle(item, 'transform', 'translateY(-100%)');
			}else{
				this.renderer.setElementStyle(item, 'transform', 'translateY(0px)');
			}
		};


		for (var item of this.parallaxCollapseObj) {
			if(item.getBoundingClientRect().y - item.clientHeight <= 0 ){
				this.renderer.setElementStyle(item, 'webkitTransition', item.clientHeight * 0.004 +'s');
				this.renderer.setElementStyle(item, 'margin-top', '-'+ item.clientHeight +'px');
			}else{
				this.renderer.setElementStyle(item, 'margin-top', '0px');
			}
		};


		for (var item of this.parallaxCollapseStartScrollObj) {
			if(willScrool >= 10 ){
				this.renderer.setElementStyle(item, 'webkitTransition', this.speed);
				this.renderer.setElementStyle(item, 'margin-top', '-'+ item.clientHeight +'px');
			}else{
				this.renderer.setElementStyle(item, 'margin-top', '0px');
			}
		};
		


		for (var item of this.parallaxUpObj) {
			this.renderer.setElementStyle(item, 'webkitTransition', this.speed);
			if(ev.detail.scrollTop > item.getBoundingClientRect().y ){
				this.renderer.setElementStyle(item, 'margin-top', item.getBoundingClientRect().y / 3 +'px');
			}else{
				this.renderer.setElementStyle(item, 'margin-top', '0px');
			}
		};
		for (var item of this.parallaxUpFastObj) {
			this.renderer.setElementStyle(item, 'webkitTransition', this.speed);
			if(ev.detail.scrollTop > item.getBoundingClientRect().y ){
				this.renderer.setElementStyle(item, 'margin-top', item.getBoundingClientRect().y / 1.5 +'px');
			}else{
				this.renderer.setElementStyle(item, 'margin-top', '0px');
			}
		};



		for (var item of this.parallaxDownObj) {
			this.renderer.setElementStyle(item, 'webkitTransition', this.speed);
			if(ev.detail.scrollTop - item.getBoundingClientRect().y >= 0){
				this.renderer.setElementStyle(item, 'margin-top', item.getBoundingClientRect().y / 4 +'px');
			}else{
				this.renderer.setElementStyle(item, 'margin-top', '0px');
			}
		};
		for (var item of this.parallaxDownFastObj) {
			this.renderer.setElementStyle(item, 'webkitTransition', this.speed);
			if(ev.detail.scrollTop - item.getBoundingClientRect().y >= 0){
				this.renderer.setElementStyle(item, 'margin-top', item.getBoundingClientRect().y / 2 +'px');
			}else{
				this.renderer.setElementStyle(item, 'margin-top', '0px');
			}
		};



		for (var item of this.parallaxBlurObj) {
			if(ev.detail.scrollTop - item.getBoundingClientRect().y > 70 ){
				this.renderer.setElementStyle(item, 'filter', 'blur('+ willScrool / 40 +'px)');
			}
		};

		if(ev.detail.scrollTop < 56){
			
			for (var item of this.parallaxObj) {
			    this.renderer.setElementStyle(item, 'margin-top', '0px');
			    this.renderer.setElementStyle(item, 'transform', 'translateY(0px)');
			    this.renderer.setElementStyle(item, 'filter', 'unset');
			}

		}

	}

}
