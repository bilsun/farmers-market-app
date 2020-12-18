<template>
  <!-- <div> -->

  <div class="userFlowerDiv" v-if="render">
    <router-link :to="{ name: 'details', params: { selection: value.id }}">
      <svg width="300" height="300">
        <g>
          <clipPath id="c1">
            <circle cx="141" cy="147" r="70" />
          </clipPath>
          <image href="../assets/flower-clipart.png" x="-1" y="-5" height="300" width="300" />
          <!-- IMAGE SOURCE: https://wikiclipart.com/sunflower-clip-art_38805/ -->
          <image
            clip-path="url(#c1)"
            class="userImage"
            :href="base64"
            x="44"
            y="52"
            height="190"
            width="190"
          />
          <circle cx="141" cy="147" fill-opacity="0" stroke="black" stroke-width="3" r="70" />
        </g>
      </svg>
    </router-link>
  </div>

  <!-- </div> -->
</template>



<script>
/*eslint-disable no-console */
export default {
  name: "Flower",
  props: {
    value: Object
  },
  data() {
    return {
      render: "",
      base64: ""
    };
  },
  methods: {
    exists(id) {
      if (localStorage.getItem(id) == null || id == 1) {
        // id 1 is seed data
        this.render = false;
      } else {
        this.render = true;
        this.base64 = localStorage.getItem(id);
      }
      //  console.log(id, "render =", this.render)
    }
  },
  mounted() {
    this.exists(this.value.id);
  }
};
</script>

<style>
/* use !important to get styling to apply */
/* circle {
    fill: red;
} */

svg {
  border-width: 3px;
  border-style: solid;
}

.renderedImageContainer {
  border-radius: 50%;
}

router-link,
svg {
  border-style: none;
}
</style>