<template>
  <b-row class="number-content">
    <b-col cols="3" class="number d-flex flex-column justify-content-center" data-aos="zoom-in-right">
      <h4><slot name="number"></slot></h4>
      <span v-html="unit"></span>
    </b-col>
    <b-col cols="9" class="text" data-aos="zoom-in-left">
      <h6><slot name="header"></slot></h6>
      <p><slot name="description"></slot></p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "MobileNumberCard",
  props: {
    unit: String
  }
}
</script>

<style scoped lang="scss">
.number-content {
  .number {
    h4 {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 0;
      margin-top: 0;
      line-height: 1;
    }

    span {
      font-size: 16px;
      font-weight: 600;
      line-height: 1;
    }
  }

  .text {
    h6 {
      font-size: 20px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      line-height: 1.2;
    }
  }
}

@media (max-width: 445px) {
  .number span {
    margin-right: 50px;
  }
}
</style>
