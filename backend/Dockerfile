FROM python:3.9-slim-buster
ENV PYTHONBUFFERED 1
WORKDIR /backend
RUN apt-get update && \
    apt-get install -y libgl1-mesa-glx && \
    apt-get clean
COPY requirements.txt requirements.txt
RUN pip3 --no-cache-dir install -r requirements.txt 
COPY . .
