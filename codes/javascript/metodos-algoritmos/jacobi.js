//jacobi( [[2,-1,1],[3,3,9],[3,3,5]] , [[-1],[0],[4]] , [ [0],[0],[0] ] , 2)

function jacobi(matrixOriginParam,b,x,cantIters){
	var matrixOrigin = matrixOriginParam
	var b = math.matrix(b);
	var L = getL(matrixOriginParam);
	var D = getD(matrixOriginParam);
	var U = getU(matrixOriginParam);

	var DInv = math.inv(D)
	var DInvNegativa = math.multiply(DInv,-1)
	var LmasU = math.add(L,U)
	var DInvNegPorLmasU = math.multiply(DInvNegativa,LmasU)
	var v = math.multiply(DInv,b)
	/*
	console.log(" Matrix Origin " + matrixOrigin.toString())
	console.log(" L " + L.toString())
	console.log(" D " + D.toString())
	console.log(" U " + U.toString())
	console.log(" D^-1 " + DInv.toString())
	console.log(" -D^-1 " + DInvNegativa.toString())

	console.log(" L+U " + LmasU.toString() )
	console.log(" H = -D^-1 * ( L + U ) " + DInvNegPorLmasU.toString() )
	console.log(" V " + v.toString() )
	*/

	var h = DInvNegPorLmasU

	var xActual = math.matrix(x);
	for ( var i = 0 ; i < cantIters ; i++){
		console.log( "--------------------------------------------------" )
		console.log( "ITERACION " + i )
		var HporX = math.multiply(h,xActual)
		console.log( "H * " + xActual.toString() + " = " + HporX.toString() )
		var HporXmasV = math.add( HporX , v )
		console.log( "H * " + xActual.toString() + " + V = " + HporXmasV.toString() )
		console.log( "--------------------------------------------------" )
		xActual = HporXmasV;
	}
}

function getL(matrix){
	var matrixInterna = [[],[],[]]
	for ( var i = 0 ; i < matrix.length ; i ++){
		for ( var j = 0 ; j < matrix.length ; j ++){
			if( i <= j ) {
				matrixInterna[i][j]=0
			} else {
				matrixInterna[i][j]=matrix[i][j]
			}
		}
	}
	//console.log(math.matrix(matrixInterna).toString() )
	return math.matrix(matrixInterna);
}

function getD(matrix){
	var matrixInterna = [[],[],[]]
	for ( var i = 0 ; i < matrix.length ; i ++){
		for ( var j = 0 ; j < matrix.length ; j ++){
			if( i != j ) {
				matrixInterna[i][j]=0
			} else {
				matrixInterna[i][j]=matrix[i][j]
			}
		}
	}
	//console.log(math.matrix(matrixInterna).toString() )
	return math.matrix(matrixInterna);
}

function getU(matrix){
	var matrixInterna = [[],[],[]]
	for ( var i = 0 ; i < matrix.length ; i ++){
		for ( var j = 0 ; j < matrix.length ; j ++){
			if( i >= j ) {
				matrixInterna[i][j]=0
			} else {
				matrixInterna[i][j]=matrix[i][j]
			}
		}
	}
	//console.log(math.matrix(matrixInterna).toString() )
	return math.matrix(matrixInterna);
}
