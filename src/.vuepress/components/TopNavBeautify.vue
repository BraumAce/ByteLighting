<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const CheckScrollTopClass = () => {
  const themeElms = document.getElementsByClassName('theme-container');
  if (themeElms.length < 1) {
    return null;
  }
  const themeElm = themeElms[0];

  const blogHeroElms = document.getElementsByClassName('vp-blog-hero');
  let blogHeroElm = null;
  if (blogHeroElms.length > 0) {
    blogHeroElm = blogHeroElms[0];
  }

  if (blogHeroElm) {
    themeElm.classList.add('byte-blog-hero');
  } else {
    themeElm.classList.remove('byte-blog-hero');
  }

  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop < 60) {
    themeElm.classList.add('byte-scroll-top');
  } else {
    themeElm.classList.remove('byte-scroll-top');
  }

  if (blogHeroElm) {
    if (scrollTop < blogHeroElm.clientHeight - 30) {
      themeElm.classList.add('byte-scroll-blog-hero-inner');
    } else {
      themeElm.classList.remove('byte-scroll-blog-hero-inner');
    }
  }
};

onMounted(() => {
  nextTick(() => {
    CheckScrollTopClass(); // 切换时顶栏修改

    window.removeEventListener('scroll', () => {});
    window.addEventListener('scroll', () => {
      CheckScrollTopClass();
    });
  });

  const router = useRouter();
  router.afterEach(() => {
    nextTick(() => {
      setTimeout(() => {
        CheckScrollTopClass(); // 切换时顶栏修改
      }, 50);
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="none">导航栏美化</div>
  </ClientOnly>
</template>

<style lang="scss">
// sidebar 跟随顶栏一起上下移动
.theme-container {
  .vp-navbar {
    transition: top 0.3s;
  }
  .vp-sidebar {
    transition: top 0.3s;
  }
  .toggle-sidebar-wrapper {
    transition: top 0.3s;
  }

  &.hide-navbar {
    .vp-navbar {
      top: -3.75rem;
    }
    .vp-sidebar {
      top: 0;
    }
    .toggle-sidebar-wrapper {
      top: 0;
    }
    .vp-toc-placeholder {
      top: 0.5rem;
    }
  }
}

// 当导航栏在首页导到达顶部时
.theme-container.byte-scroll-top.byte-blog-hero {
  .vp-navbar {
    box-shadow: none;
  }
}

// hero 背景置顶
.theme-container .vp-page.vp-blog-home {
  padding-top: 0;
}

// 索引页面顶部调整
.blog-page-wrapper {
  .vp-blog-main {
    min-height: 710px;
  }
}

// 首页内容位置调整
.theme-container.byte-blog-hero {
  .blog-page-wrapper {
    .vp-blog-main {
      margin-top: 0.4em;
    }
  }
}

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

// 导航栏透明
.theme-container {
  .vp-navbar {
    background: transparent;
  }
}
.theme-container.byte-blog-hero.byte-scroll-top {
  .vp-navbar {
    backdrop-filter: none;
  }
}

// 给文章顶部添加过渡，让其更加自然
#main-content {
  .vp-toc-placeholder {
    transition: top 0.3s;
  }
}

</style>