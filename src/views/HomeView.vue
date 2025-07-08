<template>
  <div class="box-outer">
    <!-- Menu -->
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <!-- About Me -->
    <BreadcrumbInner :titleData="'About Me'"></BreadcrumbInner>

    <div>
      <p>
        Hello! I'm Faraz Zaveri, a Fullstack developer from Mumbai, India,
        with over 1+ years of experience.
      </p>
      <p>
        Currently, I work at NexGeno Technology, where I’ve successfully built
        more than 25 websites. My expertise covers E-commerce, CMS, CRM, HRMS,
        LMS, WordPress, Static, and custom-built websites, handling both
        frontend and backend development.
      </p>

      <h2 class="title title--h2 mt-3">What I'm Doing</h2>

      <div class="row">
        <!-- Case Item -->
        <div v-for="row in myJobs" :key="row.id" class="col-12 col-lg-6">
          <div class="case-item box box--s2 box-inner">
            <img class="case-item__icon" v-lazy="row.image" alt="" />
            <div>
              <h3 class="title title--h3" style="margin-top: -4px">
                {{ row.name }}
              </h3>
              <p class="case-item__caption">
                {{ row.content }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--<p style="display: flex;" v-for="point in AboutMePoints" :key="point.id">
        <i style="position: relative;top: 4px; margin-right: 4px;" class="fa-solid fa-check"></i> {{ point.content }}
      </p>-->
    </div>
  </div>
</template>
  
  <script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";

export default {
  data() {
    return {
      myJobs: null,
      AboutMePoints: [
        {
          id: "1",
          content: "I'm a fullstack developer",
        },
        {
          id: "2",
          content:
            " Skilled in Mongodb,Express.js,React,Node.js,Next.js JavaScript, Git, Html, Css, Bootstap5,Python Codeignitor, PHP, MySQL, jQuery, Vue.js, Ajax, Rest API's, wordpress, JSON,.",
        },
        {
          id: "3",
          content:
            "Developed / Work almost 25+ websites of frontend & backend including Dynamic websites, E-commerce, CMS, CRM, HRMS, LMS, Static websites & Custom based websites.",
        },
      
        { id: "4", content: "Bugs fixing skills in real-time projects." },
        { id: "5", content: "Achived 3+ awards & certifications." },
        {
          id: "6",
          content:
            "I always try to be up-to-date with industry-standard technologies.",
        },
        {
          id: "7",
          content:
            "Currently working as a fullstack developer with Nexgeno Technoloy.",
        },
      ],
    };
  },
  methods: {
    listJobs() {
      this.myJobs = [
        {
          id: 1,
          name: "Web Development",
          image: "/resume/img/skills/icon-dev.svg",
          content:
            "High-quality development of sites at the professional level.",
        },
        {
          id: 2,
          name: "Web Designing",
          image: "/resume/img/skills/icon-design.svg",
          content:
            "The most modern and high-quality design made at a professional level.",
        },
      ];
    },
  },
  mounted() {
    this.listJobs();
  },
  components: {
    NavigationMain,
    BreadcrumbInner,
  },
};
</script>
  
  