<script setup lang="ts">
import BlogHero from "@BlogHeroOriginal";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
</script>

<template>
  <BlogHero>
    <template #heroBg>
      <BingHeroBackground />
    </template>
    <template #heroInfo="info">
      <HitokotoBlogHero v-bind="info" />
    </template>
  </BlogHero>
</template>