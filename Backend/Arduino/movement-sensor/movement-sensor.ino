
#include <Ultrasonic.h>
#define pino_trigger 5
#define pino_echo 2
#include <Servo.h>

Servo myservo;

Servo myservo2;

int angle1 = 0;

int angle2 = 0;

int whiteLed = 10;
int lightSensor = A0;

Ultrasonic ultrasonic(pino_trigger, pino_echo);
 
void setup()
{
  myservo.attach(4);
  
  myservo2.attach(6);
  
  myservo.write(0);
  
  myservo2.write(0);
   
  pinMode(whiteLed, OUTPUT);
  
  Serial.begin(9600);
  //Serial.println("Lendo dados do sensor...");
}
 
void loop()
{

  int d = analogRead(A0);
  bool movement = digitalRead(7);

  if(d <= 40)
    digitalWrite(whiteLed,HIGH);
  else
    digitalWrite(whiteLed,LOW);

  if (Serial.available() > 0) {
    String data = Serial.readStringUntil('\n');
    
    if(data.indexOf("r1") != -1)
      angle1 -= 30;

    if(data.indexOf("l1") != -1)
      angle1 += 30;

    
    if(data.indexOf("r2") != -1)
      angle2 -= 30;

    if(data.indexOf("l2") != -1)
      angle2 += 30;
      

   if(angle1 > 180)
    angle1 = 180;

   if(angle1 < 0)
    angle1 = 0;

    
   if(angle2 > 270)
    angle2 = 270 ;

   if(angle2 < 0)
    angle2 = 0;

   myservo.write(angle1);
   
   myservo2.write(angle2);  
  }
  
  //Le as informacoes do sensor, em cm e pol
  //float cmMsec;
  //long microsec = ultrasonic.timing();
  //cmMsec = ultrasonic.convert(microsec, Ultrasonic::CM);
  //Serial.println(cmMsec);

   /* Get each line until there are none left 
  
  myservo.write(0);
  myservo2.write(0);
  delay(2000);

  
  myservo.write(30);
  myservo2.write(30);
  delay(2000);

  
  myservo.write(60);
  myservo2.write(60);
  delay(2000);
  
  myservo.write(90);
  myservo2.write(90);
  delay(2000);

  
  myservo.write(120);
  myservo2.write(120);
  delay(2000);
  
  myservo.write(150);
  myservo2.write(150);
  delay(2000);
  
  myservo.write(180);
  myservo2.write(180);
  delay(2000);

  
  myservo.write(150);
  myservo2.write(150);
  delay(2000);

  
  myservo.write(120);
  myservo2.write(120);
  delay(2000);
    myservo.write(90);
  myservo2.write(90);
  delay(2000);

  
  myservo.write(60);
  myservo2.write(60);
  delay(2000);

  
  myservo.write(30);
  myservo2.write(30);
  delay(2000);

  
  
  myservo.write(0);
  myservo2.write(0);
  delay(2000);
*/
}
