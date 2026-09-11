declare module '@zos/timer' {

  namespace createSysTimer {
    /**
     * @en Whether to create a periodic timer
     * @zh 是否创建周期性定时器
     */
    type Periodic = boolean

    /**
     * @en Timer period (ms). For non-periodic timers, it represents delay duration, 0 means immediate execution
     * @zh 定时周期（毫秒）。非周期性定时器时表示延迟时长，0 表示立即执行
     */
    type Period = number

    /**
     * @en Callback function
     * @zh 回调函数
     */
    type Callback = (arg?: unknown) => void

    /**
     * @en Parameter passed to the callback function
     * @zh 传递给回调函数的参数
     */
    type Arg = unknown

    /**
     * @en The ID returned by creating a system timer, used to stop the timer later
     * @zh 创建系统定时器返回的 ID，用于后续停止定时器
     */
    type Result = number
  }

  /**
   * @en A system-level timer that can be registered in device app services and runs regardless of watch screen state
   * @zh 在设备应用服务中可以注册的定时器，在系统级别运行，不受手表息屏影响
   * @version 4.0
   * @example
   * ```js
   * import { createSysTimer } from '@zos/timer'
   *
   * // Create a non-periodic timer that executes after 5 seconds
   * const timerId = createSysTimer(false, 5000, (param) => {
   *   console.log('timer callback with param:', param)
   * }, 'customParam')
   *
   * // Create a periodic timer that executes every 10 seconds
   * const intervalId = createSysTimer(true, 10000, () => {
   *   console.log('interval timer callback')
   * })
   * ```
   */
  function createSysTimer(
    periodic: createSysTimer.Periodic,
    period: createSysTimer.Period,
    callback: createSysTimer.Callback,
    arg?: createSysTimer.Arg,
  ): createSysTimer.Result
  namespace stopTimer {
    /**
     * @en Timer ID to be stopped, returned by `createSysTimer` method
     * @zh 需要停止的定时器 ID，由 `createSysTimer` 方法返回
     */
    type TimerId = number
  }

  /**
   * @en Stop the timer created by `createSysTimer` method
   * @zh 停止由 `createSysTimer` 方法创建的定时器
   * @version 4.0
   * @example
   * ```js
   * import { createSysTimer, stopTimer } from '@zos/timer'
   *
   * // Create a periodic timer that executes every 10 seconds
   * const timerId = createSysTimer(true, 10000, () => {
   *   console.log('Execute every 10 seconds')
   * })
   *
   * // Stop the timer after 5 seconds
   * createSysTimer(false, 5000, () => {
   *   stopTimer(timerId)
   *   console.log('Timer stopped')
   * })
   * ```
   */
  function stopTimer(timerId: stopTimer.TimerId): void
}
