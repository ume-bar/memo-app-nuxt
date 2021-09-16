import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Memo } from '~/models/memo'

// stateFactory: true → Vuex をモジュールモードで扱うために指定
@Module({ stateFactory: true, namespaced: true, name: 'memos' })
export default class Todos extends VuexModule {
  memos: Memo[] = []

  /**
   * memo を追加する
   * @param text memo テキスト
   */
  @Mutation
  add(text: string) {
    const memos: Memo[] = this.memos
    // memo を作成
    const memo: Memo = {
      // リストがない場合、id = 0
      // リストがある場合、id = リストの最終要素の id + 1
      id: memos.length === 0 ? 0 : memos[memos.length - 1].id + 1,
      text,
      done: false
    }
    // リストに memo を追加
    this.memos.push(memo)
  }

  /**
   * memo を削除する
   * @param memo 削除する memo インスタンス
   */
  @Mutation
  remove(memo: Memo) {
    this.memos.splice(this.memos.indexOf(memo), 1)
  }

  /**
   * memo の done（完了状態）を切り替える
   * @param memo 完了状態を切り替える対象の memo インスタンス
   */
  @Mutation
  toggle(memo: Memo) {
    memo.done = !memo.done
  }
}