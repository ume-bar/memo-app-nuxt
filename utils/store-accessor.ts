import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Memos from '~/store/memo'

// eslint-disable-next-line import/no-mutable-exports
let memosStore: Memos

/**
 * ストアを初期化する（型推論できるモジュールとして取得する）
 * @param store Vuex.Store
 */
function initializeStores(store: Store<any>): void {
  // Memos を型推論できるストアモジュール化
  memosStore = getModule(Memos, store)
}

export { initializeStores, memosStore }