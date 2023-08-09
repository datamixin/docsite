---
title: Get started with Docker
sidebar_label: Docker
description:
  Docker is the easiest way to get started with the self-hosted version of
  Datawork.
---

## Requirements[](#requirements "Direct link to heading")

1. Install [Docker](https://docs.docker.com/get-docker/) on your machine;
2. Make sure [Docker Compose](https://docs.docker.com/compose/install/) is
   installed and available (it should be the case if you have chosen to install
   Docker via Docker Desktop)
3. Make sure [Curl](https://curl.se/) is
   installed and available on your machine;

## Run the app[](#run-the-app "Direct link to heading")

To start using Datawork, run the following commands in a shell:

```shell
curl https://raw.githubusercontent.com/datamixin/datawork/master/docker-compose.yml >> docker-compose.yml && docker compose up -d --remove-orphans
```

You can now open your browser and go to [http://localhost:8080](http://localhost:8080) to
connect to the application.