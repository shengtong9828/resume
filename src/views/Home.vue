
<template>
  <div class="home">
    <div class="wrapper">
      <div>
        <silde-bar icon-id="icon-modular" icon-color="text-warning" icon-size="40">Welcome to here</silde-bar>
      </div>
      <div class="w-100">
        <content-head>
          <template #title>{{ title }}</template>
          <template #desc>{{ desc }}</template>
          <template #calc>您已被点赞300次</template>
        </content-head>
        <transition enter-active-class="animate__animated animate__zoomIn">
          <router-view></router-view>
        </transition>
      </div>
      <user-profile :src="src"/>
    </div>
  </div>
</template>

<script>
import userProfile from '@/components/user-profile/user-profile.vue';
import sildeBar from '@/components/silde-bar/silde-bar.vue';
import contentHead from '@/components/content-head/content-head.vue';
import { pathToSign } from '../lib/router-lib.js';
export default {
  name: "Home",
  components: {
    userProfile,
    sildeBar,
    contentHead
  },
  setup() {
    // const router = useRouter();
    // const title = ref("I'M");
    // const desc = ref("Mask");

    // watch(router.currentRoute, ({path, name}) => {
    //   title.value = path === "/" ? "I'M" : "";
    //   desc.value = path === "/" ? "Mask" : name;
    // }, {
    //   immediate: true
    // });
    
    // watchEffect (() => {
    //   const { path, name } = router.currentRoute.value;
    //   title.value = path === "/" ? "I'M" : "";
    //   desc.value = path === "/" ? "Mask" : name;
    // });

    const { title, desc } = pathToSign();

    return {
      src: require('../assets/img/wr-user.png'),
      title,
      desc
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