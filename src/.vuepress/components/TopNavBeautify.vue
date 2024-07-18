<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <div class="none">导航栏美化</div>
  </ClientOnly>
</template>

<style lang="scss">
// 简化搜索按钮
.search-pro-button {
  .search-pro-placeholder,
  .search-pro-key-hints {
    display: none;
  }
  & {
    border-radius: 100%;
    background-color: transparent;
    border-color: transparent;
  }
  &:hover {
    color: var(--theme-color);
    //background-color: #cfcfcf;
    border-color: var(--theme-color);
    transition: color 0.3s, background-color 0.3s, border-color 0.3s; /* 添加过渡效果 */
  }
}

</style>