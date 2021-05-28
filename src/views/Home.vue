<template>
  <div>
    <CTASection></CTASection>
  </div>
  <div>
    <FeatureSection></FeatureSection>
  </div>
</template>

<script>
import CTASection from "../components/CTASection.vue";
import FeatureSection from "../components/FeatureSection.vue";

export default {
  name: "Home",
  components: {
    CTASection,
    FeatureSection,
  },
};
</script>
