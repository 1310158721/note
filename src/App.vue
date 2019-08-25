<template>
  <transition name='first-router' mode='out-in'>
    <router-view />
  </transition>
</template>

<style lang="less" scoped>
.first-router-enter-active {
  transition: all .25s linear;
}

.first-router-leave-active {
  transition: all .25s linear;
}

.first-router-enter, .first-router-leave-to {
  opacity: 0;
}
</style>