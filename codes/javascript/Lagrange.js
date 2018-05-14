xs=[0,1,2,3]
ys=[1,1,1,2]

function lagrangeStr(){
	var lagrange = "";
	for (var i = 0 ; i < xs.length ; i++ ) {
		for (var j = 0 ; j < xs.length ; j++ ) {
			if( i != j ){
				lagrange += "( x - " + xs[j] + " / " + xs[i] + " - " + xs[j] + ") * "
			}
		}
		lagrange += " * " + ys[i] + " + \n"
	}
	console.log(lagrange)
}

function lagrangeResult(x){
	var lagrange = 0;
	for (var i = 0 ; i < xs.length ; i++ ) {
		var lagrangeParcial = 1;
		for (var j = 0 ; j < xs.length ; j++ ) {
			if( i != j ){
				lagrangeParcial *= ( (x - xs[j]) /  (xs[i] - xs[j]) )
			}
		}
		lagrangeParcial *= ys[i]
		console.log(lagrangeParcial	)
		lagrange += lagrangeParcial
	}
	console.log(lagrange)
}

function lagrangeStr2(x){
	var lagrange = "";
	for (var i = 0 ; i < xs.length ; i++ ) {
		for (var j = 0 ; j < xs.length ; j++ ) {
			if( i != j ){
				lagrange += "( " + x + " - " + xs[j] + " / " + xs[i] + " - " + xs[j] + ") * "
			}
		}
		lagrange += " * " + ys[i] + " + \n"
	}
	console.log(lagrange)
}