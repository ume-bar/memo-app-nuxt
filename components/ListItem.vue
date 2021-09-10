<template>
 <div class="list-item" @click="$emit('deleteTodo')">
   <slot />
   <button >delete</button>
 </div>
</template>

<script>
</script>

<style lang="scss" scoped>
</style>