declare module '@zos/router' {

  /**
   * @en Activity
   * @zh 今日活动
   * @version 3.0
   */
  const SYSTEM_APP_STATUS: number

  /**
   * @en Heart Rate
   * @zh 心率
   * @version 3.0
   */
  const SYSTEM_APP_HR: number

  /**
   * @en Workout
   * @zh 运动
   * @version 3.0
   */
  const SYSTEM_APP_SPORT: number

  /**
   * @en Weather
   * @zh 天气
   * @version 3.0
   */
  const SYSTEM_APP_WEATHER: number

  /**
   * @en Alarm
   * @zh 闹钟
   * @version 3.0
   */
  const SYSTEM_APP_ALARM: number

  /**
   * @en Camera Remote
   * @zh 遥控拍照
   * @version 3.0
   */
  const SYSTEM_APP_CAMERA: number

  /**
   * @en Music
   * @zh 音乐
   * @version 3.0
   */
  const SYSTEM_APP_MUSIC: number

  /**
   * @en Stopwatch
   * @zh 秒表
   * @version 3.0
   */
  const SYSTEM_APP_STOPWATCH: number

  /**
   * @en Timer
   * @zh 倒计时
   * @version 3.0
   */
  const SYSTEM_APP_COUNTDOWN: number

  /**
   * @en Find My Phone
   * @zh 查找手机
   * @version 3.0
   */
  const SYSTEM_APP_FINE_PHONE: number

  /**
   * @en Cards
   * @zh 卡包
   * @version 3.0
   */
  const SYSTEM_APP_CARD: number

  /**
   * @en Alipay
   * @zh 支付宝
   * @version 3.0
   */
  const SYSTEM_APP_ALIPAY: number

  /**
   * @en Settings
   * @zh 设置
   * @version 3.0
   */
  const SYSTEM_APP_SETTING: number

  /**
   * @en Workout History
   * @zh 运动记录
   * @version 3.0
   */
  const SYSTEM_APP_SPORT_HISTORY: number

  /**
   * @en Compass
   * @zh 指南针
   * @version 3.0
   */
  const SYSTEM_APP_COMPASS: number

  /**
   * @en PAI
   * @zh PAI
   * @version 3.0
   */
  const SYSTEM_APP_PAI: number

  /**
   * @en World Clock
   * @zh 世界时钟
   * @version 3.0
   */
  const SYSTEM_APP_WORLD_CLOCK: number

  /**
   * @en Stress
   * @zh 压力
   * @version 3.0
   */
  const SYSTEM_APP_PRESSURE: number

  /**
   * @en Cycle Tracking
   * @zh 生理周期
   * @version 3.0
   */
  const SYSTEM_APP_MENSTRUAL: number

  /**
   * @en Workout Status
   * @zh 运动状态
   * @version 3.0
   */
  const SYSTEM_APP_SPORT_STATUS: number

  /**
   * @en Calendar
   * @zh 日历
   * @version 3.0
   */
  const SYSTEM_APP_CALENDAR: number

  /**
   * @en Sleep
   * @zh 睡眠
   * @version 3.0
   */
  const SYSTEM_APP_SLEEP: number

  /**
   * @en Blood Oxygen
   * @zh 血氧
   * @version 3.0
   */
  const SYSTEM_APP_SPO2: number

  /**
   * @en Phone
   * @zh 电话
   * @version 3.0
   */
  const SYSTEM_APP_PHONE: number

  /**
   * @en NetEase Music
   * @zh 网易云音乐
   * @version 3.0
   */
  const SYSTEM_APP_NETEASE_MUSIC: number

  /**
   * @en Weixin Pay
   * @zh 微信支付
   * @version 3.0
   */
  const SYSTEM_APP_WEPAY: number

  /**
   * @en Breathe
   * @zh 呼吸
   * @version 3.0
   */
  const SYSTEM_APP_BREATH: number

  /**
   * @en Pomodoro Timer
   * @zh 番茄钟
   * @version 3.0
   */
  const SYSTEM_APP_POMODORO: number

  /**
   * @en Alexa
   * @zh Alexa
   * @version 3.0
   */
  const SYSTEM_APP_ALEAX: number

  /**
   * @en Thermometer
   * @zh 温度计
   * @version 3.0
   */
  const SYSTEM_APP_THERMOMETER: number

  /**
   * @en To Do
   * @zh 待办事项
   * @version 3.0
   */
  const SYSTEM_APP_TODO_LIST: number

  /**
   * @en Barometer
   * @zh 气压高度计
   * @version 3.0
   */
  const SYSTEM_APP_ALTIMETER: number

  /**
   * @en Voice Memos
   * @zh 语音备忘录
   * @version 3.0
   */
  const SYSTEM_APP_VOICE_MEMO: number

  /**
   * @en Sun & Moon
   * @zh 太阳和月亮
   * @version 3.0
   */
  const SYSTEM_APP_SUN_AND_MOON: number

  /**
   * @en One-tap Measuring
   * @zh 一键测量
   * @version 3.0
   */
  const SYSTEM_APP_MEASUREMENT: number

  /**
   * @en Zepp Coach
   * @zh Zepp 运动教练
   * @version 3.0
   */
  const SYSTEM_APP_ZEPP_COACH: number

  /**
   * @en Membership Card
   * @zh 会员卡
   * @version 3.0
   */
  const SYSTEM_APP_CLUB_CARD: number

  /**
   * @en Body Composition
   * @zh 身体成分
   * @version 3.0
   */
  const SYSTEM_APP_BODY_COMPOSITION: number

  /**
   * @en Readiness
   * @zh 身心准备度
   * @version 3.0
   */
  const SYSTEM_APP_READINESS: number
  namespace launchApp {
    interface Option {
      /**
       * @en Mini Program ID or System App ID (API_LEVEL 3.0 support, value reference System App ID constant)
       * @zh 小程序 ID 或系统应用 ID（API_LEVEL 3.0 支持，值参考系统应用 ID 常量）
       */
      appId: number
      /**
       * @en path
       * @zh 页面路径
       */
      url: string
      /**
       * @en Whether to jump to the system App
       * @zh 是否跳转系统应用
       * @default false
       * @version 3.0
       */
      native: boolean
      /**
       * @en The argument passed to the app.js lifecycle `onCreate` supports either a string or a standard JSON object. If a standard JSON object is passed, the method internally converts it to a string
       * @zh 传递给 app.js 生命周期 `onCreate` 中的参数，支持字符串或者标准 JSON 对象。如果传递标准 JSON 对象，该方法内部会将其转为字符串
       */
      params?: string | object
    }
  }

  /**
   * @en Open Mini Program
   * @zh 打开小程序
   * @constants system_app
   * @example
   * ```js
   * import { launchApp, SYSTEM_APP_HR } from '@zos/router'
   *
   * // Jump to Mini Program
   * launchApp({
   *    appId: 1000001,
   *    url: 'pages/js_widget_sample',
   *    params: {
   *      type: 1
   *   }
   * })
   *
   * // Jump to system App Heart Rate
   * launchApp({
   *    appId: SYSTEM_APP_HR,
   *    native: true
   * })
   * ```
   */
  function launchApp(option: launchApp.Option): void
  namespace push {
    interface Option {
      /**
       * @en path
       * @zh 页面路径
       */
      url: string
      /**
       * @en Parameters passed to the page `onInit` lifecycle, supporting strings or standard JSON object. If a standard JSON object is passed, the method internally converts it to a string
       * @zh 传递给 page.js `onInit` 生命周期中的参数，支持字符串或者标准 JSON 对象。如果传递标准 JSON 对象，该方法内部会将其转为字符串
       */
      params?: string | object
    }
  }

  /**
   * @zh
   * 跳转到小程序内的某个页面，使用 `back` 方法可以回到原页面
   * @en
   * Navigate to a page within the Mini Program. Use the `back` method to go back to the original page
   * @example
   * ```js
   * import { push } from '@zos/router'
   *
   * push({
   *    url: 'page/index',
   *    params: 'type=1'
   * })
   * ```
   */
  function push(option: push.Option): void
  namespace replace {
    interface Option {
      /**
       * @en path
       * @zh 页面路径
       */
      url: string
      /**
       * @en Parameters passed to the page `onCreate` lifecycle, supporting strings or standard JSON objects. If a standard JSON object is passed, the method internally converts it to a string
       * @zh 传递给 page.js `onInit` 生命周期中的参数，支持字符串或者标准 JSON 对象。如果传递标准 JSON 对象，该方法内部会将其转为字符串
       */
      params?: string | object
    }
  }

  /**
   * @zh
   * 关闭当前页面，跳转到小程序内的某个页面
   * @en
   * Close the current page and jump to a page within the app
   * @example
   * ```js
   * import { replace } from '@zos/router'
   *
   * replace({
   *    url: 'page/index',
   *    params: 'type=1'
   * })
   * ```
   */
  function replace(option: replace.Option): void
  /**
   * @zh
   * 退出小程序，返回至表盘页面
   * @en
   * Exit the Mini Program and return to the watchface page
   * @example
   * ```js
   * import { home } from '@zos/router'
   *
   * home()
   * ```
   */
  function home(): void
  /**
   * @zh
   * 关闭当前页面，返回上一页面
   * @en
   * Closes the current page to return to the previous page
   * @example
   * ```js
   * import { back } from '@zos/router'
   *
   * back()
   * ```
   */
  function back(): void
  /**
   * @zh
   * 关闭当前小程序，回到应用列表页面
   * @en
   * Exit the Mini Program and return to the applist page
   * @example
   * ```js
   * import { exit } from '@zos/router'
   *
   * exit()
   * ```
   */
  function exit(): void
  namespace setLaunchAppTimeout {
    interface Option {
      /**
       * @en Mini Program ID
       * @zh 小程序 ID
       */
      appId: number
      /**
       * @en path
       * @zh 页面路径
       */
      url: string
      /**
       * @en utc timestamp(milliseconds)，the priority is higher than `delay`, and when set at the same time as the `delay` field, only the `utc` field takes effect
       * @zh utc 时间戳（毫秒），优先级高于 `delay`，当与 `delay` 字段同时设置的时候，只有 `utc` 字段生效
       */
      utc?: number
      /**
       * @en The time, in milliseconds that the timer should wait before the Mini Program is waked.
       * @zh 等待时间（毫秒）
       * @version 3.0
       * @defaultValue 0
       */
      delay?: number
      /**
       * @en The argument passed to the app.js lifecycle `onCreate` supports either a string or a standard JSON object. If a standard JSON object is passed, the method internally converts it to a string
       * @zh 传递给 app.js 生命周期 `onCreate` 中的参数，支持字符串或者标准 JSON 对象。如果传递标准 JSON 对象，该方法内部会将其转为字符串
       */
      params?: string | object
    }

    /**
     * @en The returned value is a positive integer value which identifies the timer created by the call to `setLaunchAppTimeout`. This value can be passed to `clearLaunchAppTimeout` to cancel the timeout.
     * @zh 表示定时器的编号，这个值可以传递给 `clearLaunchAppTimeout` 来取消定时器
     */
    type Result = number
  }

  /**
   * @en Register a timer to launch the Mini Program at a given time
   * @zh 注册一个定时器，定时唤起小程序，在此期间如果设备重启，则定时器会失效
   * @example
   * ```js
   * import { setLaunchAppTimeout, clearLaunchAppTimeout } from '@zos/router'
   *
   * const timeoutId = setLaunchAppTimeout({
   *   url: 'pages/js_widget_sample',
   *   appId: 1000001,
   *   delay: 1000
   * })
   *
   * clearLaunchAppTimeout({
   *   timeoutId
   * })
   * ```
   */
  function setLaunchAppTimeout(option: setLaunchAppTimeout.Option): setLaunchAppTimeout.Result
  namespace clearLaunchAppTimeout {
    interface Option {
      /**
       * @en The identifier of the timeout you want to cancel. This ID was returned by the corresponding call to `setLaunchAppTimeout`()
       * @zh 需要取消的唤醒小程序定时器的编号，这个值通过 `setLaunchAppTimeout` 返回
       */
      timeoutId: number
    }

    /**
     * @en The returned value is a positive integer value which identifies the timer created by the call to `setLaunchAppTimeout`. This value can be passed to `clearLaunchAppTimeout` to cancel the timeout
     * @zh 表示定时器的编号，这个值可以传递给 `clearLaunchAppTimeout` 来取消定时器
     */
    type Result = number
  }

  /**
   * @en Cancel the wakeup Mini Program timer created by `setLaunchAppTimeout`
   * @zh 取消 `setLaunchAppTimeout` 创建的唤醒小程序定时器
   * @example
   * ```js
   * import { setLaunchAppTimeout, clearLaunchAppTimeout } from '@zos/router'
   *
   * const timeoutId = setLaunchAppTimeout({
   *   url: 'pages/js_widget_sample',
   *   appId: 1000001,
   *   delay: 10000
   * })
   *
   * clearLaunchAppTimeout({
   *   timeoutId
   * })
   * ```
   */
  function clearLaunchAppTimeout(option: clearLaunchAppTimeout.Option): void
  function clearLaunchAppTimeout(timeoutId: number): void
  namespace checkSystemApp {
    interface Option {
      /**
       * @en ID of the system App to be jumped to, value refers to the system App ID constant
       * @zh 需要跳转的系统应用 ID，值参考系统应用 ID 常量
       */
      appId: number
    }
  }

  /**
   * @en Check if the system application supports jumping
   * @zh 检查系统应用是否支持跳转
   * @constants system_app
   * @version 3.0
   * @example
   * ```js
   * import { checkSystemApp, SYSTEM_APP_STATUS } from '@zos/router'
   *
   * checkSystemApp({
   *   appId: SYSTEM_APP_STATUS
   * })
   * ```
   */
  function checkSystemApp(option: checkSystemApp.Option): void
  function checkSystemApp(appId: number): void
  namespace getAppIdByName {
    /**
     * @en Matched Mini Program ID, returns invalid ID when match fails
     * @zh 匹配到的小程序 ID，未成功匹配时返回无效 ID
     */
    type Result = number
  }

  /**
   * @en Fuzzy match the English name of installed Mini Programs on the device by name
   * @zh 根据名称模糊匹配设备端已安装小程序的英文名称
   * @version 3.6
   * @example
   * ```js
   * import { getAppIdByName } from '@zos/router'
   *
   * const appId = getAppIdByName('calculator')
   * console.log(appId)
   * ```
   */
  function getAppIdByName(name: string): getAppIdByName.Result
}
