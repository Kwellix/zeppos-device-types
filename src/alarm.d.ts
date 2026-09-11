declare module '@zos/alarm' {

  /**
   * @en Repeat once
   * @zh 重复一次
   * @version 3.0
   */
  const REPEAT_ONCE: number
  /**
   * @en Specify the repetition period as minute
   * @zh 指定重复周期为分钟
   * @version 3.0
   */
  const REPEAT_MINUTE: number
  /**
   * @en Specify the repetition period as hour
   * @zh 指定重复周期为小时
   * @version 3.0
   */
  const REPEAT_HOUR: number
  /**
   * @en Specify the repetition period as day
   * @zh 指定重复周期为天
   * @version 3.0
   */
  const REPEAT_DAY: number
  /**
   * @en Specify the repetition period as week
   * @zh 指定重复周期为周
   * @version 3.0
   */
  const REPEAT_WEEK: number
  /**
   * @en Specify the repetition period as month
   * @zh 指定重复周期为月
   * @version 3.0
   */
  const REPEAT_MONTH: number
  /**
   * @en Specify the repetition period as year
   * @zh 指定重复周期为年
   * @version 3.0
   */
  const REPEAT_YEAR: number
  /**
   * @en Monday
   * @zh 星期一
   * @version 3.0
   */
  const WEEK_MON: number
  /**
   * @en Tuesday
   * @zh 星期二
   * @version 3.0
   */
  const WEEK_TUE: number
  /**
   * @en Wednesday
   * @zh 星期三
   * @version 3.0
   */
  const WEEK_WED: number
  /**
   * @en Thursday
   * @zh 星期四
   * @version 3.0
   */
  const WEEK_THU: number
  /**
   * @en Friday
   * @zh 星期五
   * @version 3.0
   */
  const WEEK_FRI: number
  /**
   * @en Saturday
   * @zh 星期六
   * @version 3.0
   */
  const WEEK_SAT: number
  /**
   * @en Sunday
   * @zh 星期日
   * @version 3.0
   */
  const WEEK_SUN: number
  namespace set {
    interface Option {
      /**
       * @en App ID of the Mini Program, default current Mini Program ID
       * @zh 小程序的 App ID，默认当前小程序 ID
       */
      appid?: number
      /**
       * @en File path to wake up Mini Program, supporting App Service
       * @zh 唤醒小程序的文件路径，支持「设备应用服务」
       */
      url: string
      /**
       * @en Timer execution time, UTC timestamp, in seconds, this field has higher priority than `delay`, each call must pass one of the `time` and `delay` parameter
       * @zh 定时器执行的时间，UTC 时间戳，单位秒，该字段优先级高于 `delay`，每次调用必须传入 `time` 和 `delay` 其中的一个参数
       */
      time?: number
      /**
       * @en How many seconds of delay based on the current time after the execution, in seconds. Each call must pass one of the `time` and `delay` parameter
       * @zh 基于当前时间延迟多少秒后执行，单位秒，每次调用必须传入 `time` 和 `delay` 其中的一个参数
       */
      delay?: number
      /**
       * @en The argument passed to the app.js lifecycle `onCreate`
       * @zh 传递给 app.js 生命周期 `onCreate` 中的参数
       */
      param?: string
      /**
       * @en Does the timer need persistent storage (can still be executed successfully after device reboot)
       * @zh 定时器是否需要持久化存储（设备重启后依然能够成功执行）
       * @defaultValue false
       */
      store?: boolean
      /**
       * @en Timer repetition type, refer to timer periodic repetition constants
       * @zh 定时器的重复类型，参考定时器定期重复常量
       */
      repeat_type?: number
      /**
       * @defaultValue REPEAT_MINUTE
       * @en Effective when `repeat_type` is set to `REPEAT_MINUTE`, `REPEAT_HOUR`, `REPEAT_DAY`, used in conjunction with repeat_duration to set a repeat period, one repeat period in the current `repeat_type`, containing `repeat_period` times, and `repeat_duration` times before the reminder
       * @zh 当 `repeat_type` 设置为 `REPEAT_MINUTE`、`REPEAT_HOUR`、`REPEAT_DAY` 时生效，与 repeat_duration 配合使用，设置一个重复周期，一个重复周期以当前的 `repeat_type` 为单位，包含 `repeat_period` 次，提醒前 `repeat_duration` 次
       */
      repeat_period?: number
      /**
       * @defaultValue 1
       * @en When `repeat_type` is set to `REPEAT_MINUTE`, `REPEAT_HOUR`, `REPEAT_DAY`, the number of reminders in a period of the timer, used with `repeat_duration`, a period of the current `repeat_type`, including repeat_period times, `repeat_duration` times before the reminder
       * @zh 当 `repeat_type` 设置为 `REPEAT_MINUTE`、`REPEAT_HOUR`、`REPEAT_DAY` 时生效，定时器一个周期内提醒的次数，与 `repeat_duration` 配合使用，一个周期以当前的 `repeat_type` 为单位，包含 `repeat_period` 次，提醒前 `repeat_duration` 次
       */
      repeat_duration?: number
      /**
       * @en Effective when `repeat_type` is `REPEAT_WEEK`, you can customize which days of the week are repeated, refer to the timer week constants
       * @zh 当 `repeat_type` 为 `REPEAT_WEEK` 时生效，可以自定义一周内重复哪几天，参考定时器周常量
       */
      week_days?: number
      /**
       * @en The time when the repeat reminder starts, in UTC seconds, and the repeat reminder only takes effect during the repeat time period
       * @zh 重复提醒开始的时间，UTC 秒，重复提醒只在重复时间段内生效
       */
      start_time?: number
      /**
       * @en The time when the repeat reminder ends, in UTC seconds, and the repeat reminder only takes effect during the repeat time period
       * @zh 重复提醒结束的时间，UTC 秒，重复提醒只在重复时间段内生效
       */
      end_time?: number
    }

    /**
     * @en The id returned by the timer creation, `0` is an invalid ID, which means the timer creation failed, and the ID remains the same after the system restart for timers that support persistence
     * @zh 创建定时器返回的 id，`0` 为无效 ID，表示定时器创建失败，支持持久化的定时器在系统重启后，ID 仍保持不变
     */
    type Result = number
  }

  /**
   * @en Support for persistent timers to wake up pages of Mini Program
   * @zh 支持持久化的定时器，用来唤醒小程序的页面
   * @constants alarm_repeat,alarm_week
   * @permissionCode device:os.alarm
   * @version 3.0
   * @example
   * ```js
   * // At a certain time each day
   * import { set, REPEAT_DAY } from '@zos/alarm'
   *
   * const option = {
   *   url: 'pages/index.js',
   *   time: 12345678,
   *   repeat_type: REPEAT_DAY
   * }
   * const id = set(option)
   *
   * // Every Monday and Wednesday
   * import { set, REPEAT_WEEK, WEEK_MON, WEEK_WED } from '@zos/alarm'
   *
   * const option = {
   *   url: 'pages/index.js',
   *   time: 12345678,
   *   repeat_type: REPEAT_WEEK,
   *   week_days: WEEK_MON| WEEK_WED
   * }
   * const id = set(option)
   *
   * // Reminder every 21 days
   * import { set, REPEAT_DAY } from '@zos/alarm'
   *
   * const option = {
   *   url: 'pages/index.js',
   *   time: 12345678,
   *   repeat_type: REPEAT_DAY,
   *   repeat_period: 20,
   *   repeat_duration: 1,
   * }
   * const id = set(option)
   * ```
   */
  function set(option: set.Option): set.Result
  namespace cancel {
    interface Option {
      /**
       * @en Vertical axis coordinates of the page
       * @zh 定时器 ID，由 `set` 方法返回
       */
      id: number
    }

    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Cancels the set timer, if the timer is set to persist and also cancels the persistence
   * @zh 取消设置的定时器，如果定时器设置了持久化，同时取消持久化
   * @permissionCode device:os.alarm
   * @version 3.0
   * @example
   * ```js
   * import { cancel } from '@zos/alarm'
   *
   * cancel(id)
   * ```
   */
  function cancel(option: cancel.Option): cancel.Result
  function cancel(id: number): cancel.Result
  /**
   * @en Get an array of all created timers alarmId for the current Mini Program, including timers that support persistence
   * @zh 获取当前小程序所有已创建的定时器 alarmId 数组, 包括支持持久化的定时器
   * @permissionCode device:os.alarm
   * @version 3.0
   * @example
   * ```js
   * import { getAllAlarms } from '@zos/alarm'
   *
   * getAllAlarms()
   * ```
   */
  function getAllAlarms(): Array<number>
}
