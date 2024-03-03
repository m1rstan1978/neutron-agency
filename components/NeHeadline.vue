<template>
  <div class="ne-headline__wrapper">
    <h2 class="ne-headline" :class="variant !== 'light' ? 'dark' : ''">
      <slot/>
    </h2>
    <div class="line" :class="{'mx-auto' : centered, 'white' : variantLine}"></div>
  </div>
</template>
<script>
export default {
  name: "NeHeadline",
  props: {
    variant: {type: String, default: "light"},
    centered: {type: Boolean, default: false},
    variantLine: {type: Boolean, default: false}
  }
}
</script>

<style scoped>
.ne-headline {
  font-weight: 700;
  font-size: 48px;
  margin: 0;
}

.line {
  width: 300px;
  background: var(--blue-gradient);
  height: 8px;
  margin-top: 8px;
  border-radius: 100px;
}

.line.white {
  background: var(--white);
}

.ne-headline.dark {
  color: white;
}

.ne-headline.light {
  color: #3A3A3A;
}

@media screen and (max-width: 998px) {
  .ne-headline {
    font-size: 32px;
  }

  .line {
    width: 150px;
    height: 5px;
  }
}

@media screen and (max-width: 768px) {
  .ne-headline {
    font-size: 24px;
  }

  .line {
    width: 150px;
    height: 5px;
  }
}
</style>
