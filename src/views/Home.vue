
<template>
  <div class="home">
    <div class="wrapper">
      <div>
        <silde-bar icon-id="icon-modular" icon-color="text-warning" icon-size="40">Welcome to here</silde-bar>
      </div>
      <div>
        <content-head>
          <template #title>I'M</template>
          <template #desc>Mark</template>
          <template #calc>您已被点赞300次</template>
        </content-head>
      </div>
      <user-profile :src="src"/>
    </div>
  </div>
</template>

<script>
import userProfile from '@/components/user-profile/user-profile.vue';
import sildeBar from '@/components/silde-bar/silde-bar.vue';
import contentHead from '@/components/content-head/content-head.vue';
export default {
  name: "Home",
  components: {
    userProfile,
    sildeBar,
    contentHead
  },
  setup() {
    return {
      src: require('../assets/img/wr-user.png')
    }
  }
}
</script>

<style>
.home {
  height: 100vh;
  background: url("../assets/img/bg.png");
  background-size: cover;
}

.wrapper {
  width: 90vw;
  height: 85vh;
  background-color: rgba(44, 48, 80, 0.75);
  position: absolute;
  left: calc(50% - 90vw / 2);
  top: calc(50% - 85vh / 2);
  display: flex;
  justify-content: space-between;
}
</style>