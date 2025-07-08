<template>
  <div class="box-outer">
    <div class="nav-container">
      <NavigationMain />
    </div>

    <BreadcrumbInner :titleData="'Contact Me'" />

    <form @submit="sendEnquiry" autocomplete="off">
      <div class="row">
        <div class="form-group col-12 col-md-6">
          <input
            type="text"
            class="input form-control"
            v-model="formData.name"
            placeholder="Full name"
            required
          />
        </div>
        <div class="form-group col-12 col-md-6">
          <input
            type="email"
            class="input form-control"
            v-model="formData.email"
            placeholder="Email address"
            required
          />
        </div>
        <div class="form-group col-12 col-md-12">
          <textarea
            class="textarea form-control"
            v-model="formData.message"
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-end">
          <button type="submit" class="btn">
            <i class="fa-solid fa-paper-plane"></i> Send Message
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";

export default {
  components: {
    NavigationMain,
    BreadcrumbInner,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    sendEnquiry(e) {
      e.preventDefault();
      const subject = encodeURIComponent("Message from Portfolio");
      const body = encodeURIComponent(
        `Hello, my name is ${this.formData.name}.\n\n${this.formData.message}`
      );
      window.location.href = `mailto:farazzaveri26@gmail.com?subject=${subject}&body=${body}`;
    },
  },
};
</script>
