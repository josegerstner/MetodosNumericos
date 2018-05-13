package algoritmoBiseccion;

public class Funciones {
	/* ----------------------------------------------------------------
	-- ALGORITMO DE BISECCION
	-- BY: GRN
	input = f : R->R continua, a€R, b€R, (a>b), epsilon, f(a)*f(b)<0
	 mientras ((b - a) / a >= epsilon){
	    let c = (a + b) / 2
	    if(f(c) == 0)
	        return c;
	    if(signo(f(a) != signo(f(c)))
	        b = c;
	    else
	        a = c;
	 }
	---------------------------------------------------------------- */
	static Float algoritmoBiseccion(Float a, Float b, Float epsilon){
		while(((b - a) / a) >= epsilon) {
			Float c = (a + b) / 2;
			
			if(Funcion.funcion(c)==0) return c;
			if( signo( Funcion.funcion(a) ) != signo( Funcion.funcion(c) ) )
				b = c;
			else a = c;
		}
		
		return ((a + b) / 2);
	}
	
	/* FUNCION SIGNO */
	static int signo (Float x) {
		if(x>0) return 1;
	    else return -1;
	}
}
