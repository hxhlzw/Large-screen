<template>
  <div class="loading" v-if="loading">
    <p class="text">园区资源加载中...</p>
    <div class="loading-process">
      <div class="process-wrapper"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean
}>()
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  left: 66%;
  top: 40%;
  transform: translateX(-50%);
  .text {
    text-align: center;
    color: #909399;
    font-size: 14px;
    margin-bottom: 10px;
  }
}
.loading-process {
  width: 280px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  overflow: hidden;
}
.process-wrapper {
  width: 5%;
  height: 100%;
  animation-name: loading;
  animation-duration: 1000s;
  background: linear-gradient(90deg, #4aa2ff 0%, #3656ff 100%);
}
@keyframes loading {
  0% {
    transform: scaleX(1);
  }
  1% {
    transform: scaleX(38);
  }
  100% {
    transform: scaleX(48);
  }
}
</style>
