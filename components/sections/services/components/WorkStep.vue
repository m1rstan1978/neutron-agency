<template>
    <div class="work-step position-relative">
      <i class="material-icons-round">
        <slot name="icon"></slot>
      </i>
      <div class="work-step__inner">
        <h5><slot name="header"></slot></h5>
        <p><slot></slot></p>
      </div>
    </div>
</template>

<script>
export default {
  name: "WorkStep"
}
</script>

<style lang="scss" scoped>
.work-step {
  z-index: 5;
  padding-right: 50px;

  i {
    position: absolute;
    opacity: .15;
    z-index: -1;
    font-size: 180px;
    right: 50px;
    top: -60px;
    user-select: none;

  }
  @media screen and (max-width: 992px) {
    i {
      font-size: 150px;
    }
  }

  @media screen and (max-width: 768px) {
    i {
      font-size: 100px;
      top: -30px;
    }
    padding-right: 0;
  }

  .work-step__inner {
    h5 {
      font-size: 32px;
      margin-bottom: 20px;
      line-height: 1;
      font-weight: 700;

      @media screen and (max-width: 992px) {
        font-size: 28px;
      }

      @media screen and (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 8px;
      }
    }

    p {
      font-size: 20px;
      line-height: 1.2;
      padding-right: 100px;

      @media screen and (max-width: 1200px) {
        padding-right: 50px;
      }

      @media screen and (max-width: 992px) {
        padding-right: 30px;
        font-size: 20px;
      }

      @media screen and (max-width: 768px) {
        padding-right: 0;
        font-size: 18px;
      }
    }
  }
}



</style>
