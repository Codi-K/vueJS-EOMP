import { createStore } from 'vuex'

const dataURL = "https://codi-k.github.io/vueJS-EOMP-JSON/data/";

export default createStore({
  state: {
    mydetails: null,
    educations: null,
    skills: null,
    mycv: null,
    projects: null,
    testimonils: null,
  },
  getters: {},
  mutations: {
    setMydetails(state, mydetails) {
      state.mydetails = mydetails;
    },
    setEducation(state, educations) {
      state.educations = educations;
    },
    setSkills(state, skills) {
      state.skills = skills;
    },
    setMycv(state, mycv) {
      state.mycv = mycv;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setTestimonials(state, testimonils) {
      state.testimonils = testimonils;
    },
  },
  actions: {
    async fetchMydetails(context) {
      try {
        let res = await fetch(dataURL);
        let { mydetails } = await res.json();
        context.commit("setMydetails", mydetails);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchEducation(context) {
      try {
        let res = await fetch(dataURL);
        let { educations } = await res.json();
        context.commit("setEducation", educations);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchSkills(context) {
      try {
        let res = await fetch(dataURL);
        let { skills } = await res.json();
        context.commit("setSkills", skills);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchMycv(context) {
      try {
        let res = await fetch(dataURL);
        let { mycv } = await res.json();
        context.commit("setMycv", mycv);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchProjects(context) {
      try {
        let res = await fetch(dataURL);
        let { projects } = await res.json();
        context.commit("setProjects", projects);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataURL);
        let { testimonils } = await res.json();
        context.commit("setTestimonials", testimonils);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  modules: {},
});
