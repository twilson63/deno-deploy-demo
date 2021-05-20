# README

<h1 align="center">
Deno Deploy Demo
</h1>

---

## Table of Contents

* [Introduction](#introduction)
* [Setup](#setup)
* [deployctl](#deployctl)
* [Hello World](#hello-world)
* [sift](#sift)
* [deploy](#deploy)
* [FAQ](#faq)

---

## Introduction

Deno is a javascript/typescript server runtime that models its api after the web api. In this demo we will showcase the deno deploy system that enables developers to deploy deno applications on an edge isolate deployment environment. You find this deployment environment is fast and fun. There are some items worth discussing:

* Builds on the web
* Built-in support for TS and JSX
* Direct Github Integration
* ES modules
* API compatible with Cloudflare Workers

## Setup

* Deno - you need deno installed to work through this tutorial

> For instructions go to https://deno.land/

Shell (Mac, Linux)

```
curl -fsSL https://deno.land/x/install.sh | sh
```

Gitpod users

Fork - https://github.com/twilson63/deno-starter

```
https://gitpod.io#https://github.com/[your name]/deno-starter
```

## deployctl

deployctl is a cli that allows us to run deno deploy apps locally.

```
deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -f https://deno.land/x/deploy/deployctl.ts
```

> `deployctl run [app]`

## Hello World

Lets create a simple deno deploy application

hello.js

``` js
addEventListener('fetch', (event) => {
  const response = new Response('Hello World', { headers: { 'Content-Type': 'text/plain' } })
  event.respondWith(response)
})
```

run deno app

``` sh
deployctl run ./hello.js
```


