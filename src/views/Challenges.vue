<template>
  <div>
    <Header />
    <h1 class="challenge_title">🌼 Challenges 🌼</h1>

    <!--<img v-bind:src="this.imageURL" />-->
    <!-- <img v-bind:src="localStorage.getItem('img1')" /> -->
    <div class="sui-card">
      <Tasks v-bind:key="value.id" v-for="value in tasks" v-bind:value="value" />
    </div>

    <Menu />
  </div>
</template>

<script>
import Tasks from "@/components/Tasks.vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import tasks from "../assets/tasks.js";

export default {
  name: "challenges",
  components: {
    Tasks,
    Header,
    Menu
  },
  data() {
    return {
      tasks: tasks
    };
  }
};
</script>

<style scoped>
.challenge_title {
  margin-top: 30px;
  margin-bottom: 30px;
  color: black;
}

.sui-card {
  margin-bottom: 75px;
}
</style>
