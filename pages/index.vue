<template>
  <ul>
    <li>
      <button @click="addMemo()">メモ</button>
    </li>
    <li v-for="(memo, index) in memos" :key="index">
      <input v-model="memos[index]" />
      <button @click="deleteMemo(index)">×</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      memos: []
    }
  },
  methods: {
    addMemo () {
      this.memos.push('')
    },
    deleteMemo (index) {
      this.memos.splice(index, 1)
    }
  }
}
</script>