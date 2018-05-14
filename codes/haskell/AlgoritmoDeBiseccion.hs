------------------------------------------------------------------
-- ALGORITMO DE BISECCION
-- BY: GRN
------------------------------------------------------------------
-- input: f: R->R contínua
-- defino la funcion
-- recibo un Num a, un num b y me da un resultado
module AlgoritmoDeBiseccion
where 

type Dominio = Float
type UnParametro = Dominio -> Dominio
type DosParametros = Dominio -> Dominio -> Dominio
type TresParametros = Dominio -> Dominio -> Dominio -> Dominio
type A = Dominio
type B = Dominio
type C = Dominio -> Dominio -> Dominio


-- una función cualquiera que vaya de Reales en Reales
-- ejemplo
-- acá va la función que necesito
funcion :: A -> B -> Dominio
funcion num1 num2 = (num1 ^ 3) + (3 * num2)

-- /a € R, b € R, (a>=epsilon)

condicionesParaAnalizarFuncion :: A -> B -> Bool
condicionesParaAnalizarFuncion a b = (a>b) 

epsilon :: Float
epsilon = 0.003

funcionDeAPorFuncionDeBEsMayorACero :: UnParametro -> A -> B -> Bool
funcionDeAPorFuncionDeBEsMayorACero funcion a b = mayorACero ((funcion a) * (funcion b))

mayorACero :: Dominio -> Bool
mayorACero = ( > 0)

beMenosASobreAMayorOIgualAEpsilon :: A -> B -> Bool
beMenosASobreAMayorOIgualAEpsilon a b = (>= epsilon) (beMenosASobreA a b)

beMenosASobreA :: A -> B -> Dominio
beMenosASobreA a b = (b-a)/a

signo :: Dominio -> Dominio
signo x
    |mayorACero x = (*) (-1) x
    |otherwise = x


-- mientras a b = repeat beMenosASobreA MayorOIgualAEpsilon

    -- c = (a+b)/2
c :: Dominio -> Dominio -> Dominio
c a b = aMasBSobreDos a b

aMasBSobreDos :: A -> B -> Dominio
aMasBSobreDos a b = (a + b) / 2

funcionDeCIgualACero :: UnParametro ->  Dominio -> Bool
funcionDeCIgualACero funcion c = igualACero (funcion c)

igualACero :: Dominio -> Bool
igualACero = (== 0)

signoDeFuncionDeADistintoASignoDeFuncionDeC :: UnParametro -> A -> Dominio -> Bool
signoDeFuncionDeADistintoASignoDeFuncionDeC funcion a c = (/=)(signo (funcion a)) (signo (funcion c))