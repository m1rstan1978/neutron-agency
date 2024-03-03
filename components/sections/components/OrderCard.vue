<template>
  <b-row class="position-relative">
    <span class="number"><slot name="number"></slot></span>
    <b-col cols="10" offset="2">
      <h5><slot name="header"></slot></h5>
      <p><slot name="description"></slot></p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "OrderCard"
}
</script>

<style scoped lang="scss">
.number {
  font-weight: 700;
  font-size: 112px;
  line-height: 67px;
  position: absolute;
  opacity: .15;
  left: 0;
  top: -30px;
  letter-spacing: -10px;
}

h5 {
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
}

p {
  font-weight: 400;
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  h5 {
    font-size: 18px;
  }

  p {
    font-size: 18px;
  }
}
</style>
