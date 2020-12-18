<template>
  <div id="home">
    <Header />
    
      <router-link to="/">
          <i class="big arrow left icon"></i>
      </router-link>

      <br/><br/>

      <h1 class="task_name">{{task}}</h1>

      <div v-if="seedData">
        <img src="../assets/placeholder-image.jpg" x="80" y="50" width="640" height="480"/>
        <!-- IMAGE SOURCE: https://img.buzzfeed.com/video-api-prod/assets/87e93f6391744454bf373a7196de207f/BFV13800_AppleCiderDonuts-ThumbTextless1080.jpg -->
      </div>

      <div v-else>
        <img v-bind:src="base64" x="80" y="50" width="640" height="480"/>
      </div>
      <br/>
      <div class="dates">
      <h3 is="sui-header">{{relativeDate}} <br/> {{date}}</h3>
      </div>
      <br/><br/><br/><br/><br/>
    <Menu />
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import tasks from "../assets/tasks.js";
import moment from 'moment';

export default {
  name: "SingleFlower",
  components: {
    Header,
    Menu
  },
  data() {
    return {
        base64: '',
        tasks: tasks,
        task: '',
        seedData: false,
        date: '',
        relativeDate: ''
    }
  },
  mounted() {
    this.interval = setInterval(this.time, 1000)
    this.base64 = localStorage.getItem(this.$route.params.selection);
    this.task = this.tasks[this.$route.params.selection - 1].task;

    if (this.$route.params.selection == '1') { // seed data - hardcode arbitrary date
      this.seedData = true;
      this.date = moment(new Date(2019, 10, 16)).format('dddd[,] MMMM Do YYYY')
      this.relativeDate = moment(new Date(2019, 10, 16)).fromNow()
    }
    else { // NOT seed data
      this.date = moment(new Date(localStorage.getItem('date'+this.$route.params.selection))).format('dddd[,] MMMM Do YYYY')
      this.relativeDate = moment(new Date(localStorage.getItem('date'+this.$route.params.selection))).fromNow()
    }

    /*eslint-disable no-console */
    // console.log(this.seedData)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
};
</script>

<style scoped>
i.arrow {
    float: left;
    padding: 30px;
}

img {
  border-radius: 30px;
}

@media only screen and (max-width: 600px) {

/* a, .userFlowerDiv {
  margin-left: auto;
  margin-right: auto;
} */

img {
  /* width: 330px;
  height: 225px; */
  max-width: 90%;
  height: auto;
  border-radius: 30px;
  margin-left: 2%;
  margin-right: 2%;
}

.task_name {
  font-size: 20px;
  margin-left: 2%;
  margin-right: 2%;
  padding-top: 2%;
}

}

</style>