<template>
  <div :class="variant">
    <h4 class="call-header mb-3">Звоните, пишите!</h4>
    <ne-link :variant="variant" :nuxt="false" class="feedback-phone d-inline mt-3"><span class="accent-text">+</span>7 708 501 0002</ne-link>
    <div class="or my-md-3 my-2">-или-</div>
    <div class="d-flex my-1 social-icons justify-content-center">
      <a href="" class="mx-1 social-icon"><img width="50" src="@/assets/images/icons/vb.svg" alt=""></a>
      <a href="" class="mx-1 social-icon"><img width="50" src="@/assets/images/icons/tg.svg" alt=""></a>
      <a href="" class="mx-1 social-icon"><img width="50" src="@/assets/images/icons/wa.svg" alt=""></a>
    </div>
    <div class="or my-md-3 my-2">-или-</div>
    <ne-link :variant="variant" href="mailto:info@neutron-agency.com" :nuxt="false" class="feedback-email d-inline mt-3">info<span class="accent-text">@</span>neutron-agency.com</ne-link>
  </div>
</template>

<script>
export default {
  name: "NeContacts",
  props: {
    variant: {type: String}
  }
}
</script>

<style lang="scss" scoped>
.feedback-email, .feedback-phone {
  font-weight: 600;
  font-size: 36px;
  a, span {
    line-height: 1;
  }
}

.dark {
  color: white;
}

@media screen and (max-width: 1800px) {
  .feedback-phone {
    font-size: 32px;
  }

  .feedback-email {
    font-size: 24px;
  }
}

.or {
  font-weight: 300;
  font-size: 16px;
  opacity: .5;
}

.social-icon {
  transition: all .3s ease-in-out;

  &:hover {
    transform: scale(1.07);
    filter: drop-shadow(0 0 5px rgba(112, 146, 224, .4));
  }
}

@media screen and (max-width: 768px) {
  .feedback-email, .feedback-phone {
    font-size: 24px;
  }

  .social-icon {
    img {
      width: 36px;
      height: 36px;
    }
  }

  .or {
    font-size: 14px;
  }
}

@media screen and (max-width: 576px) {
  .feedback-email {
    font-size: 18px;
  }
}
</style>
