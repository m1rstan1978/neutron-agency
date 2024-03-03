<template>
  <NuxtLink :to="to" :class="variant !== 'light' ? 'dark' : ''" class="service-card-bg d-block w-100 position-relative overflow-hidden">
    <i class="material-icons-round">
      <slot name="icon"></slot>
    </i>
    <div class="d-flex flex-column p-3 h-100 w-100">
      <NuxtLink :to="to" class="service-card-header pointer" tag="h5">
        <slot name="header"></slot>
      </NuxtLink>
      <p class="service-card-description">
        <slot name="description"></slot>
      </p>
      <div :class="variant !== 'light' ? 'dark' : ''" class="issue-price mb-1 mt-auto">
        <span class="service-card-price my-auto"><slot name="price"></slot></span>
        <div class="d-flex justify-content-end">
          <ne-link :to="to" class="my-auto">
            <slot class="service-link" name="moreInfo"></slot>
          </ne-link>
          <img alt="" class="ml-2 my-auto" src="@/assets/images/cases/blueArrow.svg">
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "ServicesCard",
  props: {
    variant: {type: String, default: 'light'},
    to: {type: String, default: "/services"}
  }
}
</script>

<style lang="scss" scoped>
.service-card-bg {
  height: 100%;
  text-decoration: none;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: all 0.2s linear !important;

  &:hover {
    box-shadow: 0 0px 14px rgba(0, 0, 0, 0.25);
    color: var(--text-color)
  }
}

.service-card-bg.dark {
  color: #FFFFFF;
  background: var(--dark-gradient);
  border: 1px solid #D1D1D1;
}

.issue-price {
  display: flex;
  justify-content: space-between;
}

.issue-price.dark {
  justify-content: start;
}


.material-icons-round {
  position: absolute;
  font-size: 275px;
  line-height: 65px;
  top: 110px;
  right: 0;

  color: #8BAEF3;
  opacity: 0.18;
  user-select: none;

  @media screen and (max-width: 998px) {
    font-size: 175px;
    top: 175px;
    right: 0;
  }

  @media screen and (max-width: 767px){
    font-size: 150px;
    top: 75px;
  }
}

.service-card-header {
  font-weight: 600;
  font-size: 32px;
  line-height: 1.1;

}

.service-card-description {
  line-height: 26px;
  margin-bottom: 60px;
}

.service-card-price {
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
}

@media screen and (max-width: 998px) {
  .service-card-header {
    font-size: 32px;
  }
  .service-card-description {
    margin-bottom: 90px;
  }
  .service-card-price {
    font-size: 25px;
    line-height: 1;
  }
}

@media screen and (max-width: 768px) {
  .service-card-header {
    font-size: 24px;
  }

  .service-card-description {
    margin-bottom: 40px;
    font-size: 16px;
  }

  .service-card-price {
    font-size: 24px;
    line-height: 1;
  }
}
</style>
