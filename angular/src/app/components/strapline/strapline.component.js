'use strict';

class Strapline {
	constructor(){
		this.line = `Our average time from pickup to drop-off`
	}
}

Strapline.$inject = [];

export const strapline = {
  controller: Strapline,
  templateUrl: require('ngtemplate!./strapline.html')
}
  