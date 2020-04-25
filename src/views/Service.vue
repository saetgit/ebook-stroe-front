<template>
  <div id="main-content">
    <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">
      <div class="kopa-area-tg-1">
        <span></span>
      </div>

      <div class="container">
        <div class="kopa-breadcrumb">
          <h3>our services</h3>

          <div class="breadcrumb-content">
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
              <a itemprop="url" href="#">
                <span itemprop="title">Home</span>
              </a>
            </span>
            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
              <a itemprop="url" class="current-page">
                <span itemprop="title">our services</span>
              </a>
            </span>
          </div>
        </div>
        <!-- kopa-breadcrumb -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-16 -->

    <section class="kopa-area kopa-area-18">
      <div class="container">
        <div class="widget reading-module-service-1 text-center">
          <h3 class="widget-title style-02">
            how can
            <span>help you?</span>
          </h3>
          <div class="widget-content">
            <p class="ct-txt-1">
              Call us today at
              <strong class="txt-cl-2">+321 123 4567</strong> or Email us at
              <span class="txt-cl-1">support@site.com</span>
            </p>
            <a href="#" class="kopa-btn-14">Contact Us</a>
          </div>
        </div>
        <!-- widget -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-2 -->

    <section class="kopa-area kopa-area-3">
      <div class="kopa-area-tg-2">
        <span></span>
      </div>

      <div class="kopa-area-tg-3">
        <span></span>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="widget reading-module-service-2">
              <header class="widget-header style-01">
                <h3 class="widget-title style-02">
                  more
                  <span>services</span>
                </h3>
                <p>
                  Suspendisse ac tellus congue, eleifend leo eu, elementum ligula. Suspendisse eget interdum
                  <br />est. Nam suscipit diam nulla, porttitor blandit risus viverra sed. In hac...
                </p>
              </header>
              <div class="widget-content">
                <ul class="row ul-mh">
                  <ServiceItem v-for="service in services" :key="service.id" :service="service" />
                </ul>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-12 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-3 -->

    <section class="kopa-area kopa-area-4">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="widget reading-module-scroll reading-module-scroll-1 ct-scroll-theme-1">
              <header class="widget-header style-01">
                <h3 class="widget-title style-02">
                  upcoming
                  <span>products</span>
                </h3>
                <p>
                  Suspendisse ac tellus congue, eleifend leo eu, elementum ligula. Suspendisse eget interdum
                  <br />est. Nam suscipit diam nulla, porttitor blandit risus viverra sed. In hac...
                </p>
              </header>
              <div class="widget-content">
                <ul class="item-list clearfix">
                  <li class>
                    <article class="entry-item video-post">
                      <div class="entry-thumb">
                        <a href="#">
                          <img src="images/p19/1.jpg" alt />
                        </a>
                        <div class="ct-mask">
                          <a href="#" class="ct-icon"></a>
                        </div>
                      </div>
                      <div class="entry-content">
                        <a href="#" class="kopa-btn-7">24 October</a>
                        <h4 class="entry-title">
                          <a
                            href="#"
                          >Aenean condimentum felis non ante tepus sit amet gravida nullam.</a>
                        </h4>
                        <p>In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.</p>
                        <footer class="clearfix">
                          <div class="kopa-pull-left">
                            <a href="#" class="more-link">Read more</a>
                          </div>
                          <div class="kopa-pull-right">
                            <ul class="clearfix">
                              <li>
                                <a href="#" class="ct-icon-3">
                                  <i class="fa fa-user"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="ct-icon-3">
                                  <i class="fa fa-comments"></i>
                                  <span class="ct-icon-4">2</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </footer>
                      </div>
                    </article>
                  </li>
                  <li class>
                    <article class="entry-item video-post">
                      <div class="entry-thumb">
                        <a href="#">
                          <img src="images/p19/2.jpg" alt />
                        </a>
                        <div class="ct-mask">
                          <a href="#" class="ct-icon"></a>
                        </div>
                      </div>
                      <div class="entry-content">
                        <a href="#" class="kopa-btn-7">24 October</a>
                        <h4 class="entry-title">
                          <a
                            href="#"
                          >Aenean condimentum felis non ante tepus sit amet gravida nullam.</a>
                        </h4>
                        <p>In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.</p>
                        <footer class="clearfix">
                          <div class="kopa-pull-left">
                            <a href="#" class="more-link">Read more</a>
                          </div>
                          <div class="kopa-pull-right">
                            <ul class="clearfix">
                              <li>
                                <a href="#" class="ct-icon-3">
                                  <i class="fa fa-user"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="ct-icon-3">
                                  <i class="fa fa-comments"></i>
                                  <span class="ct-icon-4">2</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </footer>
                      </div>
                    </article>
                  </li>
                  <li class>
                    <article class="entry-item video-post">
                      <div class="entry-thumb">
                        <a href="#">
                          <img src="images/p19/3.jpg" alt />
                        </a>
                        <div class="ct-mask">
                          <a href="#" class="ct-icon"></a>
                        </div>
                      </div>
                      <div class="entry-content">
                        <a href="#" class="kopa-btn-7">24 October</a>
                        <h4 class="entry-title">
                          <a
                            href="#"
                          >Aenean condimentum felis non ante tepus sit amet gravida nullam.</a>
                        </h4>
                        <p>In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.</p>
                        <footer class="clearfix">
                          <div class="kopa-pull-left">
                            <a href="#" class="more-link">Read more</a>
                          </div>
                          <div class="kopa-pull-right">
                            <ul class="clearfix">
                              <li>
                                <a href="#" class="ct-icon-3">
                                  <i class="fa fa-user"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="ct-icon-3">
                                  <i class="fa fa-comments"></i>
                                  <span class="ct-icon-4">2</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </footer>
                      </div>
                    </article>
                  </li>
                  <li class>
                    <article class="entry-item video-post">
                      <div class="entry-thumb">
                        <a href="#">
                          <img src="images/p19/1.jpg" alt />
                        </a>
                        <div class="ct-mask">
                          <a href="#" class="ct-icon"></a>
                        </div>
                      </div>
                      <div class="entry-content">
                        <a href="#" class="kopa-btn-7">24 October</a>
                        <h4 class="entry-title">
                          <a
                            href="#"
                          >Aenean condimentum felis non ante tepus sit amet gravida nullam.</a>
                        </h4>
                        <p>In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.</p>
                        <footer class="clearfix">
                          <div class="kopa-pull-left">
                            <a href="#" class="more-link">Read more</a>
                          </div>
                          <div class="kopa-pull-right">
                            <ul class="clearfix">
                              <li>
                                <a href="#" class="ct-icon-3">
                                  <i class="fa fa-user"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="ct-icon-3">
                                  <i class="fa fa-comments"></i>
                                  <span class="ct-icon-4">2</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </footer>
                      </div>
                    </article>
                  </li>
                  <li class>
                    <article class="entry-item video-post">
                      <div class="entry-thumb">
                        <a href="#">
                          <img src="images/p19/2.jpg" alt />
                        </a>
                        <div class="ct-mask">
                          <a href="#" class="ct-icon"></a>
                        </div>
                      </div>
                      <div class="entry-content">
                        <a href="#" class="kopa-btn-7">24 October</a>
                        <h4 class="entry-title">
                          <a
                            href="#"
                          >Aenean condimentum felis non ante tepus sit amet gravida nullam.</a>
                        </h4>
                        <p>In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.</p>
                        <footer class="clearfix">
                          <div class="kopa-pull-left">
                            <a href="#" class="more-link">Read more</a>
                          </div>
                          <div class="kopa-pull-right">
                            <ul class="clearfix">
                              <li>
                                <a href="#" class="ct-icon-3">
                                  <i class="fa fa-user"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="ct-icon-3">
                                  <i class="fa fa-comments"></i>
                                  <span class="ct-icon-4">2</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </footer>
                      </div>
                    </article>
                  </li>
                  <li class>
                    <article class="entry-item video-post">
                      <div class="entry-thumb">
                        <a href="#">
                          <img src="images/p19/3.jpg" alt />
                        </a>
                        <div class="ct-mask">
                          <a href="#" class="ct-icon"></a>
                        </div>
                      </div>
                      <div class="entry-content">
                        <a href="#" class="kopa-btn-7">24 October</a>
                        <h4 class="entry-title">
                          <a
                            href="#"
                          >Aenean condimentum felis non ante tepus sit amet gravida nullam.</a>
                        </h4>
                        <p>In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.</p>
                        <footer class="clearfix">
                          <div class="kopa-pull-left">
                            <a href="#" class="more-link">Read more</a>
                          </div>
                          <div class="kopa-pull-right">
                            <ul class="clearfix">
                              <li>
                                <a href="#" class="ct-icon-3">
                                  <i class="fa fa-user"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="ct-icon-3">
                                  <i class="fa fa-comments"></i>
                                  <span class="ct-icon-4">2</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </footer>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-12 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-4 -->

    <section class="kopa-area kopa-area-19 kopa-area-parallax white-text-style">
      <div class="kopa-area-tg-4">
        <span></span>
      </div>

      <div class="kopa-area-tg-5">
        <span></span>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-5 col-xs-5">
            <div class="widget reading-module-newsletter-1">
              <h3 class="widget-title style-05">Newsletter sign Up</h3>
              <div class="widget-content">
                <form
                  class="newsletter-form"
                  method="post"
                  action="http://dinhvankiem.com/demo/e-reading/html/processForm.php"
                >
                  <input
                    type="text"
                    size="40"
                    class="email"
                    name="email"
                    placeholder="Enter your e-mail"
                  />
                  <button type="submit" class="submit">
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </form>
                <p>
                  Curabitur sit amet mi non justo blandit roncus in porttitor diam. In
                  <br />libero in libero ultricies scelerisque.
                </p>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-5 -->

          <div class="col-md-7 col-sm-7 col-xs-7">
            <div class="widget reading-module-service-1">
              <div class="widget-content">
                <ul class="row ul-mh">
                  <li class="col-md-6 col-sm-6 col-xs-6">
                    <article class="entry-item ct-item-2 style-01">
                      <div class="entry-content">
                        <h4>
                          <i class="fa fa-truck"></i>Free
                          <span>Shipping</span>
                        </h4>
                        <p>For standard oders over 100 USD. disse lobortis vestibulum eros sit amet rper donec mollis.</p>
                        <a href="#" class="more-link style-01">Read more</a>
                      </div>
                    </article>
                  </li>
                  <li class="col-md-6 col-sm-6 col-xs-6">
                    <article class="entry-item ct-item-2">
                      <div class="entry-content">
                        <h4>
                          <i class="fa fa-reply"></i>Free
                          <span>returns</span>
                        </h4>
                        <p>For standard oders over 100 USD. disse lobortis vestibulum eros sit amet rper donec mollis.</p>
                        <a href="#" class="more-link style-01">Read more</a>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-7 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-19 -->

    <section class="kopa-area kopa-area-6">
      <div class="kopa-area-tg-3">
        <span></span>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="widget reading-module-pricing-1">
              <header class="widget-header style-01">
                <h3 class="widget-title style-02">
                  author
                  <span>plans</span>
                </h3>
                <p>
                  Suspendisse ac tellus congue, eleifend leo eu, elementum ligula. Suspendisse eget interdum
                  <br />est. Nam suscipit diam nulla, porttitor blandit risus viverra sed. In hac...
                </p>
              </header>
              <div class="widget-content">
                <ul class="ul-mh row">
                  <li class="col-md-4 col-sm-4 col-xs-4">
                    <div class="pt-column style-01">
                      <div class="pt-header">
                        <h3 class="pt-title">Basic Plan</h3>
                        <div class="pt-price">
                          <h4>
                            <span>$</span>29
                          </h4>
                          <p>/ per Month</p>
                        </div>
                      </div>
                      <div class="pt-content">
                        <ul>
                          <li>
                            <h5>Features</h5>
                          </li>
                          <li>10 Upload Per Month</li>
                          <li>02 Free Download</li>
                          <li>05 GB Server Space</li>
                          <li>60 Hit Per Day</li>
                          <li>Author Page</li>
                          <li>24/7 Customer Support</li>
                          <li>Unlimited staff</li>
                          <li class="footer-row">
                            <a href="#" class="kopa-btn-14">get started</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="col-md-4 col-sm-4 col-xs-4">
                    <div class="pt-column">
                      <div class="pt-header">
                        <h3 class="pt-title">Premium Plan</h3>
                        <div class="pt-price">
                          <h4>
                            <span>$</span>69
                          </h4>
                          <p>/ per Month</p>
                        </div>
                      </div>
                      <div class="pt-content">
                        <ul>
                          <li>
                            <h5>Features</h5>
                          </li>
                          <li>10 Upload Per Month</li>
                          <li>02 Free Download</li>
                          <li>05 GB Server Space</li>
                          <li>60 Hit Per Day</li>
                          <li>Author Page</li>
                          <li>24/7 Customer Support</li>
                          <li>Unlimited staff</li>
                          <li class="footer-row">
                            <a href="#" class="kopa-btn-14">get started</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="col-md-4 col-sm-4 col-xs-4">
                    <div class="pt-column style-02">
                      <div class="pt-header">
                        <h3 class="pt-title">ultimate Plan</h3>
                        <div class="pt-price">
                          <h4>
                            <span>$</span>69
                          </h4>
                          <p>/ per Month</p>
                        </div>
                      </div>
                      <div class="pt-content">
                        <ul>
                          <li>
                            <h5>Features</h5>
                          </li>
                          <li>10 Upload Per Month</li>
                          <li>02 Free Download</li>
                          <li>05 GB Server Space</li>
                          <li>60 Hit Per Day</li>
                          <li>Author Page</li>
                          <li>24/7 Customer Support</li>
                          <li>Unlimited staff</li>
                          <li class="footer-row">
                            <a href="#" class="kopa-btn-14">get started</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-12 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-6 -->

    <section class="kopa-area kopa-area-17">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-5 col-xs-5">
            <div class="widget reading-module-intro-1">
              <header class="widget-header style-02">
                <h4 class="widget-sub-title">an app</h4>
                <h3 class="widget-title">FOR ALL YOURS</h3>
              </header>
              <div class="widget-content">
                <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit ctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate us a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio dunt auctor a ornare odio.an Sed non.</p>
                <div class="ct-box-1">
                  <h5>Download App’s</h5>
                  <p>
                    Get Free Mobile App’s for
                    <span class="txt-main-color">E-Reading</span> Available on :
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <img src="images/p5/1.png" alt />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/p5/2.png" alt />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-5 -->

          <div class="col-md-7 col-sm-7 col-xs-7">
            <div class="widget reading-module-ads-2">
              <div class="widget-content">
                <img
                  class="wow fadeInUp"
                  data-wow-duration="0.4s"
                  data-wow-delay="0.4s"
                  src="images/p6/1.png"
                  alt
                />
                <img
                  class="wow fadeInUp"
                  data-wow-duration="0.4s"
                  data-wow-delay="0.6s"
                  src="images/p6/2.png"
                  alt
                />
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-7 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-7 -->
  </div>
</template>
<script>
import ServiceItem from "../components/Service/ServiceItem";
export default {
  name: "Service",
  data() {
    return {
      services: [
        {
            id:1 ,
          title: "secure server",
          icon: "fa fa-globe",
          description:
            "This is Photoshop's version  of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
        },
          {
              id: 2,
              
          title: "Fast Delivery",
          icon: "fa fa-truck",
          description:
            "This is Photoshop's version  of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
        },
          {
              id:3 ,
          title: "Money Back",
          icon: "fa fa-refresh",
          description:
            "This is Photoshop's version  of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
        },
          {
              id:4 ,
          title: "Free Support",
          icon: "fa fa-headphones",
          description:
            "This is Photoshop's version  of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
        },
          {
              id: 5,
          title: "100% Translatable",
          icon: "fa fa-microphone",
          description:
            "This is Photoshop's version  of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
        },
          {
              id:6 ,
          title: "secure server",
          icon: "fa fa-clone",
          description:
            "This is Photoshop's version  of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
        }
      ]
    };
  },
  components: {
    ServiceItem
  }
};
</script>