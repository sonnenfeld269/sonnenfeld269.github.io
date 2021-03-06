var projects = [
  {
    "id" : 1,
    "title" : "Movie Library",
    "subtitle" : "A little database of my favorite movies!",
    "year" : 2016,
    "image" : "movie-trailer.jpg",
    "position" : "Front -and Backend Development",
    "technologies" : ["html", "css", "python"],
    "description" : "This is my project that I created during a wonderful " +
                    "udacity class. It is a little movie library showing my " +
                    "favorite movies.",
    "link" : "https://github.com/sonnenfeld269/movie-trailer-website"
  },
  {
    "id" : 2,
    "title" : "Museum Frontend Database",
    "subtitle" : "A front-end webapplication for a museum using json as data " +
                 "and bootstrap.",
    "year" : 2016,
    "image" : "museum-app.png",
    "position" : "Frontend Development",
    "technologies" : ["html", "css", "angular-js"],
    "description" : "This is a database that I created for a " +
                    "museum with AngularJS. It has two tables filled with " +
                    "json data, and different filters for sorting.",
    "link" : "https://github.com/sonnenfeld269/museum-web-app.git"
  },
  {
    "id" : 3,
    "title" : "Ammersfeld",
    "subtitle" : "A personal website based on php and pimcore cms!",
    "year" : 2014,
    "image" : "ammersfeld-1.jpg",
    "position" : "Front -and Backend Development",
    "technologies" : ["html", "css", "pimcore-cms"],
    "description" : "A biography of Mrs. Ammersfeld. It includes text, " +
                    "images and a music player.",
    "link" : "http://www.ammersfeld.at"
  },
  {
    "id" : 4,
    "title" : "Frankstahl",
    "subtitle" : "A company website based on php and pimcore cms!",
    "year" : 2014,
    "image" : "frankstahl.jpg",
    "position" : "Front -and Backend Development",
    "technologies" : ["html", "css", "pimcore-cms"],
    "description" : "An information webpage of an austrian company producing " +
                    "steel.",
    "link" : "http://www.frankstahl.at"
  },
  {
    "id" : 5,
    "title" : "Methmedia",
    "subtitle" : "A company website based on php and pimcore cms!",
    "year" : 2014,
    "image" : "methmedia-2.jpg",
    "position" : "Front -and Backend Development",
    "technologies" : ["html", "css", "pimcore-cms"],
    "description" : "An information webpage of an austrian marketing company " +
                    "showing their products and services. Here I used pimcore " +
                    "cms to make it possible for users to add dynamic content.",
    "link" : "http://www.methmedia.at"
  },
  {
    "id" : 6,
    "title" : "PxT",
    "subtitle" : "A company website based on php and pimcore cms!",
    "year" : 2014,
    "image" : "pxt.jpg",
    "position" : "Front -and Backend Development",
    "technologies" : ["html", "css", "pimcore-cms"],
    "description" : "An information webpage of an austrian architecture " +
                    "company showing their designs and projects.",
    "link" : "http://www.pxt.at"
  },
  {
    "id" : 7,
    "title" : "ACT - Appartment Concern Tracker",
    "subtitle" : "A java web application for managing living communities.",
    "year" : 2013,
    "image" : "act.png",
    "position" : "Test-Coordinator, Features",
    "technologies" : ["java", "swing", "java-spring", "sql", "junit"],
    "description" : "A java project during my study at the university of " +
                    "technology in vienna",
    "link" : ""
  },
  {
    "id" : 8,
    "title" : "Personal Portfolio",
    "subtitle" : "A frontend portfolio of my projects.",
    "year" : 2017,
    "image" : "portfolio.png",
    "position" : "Frontend Development",
    "technologies" : ["html5", "css3", "javascript", "jquery"],
    "description" : "Developed a personal portfolio page using HTML, CSS, and" +
        " the Bootstrap framework. The page is fully responsive and" +
        " works on mobile, tablet, and desktop browsers. I also used my own " +
        " inject.js file to load the projects into the html file.",
    "link" : "https://sonnenfeld269.github.io/"
  },
  {
    "id" : 9,
    "title" : "Multi User Blog",
    "subtitle" : "A blog with authentication.",
    "year" : 2017,
    "image" : "sonnenblog.png",
    "position" : "Backend Development",
    "technologies" : ["google app engine", "python", "ajax"],
    "description" : "This is a multi user blog where users can sign in and post" +
        " blog posts as well as 'Like' and 'Comment' on other posts made on the" +
        " blog. It is hosted on Google App Engine and includes an authentication" +
        " system for users to be able to register and sign in and then create blog" +
        " posts! I used hashing and salt to store passwords in a secure way.",
    "link" : "https://github.com/sonnenfeld269/multi-user-blog"
  },
  {
    "id" : 10,
    "title" : "Tournament Results",
    "subtitle" : "Implementing a swiss tournament system using postgre-sql.",
    "year" : 2017,
    "image" : "tournament.png",
    "position" : "Backend Development",
    "technologies" : ["postgre-sql", "python"],
    "description" : "A smarter tournament system in which players are paired " +
        "with those of similar skill level and everyone competes in every " +
        "round. More fair than an elimination bracket and more efficient than " +
        "a round-robin tournament.<br><br>A PostgreSQL database stores match " +
        "results, and a Python module queries the database to rank and pair " +
        "players. When two players have the same win record, ties are broken " +
        "by summing the win record of each player's previous opponents.",
    "link" : "https://github.com/sonnenfeld269/swiss-tournament-db"
  },
  {
    "id" : 11,
    "title" : "Spurensuche Turkestan",
    "subtitle" : "Auf der Suche nach Kriegsgefangenen in Turkestan.",
    "year" : 2015,
    "image" : "turkestan.png",
    "position" : "Backend Development",
    "technologies" : ["wordpress", "css"],
    "description" : "This is a website that I created for the project " +
        "\"Spurensuche Turkestan\". Here I used just wordpress with some " +
        "plugins for showing tables using json data and an event calendar.",
    "link" : "http://www.spurensuche-turkestan.org/"
  },
  {
    "id" : 12,
    "title" : "Item Catalog",
    "subtitle" : "A web-app showing categories and items including " +
        "crud-functionality and authentication.",
    "year" : 2017,
    "image" : "item_catalog.png",
    "position" : "Front -and Backend Development",
    "technologies" : ["html", "css", "python", "flask", "sqlite"],
    "description" : "The Item Catalog provides a list of items within a " +
        "variety of categories, as well as provide a user registration and " +
        "authentication system.",
    "link" : "https://github.com/sonnenfeld269/item-catalog"
  },
  {
    "id" : 13,
    "title" : "Fragnebenan Street Pages",
    "subtitle" : "Turning some mockups into static fronted pages with React.",
    "year" : 2017,
    "image" : "fragnebenan_streets.png",
    "position" : "Full Stack Development",
    "technologies" : ["html", "css", "react-js", "node-js", "mongodb", "seo"],
    "description" : "Creating wonderful street pages for a neighbourhood platform Fragnebenan! With seo using json-lds based on the schema.org standard. This project also includes components that gets data with promises from a drupal live system.",
    "link" : "https://fragnebenan.com/s/marxergasse-1030-wien"
  },
  {
    "id" : 14,
    "title" : "Human Connection",
    "subtitle" : "Contributing to an open source social media and action platform.",
    "year" : 2017,
    "image" : "humanconnection.png",
    "position" : "Frontend Development",
    "technologies" : ["html", "css", "vue-js"],
    "description" : "Implementation of different components and views. Including a map-component based on mapbox and open street map data.",
    "link" : "https://humanconnection.org/"
  },
  {
    "id" : 15,
    "title" : "Gärten für Alle!",
    "subtitle" : "A garden community in vienna!",
    "year" : 2018,
    "image" : "gaerten_alle.png",
    "position" : "Frontend Development",
    "technologies" : ["html", "sass", "vue-js"],
    "description" : "A frontend website for my gardening community using bulma framework and sass.",
    "link" : "https://github.com/sonnenfeld269/gaertenfueralle"
  }
];
