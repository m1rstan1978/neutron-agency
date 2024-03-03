<template>
  <div>
    <b-container>
      <h2 class="error-code text-center">
        <div class="position-relative" v-if="error.statusCode === 404">
          4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/images/neutron.svg"/>4
        </div>
        <div class="position-relative" v-if="error.statusCode === 500">
          5&nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/images/neutron.svg"/>0
        </div>
      </h2>

      <div class="text-center">
        <h4 v-if="error.statusCode === 404">
          Страница не найдена
        </h4>
        <h4 v-if="error.statusCode === 500">
          Ошибка сервера
        </h4>
        <ne-btn class="mt-4">Вернуться домой</ne-btn>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "error",
  props: ['error'],
}
</script>

<style scoped lang="scss">
* {
  color: var(--dark-blue-accent);
}

.error-code {
  font-size: 250px;
  margin-top: 15vh;
  font-weight: 700;
  user-select: none;
  @media screen and (max-width: 768px) {
    font-size: 120px;
  }

  div {
    z-index: 5;
  }

  img {
    position: absolute;
    z-index: -1;
    width: 30%;
    left: 35%;
    height: 100%;
  }
}
</style>
