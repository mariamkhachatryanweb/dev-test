'use strict';

class Strapline {
	constructor($scope){
        this.index = 0;
        this.lines = [
            'Our average time from pickup to drop-off',
            'Quicker than your commute',
            'So fast it\'ll blow your socks off',
            '"Slow and steady wins the race" - not someone from Repairly',
            'Recently compared to the Hadron Collider',
            'Repairly representative spotted in Bugatti Veyron, Feb 2016',
            'Usain Bolt, team leader at Repairly'
        ];
		this.line = this.getNewLine()

        setInterval(() => {
            this.line = this.getNewLine();
            $scope.$apply();
        }, 1000)

	}

	getNewLine() {
	    this.index ++;
		if (this.index >= this.lines.length) {
		    this.index = 0;
        }
        return this.lines[this.index];
	}
}

Strapline.$inject = ['$scope'];

export const strapline = {
  controller: Strapline,
  templateUrl: require('ngtemplate!./strapline.html')
}
  