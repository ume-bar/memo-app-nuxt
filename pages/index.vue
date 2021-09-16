<template>
  <div id = "app">
    <h1>メモ　作成</h1>
  <ul>
    <button @click="addMemo()">メモ</button>
      <div v-for="(memo, index) in memos" :key="index">
        <textarea v-model="memos[index]" placeholder="内容を入力" @keyup.enter="addMemo"></textarea>
        <span :class="{ done: memo.done }">{{ memo.text }}</span>
        <button @click="deleteMemo(memo)">削除</button>
  </ul>
</template>

<script lang="ts">
// 下記、「OptionsAPI で記述」するために必要
import Vue from 'vue'

// memo の型定義をインポート
import { Memo } from '~/models/memo'
// memo リストのストアモジュールをインポート
import { memosStore } from '~/store'

// OptionsAPI で記述
export default Vue.extend({
  computed: {
    memos(): Array<Memo> {
      // リスト（memos）を取得
      // ※ memosStore. と打つと、インテリセンス（入力補完機能）が働く
      return memosStore.memos
    }
  },
  methods: {
    // memo の追加
    addMemo(e: { target: { value: string } }): void {
      memosStore.add(e.target.value)
      e.target.value = ''
    },
    // memo の削除
    deleteMemo(memo: Memo) {
      memosStore.remove(memo)
    },
    // memo の done（完了状態）切り替え
    toggle(memo: Memo) {
      memosStore.toggle(memo)
    }
  }
})
</script>

<style>
/* 完了状態の Todo には打消し線をつける */
.done {
  text-decoration: line-through;
}
</style>
