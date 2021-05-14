<template>
  <div class="content-head">
    <div>
      <h1>
        <slot name="title" />
      </h1>
      <h1>
        <slot name="desc" />
      </h1>
    </div>
    <h6>
      <slot name="calc" />
    </h6>

    <my-icon v-if="showStatus" class="quit" id="icon-close" size="35" @click="quit()"></my-icon>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { quitStatus } from '../../lib/router-lib.js';
export default {
  setup() {
    const router = useRouter();
    const { showStatus } = quitStatus();
    const quit = (level = -1) => router.go(level);

    return {
      showStatus,
      quit
    }
  }
}
</script>

<style>
.content-head {
  widows: 100%;
  height: 20vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.content-head > div {
  display: flex;
}

.content-head > div > h1:nth-child(2) {
  color: rgb(6, 255, 247);
  margin-left: 10px;
}

.quit {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>