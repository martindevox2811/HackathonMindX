const component = {};

component.registerPage = `
<div class="register-container">
<form id="register-form">
  <div class="register-header">REGISTER</div>
  
  <div class="input-wrapper form-group">
    <input type="text" class="form-control" placeholder="Username" name="userName"/>
    <div class="error" id="user-name-error"></div>
  </div>
  <div class="input-wrapper form-group">
    <input type="email" class="form-control" placeholder="Email" name="email"/>
    <div class="error" id="email-error"></div>
  </div>
  <div class="input-wrapper form-group">
    <input type="password" class="form-control" placeholder="Password" name="password"/>
    <div class="error" id="password-error"></div>
  </div>
  <div class="input-wrapper form-group">
    <input type="password" class="form-control" placeholder="Confirm Password" name="confirmPassword"/>
    <div class="error" id="confirm-password-error"></div>
  </div>
  <div class="form-action input-wrapper">
    <button class="btn btn-primary btn-register cursor-pointer" type="submit">Register</button>
    <div class="redirect">Already have an account?
      <span id="redirect-to-login" class="cursor-pointer">Login</span>
    </div>
  </div>
</form>
</div>
`;

component.loginPage = `
<div class="navbar">
  <div class="logo"><a href="index.html">Coding Language For Beginner</a></div>
  <div class="create"><a href="#">Create<i class="fas fa-folder-plus"></i></a></div>
  <div class="search">
      <input type="text">
      <i class="fas fa-search"></i>
  </div>
  <div class="Btn-Login-SignUp">
      <button class="logIn">Log in</button>
      <button class="signUp">Sign up</button>
  </div>
</div>
<div class="login-container">
  <form id="login-form">
    <div class="login-header">LOGIN</div>
    <div class="login-from">
        <div class="input-wrapper form-group">
          <input type="email" class="form-control" placeholder="Email" name="email"/>
          <div class="error" id="email-error"></div>
        </div>
        <div class="input-wrapper form-group">
          <input type="password" class="form-control" placeholder="Password" name="password"/>
          <div class="error" id="password-error"></div>
        </div>
        <div class="forgetPassword">Forget Password ?</div>
      <div class="form-action input-wrapper">
        <button class="btn btn-primary btn-login cursor-pointer" type="submit">Log in</button>
        <div class="login-by-social-account">
          <div class="text"><span>Or login with</span></div>
          <div class="btn-social-acc">
            <button id="btn_google"><i class="fab fa-google"></i> Google </button>
            <button id="btn_facebook"><i class="fab fa-facebook-square"></i> Facebook </button>
          </div>
        </div>
        
        <div class="redirect">Don't have an account?
          <span id="redirect-to-register" class="cursor-pointer">Register</span>
        </div>
      </div>
    </div>
  </form>
</div>
`;

component.homePage = `
<div class="navbar">
  <div class="logo"><a href="index.html">Coding Language For Beginner</a></div>
  <div class="create"><a href="#">Create<i class="fas fa-folder-plus"></i></a></div>
  <div class="search">
      <input type="text">
      <i class="fas fa-search"></i>
  </div>
  <div class="Btn-Login-SignUp">
      <button class="logIn">Log in</button>
      <button class="signUp">Sign up</button>
  </div>
</div>
<div class="main">
  <div class="text">
      <h1>Become your most <br> unstoppable self</h1>
      <h3>Master any subject, one success at a time.</h5>
      <button class="signUp1">Get Start</button><br>
      <div class="blogBtn">I'm a Student</div>
  </div>
  <div class="slides-show">
      <div class="slide-show" id="slide-form">
          <div class="mySlides fade">
              <img src="./img/Slide1.PNG">
              <div class="text">"High-level programming language."</div>
          </div>
          <div class="mySlides fade">
              <img src="./img/Slide2.PNG">
              <div class="text">"JavaScript is high-level, often just-in-time compiled, and multi-paradigm."</div>
          </div>
          <div class="mySlides fade">
              <img src="./img/Slide3.PNG">
              <div class="text">"Multi-paradigm programming language encompassing strong typing."</div>
          </div>
          <div class="mySlides fade">
              <img src="./img/Slide4.PNG">
              <div class="text">"C++ is a general-purpose programming language created by Bjarne Stroustrup"</div>
          </div>
          <div class="mySlides fade">
              <img src="./img/Slide5.PNG">
              <div class="text">"Java is a class-based, object-oriented programming language"</div>
          </div>
      </div>
      <div style="text-align:center">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
          <span class="dot" onclick="currentSlide(4)"></span>
          <span class="dot" onclick="currentSlide(5)"></span>
      </div>
  </div>
</div>`
