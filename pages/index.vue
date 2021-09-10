<template>
 <div class="page">
   <Progressbar
     :count="todos.length"
     :max="max"
   />
   <Form @listAdded="newTodo" />
   <List class="list" :todos="todos" />
 </div>
</template>

<script>
import List from '../components/List.vue'
import Form from '../components/From.vue'
import Progressbar from '../components/Progressbar.vue'

export default {
 components: {
   List,
   Form,
   Progressbar,
 },
 data () {
   return {
     todos: ['API作成'],
     max: 10,
   }
 },
 methods: {
   newTodo (todo) {
     this.todos.push(todo);
   },
 },
}
</script>

<style lang="scss">
</style>