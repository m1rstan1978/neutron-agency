<template>
  <div class="background blue_star">
    <div class="full_screen" data-aos="zoom-out">
      <div class="full_screen_box">
        <div class="full_screen_text">
          Наша цель — создать <span>IT-HUB №1</span> в мире
        </div>
        <div class="full_screen_btn">
          <ne-btn class="btn" @click="$bvModal.show('modal-contacts')">Присоединяйтесь к нам!</ne-btn>
        </div>
      </div>
      <video preload="auto" autoplay muted loop src="@/assets/video/video_background.webm" class="ful_screen_video"></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "backgroundVideo"
}
</script>

<style scoped>
.blue_star {
  width: 100vw;
  height: 100vh;
  background: var(--dark-blue-accent);
}

.full_screen {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.full_screen_box {
  padding: 50px 15px;
  background-color: rgba(0,0,0, 0.181);
  position: relative;
  z-index: 2;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.full_screen_text {
  color: #FFFFFF;
  font-size: 72px;
  font-weight: 800;
  text-align: center;
}

.full_screen_text span {
  background: var(--blue-gradient);
}

.full_screen_btn {
  margin-top: 110px;
}

.ful_screen_video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 809px) {
  .full_screen_text {
    font-size: 58px;
    font-weight: 700;
  }
}

@media (max-width: 600px) {
  .full_screen_btn {
    margin-top: 60px;
  }
}

@media (max-width: 576px) {
  .full_screen {
    min-height: 100vh;
  }
}

@media (max-width: 500px) {
  @media (max-width: 809px) {
    .full_screen_text {
      font-size: 48px;
      font-weight: 500;
    }
  }

  .full_screen {
    min-height: 100vh;
  }
}
</style>

