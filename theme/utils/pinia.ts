import { createPinia } from 'pinia'

const pinia = createPinia()

export function withGlobalPinia<T>(useStore: T) {
  const helper = (_pinia = pinia, hot: any) => (useStore as any)(pinia, hot)
  return helper as unknown as T
}

export default pinia
