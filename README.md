

# easySecurity


# Table of Contents {#table-of-contents .TOC-Heading}

[Introdução 2](#introdução)

[Descrição 5](#descrição)

[Explicação dos componentes: 5](#explicação-dos-componentes)

[Fluxo de execução do projeto 10](#fluxo-de-execução-do-projeto)

[Esquema do Projeto 11](#esquema-do-projeto)

[Montagem dos componentes e do projeto
11](#montagem-dos-componentes-e-do-projeto)

[Como usar a aplicação 12](#como-usar-a-aplicação)

[Código das aplicações 16](#código-das-aplicações)

[Testes 32](#testes)

[Condicionalismos 35](#condicionalismos)

[Conclusão 36](#conclusão)

[Bibliografia 36](#bibliografia)

## **Introdução**

Este é um trabalho realizado no âmbito da disciplina de Arquitetura de
Computadores e tem o objetivo de ser um projeto de conclusão da matéria
de programação de microcontroladores, onde o autor mostrará as
competências adquiridas em um projeto próprio de uso real.

O "easySecurity" é um sistema de segurança constituído por duas câmaras,
que com deteção facial detetam faces humanas e tiram fotos das mesmas.
Estas fotos são armazenadas em um diretório no disco e podem ser
acessadas posteriormente.

O sistema tem também uma aplicação web própria e uma aplicação servidor
que faz o stream do video em tempo real e onde o utilizador pode
controlar as câmaras de forma remota.

Dentre os componentes do projeto estão:

\- 1x RaspberryPi

\- 2x Cameras USB

\- 1x Breadboard mini

\- 1x Arduino Uno

\- Cabos de energia

\- 2x Motores servo

\- 1x Sensor de Presença

As câmaras de segurança são ligadas na RaspberryPi que por sua vez está
ligada no Arduino Uno que serve como uma interface para a RaspberryPi e
os motores que movimentam as câmaras e o sensor de presença.

A aplicação web e o servidor de stream e controle dos componentes estão
na raspberryPi.

O servidor web da aplicação que faz a transmissão do video e recebe os
comandos da aplicação cliente foi desenvolvido com Python usando a
biblioteca FlaskAPI e a biblioteca PyFirmata para controlar o arduino
com a Raspberry Pi.

Para a persistência de dados é usado o banco de dados SqLite por ser um
abnco de dados mais leve e usado para aplicações mais simples.

A aplicação cliente foi desenvolvida com JavaScript usando ReactJs e faz
requisições assíncronas para o servidor para receber a transmissão do
vídeo e para transmitir os comandos do cliente ao servidor.

## **Descrição**

### Explicação dos componentes:

#### **RaspberryPi**

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/f1b060e4-b088-4f9a-a45b-ebe12235e9e5)

A RaspberryPi é um microcomputador completo, com todos os componentes em
uma única placa. Nela há processador, placa de vídeo, entradas USB, HDMI
tudo integrado.

A RaspberryPi pode ser usada como um computador pessoal ou até mesmo
servidor, por isso foi escolhida para fazer o processamento do vídeo e
ser o host do servidor e da aplicação web do projeto.

#### **Camera USB**

![Webcam Camera Usb Full Hd 1080P Com Microfone Visão 360° em Promoção
\| Ofertas na Americanas](media/image3.jpeg){width="4.833333333333333in"
height="4.833333333333333in"}

As câmaras usadas no projeto são duas câmaras simples de uso pessoal,
com conectores USB que são usadas para transmitir a imagem do sistema de
segurança.

#### **BreadBoard Mini**

![Breadboard - Mini Modular (White) - PRT-12043 - SparkFun
Electronics](media/image4.jpeg){width="3.931372484689414in"
height="2.9208005249343834in"}

As breadboards ou placas de ensaio são placas com furos e conexões
condutoras, usadas para fazer a montagem de projetos sem a necessidade
de soldar os fios.

#### **Arduino**

![Arduino Portugal](media/image5.jpeg){width="4.980391513560805in"
height="3.854129483814523in"}

O arduino é uma plataforma de prototipagem eletrónica criada em 2005,
com a ideia de promover o desenvolvimento de controlo de sistemas
eletrónicos por meio da programação com um baixo custo.

Com o arduino é possível enviar e receber informações de sistemas
eletrónicos bem como programar funcionalidades dos mesmos.

O arduino será usado no projeto como uma interface entre a RaspberryPi e
os componentes, permitindo o controle dos mesmos pela RaspberryPi.

#### **Cabos de Energia**

![Cabos para ligação arduino macho - fêmea \| Electrónica,
electricidade, gadgets,
componentes](media/image6.jpeg){width="3.5714468503937007in"
height="3.215685695538058in"}

São cabos usados para transmitir energia das portas do Arduino aos
componentes.

#### **Motores Servo**

![Servo Motor SG90 9g Tower
Pro](media/image7.jpeg){width="3.735294181977253in"
height="3.0490201224846896in"}

São motores usados para realizar movimentos rotacionais, que podem ser
programáveis com o Arduino.

Serão usados no projeto para mover as camaras automaticamente ou com
comandos do utilizador.

#### **Sensor de Presença**

![Sensor de Presença PIR - HC-SR501 - Sensores para Ambientes -
RoboCore](media/image8.png){width="3.3333333333333335in"
height="3.088234908136483in"}

Serão usados no projeto para mover as camaras automaticamente ou com
comandos do utilizador.

### Fluxo de execução do projeto

Primeiro de tudo o utilizador acede a aplicação web cliente com um
navegador e logo em seguida a aplicação web tenta uma conexão com o
servidor. Em caso de sucesso é apresentada uma tela de controle ao
utilizador onde ele pode mover as duas cameras para direita ou esquerda
e ver a sua transmissão de video em tempo real.

Se o utilizador quiser ele pode também ver as fotos salvas pelas
cameras.

Para cada botão do utilizador é feito um pedido assíncrono ao servidor
que responderá baseado nos pedidos.

O servidor na RaspberryPi pode atuar de duas formas, no modo User onde
ele basicamente responde as chamadas do utilizador pela aplicação e o
modo autónomo onde ele usa o sensor de presença para detetar quando há
alguém por perto, se houver ele moverá as camaras em 180 graus uma vez.

Se for detetada uma face humana em ambos os casos o servidor tira uma
foto e a salva num diretório próprio, guardando sua referência na base
de dados onde poderá ser posteriormente acessada pelo utilizador pela
aplicação cliente.

### Esquema do Projeto

![](media/image9.png){width="5.583333333333333in"
height="2.7916666666666665in"}

### Montagem dos componentes e do projeto

![](media/image10.png){width="6.927083333333333in"
height="4.286132983377078in"}

-   1 Montar a estrutura base e rotatória das duas camaras

-   2 colocar as duas camaras nas respetivas posições

-   3 conectar os cabos USB das camaras na raspberryPi

-   4 colar uma breadboard entre as estruturas das camaras

-   5 conectar o arduino na raspberry Pi

-   6 ligar os fios dos servos no arduino pela breadboard e os fios do
    sensor PIR

![](media/image11.png){width="6.72701990376203in" height="5.03125in"}

### Como usar a aplicação

![](media/image12.png){width="5.0in" height="3.5625in"}

Uma vez que tudo está montado, é preciso aceder a linha de comando da
RaspberryPi para executar o arquivo "app.py" e carregar o servidor da
aplicação.

![](media/image13.png){width="5.0in" height="2.8229166666666665in"}

Depois deve-se aceder ao terminal da máquina cliente e executar o
comando "yarn start" no diretório do projeto

![](media/image14.png){width="6.402639982502187in"
height="4.041666666666667in"}

Então é carregada a aplicação cliente no browser. Para mover a camara
basta clicar nos botões com a respetiva direção e para aceder as fotos
da camara basta clicar no botão "Images". E assim que é detetada uma
face, é salva uma foto.

![](media/image15.png){width="6.2345680227471565in"
height="5.260416666666667in"}

As fotos então são mostradas em uma lista e é possível vê-las clicando
em seu link.

### Código das aplicações

#### **Aplicação cliente**

A aplicação segue o formato padrão de aplicações criadas com o framework
ReactJs, uma vez que foi seguida a estrutura recomendada pela própria
documentação, usando a cli com o comando "npx create-react-app\".

![](media/image16.png){width="2.76126312335958in"
height="5.822916666666667in"}

Sendo que nos diretório public estão os arquivos estáticos e o html
principal que carregará os arquivos JavaScript que estão com a extensão
.ts por serem de uma extensão a linguagem JavaScript, o TypeScript, que
permite a definição de tipos de dados de forma explicita.

![](media/image17.png){width="6.808501749781278in"
height="3.3947397200349956in"}

No arquivo index.html só há uma página html em branco que invoca os
arquivos JavaScript para construir dinamicamente a página e os
componentes.

No diretório "src" está todo o código criado por mim

No diretório "pages" estão dos diretórios das páginas que a aplicação
vai ter, as páginas têm o seu nome no diretório e dentro está o
respetivo arquivo com o componente da página e o seu arquivo de estilo.

Na página Home em seu arquivo "index" está a definição do seu
componente, com configuração inicial para a comunicação via WebSocket
com o servidor e a definição das funções que enviam sinais para a
movimentação das camaras

![](media/image18.png){width="6.669444444444444in"
height="5.5022911198600175in"}

![](media/image19.png){width="5.821788057742782in"
height="5.958333333333333in"}

Na página Imagem está a definição do componente Images da mesma, onde
serão carregadas as imagens salvas pela camara. Há também a definição da
função que é chamada quando a página carrega para buscar as imagens ao
servidor.

![](media/image20.png){width="6.068880139982502in"
height="7.645833333333333in"}

![](media/image21.png){width="6.132812773403325in" height="6.25in"}

No diretório styles há o estilo global da aplicação, que é aplicado em
todas as páginas

![](media/image22.png){width="4.21875in" height="5.0in"}

No diretório services está o arquivo com as configurações base para
comunicação com outras aplicações.

![](media/image23.png){width="3.8125in" height="1.625in"}

#### **Aplicação servidor**

Todo o código da aplicação servidor foi feito diretamente na raspberrypi
e foi feito com python, usando o framework Flask para criar uma api rest
que se comunica facilmente com o cliente.

A aplicação segue a seguinte estrutura de diretórios:

![](media/image24.png){width="2.8833617672790903in"
height="3.2604166666666665in"}

Na pasta "models" está a definição da classe de dados da tabela de fotos
salvas no banco de dados, que é usada para trabalhar no programa e para
indicar ao Flask as características da tabela que deve ser gerada no
SqLite.

![](media/image25.png){width="3.2906167979002623in"
height="1.5416666666666667in"}

![](media/image26.png){width="6.552083333333333in"
height="5.719422572178478in"}

A definição da classe e feita de forma a apresentar os campos usados
diretamente na tabela da base de dados, e os métodos são métodos usados
no programa depois para tratar as referências fotos tiradas.

![](media/image27.png){width="2.65625in" height="4.416666666666667in"}

Na pasta "static" há uma pasta chamada \"images\" onde são salvas as
fotos com o nome contendo o milissegundo na qual foi salva e um ID único
gerado pelo programa, este nome é salvo na base de dados e assim é feita
uma referência para que possa ser acedida depois seguindo o caminho
desta pasta de arquivos estáticos do servidor.

![](media/image28.png){width="6.949366797900263in" height="5.71875in"}

![](media/image29.png){width="5.352691382327209in"
height="6.708333333333333in"}

![](media/image30.png){width="4.680339020122485in" height="5.6875in"}

No arquivo "app.py" estão as configurações gerais da aplicação e o
código de resposta para cada chamada na rota especificada, seguindo a
estrutura de uma "API REST".

A aplicação usa dois protocolos de comunicação com o cliente, sendo o
protocolo WebSocket para uma comunicação mais rápida e com conexão
direta, como nos movimentos da camara e o protocolo Http para responder
ao pedido de requisições de fotos salvas ou o stream do vídeo.

![](media/image31.png){width="6.233766404199475in" height="6.0in"}

![](media/image32.png){width="5.40625in" height="6.02088145231846in"}

No arquivo "Cam.py" está a definição da classe "Cam\" onde é carregado o
modelo de deteção facial usado (que é um modelo que vem junto com a
library CV2, usada para trabalhar com deteção de objetos e pessoas com
python), a função de deteção de faces no vídeo em tempo real e as
funções de movimento dos motores servo que são controlados pela
biblioteca pyFirmata.

![](media/image33.png){width="3.8296872265966755in" height="5.34375in"}

No arquivo "PIR.py" está o código para mover os motores de forma
automática caso seja detetada alguma pessoa com o sensor de presença.

### Testes

![](media/image34.png){width="5.512182852143482in"
height="2.7101563867016623in"}

Primeiro é carregado o arquivo "app.py" para iniciar o servidor,
conectado via ssh.

![](media/image35.png){width="6.90625in" height="3.7264971566054244in"}

Depois é carregada a aplicação web cliente

![](media/image36.png){width="5.0in" height="4.052083333333333in"}

Então quando eu me viro para trás a minha face é detetada facilmente
pela aplicação.

![](media/image37.jpeg){width="5.0in" height="2.5208333333333335in"}

As camaras também respondem muito bem aos movimentos do utilizador.

![](media/image38.png){width="5.0in" height="2.34375in"}

![](media/image39.png){width="5.0in" height="2.6041666666666665in"}

As fotos também são salvas de forma correta.

## **Condicionalismos**

Em geral a construção do projeto foi fácil graças a um planejamento a
priori de todas as etapas, porem mesmo assim foram encontradas pequenas
dificuldades que acabaram por ser superadas.

A primeira dificuldade foi a descobrir qual a "calibragem" necessária
para o algoritmo de deteção facial usado, porem depois de uma série de
testes seguidos, foi encontrada a calibragem ideal para a nossa situação
de uso do modelo.

Outra dificuldade foi em pensar em como a aplicação cliente e a
aplicação servidor se comunicariam, já que era preciso uma comunicação
em tempo real para a movimentação das camaras. Em primeira ideia foi
pensada a comunicação por meio do protocolo Https (como é feito em
aplicações web tradicionais e suas APIs (Application Interfaces)) más
por não oferecer a instantaneidade necessária foi aplicado o protocolo
WebSocket na comunicação entre o servidor e o cliente, por ser um
protocolo relativamente seguro e que oferece comunicação em tempo real
de forma fácil e rápida de se aplicar.

## **Conclusão**

Com este trabalho foi possível realizar um projeto muito interessante
que envolve e integra diferentes áreas da tecnologia, como: Inteligência
Artificial, Automação e Desenvolvimento Web.

O projeto foi muito integro desde o início ao fim e possibilitou um
nível muito bom de prática e aprendizagem, sendo uma ideia implantada na
realidade tal como no papel, com isso conclui-se também que o trabalhou
atingiu todos os objetivos propostos e foi uma oportunidade de aprimorar
os conceitos de programação, seguindo o princípio do DIY (Do It Yourself
(Faça você mesmo))

## **Bibliografia**

Uma vez que o projeto foi feito praticamente desde o início de forma
autónoma não há muitas fontes, sendo unicamente as documentações das
linguagens de programação e alguns materiais de vídeo

<https://flask.palletsprojects.com/en/2.1.x/api/>

<https://docs.opencv.org/3.4/da/d60/tutorial_face_main.html>

<https://pyfirmata.readthedocs.io/en/latest/>

[OpenCV Course - Full Tutorial with
Python](https://www.youtube.com/watch?v=oXlwWbU8l2o)

![](media/image40.jpg){width="6.47916447944007in" height="3.75in"}

[Rotate your servo motor using arduino and python\'s
pyfirmata.](https://www.youtube.com/watch?v=8j3Fo-16Rr8)

![](media/image41.jpg){width="6.47916447944007in" height="3.75in"}

<https://www.typescriptlang.org/docs/handbook/react.html>

<https://reactjs.org/docs/getting-started.html>
