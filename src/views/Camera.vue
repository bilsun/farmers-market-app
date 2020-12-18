<template>
  <div>
    <router-link to="/challenges">
        <i class="big arrow left icon"></i>
    </router-link>
    <br/><br/><br/>
    <h1 is="sui-header" class="task_name">{{task}}</h1>
    <br/>
    <video id="video" ref="video" width="640" height="480" autoplay></video>
    <br/><br/>

    <router-link to="/challenges">
        <button id="snap"  @click="capture">
            <sui-icon size="huge" name="camera" />
        </button>
    </router-link>

    <br/>
    <canvas id="canvas" hidden width="640" height="480"></canvas>
    <!--<img v-bind:src="this.imageURL" />-->
    <Menu />
  </div>
</template>

<script>
import moment from 'moment'
import tasks from "../assets/tasks.js";

export default {
  name: "camera",
  components: {},
  data() {
    return {
      mediaStream: null,
      imageURL: "",
      tasks: tasks,
      task: '',
    };
  },

    //   References: 
    //   https://medium.com/theodo/a-progressive-web-application-with-vue-js-webpack-material-design-part-4-96c8c216810b
    //   https://davidwalsh.name/browser-camera

  methods: {
    capture() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var video = document.getElementById('video');
        context.drawImage(video, 0, 0, 640, 480);
        localStorage.setItem(this.$route.params.id, canvas.toDataURL('png'))
        localStorage.setItem('date'+this.$route.params.id, moment())
    }
  },

  mounted() {
    this.task = this.tasks[this.$route.params.id - 1].task + ":";
    navigator.mediaDevices.getUserMedia({ video: true }).then(mediaStream => {
      this.mediaStream = mediaStream;
      this.$refs.video.srcObject = mediaStream;
      this.$refs.video.play();
    });
  }
};
</script>

<style scoped>
i.arrow {
    float: left;
    padding: 30px;
    margin-bottom: 15px;
}
</style>
