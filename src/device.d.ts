declare module '@zos/device' {

  /**
   * @en Square Screen
   * @zh 方形屏幕
   */
  const SCREEN_SHAPE_SQUARE: number
  /**
   * @en Round Screen
   * @zh 圆形屏幕
   */
  const SCREEN_SHAPE_ROUND: number
  namespace getDiskInfo {
    /**
     * @output
     */
    interface Result {
      /**
       * @en Total Space in bytes
       * @zh 总空间（字节）
       */
      total: number
      /**
       * @en Available Space in bytes
       * @zh 可用空间（字节）
       */
      free: number
      /**
       * @en Space occupied by Mini Programs in bytes
       * @zh 小程序占用空间（字节）
       */
      app: number
      /**
       * @en Space occupied by watchfaces in bytes
       * @zh 表盘占用空间（字节）
       */
      watchface: number
      /**
       * @en Space occupied by musics in bytes
       * @zh 音乐占用空间（字节）
       */
      music: number
      /**
       * @en Space occupied by system in bytes
       * @zh 系统占用空间（字节）
       */
      system: number
    }
  }

  /**
   * @en Gets disk information
   * @zh 获取磁盘信息
   * @example
   * ```js
   * import { getDiskInfo } from '@zos/device'
   *
   * const { total } = getDiskInfo()
   * console.log(total)
   * ```
   */
  function getDiskInfo(): getDiskInfo.Result
  namespace getDeviceInfo {
    /**
     * @output
     */
    interface Result {
      /**
       * @en Device screen width
       * @zh 设备屏幕宽度
       */
      width: number
      /**
       * @en Device screen height
       * @zh 设备屏幕高度
       */
      height: number
      /**
       * @en Screen shape, value refer to screen shape constants
       * @zh 屏幕形状，值参考屏幕形状常量
       */
      screenShape: number
      /**
       * @en Device name
       * @zh 设备名称
       */
      deviceName: number
      /**
       * @en Number of keys
       * @zh 按键数目
       */
      keyNumber: number
      /**
       * @en Device Plain Numeric Designators
       * @zh 设备纯数字代号
       */
      deviceSource: number
      /**
       * @en Device physical button type
       * @zh 设备实体按键类型
       */
      keyType: string
      /**
       * @en Device color identification
       * @zh 设备颜色标识
       */
      deviceColor: number
      /**
       * @en Device unique identifier, 32 bytes in length
       * @zh 设备唯一标识，长度 32 字节
       * @version 4.2
       */
      uuid: string
    }
  }

  /**
   * @en Gets device information
   * @zh 获取设备信息
   * @constants screenShape
   * @permissionCode data:os.device.info
   * @example
   * ```js
   * import { getDeviceInfo, SCREEN_SHAPE_SQUARE } from '@zos/device'
   *
   * const { width, screenShape } = getDeviceInfo()
   * console.log(width)
   *
   * if (screenShape === SCREEN_SHAPE_SQUARE) {
   *   console.log('Square Screen')
   * }
   * ```
   */
  function getDeviceInfo(): getDeviceInfo.Result
}
