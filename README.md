# Prognosis of Cardiovascular Diseases using Deep Learning

This project is a software application that uses deep learning to diagnose cardiovascular and pulmonary diseases. It employs the YOLOv6 object detection algorithm for image processing. The application has a FastAPI backend and a React.js frontend, with MongoDB as the database. The application is containerized using Docker and deployed on Microsoft Azure.


The application supports the diagnosis of the following cardiovascular and pulmonary diseases:

0 - Aortic enlargement<br />
1 - Atelectasis<br />
2 - Calcification<br />
3 - Cardiomegaly<br />
4 - Consolidation<br />
5 - ILD<br />
6 - Infiltration<br />
7 - Lung Opacity<br />
8 - Nodule/Mass<br />
9 - Other lesion<br />
10 - Pleural effusion<br />
11 - Pleural thickening<br />
12 - Pneumothorax<br />
13 - Pulmonary fibrosis

## Installation
To run this project, you need to have Docker and Docker Compose installed on your machine. You can download and install them from the official Docker website.

Once you have installed Docker and Docker Compose, clone this repository to your local machine. Then, navigate to the project directory and run the following command to build the containers:
`docker-compose build`

This will build the backend, frontend, and database containers. Once the containers are built, run the following command to start the application:
`docker-compose up`

This will start the application and you should be able to access it on http://localhost:3000

## Usage
The application has three types of logins: doctor, technician, and patient. Each login has different functionalities and permissions.

### Doctor Login
To access the doctor login, click on the "Doctor Login" button on the homepage. Enter the following credentials:

Email: rutvij@gmail.com

Password: Rutvij12

Once logged in, you will be redirected to the dashboard where you can view all the reports. Click on any report to view the details. You can add comments on the report and save them.

### Technician Login
To access the technician login, click on the "Technician Login" button on the homepage. Enter the following credentials:

Email: ruchita@gmail.com

Password: Ruchita12

Once logged in, you will be redirected to the dashboard where you can upload the chest X-ray for the patient. Enter the patient's details and upload the image. Once uploaded, the image will be processed, and the report will be generated.

### Patient Login
To access the patient login, click on the "Patient Login" button on the homepage. Enter the following credentials:

Email: yadnesh@gmail.com

Password: Yadnesh12

Once logged in, you will be redirected to the dashboard where you can view your report. You can also view any comments added by the doctor.
