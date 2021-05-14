<template>
  <div class="default container">
    <div class="row">
      <button class="col btn btn-light rounded border-0" @click="toPage('About')">
        <my-icon id="icon-attachment" color="text-danger" size="50"></my-icon>
        <h3>About me</h3>
      </button>
      <button class="col btn btn-light rounded border-0" @click="toPage('Resume')">
        <my-icon id="icon-image-text" color="text-warning" size="50"></my-icon>
        <h3>Resume</h3>
      </button>
    </div>
    <div class="row">
      <button class="col btn btn-light rounded border-0" @click="toPage('Portfolio')">
        <my-icon id="icon-folder-close" color="text-success" size="50"></my-icon>
        <h3>Portfolio</h3>
      </button>
    </div>
  </div>
</template>

<script>
import { routerJump } from '../lib/router-lib.js';
export default {
  setup() {
    const { toPage } = routerJump();
    return {
      toPage
    }
  }
}
</script>

<style>
.row {
  height: 30vh;
}
.col {
  color: white;
  margin: 12px 12px;
  background: rgba(255, 255, 255, 0.1);
}
</style>