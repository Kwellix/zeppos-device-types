declare module '@zos/app-access' {

  namespace getSportData {
    interface Options {
      /**
       * @en Sports type, refer to the value of `SportType`
       * @zh 运动类型，取值参考 `SportType` 的值
       */
      type: string
    }

    /**
     * @output
     */
    interface CallbackResult {
      /**
       * @en Result status code, `0` means success, non- `0` means failure
       * @zh 结果状态码，`0` 表示成功，非 `0` 表示失败
       */
      code: number
      /**
       * @en Sports data, return value type is string, needs to be parsed using `JSON.parse`, the parsed type is `Array<object>`, the specific type of `object` can be referred to the `SportType` type description below, and the return value corresponding to each `type` is different
       * @zh 运动数据，返回值类型为字符串，需要使用 `JSON.parse` 进行解析，解析完的类型是 `Array<object>`，`object` 具体类型参考下文 `SportType` 类型说明，每一种 `type` 对应的返回值都不同
       */
      data: string
    }

    /**
     * @en If it returns `true`, it means the call was successful, otherwise the call failed
     * @zh 如果返回 `true` 说明调用成功，否则调用失败
     */
    type Result = boolean

    /**
     * @output
     * @enum
     */
    interface SportType {
      /**
       * @en Speed, example return value `{"speed": "9.99", "name": "Speed"}`
       * @zh 速度，示例返回值 `{"speed":"9.99", "name": "Speed"}`
       */
      speed: object
      /**
       * @en Average speed, example return value `{"avg_speed": "9.99", "name": "Average Speed"}`
       * @zh 平均速度，示例返回值 `{"avg_speed":"9.99", "name": "Average Speed"}`
       */
      avg_speed: object
      /**
       * @en Pace, example return value `{"avg_pace": "1' 12" "," name ":" Average Pace "}`
       * @zh 配速，示例返回值 `{"avg_pace":"1'12''", "name": "Average Pace"}`
       */
      pace: object
      /**
       * @en Average pace, example return value `{"avg_pace": "1'12'", "name": "Average Pace"}`
       * @zh 平均配速，示例返回值 `{"avg_pace":"1'12''", "name": "Average Pace"}`
       */
      avg_pace: object
      /**
       * @en Distance, example return value `{"distance": "9.99", "name": "Distance"}`
       * @zh 距离，示例返回值 `{"distance":"9.99", "name": "Distance"}`
       */
      distance: object
      /**
       * @en Time duration of workout, example return value `{"duration":"1:15:15", "name": "Duration"}`
       * @zh 运动用时，示例返回值 `{"duration":"1:15:15", "name": "Duration"}`
       */
      duration: object
      /**
       * @en Consumption, example return value `{"calories": "9.99", "name": "Calories"}`
       * @zh 消耗，示例返回值 `{"calories":"9.99", "name": "Calories"}`
       */
      calories: object
      /**
       * @en Cadence/cadence, example return value `{"cadence": "9.99", "name": "Cadence"}`
       * @zh 步频/踏频，示例返回值 `{"cadence":"9.99", "name": "Cadence"}`
       */
      cadence: object
      /**
       * @en Average cadence, example return value `{"avg_cadence": "9.99", "name": "Average Cadence"}`
       * @zh 平均步频/踏频，示例返回值 `{"avg_cadence":"9.99", "name": "Average Cadence"}`
       */
      avg_cadence: object
      /**
       * @en Altitude, example return value `{"altitude": "9.99", "name": "Elevation"}`
       * @zh 海拔，示例返回值 `{"altitude":"9.99", "name": "Elevation"}`
       */
      altitude: object
      /**
       * @en Accumulated elevation, example return value `{"total_up_altitude": "9.99", "name": "Total Ascent"}`
       * @zh 累计上升海拔，示例返回值 `{"total_up_altitude":"9.99", "name": "Total Ascent"}`
       */
      total_up_altitude: object
      /**
       * @en Total count, example return value `{"total_count": "9.99", "name": "Total count"}`
       * @zh 总计数，示例返回值 `{"total_count":"9.99", "name": "Total count"}`
       */
      total_count: object
      /**
       * @en Vertical Speed, example return value `{"vertical_speed": "9.99", "name": "Vertical Speed"}`
       * @zh 垂直速度，示例返回值 `{"vertical_speed":"9.99", "name": "Vertical Speed"}`
       */
      vertical_speed: object
      /**
       * @en Number of downhills, example return value `{"downhill_count": "9.99", "name": "Downhills"}`
       * @zh 滑降次数，示例返回值 `{"downhill_count":"9.99", "name": "Downhills"}`
       */
      downhill_count: object
      /**
       * @en Cumulative downhill distance, example return value `{"total_downhill_distance": "9.99", "name": "Total Downhill Distance"}`
       * @zh 累计滑降距离，示例返回值 `{"total_downhill_distance":"9.99", "name": "Total Downhill Distance"}`
       */
      total_downhill_distance: object
    }
  }

  /**
   * @en By default, the system will off the screen in one page of the Mini Program, and the system will exit the Mini Program after 10s, and enter the dial page when the watch is woken up again. If `relaunch` is set to `true`, the Mini Program will reopen and enter the corresponding page when the watch is woken up again
   * @zh 获取运动实时数据
   * @version 3.6
   * @permissionCode data:user.hd.workout
   * @example
   * ```js
   * import { getSportData } from '@zos/app-access'
   *
   * const result = getSportData({
   *   type: 'distance',
   * }, (callbackResult) => {
   *   const { code, data } = callbackResult
   *   if (code === 0) {
   *     const [{ distance }] = JSON.parse(data)
   *     console.log(distance)
   *   }
   * })
   * ```
   */
  function getSportData(
    options: getSportData.Options,
    callback: (callbackResult: getSportData.CallbackResult) => void,
  ): getSportData.Result
}
