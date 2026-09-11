declare module '@zos/sensor' {

  /**
   * @en Light vibration intensity and short time (20ms)
   * @zh 振动强度轻，时间较短（20ms）
   */
  const VIBRATOR_SCENE_SHORT_LIGHT: number
  /**
   * @en Medium vibration intensity, short time (20ms)
   * @zh 振动强度中等，时间较短（20ms）
   */
  const VIBRATOR_SCENE_SHORT_MIDDLE: number
  /**
   * @en High vibration intensity and short time (20ms)
   * @zh 振动强度高，时间较短（20ms）
   */
  const VIBRATOR_SCENE_SHORT_STRONG: number
  /**
   * @en High vibration intensity, lasting 600ms
   * @zh 振动强度高，持续 600ms
   */
  const VIBRATOR_SCENE_DURATION: number
  /**
   * @en High vibration intensity, lasting 1000ms
   * @zh 振动强度高，持续 1000ms
   */
  const VIBRATOR_SCENE_DURATION_LONG: number
  /**
   * @en High vibration intensity, four vibrations in 1200ms, can be used for stronger reminders
   * @zh 振动强度高，1200ms 内振动四次，用于较强提醒
   */
  const VIBRATOR_SCENE_STRONG_REMINDER: number
  /**
   * @en Two short, continuous vibrations, consistent with the watch message notification vibration feedback
   * @zh 短促振动两次，与手表消息通知振动反馈一致
   */
  const VIBRATOR_SCENE_NOTIFICATION: number
  /**
   * @en High vibration intensity, single vibration twice in 500ms, continuous vibration, need to manually `stop`, consistent with the watch call vibration feedback
   * @zh 振动强度高，单次 500ms 内振动两次，持续振动，需要手动 `stop` 才会停止，与手表来电振动反馈一致
   */
  const VIBRATOR_SCENE_CALL: number
  /**
   * @en High vibration intensity, single long vibration 500ms, continuous vibration, need to manually `stop`, consistent with the watch alarm clock, countdown vibration feedback
   * @zh 振动强度高，单次长振动 500ms，持续振动，需要手动 `stop` 才会停止，与手表闹钟、倒计时振动反馈一致
   */
  const VIBRATOR_SCENE_TIMER: number
  /**
   * @en 12-hour format
   * @zh 12 小时制
   * @version 2.1
   */
  const TIME_HOUR_FORMAT_12: number
  /**
   * @en 24-hour format
   * @zh 24 小时制
   * @version 2.1
   */
  const TIME_HOUR_FORMAT_24: number
  /**
   * @en Low power mode with low trigger frequency
   * @zh 低功耗模式，触发频率低
   * @version 3.0
   */
  const FREQ_MODE_LOW: number
  /**
   * @en Normal power consumption mode, medium trigger frequency
   * @zh 正常功耗模式，触发频率中等
   * @version 3.0
   */
  const FREQ_MODE_NORMAL: number
  /**
   * @en High power consumption mode with high trigger frequency
   * @zh 高功耗模式，触发频率高
   * @version 3.0
   */
  const FREQ_MODE_HIGH: number
  namespace Time {
    namespace getLunarMonthCalendar {
      /**
       * @output
       */
      interface LunarMonthCalendar {
        /**
         * @en Number of days in the current month
         * @zh 当前月的天数
         */
        day_count: number
        /**
         * @en Array of display content for each day of the current month, display content priority for holidays, Solar Term, date
         * @zh 当前月每一天展示内容数组，展示内容优先级为节日、节气、日期
         */
        lunar_days_array: Array<string>
      }
    }
  }

  /**
   * @en Time/Date Sensor
   * @zh 时间/日期传感器
   * @example
   * ```js
   * import { Time } from '@zos/sensor'
   *
   * const time = new Time()
   * const currentTime = time.getTime()
   * ```
   */
  class Time {
    /**
     * @en Gets the UTC timestamp in milliseconds
     * @zh 获取 UTC 时间戳，单位毫秒
     */
    getTime(): number
    /**
     * @en Get the year of the current date
     * @zh 获取当前日期的年份
     */
    getFullYear(): number
    /**
     * @en Get the month of the current date, range 1 - 12, return `1` for January
     * @zh 获取当前日期的月份，范围 1 - 12，返回 `1` 代表 1 月
     */
    getMonth(): number
    /**
     * @en Get the number of days of the current date, i.e. the day of the month, in the range 1 - 31
     * @zh 获取当前日期的天数，即一个月中的哪一天，范围 1 - 31
     */
    getDate(): number
    /**
     * @en Get the number of hours of the current time
     * @zh 获取当前时间的小时数
     */
    getHours(): number
    /**
     * @en Get the number of minutes of the current time
     * @zh 获取当前时间的分钟数
     */
    getMinutes(): number
    /**
     * @en Get the number of seconds of the current time
     * @zh 获取当前时间的秒数
     */
    getSeconds(): number
    /**
     * @en Get the current time corresponding to the day of the week, range 1 - 7, return `1` for Monday
     * @zh 获取当前时间对应一周中的第几天，范围 1 - 7，返回 `1` 代表星期一
     */
    getDay(): number
    /**
     * @en Get the current system time format, 12-hour format or 24-hour format，value reference hour format constants
     * @zh 获取当前系统时间格式，12 小时/24 小时，值参考小时格式常量
     * @constants hour_format
     * @version 2.1
     */
    getHourFormat(): number
    /**
     * @en Get the number of hours in the current time format (12-hour format or 24-hour format)
     * @zh 获取当前时间格式（12 小时/24 小时）下的小时数
     * @version 2.1
     */
    getFormatHour(): number
    /**
     * @en Register end-of-minute event listener callback function
     * @zh 注册每分钟结束事件监听回调函数
     * @version 2.1
     */
    onPerMinute(callback: () => void): void
    /**
     * @en Register the end-of-day event listener callback function
     * @zh 注册每天结束事件监听回调函数
     * @version 2.1
     */
    onPerDay(callback: () => void): void
    /**
     * @en Register the end-of-hour event listener callback function
     * @zh 注册每小时结束事件监听回调函数
     * @version 3.6
     */
    onPerHourEnd(callback: () => void): void
    /**
     * @en Get gregorian holidays, or return the string `'INVALID'` if there is no holiday
     * @zh 获取公历节日，如果没有节日，则返回字符串 `'INVALID'`
     */
    getFestival(): string
    /**
     * @en Get Chinese lunar year, only works when system language is set to Chinese
     * @zh 获取中国农历年份，仅在系统语言设置为中文时生效
     */
    getLunarYear(): number
    /**
     * @en Get Chinese lunar month, only works when system language is set to Chinese
     * @zh 获取中国农历月份，仅在系统语言设置为中文时生效
     */
    getLunarMonth(): number
    /**
     * @en Get Chinese lunar day, only works when system language is set to Chinese
     * @zh 获取中国农历日期，仅在系统语言设置为中文时生效
     */
    getLunarDay(): number
    /**
     * @en Get Chinese lunar holidays, only works when system language is set to Chinese, or return the string `'INVALID'` if there is no holiday
     * @zh 获取中国农历节日，仅在系统语言设置为中文时生效，如果没有节日，则返回字符串 `'INVALID'`
     */
    getLunarFestival(): string
    /**
     * @en Get Traditional Chinese Solar Terms, only works when system language is set to Chinese, or return the string `'INVALID'` if there is no Solar Term
     * @zh 获取中国农历节气，仅在系统语言设置为中文时生效，如果没有节气，则返回字符串 `'INVALID'`
     */
    getSolarTerm(): string
    /**
     * @en Get the holiday strings displayed on that day, the priority is Gregorian holidays, Chinese lunar holidays, Chinese lunar festivals in that order, only when the system language is set to Chinese
     * @zh 获取当天显示的节日字符串，仅在系统语言设置为中文时生效，优先级依次是公历节日、中国农历节日、中国农历节气，
     */
    getShowFestival(): string
    /**
     * @en Get the monthly calendar information of the current month of Chinese lunar calendar, only works when the system language is set to Chinese
     * @zh 获取中国农历当前月的月历信息，仅在系统语言设置为中文时生效
     */
    getLunarMonthCalendar(): Time.getLunarMonthCalendar.LunarMonthCalendar
    /**
     * @en Register the Sunrise event listener callback function to take effect only when the device weather information
     * @zh 注册日出事件监听回调函数，仅当设备天气信息时才会生效
     * @version 3.0
     */
    onSunrise(callback: () => void): void
    /**
     * @en Register the Sunset event listener callback function to take effect only when the device weather information
     * @zh 注册日落事件监听回调函数，仅当设备天气信息时才会生效
     * @version 3.0
     */
    onSunset(callback: () => void): void
    /**
     * @en Register the phone modify time event listening callback function
     * @zh 注册手机修改时间事件监听回调函数
     * @version 3.0
     */
    onPhoneTimeSetting(callback: () => void): void
  }
  /**
   * @en Battery Sensor
   * @zh 电量传感器
   * @example
   * ```js
   * import { Battery } from '@zos/sensor'
   *
   * const battery = new Battery()
   * const current = battery.getCurrent()
   *
   * const callback = () => {
   *   console.log(battery.getCurrent())
   * }
   *
   * battery.onChange(callback)
   *
   * // When not needed for use
   * battery.offChange(callback)
   * ```
   */
  class Battery {
    /**
     * @en Get the current device power percentage, range 0 - 100
     * @zh 获取当前设备电量百分比，范围 0 - 100
     */
    getCurrent(): number
    /**
     * @en Register the power change event callback function
     * @zh 注册电量变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel the power change event callback function
     * @zh 取消电量变化事件监听回调函数
     */
    offChange(callback: () => void): void
  }
  /**
   * @en Step Sensor
   * @zh 步数传感器
   * @permissionCode data:user.hd.step
   * @example
   * ```js
   * import { Step } from '@zos/sensor'
   *
   * const step = new Step()
   * const current = step.getCurrent()
   * const target = step.getTarget()
   * const callback = () => {
   *   console.log(step.getCurrent())
   * }
   *
   * step.onChange(callback)
   *
   * // When not needed for use
   * step.offChange(callback)
   * ```
   */
  class Step {
    /**
     * @en Get the current step count
     * @zh 获取当前步数
     */
    getCurrent(): number
    /**
     * @en Get step goal
     * @zh 获取步数目标
     */
    getTarget(): number
    /**
     * @en Register the step change event callback function
     * @zh 注册步数变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel the step change event callback function
     * @zh 取消步数变化事件监听回调函数
     */
    offChange(callback: () => void): void
  }
  /**
   * @en Calorie Sensor
   * @zh 卡路里传感器
   * @permissionCode data:user.hd.calorie
   * @example
   * ```js
   * import { Calorie } from '@zos/sensor'
   *
   * const calorie = new Calorie()
   * const current = calorie.getCurrent()
   * const target = calorie.getTarget()
   * const callback = () => {
   *   console.log(calorie.getCurrent())
   * }
   *
   * calorie.onChange(callback)
   *
   * // When not needed for use
   * calorie.offChange(callback)
   * ```
   */
  class Calorie {
    /**
     * @en Get the current calorie consumption in kcal
     * @zh 获取当前消耗卡路里，单位 kcal
     */
    getCurrent(): number
    /**
     * @en Get the target calorie consumption in kcal
     * @zh 获取目标消耗卡路里，单位 kcal
     */
    getTarget(): number
    /**
     * @en Register the calories change event callback function
     * @zh 注册卡路里消耗变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel the calories change event callback function
     * @zh 取消卡路里消耗变化事件监听回调函数
     */
    offChange(callback: () => void): void
  }
  namespace HeartRate {
    namespace getDailySummary {
      /**
       * @output
       */
      interface Result {
        /**
         * @en Maximum heart rate information
         * @zh 最高心率信息
         */
        maximum: Maximum
      }

      /**
       * @output
       */
      interface Maximum {
        /**
         * @en Maximum heart rate value
         * @zh 最高心率值
         */
        hr_value: number
        /**
         * @en Measurement time of maximum heart rate
         * @zh 最高心率的测量时间
         */
        time: number
      }
    }

    namespace getAFibRecord {
      /**
       * @en Atrial Fibrillation Information Array
       * @zh 房颤信息数组
       */
      type Result = Array<AfibInfo>

      /**
       * @output
       */
      interface AfibInfo {
        /**
         * @en Atrial fibrillation test results, `0` - normal, `1` - high alert, `2` - low alert, `3` - atrial fibrillation
         * @zh 房颤检测结果，`0` - 正常、`1` - 高预警、`2` - 低预警、`3` - 房颤
         */
        flag: number
        /**
         * @en Atrial fibrillation data value, integer value 0 - 255
         * @zh 房颤数据值，值为 0 - 255 的整数
         */
        val: number
        /**
         * @en Atrial fibrillation data maximum value, integer value 0 - 255
         * @zh 房颤数据最大值，值为 0 - 255 的整数
         */
        maxValue: number
        /**
         * @en Atrial fibrillation data minimum value, integer value 0 - 255
         * @zh 房颤数据最小值，值为 0 - 255 的整数
         */
        minValue: number
        /**
         * @en Time of Atrial fibrillation data acquisition, UTC seconds
         * @zh 房颤数据采集的时间，UTC 秒
         */
        time: number
        /**
         * @en Duration in seconds
         * @zh 持续时间，单位秒
         */
        duration: number
      }
    }
  }

  /**
   * @en HeartRate Sensor
   * @zh 心率传感器
   * @permissionCode data:user.hd.heart_rate
   * @example
   * ```js
   * import { HeartRate } from '@zos/sensor'
   *
   * const heartRate = new HeartRate()
   * const lastValue = heartRate.getLast()
   *
   * const callback = () => {
   *   console.log(heartRate.getCurrent())
   * }
   *
   * heartRate.onCurrentChange(callback)
   *
   * // When not needed for use
   * heartRate.offCurrentChange(callback)
   * ```
   */
  class HeartRate {
    /**
     * @en Get the current heart rate measurement, this method needs to be used in the `onCurrentChange` callback function
     * @zh 获取最近一次心率持续测量的测量值，此方法需要在 `onCurrentChange` 回调函数中使用，注册 `onCurrentChange` 事件后，设备会开启心率持续测量，以一定频率更新心率持续测量的测量值
     */
    getCurrent(): number
    /**
     * @en Get the most recent heart rate measurement (single measurement or heart rate monitoring measurement, continuous heart rate measurement `onCurrentChange` results are not counted)
     * @zh 获取最近一次的心率测量值。设备心率自动监测会更新心率测量值，注册 `onCurrentChange` 后设备开始持续测量心率，也会更新心率测量值
     */
    getLast(): number
    /**
     * @en Get the heart rate measurement data in minutes from 0:00 to the current moment of the day, the longest array is 60*24
     * @zh 获取当日自 0 时起至当前时刻以分钟计的心率测量值数据，数组最长为 60*24
     */
    getToday(): Array<number>
    /**
     * @en Call this method and start measuring heart rate continuously, call the callback function when there is a measurement result, call the `getCurrent` method in the callback function to get the heart rate measurement value, if you want to stop the heart rate measurement, you need to call the `offCurrentChange` method
     * @zh 调用此方法后设备开始心率持续测量，并注册回调函数，当有测量结果时调用回调函数，在回调函数中调用 `getCurrent` 方法可以获取心率持续测量的测量值，如需停止持续心率测量，需要调用 `offCurrentChange` 方法
     * @version 2.1
     */
    onCurrentChange(callback: () => void): void
    /**
     * @en Cancel continuous heart rate measurement and cancel callback function listeners
     * @zh 取消持续心率测量，并取消回调函数监听
     * @version 2.1
     */
    offCurrentChange(callback: () => void): void
    /**
     * @en Register the heart rate single measurement change event callback function
     * @zh 注册心率测量值变化事件回调函数
     * @version 2.1
     */
    onLastChange(callback: () => void): void
    /**
     * @en Cancel the heart rate single measurement change event callback function
     * @zh 取消心率测量值变化事件回调函数
     * @version 2.1
     */
    offLastChange(callback: () => void): void
    /**
     * @en Get daily heart rate statistics
     * @zh 获取心率日统计数据
     * @version 3.0
     */
    getDailySummary(): HeartRate.getDailySummary.Result
    /**
     * @en Get current resting heart rate
     * @zh 获取当前静息心率
     * @version 3.0
     */
    getResting(): number
    /**
     * @en Get Atrial Fibrillation Data Array
     * @zh 获取房颤数据数组
     * @version 3.0
     */
    getAFibRecord(): HeartRate.getAFibRecord.Result
    /**
     * @en After calling this method, the device starts real-time resting heart rate measurement and registers a callback function, which is called when there is a measurement result, in which the `getResting` method can be called to get the resting heart rate measurement value, and if you need to stop the resting heart rate measurement, you need to call the `offRestingChange` method
     * @zh 调用此方法后设备开始实时静息心率测量，并注册回调函数，当有测量结果时调用回调函数，在回调函数中调用 `getResting` 方法可以获取静息心率测量值，如需停止静息心率测量，需要调用 `offRestingChange` 方法
     * @version 3.0
     */
    onRestingChange(callback: () => void): void
    /**
     * @en Cancel continuous resting heart rate measurement and cancel callback function listeners
     * @zh 取消静息心率持续测量，并取消回调函数监听
     * @version 3.0
     */
    offRestingChange(callback: () => void): void
  }
  /**
   * @en PAI Sensor
   * @zh PAI 传感器
   * @permissionCode data:user.hd.pai
   * @example
   * ```js
   * import { Pai } from '@zos/sensor'
   *
   * const pai = new Pai()
   * const total = pai.getTotal()
   * const today = pai.getToday()
   * const lastWeek = pai.getLastWeek()
   * ```
   */
  class Pai {
    /**
     * @en Get the current cumulative PAI value
     * @zh 获取当前累计的 PAI 值
     */
    getTotal(): number
    /**
     * @en Get the PAI values obtained today
     * @zh 获取今日获取的 PAI 值
     */
    getToday(): number
    /**
     * @en Get the PAI data for the past 7 days, the return value is an array of length `7`, the position of index `0` is the PAI value of today, the position of index `1` is the PAI value of the previous day, and so on
     * @zh 获取过去 `7` 天的 PAI 数据，返回值为长度为 `7` 的数组，数组索引 `0` 的位置为今天的 PAI 值，索引 `1` 的位置为前 1 天的 PAI 值，以此类推
     */
    getLastWeek(): Array<number>
  }
  /**
   * @en Distance Sensor
   * @zh 里程传感器
   * @permissionCode data:user.hd.distance
   * @example
   * ```js
   * import { Distance } from '@zos/sensor'
   *
   * const distance = new Distance()
   * const current = distance.getCurrent()
   * const callback = () => {
   *   console.log(distance.getCurrent())
   * }
   *
   * distance.onChange(callback)
   *
   * // When not needed for use
   * distance.offChange(callback)
   * ```
   */
  class Distance {
    /**
     * @en Get the current distance
     * @zh 获取当前里程
     */
    getCurrent(): number
    /**
     * @en Register the distance change event callback function
     * @zh 注册里程变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel the distance change event callback function
     * @zh 取消里程变化事件监听回调函数
     */
    offChange(callback: () => void): void
  }
  /**
   * @en Standing behavior Sensor
   * @zh 站立行为传感器
   * @permissionCode data:user.hd.stand
   * @example
   * ```js
   * import { Stand } from '@zos/sensor'
   *
   * const stand = new Stand()
   * const current = stand.getCurrent()
   * const target = stand.getTarget()
   * const callback = () => {
   *   console.log(stand.getCurrent())
   * }
   *
   * stand.onChange(callback)
   *
   * // When not needed for use
   * stand.offChange(callback)
   * ```
   */
  class Stand {
    /**
     * @en Get the current number of hours with standing behavior
     * @zh 获取当前有站立行为的小时数
     */
    getCurrent(): number
    /**
     * @en Get the number of hours with standing behavior targets
     * @zh 获取有站立行为目标的小时数
     */
    getTarget(): number
    /**
     * @en Register a callback function to listen for changes in the number of hours of standing behavior
     * @zh 注册站立行为小时数变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel a callback function to listen for changes in the number of hours of standing behavior
     * @zh 取消站立行为小时数变化事件监听回调函数
     */
    offChange(callback: () => void): void
  }
  /**
   * @en FatBurning Sensor
   * @zh 脂肪燃烧传感器
   * @permissionCode data:user.hd.fat_burning
   * @example
   * ```js
   * import { FatBurning } from '@zos/sensor'
   *
   * const fatBurning = new FatBurning()
   * const current = fatBurning.getCurrent()
   * const target = fatBurning.getTarget()
   * const callback = () => {
   *   console.log(fatBurning.getCurrent())
   * }
   *
   * fatBurning.onChange(callback)
   *
   * // When not needed for use
   * fatBurning.offChange(callback)
   * ```
   */
  class FatBurning {
    /**
     * @en Get current fat burning minutes
     * @zh 获取当前燃脂分钟数
     */
    getCurrent(): number
    /**
     * @en Get current fat burning target minutes
     * @zh 获取当前燃脂目标分钟数
     */
    getTarget(): number
    /**
     * @en Register a callback function to listen to the fat burning minutes change event
     * @zh 注册燃脂分钟数变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel a callback function to listen to the fat burning minutes change event
     * @zh 取消燃脂分钟数变化事件监听回调函数
     */
    offChange(callback: () => void): void
  }
  namespace BloodOxygen {
    namespace getCurrent {
      /**
       * @output
       */
      interface Result {
        /**
         * @en Blood oxygen measurement values
         * @zh 血氧测量值
         */
        value: number
        /**
         * @en Measurement time
         * @zh 测量时间
         */
        time: number
        /**
         * @en Result code, refer to retCode description
         * @zh 结果返回码，参考 retCode 描述
         */
        retCode: number
      }

      /**
       * @output
       * @enum
       */
      interface retCode {
        /**
         * @en Measurement invalid
         * @zh 测量无效
         */
        0: number
        /**
         * @en Continue measuring
         * @zh 继续测量
         */
        1: number
        /**
         * @en Measurement success
         * @zh 测量成功
         */
        2: number
        /**
         * @en Measurement failure
         * @zh 测量失败
         */
        3: number
        /**
         * @en Not wearing
         * @zh 没有佩戴
         */
        4: number
        /**
         * @en Measurement timeout
         * @zh 测量超时
         */
        5: number
        /**
         * @en Invalid wearing
         * @zh 无效佩戴
         */
        6: number
        /**
         * @en Invalid signal
         * @zh 信号无效
         */
        7: number
        /**
         * @en Low blood oxygen value
         * @zh 血氧值偏低
         */
        8: number
        /**
         * @en High blood oxygen value
         * @zh 血氧值偏高
         */
        9: number
        /**
         * @en Measurement invalid
         * @zh 测量无效
         */
        10: number
      }
    }

    namespace getLastFewHour {
      /**
       * @output
       */
      interface Data {
        /**
         * @en Blood oxygen measurement value
         * @zh 血氧测量值
         */
        spo2: number
        /**
         * @en Time of measurement of blood oxygen values, UTC time stamp in seconds
         * @zh 血氧值的测量时间，单位秒
         */
        time: number
      }
    }
  }
  /**
   * @en Blood oxygen Sensor
   * @zh 血氧传感器
   * @permissionCode data:user.hd.spo2
   * @example
   * ```js
   * import { BloodOxygen } from '@zos/sensor'
   *
   * const bloodOxygen = new BloodOxygen()
   * const { value } = bloodOxygen.getCurrent()
   * const lastDay = bloodOxygen.getLastDay()
   * const callback = () => {
   *   console.log(bloodOxygen.getCurrent())
   * }
   *
   * bloodOxygen.onChange(callback)
   * bloodOxygen.stop()
   * bloodOxygen.start()
   * // When not needed for use
   * bloodOxygen.offChange(callback)
   * ```
   */
  class BloodOxygen {
    /**
     * @en Get the current measured blood oxygen result
     * @zh 获取当前测量的血氧结果
     */
    getCurrent(): BloodOxygen.getCurrent.Result
    /**
     * @en Returns the average blood sample data for the past 24 hours, with an array length of 24
     * @zh 返回过去 24 小时平均血氧数据，数组长度为 24
     */
    getLastDay(): Array<number>
    /**
     * @en Start blood oxygen measurement, it is recommended to call `stop` to stop the last measurement before calling the `start` method
     * @zh 开始血氧测量，建议在调用 `start` 方法前，调用 `stop` 来停止上一次测量
     * @version 2.1
     */
    start(): void
    /**
     * @en Cancel blood oxygen measurement
     * @zh 停止血氧测量
     * @version 2.1
     */
    stop(): void
    /**
     * @en Register a callback function to listen for blood oxygen measurement change events
     * @zh 注册血氧测量值变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel a callback function to listen for blood oxygen measurement change events
     * @zh 取消血氧测量值变化事件监听回调函数
     */
    offChange(callback: () => void): void
    /**
     * @en Obtain blood oxygen measurements for the last `hour` and sort the results in chronological order
     * @zh 获取最近 `hour` 个小时的血氧测量数据，结果按照时间顺序排序
     * @version 3.0
     */
    getLastFewHour(hour: number): Array<BloodOxygen.getLastFewHour.Data>
  }
  namespace Stress {
    namespace getCurrent {
      /**
       * @output
       */
      interface Result {
        /**
         * @en Stress measurement values
         * @zh 压力测量值
         */
        value: number
        /**
         * @en Time to obtain the measured value
         * @zh 得出测量值的时间
         */
        time: number
      }
    }

    namespace getToday {
      /**
       * @output
       */
      interface StressInfo {
        /**
         * @en Pressure value measurement time, UTC time stamp, in seconds
         * @zh 压力值测量时间，UTC 时间戳，单位秒
         */
        second: number
        /**
         * @en Pressure value, `0` means invalid
         * @zh 压力值，`0` 代表无效
         */
        stress: number
      }
    }

    namespace getLastWeekByHour {
      /**
       * @output
       */
      interface StressInfo {
        /**
         * @en Pressure value measurement time, UTC time stamp, in seconds
         * @zh 压力值测量时间，UTC 时间戳，单位秒
         */
        second: number
        /**
         * @en Pressure value, `0` means invalid
         * @zh 压力值，`0` 代表无效
         */
        stress: number
      }
    }
  }
  /**
   * @en Stress Sensor
   * @zh 压力传感器
   * @permissionCode data:user.hd.stress
   * @example
   * ```js
   * import { Stress } from '@zos/sensor'
   *
   * const stress = new Stress()
   * const { value } = stress.getCurrent()
   *
   * const callback = () => {
   *   console.log(stress.getCurrent())
   * }
   *
   * stress.onChange(callback)
   *
   * // When not needed for use
   * stress.offChange(callback)
   * ```
   */
  class Stress {
    /**
     * @en Get the current pressure measurement
     * @zh 获取当前压力测量值
     */
    getCurrent(): Stress.getCurrent.Result
    /**
     * @en Register a callback function to listen for stress measurement change events
     * @zh 注册压力测量值变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel a callback function to listen for stress measurement change events
     * @zh 取消压力测量值变化事件监听回调函数
     */
    offChange(callback: () => void): void
    /**
     * @en Get the pressure measurements for the whole day, recorded every minute, the return value is an array of variable length, the maximum length of the array is 24 * 60
     * @zh 获取全天的压力测量值，每分钟记录一次，返回值为不定长数组，数组长度最大 24 * 60
     * @version 3.0
     */
    getToday(): Array<number>
    /**
     * @en Get the average pressure value for the whole day, the return value is a fixed-length array, the average pressure for each hour, the length of the array is 24
     * @zh 获取全天的压力均值，返回值为定长数组，为每小时的平均压力，数组长度为 24
     * @version 3.0
     */
    getTodayByHour(): Array<number>
    /**
     * @en Get the average pressure value for each day of the past 7 days, the return value is a fixed-length array, the average pressure per day, the length of the array is 7, the position of index 0 represents six days ago, the position of index 6 represents today
     * @zh 获取过去七天每天的压力均值，返回值为定长数组，为每天平均压力，数组长度为 7，索引 0 的位置代表六天前，索引 6 的位置代表今天
     * @version 3.0
     */
    getLastWeek(): Array<number>
    /**
     * @en Get the hourly pressure average for the past 7 days, the return value is a fixed-length array, the length of the array is 7 * 24
     * @zh 获取过去七天每小时的压力平均值，返回值为定长数组，数组长度为 7 * 24
     * @version 3.0
     */
    getLastWeekByHour(): Array<Stress.getLastWeekByHour.StressInfo>
  }
  /**
   * @en Wearing status sensor
   * @zh 佩戴状态传感器
   * @example
   * ```js
   * import { Wear } from '@zos/sensor'
   *
   * const wear = new Wear()
   * const status = wear.getStatus()
   * const callback = () => {
   *   console.log(wear.getStatus())
   * }
   *
   * wear.onChange(callback)
   *
   * // When not needed for use
   * wear.offChange(callback)
   * ```
   */
  class Wear {
    /**
     * @en Get the current device wearing status, `0`: not wearing, `1`: wearing, `2`: in motion, `3`: not sure
     * @zh 获取当前设备佩戴状态，`0`：未佩戴、`1`：佩戴、`2`：运动中、`3`：不确定
     */
    getStatus(): number
    /**
     * @en Register the device wear status change event listening callback function
     * @zh 注册设备佩戴状态变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel the device wear status change event listening callback function
     * @zh 取消设备佩戴状态变化事件监听回调函数
     */
    offChange(callback: () => void): void
  }
  namespace Sleep {
    namespace getInfo {
      /**
       * @output
       */
      interface SleepInfo {
        /**
         * @en Sleep score
         * @zh 睡眠得分
         */
        score: number
        /**
         * @en Deep sleep time (minutes)
         * @zh 深睡眠时间（分钟）
         */
        deepTime: number
        /**
         * @en Sleep onset time, based on the number of minutes at 0:00 of the day
         * @zh 睡眠起始时间，基于当天 0 点的分钟数
         */
        startTime: number
        /**
         * @en Sleep end time, based on the number of minutes at 0:00 of the day
         * @zh 睡眠结束时间，基于当天 0 点的分钟数
         */
        endTime: number
        /**
         * @en Get total sleep time (minutes)
         * @zh 获取睡眠总时间（分钟）
         */
        totalTime: number
      }
    }

    namespace getStageConstantObj {
      /**
       * @output
       */
      interface StageConstants {
        /**
         * @en Awake stage
         * @zh 清醒阶段
         */
        WAKE_STAGE: number
        /**
         * @en Deep sleep time (minutes)
         * @zh REM 阶段
         */
        REM_STAGE: number
        /**
         * @en Light Sleep stage
         * @zh 浅睡眠阶段
         */
        LIGHT_STAGE: number
        /**
         * @en Deep Sleep stage
         * @zh 深睡眠阶段
         */
        DEEP_STAGE: number
      }
    }

    namespace getStage {
      /**
       * @output
       */
      interface StageInfo {
        /**
         * @en Sleep stage type, refer to the constants returned by `getStageConstantObj` for the meaning of the value
         * @zh 睡眠阶段类型，值的含义参考 `getStageConstantObj` 返回的常量
         */
        model: number
        /**
         * @en Sleep stage onset time, based on the number of minutes at 0:00 of the day
         * @zh 睡眠阶段起始时间，基于当天 0 点的分钟数
         */
        start: number
        /**
         * @en Sleep stage end time, based on the number of minutes at 0:00 of the day
         * @zh 睡眠阶段结束时间，基于当天 0 点的分钟数
         */
        stop: number
      }
    }

    namespace getNap {
      /**
       * @output
       */
      interface NapInfo {
        /**
         * @en Nap duration (minutes)
         * @zh 小睡时长（分钟）
         */
        length: number
        /**
         * @en Nap start time, based on the number of minutes at 0:00 of the day
         * @zh 小睡起始时间，基于当天 0 点的分钟数
         */
        start: number
        /**
         * @en Nap end time, based on the number of minutes at 0:00 of the day
         * @zh 小睡结束时间，基于当天 0 点的分钟数
         */
        stop: number
      }
    }
  }

  /**
   * @en Sleep Sensor
   * @zh 睡眠传感器
   * @permissionCode data:user.hd.sleep
   * @example
   * ```js
   * import { Sleep } from '@zos/sensor'
   *
   * const sleep = new Sleep()
   * const { score } = sleep.getInfo()
   * const sleepStageConstants = sleep.getStageConstantObj()
   * const stage = sleep.getStage()
   *
   * stage.forEach((i) => {
   *   const { model } = i
   *
   *   if (model === sleepStageConstants.WAKE_STAGE) {
   *     console.log('This stage is awake stage')
   *   }
   * })
   * ```
   */
  class Sleep {
    /**
     * @en By default, the system updates the sleep data every `30` minutes, the `updateInfo` method is used to actively trigger the update of the sleep data
     * @zh 系统默认每 `30` 分钟更新一次睡眠数据,`updateInfo` 方法用来主动触发更新睡眠数据
     */
    updateInfo(): void
    /**
     * @en Get sleep information
     * @zh 获取睡眠信息
     */
    getInfo(): Sleep.getInfo.SleepInfo
    /**
     * @en Get the constant value of the sleep stage, used to determine the sleep stage in the `getStage` return value
     * @zh 获取睡眠阶段的常量值，用于在 `getStage` 返回值中判断睡眠阶段
     */
    getStageConstantObj(): Sleep.getStageConstantObj.StageConstants
    /**
     * @en Get Sleep Staging Data
     * @zh 获取睡眠分阶段数据
     */
    getStage(): Array<Sleep.getStage.StageInfo>
    /**
     * @en Get the current sleep state, 0 'awake, 1' sleeping
     * @zh 获取当前睡眠状态，`0` 醒着，`1` 正在睡眠
     * @version 3.0
     */
    getSleepingStatus(): number
    /**
     * @en Get nap data
     * @zh 获取零星小睡数据
     * @version 3.0
     */
    getNap(): Array<Sleep.getNap.NapInfo>
  }
  namespace Weather {
    namespace getForecastWeather {
      /**
       * @output
       */
      interface ForecastWeather {
        /**
         * @en City Name
         * @zh 城市名称
         */
        cityName: string
        /**
         * @en Weather Information
         * @zh 天气信息
         */
        forecastData: ForecastData
        /**
         * @en Tide Information
         * @zh 潮汐信息
         */
        tideData: TideData
      }

      /**
       * @output
       */
      interface ForecastData {
        /**
         * @en Weather Information Array, index 0 position represents the day
         * @zh 天气信息数组，索引 0 位置代表当天
         */
        data: Array<ForecastDataItem>
        /**
         * @en The length of Weather Information Array
         * @zh 天气信息数组长度
         */
        count: number
      }

      /**
       * @output
       */
      interface ForecastDataItem {
        /**
         * @en Maximum temperature
         * @zh 最高温度
         */
        high: number
        /**
         * @en Lowest temperature
         * @zh 最低温度
         */
        low: number
        /**
         * @en The index value of the weather, see `index` below for a description of the value
         * @zh 天气的索引值，值描述详见下方 `index`
         */
        index: number
      }

      /**
       * @output
       * @enum
       */
      interface index {
        /**
         * @en Cloudy
         * @zh 多云
         */
        0: number
        /**
         * @en Showers
         * @zh 阵雨
         */
        1: number
        /**
         * @en Snow Showers
         * @zh 阵雪
         */
        2: number
        /**
         * @en Sunny
         * @zh 晴
         */
        3: number
        /**
         * @en Overcast
         * @zh 阴
         */
        4: number
        /**
         * @en Light Rain
         * @zh 小雨
         */
        5: number
        /**
         * @en Light Snow
         * @zh 小雪
         */
        6: number
        /**
         * @en Moderate Rain
         * @zh 中雨
         */
        7: number
        /**
         * @en Moderate Snow
         * @zh 中雪
         */
        8: number
        /**
         * @en Heavy Snow
         * @zh 大雪
         */
        9: number
        /**
         * @en Heavy Rain
         * @zh 大雨
         */
        10: number
        /**
         * @en Sandstorm
         * @zh 沙尘暴
         */
        11: number
        /**
         * @en Rain and Snow
         * @zh 雨夹雪
         */
        12: number
        /**
         * @en Fog
         * @zh 雾
         */
        13: number
        /**
         * @en Hazy
         * @zh 霾
         */
        14: number
        /**
         * @en T-Storms
         * @zh 雷阵雨
         */
        15: number
        /**
         * @en Snowstorm
         * @zh 暴雪
         */
        16: number
        /**
         * @en Floating dust
         * @zh 浮尘
         */
        17: number
        /**
         * @en Very Heavy Rainstorm
         * @zh 特大暴雨
         */
        18: number
        /**
         * @en Rain and Hail
         * @zh 雨加冰雹
         */
        19: number
        /**
         * @en T-Storms and Hail
         * @zh 雷阵雨伴有冰雹
         */
        20: number
        /**
         * @en Heavy Rainstorm
         * @zh 大暴雨
         */
        21: number
        /**
         * @en Dust
         * @zh 扬尘
         */
        22: number
        /**
         * @en Heavy sand storm
         * @zh 强沙尘暴
         */
        23: number
        /**
         * @en Rainstorm
         * @zh 暴雨
         */
        24: number
        /**
         * @en Unknown
         * @zh 未知天气
         */
        25: number
        /**
         * @en Cloudy Nighttime
         * @zh 夜间多云
         */
        26: number
        /**
         * @en Showers Nighttime
         * @zh 夜间阵雨
         */
        27: number
        /**
         * @en Sunny Nighttime
         * @zh 夜间晴
         */
        28: number
      }

      /**
       * @output
       */
      interface TideData {
        /**
         * @en Tide Information Array, index 0 position represents the day
         * @zh 潮汐信息数组，索引 0 位置代表当天
         */
        data: Array<TideDataItem>
        /**
         * @en The length of Tide Information Array
         * @zh 潮汐信息数组长度
         */
        count: number
      }

      /**
       * @output
       */
      interface TideDataItem {
        /**
         * @en Sunrise time
         * @zh 日出时间
         */
        sunrise: Sunrise
        /**
         * @en Sunset time
         * @zh 日落时间
         */
        sunset: Sunset
      }

      /**
       * @output
       */
      interface Sunrise {
        /**
         * @en Sunrise time - hour
         * @zh 日出时间 - 小时
         */
        hour: number
        /**
         * @en Sunrise time - minute
         * @zh 日出时间 - 分钟
         */
        minute: number
      }

      /**
       * @output
       */
      interface Sunset {
        /**
         * @en Sunrise time - hour
         * @zh 日落时间 - 小时
         */
        hour: number
        /**
         * @en Sunrise time - minute
         * @zh 日落时间 - 分钟
         */
        minute: number
      }
    }
  }

  /**
   * @en Weather Forecasts sensor
   * @zh 天气预报传感器
   * @deprecated https://github.com/orgs/zepp-health/discussions/83
   * @example
   * ```js
   * import { Weather } from '@zos/sensor'
   *
   * const weather = new Weather()
   * const { forecastData, tideData, cityName } = weather.getForecast()
   *
   * console.log(cityName)
   *
   * for (let i = 0; i < forecastData.count; i++) {
   *   const element = forecastData.data[i]
   *   console.log('Index' + element.index)
   *   console.log('Highest temperature' + element.high)
   *   console.log('Lowest temperature' + element.low)
   * }
   *
   * for (let i = 0; i < tideData.count; i++) {
   *   const element = tideData.data[i]
   *   console.log('Sunrise' + element.sunrise.hour + element.sunrise.minute)
   *   console.log('Sunset' + element.sunset.hour + element.sunset.minute)
   * }
   * ```
   */
  class Weather {
    /**
     * @en Get weather forecast data
     * @zh 获取天气预报数据
     */
    getForecastWeather(): Weather.getForecastWeather.ForecastWeather
  }
  namespace Vibrator {
    namespace start {
      interface Option {
        /**
         * @en Vibration mode, Value refer to Vibration motor mode constants
         * @zh 振动模式，值参考振动马达模式常量
         * @defaultValue VIBRATOR_SCENE_SHORT_MIDDLE
         */
        mode?: number
      }

      interface Action {
        /**
         * @en Vibration Scene Type
         * @zh 震动场景类型
         * @version 3.6
         */
        type: number
        /**
         * @en Duration of vibration
         * @zh 震动持续时长
         * @version 3.6
         */
        duration?: number
      }
    }

    namespace setMode {
      interface Option {
        /**
         * @en Vibration mode, Value refer to Vibration motor mode constants
         * @zh 振动模式，值参考振动马达模式常量
         */
        mode: number
      }
    }

    namespace getConfig {
      /**
       * @output
       */
      interface Option {
        /**
         * @en Vibration mode, Value refer to Vibration motor mode constants
         * @zh 振动模式，值参考振动马达模式常量
         */
        mode: number
      }
    }

    namespace getType {
      /**
       * @output
       */
      interface Type {
        /**
         * @en Vibration scene, light short vibration
         * @zh 震动场景，轻短振
         */
        GENTLE_SHORT: number
        /**
         * @en Vibration scene, strong and short vibration
         * @zh 震动场景，强短振
         */
        STRONG_SHORT: number
        /**
         * @en Vibration scene, standard crown vibration
         * @zh 震动场景，标准表冠振动
         */
        STANDARD_CROWN: number
        /**
         * @en Vibration scene, strong crown vibration
         * @zh 震动场景，强表冠振动
         */
        STRONG_CROWN: number
        /**
         * @en Vibration scene, single-pulse crown vibration
         * @zh 震动场景，单脉冲表冠振动
         */
        SPULSE_CROWN: number
        /**
         * @en Vibration scene, dual-pulse crown vibration
         * @zh 震动场景，双脉冲表冠振动
         */
        DIPULSE_CROWN: number
        /**
         * @en Vibration scene, password button vibration
         * @zh 震动场景，密码按键振动
         */
        KEYCODE_CLICK: number
        /**
         * @en Vibration scene, urgent vibration
         * @zh 震动场景，加急振动
         */
        URGENT: number
        /**
         * @en Vibration scene, continuous vibration
         * @zh 震动场景，持续振动
         */
        CONTINUOUS: number
        /**
         * @en Vibration scene, stop vibration
         * @zh 震动场景，停止振动
         */
        PAUSE: number
      }
    }
  }

  /**
   * @en Vibrator
   * @zh 振动马达
   * @example
   * ```js
   * import { Vibrator, VIBRATOR_SCENE_DURATION } from '@zos/sensor'
   *
   * const vibrator = new Vibrator()
   * vibrator.start()
   *
   * // set scene
   * vibrator.setMode(VIBRATOR_SCENE_DURATION)
   * vibrator.start()
   * ```
   */
  class Vibrator {
    /**
     * @en Start vibration, the'option 'parameter passed in only takes effect for this vibration, and supports passing in vibration scene arrays after API_LEVEL 3.6
     * @zh 开始振动，传入的 `option` 参数，只对此次振动生效，在 API_LEVEL 3.6 后支持传入震动场景数组
     * @constants vibrator_scene
     */
    start(option?: Vibrator.start.Option | Array<Vibrator.start.Action>): void
    /**
     * @en Stop vibration
     * @zh 停止振动
     */
    stop(): void
    /**
     * @en Set the vibration mode, call `start()` after successful setting, it will vibrate according to the set mode
     * @zh 设置振动模式，设置成功后调用 `start()`，会依照设置的模式进行振动
     */
    setMode(option: Vibrator.setMode.Option): void
    /**
     * @en Get Vibration Motor Configuration
     * @zh 获取振动马达配置
     */
    getConfig(): Vibrator.getConfig.Option
    /**
     * @en Get Vibration Scene Type
     * @zh 获取振动场景类型
     * @version 3.6
     */
    getType(): Vibrator.getType.Type
  }
  /**
   * @en Barometer Sensor
   * @zh 气压高度传感器
   * @permissionCode device:os.barometer
   * @version 2.1
   * @example
   * ```js
   * import { Barometer } from '@zos/sensor'
   *
   * const barometer = new Barometer()
   * const airPressure = barometer.getAirPressure()
   * const altitude = barometer.getAltitude()
   *
   * const callback = () => {
   *   console.log(barometer.getAltitude())
   * }
   *
   * barometer.onChange(callback)
   *
   * // When not needed for use
   * barometer.offChange(callback)
   * ```
   */
  class Barometer {
    /**
     * @en Get air pressure value in hPa
     * @zh 获取气压值，单位百帕
     */
    getAirPressure(): number
    /**
     * @en Get altitude value in meters
     * @zh 获取海拔高度值，单位米
     */
    getAltitude(): number
    /**
     * @en Register the air pressure and altitude change event callback function
     * @zh 注册气压和海拔变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel the air pressure and altitude change event callback function
     * @zh 取消气压和海拔变化事件监听回调函数
     */
    offChange(callback: () => void): void
  }
  namespace Geolocation {
    namespace getLatitude {
      interface Option {
        /**
         * @en Coordinate format, optionally `DD` for decimal or `DMS` in degrees, minutes and seconds
         * @zh 坐标格式，可选 `DD` 代表十进制或者 `DMS` 度分秒的形式
         * @defaultValue DD
         */
        format?: string
      }

      /**
       * @en Coordinates, coordinate system type WGS-84
       * @zh 坐标，坐标系类型 WGS-84
       */
      type Result = number | DMS

      /**
       * @output
       */
      interface DMS {
        /**
         * @en Direction, `N` for north latitude, `S` for south latitude
         * @zh 方向，`N` 代表北纬，`S` 代表南纬
         */
        direction: string
        /**
         * @en degree
         * @zh 度
         */
        degrees: number
        /**
         * @en minute
         * @zh 分
         */
        minutes: number
        /**
         * @en second
         * @zh 秒
         */
        seconds: number
      }
    }

    namespace getLongitude {
      interface Option {
        /**
         * @en Coordinate format, optionally `DD` for decimal or `DMS` in degrees, minutes and seconds
         * @zh 坐标格式，可选 `DD` 代表十进制或者 `DMS` 度分秒的形式
         * @defaultValue DD
         */
        format?: string
      }

      /**
       * @en Coordinates, coordinate system type WGS-84
       * @zh 坐标，坐标系类型 WGS-84
       */
      type Result = number | DMS

      /**
       * @output
       */
      interface DMS {
        /**
         * @en Direction, `E` for east longitude, `W` for west longitude
         * @zh 方向，`E` 代表东经，`W` 代表西经
         */
        direction: string
        /**
         * @en degree
         * @zh 度
         */
        degrees: number
        /**
         * @en minute
         * @zh 分
         */
        minutes: number
        /**
         * @en second
         * @zh 秒
         */
        seconds: number
      }
    }

    namespace getSetting {
      /**
       * @output
       */
      interface Result {
        /**
         * @en Positioning settings, see `mode` below for value descriptions
         * @zh 定位设置，值描述详见下方 `mode`
         */
        mode: number
      }

      /**
       * @output
       * @enum
       */
      interface mode {
        /**
         * @en Accuracy
         * @zh 精准模式
         */
        0: number
        /**
         * @en Automation
         * @zh 智能模式
         */
        1: number
        /**
         * @en Balance
         * @zh 均衡模式
         */
        2: number
        /**
         * @en Power Saving
         * @zh 省电模式
         */
        3: number
        /**
         * @en Super Power Saving
         * @zh 超级省电模式
         */
        4: number
        /**
         * @en Custom
         * @zh 自定义模式
         */
        5: number
      }
    }

    namespace onGnssChange {
      /**
       * @output
       */
      interface Info {
        /**
         * @en AGPS update time UTC timestamp in milliseconds
         * @zh AGPS 更新时间 UTC 时间戳，单位毫秒
         */
        agps_inject_time: number
        /**
         * @en Signal strength value of the positioning satellite
         * @zh 定位卫星的信号强度值
         */
        top4_cn_val: number
        /**
         * @en Whether dual-band
         * @zh 是否双频
         */
        is_dualband: number
        /**
         * @en Number of available satellites
         * @zh 可用卫星数量
         */
        nb_valid_satellite: number
        /**
         * @en Number of satellites used
         * @zh 使用的卫星数量
         */
        nb_used_satellite: number
        /**
         * @en Time consumed from the start of satellite search to successful positioning, in seconds
         * @zh 从搜索卫星开始到定位成功所消耗的时间，单位秒
         */
        elapsed_time: number
        /**
         * @en Satellite data arrays
         * @zh 卫星数据数组
         */
        satellite_data: Array<SatelliteSystem>
      }

      /**
       * @output
       */
      interface SatelliteSystem {
        /**
         * @en Satellite ID, see `gnss_id` below for value descriptions
         * @zh 卫星系统 ID，值描述见下方 `gnss_id`
         */
        gnss_id: number
        /**
         * @en The strongest signal value of this satellite system
         * @zh 该卫星系统的最强信号值
         */
        sub_top4_cn_val: number
        /**
         * @en Number of available satellites that can be searched
         * @zh 搜索到可用卫星数量
         */
        nb_valid_satellite: number
        /**
         * @en Single satellite data array, maximum length 32
         * @zh 单颗卫星数据数组，最大长度 32
         * @version 3.6
         */
        gsv_data: Array<Satellite>
      }

      /**
       * @output
       * @enum
       */
      interface gnss_id {
        /**
         * @en GPS
         * @zh GPS 全球定位系统
         */
        0: number
        /**
         * @en BDS
         * @zh BDS 北斗卫星导航系统
         */
        1: number
        /**
         * @en GLONASS
         * @zh GLONASS 全球导航卫星系统
         */
        2: number
        /**
         * @en GALILEO
         * @zh GALILEO 伽利略定位系统
         */
        3: number
        /**
         * @en QZSS
         * @zh QZSS 准天顶卫星系统
         */
        4: number
        /**
         * @en IRNSS
         * @zh IRNSS 印度区域导航卫星系统
         */
        5: number
      }

      /**
       * @output
       */
      interface Satellite {
        /**
         * @en Satellite ID
         * @zh 卫星 ID
         * @version 3.6
         */
        id: number
        /**
         * @en Pitch angle
         * @zh 俯仰角
         * @version 3.6
         */
        elevation: number
        /**
         * @en Azimuth
         * @zh 方位角
         * @version 3.6
         */
        azimuth: number
        /**
         * @en Signal-to-noise ratio
         * @zh 信噪比
         * @version 3.6
         */
        snr: number
      }
    }
  }

  /**
   * @en Geolocation Sensor
   * @zh 定位传感器
   * @permissionCode device:os.geolocation
   * @version 2.1
   * @example
   * ```js
   * import { Geolocation } from '@zos/sensor'
   *
   * const geolocation = new Geolocation()
   *
   * const callback = () => {
   *   if (geolocation.getStatus() === 'A') {
   *     console.log(geolocation.getLatitude())
   *     console.log(geolocation.getLongitude())
   *   }
   * }
   *
   * geolocation.start()
   * geolocation.onChange(callback)
   *
   * // When not needed for use
   * geolocation.offChange(callback)
   * geolocation.stop()
   * ```
   */
  class Geolocation {
    /**
     * @en Start listening to location data
     * @zh 开始监听定位数据
     */
    start(): void
    /**
     * @en Stop listening to location data
     * @zh 停止监听定位数据
     */
    stop(): void
    /**
     * @en Get the positioning status, return `A` for positioning in progress, return `V` for invalid positioning
     * @zh 获取定位状态，返回 `A` 代表定位中，返回 `V` 代表无效定位
     */
    getStatus(): string
    /**
     * @en Get Latitude
     * @zh 获取纬度
     */
    getLatitude(option: Geolocation.getLatitude.Option): Geolocation.getLatitude.Result
    /**
     * @en Get Longitude
     * @zh 获取经度
     */
    getLongitude(option: Geolocation.getLongitude.Option): Geolocation.getLongitude.Result
    /**
     * @en Get the positioning settings
     * @zh 获取定位设置
     * @version 3.0
     */
    getSetting(): Geolocation.getSetting.Result
    /**
     * @en Register a callback function to listen for location information change events
     * @zh 注册定位信息变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel the callback function for listening to the location information change event
     * @zh 取消定位信息变化事件监听回调函数
     */
    offChange(callback: () => void): void
    /**
     * @en Register a callback function to listen for GNSS information change events
     * @zh 注册 GNSS 信息变化事件监听回调函数
     * @version 3.0
     */
    onGnssChange(callback: (info: Geolocation.onGnssChange.Info) => void): void
    /**
     * @en Cancel the callback function for listening to the GNSS information change event
     * @zh 取消 GNSS 信息变化事件监听回调函数
     * @version 3.0
     */
    offGnssChange(callback: (info: Geolocation.onGnssChange.Info) => void): void
    /**
     * @en Get whether the user allows the Mini Program to use location features
     * @zh 获取用户是否允许小程序使用定位功能
     * @version 4.0
     */
    getEnabled(): boolean
    /**
     * @en Register a callback function to listen for user location permission change events
     * @zh 注册用户定位授权状态变化事件监听回调函数
     * @version 4.0
     */
    onEnableChange(callback: () => void): void
    /**
     * @en Cancel the callback function for listening to user location permission change events
     * @zh 取消用户定位授权状态变化事件监听回调函数
     * @version 4.0
     */
    offEnableChange(callback: () => void): void
  }
  namespace Workout {
    namespace getStatus {
      /**
       * @output
       */
      interface Status {
        /**
         * @en VO2 Max
         * @zh 最大摄氧量
         */
        vo2Max: number
        /**
         * @en Training Load
         * @zh 运动负荷
         */
        trainingLoad: number
        /**
         * @en Full Recovery Time
         * @zh 完全恢复时间
         */
        fullRecoveryTime: number
      }
    }

    namespace getHistory {
      /**
       * @output
       */
      interface History {
        /**
         * @en Workout start time
         * @zh 运动开始时间
         */
        startTime: number
        /**
         * @en Duration of workout in seconds
         * @zh 时长，单位秒
         */
        duration: number
      }
    }

    namespace getUserHrZoneSettings {
      /**
       * @output
       */
      interface HrZoneSettings {
        /**
         * @en Heart rate zone type, 0: by heart rate reserve, 1: by maximum heart rate
         * @zh 心率区间类型，0: 按储备心率，1: 按最大心率
         */
        type: number
        /**
         * @en Resting heart rate value
         * @zh 静息心率值
         */
        rest: number
        /**
         * @en Heart rate zone value array with 6 values, corresponding to: Ligit, Intensive, Aerobic, Anaerobic, VO2 max and maximum heart rate
         * @zh 心率区间值数组，含 6 个数值，依次对应：热身放松、脂肪燃烧、心肺强化、耐力强化、无氧极限和最大心率
         */
        range: number[]
      }
    }

    namespace getWorkoutTrackNavInfo {
      /**
       * @output
       */
      interface WorkoutTrackNavInfo {
        /**
         * @en Data update status, true: need update, false: no need to update
         * @zh 数据更新状态，true: 需更新，false: 无需更新
         */
        update: number
        /**
         * @en Whether off course, true: off course, false: on course
         * @zh 是否偏航，true: 偏航，false: 未偏航
         */
        isYaw: number
        /**
         * @en Yaw angle
         * @zh 偏航夹角
         */
        yawAngle: number
        /**
         * @en Yaw distance in meters
         * @zh 偏航距离（米）
         */
        yawDistance: number
        /**
         * @en Remaining distance in meters
         * @zh 剩余距离（米）
         */
        remainDistance: number
        /**
         * @en Distance to next turn in meters
         * @zh 到下一个转弯的距离（米）
         */
        turnDistance: number
        /**
         * @en The direction of the next turn, refer to `TURN_TYPE` for value meanings
         * @zh 下一个转弯的方向，值含义参考 `TURN_TYPE`
         */
        turnType: number
      }

      /**
       * @output
       * @enum
       */
      interface TURN_TYPE {
        /**
         * @en Turn right forward
         * @zh 右前转
         */
        1: number
        /**
         * @en Turn right
         * @zh 右转
         */
        2: number
        /**
         * @en Turn right backward
         * @zh 右后转
         */
        3: number
        /**
         * @en U-turn to the right
         * @zh 向右掉头
         */
        4: number
        /**
         * @en U-turn
         * @zh 掉头
         */
        5: number
        /**
         * @en U-turn to the left
         * @zh 向左掉头
         */
        6: number
        /**
         * @en Turn left backward
         * @zh 左后转
         */
        7: number
        /**
         * @en Turn left
         * @zh 左转
         */
        8: number
        /**
         * @en Turn left forward
         * @zh 左前转
         */
        9: number
      }
    }
  }

  /**
   * @en Workout Sensor
   * @zh 运动传感器
   * @permissionCode data:user.hd.workout
   * @version 3.0
   * @example
   * ```js
   * import { Workout } from '@zos/sensor'
   *
   * const workout = new Workout()
   *
   * const status = workout.getStatus()
   * const history = workout.getHistory()
   *
   * const hrZoneSettings = workout.getUserHrZoneSettings()
   * // {"type":0,"rest":83,"range":[129,138,147,157,166,175]}
   * // {"type":1,"rest":70,"range":[90,108,126,144,162,181]}
   *
   * const trackNavInfo = workout.getWorkoutTrackNavInfo()
   *
   * ```
   */
  class Workout {
    /**
     * @en Get altitude value in meters
     * @zh 获取运动状态
     */
    getStatus(): Workout.getStatus.Status
    /**
     * @en Get the duration of the workout record
     * @zh 获取运动记录时长
     */
    getHistory(): Array<Workout.getHistory.History>
    /**
     * @en Get user heart rate zone settings
     * @zh 获取用户运动心率区间设置
     * @version 4.2
     */
    getUserHrZoneSettings(): Workout.getUserHrZoneSettings.HrZoneSettings
    /**
     * @en Get workout track navigation information, returns navigation info object when navigation is enabled, returns `undefined` when navigation is not enabled
     * @zh 获取运动中轨迹导航信息，开启导航时返回导航信息对象，未开启导航时返回 `undefined`
     * @version 4.2
     */
    getWorkoutTrackNavInfo(): Workout.getWorkoutTrackNavInfo.WorkoutTrackNavInfo | undefined
  }
  namespace WorldClock {
    namespace getInfo {
      /**
       * @output
       */
      interface WorldClockInfo {
        /**
         * @en City Name
         * @zh 城市名
         */
        city: string
        /**
         * @en City code, e.g. San Francisco `SFO`
         * @zh 城市代号，如旧金山 `SFO`
         */
        cityCode: string
        /**
         * @en Hour
         * @zh 小时
         */
        hour: number
        /**
         * @en Minute
         * @zh 分钟
         */
        minute: number
        /**
         * @en Time Zone hours
         * @zh 时区小时
         */
        timeZoneHour: number
        /**
         * @en Time zone minutes
         * @zh 时区分钟
         */
        timeZoneMinute: number
      }
    }
  }

  /**
   * @en World Clock Sensor
   * @zh 世界时钟传感器
   * @version 3.0
   * @example
   * ```js
   * import { WorldClock } from '@zos/sensor'
   *
   * const worldClock = new WorldClock()
   * const worldClockCount = worldClock.getCount()
   *
   * for (let i = 0; i < worldClockCount; i++) {
   *   const worldClockInfo = worldClock.getInfo(i)
   *   console.log(worldClockInfo.city)
   *   console.log(worldClockInfo.cityCode)
   *   console.log(worldClockInfo.hour)
   *   console.log(worldClockInfo.minute)
   *   console.log(worldClockInfo.timeZoneHour)
   *   console.log(worldClockInfo.timeZoneMinute)
   * }
   *
   * // When not needed for use
   * worldClock.destroy()
   * ```
   */
  class WorldClock {
    /**
     * @en Get the number of configured world clocks
     * @zh 获取配置的世界时钟数量
     */
    getCount(): number
    /**
     * @en Get the configured world clock information according to the index
     * @zh 根据索引获取配置的世界时钟信息
     */
    getInfo(index: number): WorldClock.getInfo.WorldClockInfo
  }
  namespace Compass {
    namespace getDirection {
      /**
       * @output
       * @enum
       */
      interface direction {
        /**
         * @en North
         * @zh 北
         */
        N: string
        /**
         * @en Northeast
         * @zh 东北
         */
        NE: string
        /**
         * @en East
         * @zh 东
         */
        E: string
        /**
         * @en Southeast
         * @zh 东南
         */
        SE: string
        /**
         * @en South
         * @zh 南
         */
        S: string
        /**
         * @en Southwest
         * @zh 西南
         */
        SW: string
        /**
         * @en West
         * @zh 西
         */
        W: string
        /**
         * @en Northwest
         * @zh 西北
         */
        NW: string
      }
    }
  }

  /**
   * @en compass
   * @zh 指南针
   * @permissionCode device:os.compass
   * @version 3.0
   * @example
   * ```js
   * import { Compass } from '@zos/sensor'
   *
   * const compass = new Compass()
   *
   * const callback = () => {
   *   if (compass.getStatus()) {
   *     console.log(compass.getDirection())
   *     console.log(compass.getDirectionAngle())
   *   }
   * }
   * compass.onChange(callback)
   * compass.start()
   *
   * // When not needed for use
   * compass.offChange()
   * compass.stop()
   * ```
   */
  class Compass {
    /**
     * @en Start listening to compass data
     * @zh 开始监听指南针数据
     */
    start(): void
    /**
     * @en Stop listening to compass data
     * @zh 停止监听指南针数据
     */
    stop(): void
    /**
     * @en Get the compass calibration status, `true` means calibrated
     * @zh 获取指南针校准状态，`true` 代表已校准
     */
    getStatus(): boolean
    /**
     * @en Get the direction of the current watch's 12-point scale, divided into eight directions, refer to `direction`
     * @zh 获取当前手表 12 点刻度的方向指向，一共分为八个方向，参考 `direction`
     */
    getDirection(): string
    /**
     * @en Get the current direction angle, the clockwise rotation angle of the watch's 12 o'clock scale direction relative to due north, takes the values 0 - 360, if the compass is not calibrated, returns the `INVALID` string
     * @zh 获取当前方向角，手表 12 点刻度方向相对正北方向的顺时针旋转角度，取值 0 - 360，如果指南针未校准，返回 `INVALID` 字符串
     */
    getDirectionAngle(): number | 'INVALID'
    /**
     * @en Register the compass direction change event listener callback function
     * @zh 注册指南针方向变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel the compass direction change event listener callback function
     * @zh 取消指南针方向变化事件监听回调函数
     */
    offChange(callback: () => void): void
    /**
     * @en Set the mode of trigger frequency, `mode` value reference frequency mode constant
     * @zh 设置触发频率的模式，`mode` 值参考频率模式常量
     * @constants freq_mode
     * @version 4.0
     */
    setFreqMode(mode: number): void
    /**
     * @en Get the mode of trigger frequency, result value reference frequency mode constant
     * @zh 获取触发频率模式，结果值参考频率模式常量
     * @constants freq_mode
     * @version 4.0
     */
    getFreqMode(): number
  }
  namespace Gyroscope {
    namespace getCurrent {
      /**
       * @output
       */
      interface Result {
        /**
         * @en Angular velocity of x-axis in DPS, degrees per second
         * @zh x 轴的角速度，单位 DPS，度数/秒
         */
        x: number
        /**
         * @en Angular velocity of y-axis in DPS, degrees per second
         * @zh y 轴的角速度，单位 DPS，度数/秒
         */
        y: number
        /**
         * @en Angular velocity of z-axis in DPS, degrees per second
         * @zh z 轴的角速度，单位 DPS，度数/秒
         */
        z: number
      }
    }
  }

  /**
   * @en Gyroscope. Measuring the angular velocity of the device rotating along three orthogonal axes (x, y, z), the x and y axes are parallel to the screen, the positive direction refers to the figure, the z axis is perpendicular to the device's screen, the positive direction points upward, and the direction of the rotational angular velocity is determined using the [Right-hand rule](https://en.wikipedia.org/wiki/Right-hand_rule). The direction of the rotation arrow in the figure is the positive direction
   * @zh 陀螺仪。测量设备沿三个正交轴（x,y,z）旋转的角速度，x、y 轴与屏幕平行，正方向参考图示，z 轴垂直于设备的屏幕，正方向指向上方，旋转角速度的方向使用[右手定则](https://en.wikipedia.org/wiki/Right-hand_rule)来确定，图示旋转箭头方向为正方向
   * @permissionCode device:os.gyroscope
   * @version 3.0
   * @img https://img-cdn.zepp.com/20231219/4ede3747e830cb5adf0cfaa79ba59e0a.jpeg
   * @example
   * ```js
   * import { Gyroscope, FREQ_MODE_LOW } from '@zos/sensor'
   *
   * const gyroscope = new Gyroscope()
   *
   * const callback = () => {
   *   console.log(gyroscope.getCurrent())
   * }
   * gyroscope.onChange(callback)
   * gyroscope.setFreqMode(FREQ_MODE_LOW)
   * gyroscope.start()
   *
   * // When not needed for use
   * gyroscope.offChange()
   * gyroscope.stop()
   * ```
   */
  class Gyroscope {
    /**
     * @en Start listening to gyroscope data
     * @zh 开始监听陀螺仪数据
     */
    start(): void
    /**
     * @en Stop listening to gyroscope data
     * @zh 停止监听陀螺仪数据
     */
    stop(): void
    /**
     * @en Get current gyroscope data
     * @zh 获取当前陀螺仪数据
     */
    getCurrent(): Gyroscope.getCurrent.Result
    /**
     * @en Register the gyroscope data change event listener callback function
     * @zh 注册陀螺仪数据变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel the gyroscope data change event listener callback function
     * @zh 取消陀螺仪数据变化事件监听回调函数
     */
    offChange(callback: () => void): void
    /**
     * @en Set the mode of trigger frequency, `mode` value reference frequency mode constant
     * @zh 设置触发频率的模式，`mode` 值参考频率模式常量
     * @constants freq_mode
     * @version 3.0
     */
    setFreqMode(mode: number): void
    /**
     * @en Get the mode of trigger frequency, result value reference frequency mode constant
     * @zh 获取触发频率模式，结果值参考频率模式常量
     * @constants freq_mode
     * @version 3.0
     */
    getFreqMode(): number
  }
  namespace Accelerometer {
    namespace getCurrent {
      /**
       * @output
       */
      interface Result {
        /**
         * @en Acceleration of x-axis in cm/s^2
         * @zh x 轴的加速度，单位 cm/s^2
         */
        x: number
        /**
         * @en Acceleration of y-axis in cm/s^2
         * @zh y 轴的加速度，单位 cm/s^2
         */
        y: number
        /**
         * @en Acceleration of z-axis in cm/s^2
         * @zh z 轴的加速度，单位 cm/s^2
         */
        z: number
      }
    }
  }

  /**
   * @en accelerometer. Measure the acceleration of the device along three orthogonal axes (x, y, z). The x and y axes are parallel to the screen, with the positive direction referring to the diagram. The z-axis is perpendicular to the device's screen, with the positive direction pointing upward
   * @zh 加速度传感器。沿三个正交轴（x,y,z）测量设备的加速度，x、y 轴与屏幕平行，正方向参考图示，z 轴垂直于设备的屏幕，正方向指向上方
   * @img https://img-cdn.zepp.com/20231219/04be57a185e1632a0467ea8d094f55da.jpeg
   * @permissionCode device:os.accelerometer
   * @version 3.0
   * @example
   * ```js
   * import { Accelerometer, FREQ_MODE_NORMAL } from '@zos/sensor'
   *
   * const accelerometer = new Accelerometer()
   *
   * const callback = () => {
   *   console.log(accelerometer.getCurrent())
   * }
   * accelerometer.onChange(callback)
   * accelerometer.setFreqMode(FREQ_MODE_NORMAL)
   * accelerometer.start()
   *
   * // When not needed for use
   * accelerometer.offChange()
   * accelerometer.stop()
   * ```
   */
  class Accelerometer {
    /**
     * @en Start listening to accelerometer data
     * @zh 开始监听加速度传感器数据
     */
    start(): void
    /**
     * @en Stop listening to accelerometer data
     * @zh 停止监听加速度传感器数据
     */
    stop(): void
    /**
     * @en Get current accelerometer data
     * @zh 获取当前加速度传感器数据
     */
    getCurrent(): Accelerometer.getCurrent.Result
    /**
     * @en Register the accelerometer data change event listener callback function
     * @zh 注册加速度传感器数据变化事件监听回调函数
     */
    onChange(callback: () => void): void
    /**
     * @en Cancel the accelerometer data change event listener callback function
     * @zh 取消加速度传感器数据变化事件监听回调函数
     */
    offChange(callback: () => void): void
    /**
     * @en Set the mode of trigger frequency, `mode` value reference frequency mode constant
     * @zh 设置触发频率的模式，`mode` 值参考频率模式常量
     * @constants freq_mode
     * @version 3.0
     */
    setFreqMode(mode: number): void
    /**
     * @en Get the mode of trigger frequency, result value reference frequency mode constant
     * @zh 获取触发频率模式，结果值参考频率模式常量
     * @constants freq_mode
     * @version 3.0
     */
    getFreqMode(): number
  }
  /**
   * @en Screen Status Sensor
   * @zh 屏幕状态传感器
   * @version 3.0
   * @example
   * ```js
   * import { Screen } from '@zos/sensor'
   *
   * const screen = new Screen()
   * const status = screen.getStatus()
   * const callback = () => {
   *   console.log(screen.getStatus())
   * }
   *
   * screen.onChange(callback)
   *
   * // When not needed for use
   * screen.offChange(callback)
   * ```
   */
  class Screen {
    /**
     * @en Get the screen status, `1`: On, `2`: Off
     * @zh 获取屏幕状态，`1`: 亮屏、`2`: 息屏
     */
    getStatus(): number
    /**
     * @en Whether to turn on the AOD rest screen display function
     * @zh 是否开启 AOD 息屏显示功能
     */
    getAodMode(): boolean
    /**
     * @en Light intensity, unit lux
     * @zh 光照强度，单位 lux
     * @version 3.6
     */
    getLight(): number
    /**
     * @en Register a callback function to listen to screen display change events
     * @zh 注册屏幕显示变化事件监听回调函数
     */
    onChange(callback: (status: number) => void): void
    /**
     * @en Cancel a callback function to listen to screen display change events
     * @zh 取消屏幕显示变化事件监听回调函数
     */
    offChange(callback: (status: number) => void): void
  }
  namespace BodyTemperature {
    namespace getCurrent {
      /**
       * @output
       */
      interface Result {
        /**
         * @en Sleep stage type, refer to the constants returned by `getStageConstantObj` for the meaning of the value
         * @zh 温度测量值
         */
        current: number
        /**
         * @en Sleep stage type, refer to the constants returned by `getStageConstantObj` for the meaning of the value
         * @zh 上次测量时间
         */
        time: number
      }
    }
  }

  /**
   * @en Body surface temperature sensor
   * @zh 体表温度传感器
   * @permissionCode data:user.hd.body_temp
   * @version 3.0
   * @example
   * ```js
   * import { BodyTemperature } from '@zos/sensor'
   *
   * const bodyTemperature = new BodyTemperature()
   *
   * bodyTemperature.getCurrent()
   * ```
   */
  class BodyTemperature {
    /**
     * @en Get the latest measurement of body surface temperature
     * @zh 获取最近一次体表温度的测量值
     */
    getCurrent(): BodyTemperature.getCurrent.Result
    /**
     * @en Get the body surface temperature measurement values for 24 hours a day. The array length is 24 * 60 / 5 = 288, with an average measurement value every five minutes. The unit is Celsius, such as `35.2`. Data without measurement values is `-1000`
     * @zh 获取全天 24 小时的体表温度测量值，数组长度为 24 * 60 / 5 = 288，每五分钟一个的平均测量值，单位摄氏度，如 `35.2`，无测量值的数据为 `-1000`
     */
    getToday(): Array<number>
  }
  namespace SystemSounds {
    namespace getSourceType {
      interface Type {
        /**
         * @en Alarm clock reminder
         * @zh 闹钟提醒
         */
        ALARM: number
        /**
         * @en Notification sound when receiving text messages or emails
         * @zh 收到短信、邮件时，消息通知声
         */
        MESSAGE: number
        /**
         * @en TingTing sound
         * @zh TingTing 声
         */
        REGULAR: number
        /**
         * @en Goals achieved
         * @zh 目标达成
         */
        ACHIEVE: number
        /**
         * @en Camera shutter
         * @zh 照相机快门
         */
        CAMERA: number
        /**
         * @en Health data measurement abnormalities (high values)
         * @zh 健康数据测量异常（高值）情况
         */
        ABN_HIGH: number
        /**
         * @en Health data measurement abnormalities (low values)
         * @zh 健康数据测量异常（低值）情况
         */
        ABN_LOW: number
        /**
         * @en SOS for help
         * @zh SOS 求救
         */
        SOS: number
      }
    }
  }

  /**
   * @en System Sounds
   * @zh 系统声音
   * @version 3.6
   * @example
   * ```js
   * import { SystemSounds } from '@zos/sensor'
   *
   * const systemSounds = new SystemSounds()
   * const alarmType = systemSounds.getSourceType().ALARM
   *
   * if (systemSounds.getEnabled()) {
   *   systemSounds.start(alarmType)
   * }
   * ```
   */
  class SystemSounds {
    /**
     * @en Get whether the system ringtone function is turned on, and it can only be played after it is turned on
     * @zh 获取系统铃声功能是否开启，开启后才可以播放
     */
    getEnabled(): boolean
    /**
     * @en Get built-in system ringtone type
     * @zh 获取内置系统铃声类型
     */
    getSourceType(): SystemSounds.getSourceType.Type
    /**
     * @en Start playing the sound, you can pass in `type` to specify the ringtone type, `repeatCount` is the number of audio repetitions, default is `0`, do not repeat playback
     * @zh 开始播放声音，可以传入 `type` 指定铃声类型，`repeatCount` 为音频重复次数，默认 `0`，不重复播放
     */
    start(sourceType: number, repeatCount: 0): void
    /**
     * @en Stop sound playback
     * @zh 停止声音播放
     */
    stop(): void
  }
  namespace Buzzer {
    namespace getSourceType {
      /**
       * @output
       * @enum
       */
      interface Type {
        /**
         * @en Alarm clock
         * @zh 闹钟
         */
        ALARM: number
        /**
         * @en Reminder 1
         * @zh 提醒 1
         */
        REMIND_1: number
        /**
         * @en Reminder 2
         * @zh 提醒 2
         */
        REMIND_2: number
        /**
         * @en Operation
         * @zh 操作
         */
        OPERATE: number
        /**
         * @en Success
         * @zh 成功
         */
        SUCCESS: number
        /**
         * @en Failure
         * @zh 失败
         */
        FAILURE: number
      }
    }
  }

  /**
   * @en Buzzer
   * @zh 蜂鸣器
   * @version 3.6
   * @example
   * ```js
   * import { createWidget, widget, prop, align, text_style } from "@zos/ui";
   * import { Buzzer } from "@zos/sensor";
   * import { px } from "@zos/utils";
   *
   * const sceneList = ['ALARM', 'REMIND_1', 'REMIND_2', 'OPERATE', 'SUCCESS', 'FAILURE']
   *
   * Page({
   *   state: {
   *     pageName: "BUZZER",
   *     currentIndex: 0
   *   },
   *   build() {
   *     const buzzer = new Buzzer();
   *     const sceneText = createWidget(widget.TEXT, {
   *       x: px(0),
   *       y: px(120),
   *       w: px(480),
   *       h: px(46),
   *       color: 0xffffff,
   *       text_size: px(20),
   *       align_h: align.CENTER_H,
   *       align_v: align.CENTER_V,
   *       text_style: text_style.NONE,
   *       text: `${sceneList[this.state.currentIndex]}`,
   *     });
   *
   *     const startBuzzer = () => {
   *       const alarmType = buzzer.getSourceType()[sceneList[this.state.currentIndex]];
   *
   *       if (buzzer.isEnabled()) {
   *         buzzer.start(alarmType);
   *       }
   *
   *       this.state.currentIndex = (this.state.currentIndex + 1) % sceneList.length
   *       sceneText.setProperty(prop.MORE, {
   *         text: `BUZZER: ${sceneList[this.state.currentIndex]}`,
   *       });
   *     };
   *
   *     createWidget(widget.BUTTON, {
   *       x: px(80),
   *       y: px(300),
   *       w: px(300),
   *       h: px(60),
   *       radius: px(12),
   *       normal_color: 0xfc6950,
   *       press_color: 0xfeb4a8,
   *       text: "START BUZZER",
   *       click_func: startBuzzer,
   *     });
   *   },
   * });
   */
  class Buzzer {
    /**
     * @en Get whether other options in the system buzzer scene settings are turned on, Settings - > Sound & Vibration - > Buzzer Scene - > Other
     * @zh 获取系统蜂鸣器场景设置中的其他选项是否开启，设置 -> 声音与震动 -> 蜂鸣场景 -> 其他
     */
    isEnabled(): boolean
    /**
     * @en Get buzzer mode
     * @zh 获取蜂鸣模式
     */
    getSourceType(): Buzzer.getSourceType.Type
    /**
     * @en Get buzzer strength, '0' - weak, '1' - medium, '2' - high
     * @zh 获取蜂鸣器强度，`0` - weak，`1` - medium，`2` - high
     */
    getStrength(): number
    /**
     * @en Start beeping, you can pass in `type` to specify the built-in beeping mode of the system,`repeatCount` is the number of repetitions, default `0`, do not repeat
     * @zh 开始蜂鸣，可以传入 `type` 指定系统内置蜂鸣模式，`repeatCount` 为重复次数，默认 `0`，不重复
     */
    start(type: number, repeatCount: 0): void
    /**
     * @en Stop buzzer
     * @zh 停止蜂鸣器
     */
    stop(): void
  }
  namespace checkSensor {
    /**
     * @en Sensor, such as checking if the positioning sensor is available, pass in the `Geolocation` sensor construction function
     * @zh 传感器，比如检查定位传感器是否可用，传入 `Geolocation` 传感器构造函数
     */
    type Sensor = object

    /**
     * @en `true` - auto-brightness is set to on, `false` - auto-brightness is set to off
     * @zh `true` - 传感器在当前设备可用，`false` - 传感器在当前设备不可用
     */
    type Result = boolean
  }

  /**
   * @en Check the availability of sensors on the current device
   * @zh 检查传感器在当前设备的可用性
   * @version 3.0
   * @example
   * ```js
   * import { checkSensor, Geolocation } from '@zos/sensor'
   *
   * const result = checkSensor(Geolocation)
   * let geolocation = null
   *
   * if (result) {
   *   geolocation = new Geolocation()
   * }
   * ```
   */
  function checkSensor(sensor: checkSensor.Sensor): checkSensor.Result
}
