<template>

  <div class="ui bottom fixed two item menu">

        <a :class="garden" @click="routeGarden()">
            <h3 is="sui-header">Your Garden</h3>
        </a>
      
        <a :class="challenges" @click="routeChallenges()">
            <h3 is="sui-header">Challenges</h3>
        </a>

  </div>

</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      garden: 'item',
      challenges: 'item'
    };
  },
  methods: {
    routeGarden() {
      this.$router.push({path:'/'}).catch(err => err)
    },
    routeChallenges() {
      this.$router.push({path:'/challenges'}).catch(err => err)
    }
  },
  mounted() {
    if (this.$route.path == "/challenges") {
      this.challenges = "item active";
    } 
    else {
      this.garden = "item active";
    }
  }
};
</script>

<style scoped>

</style>




