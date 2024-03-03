<template>
  <NuxtLink :to="to" class="link">
    <div class="pointer case-rounded-card__wrapper">
      <div class="case-rounded-card" :style="`background-image: url('${background}')`">
        <h5>{{name}}</h5>

        <p>{{description}}</p>

        <div class="mt-auto d-flex">
          <div class="cat-pill" v-for="cat in categories">{{cat}}</div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "NeCaseRounded",
  props: {
    background: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    categories: {type: Array, default: () => ([])},
    to: {type: String, default: "/portfolio"}
  }
}
</script>

<style scoped lang="scss">
.case-rounded-card__wrapper {
  padding-right: 12px;
  height: 100%;
}

.link:hover {
  text-decoration: none;
}

.case-rounded-card {
  background-size: 100%;
  padding: 26px;
  border-radius: 25px;
  color: white;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  h5 {
    font-weight: 600;
    font-size: 28px;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 1200px) {
    h5 {
      font-size: 26px;
    }

    p {
      font-size: 18px;
      margin-bottom: 50px;
    }
  }

  @media screen and (max-width: 998px) {
    h5 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
      margin-bottom: 0;
    }
  }
}

.cat-pill {
  padding: 6px 16px;
  background: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 30%;
  opacity: 0.8;
  color: var(--text-color);
  border-radius: 100px;
  margin-right: 4px;
  font-size: 14px;
}
</style>
