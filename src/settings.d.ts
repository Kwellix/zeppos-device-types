declare module '@zos/settings' {

  /**
   * @en year-month-day
   * @zh 年-月-日
   */
  const DATE_FORMAT_YMD: number
  /**
   * @en day-month-year
   * @zh 日-月-年
   */
  const DATE_FORMAT_DMY: number
  /**
   * @en month-day-year
   * @zh 月-日-年
   */
  const DATE_FORMAT_MDY: number
  /**
   * @en 12-hour format
   * @zh 12 小时制
   * @version 2.1
   */
  const TIME_FORMAT_12: number
  /**
   * @en 24-hour format
   * @zh 24 小时制
   * @version 2.1
   */
  const TIME_FORMAT_24: number
  /**
   * @en metric system
   * @zh 公制
   */
  const DISTANCE_UNIT_METRIC: number
  /**
   * @en imperial system
   * @zh 英制
   */
  const DISTANCE_UNIT_IMPERIAL: number
  /**
   * @en Kilogram
   * @zh 千克
   */
  const WEIGHT_UNIT_KILOGRAM: number
  /**
   * @en Jin
   * @zh 斤
   */
  const WEIGHT_UNIT_JIN: number
  /**
   * @en Pound
   * @zh 英磅
   */
  const WEIGHT_UNIT_POUND: number
  /**
   * @en Stone
   * @zh 英石
   */
  const WEIGHT_UNIT_STONE: number
  /**
   * @en Celsius temperature
   * @zh 摄氏温度
   */
  const TEMPERATURE_UNIT_CENTIGRADE: number
  /**
   * @en Fahrenheit temperature
   * @zh 华氏温度
   */
  const TEMPERATURE_UNIT_FAHRENHEIT: number
  namespace getLanguage {
    /**
     * @en Please see the Multilingual Mapping for more details
     * @zh 此处不一一列举，请参考多语言映射
     */
    type Result = number
  }

  /**
   * @en Get the current system language setting
   * @zh 获取当前系统语言设置
   * @example
   * ```js
   * import { getLanguage } from '@zos/settings'
   *
   * const languageCode = getLanguage()
   * console.log(languageCode)
   * ```
   */
  function getLanguage(): getLanguage.Result
  namespace getDateFormat {
    /**
     * @en Date format, value refer to date format constants
     * @zh 日期格式，值参考日期格式常量
     */
    type Result = number
  }

  /**
   * @en Get the current system date format
   * @zh 获取当前系统日期格式
   * @constants dateFormat
   * @example
   * ```js
   * import { getDateFormat, DATE_FORMAT_YMD } from '@zos/settings'
   *
   * const currentDateFormat = getDateFormat()
   *
   * if (currentDateFormat === DATE_FORMAT_YMD) {
   *   console.log('date format is YYYY-MM-DD')
   * }
   * ```
   */
  function getDateFormat(): getDateFormat.Result
  namespace getTimeFormat {
    /**
     * @en Hour format, value refer to hour format constants
     * @zh 小时格式，值参考小时格式常量
     */
    type Result = number
  }

  /**
   * @en Get the current system time format, 12-hour format or 24-hour format
   * @zh 获取当前系统时间格式，12 小时/24 小时
   * @constants hourFormat
   * @version 2.1
   * @example
   * ```js
   * import { getTimeFormat, TIME_FORMAT_24 } from '@zos/settings'
   *
   * const timeFormat = getTimeFormat()
   *
   * if (timeFormat === TIME_FORMAT_24) {
   *   console.log('time format is 24-hour format')
   * }
   * ```
   */
  function getTimeFormat(): getTimeFormat.Result
  namespace getDistanceUnit {
    /**
     * @en Distance units, value refer to distance unit constants
     * @zh 距离单位，值参考距离单位常量
     */
    type Result = number
  }

  /**
   * @en Returns whether the current distance unit is metric or imperial. This method is to get the units set by the user, not to represent the units of the data, the data units refer to the interface description of the corresponding data
   * @zh 返回当前的距离单位是公制还是英制。该方法是获取的是用户设置的单位，不代表数据的单位，数据单位参考相应数据的接口说明
   * @constants distanceUnit
   * @example
   * ```js
   * import { getDistanceUnit, DISTANCE_UNIT_METRIC } from '@zos/settings'
   *
   * const distanceUnit = getDistanceUnit()
   *
   * if (distanceUnit === DISTANCE_UNIT_METRIC) {
   *   console.log('metric')
   * }
   * ```
   */
  function getDistanceUnit(): getDistanceUnit.Result
  namespace getWeightUnit {
    /**
     * @en Weight units, value refer to weight unit constants
     * @zh 重量单位，值参考重量单位常量
     */
    type Result = number
  }

  /**
   * @en Gets the weight unit set by the user
   * @zh 获取用户设置的重量单位
   * @constants weightUnit
   * @example
   * ```js
   * import { getWeightUnit, WEIGHT_UNIT_KILOGRAM } from '@zos/settings'
   *
   * const weightUnit = getWeightUnit()
   *
   * if (weightUnit === WEIGHT_UNIT_KILOGRAM) {
   *   console.log('Kilogram')
   * }
   * ```
   */
  function getWeightUnit(): getWeightUnit.Result
  namespace getWeightTarget {
    /**
     * @en User-set weight target, default is `0`
     * @zh 用户设置的体重目标，默认为 `0`
     */
    type Result = number
  }

  /**
   * @en Get the weight target set by the user
   * @zh 获取用户设置的体重目标
   * @example
   * ```js
   * import { getWeightTarget } from '@zos/settings'
   *
   * const weightTarget = getWeightTarget()
   * console.log(weightTarget)
   * ```
   */
  function getWeightTarget(): getWeightTarget.Result
  namespace getSleepTarget {
    /**
     * @en User-set sleep target, default is `0`, in minutes
     * @zh 用户设置的睡眠目标，默认为 `0`，单位分钟
     */
    type Result = number
  }

  /**
   * @en Get the sleep target set by the user
   * @zh 获取用户设置的睡眠目标
   * @example
   * ```js
   * import { getSleepTarget } from '@zos/settings'
   *
   * const sleepTarget = getSleepTarget()
   * console.log(sleepTarget)
   * ```
   */
  function getSleepTarget(): getSleepTarget.Result
  namespace getTemperatureUnit {
    /**
     * @en Temperature units, value reference temperature unit constants
     * @zh 温度单位，值参考温度单位常量
     */
    type Result = number
  }

  /**
   * @en Get the temperature units set by the user
   * @zh 获取用户设置的温度单位
   * @constants temperatureUnit
   * @version 2.1
   * @example
   * ```js
   * import { getTemperatureUnit, TEMPERATURE_UNIT_CENTIGRADE } from '@zos/settings'
   *
   * const temperatureUnit = getTemperatureUnit()
   *
   * if (temperatureUnit === TEMPERATURE_UNIT_CENTIGRADE) {
   *   console.log('centigrade')
   * }
   * ```
   */
  function getTemperatureUnit(): getTemperatureUnit.Result
  namespace getSystemInfo {
    /**
     * @output
     */
    interface Result {
      /**
       * @en Zepp OS System Version
       * @zh Zepp OS 系统版本
       */
      osVersion: string
      /**
       * @en Device firmware version
       * @zh 设备固件版本
       */
      firmwareVersion: string
      /**
       * @en API_LEVEL
       * @zh API_LEVEL 版本
       */
      minAPI: string
    }
  }

  /**
   * @en Get system related information
   * @zh 获取系统相关信息
   * @version 2.1
   * @example
   * ```js
   * import { getSystemInfo } from '@zos/settings'
   *
   * const { minAPI } = getSystemInfo()
   * console.log(minAPI)
   * ```
   */
  function getSystemInfo(): getSystemInfo.Result
  namespace getSystemMode {
    /**
     * @output
     */
    interface Result {
      /**
       * @en State of Do Not Disturb Mode
       * @zh 勿扰模式开关状态
       */
      DND: boolean
      /**
       * @en State of Sleep Mode
       * @zh 睡眠模式开关状态
       */
      sleep: boolean
      /**
       * @en State of Sleep Mode
       * @zh 剧场模式开关状态
       */
      theater: boolean
      /**
       * @en State of Screen Lock Mode
       * @zh 屏幕锁定开关状态
       */
      systemLock: boolean
      /**
       * @en State of Low Temperature Mode
       * @zh 低温模式开关状态
       */
      lowTemperature: boolean
      /**
       * @en State of Power Saving Mode
       * @zh 省电模式开关状态
       */
      powerSaving: boolean
      /**
       * @en State of Clock Mode
       * @zh 省电时钟模式开关状态
       */
      ultraPowerSaving: boolean
      /**
       * @en State of Button Mode
       * @zh 按键模式开关状态
       */
      button: boolean
      /**
       * @en State of Accessible
       * @zh 无障碍模式开关状态
       */
      accessibleSwitch: boolean
    }
  }

  /**
   * @en Get the system mode setting information
   * @zh 获取系统各种模式的设置信息
   * @version 3.0
   * @example
   * ```js
   * import { getSystemMode } from '@zos/settings'
   *
   * const mode = getSystemMode()
   * console.log(mode)
   * ```
   */
  function getSystemMode(): getSystemMode.Result
}
