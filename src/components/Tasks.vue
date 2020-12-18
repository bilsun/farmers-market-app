<template>
  <div>
    <sui-card-group>
      <sui-card class="grey">
        <sui-card-content>
          <h2 class="tasks">{{value.task}}</h2>

          <div v-if="done">
            <sui-button color="green" inverted disabled id="done">
              <sui-icon  size="big" name="check icon" />
            </sui-button>
          </div>

          <div v-else>
            <router-link :to="{ name: 'camera', params: { id: value.id }}">
              <sui-button color="blue" inverted id="snap">
                <sui-icon size="big" name="camera" />
              </sui-button>
            </router-link>
          </div>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: "tasks",
  props: {
    value: Object
  },
  data() {
    return {
      done: ""
    };
  },
  methods: {
    taskDone(id) {
      // true = show check icon
      if (localStorage.getItem(id) == null && id !== 1)
        // id 1 is seed data
        this.done = false;
      else this.done = true;
    }
  },
  mounted() {
    this.taskDone(this.value.id);
  }
};
</script>

<style>
.tasks {
  font-size: 16px;
  padding-right: 10px;
  margin-bottom: 0px;
}

.ui.cards .ui.card {
  margin: 15px auto;
}

.ui.cards .ui.card .content {
  display: inline-flex;
}

.ui.cards .ui.card .content i.camera.big.icon {
  margin: auto;
}

i.check.icon.big {
  margin-right: 0px !important;
}

.ui.cards .ui.card .content h1 {
  padding-top: 10px;
}

.ui.inverted.green.button {
  opacity: 1 !important;
}
</style>