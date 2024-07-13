<script setup lang="ts"></script>

<template>
  <div class="none">主题美化</div>
</template>

<style lang="scss">
.vp-back-to-top-button {
  // 返回按钮的透明度
  opacity: 1;
}

.vp-project-card {
  box-shadow: 0 1px 3px 1px var(--card-shadow);
}

//  hover 后出现 的小标签
[aria-label][data-balloon-pos]:after {
  border-radius: 0.8rem;
}
[aria-label][data-balloon-pos]:hover:before,
[aria-label][data-balloon-pos]:hover:after,
[aria-label][data-balloon-pos][data-balloon-visible]:before,
[aria-label][data-balloon-pos][data-balloon-visible]:after,
[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before,
[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
  opacity: 0.7;
}

</style>