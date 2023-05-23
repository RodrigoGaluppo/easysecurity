from flask import Flask, render_template, Response
from flask_socketio import SocketIO
import serial
import time
import datetime
import cv2

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")
ser = serial.Serial('/dev/ttyACM0', 9600, timeout=1)
ser.reset_input_buffer()

video = cv2.VideoCapture(0)
video2 = cv2.VideoCapture(2)
faceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")


def gen(video):
    
    while True:

        try:
            success, image = video.read()

            if not success:
                continue

            frame_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
            frame_gray = cv2.equalizeHist(frame_gray)

            # Getting corners around the face
            faces = faceCascade.detectMultiScale(frame_gray, 1.2, 4)  # 1.3 = scale factor, 5 = minimum neighbor

            # drawing bounding box around face
            for (x, y, w, h) in faces:
                output_path="images/" + datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")[:-3] + ".jpg"
                image = cv2.rectangle(image, (x, y), (x+w, y+h), (0, 255, 0), 3)
                cv2.imwrite(output_path,image)
                #faceROI = frame_gray[y:y+h, x:x+w]

            ret, jpeg = cv2.imencode('.jpg', image)
            frame = jpeg.tobytes()

            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

        except Exception as e:
            print("Error:", str(e))
            continue


@socketio.on('getData')
def handle_getData():
    global ser
    data = ser.readline()
    print(data)
    socketio.emit('dataSent', dict(data=str(data)))


@socketio.on('turnRight1')
def handle_turnRight():
    print('turnRight1')
    global ser
    ser.write(bytes('r1', 'utf-8'))


@socketio.on('turnLeft1')
def handle_turnLeft():
    global ser
    ser.write(bytes('l1', 'utf-8'))


@socketio.on('turnRight2')
def handle_turnRight():
    global ser
    ser.write(bytes('r2', 'utf-8'))


@socketio.on('turnLeft2')
def handle_turnLeft():
    global ser
    ser.write(bytes('l2', 'utf-8'))


@app.route('/')
def index():
    return render_template('index.html', async_mode=True)


@app.route('/video_feed')
def video_feed():
    # Set to global because we refer to the video2 variable in the global scope,
    # or in other words, outside the function
    global video

    # Return the result on the web
    return Response(gen(video),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/video2_feed')
def video2_feed():
    # Set to global because we refer to the video2 variable in the global scope,
    # or in other words, outside the function
    global video2

    # Return the result on the web
    return Response(gen(video2),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    try:
        socketio.run(app, host="0.0.0.0")
    finally:
        video.release()
        video2.release()
