<template>
  <div class="box-outer">
    <!-- Menu -->
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <!-- About -->
    <BreadcrumbInner :titleData="'Recent Work'"></BreadcrumbInner>
    <div class="row">
      <div
        v-for="work in recentWork"
        :key="work.id"
        class="col-md-4 text-center"
      >
        <RouterLink
          :to="'/project/' + makeReadableURL(work.name) + '/' + work.id"
        >
         <img class="rounded" :src="work.image" />

          <h6 class="mt-2 mb-4">{{ work.name }}</h6>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";
import axios from "axios";

export default {
  data() {
    return {
      recentWork: [],
    };
  },
  created() {
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
          //console.log(result.data);
          this.recentWork = result.data;
        });
    },
    makeReadableURL(param) {
      var result = param.replace(" ", "-");
      var result = result.replace("|", "-");
      var result = result.replace(" ", "-");
      var result = result.replace(" ", "-");
      var result = result.replace("---", "-");
      return result;
    },
  },
};
</script>
    
<style>
</style>
    

<!-- {
    "id": 4,
    "name": "Nexgeno",
    "website": "https://nexgeno.in/",
    "image": "/resume/img/projects/default.JPG",
    "stacks": "Nextjs",
    "software_desc_1": " It is a service based company, which offer various services, including web design and web development",
    "learn": [
      {
        "id": 1,
        "content": "Did Complete UiUX development of sub-pages and Numerous UI based changes"
      }
    ],
    "role": "UiUx Developer",
    "type": "Customized Application"
  },
 
    {
    "id": 5,
    "name": "Website Designing Mumbai",
    "website": "https://websitedesigningmumbai.in/",
    "image": "/resume/img/projects/default.JPG",
    "stacks": "Php",
    "software_desc_1": "  It is a service based company, which offer various services, including web design and web development",
    "learn": [
      {
        "id": 1,
        "content": "Did Complete UiUX development and made a custom api to submit contact forms"
      }
    ],
    "role": "Fullstack Developer",
    "type": "Customized Application"
  },
 
  
  
 {
    "id": 6,
    "name": "Nova",
    "website": "https://novaa-pi.vercel.app/",
    "image": "/resume/img/projects/default.JPG",
    "stacks": "Reactjs & Nodejs",
    "software_desc_1": " This project is yet in Development stage",
    "learn": [
      {
        "id": 1,
        "content": "Did Complete UiUX development in Nextjs and made a CMS backend"
      }
    ],
    "role": "Fullstack Developer",
    "type": "CMS Application"
  } -->
