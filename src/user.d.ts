declare module '@zos/user' {

  /**
   * @en Male
   * @zh 男性
   */
  const GENDER_MALE: number
  /**
   * @en Female
   * @zh 女性
   */
  const GENDER_FEMALE: number
  /**
   * @en User not specified
   * @zh 用户未指定
   */
  const GENDER_UNSPECIFIED: number
  namespace getProfile {
    /**
     * @output
     */
    interface Result {
      /**
       * @en User age, `0` if no data
       * @zh 用户年龄，无数据时为 `0`
       */
      age: number
      /**
       * @en User height, `0` if no data
       * @zh 用户身高，无数据时为 `0`
       */
      height: number
      /**
       * @en User weight, `0` if no data
       * @zh 用户体重，无数据时为 `0`
       */
      weight: number
      /**
       * @en User gender, value refer to user gender constants
       * @zh 用户性别，值参考用户性别常量
       */
      gender: number
      /**
       * @en User's nickname
       * @zh 用户昵称
       */
      nickName: string
      /**
       * @en ISO code of the country or region where the user account is registered
       * @zh 用户账号注册国家/地区 ISO 代码
       */
      region: string
    }
  }

  /**
   * @en Get user information
   * @zh 获取用户信息
   * @constants gender
   * @permissionCode data:user.info
   * @example
   * ```js
   * import { getProfile, GENDER_MALE } from '@zos/user'
   *
   * const { age, gender } = getProfile()
   * console.log(age)
   *
   * if (gender === GENDER_MALE) {
   *   console.log('male')
   * }
   * ```
   */
  function getProfile(): getProfile.Result
  namespace addHealthData {
    interface Option {
      /**
       * @en Weight, in g
       * @zh 体重，单位 g
       */
      weight: number
      /**
       * @en 100 times the value of BMI
       * @zh BMI 数值的 100 倍
       */
      bmi: number
    }

    type Result = boolean
  }

  /**
   * @en Set user health data information
   * @zh 设置用户健康数据信息
   * @permissionCode data:user.health
   * @version 3.0
   * @example
   * ```js
   * import { addHealthData } from '@zos/user'
   *
   * addHealthData({
   *   weight: 65,
   *   bmi: 1900
   * })
   * ```
   */
  function addHealthData(option: addHealthData.Option): addHealthData.Result
}
