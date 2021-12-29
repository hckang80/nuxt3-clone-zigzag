<script setup lang="ts">
const saveMyStores = () => {
  console.log('saveMyStores')
}
</script>

<template>
  <article class="select-my-style">
    <header class="select-my-style__header">
      <h1 hidden>
        내 스토어
      </h1>
      <p>
        <strong block>선택한 스타일의<br>스토어를 모아왔어요.</strong>
        즐겨찾기 하고 매일<br>
        인기상품과 신상을 모아보세요.
      </p>
    </header>

    <form @submit.prevent="saveMyStores">
      <div class="head-button">
        <button>시작하기</button>
      </div>
    </form>
  </article>
</template>
