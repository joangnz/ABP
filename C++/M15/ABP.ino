int duracion; 
int trigger = 10; //pin 10			
int temp = 9;		//pin 9
int distancia; //distancia de un objeto sobre el detector en centimentros
int aforo = 0; //cantidad de gente

void setup()
{
  pinMode(trigger, OUTPUT); 	//salida
  pinMode(temp, INPUT);		//entrada

  Serial.begin(9600);  		//inicializacion

}

void loop()
{

  //enviar un pulso al pin conectado a trigger (10)
  digitalWrite(trigger, HIGH); 		
  delay(1);			//1ms de delay para evitar errores	
  digitalWrite(trigger, LOW);	
  
  duracion = pulseIn(temp, HIGH);	//devuelve un pulso alto
  					
  distancia = duracion / 58.2;	//distancia en centimentros

  if (distancia < 15) aforo++; //si distanvia < a 15cm el aforo aumenta

  //mostrar en pantalla "Aforo: XX"
  Serial.print("Aforo: ");
  Serial.println(aforo);		
  delay(1500);			//delay para evitar que se cuente de más

}

