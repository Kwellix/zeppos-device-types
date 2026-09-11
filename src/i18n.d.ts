declare module '@zos/i18n' {

  namespace getText {
    /**
     * @en Internationalization key
     * @zh 国际化 key
     */
    type Key = string

    /**
     * @en The string corresponding to the internationalized key
     * @zh 国际化 key 对应的字符串
     */
    type Result = string
  }

  /**
   * @en Get the corresponding string from the internationalization resource file (.po) based on the internationalization key
   * @zh 根据国际化 key 从国际化资源文件（.po）中获取对应的字符串
   * @example
   * ```js
   * import { getText } from '@zos/i18n'
   *
   * getText('name')
   * ```
   */
  function getText(key: getText.Key): getText.Result
}
