<template>
  <div class="box-outer">
    <!-- Menu -->
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <!-- About -->
    <BreadcrumbInner :titleData="singleWork.name"></BreadcrumbInner>

    <RouterLink class="btn-back" to="/recent-work">
      <i class="fa-solid fa-arrow-left"></i> Back To Work
    </RouterLink>

    <div class="mb-3"></div>

    <img
      class="rounded mb-3"
      :src="singleWork.image"
      style="width: 100%; height: auto; object-fit: inherit"
    />

    <ul class="details-info details-info--inline">
      <!-- Client -->
      <li class="details-info__item">
        <span class="box box--s2 icon-box"><i class="far fa-link"></i></span>
        <div class="details-info__info">
          <span class="overhead">Web Address</span>
          <span
            ><a
              v-if="singleWork.website"
              :href="'https://' + singleWork.website"
              target="_blank"
            >
              {{ singleWork.website }}
            </a>
            <span v-else> Not available </span></span
          >
        </div>
      </li>
      <!-- Role -->
      <li class="details-info__item">
        <span class="box box--s2 icon-box"
          ><i class="fas fa-user-alt"></i
        ></span>
        <div class="details-info__info">
          <span class="overhead">Role</span>
          {{ singleWork.role }}
        </div>
      </li>
      <!-- Category -->
      <li class="details-info__item">
        <span class="box box--s2 icon-box"><i class="far fa-code"></i></span>
        <div class="details-info__info">
          <span class="overhead">Stacks</span>
          <span>{{ singleWork.stacks }}</span>
        </div>
      </li>
    </ul>

    <h5>Project Description</h5>
    <p><span v-html="singleWork.software_desc_1"></span></p>

    <h5 class="mb-3">My Experience</h5>
    <p class="mb-2" v-for="learn in singleWork.learn" :key="learn.id">
      <i class="fa-solid fa-check"></i> {{ learn.content }}
    </p>
  </div>
</template>

<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";
import axios from "axios";

export default {
  data() {
    return {
      singleWork: [],
    };
  },
  mounted() {
    this.getAllwork();
  },
  components: {
    NavigationMain,
    BreadcrumbInner,
  },
  methods: {
    getAllwork: function () {
      axios
        .get(import.meta.env.BASE_URL + "resume/portfolio.json")
        .then((result) => {
          const singleWork = result.data;
          const current_id = this.$route.params.id;
          this.singleWork = singleWork.filter(function (x) {
            return x.id == current_id;
          });
          this.singleWork = this.singleWork[0];
          //console.log(this.singleWork);
        });
    },
  },
};
</script>