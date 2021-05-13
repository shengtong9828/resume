
<template>
  <div class="home">
    <div class="wrapper">
      <div>
        <my-icon id="icon-modular" color="text-warning" size="45" class="network"></my-icon>
        <div class="text">Welcome to here</div>
      </div>
      <div>
        <div class="content-head">
          <div>
            <h1>I'M</h1>
            <h1>Mark</h1>
          </div>
          <h6>您已被赞300次</h6>
        </div>
      </div>
      <img src="../assets/img/wr-user.png" alt="用户头像" class="user-profile img-thumbnail">
    </div>
  </div>
</template>

<script>
export default {

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

.user-profile {
  min-width: 350px;
  height: 85vh;
}

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

.content-head {
  widows: 100%;
  height: 20vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content-head > div {
  display: flex;
}

.content-head > div > h1:nth-child(2) {
  color: rgb(6, 255, 247);
  margin-left: 10px;
}
</style>