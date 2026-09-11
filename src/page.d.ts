declare module '@zos/page' {

  /**
   * @en Free scrolling mode, system default scrolling mode
   * @zh 自由滚动，系统默认滚动模式
   */
  const SCROLL_MODE_FREE: string
  /**
   * @en Swiper mode, vertical rotating map, walking lights, by configuring the height and number of individual pages can achieve the whole screen scrolling effect
   * @zh Swiper 模式，竖向轮播图、走马灯，通过配置单个页面高度和数量可以做到整屏滚动效果
   */
  const SCROLL_MODE_SWIPER: string
  /**
   * @en Swiper mode, horizontal rotating map, walking lights, by configuring the width and number of individual pages can achieve the whole screen scrolling effect
   * @zh Swiper 模式，横向轮播图、走马灯，通过配置单个页面宽度和数量可以做到整屏滚动效果
   * @version 2.1
   */
  const SCROLL_MODE_SWIPER_HORIZONTAL: string
  /**
   * @en Scroll smoothly to the corresponding position
   * @zh 平滑滚动至对应位置
   */
  const SCROLL_ANIMATION_SMOOTH: string
  /**
   * @en No animation, scroll directly to the corresponding position
   * @zh 无动画，直接滚动至对应位置
   */
  const SCROLL_ANIMATION_NONE: string
  namespace scrollTo {
    interface Option {
      /**
       * @en The vertical axis coordinates of the page, the 12 o'clock direction of the watch is positive, and scrolling down is negative
       * @zh 页面的纵轴坐标，手表 12 点钟方向为正方向，即向下滚动为负值
       */
      y: number
      /**
       * @en Scroll animation configuration
       * @zh 滚动动画配置
       * @version 3.6
       */
      animConfig?: animConfig
    }

    interface animConfig {
      /**
       * @en Animation curve, optional values `linear`, `easein`, `easeout`, `easeinout` refer to [https://easings.net/](https://easings.net/)
       * @zh 动画曲线，可选值 `linear`, `easein`, `easeout`, `easeinout`，参考 [https://easings.net/](https://easings.net/)
       * @version 3.6
       */
      anim_rate?: string
      /**
       * @en Animation duration, in milliseconds
       * @zh 动画时长，单位毫秒
       * @version 3.6
       */
      anim_duration?: number
      /**
       * @en Animation frame rate
       * @zh 动画帧率
       * @version 3.6
       * @defaultValue 25
       */
      anim_fps?: number
      /**
       * @en End of animation callback function
       * @zh 动画播放结束回调函数
       * @version 3.6
       */
      anim_complete_func?: () => void
    }
  }

  /**
   * @en Scroll the page to the specified position
   * @zh 滚动页面至指定位置
   * @example
   * ```js
   * import { scrollTo } from '@zos/page'
   *
   * scrollTo({
   *    y: -200
   * })
   * ```
   */
  function scrollTo(option: scrollTo.Option): void
  function scrollTo(y: number): void
  namespace getScrollTop {
    /**
     * @en The vertical coordinate of the current scroll position of the page
     * @zh 垂直坐标
     */
    type Result = number
  }

  /**
   * @en Get the vertical coordinate of the current scroll position of the page
   * @zh 获取页面当前滚动位置的垂直坐标
   * @example
   * ```js
   * import { getScrollTop } from '@zos/page'
   *
   * const top = getScrollTop()
   * console.log(top)
   * ```
   */
  function getScrollTop(): getScrollTop.Result
  namespace setScrollMode {
    interface Option {
      /**
       * @en Page scroll mode, value reference page scroll mode constants
       * @zh 页面滚动模式，值参考页面滚动模式常量
       */
      mode: string
      /**
       * @en Other Options
       * @zh 其他选项
       */
      options?: Options
    }

    interface Options {
      /**
       * @en Specify the height of a single item in Swiper, effective only if the scroll mode is `SCROLL_MODE_SWIPER`
       * @zh 指定 Swiper 中单个项目的高度，仅当页面滚动模式为 `SCROLL_MODE_SWIPER` 生效
       */
      height?: number
      /**
       * @en Specify the number of items in the Swiper, effective only if the scroll mode is `SCROLL_MODE_SWIPER` or `SCROLL_MODE_SWIPER_HORIZONTAL`
       * @zh 指定 Swiper 中项目的数量，仅当页面滚动模式为 `SCROLL_MODE_SWIPER` 和 `SCROLL_MODE_SWIPER_HORIZONTAL` 生效
       */
      count?: number
      /**
       * @en Specify the width of a single item in Swiper, effective only if the scroll mode is `SCROLL_MODE_SWIPER_HORIZONTAL`
       * @zh 指定 Swiper 中单个项目的宽度，仅当页面滚动模式为 `SCROLL_MODE_SWIPER_HORIZONTAL` 生效
       * @version 2.1
       */
      width?: number
      /**
       * @en Parameters for the scroll mode
       * @zh 模式的控制参数
       * @version 3.0
       */
      modeParams?: FreeModeParams | SwipeModeParams
    }

    /**
     * @output
     */
    interface FreeModeParams {
      /**
       * @en The callback function for each frame during scrolling
       * @zh 滚动过程中每帧的回调函数
       * @version 3.0
       */
      scroll_frame_func: (params: ScrollObj) => void
      /**
       * @en The end of the scroll callback function
       * @zh 滚动结束的回调函数
       * @version 3.0
       */
      scroll_complete_func: (params: ScrollObj) => void
      /**
       * @en Control whether the page rebound effect is turned on. When the page content exceeds one screen, it is turned on by default. If the page content is less than one screen, it is turned off by default. This parameter needs to be passed in the `build` lifecycle to take effect.
       * @zh 页面回弹效果是否开启，当页面内容超过一屏，默认开启，页面内容不足一屏，默认关闭，此参数需要在 `build` 生命周期传入才能生效
       * @version 3.6
       */
      bounce?: boolean
    }

    /**
     * @output
     */
    interface ScrollObj {
      /**
       * @en Todo
       * @zh 待补充
       * @version 3.0
       */
      type: number
      /**
       * @en Pixel offset on the y axis
       * @zh y 轴偏移的像素
       * @version 3.0
       */
      yoffset: number
    }

    /**
     * @output
     */
    interface SwipeModeParams {
      /**
       * @en Callback function after page flipping, `pageIndex` is the page index after page flipping, and the index starts from `0`
       * @zh 翻页完成后的回调函数，`pageIndex` 为翻页完成后的页面索引，索引从 0 开始
       * @version 3.0
       */
      on_page: (pageIndex: number) => void
      /**
       * @en Whether to respond to crown events, the default response, you can use the crown to control page turning
       * @zh 是否响应表冠事件，默认响应，可以通过表冠来控制翻页
       * @defaultValue true
       * @version 3.0
       */
      crown_enable: boolean
    }

    /**
     * @en If `true` is returned, success is indicated
     * @zh 如果返回 `true` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Set the scroll mode of the page
   * @zh 设置页面的滚动模式
   * @constants scrollMode
   * @example
   * ```js
   * import { setScrollMode, SCROLL_MODE_SWIPER } from '@zos/page'
   *
   * setScrollMode({
   *   mode: SCROLL_MODE_SWIPER,
   *   options: {
   *     height: 480,
   *     count: 10
   *   }
   * })
   * ```
   */
  function setScrollMode(option: setScrollMode.Option): setScrollMode.Result
  namespace setScrollLock {
    interface Option {
      /**
       * @en Whether to lock the current page scroll position
       * @zh 是否锁定当前页面滚动位置
       * @defaultValue true
       */
      lock?: boolean
    }
  }

  /**
   * @en Set the current page scrolling position to be locked, i.e. the screen position will not change with the gesture swipe. After calling this API to perform the unlock operation, the page scrolling mode will be set to free scrolling mode
   * @zh 设置当前页面滚动位置锁定，即屏幕位置不会跟随手势滑动改变。调用此 API 执行解锁操作之后，页面滚动模式会设置为自由滚动模式
   * @example
   * ```js
   * import { setScrollLock } from '@zos/page'
   *
   * setScrollLock({
   *   lock: true
   * })
   * ```
   */
  function setScrollLock(option: setScrollLock.Option): void
  namespace swipeToIndex {
    interface Option {
      /**
       * @en Index of the target project, starting from 0
       * @zh 目标项目的索引，从 0 开始
       */
      index: number
      /**
       * @en Scrolling animation, value reference page scrolling animation constants
       * @zh 滚动动画，值参考页面滚动动画常量
       * @defaultValue `SCROLL_ANIMATION_SMOOTH`
       */
      animation?: string
    }
  }

  /**
   * @en Scrolls the page to the Swiper's target item, only if the current page scroll mode is `SCROLL_MODE_SWIPER`
   * @zh 将页面滚动至 Swiper 的目标项目，仅当当前页面滚动模式为 `SCROLL_MODE_SWIPER` 的时候生效
   * @constants scrollAnimation
   * @example
   * ```js
   * import { setScrollMode, swipeToIndex, SCROLL_MODE_SWIPER } from '@zos/page'
   *
   * setScrollMode({
   *   mode: SCROLL_MODE_SWIPER,
   *   options: {
   *     height: 480,
   *     count: 10
   *   }
   * })
   *
   * swipeToIndex({
   *   index: 5
   * })
   * ```
   */
  function swipeToIndex(option: swipeToIndex.Option): void
  namespace getSwiperIndex {
    /**
     * @en If the page scroll mode is `SCROLL_MODE_SWIPER` or `SCROLL_MODE_SWIPER_HORIZONTAL`, the value is the index of the current item (starting from `1`). Otherwise, it is `undefined`.
     * @zh 页面滚动模式为 `SCROLL_MODE_SWIPER` 或 `SCROLL_MODE_SWIPER_HORIZONTAL` 时，值为当前项目的索引（从 `1` 开始）。否则为 `undefined`
     */
    type Result = number | undefined
  }

  /**
   * @en Get the scroll position of the current page, only if the page scroll mode is `SCROLL_MODE_SWIPER` or `SCROLL_MODE_SWIPER_HORIZONTAL` return the index of the current item (starting from `1`), otherwise return `undefined`
   * @zh 获取当前页面的滚动位置，仅当页面滚动模式为 `SCROLL_MODE_SWIPER` 或 `SCROLL_MODE_SWIPER_HORIZONTAL` 返回当前项目的索引（从 `1` 开始），否则返回 `undefined`
   * @example
   * ```js
   * import { setScrollMode, swipeToIndex, getSwiperIndex, SCROLL_MODE_SWIPER } from '@zos/page'
   *
   * setScrollMode({
   *   mode: SCROLL_MODE_SWIPER,
   *   options: {
   *     height: 480,
   *     count: 10
   *   }
   * })
   *
   * swipeToIndex({
   *   index: 5
   * })
   *
   * const currentIndex = getSwiperIndex()
   * console.log(currentIndex)
   * ```
   */
  function getSwiperIndex(): getSwiperIndex.Result
}
