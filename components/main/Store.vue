<script setup lang="ts">
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <section>
    <header>
      <div class="util-menu">
        <h1 class="util-menu__title">
          {{ title }}
        </h1>
        <aside class="util-menu__aside">
          <button>
            <base-svg
              viewBox="0 0 28 32"
            >
              <IconHash />
            </base-svg>
          </button>
          <button>
            <base-svg
              viewBox="0 0 32 32"
            >
              <IconScissors />
            </base-svg>
          </button>
          <button>
            <base-svg
              width="20"
              height="20"
              color="#ff63ab"
            >
              <IconCart />
            </base-svg>
          </button>
        </aside>
      </div>
    </header>
  </section>
</template>
