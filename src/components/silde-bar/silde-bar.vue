<template>
  <my-icon :id="iconId" :color="iconColor" :size="iconSize" class="network"></my-icon>
    <div class="text">
      <slot />
    </div>
</template>

<script>
export default {
  props: {
    iconId: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: ""
    },
    iconSize: {
      type: [Number, String],
      default: 40
    }
  }
}
</script>

<style scoped>
.newwork {
  width: 4vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  width: 4vw;
  height: 75vh;
  font-size: 30px;
  color: rgb(255, 291, 191);
  background-color: rgba(52, 57, 92, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-lr;
}
</style>