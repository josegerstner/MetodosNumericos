package metodoNewton;

public class Funciones {
	/* ----------------------------------------------------------------
	-- METODO NEWTON
	-- BY: GRN
	X0: arbitrario
	X n+1 = Xn - f(Xn)/f'(Xn), f'(Xn)!=0, n>=0 ?
	---------------------------------------------------------------- */
	static Float metodoNewton(Float a, Float b, Float epsilon){
		while(((b - a) / a) >= epsilon) {
			Float c = (a + b) / 2;
			
			if(Funcion.funcion(c)==0) return c;
			if( signo( Funcion.funcion(a) ) != signo( Funcion.funcion(c) ) )
				b = c;
			else a = c;
		}
		
		return ((a + b) / 2);
	}
	// convergencia local Newton
	static int signo (Float x) {
		if(x>0) return 1;
	    else return -1;
	}
}
