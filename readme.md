# BookMyShow Assignment

Bookmyshow is a ticketing platform where you can book tickets for a movie show. As part of this assignment, we need to build API’s for the following feature. As a user, I can select any theatre in the city. On selecting the theatre, I should be able to see the dates of next 7 days. I can click on any date and the page should load to give me all the movies in that theatre on that given date. Movies should contain details of all the showtimes.

## Models

In this I have created 4 models

- Theatre
- Movie
- Screen
- Show

### Relations within the tables

- A theatre will have many screens i.e Theatre has many relation with Screen.
- A Movie will have many shows i.e Movie has many relation with Show.
- A Screen will have many shows i.e Screen has many relation with Show.
- A Theatre will have many shows i.e Theatre has many relation with Show.

## Routes

- GET : /movies will give you all the movies
- GET : /theatre will give you all the theatres
- GET : /shows will give you all the shows
- GET : /screens will give you all the shows
- GET : /nextShows will give you all the shows which are happening today and happening in the next 7 days.
