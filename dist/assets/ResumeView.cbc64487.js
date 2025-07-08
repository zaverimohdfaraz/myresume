import {
  _ as h,
  N as v,
  B as y,
  r as _,
  a as b,
  o as i,
  c as s,
  b as e,
  d as p,
  F as r,
  e as c,
  t as o,
  f as d,
  n as f,
  w as S,
  p as k,
  g as x
} from "./index.7943f1d2.js";

const w = {
  data() {
    return {
      educationJourney: [
        { id: 1, title: "University Of Mumbai", desc: "Bachelor of Science in Information Technology.", year: "2013 — 2016" },
        { id: 2, title: "M.H. Saboo Siddik College of Engineering", desc: "Higher Secondary School Certificate.", year: "2011 — 2013" },
        { id: 3, title: "M. H. Saboo Siddik Polytechnic", desc: "Staff Selection Commission.", year: "2011" }
      ],
      experienceJourney: [
        { id: 0, title: "Sr. Fullstack Developer", desc: "At Nexgeno Technology Pvt Ltd.", year: "2023 — Present" },
        { id: 1, title: "Fullstack Developer", desc: "At Mak Enterprises.", year: "2020 — 2023" },
        { id: 2, title: "Web Application Developer", desc: "At Mak Enterprises.", year: "2019 — 2020" },
        { id: 3, title: "Jr. Web Designer", desc: "At Mak Enterprises.", year: "2018 — 2019" }
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
  { id: 17, title: "WordPress", percentage: "15" }
      ],
      myLanguageSkillsList: [
        { id: 1, title: "English", percentage: "60" },
        { id: 2, title: "Hindi", percentage: "80" },
        { id: 3, title: "Urdu", percentage: "85" }
      ],
      myCertifications: null
    };
  },
  methods: {
    loadMyCertifications() {
      this.myCertifications = [
        {
          id: 0,
          name: "Sr. Software Developer",
          image: "/resume/img/skills/nexgeno-logo.png",
          url: "/resume/img/skills/best-manager-at-nexgeno.jpg"
        },
        {
          id: 1,
          name: "Web Application Developer",
          image: "/resume/img/skills/mak-logo-1.png",
          url: "/resume/img/skills/web-application-developer-certificate-2022-1.jpg"
        },
        {
          id: 2,
          name: "VueJS Developer Course",
          image: "/resume/img/skills/vuejs.png",
          url: "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/92665/6717859_92665.pdf?1662301098"
        },
        {
          id: 3,
          name: "cPanel & WHM Administrator",
          image: "/resume/img/skills/cpanel.png",
          url: "https://university.cpanel.net/user/401041"
        },
        {
          id: 4,
          name: "UI / UX Web Designer",
          image: "/resume/img/skills/mak-logo-1.png",
          url: "/resume/img/skills/ui-ux-web-designer-certificate.jpg"
        }
      ];
    },
    viewCredential(link) {
      window.open(link, "_blank");
    }
  },
  mounted() {
    this.loadMyCertifications();
  },
  components: {
    NavigationMain: v,
    BreadcrumbInner: y
  }
};

const de = h(w, [["render", oe], ["__scopeId", "data-v-7b334824"]]);

export { de as default };
