declare module '@zos/notification' {

  namespace notify {
    interface Option {
      /**
       * @en Notice title text
       * @zh 通知标题文本
       */
      title: string
      /**
       * @en Text of the notice
       * @zh 通知内容文本
       */
      content: string
      /**
       * @en Custom button arrays
       * @zh 定制按钮数组
       */
      actions: Array<Action>
      /**
       * @defaultValue 0
       * @en Specify the vibration effect when the notification center pops up, 0 - default, 1 - beep, 2 - birdsong, 3 - drumbeat, 4 - gentle, 5 - buzz, Only effective for linear motors
       * @zh 指定通知中心弹出通知时的振动效果, 0 - 默认、1 - 蜂鸣、2 - 鸟鸣、3 - 鼓点、4 - 轻柔、5 - 加急，仅对线性马达生效
       */
      vibrate?: number
    }

    interface Action {
      /**
       * @en Button Text
       * @zh 按钮文本
       */
      text: string
      /**
       * @en The App Service file to be started
       * @zh 按钮点击要启动的「设备应用服务」文件
       */
      file: string
      /**
       * @en Parameters passed in during file loading
       * @zh 文件加载时传入的参数
       */
      param?: string
    }

    /**
     * @en The result of the notification delivery, returns `0` for delivery failure, the rest of the result indicates the ID of the notification
     * @zh 通知发送的结果，返回 `0` 代表发送失败，其余结果表明通知的 ID 标识
     */
    type Result = number
  }

  /**
   * @en Send notifications to the Watch Notification Center
   * @zh 发送通知到手表通知中心
   * @permissionCode device:os.notification
   * @version 3.0
   * @example
   * ```js
   * import { notify } from '@zos/notification'
   * ```
   */
  function notify(option: notify.Option): notify.Result
  /**
   * @en Delete the notification message identified by the specified ID in the notification center
   * @zh 删除通知中心里指定 ID 标识的通知信息
   * @permissionCode device:os.notification
   * @version 3.0
   * @example
   * ```js
   * import { cancel } from '@zos/notification'
   *
   * cancel(alarmID)
   * ```
   */
  function cancel(alarmId: number | Array<number>): void
  /**
   * @en Get the notification IDs that have been sent by the current app and are still in the notification center
   * @zh 获取当前应用已发送的还留在通知中心里通知 ID
   * @permissionCode device:os.notification
   * @version 3.0
   * @example
   * ```js
   * import { getAllNotifications } from '@zos/notification'
   *
   * getAllNotifications()
   * ```
   */
  function getAllNotifications(): Array<number>
}
