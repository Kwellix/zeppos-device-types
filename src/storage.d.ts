declare module '@zos/storage' {

  /**
   * @en Locally stored key-value pairs, data cleared after Mini Program uninstallation
   * @zh 本地存储的键值对，数据在小程序卸载过后清除
   * @permissionCode device:os.local_storage
   * @example
   * ```js
   * import { localStorage } from '@zos/storage'
   *
   * localStorage.setItem('test', 'test value')
   * const val = localStorage.getItem('test')
   * const defaultValue = localStorage.getItem('none_key', 'defaultValue')
   *
   * localStorage.removeItem('test')
   * localStorage.clear()
   * ```
   */
  interface localStorage {
    /**
     * @en Get sleep information
     * @zh 保存数据
     */
    setItem(key: string, value: any): void
    /**
     * @en Read the data, specify the default value `defaultValue`, and return `defaultValue` if the value on the specified `key` is not retrieved.
     * @zh 读取数据，指定默认值 `defaultValue` 后，如果没有获取到指定 `key` 上的值，返回 `defaultValue`
     */
    getItem(key: string, defaultValue?: any): void
    /**
     * @en Delete the data of the specified `key`
     * @zh 删除所指定 `key` 的数据
     */
    removeItem(key: string): void
    /**
     * @en Clear all data in localStorage
     * @zh 清空 localStorage 中所有数据
     */
    clear(): void
  }

  const localStorage: localStorage
  /**
   * @en Locally stored key-value pairs, data cleared after Mini Program uninstallation
   * @zh 本地存储的键值对，数据在小程序卸载过后清除
   * @permissionCode device:os.local_storage
   * @version 3.0
   * @example
   * ```js
   * import { LocalStorage } from '@zos/storage'
   *
   * const localStorage = new LocalStorage()
   * localStorage.setItem('test', 'test value')
   * const val = localStorage.getItem('test')
   * const defaultValue = localStorage.getItem('none_key', 'defaultValue')
   *
   * localStorage.removeItem('test')
   * localStorage.clear()
   * ```
   */
  class LocalStorage {
    /**
     * @en Get sleep information
     * @zh 保存数据
     */
    setItem(key: string, value: any): void
    /**
     * @en Read the data, specify the default value `defaultValue`, and return `defaultValue` if the value on the specified `key` is not retrieved.
     * @zh 读取数据，指定默认值 `defaultValue` 后，如果没有获取到指定 `key` 上的值，返回 `defaultValue`
     */
    getItem(key: string, defaultValue?: any): void
    /**
     * @en Delete the data of the specified `key`
     * @zh 删除所指定 `key` 的数据
     */
    removeItem(key: string): void
    /**
     * @en Clear all data in localStorage
     * @zh 清空 localStorage 中所有数据
     */
    clear(): void
  }
  /**
   * @en Key-value pairs are stored and data is cleared after exiting the Mini Program
   * @zh 键值对存储，数据在退出小程序后清除
   * @example
   * ```js
   * import { sessionStorage } from '@zos/storage'
   *
   * sessionStorage.setItem('test', 'test value')
   * const val = sessionStorage.getItem('test')
   * const defaultValue = sessionStorage.getItem('none_key', 'defaultValue')
   *
   * sessionStorage.removeItem('test')
   * sessionStorage.clear()
   * ```
   */
  interface sessionStorage {
    /**
     * @en Get sleep information
     * @zh 保存数据
     */
    setItem(key: string, value: any): void
    /**
     * @en Read the data, specify the default value `defaultValue`, and return `defaultValue` if the value on the specified `key` is not retrieved.
     * @zh 读取数据，指定默认值 `defaultValue` 后，如果没有获取到指定 `key` 上的值，返回 `defaultValue`
     */
    getItem(key: string, defaultValue?: any): void
    /**
     * @en Delete the data of the specified `key`
     * @zh 删除所指定 `key` 的数据
     */
    removeItem(key: string): void
    /**
     * @en Clear all data in sessionStorage
     * @zh 清空 sessionStorage 中所有数据
     */
    clear(): void
  }

  const sessionStorage: sessionStorage
  /**
   * @en Key-value pairs are stored and data is cleared after exiting the Mini Program
   * @zh 键值对存储，数据在退出小程序后清除
   * @example
   * ```js
   * import { SessionStorage } from '@zos/storage'
   *
   * const sessionStorage = new SessionStorage()
   * sessionStorage.setItem('test', 'test value')
   * const val = sessionStorage.getItem('test')
   * const defaultValue = sessionStorage.getItem('none_key', 'defaultValue')
   *
   * sessionStorage.removeItem('test')
   * sessionStorage.clear()
   * ```
   */
  class SessionStorage {
    /**
     * @en Get sleep information
     * @zh 保存数据
     */
    setItem(key: string, value: any): void
    /**
     * @en Read the data, specify the default value `defaultValue`, and return `defaultValue` if the value on the specified `key` is not retrieved.
     * @zh 读取数据，指定默认值 `defaultValue` 后，如果没有获取到指定 `key` 上的值，返回 `defaultValue`
     */
    getItem(key: string, defaultValue?: any): void
    /**
     * @en Delete the data of the specified `key`
     * @zh 删除所指定 `key` 的数据
     */
    removeItem(key: string): void
    /**
     * @en Clear all data in sessionStorage
     * @zh 清空 sessionStorage 中所有数据
     */
    clear(): void
  }
}
