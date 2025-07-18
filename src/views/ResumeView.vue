<template>
  <div class="box-outer">
    <!-- Menu -->
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <!-- About -->
    <BreadcrumbInner :titleData="'Resume'"></BreadcrumbInner>

    <div class="row">
      <div class="col-12 col-lg-7">
        <!-- Education -->
        <h2 class="title title--h2">
          <span class="box box--s2 icon-box">
            <i class="fa-solid fa-book-open"></i></span
          >Education
        </h2>
        <div class="timeline">
          <article
            v-for="education in educationJourney"
            :key="education.id"
            class="timeline__item"
          >
            <h5 class="title title--h4 timeline__title">
              {{ education.title }}
            </h5>
            <span class="timeline__period">{{ education.year }}</span>
            <p class="timeline__description">
              {{ education.desc }}
            </p>
          </article>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <!-- Experience -->
        <h2 class="title title--h2">
          <span class="box box--s2 icon-box">
            <i class="fa-regular fa-code"></i></span
          >Experience
        </h2>
        <div class="timeline">
          <article
            v-for="experience in experienceJourney"
            :key="experience.id"
            class="timeline__item"
          >
            <h5 class="title title--h4 timeline__title">
              {{ experience.title }}
            </h5>
            <span class="timeline__period">{{ experience.year }}</span>
            <p class="timeline__description">
              {{ experience.desc }}
            </p>
          </article>
        </div>
      </div>
    </div>

    <!-- Roles & Responsibilities -->
    <h2 class="title title--h2 mt-3">Current Role & Responsibilities</h2>
    <ul class="role-list">
       <li>Design and develop responsive frontend UIs using <strong>HTML, CSS, JavaScript, Bootstrap, and React.js</strong>.</li>
  <li>Build dynamic and SEO-friendly websites using <strong>Next.js</strong> (React framework) and <strong>Tailwind CSS</strong>.</li>
  <li>Set up and manage <strong>Express.js + Node.js</strong> backends with RESTful APIs for real-time data handling.</li>
  <li>Integrate <strong>MongoDB</strong> for backend database operations using <strong>Mongoose ORM</strong>.</li>
  <li>Handle <strong>user authentication, form validation, file uploads</strong>, and dynamic content management.</li>
  <li>Implement complete <strong>CMS-like dashboards</strong>, contact forms, and data display sections from scratch.</li>
  <li>Deploy and maintain full-stack apps using platforms like <strong>Vercel</strong>, <strong>Railway</strong>, or <strong>Render</strong>.</li>
  <li>Manage <strong>GitHub</strong> repositories for version control and team collaboration.</li>
  <li>Continuously debug and resolve both frontend and backend issues across the stack.</li>
  <li>Actively upgrading skills in <strong>backend architecture</strong>, <strong>APIs</strong>, and <strong>performance optimization</strong>.</li>
</ul>

    <!-- Coding Skills -->
    <h2 class="title title--h2 mt-3">Coding Skills</h2>
    <div class="">
      <div class="row">
        <div
          v-for="skill in myCodingSkillsList"
          :key="skill.id"
          class="progress col-lg-4 col-12"
        >
          <div class="progress-text">
            <span>{{ skill.title }}</span> {{ skill.percentage }}%
          </div>
          <div class="progress-bar">
            <span
              role="progressbar"
              :aria-valuenow="skill.percentage"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="{ width: skill.percentage + '%', 'z-index': 2 }"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <!--<h2 class="title title--h2 mt-3">Languages</h2>
    <div class="">
      <div class="row">
        <div
          v-for="skill in myLanguageSkillsList"
          :key="skill.id"
          class="progress col-lg-4 col-12"
        >
          <div class="progress-text">
            <span>{{ skill.title }}</span> {{ skill.percentage }}%
          </div>
          <div class="progress-bar">
            <span
              role="progressbar"
              :aria-valuenow="skill.percentage"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="{ width: skill.percentage + '%', 'z-index': 2 }"
            ></span>
          </div>
        </div>
      </div>
    </div>-->

    <!-- <h2 class="title title--h2 mt-3">Licenses & Certifications</h2> -->

    <div class="row">
      <!-- Case Item -->
      <div
        v-for="certificate in myCertifications"
        :key="certificate.id"
        class="col-12 col-lg-6"
      >
        <div class="case-item box box--s2 box-inner">
          <img class="case-item__icon" v-lazy="certificate.image" alt="" />
          <div>
            <h3 class="title title--h3" style="margin-top: -4px">
              {{ certificate.name }}
            </h3>
            <p class="case-item__caption">
              <a :href="certificate.url" target="_blank"
                >See Credential
                <i class="fa-regular fa-arrow-up-right-from-square"></i
              ></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";

export default {
  data() {
    return {
      educationJourney: [
        {
          id: 1,
          title: "University Of Mumbai",
          desc: "Bachelor of Science in Information Technology.",
          year: "2022 — 2025",
        },
        {
          id: 2,
          title: "Gurunanak Khalsa College",
          desc: "HSC",
          year: "2022",
        },
        {
          id: 3,
          title: "Holy Cross High School",
          desc: "SSC.",
          year: "2020",
        },
      ],
      experienceJourney: [
        {
          id: 0,
          title: " Fullstack Developer",
          desc: "At Nexgeno Technology Pvt Ltd.",
          year: "2025 — Present",
        },
        {
          id: 1,
          title: "Data Analyst",
          desc: "At Imperial Digital Solutions.",
          year: "2024",
        },
       
      ],
      myCodingSkillsList: [
  { id: 1, title: "ReactJS", percentage: "75" },
  { id: 2, title: "NodeJS", percentage: "75" },
  { id: 3, title: "MongoDB", percentage: "75" },
  { id: 4, title: "NextJS", percentage: "75" },
  { id: 5, title: "MySQL", percentage: "75" },
  { id: 6, title: "PostgreSQL", percentage: "25" },
  { id: 7, title: "jQuery", percentage: "75" },
  { id: 8, title: "JavaScript", percentage: "60" },
  { id: 9, title: "HTML", percentage: "80" },
  { id: 10, title: "CSS", percentage: "80" },
  { id: 11, title: "Bootstrap", percentage: "80" },
  { id: 12, title: "Git", percentage: "60" },
  { id: 13, title: "VueJS", percentage: "20" },
  { id: 14, title: "Laravel", percentage: "25" },
  { id: 15, title: "Codeigniter", percentage: "15" },
  { id: 16, title: "PHP", percentage: "15" },
  { id: 17, title: "WordPress", percentage: "15" },
   { id: 18, title: "Python", percentage: "50" },
      ],
      myLanguageSkillsList: [
        { id: 1, title: "English", percentage: "85" },
        { id: 2, title: "Hindi", percentage: "90" },
        { id: 3, title: "Marathi", percentage: "70" },
        { id: 4, title: "Urdu", percentage: "80" },
      ],
      myCertifications: null,
    };
  },
  methods: {
    loadMyCertifications() {
      this.myCertifications = [
        // {
        //   id: 0,
        //   name: "Sr. Software Developer",
        //   image: "/resume/img/skills/nexgeno-logo.png",
        //   url: "/resume/img/skills/best-manager-at-nexgeno.jpg",
        // },
        // {
        //   id: 1,
        //   name: "Web Application Developer",
        //   image: "/resume/img/skills/mak-logo-1.png",
        //   url: "/resume/img/skills/web-application-developer-certificate-2022-1.jpg",
        // },
        // {
        //   id: 2,
        //   name: "VueJS Developer Course",
        //   image: "/resume/img/skills/vuejs.png",
        //   url: "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/92665/6717859_92665.pdf?1662301098",
        // },
        // {
        //   id: 3,
        //   name: "cPanel & WHM Administrator",
        //   image: "/resume/img/skills/cpanel.png",
        //   url: "https://university.cpanel.net/user/401041",
        // },
        // {
        //   id: 4,
        //   name: "UI / UX Web Designer",
        //   image: "/resume/img/skills/mak-logo-1.png",
        //   url: "/resume/img/skills/ui-ux-web-designer-certificate.jpg",
        // },
      ];

      this.myCertifications = [];
    },
    viewCredential(url) {
      window.open(url, "_blank");
    },
  },
  mounted() {
    this.loadMyCertifications();
  },
  components: {
    NavigationMain,
    BreadcrumbInner,
  },
};
</script>

<style scoped>
.role-list li {
  margin-bottom: 10px;
}
.role-list li {
  list-style: none;
  position: relative;
  padding: 3px 0 2px 25px;
}

.role-list li::before {
  content: "\f111"; /***/
  position: absolute;
  /*top: 0px;
  font-size:24px;
  top: 4px;
  font-size: 15px;*/
  top: 8px;
  font-size: 8px;
  left: 0;
  font-family: "Font Awesome 6 Free";
}

.role-list {
  padding-left: 0px;
}
</style>
