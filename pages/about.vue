<template>
  <div>
    <Main/>
    <Team id="team"/>
    <Mission id="mission"/>
    <BackgroundVideo id="goal"/>
    <Partition id="partition"/>
  </div>
</template>

<script>
import Main from "@/components/sections/about/Main";
import Team from "@/components/sections/about/Team";
import Mission from "@/components/sections/about/Mission";
import NeCoupon from "@/components/NeCoupon";
import Partition from "@/components/Partition";
import BackgroundVideo from "@/components/sections/about/BackgroundVideo";


export default {
  name: "about",
  head() {
    return {
      title: "О компании | Neutron Agency"
    }
  },
  components: {Team, Mission, Main, NeCoupon, Partition, BackgroundVideo},
}
</script>

<style>

</style>
