<template>
 <div class="list">
   <ListItem
     class="list"
     v-for="(todo, index,) in todos" :key="index"
     @deleteTodo="todos.splice(index, 1)"
   >
     {{ todo }}
   </ListItem>
 </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
 components: {
   ListItem
 },
 props: ['todos'],
 methods: {
   deleteTodo (index) {
     this.$emit('deleted', index)
   }
 },
}
</script>

<style lang="scss" scoped>
</style>