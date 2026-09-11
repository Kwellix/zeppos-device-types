declare module '@zos/app-service' {

  namespace start {
    interface Option {
      /**
       * @en The App Service js file must be the one configured in the module app-service in app.json
       * @zh 设备应用服务 js 文件，必须是在 app.json module 中 app-service 字段配置的文件
       */
      file: string
      /**
       * @en Parameters passed in when the js file is loaded by the backend service
       * @zh 设备应用服务 js 文件加载时，传入的参数
       */
      param?: string
      /**
       * @en Callback function for the completion of the backend service start
       * @zh 设备应用服务启动完成回调函数
       */
      complete_func: (callbackOption: CallbackOption) => void
      /**
       * @en Whether to persist and automatically restart following system running state changes. System state changes include: system restart, power saving mode entry/exit, system language changes, Mini Program updates, etc.
       * @zh 是否持久化，跟随系统运行状态变化自动重启。系统状态变化包括：系统重启，省电模式进出，系统语言变更，小程序更新等
       * @version 4.0
       * @defaultValue true
       */
      reload?: boolean
    }

    /**
     * @output
     */
    interface CallbackOption {
      /**
       * @en App service js file, same as `start` incoming parameters
       * @zh 设备应用服务 js 文件，与 `start` 传入参数相同
       */
      file: string
      /**
       * @en App service start result, `true` means success, `false` means failure
       * @zh 设备应用服务启动结果，`true` 代表成功，`false` 代表失败
       */
      result: boolean
    }

    /**
     * @en If the return value is `0`, it indicates that the device application service has been successfully started; for the meanings of other values, refer to ERROR_CODE
     * @zh 如果返回 `0` 则表明设备应用服务启动成功，其余值的含义参考 ERROR_CODE
     */
    type Result = boolean

    /**
     * @output
     * @enum
     */
    interface ERROR_CODE {
      /**
       * @en Success
       * @zh 成功
       */
      0: number
      /**
       * @en Parameter error
       * @zh 参数错误
       */
      1: number
      /**
       * @en Service Status Error
       * @zh 服务状态错误
       */
      2: number
      /**
       * @en No Permission
       * @zh 无权限
       */
      3: number
      /**
       * @en Out Of Memory
       * @zh 内存不足
       */
      4: number
      /**
       * @en Not Supported
       * @zh 不支持
       */
      5: number
      /**
       * @en Prohibited
       * @zh 服务被禁止
       */
      6: number
      /**
       * @en The number of services has reached the system limit
       * @zh 服务数量已达系统限制
       */
      7: number
      /**
       * @en Unknown Error
       * @zh 未知错误
       */
      255: number
    }
  }

  /**
   * @en Start the specified App service, return the result through the callback function
   * @zh 启动指定的设备应用服务，启动结果通过回调函数返回
   * @permissionCode device:os.bg_service
   * @version 3.0
   * @example
   * ```js
   * import { start } from '@zos/app-service'
   * ```
   */
  function start(option: start.Option): start.Result
  namespace stop {
    interface Option {
      /**
       * @en The App Service js file must be the one configured in the service module in app.json
       * @zh 设备应用服务 js 文件，必须是在 app.json 中 service module 中配置的文件
       */
      file: string
      /**
       * @en Callback function for the completion of the backend service stop
       * @zh 设备应用服务关闭完成回调函数
       */
      complete_func: (callbackOption: CallbackOption) => void
    }

    /**
     * @output
     */
    interface CallbackOption {
      /**
       * @en App service js file, same as `stop` incoming parameters
       * @zh 设备应用服务 js 文件，与 `stop` 传入参数相同
       */
      file: string
      /**
       * @en App service stop result, `true` means success, `false` means failure
       * @zh 设备应用服务关闭结果，`true` 代表成功，`false` 代表失败
       */
      result: boolean
    }

    /**
     * @en If `0` is returned, The App Service is closed successfully
     * @zh 如果返回 `0` 则表明设备应用服务关闭成功
     */
    type Result = boolean
  }

  /**
   * @en Shutdown the specified backend service, called asynchronously, with the shutdown result returned via a callback function
   * @zh 关闭指定的设备应用服务，异步调用，关闭结果通过回调函数返回
   * @permissionCode device:os.bg_service
   * @version 3.0
   * @example
   * ```js
   * import { stop } from '@zos/app-service'
   * ```
   */
  function stop(option: stop.Option): stop.Result
  namespace getAllAppServices {
    /**
     * @en Get the list of currently running App services
     * @zh 获取当前正在运行的设备应用服务列表
     */
    type Result = Array<string>
  }

  /**
   * @en Get the list of running App services, used to query the service status
   * @zh 获取当前应用在运行的设备应用服务列表，用于查询服务状态
   * @permissionCode device:os.bg_service
   * @version 3.0
   * @example
   * ```js
   * import { getAllAppServices } from '@zos/app-service'
   *
   * const serviceList = getAllAppServices()
   * console.log(serviceList)
   * ```
   */
  function getAllAppServices(): getAllAppServices.Result
  /**
   * @en Called in The App Service, it will exit the service and will not affect the foreground page
   * @zh 在设备应用服务中调用，会退出该服务，不会影响前台页面
   * @permissionCode device:os.bg_service
   * @version 3.0
   * @example
   * ```js
   * import { exit } from '@zos/app-service'
   *
   * exit()
   * ```
   */
  function exit(): void
}
