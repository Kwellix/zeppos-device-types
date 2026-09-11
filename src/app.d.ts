declare module '@zos/app' {

  /**
   * @en In Mini Program
   * @zh 在小程序内
   */
  const SCENE_APP: number
  /**
   * @en In watchface interface
   * @zh 在表盘主界面
   */
  const SCENE_WATCHFACE: number
  /**
   * @en In the Mini Program configuration or dial edit page
   * @zh 在小程序配置或者表盘编辑页面
   */
  const SCENE_SETTINGS: number
  /**
   * @en In the rest screen screen
   * @zh 在息屏界面
   */
  const SCENE_AOD: number
  namespace getPackageInfo {
    /**
     * @en Please see the fields in `app.json` for more details
     * @zh 此处不一一列举，请参考 `app.json` 中字段
     */
    type Result = object
  }

  /**
   * @en Get some of the fields in the Mini Program configuration `app.json`
   * @zh 获取小程序配置 `app.json` 中的部分字段
   * @example
   * ```js
   * import { getPackageInfo } from '@zos/app'
   *
   * const packageInfo = getPackageInfo()
   * console.log(packageInfo.name)
   * ```
   */
  function getPackageInfo(): getPackageInfo.Result
  namespace getPackageInfoById {
    interface Option {
      /**
       * @en Mini Program ID
       * @zh 小程序 ID
       */
      appId: number
    }

    /**
     * @en Please see the fields in `app.json` for more details
     * @zh 此处不一一列举，请参考 `app.json` 中字段
     */
    type Result = object
  }

  /**
   * @en Get some of the fields in the Mini Program configuration `app.json` by app ID
   * @zh 根据小程序 ID 获取小程序配置 `app.json` 中的部分字段
   * @version 4.0
   * @example
   * ```js
   * import { getPackageInfoById } from '@zos/app'
   *
   * const packageInfo = getPackageInfoById({ appId: 1001 })
   * console.log(packageInfo.name)
   * ```
   */
  function getPackageInfoById(option: getPackageInfoById.Option): getPackageInfoById.Result
  namespace getScene {
    /**
     * @en The current scene in which the Mini Program is running, value reference scene constants
     * @zh 当前小程序运行的场景，值参考场景常量
     */
    type Result = number
  }

  /**
   * @en Get the current scene where the Mini Program is running
   * @zh 获取当前小程序运行的场景
   * @constants scene
   * @example
   * ```js
   * import { getScene, SCENE_APP } from '@zos/app'
   *
   * const result = getScene()
   *
   * if (result === SCENE_APP) {
   *   console.log('in Mini Program')
   * }
   * ```
   */
  function getScene(): getScene.Result
  namespace queryPermission {
    interface Option {
      /**
       * @en An array of permission strings, with an array length of at least `1`
       * @zh 权限字符串数组，数组长度至少为 `1`
       */
      permissions: Array<string>
    }

    /**
     * @en Permissions query result array, corresponding to the order of `permissions` array, `0`: not authorized, `1`: unknown permissions, `2`: authorized
     * @zh 权限查询结果数组，与 `permissions` 数组顺序一一对应，`0`: 未授权、`1`: 未知权限、`2`：已授权
     */
    type Result = Array<number>
  }

  /**
   * @en Check the authorization status of Mini Program permissions
   * @zh 查询小程序权限的授权状态
   * @version 3.0
   * @example
   * ```js
   * import { queryPermission } from '@zos/app'
   *
   * const result = queryPermission()
   * console.log(result)
   * ```
   */
  function queryPermission(option: queryPermission.Option): queryPermission.Result
  namespace requestPermission {
    interface Option {
      /**
       * @en An array of permission strings, with an array length of at least `1`
       * @zh 权限字符串数组，数组长度至少为 `1`
       */
      permissions: Array<string>
      /**
       * @en Permission request result callback function
       * @zh 权限申请结果回调函数
       */
      callback: (result: Array<number>) => void
    }

    /**
     * @en Method result value. See 'result' for a description
     * @zh 方法结果值，值描述见 `result`
     */
    type Result = number

    /**
     * @output
     * @enum
     */
    interface result {
      /**
       * @en In authorization processing, user interaction will be triggered, and the user will be informed of the authorization result in the callback function
       * @zh 授权处理中，将触发用户交互，并在回调函数中告知用户授权结果
       */
      0: number
      /**
       * @en There are no authorization requests that can be made
       * @zh 没有可以授权的权限
       */
      1: number
      /**
       * @en The requested interface is authorized and can be called immediately
       * @zh 所申请接口已经获得授权，可以立即调用
       */
      2: number
    }
  }

  /**
   * @en Dynamic permission application, when querying a dynamic permission has not been authorized, you can use this interface to apply for the relevant permission. Generally, before using the system-related functional interface (such as the interface to enable app services), do the relevant permission check and application, otherwise the functional interface will not be allowed to execute due to the permission issue
   * @zh 动态权限申请，当查询某个动态权限尚未授权时，可使用该接口申请相关权限。一般在使用系统相关功能接口（如启用设备应用服务的接口）前，做相关权限的检查和申请，否则功能接口会因权限问题不被允许执行
   * @version 3.0
   * @example
   * ```js
   * import { requestPermission } from '@zos/app'
   *
   * const result = requestPermission({
   *   permissions: ['device:os.bg_service'],
   *   callback: (result) => {
   *     console.log(result)
   *   }
   * })
   * console.log(result)
   * ```
   */
  function requestPermission(option: requestPermission.Option): requestPermission.Result
  namespace emitCustomSystemEvent {
    interface Option {
      /**
       * @en Customize event names that meet the naming convention of `event:customize.${event}`
       * @zh 自定义事件名称，需要满足 `event:customize.${event}` 的命名约定
       */
      eventName: string
      /**
       * @en Custom event parameters, this parameter is passed to the `onInit` lifecycle function of the `AppService` constructor
       * @zh 自定义事件参数，这个参数会传递到 `AppService` 构造函数的 `onInit` 生命周期函数中
       */
      eventParam: string
    }
  }

  /**
   * @en The Mini Program can customize the system events and can actively dispatch the custom system events
   * @zh 小程序可以自定义系统事件，并可以主动派发该自定义系统事件
   * @version 3.0
   * @example
   * ```js
   * import { emitCustomSystemEvent } from '@zos/app'
   *
   * emitCustomSystemEvent({
   *   eventName: 'event:customize.test',
   *   eventParam: 'eventName=event:customize.test&type=0'
   * })
   * ```
   */
  function emitCustomSystemEvent(option: emitCustomSystemEvent.Option): void
  namespace getPerformance {
    /**
     * @output
     * @en Profile statistics
     * @zh Profile 统计信息
     */
    interface Result {
      /**
       * @en Memory statistics
       * @zh 内存统计信息
       */
      memory?: Memory
      /**
       * @en Performance statistics
       * @zh 性能统计信息
       */
      perf?: Perf
    }

    /**
     * @output
     * @en Memory statistics
     * @zh 内存统计信息
     */
    interface Memory {
      /**
       * @en system memory information
       * @zh 系统内存信息
       */
      system: SystemMemory
      /**
       * @en Application memory information list
       * @zh 应用内存信息列表
       */
      app: Array<AppMemory>
      /**
       * @en Unreleased memory information list
       * @zh 未释放的内存信息列表
       */
      leaking: Array<LeakingMemory>
    }

    /**
     * @output
     * @en system memory information
     * @zh 系统内存信息
     */
    interface SystemMemory {
      /**
       * @en Used memory (bytes)
       * @zh 已用内存（字节）
       */
      used: number
      /**
       * @en Total memory (bytes)
       * @zh 内存总量（字节）
       */
      total: number
    }

    /**
     * @output
     * @en Application memory information
     * @zh 应用内存信息
     */
    interface AppMemory {
      /**
       * @en Mini Program ID
       * @zh 小程序 ID
       */
      appid?: number
      /**
       * @en Memory usage (bytes)
       * @zh 占用内存（字节）
       */
      used: number
      /**
       * @en Peak memory usage (bytes)
       * @zh 内存峰值（字节）
       */
      peak: number
      /**
       * @en Module memory information
       * @zh 模块内存信息
       */
      modules: Array<MemoryModule>
    }

    /**
     * @output
     * @en Unreleased memory information
     * @zh 未释放的内存信息
     */
    interface LeakingMemory {
      /**
       * @en Mini Program ID
       * @zh 小程序 ID
       */
      appid: number
      /**
       * @en Memory usage (bytes)
       * @zh 占用内存（字节）
       */
      used: number
      /**
       * @en Module memory information
       * @zh 模块内存信息
       */
      modules: Array<MemoryModule>
    }

    /**
     * @output
     * @en Memory profile information
     * @zh 内存统计信息
     */
    interface MemoryModule {
      /**
       * @en File path
       * @zh 文件路径
       */
      file: string
      /**
       * @en Memory usage (bytes)
       * @zh 占用内存（字节）
       */
      used: number
      /**
       * @en Peak memory usage (bytes)
       * @zh 内存峰值（字节）
       */
      peak: number
    }

    /**
     * @output
     * @en Performance statistics
     * @zh 性能统计信息
     */
    interface Perf {
      /**
       * @en Mini Program ID
       * @zh 小程序 ID
       */
      appid?: number
      /**
       * @en Module performance information list
       * @zh 模块性能信息列表
       */
      modules: Array<PerfModule>
    }

    /**
     * @output
     * @en Performance statistics module information
     * @zh 性能统计模块信息
     */
    interface PerfModule {
      /**
       * @en File name
       * @zh 文件名
       */
      file: string
      /**
       * @en File reading and running time (excluding lifecycle execution time)
       * @zh 文件读取和运行时间（不包含生命周期执行时间）
       */
      evalTime: number
      /**
       * @en onCreate lifecycle execution time
       * @zh onCreate 生命周期执行时间
       */
      createTime?: number
      /**
       * @en onInit lifecycle execution time
       * @zh onInit 生命周期执行时间
       */
      initTime?: number
      /**
       * @en build lifecycle execution time
       * @zh build 生命周期执行时间
       */
      buildTime?: number
    }
  }

  /**
   * @en Get  Mini Program performance statistics, including memory usage and loading performance metrics
   * @zh 获取小程序性能统计信息，包括内存占用和加载性能等指标
   * @version 4.0
   * @example
   * ```js
   * import { getPerformance } from '@zos/app'
   *
   * // Get memory info only
   * const memoryProfile = getPerformance('memory')
   *
   * // Get both memory and performance info
   * const fullProfile = getPerformance('memory', 'perf')
   * ```
   */
  function getPerformance(...args: Array<'memory' | 'perf'>): getPerformance.Result
}
