<template>
 <div class="progressbar" :style="{width: (count / max ) * 100 + '%'}">
   {{ count }} / {{ max }}
 </div>
</template>

<script>
export default {
 props: ['count', 'max']
}
</script>

<style lang="scss" scoped>
</style>