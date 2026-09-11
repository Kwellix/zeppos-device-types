declare module '@zos/display' {

  namespace setWakeUpRelaunch {
    /**
     * @en `true` - auto-brightness is set to on, `false` - auto-brightness is set to off
     * @zh 如果类型为 `boolean` 参数含义为 `relaunch`，否则代表 Options 对象
     */
    type Option = Options | boolean

    interface Options {
      /**
       * @en Whether to reopen the Mini Program after waking up the watch again after a screen break
       * @zh 息屏后再次唤醒手表是否重新打开小程序
       */
      relaunch: boolean
    }
  }

  /**
   * @en By default, the system will off the screen in one page of the Mini Program, and the system will exit the Mini Program after 10s, and enter the dial page when the watch is woken up again. If `relaunch` is set to `true`, the Mini Program will reopen and enter the corresponding page when the watch is woken up again
   * @zh 默认情况下，在小程序某个页面中触发系统息屏，10s 后系统会退出该小程序，再次唤醒手表时进入表盘页面，如果设置 `relaunch` 为 `true`，再次唤醒手表后会重新打开小程序，并进入对应页面
   * @example
   * ```js
   * import { setWakeUpRelaunch } from '@zos/display'
   *
   * setWakeUpRelaunch({
   *   relaunch: true
   * })
   * ```
   */
  function setWakeUpRelaunch(option: setWakeUpRelaunch.Option): void
  function setWakeUpRelaunch(relaunch: boolean): void
  namespace setAutoBrightness {
    interface Option {
      /**
       * @en Whether to open the automatic brightness
       * @zh 是否开启自动亮度
       */
      autoBright: boolean
    }
  }

  /**
   * @en Set whether to turn on auto-brightness, if it is on, then the screen brightness will be controlled by the light sensor and the `setBrightness` will be disabled
   * @zh 设置是否开启自动亮度，如果开启，则屏幕亮度由光线传感器控制，`setBrightness` 的设置会失效
   * @example
   * ```js
   * import { setAutoBrightness } from '@zos/display'
   *
   * setAutoBrightness({
   *   autoBright: true
   * })
   * ```
   */
  function setAutoBrightness(option: setAutoBrightness.Option): void
  function setAutoBrightness(autoBright: boolean): void
  namespace getAutoBrightness {
    /**
     * @en `true` - auto-brightness is set to on, `false` - auto-brightness is set to off
     * @zh `true` - 自动亮度设置为开启状态，`false` - 自动亮度设置为关闭状态
     */
    type Result = boolean
  }

  /**
   * @en Get whether to turn on the screen auto brightness setting
   * @zh 获取是否开启屏幕自动亮度设置
   * @example
   * ```js
   * import { getAutoBrightness } from '@zos/display'
   *
   * const result = getAutoBrightness()
   *
   * if (result) {
   *   console.log('Auto brightness setting is turned on')
   * }
   * ```
   */
  function getAutoBrightness(): getAutoBrightness.Result
  namespace setBrightness {
    interface Option {
      /**
       * @en Screen brightness value, range 0 - 100
       * @zh 屏幕亮度数值，范围 0 - 100
       */
      brightness: number
    }

    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Set the screen brightness of the current device. If the auto brightness setting is currently turned on, the brightness is automatically adjusted by the light sensor, calling `setBrightness` will not take effect at this time, you need to use `setAutoBrightness` to turn off the auto brightness and then set it again. Note: If you exit the current page, you need to consider whether you need to set the brightness back to the original brightness
   * @zh 设置当前设备的屏幕亮度。如果当前开启了自动亮度设置，亮度由光线传感器自动调节，此时调用 `setBrightness` 不会生效，需要使用 `setAutoBrightness` 关闭自动亮度后再进行设置。注意事项：如果退出当前页面，需要考虑是否需要设置回原来的亮度
   * @example
   * ```js
   * import { setBrightness } from '@zos/display'
   *
   * const result = setBrightness({
   *   brightness: 50
   * })
   *
   * if (result === 0) {
   *   console.log('setBrightness success')
   * }
   * ```
   */
  function setBrightness(option: setBrightness.Option): setBrightness.Result
  function setBrightness(brightness: number): setBrightness.Result
  namespace getBrightness {
    /**
     * @en Screen brightness value, range 0 - 100
     * @zh 屏幕亮度数值，范围 0 - 100
     */
    type Result = number
  }

  /**
   * @en Get the screen brightness of the current device
   * @zh 获取当前设备的屏幕亮度
   * @example
   * ```js
   * import { getBrightness } from '@zos/display'
   *
   * const result = getBrightness()
   * console.log(`current brightness ${result}`)
   * ```
   */
  function getBrightness(): getBrightness.Result
  namespace setScreenOff {
    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Set the screen to rest
   * @zh 设置屏幕息屏
   * @example
   * ```js
   * import { setScreenOff } from '@zos/display'
   *
   * const result = setScreenOff()
   *
   * if (result === 0) {
   *   console.log('setScreenOff success')
   * }
   * ```
   */
  function setScreenOff(): setScreenOff.Result
  namespace setPageBrightTime {
    interface Option {
      /**
       * @en Screen lighting time (milliseconds), range [1000 - 2147483000]
       * @zh 亮屏时间（毫秒），范围 [1000 - 2147483000]
       * @defaultValue 10000
       */
      brightTime?: number
    }

    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Set the current page screen lighting time, this setting will follow the page destruction to do reset
   * @zh 设置当前页面屏幕亮屏时间，这个设置随页面销毁会做重置
   * @example
   * ```js
   * import { setPageBrightTime } from '@zos/display'
   *
   * const result = setPageBrightTime({
   *   brightTime: 60000
   * })
   *
   * if (result === 0) {
   *   console.log('setPageBrightTime success')
   * }
   * ```
   */
  function setPageBrightTime(option: setPageBrightTime.Option): setPageBrightTime.Result
  namespace resetPageBrightTime {
    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Cancel the bright time set by `setPageBrightTime`
   * @zh 取消 `setPageBrightTime` 设置的亮屏时间
   * @example
   * ```js
   * import { setPageBrightTime, resetPageBrightTime } from '@zos/display'
   *
   * setPageBrightTime({
   *   brightTime: 60000
   * })
   *
   * const result = resetPageBrightTime()
   * ```
   */
  function resetPageBrightTime(): resetPageBrightTime.Result
  namespace pausePalmScreenOff {
    interface Option {
      /**
       * @en Duration (milliseconds), if `0` is passed, the palm rest behavior is suspended until `resetPalmScreenOff` is called
       * @zh 持续时间（毫秒），如果传 `0`，则一直暂停覆掌息屏行为，直到调用 `resetPalmScreenOff`
       * @defaultValue 30000
       */
      duration?: number
    }

    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Suspension of overlapping palm resting screen behavior
   * @zh 暂停覆掌息屏行为
   * @version 2.1
   * @example
   * ```js
   * import { pausePalmScreenOff } from '@zos/display'
   *
   * pausePalmScreenOff({
   *   duration: 60000
   * })
   * ```
   */
  function pausePalmScreenOff(option: pausePalmScreenOff.Option): pausePalmScreenOff.Result
  namespace resetPalmScreenOff {
    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Recovery of overlapping palm resting screen behavior
   * @zh 恢复覆掌息屏行为
   * @version 2.1
   * @example
   * ```js
   * import { pausePalmScreenOff, resetPalmScreenOff } from '@zos/display'
   *
   * pausePalmScreenOff({
   *   duration: 0
   * })
   *
   * setTimeout(() => {
   *   resetPalmScreenOff()
   * }, 3000)
   * ```
   */
  function resetPalmScreenOff(): resetPalmScreenOff.Result
  namespace pauseDropWristScreenOff {
    interface Option {
      /**
       * @en Duration (milliseconds), if `0` is passed, the wrist rest behavior will be suspended until `resetPalmScreenOff` is called
       * @zh 持续时间（毫秒），如果传 `0`，则一直暂停落腕息屏行为，直到调用 `resetPalmScreenOff`
       * @defaultValue 30000
       */
      duration?: number
    }

    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Suspension of wrist resting behavior
   * @zh 暂停落腕息屏行为
   * @version 2.1
   * @example
   * ```js
   * import { pauseDropWristScreenOff } from '@zos/display'
   *
   * pauseDropWristScreenOff({
   *   duration: 60000
   * })
   * ```
   */
  function pauseDropWristScreenOff(
    option: pauseDropWristScreenOff.Option,
  ): pauseDropWristScreenOff.Result
  namespace resetDropWristScreenOff {
    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Resume wrist drop resting behavior
   * @zh 恢复落腕息屏行为
   * @version 2.1
   * @example
   * ```js
   * import { pauseDropWristScreenOff, resetDropWristScreenOff } from '@zos/display'
   *
   * pauseDropWristScreenOff({
   *   duration: 0
   * })
   *
   * setTimeout(() => {
   *   resetDropWristScreenOff()
   * }, 3000)
   * ```
   */
  function resetDropWristScreenOff(): resetDropWristScreenOff.Result
  namespace getSettings {
    /**
     * output
     */
    interface Result {
      /**
       * @en Screen Status
       * @zh 屏幕状态
       */
      screen: ScreenObj
      /**
       * @en Lift wrist to view info setting
       * @zh 抬腕亮屏设置
       */
      wrist: WristObj
      /**
       * @en Rest screen display settings
       * @zh 息屏显示设置
       */
      standby: StandbyObj
    }

    /**
     * output
     */
    interface ScreenObj {
      /**
       * @en Current screen status, `1`: On, `2`: Off
       * @zh 当前屏幕状态，`1`: 亮屏、`2`: 息屏
       */
      status: number
      /**
       * @en Screen light-up time, in seconds
       * @zh 屏幕亮屏时长，单位秒
       */
      duration: number
    }

    interface WristObj {
      /**
       * @en Response speed
       * @zh 抬腕亮屏响应速度
       */
      speed: number
      /**
       * @en Mode, see `model` for value
       * @zh 抬腕亮屏开启模式，值见 `model`
       */
      model: number
      /**
       * @en Start time, based on the number of minutes at 0:00 of the day
       * @zh 抬腕亮屏开启时间，基于当天 0 点的分钟数
       */
      startTime: number
      /**
       * @en End time, based on the number of minutes at 0:00 of the day
       * @zh 抬腕亮屏结束时间，基于当天 0 点的分钟数
       */
      endTime: number
    }

    interface StandbyObj {
      /**
       * @en Rest screen Watchface style, `0`: system default, `1`: follow the current dial
       * @zh 息屏表盘样式，`0`: 系统默认、`1`: 跟随当前表盘
       */
      style: number
      /**
       * @en Mode, see `model` for value
       * @zh 息屏显示开启模式，值见 model
       */
      model: number
      /**
       * @en Start time, based on the number of minutes at 0:00 of the day
       * @zh 息屏显示开启时间，基于当天 0 点的分钟数
       */
      startTime: number
      /**
       * @en End time, based on the number of minutes at 0:00 of the day
       * @zh 息屏显示结束时间，基于当天 0 点的分钟数
       */
      endTime: number
    }

    /**
     * @output
     * @enum
     */
    interface mode {
      /**
       * @en Measurement invalid
       * @zh 关闭
       */
      0: number
      /**
       * @en Measurement invalid
       * @zh 定时开启
       */
      1: number
      /**
       * @en Measurement invalid
       * @zh 全天开启
       */
      2: number
      /**
       * @en Measurement invalid
       * @zh 智能开启
       */
      3: number
    }
  }

  /**
   * @en Get system display related information
   * @zh 获取系统显示相关信息
   * @version 3.0
   * @example
   * ```js
   * import { getSettings } from '@zos/display'
   *
   * console.log(getSettings())
   * ```
   */
  function getSettings(): getSettings.Result
}
