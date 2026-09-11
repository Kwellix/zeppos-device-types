declare module '@zos/utils' {

  namespace px {
    /**
     * @en Pixel values based on `designWidth`
     * @zh 以 `designWidth` 为缩放基准的像素值
     */
    type PxValue = number

    /**
     * @en Pixel values after scaling calculation
     * @zh 根据机型实际宽度进行缩放计算后的像素值
     */
    type Result = number
  }

  /**
   * @en Pixel scaling calculation. The `designWidth` of each model in the `targets` object in the `app.json` is used as the base.
   * @zh 以小程序配置 `app.json` 中 `targets` 对象中各机型配置的 `designWidth` 为基准进行像素值缩放计算
   * @example
   * ```js
   * import { px } from '@zos/utils'
   *
   * px(480)
   * ```
   */
  function px(value: px.PxValue): px.Result
  namespace assets {
    /**
     * @en The base path, which will be spliced before the resource file path
     * @zh 基础路径，会拼接在资源文件路径之前
     */
    type BasePath = string

    /**
     * @en Resource file path constructor
     * @zh 资源文件路径构造函数
     */
    type AssetsPathFunc = (path: Path, isRtl?: IsRtl) => ResultPath

    /**
     * @en Resource file path
     * @zh 资源文件路径
     */
    type Path = string

    /**
     * @en Whether to splice the rtl path
     * @zh 是否需要拼接 rtl 路径
     */
    type IsRtl = boolean

    /**
     * @en Final file path
     * @zh 最终文件路径
     */
    type ResultPath = string
  }

  /**
   * @en Used to handle resource file paths, splice `basePath`. and can pass in parameters for rtl path conversion of images, for RTL adaptation of Mini Program
   * @zh 用于处理资源文件路径，拼接 `basePath`。并可传入参数对图片进行 rtl 路径转换，用于小程序的 RTL 适配
   * @example
   * ```js
   * import { assets } from '@zos/utils'
   *
   * const imagePath = 'zeppos-logo.png'
   * const assetsPathFunc = assets('img')
   *
   * console.log(assetsPathFunc(imagePath)) // img/zeppos-logo.png
   * console.log(assetsPathFunc(imagePath, true)) // img/zeppos-logo@rtl.png
   * ```
   */
  function assets(basePath: assets.BasePath): assets.AssetsPathFunc
  /**
   * @en The `log` instance is used for log printing and has multiple levels of logging methods for easy filtering in the console
   * @zh `log` 实例用于日志打印，有多种等级的日志方法，方便在控制台进行过滤
   * @example
   * ```js
   * import { log } from '@zos/utils'
   *
   * const pageLogger = log.getLogger('page')
   *
   * pageLogger.log('page created')
   * pageLogger.error('page error')
   * ```
   */
  interface log {
    /**
     * @en Returns a new `log` instance with the `name` tag, which is added when the print log method is executed to make it easier to distinguish
     * @zh 返回一个新的 `log` 实例，带有 `name` 标记，在执行打印日志方法时，会加入 `name` 标记，便于区分
     */
    getLogger(name: string): log
    /**
     * @en Print log level logs
     * @zh 打印 log 级别的日志
     */
    log(...args: string[]): void
    /**
     * @en Print warn level logs
     * @zh 打印 warn 级别的日志
     */
    warn(...args: string[]): void
    /**
     * @en Print debug level logs
     * @zh 打印 debug 级别的日志
     */
    debug(...args: string[]): void
    /**
     * @en Print error level logs
     * @zh 打印 error 级别的日志
     */
    error(...args: string[]): void
    /**
     * @en Print info level logs
     * @zh 打印 info 级别的日志
     */
    info(...args: string[]): void
  }

  const log: log
  /**
   * @en EventBus is a utility class that provides event publishing/subscribing, an implementation of the publish-subscribe pattern
   * @zh EventBus 是一个提供事件发布/订阅的工具类，发布-订阅模式的一种实现
   * @example
   * ```js
   * import { EventBus } from '@zos/utils'
   *
   * const eventBus = new EventBus()
   *
   * eventBus.on('data', (data) => {
   *  console.log(data)
   * })
   *
   * eventBus.emit('data', 'Hello Zepp OS!')
   * ```
   */
  class EventBus {
    /**
     * @en Adds the listener function to the end of the listeners array for the event named eventName
     * @zh 为 `eventName` 对应的的监听器数组中添加一个事件监听器
     */
    on(eventName: string, listener: (...args: any[]) => void): void
    /**
     * @en Removes the specified listener from the listener array for the event named eventName
     * @zh 移除 `eventName` 对应的的监听器数组中的一个事件监听器
     */
    off(eventName: string, listener: (...args: any[]) => void): void
    /**
     * @en Triggers the listener functions for the event named eventName
     * @zh 触发 `eventName` 对应的的监听器数组中的所有事件监听器
     */
    emit(eventName: string, ...args: any[]): void
    /**
     * @en Adds a one-time listener function for the event named eventName
     * @zh 为 `eventName` 添加一个仅生效一次的事件监听器
     */
    once(eventName: string, listener: (...args: any[]) => void): void
    /**
     * @en Removes all listeners, or those of the specified eventName
     * @zh 移除所有事件监听器
     */
    clear(): void
    /**
     * @en Gets the number of registered event listeners corresponding to `eventName`. If `eventName` is not passed, get the number of registered `eventName` types
     * @zh 获取对应 `eventName` 对应的注册事件监听器的数量。不传递 `eventName` 则获取所注册 `eventName` 种类的数量
     */
    count(eventName?: string): number
  }
  namespace stringToBuffer {
    /**
     * @en The string to be converted
     * @zh 需要转换的字符串
     */
    type InputString = string

    /**
     * @en The converted `ArrayBuffer`
     * @zh 转换后的 `ArrayBuffer`
     */
    type Result = ArrayBuffer
  }

  /**
   * @en Convert string type to `ArrayBuffer` type
   * @zh 将字符串类型转换为 `ArrayBuffer` 类型
   * @version 4.0
   * @example
   * ```js
   * import { stringToBuffer } from '@zos/utils'
   *
   * const buffer = stringToBuffer('Hello Zepp OS')
   * ```
   */
  function stringToBuffer(str: stringToBuffer.InputString): stringToBuffer.Result
  namespace bufferToString {
    /**
     * @en The `ArrayBuffer` to be converted
     * @zh 需要转换的 `ArrayBuffer`
     */
    type InputBuffer = ArrayBuffer

    /**
     * @en The converted string
     * @zh 转换后的字符串
     */
    type Result = string
  }

  /**
   * @en Convert `ArrayBuffer` type to string type
   * @zh 将 `ArrayBuffer` 类型转换为字符串类型
   * @version 4.0
   * @example
   * ```js
   * import { bufferToString } from '@zos/utils'
   *
   * const str = bufferToString(buffer)
   * ```
   */
  function bufferToString(buffer: bufferToString.InputBuffer): bufferToString.Result
}
