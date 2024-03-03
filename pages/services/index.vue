<template>
  <div>
    <Main/>
    <ServicesList id="services"/>
    <WorkSteps id="steps"/>
    <Partition id="cases"/>
    <WhyWe id="whywe"/>
  </div>
</template>

<script>
import Main from "@/components/sections/services/Main";
import ServicesList from "@/components/sections/services/ServicesList";
import WorkSteps from "@/components/sections/services/WorkSteps";
import Partition from "@/components/Partition";
import WhyWe from "@/components/sections/WhyWe";


export default {
  name: "services",
  head() {
    return {
      title: "Услуги | Neutron Agency"
    }
  },
  components: {WorkSteps, ServicesList, Main, Partition, WhyWe}
}
</script>

<style lang="scss" scoped>

</style>
