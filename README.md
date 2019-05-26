# politico-react

A platform where voters can vote for their desired candidates.

[![Build Status](https://travis-ci.com/sojida/politico-react.svg?branch=develop)](https://travis-ci.com/sojida/politico-react)
[![Test Coverage](https://api.codeclimate.com/v1/badges/86626044a03a20315708/test_coverage)](https://codeclimate.com/github/sojida/politico-react/test_coverage)

<b>React App:</b> https://sheltered-everglades-83973.herokuapp.com/ <br/>

## Application Description

The general elections are around corner, hence it’s a political season. Get into the mood of the
season and help build a platform which both the politicians and citizens can use.
Politico enables citizens give their mandate to politicians running for different government offices
while building trust in the process through transparency

<b> Test API Endpoints Here: </b> https://shielded-headland-63958.herokuapp.com/ <br/>
<b> Pivotal Tracker: </b>https://www.pivotaltracker.com/n/projects/2326872<br/>

## Table of content

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Testing](#testing)
- [API Routes](#api-routes)

## Features

1. Users can sign up.
2. Users can login.
3. Admin (electoral body) can create political parties.
4. Admin (electoral body) can delete a political party.
5. Admin (electoral body) can create different ​political offices​.
6. Users can vote for only one politician per ​political office​.
7. Users can see the results of election

## Technologies

HTML

CSS

Modern JavaScript technologies were adopted for this project

ES2015: Also known as ES6 or ES2015 or ECMASCRIPT 6, is a new and widely used version of Javascript
that makes it compete healthily with other languages. See [here](https://en.wikipedia.org/wiki/ECMAScript) for more infromation.

## Installation

- Clone this repository into your local machine:

`git clone https://github.com/sojida/politico-react.git`

- Install dependencies

`npm install`

- Start the application by running

`npm run start:dev`

## Testing

- run test using `npm test`

## API Routes

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<tr><td>POST</td> <td>api/v1/auth/signup</td> <td>Register user</td></tr>

<tr><td>POST</td> <td>api/v1/auth/login</td> <td>Sign in user</td></tr>

<tr><td>POST</td> <td>api/v1/parties</td> <td>Create a Party</td></tr>

<tr><td>GET</td> <td>api/v1/parties/:id</td> <td>Get a specific Party</td></tr>

<tr><td>GET</td> <td>api/v1/parties</td> <td>Fetch all parties</td></tr>

<tr><td>DELETE</td> <td>api/v1/parties/:id</td> <td>Delete a party</td></tr>

<tr><td>POST</td> <td>api/v1/offices</td> <td>Create an office</td></tr>

<tr><td>GET</td> <td>api/v1/offices</td> <td>Fetch all offices</td></tr>

<tr><td>GET</td> <td>api/v1/offices/:id</td> <td>Get a specific office</td></tr>

<tr><td>POST</td> <td>api/v1/office/:id/register</td> <td>Register a candidate</td></tr>

<tr><td>POST</td> <td>api/v1/votes</td> <td>Vote for a candidate</td></tr>

<tr><td>POST</td> <td>api/v1/office/:office-id/result</td> <td>Collate all results by ofice</td></tr>

</table>
