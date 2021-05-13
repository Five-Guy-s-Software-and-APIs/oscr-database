# Five-Guys-Software-and-APIs
CSC 131 Semester Project
We use a back end of Node.js and HTML on the front end, while implementing a client-server architecture. We used AJAX to dynamically update our HTML page with information that was obtained through our RESTful API

All of the following endpoints are accessible via [https://oscar-movie-api.herokuapp.com/](https://oscar-movie-api.herokuapp.com/)

Collection Resource
-------------------
There are three collection endpoints available:

>GET /movies/categories/:category/year/:year_film

Will return all of the nominees for a given category in a given year

>GET /movies/categories/:category

Will return all nominees of a given category in the history of the Oscars

>GET /movies/year/:year_film

Will return all of the nominees in a given year


Examples:
>GET /movies/categories/best%20picture/year/1984
Will return all of the nominees for best picture for films released in 1984

>GET /movies/categores/best%20picture
Will return every film nominated for best picture in the history of the Oscars

>GET /movies/year/1984
Will return every nomination for films released in 1994

Singleton Resource
------------------
There is one singleton resource endpoint available:

>GET /movies/categories/:category/year/:year_film/winner

Will return the winner of a given category in a given year

Example:
>GET /movies/categories/best%20picture/year/1984/winner
Will return the winner for Best Picture for films released in 1984, which is *Amadeus*

Query Search
------------
A search query can be made at the following endpoint

>GET /search

The search accepts the following optional parameters
<table>
    <tr>
        <th>Parameter Name</th>
        <th>Parameter Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>category</td>
        <td>String</td>
        <td>Category of nomination</td>
    </tr>
    <tr>
        <td>year_film</td>
        <td>4 digit number</td>
        <td>The year the film was released</td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>Name of the nominee</td>
    </tr>
    <tr>
        <td>film</td>
        <td>String</td>
        <td>Name of film being awarded</td>
    </tr>
    <tr>
        <td>winner</td>
        <td>Boolean (true | false)</td>
        <td>Whether to include only winners</td>
    </tr>
</table>

The search supports any number of additional parameters:
So the query
>GET >/search?category=actor%20in%20leading%20role&category=directing&year_film=1984
will return all of the nominees for Actor in a Leading Role OR Directing for films released in 1984
