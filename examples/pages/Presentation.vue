<template>
  <div class="wrapper presentation-page">
    <div class="page-header clear-filter">
      <div class="rellax-header rellax-header-sky">
        <parallax class="page-header-image"
                  style="background-image: url('img/presentation-page/nuk-pro-back-sky.jpg')">
        </parallax>
      </div>
      <div class="rellax-header rellax-header-buildings" data-rellax-speed="0">
        <parallax class="page-header-image page-header-city"
                  style="background-image: url('img/presentation-page/nuk-pro-buildings.png')">
        </parallax>
      </div>
      <div class="rellax-text-container rellax-text">
        <h1 class="h1-seo" data-rellax-speed="-2">Now UI Kit</h1>
        <div class="pro">PRO</div>
      </div>
      <h3 class="h3-description rellax-text" data-rellax-speed="-1">A beautiful premium Bootstrap 4 UI Kit.</h3>
      <h6 class="category category-absolute rellax-text" data-rellax-speed="-2">
        <parallax>
          Designed by
          <a href="https:///invisionapp.com/" target="_blank">
            <img alt="" class="invision-logo" v-lazy="'img/invision-white-slim.png'" />
          </a>. Coded by
          <a href="https://www.creative-tim.com" target="_blank">
            <img alt="" class="creative-tim-logo" v-lazy="'img/creative-tim-white-slim2.png'" />
          </a>.
        </parallax>
      </h6>
    </div>
    <div class="section section-components" data-background-color="dark-red">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h2 class="text-center title">Impressive collection of elements
              <br>
              <small class="description">Designed to look gorgeous together</small>
            </h2>
            <h5 class="text-center description">Now UI Kit Pro comes with a huge number of customisable
              elements. They are not only designed to be pixel perfect and light but they are also easy to
              use and combine well with other components.</h5>
            <div class="space-50"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="card-container first-card">
              <div class="card-component">
                <a href="index.html#basic-elements" target="_blank">
                  <div class="front">
                    <img alt="basic_thumb" v-lazy="'img/presentation-page/basic_thumb.jpg'">
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-container second-card">
              <div class="card-component">
                <a href="index.html#cards" target="_blank">
                  <div class="front">
                    <img alt="cards_thumb" v-lazy="'img/presentation-page/cards_thumb.jpg'">
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-container third-card">
              <div class="card-component">
                <a href="sections.html" target="_blank">
                  <div class="front">
                    <img alt="sections_thumb" v-lazy="'img/presentation-page/sections_thumb.jpg'">
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-container fourth-card">
              <div class="card-component">
                <a href="examples/product-page.html" target="_blank">
                  <div class="front">
                    <img alt="pages2-thumb" v-lazy="'img/presentation-page/pages2_thumb.jpg'">
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-basic-components">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-7 ml-auto mr-auto">
            <h2 class="title">Basic Elements</h2>
            <h6 class="category">The core elements of your website</h6>
            <h5 class="description">We re-styled every Bootstrap 4 element to match the Now UI Kit style.
              All the Bootstrap 4 components that you need in a development have been re-design with the
              new look. Besides the numerous basic elements, we have also created additional classes. All
              these items will help you take your project to the next level.</h5>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="image-container">
              <img alt="ipad_img" class="components-macbook" src="img/ipad.png">
              <img alt="table" class="table-img" src="img/presentation-page/table.jpg">
              <img alt="share button" class="share-btn-img" src="img/presentation-page/share-btn.jpg">
              <img alt="coloured card with button" class="coloured-card-btn-img"
                   src="img/presentation-page/coloured-card-with-btn.jpg">
              <img alt="coloured card" class="coloured-card-img"
                   src="img/presentation-page/coloured-card.jpg">
              <img alt="social row" class="social-img" src="img/presentation-page/social-row.jpg">
              <img alt="linked in button" class="linkedin-btn-img"
                   src="img/presentation-page/linkedin-btn.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-cards">
      <div class="container">
        <div class="row">
          <div class="col-md-8 text-center ml-auto mr-auto">
            <div class="section-description">
              <h2 class="title">Beautiful Cards</h2>
              <h6 class="category">One Card for Every Problem</h6>
              <h5 class="description">From cards designed for blog posts, to product cards or user
                profiles, you will have many options to choose from. All the cards follow the Now UI Kit
                style principles and have a design that stands out. We have gone above and beyond with
                options for you to organise your information. </h5>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="images-container">
              <div class="image-container1">
                <img alt="card 3" v-lazy="'img/presentation-page/card3.jpg'">
              </div>
              <div class="image-container2">
                <img alt="card 6" v-lazy="'img/presentation-page/card6.jpg'">
              </div>
              <div class="image-container3">
                <img alt="card 7" v-lazy="'img/presentation-page/card7.jpg'">
              </div>
              <div class="image-container4">
                <img alt="card 5" v-lazy="'img/presentation-page/card5.jpg'">
              </div>
              <div class="image-container5">
                <img alt="card 4" v-lazy="'img/presentation-page/card4.jpg'">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-content" data-background-color="black">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="image-container">
              <img alt="content 1" class="img img-raised rounded img-comments rellax"
                   data-rellax-speed="1" src="img/presentation-page/content1.jpg">
              <img alt="content 4" class="img img-raised rounded img-blog rellax"
                   data-rellax-speed="4" src="img/presentation-page/content4.jpg">
            </div>
          </div>
          <div class="col-md-4 ml-auto mr-auto">
            <div class="section-description">
              <h2 class="title">Content Areas</h2>
              <h6 class="category">For Areas that Need More Space</h6>
              <h5 class="description">We took into consideration multiple use cases and came up with some
                specific areas for you. If you need elements such as tables, comments, description
                areas, tabs and many others, we've got you covered. They're beautiful and easy to use
                for the end user navigating your website. </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-sections" data-background-color="gray">
      <div class="container">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="section-description text-center">
            <h2 class="title">Sections you will love</h2>
            <h5 class="description"> Build pages in no time using pre-made sections! From headers to
              footers, you will be able to choose the best combination for your project. We have created
              multiple sections for you to put together and customise into pixel perfect example
              pages.</h5>
            <a class="btn btn-primary btn-round" href="sections.html" target="_blank">View All Sections</a>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="section-cols">
          <div class="row">
            <div class="col-md-3">
              <img alt="header1" v-lazy="'img/presentation-page/header1.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="header2" v-lazy="'img/presentation-page/header2.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="header3" v-lazy="'img/presentation-page/header3.jpg'">
              <img alt="pricing5" class="rellax" data-rellax-speed="4"
                   src="img/presentation-page/pricing5.jpg">
            </div>
            <div class="col-md-3">
              <img alt="header4" v-lazy="'img/presentation-page/header4.jpg'">
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <img alt="features1" v-lazy="'img/presentation-page/features1.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="features2" v-lazy="'img/presentation-page/features2.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="features3" v-lazy="'img/presentation-page/features3.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="features4" v-lazy="'img/presentation-page/features4.jpg'">
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/features5.jpg'">
              <img alt="" class="rellax" data-rellax-speed="5" src="img/presentation-page/features2.jpg">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/features6.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/features7.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/features8.jpg'">
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/blogpost1.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/blogpost2.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/blogpost3.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/blogpost4.jpg'">
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/blogpost5.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/team1.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/team2.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/team3.jpg'">
              <img alt="" class="rellax" data-rellax-speed="5" src="img/presentation-page/contact1.jpg">
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/team4.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/team5.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/projects1.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/projects2.jpg'">
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/projects4.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/projects5.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/pricing1.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/pricing2.jpg'">
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/pricing3.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/pricing4.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/pricing5.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/testimonials1.jpg'">
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/testimonials2.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/testimonials3.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/contact1.jpg'">
            </div>
            <div class="col-md-3">
              <img alt="" v-lazy="'img/presentation-page/contact2.jpg'">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-examples" data-background-color="black">
      <div class="container">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <div class="section-description">
            <h2 class="title">Example Pages</h2>
            <h5 class="description">Forget about building everything from scratch. From landing pages to
              e-commerce or blog pages, you will be able jump start your development. Show your clients a
              quick prototype and get inspired for your next project!</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h5 class="title">About Us</h5>
            <div class="card">
              <router-link target="_blank" to="/about">
                <img alt="" v-lazy="'img/presentation-page/pages/about-us.jpg'">
              </router-link>
            </div>
            <h5 class="title">Landing Page</h5>
            <div class="card">
              <router-link target="_blank" to="/landing">
                <img alt="" v-lazy="'img/presentation-page/pages/landing.jpg'">
              </router-link>
            </div>
            <h5 class="title">Login Page</h5>
            <div class="card">
              <router-link target="_blank" to="/login">
                <img alt="" v-lazy="'img/presentation-page/pages/login.jpg'">
              </router-link>
            </div>
            <h5 class="title">Signup Page</h5>
            <div class="card">
              <router-link target="_blank" to="/signup">
                <img alt="" v-lazy="'img/presentation-page/pages/signup.jpg'">
              </router-link>
            </div>
          </div>
          <div class="col-md-4">
            <h5 class="title">Blog Post</h5>
            <div class="card">
              <router-link target="_blank" to="/blog-post">
                <img alt="" v-lazy="'img/presentation-page/pages/blog-post.jpg'">
              </router-link>
            </div>
            <h5 class="title">Product Page</h5>
            <div class="card">
              <router-link target="_blank" to="/product">
                <img alt="" v-lazy="'img/presentation-page/pages/product.jpg'">
              </router-link>
            </div>
            <h5 class="title">Profile Page</h5>
            <div class="card">
              <router-link target="_blank" to="/profile">
                <img alt="" v-lazy="'img/presentation-page/pages/profile.jpg'">
              </router-link>
            </div>
          </div>
          <div class="col-md-4">
            <h5 class="title">Pricing Page</h5>
            <div class="card">
              <router-link target="_blank" to="/pricing">
                <img alt="" v-lazy="'img/presentation-page/pages/pricing.jpg'">
              </router-link>
            </div>
            <h5 class="title">Ecommerce</h5>
            <div class="card">
              <router-link target="_blank" to="/ecommerce">
                <img alt="" v-lazy="'img/presentation-page/pages/ecommerce.jpg'">
              </router-link>
            </div>
            <h5 class="title">Blog Posts</h5>
            <div class="card">
              <router-link target="_blank" to="/blog-posts">
                <img alt="" v-lazy="'img/presentation-page/pages/blog-posts.jpg'">
              </router-link>
            </div>
            <h5 class="title">Contact Us</h5>
            <div class="card">
              <router-link target="_blank" to="/contact">
                <img alt="" v-lazy="'img/presentation-page/pages/contact.jpg'">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-icons" data-background-color="black">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <div class="icons-nucleo">
              <i class="first-left-icon now-ui-icons ui-1_send"></i>
              <i class="second-left-icon now-ui-icons ui-2_like"></i>
              <i class="third-left-icon now-ui-icons transportation_air-baloon"></i>
              <i class="fourth-left-icon now-ui-icons text_bold"></i>
              <i class="fifth-left-icon now-ui-icons tech_headphones"></i>
              <i class="sixth-left-icon now-ui-icons emoticons_satisfied"></i>
              <i class="seventh-left-icon now-ui-icons shopping_cart-simple"></i>
              <i class="eighth-left-icon now-ui-icons objects_spaceship"></i>
              <i class="ninth-left-icon now-ui-icons media-2_note-03"></i>
              <i class="tenth-left-icon now-ui-icons ui-2_favourite-28"></i>
            </div>
          </div>
          <div class="col-md-6 text-center">
            <h2 class="title">Custom Icons</h2>
            <h5 class="description">
              Now UI Kit PRO comes with 100 custom demo icons made by our friends from
              <a href="https://nucleoapp.com/?ref=1712" target="_blank">NucleoApp</a>. The official
              package contains over 20.729 icons which are looking great in combination with Now UI Kit
              PRO. Make sure you check all of them and use those that you like the most.
            </h5>
            <br>
            <a class="btn btn-primary btn-round btn-lg "
               href="https:///demos.creative-tim.com/now-ui-kit-pro/nucleo-icons.html" target="_blank">View Demo
              Icons</a>
            <a class="btn btn-outline-primary btn-round btn-lg " href="https://nucleoapp.com/?ref=1712"
               target="_blank">View All Icons</a>
          </div>
          <div class="col-md-3">
            <div class="icons-nucleo icons-nucleo-right">
              <i class="first-right-icon now-ui-icons design_palette"></i>
              <i class="second-right-icon now-ui-icons clothes_tie-bow"></i>
              <i class="third-right-icon now-ui-icons location_pin"></i>
              <i class="fourth-right-icon now-ui-icons objects_key-25"></i>
              <i class="fifth-right-icon now-ui-icons travel_istanbul"></i>
              <i class="sixth-right-icon now-ui-icons business_briefcase-24"></i>
              <i class="seventh-right-icon now-ui-icons design_image"></i>
              <i class="eighth-right-icon now-ui-icons location_world"></i>
              <i class="ninth-right-icon now-ui-icons objects_planet"></i>
              <i class="tenth-right-icon now-ui-icons education_atom"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section features-7 section-image" style="background-image: url('img/bg51.jpg')">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 px-0">
            <div class="col-sm-12">
              <info-section description="Creating your design from scratch with dedicated designers
                                        can be very expensive.Using Now UI Kit PRO you don't have to worry about
                                        customising the basic Bootstrap 4 design or its components."
                            icon="now-ui-icons business_money-coins"
                            title="Save Time & Money"
              />

              <info-section description="It is built over Bootstrap 4, it's fully responsive and has
                                        all the benefits of the flexbox for the layout, grid system and components. This
                                        is a huge advantage when you work with columns."
                            icon="now-ui-icons text_bold"
                            title="Bootstrap 4 & Flexbox"
              />

              <info-section description="Using Now UI Kit PRO you can create hundreds of components
                                        combinations within seconds and present them to your client. You just need to
                                        change some classes and colors."
                            icon="now-ui-icons education_paper"
                            title="Fast Prototype"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="image-container">
              <img alt="" v-lazy="'img/ipad3.png'">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-testimonials" data-background-color="black">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">Trusted by 245,000+ People</h2>
          <h5 class="description">The UI Kits, Templates and Dashboards that we've created are used by
            <b>245,000+ web developers</b> in over
            <b>426,000 Web Projects</b>. This is what some of them think:</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <div class="testimonials-people">
            <img alt="" class="left-first-person img-raised rellax"
                 data-rellax-speed="1" src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg">
            <img alt="" class="left-second-person img-raised rellax"
                 data-rellax-speed="3" src="https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg">
            <img alt="" class="left-third-person img-raised rellax"
                 data-rellax-speed="2" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg">
            <img alt="" class="left-fourth-person img-raised rellax"
                 data-rellax-speed="5" src="https://s3.amazonaws.com/uifaces/faces/twitter/kerem/128.jpg">
            <img alt="" class="left-fifth-person img-raised rellax"
                 data-rellax-speed="7" src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg">
          </div>
        </div>
        <div class="col-md-8">
          <el-carousel height="450px">
            <el-carousel-item>
              <card plain type="testimonial">
                <img alt="" class="img img-raised rounded"
                     slot="avatar"
                     src="https://s3.amazonaws.com/creativetim_bucket/photos/154001/thumb.JPG?1501184024" />
                <h5 class="card-description">"Awesome Design and very well organized code
                  structure! Also, it contains numerous elements using which achieving the
                  perfect or required template can be done with ease. Great job!"
                </h5>
                <h4 class="card-title">Stefan</h4>
                <h6 class="category text-muted">Web Designer</h6>
                <div class="card-footer">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                </div>
              </card>
            </el-carousel-item>
            <el-carousel-item>
              <card plain type="testimonial">
                <img alt="" class="img img-raised rounded"
                     slot="avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg" />
                <h5 class="card-description">"It looks great and its somewhat futuristics cant
                  wait to use it on a project here in nigeria i'm sure it would put me ahead..
                  I cant wait to hv enough money to buy ur product."
                </h5>
                <h4 class="card-title">Mr. Bones</h4>
                <h6 class="category text-muted">Web Designer</h6>
                <div class="card-footer">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                </div>
              </card>
            </el-carousel-item>
            <el-carousel-item>
              <card plain type="testimonial">
                <img alt="" class="img img-raised rounded"
                     slot="avatar"
                     src="https://s3.amazonaws.com/creativetim_bucket/photos/123124/thumb.?1480480048" />
                <h5 class="card-description">"Everything is perfect. Codes are really organized.
                  It's easy to edit for my own purposes. It's great that it is built on top of
                  Bootstrap 4."
                  <br>
                  <br>
                </h5>
                <h4 class="card-title">DOĞA</h4>
                <h6 class="category text-muted">Web Developer</h6>
                <div class="card-footer">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                </div>
              </card>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="col-md-2">
          <div class="testimonials-people">
            <img alt="" class="right-first-person img-raised rellax"
                 data-rellax-speed="5" src="https://s3.amazonaws.com/uifaces/faces/twitter/tonypeterson/128.jpg">
            <img alt="" class="right-second-person img-raised rellax"
                 data-rellax-speed="1" src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg">
            <img alt="" class="right-fourth-person img-raised rellax"
                 data-rellax-speed="7" src="https://s3.amazonaws.com/uifaces/faces/twitter/mattsince87/128.jpg">
            <img alt="" class="right-fifth-person img-raised rellax"
                 data-rellax-speed="3" src="https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg">
            <img alt="" class="right-sixth-person img-raised rellax"
                 data-rellax-speed="5" src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg">
          </div>
        </div>
      </div>
    </div>
    <div class="section section-pricing" id="sectionBuy">
      <div class="container">
        <div class="our-clients">
          <div class="container">
            <div class="row">
              <div class="col-md-2 ml-auto">
                <img alt="" v-lazy="'img/presentation-page/vodafone.jpg'" />
              </div>
              <div class="col-md-2">
                <img alt="" v-lazy="'img/presentation-page/microsoft.jpg'" />
              </div>
              <div class="col-md-2">
                <img alt="" v-lazy="'img/presentation-page/harvard.jpg'" />
              </div>
              <div class="col-md-2 mr-auto">
                <img alt="" v-lazy="'img/presentation-page/stanford.jpg'" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Ready to grab Now UI Kit PRO?</h2>
          </div>
          <div class="col-md-8 ml-auto mr-auto">
            <p class="description mb-5 text-center">You have
              <b>Free Unlimited Updates</b> and
              <b>Premium Support</b> on each package. You also have
              <b>30 days</b> to request a refund if you're not happy with your purchase.
              <br> Read more about
              <b>
                <a href="https://www.creative-tim.com/license" target="_blank">licenses here</a>
              </b>.
            </p>
            <div class="row">
              <div class="col-md-6">
                <card class="card-pricing card-margin" raised style="background-image: url('img/bg27.jpg')"
                      type="background">
                  <h6 class="category">Personal License</h6>
                  <h1 class="card-title">
                    <small>$</small>
                    69
                  </h1>
                  <ul>
                    <li>
                      <b>HTML/CSS/JS/SASS</b> Files
                    </li>
                    <li>
                      <b>Fully Coded</b> Components
                    </li>
                    <li>
                      <b>Responsive</b> Design
                    </li>
                    <li>Product
                      <b> Documentation</b>
                    </li>
                  </ul>
                  <a class="btn btn-primary btn-round"
                     href="https://www.creative-tim.com/buy/vue-now-ui-kit-pro?license=1">
                    Buy Now!
                  </a>
                </card>
              </div>
              <div class="col-md-6">
                <card class="card-pricing" raised style="background-image: url('img/bg37.jpg')"
                      type="background">
                  <h6 class="category">Developer License</h6>
                  <h1 class="card-title">
                    <small>$</small>
                    279
                  </h1>
                  <ul>
                    <li>Everything in Personal</li>
                    <li>
                      <b>+</b> Create
                      <b>Multiple Websites</b>
                    </li>
                    <li>
                      <b>+</b> Sell to
                      <b>Multiple Clients</b>
                    </li>
                    <li>
                      <b>+</b> Can
                      <b> Charge Customers</b>
                    </li>
                    <li>
                      <b>+</b> Use in
                      <b> Commercial Projects</b>
                    </li>
                    <li>
                      <b>+</b> Use in
                      <b> SaaS Projects</b>
                    </li>
                  </ul>
                  <a class="btn btn-primary btn-round"
                     href="https://www.creative-tim.com/buy/vue-now-ui-kit-pro?license=2">
                    Buy Now!
                  </a>
                </card>
              </div>
            </div>
          </div>
          <div class="text-center col-md-8 ml-auto mr-auto">
            <h3>Thank you for supporting us!</h3>
          </div>
          <div class="text-center col-md-8 ml-auto mr-auto">
            <a class="btn btn-icon btn-lg btn-round btn-twitter twitter-sharrre sharrre" data-original-title="Tweet!"
               href="#pablo" rel="tooltip" title="">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="btn btn-lg btn-round btn-icon btn-facebook facebook-sharrre sharrre" data-original-title="Share!"
               href="#pablo" rel="tooltip" title="">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a class="btn btn-lg btn-round btn-icon btn-linkedin linkedin-sharrre sharrre" data-original-title="Share!"
               href="#pablo" rel="tooltip" title="">
              <i class="fab fa-linkedin"></i>
            </a>
            <a class="btn btn-lg btn-round btn-icon btn-github"
               data-original-title="Star on Github" href="https://github.com/creativetimofficial/vue-now-ui-kit"
               rel="tooltip"
               title="">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Card, InfoSection } from '@/components';
  import { Carousel, CarouselItem, Tooltip } from 'element-ui/types';

  export default {
    name: 'presentation',
    bodyClass: 'presentation-page',
    components: {
      Card,
      InfoSection,
      [Carousel.name]: Carousel,
      [CarouselItem.name]: CarouselItem,
      [Tooltip.name]: Tooltip
    }
  };
</script>

<style lang="scss" scoped>
  .github-buttons {
    display: flex;
    align-content: center;
  }
</style>
