# easySecurity

## **Demo**

https://youtube.com/shorts/qkP3xWPcPmo

# Summary

[Introduction 2](#Introduction)

[Description 5](#Description)

[Explanation of Components: 5](#Components)

[Project Execution Flow 10](#project-execution-flow)

[Project Scheme 11](#project-scheme)

[Assembly of Components and Project
11](#assembly-of-components-and-project)

[How to Use the Application 12](#how-to-use-the-application)

[Application Codes 16](#application-codes)

[Tests 32](#tests)

[Constraints 35](#constraints)

[Conclusion 36](#conclusion)

[Bibliography 36](#bibliography)

## **Introduction**

This project was carried out within the scope of the Computer Architecture discipline and aims to be a final project for the microcontroller programming subject, where the author will demonstrate the competencies acquired in a real-world project.

"easySecurity" is a security system consisting of two cameras that, with facial detection, detect human faces and take photos of them. These photos are stored in a directory on the disk and can be accessed later.

The system also has its own web application and a server application that streams the video in real-time, where the user can remotely control the cameras.

Among the project components are:

- 1x RaspberryPi
- 2x USB Cameras
- 1x Mini Breadboard
- 1x Arduino Uno
- Power cables
- 2x Servo Motors
- 1x Presence Sensor

The security cameras are connected to the RaspberryPi, which in turn is connected to the Arduino Uno, serving as an interface for the RaspberryPi and the motors that move the cameras and the presence sensor.

The web application and the component control and streaming server are on the RaspberryPi.

The web application server that streams the video and receives commands from the client application was developed with Python using the FlaskAPI library and the PyFirmata library to control the Arduino with the Raspberry Pi.

For data persistence, the SqLite database is used because it is a lighter database and used for simpler applications.

The client application was developed with JavaScript using ReactJs and makes asynchronous requests to the server to receive the video stream and to transmit client commands to the server.

## **Description**

### Explanation of Components:

#### **RaspberryPi**

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/f1b060e4-b088-4f9a-a45b-ebe12235e9e5)

The RaspberryPi is a complete microcomputer, with all components on a single board. It includes a processor, graphics card, USB ports, HDMI all integrated.

The RaspberryPi can be used as a personal computer or even a server, which is why it was chosen to process the video and host the project's server and web application.

#### **USB Camera**

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/cc99a172-70eb-4862-a654-4e77ac2738e7)

The cameras used in the project are two simple personal use cameras, with USB connectors used to transmit the image from the security system.

#### **Mini BreadBoard**
![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/a4438d17-b8e0-4fd9-bbea-58431407aa6a)

Breadboards or prototype boards are boards with holes and conductive connections, used to assemble projects without the need for soldering wires.

#### **Arduino**

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/df0f6cb6-4040-4553-8222-1e969e5f6915)

Arduino is an electronic prototyping platform created in 2005, with the idea of promoting the development of electronic system control through programming at a low cost.

With Arduino, it is possible to send and receive information from electronic systems as well as program their functionalities.

Arduino will be used in the project as an interface between the RaspberryPi and the components, allowing their control by the RaspberryPi.

#### **Power Cables**

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/0c5a68ac-812e-4ca9-8134-cee9e06e0f1d)

These are cables used to transmit power from the Arduino ports to the components.

#### **Servo Motors**

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/b469fc62-cf03-406e-8bd1-4025e53fd79b)

They are motors used to perform rotational movements, which can be programmable with Arduino.

They will be used in the project to move the cameras automatically or with user commands.

#### **Presence Sensor**

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/e6283f4d-acac-44fd-b4e9-2625db97b6f9)

They will be used in the project to move the cameras automatically or with user commands.

### Project Execution Flow

First of all, the user accesses the web client application with a browser and then the web application attempts a connection to the server. If successful, a control screen is presented to the user where they can move the two cameras to the right or left and see their real-time video transmission.

If the user wishes, they can also view the photos saved by the cameras.

For each user button, an asynchronous request is made to the server, which will respond based on the requests.

The server on the RaspberryPi can act in two ways: in User mode, where it basically responds to user calls through the application, and in autonomous mode where it uses the presence sensor to detect when someone is nearby, if there is it will move the cameras 180 degrees once.

If a human face is detected in both cases, the server takes a photo and saves it in its own directory, storing its reference in the database where it can be later accessed by the user through the client application.

### Project Scheme

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/b2829e6a-55ce-497b-bc98-5aca1572c1b0)

### Assembly of Components and Project

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/f1181cb5-0e97-412a-9798-ec6c3a68ff47)

1. Assemble the base and rotary structure of the two cameras.
2. Place the two cameras in their respective positions.
3. Connect the USB cables of the cameras to the RaspberryPi.
4. Place a breadboard between the camera structures.
5. Connect the Arduino to the Raspberry Pi.
6. Connect the servo wires to the Arduino via the breadboard and the PIR sensor wires.

### How to Use the Application

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/58dc8f40-8e84-4a63-838b-e5958978d73a)

Once everything is assembled, access the command line of the RaspberryPi to execute the "app.py" file and load the application server.

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/22da7c0c-e80f-4751-98b7-1cdb84f8cef4)

Then access the client machine's terminal and execute the command "yarn start" in the project directory.

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/b755c71e-afe3-4bd5-b159-d7b990f9fbcf)

Then the client application is loaded in the browser. To move the camera, simply click on the buttons with the respective direction, and to access the camera photos, click on the "Images" button. Once a human face is detected, a photo is saved.

![image](https://github.com/RodrigoGaluppo/easysecurity/assets/68329584/b43336e2-9b71-440a-b116-94e4e579802a)

The photos are then displayed in a list and can be viewed by clicking on their link.

### Application Codes

#### **Client Application**

The application follows the standard format of applications created with the ReactJs framework, as the recommended structure was followed by the documentation itself, using the cli with the command "npx create-react-app\".

In the public directory are the static files and the main HTML file that will load the JavaScript files, which have the .ts extension because they are from a language that extends JavaScript, TypeScript, which allows explicit data type definition.

In the index.html file, there is only a blank html page that invokes the JavaScript files to dynamically build the page and the components.

In the "src" directory is all the code created by me.

In the "pages" directory are the directories of the pages that the application will have, the pages have their name in the directory and inside is the respective file with the page component and its style file.

On the Home page, in its "index" file, is the definition of its component, with initial configuration for WebSocket communication with the server and the definition of the functions that send signals to move the cameras.

In the Image page is the definition of the Images component, where the images saved by the camera will be loaded. There is also the definition of the function that is called when the page loads to fetch the images from the server.

In the styles directory, there is the global style of the application, which is applied to all pages.

In the services directory is the file with the base configurations for communication with other applications.

#### **Server Application**

All the code of the server application was made directly on the RaspberryPi and was done with Python, using the Flask framework to create a REST API that communicates easily with the client.

The application follows the following directory structure:

In the "models" folder is the definition of the data class of the photos table saved in the database, which is used to work in the program and to indicate to Flask the characteristics of the table to be generated in SqLite.

The class definition is made to present the fields used directly in the table of the database, and the methods are methods used in the program later to handle references to taken photos.

In the "static" folder, there is a folder called "images" where the photos are saved with the name containing the millisecond it was saved and a unique ID generated by the program. This name is saved in the database, and thus a reference is made so that it can be accessed later by following the path of this static files folder of the server.

In the "app.py" file are the general configurations of the application and the response code for each call to the specified route, following the structure of a "REST API".

The application uses two communication protocols with the client: the WebSocket protocol for faster communication with direct connection, such as in camera movements, and the Http protocol to respond to requests for saved photos or video streaming.

In the "Cam.py" file is the definition of the "Cam" class where the used facial detection model is loaded (which is a model that comes with the CV2 library, used to work with object and people detection with Python), the face detection function in real-time video, and the functions to move the servo motors that are controlled by the PyFirmata library.

In the "PIR.py" file is the code to move the motors automatically if a person is detected with the presence sensor.

### Tests

First, load the "app.py" file to start the server, connected via ssh.

Then load the web client application.

Then when I turn around, my face is easily detected by the application.

The cameras also respond very well to user movements.

The photos are also saved correctly.

## **Demo**

https://youtube.com/shorts/qkP3xWPcPmo

## **Constraints**

In general, the construction of the project was easy thanks to prior planning of all the steps, but even so, there were small difficulties that were overcome.

The first difficulty was to find out what "calibration" was necessary for the facial detection algorithm used, but after a series of consecutive tests, the ideal calibration for our usage situation of the model was found.

Another difficulty was in thinking about how the client application and the server application would communicate since real-time communication was necessary for camera movement. Initially, communication via the Https protocol was thought of (as done in traditional web applications and their APIs (Application Interfaces)), but because it does not offer the necessary immediacy, the WebSocket protocol was applied in the communication between the server and the client, as it is a relatively secure protocol and offers real-time communication easily and quickly to apply.

## **Conclusion**

With this work, it was possible to carry out a very interesting project that involves and integrates different areas of technology, such as Artificial Intelligence, Automation, and Web Development.

The project was very comprehensive from start to finish and provided a very good level of practice and learning, being an idea implemented in reality as well as on paper. With this, it is also concluded that the work achieved all the proposed objectives and was an opportunity to improve programming concepts, following the principle of DIY (Do It Yourself).

## **Bibliography**

Since the project was practically done from scratch autonomously, there are not many sources, only the documentation of the programming languages, and some video materials.

<https://flask.palletsprojects.com/en/2.1.x/api/>

<https://docs.opencv.org/3.4/da/d60/tutorial_face_main.html>

<https://pyfirmata.readthedocs.io/en/latest/>

[OpenCV Course - Full Tutorial with
Python](https://www.youtube.com/watch?v=oXlwWbU8l2o)

[Rotate your servo motor using arduino and python\'s
pyfirmata.](https://www.youtube.com/watch?v=8j3Fo-16Rr8)

<https://www.typescriptlang.org/docs/handbook/react.html>

<https://reactjs.org/docs/getting-started.html>
