<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/nshoemake/mvc-site">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Journal More</h3>

  <p align="center">
    A full-stack web app built with MVC architecture that allows users to create, read, update, delete, and share journal entries (by setting a status of public or private).
    <br />
    <a href="https://github.com/nshoemake/mvc-site"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://journalmore.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/nshoemake/mvc-site/issues">Report Bug</a>
    ·
  </p>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](http://journalmore.herokuapp.com/)

The purpose of this project is to explain and demonstrate the value of the MVC architecture. As one of the more popular design paradigms, it’s important for any budding developer to understand the concept from a macro view. The code in this repo is the accompanying material of the lecture I've prepared.

If you'd like to learn about the MVC structure please clone this repo and visit: <a href="https://nshoemake.me/blog/mvc-site">


<img align="center" src="https://www.ma-no.org/cache/galleries/contents-2002/router-mvc-db.svg.png" alt="diagram of mvc structure">

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Handlebars][Handlebarsjs-shield]][Handlebars-url]
* [![Handlebars][Express-shield]][Express-url]
* [![Heroku][Heroku-shield]][Heroku-url]



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

1. Let's start by creating a clean directory that we want to put this project in.
2. Read on!


### Prerequisites

You'll need to have npm and git installed. Run these from the terminal:
* npm
  ```sh
  npm install npm@latest -g
  ```
* git
  ```sh
  git
  ```

Make sure you have a MongoDB account too.

### Installation

1. Get a Google OAuth API Key at [https://console.cloud.google.com/](https://console.cloud.google.com/)
2. Get your MongoDB account activated and cluster set up
3. Clone the repo
   ```sh
   git clone https://github.com/nshoemake/mvc-site.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your PORT, GOOGLE_CLIENT_ID, GOOGLE_SECRET, and MONGO_URI in `config.env`
   ```js
   PORT = 'ENTER YOUR PORT';
   MONGO_URI = 'ENTER YOUR MONGO CONNECTION STRING WITH DB NAME';
   GOOGLE_CLIENT_ID = 'ENTER YOUR GOOGLE CLIENT ID KEY';
   GOOGLE_SECRET = 'ENTER YOUR GOOGLE SECRET KEY';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

![journalmore-demo](images/journalmore-demo.gif)

This application allows users to login with Google authentication. It takes you to a dashboard that lets you add a new journal entry, and shows you what entries you already have. You can read individual entries, edit them, delete them, or set their status to private or public. There's a public page where all users' public stories are populated and you can browse them. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [X] Implement Google OAuth
- [X] Setup basic CRUD functionality
- [X] Pull from DB and populate full public entries on public page
    - [X] Generate edit icon on individual entries if user is the author
- [ ] Upgrade text editor
- [ ] Update schemas to allow for more robust data manipulation and display
    - [ ] Build 'inspirational writing prompt' generator

See the [open issues](https://github.com/nshoemake/mvc-site/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Nick Shoemake - [@nshoemake_](https://twitter.com/nshoemake_) - nick@nshoemake.me.com

Project Link: [https://github.com/nshoemake/mvc-site](https://github.com/nshoemake/mvc-site)
Demo Link: [https://journalmore.herokuapp.com](https://journalmore.herokuapp.com)
Lecture Link: [https://nshoemake.me/blog/mvc-site](https://nshoemake.me/blog/mvc-site)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [MayanWolfe](https://github.com/Mayanwolfe)
* [Brad Traversy](https://github.com/bradtraversy)
* [HTML5UP](https://html5up.net/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/nshoemake/mvc-site.svg?style=for-the-badge
[contributors-url]: https://github.com/nshoemake/mvc-site/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nshoemake/mvc-site.svg?style=for-the-badge
[forks-url]: https://github.com/nshoemake/mvc-site/network/members
[stars-shield]: https://img.shields.io/github/stars/nshoemake/mvc-site.svg?style=for-the-badge
[stars-url]: https://github.com/nshoemake/mvc-site/stargazers
[issues-shield]: https://img.shields.io/github/issues/nshoemake/mvc-site.svg?style=for-the-badge
[issues-url]: https://github.com/nshoemake/mvc-site/issues
[license-shield]: https://img.shields.io/github/license/nshoemake/mvc-site.svg?style=for-the-badge
[license-url]: https://github.com/nshoemake/mvc-site/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/nshoemake
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Handlebarsjs-shield]: https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black
[Handlebars-url]: https://handlebarsjs.com/
[Heroku-shield]: https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white
[Heroku-url]: https://heroku.com
[Express-shield]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com
[MongoDB-shield]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://mongodb.com