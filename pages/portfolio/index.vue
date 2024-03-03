<template>
  <div>
    <Main/>
    <Cases/>
    <WhyWe class="pb-3"/>
    <section class="leave-btn">
      <b-container class="text-center">
        <ne-btn variant="light" @click="$bvModal.show('modal-contacts')">Оставить заявку</ne-btn>
      </b-container>
    </section>
  </div>
</template>

<script>
import Main from "@/components/sections/portfolio/Main";
import Cases from "@/components/sections/portfolio/Cases";
import WhyWe from "@/components/sections/WhyWe";

export default {
  name: "portfolio",
  components: {WhyWe, Cases, Main}
}
</script>

<style lang="scss" scoped>
.leave-btn {
  background: var(--dark-blue-accent);
  padding-bottom: 60px;
}
</style>
