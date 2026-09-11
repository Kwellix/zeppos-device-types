declare module '@zos/interaction' {

  /**
   * @en Gesture up slide
   * @zh 手势上滑
   */
  const GESTURE_UP: number
  /**
   * @en Gesture down slide
   * @zh 手势下滑
   */
  const GESTURE_DOWN: number
  /**
   * @en Gesture left slide
   * @zh 手势左滑
   */
  const GESTURE_LEFT: number
  /**
   * @en Gesture right slide
   * @zh 手势右滑
   */
  const GESTURE_RIGHT: number
  /**
   * @en BACK KEY
   * @zh BACK 按键
   */
  const KEY_BACK: number
  /**
   * @en SELECT KEY
   * @zh SELECT 按键
   */
  const KEY_SELECT: number
  /**
   * @en HOME KEY
   * @zh HOME 按键
   */
  const KEY_HOME: number
  /**
   * @en UP KEY
   * @zh UP 按键
   */
  const KEY_UP: number
  /**
   * @en SHORTCUT KEY
   * @zh DOWN 按键
   */
  const KEY_DOWN: number
  /**
   * @en SHORTCUT KEY
   * @zh SHORTCUT 按键
   */
  const KEY_SHORTCUT: number
  /**
   * @en Key click event
   * @zh 按键点击事件
   */
  const KEY_EVENT_CLICK: number
  /**
   * @en Key long-press event
   * @zh 按键长按事件
   */
  const KEY_EVENT_LONG_PRESS: number
  /**
   * @en Key double-click event
   * @zh 按键双击事件
   */
  const KEY_EVENT_DOUBLE_CLICK: number
  /**
   * @en Key press event
   * @zh 按键按下事件，只要是按下按键就会触发，如一次 CLICK 事件一共会触发三次事件 PRESS -> RELEASE -> CLICK
   */
  const KEY_EVENT_PRESS: number
  /**
   * @en Key release event
   * @zh 按键释放事件
   */
  const KEY_EVENT_RELEASE: number
  /**
   * @en Modal Confirm button
   * @zh Modal 确认按键
   */
  const MODAL_CONFIRM: number
  /**
   * @en Modal Cancel button
   * @zh Modal 取消按键
   */
  const MODAL_CANCEL: number
  /**
   * @en Wrist lift
   * @zh 抬腕动作
   */
  const WRIST_MOTION_LIFT: number
  /**
   * @en Wrist down
   * @zh 落腕动作
   */
  const WRIST_MOTION_LOWER: number
  /**
   * @en Flip wrist movement
   * @zh 翻转手腕动作
   */
  const WRIST_MOTION_FLIP: number
  namespace showToast {
    interface Option {
      /**
       * @en Content of the prompt
       * @zh 提示的内容
       */
      content: string
    }
  }

  /**
   * @en Display Message Prompt Box
   * @zh 显示消息提示框
   * @img https://img-cdn.huami.com/20220927/d53c5278ad075cdabc9bcf4e359d3d5c.jpg
   * @example
   * ```js
   * import { showToast } from '@zos/interaction'
   *
   * showToast({
   *   content: 'hello world'
   * })
   * ```
   */
  function showToast(option: showToast.Option): void
  namespace createModal {
    interface Option {
      /**
       * @en title of Modal
       * @zh Modal 对话框的标题
       */
      content: string
      /**
       * @en Modal dialog box title, alias for `content`
       * @zh Modal 对话框的标题，`content` 的别名
       * @version 3.6
       */
      title?: string
      /**
       * @en Whether to display Modal immediately after the creation is completed
       * @zh 完成创建后是否立即显示 Modal 对话框
       * @defaultValue true
       */
      show?: boolean
      /**
       * @en Whether to display Modal immediately
       * @zh 点击确认或者取消的回调函数
       */
      onClick?: (keyObj: KeyObj) => void
      /**
       * @en Whether to automatically close the Modal dialog after clicking the Confirm or Cancel button
       * @zh 点击确认或者取消按钮后，是否自动关闭 Modal 对话框
       * @defaultValue true
       */
      autoHide?: boolean
      /**
       * @en subtitle
       * @zh 子标题
       * @version 3.6
       */
      subtitle?: string
      /**
       * @en Icon icon path
       * @zh icon 图标路径
       * @version 3.6
       */
      src?: string
      /**
       * @en text content
       * @zh 文本内容
       * @version 3.6
       */
      text?: string
      /**
       * @en text color
       * @zh 文本颜色
       * @defaultValue 0xFFFFFF
       * @version 3.6
       */
      textColor?: number
      /**
       * @en Text transparency, transparency [0-255], 0 is full transparency
       * @zh 文本透明度，透明度[0-255]，0 为全透明
       * @defaultValue 255
       * @version 3.6
       */
      textAlpha?: number
      /**
       * @en The icon path of the confirmation button
       * @zh 确认按钮的 icon 图标路径
       * @version 3.6
       */
      okButton?: string
      /**
       * @en Cancel button icon icon path
       * @zh 取消按钮的 icon 图标路径
       * @version 3.6
       */
      cancelButton?: string
      /**
       * @en Capsule button configuration, as a string array, click `type` in the returned KeyObj starting from `10`
       * @zh 胶囊按钮配置，为字符串数组，点击返回的 KeyObj 中的 `type` 从 `10` 开始
       * @version 3.6
       */
      capsuleButton?: Array<string>
    }

    /**
     * @output
     */
    interface KeyObj {
      /**
       * @en Modal key name, value reference Modal key name constants
       * @zh Modal 按键名，值参考 Modal 按键名常量
       */
      type: number
    }

    /**
     * @output
     */
    interface Modal {
      /**
       * @en Show or hide Modal
       * @zh 显示或隐藏 Modal 对话框
       */
      show: (isShow: boolean) => void
    }
  }

  /**
   * @en Create Modal prompt box
   * @zh 创建 Modal 确认提示框
   * @constants modalKey
   * @img https://img-cdn.huami.com/20220927/9a9ce61a400f089c984951ca71c6f9b0.jpg
   * @example
   * ```js
   * import { createModal, MODAL_CONFIRM } from '@zos/interaction'
   *
   * const dialog = createModal({
   *   content: 'hello world',
   *   autoHide: false,
   *   onClick: (keyObj) => {
   *     const { type } = keyObj
   *     if (type === MODAL_CONFIRM) {
   *       console.log('confirm')
   *     } else {
   *       dialog.show(false)
   *     }
   *   }
   * })
   *
   * dialog.show(true)
   * ```
   */
  function createModal(option: createModal.Option): createModal.Modal
  namespace onGesture {
    interface Option {
      /**
       * @en Gesture event callback function
       * @zh 手势事件回调函数
       */
      callback: (event: GestureEvent) => PreventDefault
    }

    /**
     * @en Gesture event name, value reference gesture event constants
     * @zh 手势事件名，值参考手势事件常量
     */
    type GestureEvent = number

    /**
     * @en Whether to skip the default gesture behavior, `true` - skip, `false` - don't skip
     * @zh 是否跳过默认手势行为，`true` - 跳过，`false` - 不跳过
     */
    type PreventDefault = boolean
  }

  /**
   * @en Listen to user gesture events, only one event is allowed to be registered, if multiple registrations will cause the last registered event to fail
   * @zh 监听用户手势事件，只允许注册一个事件，如果多次注册会导致上一次注册的事件失效
   * @constants gestureEvent
   * @example
   * ```js
   * import { onGesture, GESTURE_UP } from '@zos/interaction'
   *
   * onGesture({
   *   callback: (event) => {
   *     if (event === GESTURE_UP) {
   *       console.log('up')
   *     }
   *     return true
   *   }
   * })
   * ```
   */
  function onGesture(option: onGesture.Option): void
  function onGesture(callback: (event: onGesture.GestureEvent) => onGesture.PreventDefault): void
  /**
   * @en Cancel the `onGesture` registration to listen for user gesture events
   * @zh 取消 `onGesture` 注册的监听用户手势事件
   * @example
   * ```js
   * import { onGesture, offGesture, GESTURE_UP } from '@zos/interaction'
   *
   * const gestureCallback = (event) => {
   *   if (event === GESTURE_UP) {
   *     console.log('up')
   *   }
   *
   *   return true
   * }
   *
   * onGesture({
   *   callback: gestureCallback
   * })
   *
   * offGesture()
   * ```
   */
  function offGesture(): void
  namespace onKey {
    interface Option {
      /**
       * @en Key event callback function
       * @zh 按键事件回调函数
       */
      callback: (key: Key, event: KeyEvent) => PreventDefault
    }

    /**
     * @en Key name, value reference key name constants
     * @zh 按键名，值参考按键名常量
     */
    type Key = number

    /**
     * @en Key event name, value reference key event constants
     * @zh 按键事件名，值参考按键事件常量
     */
    type KeyEvent = number

    /**
     * @en Whether to skip the default key behavior, `true` - skip, `false` - don't skip
     * @zh 是否跳过默认按键行为，`true` - 跳过，`false` - 不跳过
     */
    type PreventDefault = boolean
  }

  /**
   * @en Listen to key events, only one event is allowed to be registered, if multiple registrations will cause the last registered event to fail
   * @zh 监听按键事件，只允许注册一个事件，如果多次注册会导致上一次注册的事件失效
   * @constants key,keyEvent
   * @example
   * ```js
   * import { onKey, KEY_UP, KEY_EVENT_CLICK } from '@zos/interaction'
   *
   * onKey({
   *   callback: (key, keyEvent) => {
   *     if (key === KEY_UP && keyEvent === KEY_EVENT_CLICK) {
   *       console.log('up click')
   *     }
   *     return true
   *   }
   * })
   * ```
   */
  function onKey(option: onKey.Option): void
  function onKey(callback: (key: onKey.Key, event: onKey.KeyEvent) => onKey.PreventDefault): void
  /**
   * @en Cancel the keystroke event registered by `onKey`.
   * @zh 取消 `onKey` 注册的监听按键事件
   * @example
   * ```js
   * import { onKey, offKey, KEY_UP, KEY_EVENT_CLICK } from '@zos/interaction'
   *
   * const keyCallback = (key, keyEvent) => {
   *   if (key === KEY_UP && keyEvent === KEY_EVENT_CLICK) {
   *     console.log('up click')
   *   }
   *   return true
   * }
   *
   * onKey({
   *   callback: keyCallback
   * })
   *
   * offKey()
   * ```
   */
  function offKey(): void
  namespace onDigitalCrown {
    interface Option {
      /**
       * @en Digital crown rotation event callback function
       * @zh 数字表冠旋转事件回调函数
       */
      callback: (key: Key, degree: Degree) => void
    }

    /**
     * @en Key name, value reference key name constants, currently only `KEY_HOME` is supported
     * @zh 按键名，值参考按键名常量，目前仅支持 `KEY_HOME`
     */
    type Key = number

    /**
     * @en The rotation angle, positive number is counterclockwise rotation, negative number is clockwise rotation. The value is the angle of rotation, the faster the rotation speed, the larger the absolute value
     * @zh 旋转角度，正数为逆时针旋转，负数为顺时针旋转。数值为转过的角度，旋转速度越快，绝对值越大
     */
    type Degree = number
  }

  /**
   * @en Listen to the digital crown rotation event, only one event is allowed to be registered, if multiple registrations will cause the last registered event to fail
   * @zh 监听数字表冠旋转事件，只允许注册一个事件，如果多次注册会导致上一次注册的事件失效
   * @constants key
   * @example
   * ```js
   * import { onDigitalCrown, KEY_HOME } from '@zos/interaction'
   *
   * onDigitalCrown({
   *   callback: (key, degree) => {
   *     if (key === KEY_HOME) {
   *       console.log(degree)
   *     }
   *   }
   * })
   * ```
   */
  function onDigitalCrown(option: onDigitalCrown.Option): void
  function onDigitalCrown(
    callback: (key: onDigitalCrown.Key, degree: onDigitalCrown.Degree) => void,
  ): void
  /**
   * @en Cancel the `onDigitalCrown` registration to listen for digital crown rotation events
   * @zh 取消 `onDigitalCrown` 注册的监听数字表冠旋转事件
   * @example
   * ```js
   * import { onDigitalCrown, offDigitalCrown, KEY_HOME } from '@zos/interaction'
   *
   * const callback = (key, degree) => {
   *   if (key === KEY_HOME) {
   *     console.log(degree)
   *   }
   * }
   *
   * onDigitalCrown({
   *   callback
   * })
   *
   * offDigitalCrown()
   * ```
   */
  function offDigitalCrown(): void
  namespace onWristMotion {
    interface Option {
      /**
       * @en Digital crown rotation event callback function
       * @zh 手部动作事件回调函数
       */
      callback: (params: Params) => void
    }

    /**
     * @output
     */
    interface Params {
      /**
       * @en Action type, 0 - palm covering, 3 - wrist event
       * @zh 动作类型，0 - 覆掌，3 - 腕部事件
       * @version 3.6
       */
      type: number
      /**
       * @en Action code, value reference hand motion constant
       * @zh 动作代号，值参考手部动作常量
       */
      motion: number
    }
  }

  /**
   * @en Monitoring hand movement events
   * @zh 监听手部动作事件
   * @version 3.0
   * @constants motion
   * @example
   * ```js
   * import { onWristMotion, WRIST_MOTION_LIFT } from '@zos/interaction'
   *
   * onWristMotion({
   *   callback: (result) => {
   *     const { type, motion } = result
   *
   *     if (type === 3) {
   *       console.log(motion === WRIST_MOTION_LIFT)
   *     }
   *   }
   * })
   * ```
   */
  function onWristMotion(option: onWristMotion.Option): void
}
