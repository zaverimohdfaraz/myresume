<script>
// setup attribute
export default {
  methods: {
    toggleContact: function () {
      const x = document.getElementsByClassName("sidebar__additional-info");
      const icon = document.getElementById("fa-chevron");
      const toggleState = x[0].style.display;

      if (toggleState == "block") {
        document.getElementsByClassName(
          "sidebar__additional-info"
        )[0].style.display = "none";
        icon.classList.replace("fa-chevron-up", "fa-chevron-down");
      } else {
        document.getElementsByClassName(
          "sidebar__additional-info"
        )[0].style.display = "block";
        icon.classList.replace("fa-chevron-down", "fa-chevron-up");
      }
    },
  },
};
</script>

<template>
  <div class="row sticky-parent">
    <!-- Sidebar -->
    <aside class="col-12 col-md-12 col-xl-3">
      <div class="sidebar box-outer sticky-column" style="">
        <!-- My photo -->
        <div class="sidebar__base-info">
          <RouterLink to="/">
            <figure class="avatar-box">
              <img
                v-lazy="'/resume/img/faraz_zaveri.jpg'"
                alt="Ricardo Black"
              />
            </figure>
          </RouterLink>

          <RouterLink to="/">
            <div class="text-xl-center">
              <h3 class="title title--h3 sidebar__name">Faraz Zaveri</h3>
              <div class="badge">Fullstack Developer</div>
            </div>
          </RouterLink>

          <button
            class="btn btn--small btn--icon-right sidebar__btn js-btn-toggle"
            v-on:click="toggleContact"
          >
            <span>Show Contacts</span>
            <i id="fa-chevron" class="fas fa-chevron-down"></i>
          </button>
        </div>

        <div class="sidebar__additional-info js-show">
          <div class="separation"></div>
          <ul class="details-info">
            <!-- Email -->
            <li class="details-info__item">
              <span class="box box--s2 icon-box"
                ><i class="fa-regular fa-at"></i
              ></span>
              <div class="contacts-block__info">
                <span class="overhead">Email</span>
                <a
                  class="text-overflow"
                  href="mailto:farazzaveri26@gmail.com"
                  title="farazzaveri26@gmail.com"
                  >farazzaveri26@gmail.com</a
                >
              </div>
            </li>
            <!-- Phone -->
            <li class="details-info__item">
              <span class="box box--s2 icon-box"
                ><i class="fa-regular fa-phone"></i
              ></span>
              <div class="contacts-block__info">
                <span class="overhead">Phone</span>
                <span class="text-overflow" title="+91-8928173115"
                  ><a
                    class="text-overflow"
                    href="tel:+918928173115"
                    title="+91-8928173115"
                    >+91-8928173115</a
                  ></span
                >
              </div>
            </li>
            <!-- Birthday -->
            <li class="details-info__item">
              <span class="box box--s2 icon-box"
                ><i class="fa-solid fa-cake-candles"></i
              ></span>
              <div class="contacts-block__info">
                <span class="overhead">Birthday</span>
                <span class="text-overflow" title="April 29, 1996"
                  >June 26, 2004</span
                >
              </div>
            </li>
            <!-- Location -->
            <li class="details-info__item">
              <span class="box box--s2 icon-box"
                ><i class="fa-solid fa-location-crosshairs"></i
              ></span>
              <div class="contacts-block__info">
                <span class="overhead">Location</span>
                <span class="text-overflow" title="Mumbai, India."
                  >Mumbai, India.</span
                >
              </div>
            </li>
          </ul>
          <div class="separation d-xl-none"></div>

          <!-- Social -->
          <div class="social">
            <!-- <a
              target="_blank"
              class="social__link"
              href="https://www.linkedin.com/in/"
              ><i class="fa-brands fa-linkedin"></i
            ></a> -->
            <!-- <a
              target="_blank"
              class="social__link"
              href="https://stackoverflow.com/users/"
              ><i class="fa-brands fa-stack-overflow"></i
            ></a> -->
            <a
              target="_blank"
              class="social__link"
              href="https://github.com/farazgit1"
              ><i class="fa-brands fa-github"></i
            ></a>
            <a
              target="_blank"
              class="social__link"
              href="https://www.instagram.com/faraz.zaveri/"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a
              target="_blank"
              class="social__link"
              href="https://api.whatsapp.com/send?phone=+918928173115&amp;text=Hi, I am contacting you through your website."
              ><i class="fa-brands fa-whatsapp"></i
            ></a>
            <a
  target="_blank"
  class="social__link"
  href="mailto:farazzaveri26@gmail.com"
>
  <i class="fa-solid fa-envelope"></i>
</a>

          </div>
        </div>
      </div>
    </aside>

    <!-- Content -->
    <div class="col-12 col-md-12 col-xl-9">
      <RouterView />
    </div>
    <!-- Content -->
  </div>
  <!-- sticky-parent -->

  <!--<RouterView />-->
</template>

<style scoped>
</style>
