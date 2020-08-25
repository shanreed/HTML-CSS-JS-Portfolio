# HTML-CSS-JS-Portfolio
* HTML
* CSS
* JavaScript
* Responsive Design
https://www.w3docs.com/snippets/css/how-to-create-polaroid-image-with-css.html


## TODO
* fix footer
* add skills
* fix social media icons in navigation
* finish home page responsive design 900px
* Make sure contact form is working






@media(min-width: 400px) {
        .p-headings {
            margin: 2rem 0 3rem 0;
            
        }

        .home-button-container {
            margin-top: 7rem;
        }

        .hero-area-img {
            margin: 0 auto;
            width: 85%;
            margin-right: 4rem;
        }
    }

@media(min-width: 460px) {
        .p-headings {
            margin: 4rem 0 3rem 0;
            
        }

    }

@media(min-width: 500px) {
        .p-headings {
            margin: 7rem 2rem 3rem 0;
            
        }
        footer {
            
            margin-top:1rem;
        }

        .home-button-container a {
            font-size: 2rem;
            padding: .4rem 1.5rem;
          }
       
    }

@media(min-width: 570px) {
        .p-headings {
            margin: 10rem 5rem 3rem 0;
            
        }
    }

@media(min-width: 600px) {
    .hero-area-img {
        width: 70%;
    }
    
    .name-heading {
        margin-right: 3rem;
    }

    .p-headings {
        margin-top: 3rem;
    }

    .home-button-container {
        margin-top: 8rem;
       
    }

    .home-button-container a {
        font-size: 3rem;
        padding: .4rem 1.5rem;
      }
    
}

@media(min-width: 700px) {

    .p-headings {
        margin-top: 7rem;
    }
    
   .form {
       width: 60%;
   }
   
    
}

@media(min-width: 730px) {
    footer {
        padding-top: 2rem;
        border-top: 1px solid #6031CA;
    }
      .footer-section2 {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      
      .footer-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .footer-image {
        border: none;
        width: 50%;
    }
}

@media(min-width: 770px) {


    footer {
        margin-top: 32rem;
    }

}

@media(min-width: 800px) {
    .hero-area-img {
        width: 60%;
    }
    
    .name-heading {
        margin-bottom: 13.5vw;
    }

    .menu-nav {
        font-size: 1.8rem;
    }

    .social-nav{
        font-size: 1rem;
    }

    footer {
        margin-top: 5rem;
    }
}


@media(min-width: 900px) {
    .hero-area-img {
        margin-top:5rem;
        width: 75%;
    }

   .name-heading {
    font-size: 9vw;
    margin-top: 4rem;
    margin-left: 25rem;
  }

  .p-headings {
      margin-top: 11rem;
      margin-left: 1rem;
  }

  .home-info {
      margin-left: 16rem;
  }

  .home-button-container {
      margin-top: 12.5rem;
  }

  .top-header {
      /* margin-bottom: .3rem; */
  }

    .sidebar {
        background-color: #6031CA;
        visibility: visible;
        width: 48%;
        height: 70rem;
        position: relative;
        color: white;
        font-size: 1.1rem;
        letter-spacing: 0.2em;
        text-align: center;
        text-transform: uppercase;
        color: black;
      }

      .sidebar:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-bottom: 2.3rem solid #000000;
        border-left: 12rem solid transparent;
        border-right: 12rem solid transparent;
      }

      .sidebar h3 {
          visibility: hidden;
          color: #FFFFFF;
          font-size: 4rem;
          font-weight: bolder;
      }

    .skills {
        padding-bottom: 3.5rem;
        border: 2px solid #000000;
        margin: 0 1rem 1rem 1rem;
        border-top: none;
        border-bottom: none;
        
       
    }

    .skills-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .projects-section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .projects-section .fa, .projects-section .fab {
        color: #FFFFFF;
        margin-bottom: .5rem;
    }
    
    .menu-nav {
        width: 80%;
    }

    .social-nav {
        visibility: visible;
        width: 10%;
        
    }

      .project-card {
          margin-bottom: .5rem;
          border-radius: 10px;
          
      }
      
      figure {
          background: #000000;
          padding: 1rem .2rem 1rem .2rem;
          text-align: center;
          text-decoration: none;
          -webkit-box-shadow: 0 .4rem .6rem #6031CA;
          -moz-box-shadow: 0 .4rem .6rem #6031CA;
          box-shadow: 0 .4rem .6rem #6031CA;
          -webkit-transition: all .20s linear;
          -moz-transition: all .20s linear;
          transition: all .20s linear;
          cursor: pointer;
          position: relative;
          width: 70%;
        }
      
        figcaption {
          color: #FFFFFF;
          font-size: 1.1rem;
          position: relative;
          display: flex;
          flex-direction: column-reverse;
        }
        
        figure:hover {
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
            transform: scale(1.1);
            -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, .7);
            -moz-box-shadow: 0 1rem 2rem rgba(0, 0, 0, .7);
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, .7);
          }
    footer {
        margin-top: 15rem;
    }
}

@media(min-width: 920px) {
    
    .sidebar:after {
        border-left: 13rem solid transparent;
        border-right: 13rem solid transparent;
      }
}

@media(min-width: 950px) {
    
    .sidebar:after {
        border-left: 14rem solid transparent;
        border-right: 14rem solid transparent;
      }
}

@media(min-width: 1000px) {

    .home-button-container {
        margin-top: 8rem;
    }
    .sidebar {
        width: 38%;
    }

    /* .sidebar:after {
        
        border-left: 13rem solid transparent;
        border-right: 13rem solid transparent;
      } */

}


@media(min-width: 1100px) {
    .hero-area-img {
        width: 65%;
    }
    .sidebar {
        width: 33%;
    }
    .home-button-container{
        margin-top: 5rem;
        margin-right: 40rem;
    }
    footer {
        margin-top: 30rem;
    }
}

@media(min-width: 1200px) {
    .sidebar {
        width: 26%;
    }
    footer {
        margin-top: 20rem;
    }
}
@media(min-width:1300px ) {
    .hero-area-img {
        margin-left: 40rem;
        width: 50%;
    }

    .p-headings {
        margin-top: 5rem;
    }
    .sidebar {
        width: 22%;
    }
   
}
@media(min-width: 1400px) {
    .hero-area-img {
        margin-left: 45rem;
    }
    footer {
        margin-top: 30rem;
    }

    .home-info {
        margin-left: -20rem;
    }

   
    .sidebar {
        width: 14%;
    }

    .sidebar:after {
        
        border-left: 10rem solid transparent;
        border-right: 10rem solid transparent;
      }

}

@media(min-width: 1500px) {
    
    .name-heading {
        font-size: 8.5vw;
    }

    .p-headings {

    }
    .sidebar {
        width: 13%;
    }

    .sidebar:after {
        
        border-left: 11rem solid transparent;
        border-right: 11rem solid transparent;
      }

}

@media(min-width: 1600px) {
    

    .sidebar {
        width: 13%;
    }

    .sidebar:after {
        
        border-left: 12rem solid transparent;
        border-right: 12rem solid transparent;
      }

}

@media(min-width: 1700px) {
    
    .name-heading {
        font-size: 8.5vw;
    }
    .sidebar {
        width: 13%;
    }

    .sidebar:after {
        
        border-left: 12rem solid transparent;
        border-right: 12rem solid transparent;
      }

}

@media(min-width: 1800px) {
    .hero-area-img {
        margin-left: 65rem;
        width: 45%;
    }
    

    .sidebar {
        width: 13%;
    }

    .sidebar:after {
        
        border-left: 12rem solid transparent;
        border-right: 12rem solid transparent;
      }

      footer {
        font-size: 4rem;
    }

}


@media(min-width: 1900px) {
    .hero-area-img {
        margin-left: 45rem;
        width: 38%;
    }

    .home-info {
        margin-left: 0rem;
        display: flex;
        width: 100%;
    }

    .name-heading {
        margin-bottom: 20rem;
    }

    .p-headings {
        margin-left: 70rem;
        font-size: 7rem;
    }

    .home-button-container {
        width: 70%;
        margin-left: 50rem;
        flex-direction: column;
        
    }

    .home-button-container a {
        font-size: 5rem;
    }
    .sidebar {
        width: 13%;
    }

    .sidebar:after {
        
        border-left: 13rem solid transparent;
        border-right: 13rem solid transparent;
      }

    footer {
        margin-top: 20rem;
    }

}







/* .skills-container {
    border: 2px solid red;
    margin: 0 auto;
    display: flex;
    width: 90%;
  
  }
  .skills-container h1 {
    font-size: 5rem;
    text-align: center;
    margin-bottom: 2rem;
    
  }
  
  
   */
   

   .iconify {
       color: red;
   }




















































   /* Top Navigation Area */
.top-header{
    -webkit-box-shadow:0 0 10px rgba(200, 243, 11, 0.5);
	-moz-box-shadow:0 0 10px rgba(200, 243, 11, 0.5);
	box-shadow:0 0 10px rgba(200, 243, 11, 0.5);
    background: #6031CA;
    /* margin-bottom: 5rem; */
    padding: 3rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top-header nav {
    display: flex;
    justify-content: space-between;
    font-weight: bolder;
}

.social-nav {
    font-size: .5rem;
    display: flex;
    flex-direction: column;
}

.social {
    display: flex;
    justify-content: space-evenly;
}

.menu-nav {
    font-size: 1rem;
    width: 70%;
}

.active {
    margin-top: -.5rem;
    padding: .5rem;
    border: .1rem solid black;
    border-radius: 10px;
    color: black;
}

/* BUTTONS */
.button-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

.home-button-container2 {
    display: none;
}

.home-button-container {
    margin-top: 5rem;
}
  
.button-container a {
    font-size: 1rem;
    padding: .8rem 3.5rem;
    color: #f4f4f4;
    text-transform: uppercase;
  }
  
  .btn {
      background: #6031CA;
    text-decoration: none;
    border: .1rem solid #6031CA;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }

  
.btn:hover {
    background: transparent;
    box-shadow: .1rem .1rem 2.5rem 1rem #6031CA;
  }
  
.btn:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      #6031CA,
      transparent
    );
    transition: all 650ms;
  }
  
.btn:hover:before {
    left: 100%;
  }


/* FOOTER */


.footer-section1 nav {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.footer-section1 nav a {
    color: #6031CA;
    font-weight: bolder;
}

.footer-section2 {
    display: flex;
    flex-direction: column-reverse;
}

.social-media {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-evenly;
}

.footer-image{
    border: .1rem solid #6031CA;
}

.footer-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0;
}


@media(min-width: 500px) {
    .top-header nav {
        font-size: 1.5rem;
    }


    footer {
        margin-top: 17rem;
    }
}

@media(min-width: 600px) {
    .top-header{
        margin-bottom: 1rem;
    }

      footer {
        margin-top: 22rem;
    }
    
}

@media(min-width: 700px) {
    .top-header nav {
        font-size: 2rem;
    }
}

@media(min-width: 770px) {
    footer {
        margin-top: 32rem;
    }

}

@media(min-width: 900px) {
    footer {
        margin-top: 42rem;
    }

}

@media(min-width: 1200px) {
    .top-header nav {
        font-size: 2.5rem;
    }
}