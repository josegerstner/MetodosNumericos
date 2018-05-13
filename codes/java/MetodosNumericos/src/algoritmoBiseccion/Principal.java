package algoritmoBiseccion;

import javax.swing.JOptionPane;

public class Principal {

	public static void main(String[] args) {
		
		//PRUEBO ALGORITMO BISECCION
		Float x = 3f;
		Float y = 2f;
		Float epsilon = 0.003f;
		Float resultado = Funciones.algoritmoBiseccion(x, y, epsilon);
		JOptionPane.showMessageDialog(null, "El resultado es: " + resultado);
		
		 
	}

}
final class Funcion {
	
	// esta es la función que se va a evaluar
	static Float funcion (Float x){
		return 10 * x + 2;
	}
}