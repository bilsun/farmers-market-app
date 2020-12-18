<template>
    <div id="superParent">
        <Header/>
        <div id="flex-container">

        <!-- SEED FLOWER -->
        <router-link :to="{ name: 'details', params: { selection: 1 }}">
          <svg width="300" height="300">
            <g>
            <clipPath id="c1">
              <circle cx="141" cy="147" r="70"/>
            </clipPath>
            <image href="../assets/flower-clipart.png" x="-1" y="-5" height="300" width="300"/>
            <!-- IMAGE SOURCE: https://wikiclipart.com/sunflower-clip-art_38805/ -->
            <image clip-path="url(#c1)" class="userImage" href="../assets/placeholder-image.jpg" x="44" y="52" height="190" width="190"/>
            <circle cx="141" cy="147" fill-opacity="0" stroke="black" stroke-width="3" r="70"/>
            </g>
          </svg>
        </router-link>

        <Flower v-for="value in tasks" :value="value" v-bind:key="value.id"/>
        
        </div>
        <Menu/>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Menu from '@/components/Menu.vue'
    import Flower from '@/components/Flower.vue'
    import tasks from "../assets/tasks.js";

    export default {
        name: 'gallery',
        components: {
            Header,
            Menu,
            Flower
        },
    data() {
    return {
      tasks: tasks
    };
  }
    }
</script>

<style scoped>
#flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
}

#superParent {
  margin-left: auto;
  margin-right: auto;
}

router-link, svg {
  border-style: none;
}

/* a {
  margin-left: auto;
  margin-right: auto;
} */

#superParent {
  margin-left: auto;
  margin-right: auto;
  /* max-width: 500px; */
}

/* <a> tag styling works for seed flower, but why not for non-seed Flowers??? */
/* FIXED: had an extra unecessary <div> in each non-seed Flower component */

@media only screen and (max-width: 600px) {

a, .userFlowerDiv {
  margin-left: auto;
  margin-right: auto;
}

}

</style>