const dynamicResume = ()=>{
    return `
    <!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Resume In PDF</title>
    <style>
        .resume {
            width: 7.1in;
            height: 8.86in;
        }

        .box {
            background-color: rgb(246, 246, 247);
            width: 100%;
            height: 113%;
        }

        .left-side {
            color: rgb(3, 3, 16);
            width: 26%;
            height: 100%;
            background-color: rgb(189, 190, 192);

        }

        .right-side {
            height: 100%;
            width: 73%;
        
            color: rgb(10, 2, 2);
        }

        .name {
            font-size: 1.2rem;
        }

        .profile-image {
            width: 100%;
            margin-left: 0%;
            margin-top: 3%;
        }

      

        .heading-text {
            font-size: 0.9rem;
        }

        .para,
        .per-info {
            font-size: 0.7rem !important;
        }
      

        /* .about .para{
            width: 93%;
        } */
        .key-skills {
            font-size: 0.7rem;
        }
        .Experien
        .border {
    border: 8px solid #dee2e6!important;
}
.Experience{
    font-size: 0.7rem;

}
.Education{
    font-size: 0.7rem;

}
.certificate{
    font-size: 0.7rem;

}

    </style>

</head>

<body>
    <div class="resume border shadow d-flex aligh-items-center jusify-content-center">
        <div class="box">
            <div class="left-side d-inline-block">
                <h2 style="font-weight: bold;">Christopher <br><span style="color: orange;">Morgan</span></h2>

                <div class="profile-image">
                    <img class="img-fluid" src="/istockphoto-1300512215-612x612.jpg" alt="">
                </div>
                <div class="contact ml-2 mt-2">
                    <div class="heading-text"> <b>Contact</b> </div><hr>
                    <p class="para mb-1">
                       <b>Address:</b> <br>
                        177 Great Portland Street,London
                        W5W 6PQ <br>
    
                       <b>Phone:</b>  <br>
                        +44 (0)20 7666 8555 <br>
    
                        <b>email:</b> <br>
                       christopher.m@gmail.com <br>
    
                        <b>LinkedIn:</b> <br>
                        linkedin.com/christopher.morgan 
                    </p>
                </div>
                <div class="expert ml-2 mt-2">
                    <div class="heading-text "> <b>Languages</b></div><hr>
                    <p class="para mb-1">
                        Spanish-C2 <br>
                        Chinese-A1 <br>
                        German-A2 <br>
                    </p>
                </div>
                <div class="hobbies ml-2 mt-2">
                    <div class="heading-text "><b>Hobbies</b></div><hr>
                    <p class="para mb-1">
                        <li>Writing</li>
                        <li>Sketching</li>
                        <li>Photography</li>
                        <li>Design</li>
                    </p>
                </div>

             


           
            </div>
            <div class="right-side d-inline-block m-0 p-0 align-top">
                <h2 class="name ml-3 mt-3">Summary</h2> <hr>

                <div class="Summary ml-3 mt-3">
                    <p class="para mb-1">
                        Senior Web Developer specializing in front end development.
                        Experienced with all stages of the development cycle for dynamic web projects.Well-versed in numerous programming languages including HTML5, PHP OOP, Javascript, CSS, MySQL.
                        Strong background in project management and customer relations.
                    </p>
                </div>
                
                <div class="Experience ml-3 mt-3">

                <h2 class="name ml-3 mt-3">Experience</h2> <hr>

                   <p class="para mb-1">
                    <h6><p>Web Developer-09/2015 to 2019</p></h6> 
                    <p><b>Luna Web Design</b>,New York</p>   
                    <li>Cooperate with designer to create clean interface and simple,inuitve interactions and experiences.</li>
                    <li>Develop project concepts and maintain optimal workflow.</li>
                    <li>Work with senior developer to manage large,complex design projects for corporate clients.</li>
                    <li>Complete detailed programming and development tasks for front end public and internal website as well as challenging back-end server code.</li>
                    <li>Carry out quality assurance tests to discover errors and optimize usability.</li>
    
                   </p>
                </div>
                
                
                <div class="Education ml-3 mt-3">

                    <h2 class="name ml-3 mt-3">Education</h2> <hr>
    
                       <p class="para mb-1">
                        <p>bachelor of Science <span style="font-size:small;">Computer Information Systems </span>-2014</p>
                        <p> <span style="font-size:small;">Columbia University </span>,NY</p>
                       </p>
                </div>
                <div class="certificate ml-3 mt-3">
                    <h2 class="name ml-3 mt-3">Certification</h2> <hr>
                    <p class="para mb-1">
                        <p>PHP Framework (certificate):<span style="font-size:small;">Zend, Codeigniter,Symfony. </span></p>
    <p>Programming Languages:<span style="font-size:small;">JavaScript,HTML5,PHP,OOP,CSS,SQL,MySQL.</span></p>
                    </p>
                </div>

                    
                 <!-- </div> -->
                

                <div class="key-skills ml-3 mt-3">
                    <h2 class="name ml-3 my-2">Skill Highlights</h2> <hr>
                    <div style="float: left; width: 20%;">
                        <ul >
                            <li>Project management</li>
                            <li>Strong decision maker</li>
                            <li>Complex problem solver</li>
                        </ul>
                        </div>
                        <div style="float: right; width: 64%;">
                        <ul>
                            <li>Creative design</li>
                            <li>Innovative</li>
                            <li>Service-focused</li>
                        </ul>
                        </div>
                   
                </div>
               
            </div>
        

                             
                             
                </div>
         
            </div>
          
        </div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> -->

    <!-- Option 2: jQuery, Popper.js, and Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
        crossorigin="anonymous"></script>

</body>

</html>
    `
}

module.exports = dynamicResume;