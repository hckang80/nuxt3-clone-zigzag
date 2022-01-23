import { ref } from 'vue'

/** Mock Nuxt's useState to be a simple ref for unit testing. **/
jest.mock('#app', () => ({
  useState: <T>(key: string, init: () => T) => {
    return ref(init())
  },
}))
