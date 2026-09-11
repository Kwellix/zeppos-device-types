declare module '@zos/ui' {
  
  type Id<T> = { [K in keyof T]: T[K] }

  namespace HmWearableProgram {
    namespace DeviceSide {
        namespace HmUI {
            interface IHmUIPropertyType {
                MORE: number;
                /**
                 * @en x coordinate
                 * @zh x 坐标
                 */
                X: number;
                /**
                 * @en y coordinate
                 * @zh y 坐标
                 */
                Y: number;
                /**
                 * @en Width
                 * @zh 宽度
                 */
                W: number;
                /**
                 * @en Height
                 * @zh 高度
                 */
                H: number;
                POS_X: number;
                POS_Y: number;
                ANGLE: number;
                CENTER_X: number;
                CENTER_Y: number;
                /**
                 * @en Resource Path
                 * @zh 资源路径
                 */
                SRC: number;
                /**
                 * @en Text Content
                 * @zh 文字内容
                 */
                TEXT: number;
                /**
                 * @en Text size
                 * @zh 文字大小
                 */
                TEXT_SIZE: number;
                COLOR: number;
                START_ANGLE: number;
                END_ANGLE: number;
                LINE_WIDTH: number;
                LINE_PROGRESS_START_X: number;
                LINE_PROGRESS_START_Y: number;
                LINE_PROGRESS_END_X: number;
                LINE_PROGRESS_END_Y: number;
                LINE_PROGRESS_PROGRESS: number;
                LINE_PROGRESS_SRC_BG: number;
                LINE_PROGRESS_SRC_PROGRESS: number;
                LINE_PROGRESS_SRC_INDICATOR: number;
                WORD_WRAP: number;
                ID: number;
                DATASET: number;
                VISIBLE: number;
            }

            interface IHmUIWidgetType {
                /**
                 * @en GROUP group component is used to group a series of components together for unified widget of show/hide, registering events, etc
                 * @zh GROUP 组控件用于将一系列控件分组，便于统一控制显示/隐藏，注册事件等
                 */
                GROUP: number;
                /**
                 * @en The image widget is used to display images and supports image rotation
                 * @zh 图片控件用于展示图片，支持图片旋转
                 */
                IMG: number;
                /**
                 * @en Image group widget is used to show an image carousel, mainly for watchface photo rotation
                 * @zh 图片轮播控件用于展示多张图片轮播，主要用于表盘照片轮播
                 */
                IMG_GROUP: number;
                /**
                 * @en Text component for displaying text. Support setting text size, color and alignment
                 * @zh 文本控件用于展示文本。支持设置文本大小、颜色、对齐方式
                 */
                TEXT: number;
                /**
                 * @en Arc widget to display arc progress. Support setting line width, color, start and end angle
                 * @zh 圆弧控件展示圆弧进度。支持设置线宽、颜色、开始和结束的角度
                 */
                ARC: number;
                /**
                 * @en The Fill Rectangle widget is used to draw a solid color rectangular area
                 * @zh 填充矩形控件用于绘制一个纯色矩形区域
                 */
                FILL_RECT: number;
                /**
                 * @en The stroked rectangle widget adds a stroke on the basis of the filled rectangle component
                 * @zh 描边矩形控件在填充矩形控件的基础上加入了描边
                 */
                STROKE_RECT: number;
                TEXT_IMG: number;
                ARC_PROGRESS: number;
                IMG_PROGRESS: number;
                IMG_ARC_PROGRESS: number;
                IMG_LEVEL: number;
                /**
                 * @en Play the pre-given image at the set frame rate to create an animation effect
                 * @zh 按照设置的帧率播放预先给定的图片，形成动画效果
                 */
                IMG_ANIM: number;
                /**
                 * @en The button widget supports setting images and colors for normal and pressed states
                 * @zh 按钮控件支持设置正常态和按压态的颜色或者图片
                 */
                BUTTON: number;
                /**
                 * @en Numeric keyboard widget supporting key add, delete and parameter updates
                 * @zh 数字键盘控件，支持按键的添加、删除以及参数修改
                 */
                KEYBOARD: number;
                /**
                 * @en Horizontal progress bar
                 * @zh 横向进度条
                 */
                LINE_PROGRESS: number;
                /**
                 * @en Button group container used to manage variant buttons
                 * @zh 按钮组容器，用于管理可变样式按钮
                 */
                BUTTON_GROUP: number;
                /**
                 * @en Variant button
                 * @zh 可变样式按钮
                 */
                VARIANT_BUTTON: number;
                /**
                 * @en Draws a circle with support for color, transparency, and other properties
                 * @zh 绘制一个圆形，支持颜色、透明度等属性
                 */
                CIRCLE: number;
                /**
                 * @en Dialog popup consists of a piece of text and two buttons. The popup box disappears when the buttons are clicked
                 * @zh 对话弹窗由一段文本和两个按钮构成，点击按钮后弹框会消失
                 */
                DIALOG: number;
                /**
                 * @en Create a sliding list area, which can be filled with pictures and text
                 * @zh 创建一块支持滑动的列表区域，每个列表的 item 中可以设置图片和文字
                 */
                SCROLL_LIST: number;
                /**
                 * @en Used to switch between open and closed states
                 * @zh 用于在打开和关闭状态之间进行切换
                 */
                SLIDE_SWITCH: number;
                /**
                 * @en Create a list that scrolls in a loop, which can be populated with images
                 * @zh 创建一个可以循环滚动的列表，每个 item 可以设置为一张图片
                 */
                CYCLE_LIST: number;
                /**
                 * @en Create a list that can be scrolled in a loop, filled with images and text
                 * @zh 创建一个可以循环滚动的列表，其中可以填充图片和文字
                 */
                CYCLE_IMAGE_TEXT_LIST: number;
                IMG_POINTER: number;
                /**
                 * @en Used to select a single result among multiple options. Each individual option needs to be created using STATE_BUTTON
                 * @zh 用于在多个选项中选择多个选项。每个选项需要使用 STATE_BUTTON 来创建
                 */
                CHECKBOX_GROUP: number;
                STATE_BUTTON: number;
                /**
                 * @en Used to select a single result among multiple options. Each individual option needs to be created using STATE_BUTTON
                 * @zh 用于在多个选项中选择单个选项。每个单独的选项是 STATE_BUTTON 控件，需要单独创建
                 */
                RADIO_GROUP: number;
                WIDGET_DELEGATE: number;
                /**
                 * @en Draws a histogram
                 * @zh 绘制直方图
                 */
                HISTOGRAM: number;
                /**
                 * @en Time picker widget, providing user choice
                 * @zh 展示时间选择控件，提供用户选择
                 */
                PICK_DATE: number;
                /**
                 * @en Time picker, supporting time and date selection
                 * @zh 时间选择器，支持时间和日期选择
                 */
                TIME_PICKER: number;
                /**
                 * @en Sport data picker widget, providing user choice
                 * @zh 运动扩展编辑控件，提供用户选择数据类型
                 */
                SPORT_DATA: number;
                /**
                 * @en Create a layer, which can add any number of child widgets
                 * @zh 创建一个图层，可以添加任意数量的子控件
                 */
                VIEW_CONTAINER: number;
                /**
                 * @en Group view container
                 * @zh 组件容器
                 */
                GROUP_VIEW: number;
                /**
                 * @en Create a layout virtual container, which can add any number of child widgets
                 * @zh 创建一个布局虚拟容器，可以添加任意数量的子控件
                 */
                VIRTUAL_CONTAINER: number;
                /**
                 * @en Create a data picker widget, providing user choice
                 * @zh 创建一个数据选择控件，提供用户选择数据
                 */
                WIDGET_PICKER: number;
                /**
                 * @en Create a QR code
                 * @zh 创建二维码
                 */
                QRCODE: number;
                /**
                 * @en Create a polyline
                 * @zh 创建多段线
                 */
                POLYLINE: number;
                /**
                 * @en Create a canvas
                 * @zh 创建一个画布
                 */
                CANVAS: number;
                /**
                 * @en Create a page indicator
                 * @zh 创建一个分页指示器
                 */
                PAGE_INDICATOR: number;
                /**
                 * @en Create a page scrollbar
                 * @zh 创建一个页面滚动条
                 */
                PAGE_SCROLLBAR: number;
            }

            type HmUIAttributeType = number;
            type HmUIStyleType = number;
            type HmUIPropertyType = number;
            type HmUIPropertyValue = string | number | boolean | undefined;

            interface IInspector {
                draw(props: {
                      obj?: IHmElement,
                      line_width?: number,
                      line_color?: number,
                      border_mode?: 0 | 1,
                      virtual_cntr?: boolean
                    }): void;
                setVisibleList(ids: number[]): void;
                setViewOffset(xOffset: number, yOffset: number): void;
                clear(): void;
            }

            interface IHmUIWidget {
                setAlpha: (v: number) => void;
                setColor: (v: number) => void;
                setEnable: (s: boolean) => void;
                setProperties: (props: Record<string, unknown>) => void;
                getProperties: (...names: string[]) => Record<string, unknown>;
                visible: boolean;
                x: number;
                y: number;
                w: number;
                h: number;
                children?: IHmUIWidget[];
                layoutParent: IHmUIWidget;
                layoutChildren: IHmUIWidget[];
                isAutoLayout: boolean;
                styleInfo: Record<string, unknown>;
                getId(): number;
                /**
                 * @en Get the UI widget type
                 * @zh 获取 UI 控件类型
                 */
                getType(): number;
                /**
                 * @en Set the properties of the UI widget
                 * @zh 设置 UI 控件属性
                 */
                setProperty(prop: HmUIPropertyType, val: HmUIPropertyValue): boolean;
                /**
                 * @en Get the UI widget properties, use widget.getProperty(hmUI.prop.MORE, {}) to get all the properties of the widget
                 * @zh 获取 UI 控件属性，可以尝试使用 widget.getProperty(hmUI.prop.MORE, {}) 获取 UI 控件的全部属性
                 */
                getProperty<T>(prop: HmUIPropertyType): T | undefined;
                /**
                 * @en Register a listener to the UI widget and the given callback function will be executed when the specified event is triggered
                 * @zh 给 UI 控件注册事件监听器，当触发指定事件时，给定的回调函数就会被执行
                 */
                addEventListener(eventType: HmUIEventType, listener: IHmUIEventListener): boolean;
                /**
                 * @en Remove event listeners registered by the UI widget using the widget.addEventListener method
                 * @zh 删除 UI 控件使用 widget.addEventListener 方法注册的事件监听器
                 */
                removeEventListener(eventType?: HmUIEventType, listener?: IHmUIEventListener): boolean;
                setLayoutParent(e: IHmUIWidget): void;
                addLayoutChild(e: IHmUIWidget, index?: number): void;
                removeLayoutChild(e: IHmUIWidget): void;
                updateLayoutStyle(e: ILayoutStyle): void;
            }

            type LayoutUnitType = string | number;
            type ILayoutStyle = Partial<{
                        /**
                         * @zh 根容器X轴偏移（仅对根容器生效，非根容器用left/right）
                         * 取值：长度字符串（支持px/vw/vh/vmin/vmax/sp/%，未设单位默认px，）
                         * 示例："0"、"10vw"、"5.2vh"、"unscaled(20)"
                         *
                         * @en Root container X-axis offset (only applies to the root container, not applicable to non-root containers, use left/right)
                         */
                        x: LayoutUnitType

                        /**
                         * @zh 根容器Y轴偏移（仅对根容器生效，非根容器用top/bottom）
                         * 取值规则同x，
                         *
                         * @en Root container Y-axis offset (only applies to the root container, not applicable to non-root containers, use top/bottom)
                         */
                        y: LayoutUnitType

                        /**
                         * @zh 容器宽度
                         * 取值：长度字符串（支持所有单位）| "auto"（含text的控件自动计算，）
                         * 示例："60vw"、"auto"、"sww(50)"（、）
                         *
                         * @en Container width
                         */
                        width: LayoutUnitType

                        /**
                         * @zh 容器高度
                         * 取值规则同width，、
                         *
                         * @en Container height
                         */
                        height: LayoutUnitType

                        /**
                         * @zh 容器最小宽度（限定width范围）
                         * 取值：长度字符串（支持所有单位，）
                         *
                         * @en Container minimum width (limits the width range)
                         */
                        min_width: LayoutUnitType

                        /**
                         * @zh 容器最大宽度（限定width范围）
                         * 取值规则同min_width，
                         *
                         * @en Container maximum width (limits the width range)
                         */
                        max_width: LayoutUnitType

                        /**
                         * @zh 容器最小高度（限定height范围）
                         * 取值：长度字符串（支持所有单位，）
                         *
                         * @en Container minimum height (limits the height range)
                         */
                        min_height: LayoutUnitType

                        /**
                         * @zh 容器最大高度（限定height范围）
                         * 取值规则同min_height，
                         *
                         * @en Container maximum height (limits the height range)
                         */
                        max_height: LayoutUnitType

                        /**
                         * @zh 容器上内边距（支持简写padding，不支持%单位）
                         * 取值：长度字符串（支持px/vw/vh等，除%外，）
                         *
                         * @en Container top padding (supports shortcut padding, does not support % units)
                         */
                        padding_top: LayoutUnitType

                        /**
                         * @zh 容器下内边距（支持简写padding，不支持%单位）
                         * 取值规则同padding_top，
                         *
                         * @en Container bottom padding (supports shortcut padding, does not support % units)
                         */
                        padding_bottom: LayoutUnitType

                        /**
                         * @zh 容器左内边距（支持简写padding，不支持%单位）
                         * 取值规则同padding_top，
                         *
                         * @en Container left padding (supports shortcut padding, does not support % units)
                         */
                        padding_left: LayoutUnitType

                        /**
                         * @zh 容器右内边距（支持简写padding，不支持%单位）
                         * 取值规则同padding_top，
                         *
                         * @en Container right padding (supports shortcut padding, does not support % units)
                         */
                        padding_right: LayoutUnitType

                        /**
                         * @zh 容器内边距（简写padding，不支持%单位）
                         * 取值：长度字符串（支持px/vw/vh等，除%外，）
                         * 示例："10"（默认px）、"5vh"
                         *
                         * @en Container padding (shortcut padding, does not support % units)
                         */
                        padding: LayoutUnitType

                        /**
                         * @zh 容器行间隙（支持简写gap，不支持%单位）
                         * 取值：长度字符串（支持px/vw/vh等，除%外，）
                         * 示例："10"（默认px）、"5vh"
                         *
                         * @en Container row gap (shortcut gap, does not support % units)
                         */
                        row_gap: LayoutUnitType

                        /**
                         * @zh 容器列间隙（支持简写gap，不支持%单位）
                         * 取值规则同row_gap，、
                         *
                         * @en Container column gap (shortcut gap, does not support % units)
                         */
                        column_gap: LayoutUnitType

                        /**
                         * @zh 容器内边距（简写padding，不支持%单位）
                         * 取值：长度字符串（支持px/vw/vh等，除%外，）
                         * 示例："10"（默认px）、"5vh"
                         *
                         * @en Container padding (shortcut padding, does not support % units)
                         */
                        gap: LayoutUnitType

                        /**
                         * @zh 容器左侧偏移（用于非根容器相对定位，不支持%单位）
                         * 取值：长度字符串（支持px/vw/vh等，除%外，）
                         * 示例："relative(1vw)"（默认隐式relative修饰，）
                         *
                         * @en Container left offset (for non-root containers, does not support % units)
                         */
                        left: LayoutUnitType

                        /**
                         * @zh 容器右侧偏移（用于非根容器相对定位，不支持%单位）
                         * 取值规则同left，
                         *
                         * @en Container right offset (for non-root containers, does not support % units)
                         */
                        right: LayoutUnitType

                        /**
                         * @zh 容器下侧偏移（用于非根容器相对定位，不支持%单位）
                         * 取值规则同left，
                         *
                         * @en Container bottom offset (for non-root containers, does not support % units)
                         */
                        bottom: LayoutUnitType

                        /**
                         * @zh 容器在父容器内的对齐方式（支持横向+纵向组合）
                         * 取值：横向值 | 横向值+空格+纵向值
                         * 横向枚举："left" | "center" | "right"
                         * 纵向枚举："top" | "middle" | "bottom"
                         * 示例："center"、"center bottom"
                         *
                         * @en Container alignment (supports horizontal+vertical combination)
                         */
                        align:
                          | 'left'
                          | 'center'
                          | 'right'
                          | 'top'
                          | 'middle'
                          | 'bottom'
                          | 'left top'
                          | 'left middle'
                          | 'left bottom'
                          | 'center top'
                          | 'center middle'
                          | 'center bottom'
                          | 'right top'
                          | 'right middle'
                          | 'right bottom'

                        /**
                         * @zh 布局类型（暂不支持grid）
                         * 取值枚举："flex"
                         * @en Layout type (not supported grid)
                         */
                        display: 'flex'

                        /**
                         * @zh flex布局的方向+换行（flex-direction与flex-wrap的合集）
                         * 取值枚举："row" | "row-reverse" | "column" | "column-reverse" | "nowrap" | "wrap" | "wrap-reverse"（、）
                         * 示例："row wrap"
                         *
                         * @en flex layout direction + line wrapping (a collection of flex-direction and flex-wrap)
                         */
                        flex_flow:
                          | 'row'
                          | 'row-reverse'
                          | 'column'
                          | 'column-reverse'
                          | 'nowrap'
                          | 'wrap'
                          | 'wrap-reverse'

                        /**
                         * @zh flex items沿主轴（main轴）的对齐方式
                         * 取值枚举："flex-start" | "start" | "flex-end" | "end" | "center" | "space-between" | "space-around" | "space-evenly"（、）
                         * 说明："flex-start"与"start"等效，"flex-end"与"end"等效
                         *
                         * @en flex items along the main axis
                         */
                        justify_content:
                          | 'flex-start'
                          | 'start'
                          | 'flex-end'
                          | 'end'
                          | 'center'
                          | 'space-between'
                          | 'space-around'
                          | 'space-evenly'

                        /**
                         * @zh cross轴有额外空间时，flex轨道组的对齐方式（默认center）
                         * 取值枚举："flex-start" | "start" | "flex-end" | "end" | "center"
                         *
                         * @en cross-axis with extra space, flex track group alignment (default center)
                         */
                        align_content: 'flex-start' | 'start' | 'flex-end' | 'end' | 'center'

                        /**
                         * @zh flex item的增长能力（值为16位正整数的字符串形式）
                         * 取值：16位正整数转字符串
                         * 示例："1"、"10"
                         *
                         * @en flex item's growth ability (value is a string of a 16-bit positive integer)
                         */
                        flex_grow: LayoutUnitType

                        /**
                         * @zh 扩展特性标签（调试/功能开关，多标签用空格分隔，缩放标签互斥）
                         * 取值枚举："update" | "unscaled" | "scale-with-dpi" | "swdpi" | "scale-with-width" | "sww" | "scale-with-height" | "swh" | "ignore-layout" | "newtrack"（、、）
                         * 说明："scale-with-dpi"与"swdpi"等效，缩放相关标签（unscaled/scale-with-dpi等）不可同时使用
                         * 示例："update swh newtrack"
                         *
                         * @en Extension feature tag (debug/function switch, multiple tags separated by spaces, scale tags are mutually exclusive)
                         */
                        tags:
                          | 'update'
                          | 'unscaled'
                          | 'scale-with-dpi'
                          | 'swdpi'
                          | 'scale-with-width'
                          | 'sww'
                          | 'scale-with-height'
                          | 'swh'
                          | 'ignore-layout'
                          | 'newtrack'
                          | `${'update' | 'unscaled' | 'scale-with-dpi' | 'swdpi' | 'scale-with-width' | 'sww' | 'scale-with-height' | 'swh' | 'ignore-layout' | 'newtrack'} ${'update' | 'unscaled' | 'scale-with-dpi' | 'swdpi' | 'scale-with-width' | 'sww' | 'scale-with-height' | 'swh' | 'ignore-layout' | 'newtrack'}`

                        /**
                         * @zh 文字尺寸（作用于text控件或容器下所有text控件，不支持%单位）
                         * 取值：长度字符串（支持px/sp/vw等，除%外，、）
                         * 示例："24sp"、"swa(18)"
                         *
                         * @en Text size (applies to text controls or all text controls under the container, does not support % units)
                         */
                        font_size: LayoutUnitType

                        /**
                         * @zh 容器圆角（支持单值/双值，%单位参考自身高度）
                         * 取值：单长度字符串 | 双长度字符串（空格分隔，）
                         * 示例："25"（单值，）、"33 20"（双值，rw=33, rh=20）、"20%"（20%*自身height）
                         *
                         * @en Container corner radius (supports single value/double value, % units refer to height)
                         */
                        corner_radius: LayoutUnitType

                        /**
                         * @zh 容器行数限制
                         * 取值：正整数
                         * 示例："2"
                         *
                         * @en Text line limit
                         */
                        line_clamp: LayoutUnitType
                      }>;
            type HmUIWidgetOptions = Record<
                        string,
                        number | string | IHmUIEventListener | undefined | null | Record<string, unknown>
                      > & {
                        /**
                         * @en Parent layout widget
                         * @zh 父布局控件
                         */
                        parent?: IHmUIWidget
                        layout?: ILayoutStyle
                        enable?: boolean
                      };
            type HmUIWidgetType = number;

            interface IHmUIGetTextLayoutOptions {
                text_size: number;
                text_width: number;
                font_name?: string;
                wrapped?: number;
                rows_max?: number;
            }

            interface IHmUIGetTextLayout {
                (text: string, options: IHmUIGetTextLayoutOptions): { width: number; height: number; rows: number; result: number; text: string };
            }

            interface IHmUIFunction {
                /**
                 * @en Create UI widgets
                 * @zh 创建 UI 控件
                 */
                createWidget(widgetType: HmUIWidgetType, options: HmUIWidgetOptions): IHmUIWidget;
                /**
                 * @en Delete the UI widget
                 * @zh 删除 UI 控件
                 */
                deleteWidget(widget: IHmUIWidget): boolean;
                /**
                 * @en Redraw the page to prevent the UI from not refreshing in some cases
                 * @zh 重新绘制页面，防止部分情况下 UI 没有刷新
                 */
                redraw(): void;
            }

            interface IHmUIDialogType {
                show(isShow: boolean): void;
            }

            interface IHmUIExtensionFunction {
                /**
                 * @en Calculate the height and width of the target text after the layout is completed, and does not actually render it, only performs the layout calculation
                 * @zh 计算出目标文本布局完成之后的高度和宽度，并不会实际进行渲染，只进行布局计算
                 */
                getTextLayout: IHmUIGetTextLayout;
                /**
                 * @en update layout
                 * @zh 更新布局
                 */
                updateLayout: (obj: IHmUIWidget) => void;
                pixel: (express: string, refer_width?: boolean) => number | undefined;
                /**
                 * @en Create keyboard
                 * @zh 创建键盘
                 */
                createKeyboard: (obj: {
                      inputType?: number,
                      text: string,
                      onComplete: (ele: IHmUIWidget, result: { data: string }) => void
                      onCancel?: (ele: IHmUIWidget, result: { data: string }) => void
                    }) => void;
                /**
                 * @en Delete keyboard
                 * @zh 删除键盘
                 */
                deleteKeyboard: () => void;
                getRtlLayout(): boolean;
                relayoutRtl(): void;
                /**
                 * @en Show Toast with \n text line feed support
                 * @zh 显示 Toast，支持 \n 文本换行
                 */
                showToast(options: { text: string }): void;
                /**
                 * @en Create a Dialog
                 * @zh 创建 Dialog 对话框
                 */
                createDialog(options: {
                      title: string
                      show: boolean
                      auto_hide?: boolean
                      click_linster: (key: number) => void
                      click_listener: (key: number) => void
                    }): IHmUIDialogType;
                /**
                 * @en Set the entire page to Swipe mode, which can support vertical and horizontal scrolling
                 * @zh 将整个页面设置为 Swipe 轮播模式，可支持纵向、横向滚动
                 */
                setScrollView(enable: boolean, pageHeight?: number, pageCount?: number, isVertical?: boolean, opts?: Record<string, unknown>): boolean;
                /**
                 * @en Set whether the current page can be slid
                 * @zh 设置当前页面是否可以滑动
                 */
                setLayerScrolling(enable: boolean, opts?: Record<string, unknown>): boolean;
                /**
                 * @en After setting the page to Swipe mode with hmUI.setScrollView, you can use hmUI.scrollToPage to jump to the corresponding location and set the animation effect of the jump
                 * @zh 在使用 hmUI.setScrollView 将页面设置为 Swipe 轮播模式后，使用 hmUI.scrollToPage 可以跳转到对应的页面，并且可以设置跳转的动画效果
                 */
                scrollToPage(index: number, animation: boolean): void;
                /**
                 * @en After setting the page to Swipe mode with hmUI.setScrollView, use hmUI.getScrollCurrentPage to get the number of pages currently located
                 * @zh 在使用 hmUI.setScrollView 将页面设置为 Swipe 轮播模式后，使用 hmUI.getScrollCurrentPage 可以获取当前轮播的页数
                 */
                getScrollCurrentPage(): undefined | number;
                /**
                 * @en This interface is only available on square screen devices, set the status bar visible or not
                 * @zh 该接口只在方屏设备上有效，设置状态栏是否可见
                 */
                setStatusBarVisible(visible: boolean): void;
                /**
                 * @en This interface is only available on square screen devices, set the status bar to display text content
                 * @zh 该接口只在方屏设备上有效，设置状态栏显示文本内容
                 */
                updateStatusBarTitle(title: string): void;
                /**
                 * @en Get the font size after system scaling
                 * @zh 获得经过系统缩放后的字体大小
                 */
                getSysFontSize(size: number): number;
                /**
                 *
                 * @en Get the font size after system scaling, support string input
                 * @zh 获得经过系统缩放后的字体大小 ，支持传入字符串
                 */
                sp(size: number | string): number;
                /**
                 * @en Get the length and width of the image.
                 * @zh 获得图片的长宽。
                 * @param {string} path 图片路径
                 * @return {*}  {{width: number, height: number}}
                 * @memberof IHmUIExtensionFunction
                 */
                getImageInfo(p: string): { width: number, height: number };
                /**
                 * @en Set the size of AppWidget
                 * @zh 设置 AppWidget 的大小
                 * @param {{
                 *           h: number
                 *         }} options
                 * @memberof IHmUIExtensionFunction
                 */
                setAppWidgetSize(options: {
                      h: number
                    }): void;
                /**
                 * @en Get the size of AppWidget
                 * @zh 获得 AppWidget 的大小
                 * @return {*}  {{ w: number, h: number, margin: number, radius: number }}
                 * @memberof IHmUIExtensionFunction
                 */
                getAppWidgetSize(): { w: number, h: number, margin: number, radius: number };
                /**
                 * @en Open inspector
                 * @zh 打开 inspector
                 */
                openInspector(): IInspector;
            }

            interface IHmUIAlign {
                /**
                 * @en Vertical axis-top
                 * @zh 竖轴-最上端
                 */
                TOP: number;
                /**
                 * @en Vertical axis-bottommost
                 * @zh 竖轴-最底端
                 */
                BOTTOM: number;
                /**
                 * @en Horizontal axis-left aligned
                 * @zh 横轴-左对齐
                 */
                LEFT: number;
                /**
                 * @en Horizontal axis-align right
                 * @zh 横轴-右对齐
                 */
                RIGHT: number;
                /**
                 * @en Horizontal axis-centered
                 * @zh 横轴-居中
                 */
                CENTER_H: number;
                /**
                 * @en Vertical axis_centered
                 * @zh 竖轴_居中
                 */
                CENTER_V: number;
            }

            interface IHmUIArcType {
                FILL: number;
                LINE: number;
            }

            interface IHmUIDataType {
                BATTERY: number;
                CAL: number;
                DISTANCE: number;
                HEART: number;
                SLEEP: number;
                SPORT_ALTITUDE: number;
                TRACK: number;
            }

            interface IHmUIVariantButtonType {
                SUS_TEXT: number;
                SUS_ICON: number;
                SUS_SIDE_BY_SIDE: number;
                SUS_SEL_AND_BACK: number;
                CPS_TEXT: number;
                CPS_MUL_TEXT: number;
                MUL_TEXT: number;
                CPS_IMAGE: number;
                ROUND: number;
                IMAGE: number;
            }

            interface IHmUIVariantButton {
                type: IHmUIVariantButtonType;
            }

            interface IHmUIEditWidgetGroupType {
                SPORTS: number;
            }

            interface IHmUISportDataType {
                DURATION_NET: number;
                DURATION_CUR_SECTION: number;
                DURATION_PREV_SECTION: number;
                DURATION_AVG_SECTION: number;
                DURATION_CUR_GROUP: number;
                DISTANCE_TOTAL: number;
                DISTANCE_CUR_SECTION: number;
                DISTANCE_PREV_SECTION: number;
                COUNT_TOTAL: number;
                COUNT_CUR_ROPE: number;
                COUNT_BROKEN_ROPE: number;
                COUNT_TOTAL_BOAT: number;
                COUNT_CUR_BOAT: number;
                COUNT_CUR_FITNESS: number;
                GLIDE_COUNT: number;
                GLIDE_TOTAL_DISTANCE: number;
                GLIDE_CUR_DISTANCE: number;
                GLIDE_TOTAL_ALTITUDE: number;
                GLIDE_CUR_ALTITUDE: number;
                CLIMB_UP_FLOORS: number;
                CLIMB_UP_CUR_FLOORS: number;
                CLIMB_UP_PREV_FLOORS: number;
                CLIMB_DOWN_FLOORS: number;
                CLIMB_DOWN_CUR_FLOORS: number;
                CLIMB_DOWN_PREV_FLOORS: number;
                CLIMB_UP_FLOORS_IN_MIN: number;
                CLIMB_UP_TOTAL_ALTITUDE: number;
                CLIMB_UP_CUR_ALTITUDE: number;
                CLIMB_UP_PREV_ALTITUDE: number;
                CLIMB_DOWN_ALTITUDE_TOTAL: number;
                CLIMB_DOWN_CUR_ALTITUDE: number;
                CLIMB_DOWN_PREV_ALTITUDE: number;
                SWIM_TOTAL_LAPS: number;
                SWIM_CUR_LAPS: number;
                SWIM_PREV_LAPS: number;
                SWIM_TOTAL_STROKE_CNT: number;
                SWIM_CUR_STROKE_CNT: number;
                SWIM_PREV_STROKE_CNT: number;
                SWIM_AVG_STROKE_DISTANCE: number;
                SWIM_AVG_SECTION_STROKE_CNT: number;
                SWIM_STROKE_SPEED: number;
                SWIM_CUR_STROKE_SPEED: number;
                SWIM_PREV_STROKE_SPEED: number;
                SWIM_AVG_STROKE_SPEED: number;
                SWIM_AVG_SWOLF: number;
                SWIM_CUR_SWOLF: number;
                SWIM_PREV_SWOLF: number;
                PACE: number;
                PACE_AVG: number;
                PACE_CUR_AVG: number;
                PACE_PREV_AVG: number;
                STRIDE_FREQ: number;
                STRIDE_AVG_FREQ: number;
                STRIDE_CUR_FREQ: number;
                STRIDE_PREV_FREQ: number;
                STRIDE: number;
                STRIDE_AVG: number;
                STRIDE_CUR: number;
                STRIDE_PREV: number;
                STRIDE_COUNT: number;
                SPEED: number;
                SPEED_AVG: number;
                SPEED_AVG_GLIDE: number;
                SPEED_PREV_GLIDE: number;
                SPEED_CUR_SECTION: number;
                SPEED_PREV_SECTION: number;
                SPEED_MAX: number;
                SPEED_VERTICAL: number;
                ALTITUDE: number;
                ALTITUDE_MAX: number;
                ALTITUDE_MIN: number;
                ALTITUDE_AVG: number;
                SLOPE_TOTAL_RISING_DISTANCE: number;
                SLOPE_CUR_RISING_DISTANCE: number;
                SLOPE_PREV_RISING_DISTANCE: number;
                ALTITUDE_TOTAL_UP: number;
                ALTITUDE_CUR_UP: number;
                ALTITUDE_PREV_UP: number;
                ALTITUDE_TOTAL_DOWN: number;
                ALTITUDE_CUR_DOWN: number;
                ALTITUDE_PREV_DOWN: number;
                SLOPE: number;
                SLOPE_AVG: number;
                SLOPE_CUR: number;
                SLOPE_PREV: number;
                SLOPE_GLIDE: number;
                SLOPE_AVG_GLIDE: number;
                SLOPE_CUR_GLIDE: number;
                SLOPE_PREV_GLIDE: number;
                BRANDISH_TOTAL_CNT: number;
                BRANDISH_POSITIVE_CNT: number;
                BRANDISH_NEGATIVE_CNT: number;
                BRANDISH_SERVE_CNT: number;
                CONSUME: number;
                CONSUME_CUR: number;
                BOATING_FREQ: number;
                BOATING_AVG_FREQ: number;
                BOATING_CUR_FREQ: number;
                BOATING_PULL: number;
                BOATING_PUSH: number;
                FREQ: number;
                FREQ_AVG: number;
                FREQ_CUR: number;
                GOLF_SPEED: number;
                GOLF_ANGLE: number;
                GOLF_UP_TIME: number;
                GOLF_DOWN_TIME: number;
                GOLF_BEAT: number;
                GOLF_SWING_COUNTER_GROUP: number;
                GOLF_SWING_COUNTER: number;
                GOLF_AVG_SCORE: number;
                GOLF_SCORE: number;
                HR: number;
                HR_AVG: number;
                HR_CUR_AVG: number;
                HR_INTERVAL: number;
                HR_MAX_PERCENT: number;
                HR_RESERVED_PERCENT: number;
                HR_AVG_MAX_PERCENT: number;
                HR_AVG_RESERVED_PERCENT: number;
                HR_CUR_SECTION: number;
                HR_CUR_MAX_PERCENT: number;
                HR_CUR_RESERVED_PERCENT: number;
                HR_PREV_SECTION: number;
                HR_PREV_MAX_PERCENT: number;
                HR_PREV_RESERED_PERCENT: number;
                PRESSURE: number;
                PRESSURE_AVG: number;
                PRESSURE_CUR: number;
                PRESSURE_PREV: number;
                TEMP: number;
                TEMP_MAX: number;
                TEMP_MIN: number;
                OTHER_SECTION_ORDER: number;
                OTHER_AEROBIC_TE: number;
                OTHER_ANAEROBIC_TE: number;
                OTHER_TRAIN_LOAD: number;
                OTHER_CUR_TIME: number;
                OTHER_SUNRISE_TIME: number;
                OTHER_SUNSET_TIME: number;
                OTHER_BORAMETER: number;
                OTHER_ACTIONNAME: number;
                CHART_HR: number;
                CHART_SPEED: number;
                CHART_STROKE_FREP: number;
                CHART_TE: number;
                CHART_STROKE_SPEED: number;
                CHART_PACE: number;
                CHART_ALTITUDE: number;
                CHART_FREQ: number;
                DEVICE_POWER: number;
                DEVICE_POWER_WEIGHT: number;
                DEVICE_WORK: number;
                DEVICE_AVG_POWER: number;
                DEVICE_MAX_POWER: number;
                DEVICE_3S_AVG_POWER: number;
                DEVICE_10S_AVG_POWER: number;
                DEVICE_30S_AVG_POWER: number;
                DEVICE_LAP_AVG_POWER: number;
                DEVICE_PREV_AVG_POWER: number;
                DEVICE_CADENCE: number;
                DEVICE_FAST_CADENCE: number;
                DEVICE_AVG_CADENCE: number;
                DEVICE_LAP_AVG_CADENCE: number;
                DEVICE_PREV_AVG_CADENCE: number;
                DURATION_GLIDE: number;
                DURATION_TOTAL_CLIMB: number;
                GLIDE_PREV_DISTANCE: number;
                GLIDE_PREV_ALTITUDE: number;
                SPEED_MAX_GLIDE: number;
                SLOPE_GLIDE_MAX: number;
                SLOPE_GLIDE_AVG: number;
                GLIDE_ANGLE_MAX: number;
                GLIDE_ANGLE_AVG: number;
                DURATION_SURFACE: number;
                DURATION_CUR_DIVING: number;
                DURATION_PREV_DIVING: number;
                COUNT_DIVING: number;
                COUNT_CAUGHT: number;
                SPEED_DIVING: number;
                DEPTH: number;
                DEPTH_AVG: number;
                DEPTH_MAX: number;
                DEPTH_MAX_PREV: number;
                HEIGHT: number;
                DESENT_SPEED: number;
                DESENT_SPEED_MAX: number;
                DESENT_SPEED_AVG: number;
                SKYDIVING_HEIGHT: number;
                COUNT_CONTINUOUS_ROPE: number;
            }

            interface IHmAnimStatus {
                START: number;
                STOP: number;
                PAUSE: number;
                RESUME: number;
            }

            interface IHmUIWrapTextStyle {
                WRAP: number;
                CHAR_WRAP: number;
                /**
                 * @en Single line overflow character display...
                 * @zh 单行溢出字符显示...
                 */
                ELLIPSIS: number;
                /**
                 * @en Keep scrolling
                 * @zh 跑马灯
                 */
                NONE: number;
            }

            interface IHmUIEventType {
                /**
                 * @en Lift up
                 * @zh 抬起
                 */
                CLICK_UP: number;
                /**
                 * @en Press
                 * @zh 按下
                 */
                CLICK_DOWN: number;
                /**
                 * @en Move in
                 * @zh 划入
                 */
                MOVE_IN: number;
                /**
                 * @en Move out
                 * @zh 划出
                 */
                MOVE_OUT: number;
                /**
                 * @en Slide
                 * @zh 滑动
                 */
                MOVE: number;
                /**
                 * @en One full click (including press and lift)
                 * @zh 一次完整点击（包含按下和抬起）
                 */
                SELECT: number;
            }

            interface IHmUIEvent {
                x: number;
                y: number;
                type: HmUIEventType;
                target: IHmUIWidget;
            }

            interface IHmUIEventListener {
                (event: IHmUIEvent): void;
            }

            type HmUIEventType = number;
            type IHmUIInputType = {
                        /**
                         * @en emoji
                         * @zh emoji 表情
                         */
                        EMOJI: number
                        /**
                         * @en Number
                         * @zh 数字
                         */
                        NUM: number
                        /**
                         * @en Letter
                         * @zh 字母
                         */
                        CHAR: number
                        /**
                         * @en Voice
                         * @zh 语音
                         */
                        VOICE: number
                        /**
                         * @en Keyboard
                         * @zh 键盘
                         */
                        JSKB: number
                        /**
                         * @en SELECT
                         * @zh 选择
                         */
                        SELECT: number
                      };
            type IHmKeyBoard = {
                        /**
                         * @en Goto input method settings page
                         * @zh 跳转到输入法设置页面
                         */
                        gotoSettings: () => void
                        /**
                         * @en Switch input method type
                         * @zh 切换输入法类型
                         */
                        switchInputType: (type: number) => void
                        /**
                         * @en Get whether the voice ability is available
                         * @zh 获取语音能力是否可用
                         */
                        checkVoiceInputAvailable: () => boolean
                        /**
                         * @en Determine whether the keyboard is set
                         * @zh 判断当前键盘是否被设置
                         */

                        isEnabled: () => boolean
                        /**
                         * @en Determine whether the keyboard is selected
                         * @zh 判断当前键盘是否被选中
                         */
                        isSelected: () => boolean

                        /**
                         * @en Clear input buffer
                         * @zh 清空输入缓冲区
                         */
                        clearBuffer: () => void
                        /**
                         * @en Get input buffer
                         * @zh 获取输入缓冲区
                         */
                        getBuffer: () => string
                        /**
                         * @en Input buffer
                         * @zh 输入缓冲区
                         */
                        inputBuffer: (s: string, text_color?: number, underline_color?: number) => void
                        /**
                         * @en Send key
                         * @zh 发送按键
                         */
                        sendFnKey: (n: number) => void
                        /**
                         * @en Clear input content
                         * @zh 清除输入内容
                         */
                        clearInput: () => void
                        /**
                         * @en Delete character
                         * @zh 删除字符
                         */
                        backspace: (n: number) => void
                        /**
                         * @en Input text
                         * @zh 设置输入内容
                         */
                        inputText: (s: string) => void
                        /**
                         * @en Get input text
                         * @zh 获取输入内容
                         */
                        getTextContext: () => string
                        /**
                         * @en Get input box position
                         * @zh 获取输入框位置
                         */
                        getContentRect: () => {
                          x: number
                          y: number
                          w: number
                          h: number
                        }
                        /**
                         * @en Set input box position
                         * @zh 设置输入框位置
                         */
                        setContentRect: (rect?: { x: number; y: number; w: number; h: number }) => void
                        BACKSPACE: number
                        ENTER: number
                        SWITCH: number
                        SELECT: number
                        CANCEL: number
                      };

            interface IHmUI extends IHmUIExtensionFunction, IHmUIFunction {
                /**
                 * @en Widget Type
                 * @zh 控件类型
                 */
                widget: IHmUIWidgetType;
                /**
                 * @en Widget Property
                 * @zh 控件属性
                 */
                prop: IHmUIPropertyType;
                /**
                 * @en Widget Event
                 * @zh 控件事件
                 */
                event: IHmUIEventType;
                /**
                 * @en Alignment
                 * @zh 对齐方式
                 */
                align: IHmUIAlign;
                /**
                 * @en Arc type
                 * @zh 弧形类型
                 */
                arc_type: IHmUIArcType;
                /**
                 * @en Data type
                 * @zh 数据类型
                 */
                data_type: IHmUIDataType;
                /**
                 * @en Text line wrap handling
                 * @zh 文字换行处理方式
                 */
                text_style: IHmUIWrapTextStyle;
                /**
                 * @en Animation status setting
                 * @zh 动画状态设置
                 */
                anim_status: IHmAnimStatus;
                /**
                 * @en Sport data type
                 * @zh 运动数据类型
                 */
                sport_data: IHmUISportDataType;
                /**
                 * @en Sport type
                 * @zh 运动类型
                 */
                sport_type: number;
                /**
                 * @en Edit widget type
                 * @zh 编辑组件类型
                 */
                edit_widget_group_type: IHmUIEditWidgetGroupType;
                /**
                 * @en Variant button
                 * @zh 可变样式按钮
                 */
                VARIANT_BUTTON: IHmUIVariantButton;
                /**
                 * @en Keyboard type
                 * @zh 键盘类型
                 */
                inputType: IHmUIInputType;
                /**
                 * @en Keyboard
                 * @zh 键盘
                 */
                keyboard: IHmKeyBoard;
            }
        }
    }
}


namespace HmWearableProgram {
    namespace DeviceSide {
        namespace HmUI {
            type extendsBase<T extends { attrs?: object; on?: object; styles?: object }, B extends { attrs?: object; on?: object; styles?: object }> = {
                        attrs?: Id<Partial<T['attrs'] & B['attrs']>>
                        on?: Id<Partial<T['on'] & B['on']>>
                        styles?: Id<Partial<T['styles'] & B['styles']>>
                      };

            interface IHmUIWidgetOptions {
                [k: string]: unknown;
                attrs?: {
                      id?: string
                      dataset?: string
                      [k: string]: unknown
                    };
                on?: {
                      click_up?: IHmUIEventListener
                      click_down?: IHmUIEventListener
                      move_in?: IHmUIEventListener
                      move_out?: IHmUIEventListener
                      move?: IHmUIEventListener
                    };
                styles?: {
                      x?: number
                      y?: number
                      w?: number
                      h?: number
                      [k: string]: unknown
                    };
            }

            interface IHmUIWidgetBasicOptions {
                x: number;
                y: number;
                w: number;
                h: number;
            }

            type GroupWidgetOptions = extendsBase<
                        {
                          styles?: {
                            x: number
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface GroupWidget extends IHmUIWidget, IHmUIFunction, Omit<IWidgetFactory, 'group'> {
                name: string;
            }

            type CheckBoxGroupWidgetOptions = extendsBase<
                        {
                          attrs: {
                            select_src: string
                            unselect_src: string
                          }
                          styles: {
                            x: number
                            y: number
                            w: number
                            h: number
                          }
                          on: {
                            check_func?: IHmUIEventListener
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface CheckBoxGroupWidget extends IHmUIWidget, IHmUIFunction, Omit<IWidgetFactory, 'group'>, Omit<IWidgetFactory, 'checkboxGroup'> {
                name: string;
            }

            type CheckBoxWidgetOptions = extendsBase<
                        {
                          styles: {
                            x: number
                            y: number
                            w: number
                            h: number
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface CheckBoxWidget extends IHmUIWidget {
                name: string;
            }

            type RadioGroupWidgetOptions = CheckBoxGroupWidgetOptions;

            interface RadioGroupWidget extends IHmUIWidget, IHmUIFunction, Omit<IWidgetFactory, 'group'>, Omit<IWidgetFactory, 'radioGroup'> {
                name: string;
            }

            type RadioWidgetOptions = CheckBoxWidgetOptions;

            interface RadioWidget extends IHmUIWidget {
                name: string;
            }

            type TextWidgetOptions = extendsBase<
                        {
                          attrs?: {
                            /**
                             * 显示内容
                             *
                             * @type {string}
                             */
                            text?: string
                            text_i18n?: Record<string, string>
                          }
                          styles?: {
                            color?: number
                            alpha?: number
                            align_v?: IHmUIAlign
                            align_h?: IHmUIAlign
                            text_size?: number
                            text_style?: IHmUIWrapTextStyle
                            font?: string
                            line_space?: number
                            char_space?: number
                            start_angle?: number
                            end_angle?: number
                            mode?: number
                            radius?: number
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface TextWidget extends IHmUIWidget {
                name: string;
                enableCursor(enable: boolean): void;
                getCursorPos(index: number): number;
                getCursorIndex(x: number, y: number): number;
                getTextCount(): number;
                deleteCharacter(index: number): void;
                insertString(index: number, str: string): void;
                getCursorHeight(): number;
                getLineHeight(): number;
                setTextOutline(param: Record<string, unknown>, redraw?: boolean): void;
            }

            type ImageWidgetOptions = extendsBase<
                        {
                          attrs?: {
                            /**
                             * 图片路径
                             *
                             * @type {string}
                             */
                            src?: string
                          }

                          styles?: {
                            alpha?: number
                            auto_scale?: boolean
                            auto_scale_obj_fit?: boolean
                            /**
                             * 图片显示x点 对于控件相对坐标
                             *
                             * @type {number}
                             */
                            pos_x?: number

                            /**
                             * 图片显示y点 对于控件相对坐标
                             *
                             * @type {number}
                             */
                            pos_y?: number

                            /**
                             * 图片旋转角度
                             *
                             * @type {number}
                             */
                            angle?: number

                            /**
                             * 图片旋转中心 x 坐标
                             *
                             * @type {number}
                             */
                            center_x?: number

                            /**
                             * 图片旋转中心 y 坐标
                             *
                             * @type {number}
                             */
                            center_y?: number
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface ImageWidget extends IHmUIWidget {
                name: string;
            }

            type ArcWidgetOptions = extendsBase<
                        {
                          styles?: {
                            /**
                             * 圆弧开始角度
                             *
                             * @type {number}
                             */
                            start_angle?: number

                            /**
                             * 圆弧结束角度
                             *
                             * @type {number}
                             */
                            end_angle?: number

                            /**
                             * 圆弧线宽
                             *
                             * @type {number}
                             */
                            line_width?: number
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface ArcWidget extends IHmUIWidget {
                name: string;
            }

            type FillRectWidgetOptions = extendsBase<
                        {
                          styles: {
                            x: number
                            y: number
                            w: number
                            h: number
                            color: number
                            radius: number
                            angle: number
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface FillRectWidget extends IHmUIWidget {
                name: string;
            }

            type StrokeRectWidgetOptions = extendsBase<
                        {
                          attrs: {
                            id: string
                          }
                          styles: {
                            x: number
                            y: number
                            w: number
                            h: number
                            color: number
                            radius: number
                            line_width: number
                            angle: number
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface StrokeRectWidget extends IHmUIWidget {
                name: string;
            }

            type ImgTextWidgetOptions = extendsBase<
                        {
                          attrs: {
                            text: string
                          }
                          styles: {
                            x: number
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface ImgTextWidget extends IHmUIWidget {
                name: string;
            }

            type ImgGroupWidgetOptions = extendsBase<
                        {
                          attrs: {
                            x: number
                            y: number
                            w?: number
                            h?: number
                            image_array: Array<string>
                            image_length?: number
                            src?: string
                            mode?: number
                            show_level?: number
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface ImgGroupWidget extends IHmUIWidget {
                name: string;
            }

            type ArcProgressWidgetOptions = extendsBase<
                        {
                          attrs: {
                            center_x: number
                            center_y: number
                            radius: number
                            start_angle: number
                            end_angle: number
                            line_width: number
                            color: number
                            src_bg?: string
                            level?: number
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface ArcProgressWidget extends IHmUIWidget {
                name: string;
            }

            type LineProgressWidgetOptions = extendsBase<
                        {
                          attrs: {
                            x: number
                            y: number
                            w: number
                            h: number
                            track_fill?: {
                              alpha?: number
                              radius?: number
                              color?: number
                            }
                            progress_fill: {
                              alpha?: number
                              radius?: number
                              color?: number
                            }
                            progress?: number
                            type?: number
                          }
                          styles: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface LineProgressWidget extends IHmUIWidget {
                name: string;
            }

            type ImgProgressWidgetOptions = extendsBase<
                        {
                          attrs: {
                            x: Array<number>
                            y: Array<number>
                            image_array: Array<string>
                            image_length: number
                            level?: number
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface ImgProgressWidget extends IHmUIWidget {
                name: string;
            }

            type ImgProgressLevelWidgetOptions = extendsBase<
                        {
                          attrs: {
                            x: number
                            y: number
                            image_array: Array<string>
                            image_length: number
                            w?: number
                            h?: number
                            level?: number
                            shortcut?: boolean
                            type?: number
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface ImgProgressLevelWidget extends IHmUIWidget {
                name: string;
            }

            type ImgAnimationWidgetOptions = extendsBase<
                        {
                          attrs: {
                            anim_path: string
                            anim_prefix: string
                            anim_ext: string
                            anim_fps: number
                            anim_size: number
                            repeat_count: number
                            anim_status: number
                          }
                          styles: {
                            x: number
                            y: number
                          }
                          on: {
                            anim_complete_call: IHmUIEventListener
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface ImgAnimationWidget extends IHmUIWidget {
                name: string;
            }

            type ImgArcProgressWidgetOptions = extendsBase<
                        {
                          attrs: {
                            center_x: number
                            center_y: number
                            radius: number
                            start_angle: number
                            end_angle: number
                            arc_type: number
                            src: string
                            pos_x?: number
                            pos_y?: number
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface ImgArcProgressWidget extends IHmUIWidget {
                name: string;
            }

            type ButtonWidgetOptions = extendsBase<
                        {
                          attrs: {
                            text: string
                            color?: number
                            press_src?: string
                            normal_src?: string
                            press_color?: number
                            normal_color?: number
                            click_func?: IHmUIEventListener
                            longpress_func?: IHmUIEventListener
                          }
                          styles: {
                            x: number
                            y: number
                            w: number
                            h: number
                            align_h?: IHmUIAlign
                            align_v?: IHmUIAlign
                            text_size?: number
                            text_w?: number
                            font?: string
                            radius?: number
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface ButtonWidget extends IHmUIWidget {
                name: string;
            }

            type KeyboardKeyAttr = {
                        id: number
                        x: number
                        y: number
                        text?: string
                        image?: string
                        value?: number | string
                        cntr_coord_style?: boolean
                      };
            type KeyboardWidgetOptions = extendsBase<
                        {
                          attrs: {
                            x?: number
                            y?: number
                            click_func: (keyboard: KeyboardWidget, id: number, value: number | string, mode: number) => void
                            key_attr: KeyboardKeyAttr[]
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface KeyboardWidget extends IHmUIWidget {
                name: string;
            }

            type ButtonGroupWidgetOptions = extendsBase<
                        {
                          attrs: {
                            maxBtnCnt?: number
                            target?: IHmUIWidget
                            floating?: boolean
                            focusLoop?: boolean
                            scrollEnable?: boolean
                            zIndex?: number
                            enable?: boolean
                          }
                          styles: IHmUIWidgetBasicOptions
                          on?: {
                            focusChange?: IHmUIEventListener
                            focusOver?: IHmUIEventListener
                            focusEnd?: IHmUIEventListener
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface ButtonGroupWidget extends IHmUIWidget, IHmUIFunction {
                name: string;
                init(): boolean;
            }

            type VariantButtonWidgetOptions = extendsBase<
                        {
                          attrs: {
                            type: number
                            imageW?: number
                            imageH?: number
                            src?: string
                            leftImage?: string
                            rightImage?: string
                            selectImage?: string
                            backImage?: string
                            backVisible?: boolean
                            selVisible?: boolean
                            leftFocus?: boolean
                            rightFocus?: boolean
                            text?: string
                            subText?: string
                            systemStyle?: boolean
                            index?: number
                            click_func?: IHmUIEventListener
                          }
                          styles: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface VariantButtonWidget extends IHmUIWidget {
                name: string;
            }

            type GroupViewWidgetOptions = extendsBase<
                        {
                          attrs: {
                            count: number
                            btnClickFunc?: IHmUIEventListener
                            focusLoop?: boolean
                            target?: IHmUIWidget
                          }
                          styles: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface GroupViewWidget extends IHmUIWidget, IHmUIFunction {
                name: string;
                init(): boolean;
                createLine(groupIndex: number): boolean;
                addGroup(insertIndex: number, groupWidget: IHmUIWidget, topMargin?: number): boolean;
                addLine(insertIndex: number, topMargin?: number): boolean;
                setItemTopMargin(groupIndex: number, topMargin: number): boolean;
                setItemVisible(groupIndex: number, visible: boolean): boolean;
                setDirty(groupIndex: number): boolean;
                relayout(groupIndex?: number): boolean;
                setItemToView(groupIndex: number, alignTop?: boolean): boolean;
                addPslImageCapButton(groupIndex: number, imagePath: string): boolean;
                addPslIconButton(groupIndex: number): boolean;
                addPslNormalCapButton(groupIndex: number, text: string): boolean;
                setItemIsButton(groupIndex: number, buttonIndex: number): boolean;
            }

            type CircleWidgetOptions = extendsBase<
                        {
                          styles: {
                            center_x: number
                            center_y: number
                            radius: number
                            color: number
                            alpha?: number
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface CircleWidget extends IHmUIWidget {
                name: string;
            }

            type DialogWidgetOptions = extendsBase<
                        {
                          attrs: {
                            text: string
                            content_text_size?: number
                            content_text_color?: number
                            content_bg_color?: number
                            content_text_align_h?: IHmUIAlign
                            content_text_align_v?: IHmUIAlign
                            ok_text?: string
                            cancel_text?: string
                            ok_press_color?: number
                            ok_normal_color?: number
                            ok_press_src?: string
                            ok_normal_src?: string
                            cancel_press_color?: number
                            cancel_normal_color?: number
                            cancel_press_src?: string
                            cancel_normal_src?: string
                            ok_text_color?: number
                            cancel_text_color?: number
                            dialog_align_h?: IHmUIAlign
                            dialog_align_v?: IHmUIAlign
                            ok_func?: IHmUIEventListener
                            cancel_func?: IHmUIEventListener
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface DialogWidget extends IHmUIWidget {
                name: string;
            }

            type ViewContainerScrollInfo = {
                        type?: number
                        yoffset?: number
                      };
            type ViewContainerWidgetOptions = extendsBase<
                        {
                          attrs: {
                            x?: number
                            y?: number
                            w?: number
                            h?: number
                            pos_x?: number
                            pos_y?: number
                            page?: number
                            modal?: number
                            z_index?: number
                            bounce?: number
                            scroll_enable?: number
                            scroll_frame_func?: (info: ViewContainerScrollInfo) => void
                            scroll_complete_func?: (info: ViewContainerScrollInfo) => void
                            horizontal?: boolean
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface ViewContainerWidget extends IHmUIWidget, IHmUIFunction, Omit<IWidgetFactory, 'group'> {
                name: string;
            }

            type VirtualContainerWidgetOptions = extendsBase<
                        {
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface VirtualContainerWidget extends IHmUIWidget, IHmUIFunction, Omit<IWidgetFactory, 'group'> {
                name: string;
            }

            type QrcodeWidgetOptions = extendsBase<
                        {
                          attrs: {
                            x: number
                            y: number
                            w: number
                            h: number
                            content: string
                            bg_x?: number
                            bg_y?: number
                            bg_w?: number
                            bg_h?: number
                            bg_radius?: number
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface QrcodeWidget extends IHmUIWidget {
                name: string;
            }

            type PageIndicatorWidgetOptions = extendsBase<
                        {
                          attrs: {
                            x: number
                            y: number
                            w: number
                            h: number
                            align_h?: IHmUIAlign
                            h_space?: number
                            v_space?: number
                            select_src: string
                            unselect_src: string
                            use_color?: boolean
                            select_color?: number
                            unselect_color?: number
                            element_height?: number
                            element_radius?: number
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface PageIndicatorWidget extends IHmUIWidget {
                name: string;
            }

            type PageScrollbarWidgetOptions = extendsBase<
                        {
                          attrs?: {
                            target?: IHmUIWidget
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface PageScrollbarWidget extends IHmUIWidget {
                name: string;
            }

            type TimePickerWidgetOptions = extendsBase<
                        {
                          attrs: {
                            type: 0 | 1
                            style: 1
                            title?: string
                            done_icon?: string
                            font_size: number
                            select_font_size: number
                            initHour?: number
                            initMin?: number
                            startYear?: number
                            endYear?: number
                            initYear?: number
                            initMonth?: number
                            initDay?: number
                            picker_cb?: (picker: TimePickerWidget, event_type: number, column: number, value_index: number) => void
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface TimePickerWidget extends IHmUIWidget {
                name: string;
            }

            type WidgetPickerColumnConfig = {
                        data_array: Array<string | number>
                        support_loop: boolean
                        unit?: string
                        connector?: string
                        font_name?: string
                        font_size?: number
                        select_font_size?: number
                        connector_font_size?: number
                        unit_font_size?: number
                        init_val_index?: number
                        col_width?: number
                        layout?: Record<string, string>
                        is_string?: boolean
                      };
            type WidgetPickerWidgetOptions = extendsBase<
                        {
                          attrs: {
                            nb_of_columns: number
                            data_config: WidgetPickerColumnConfig[]
                            title?: string
                            subtitle?: string
                            done_icon?: string
                            picker_cb?: (picker: WidgetPickerWidget, event_type: number, column: number, value_index: number) => void
                            init_col_index?: number
                            normal_color?: number
                            select_color?: number
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface WidgetPickerWidget extends IHmUIWidget {
                name: string;
            }

            type SportDataWidgetOptions = extendsBase<
                        {
                          attrs: {
                            edit_id: number
                            category: number
                            default_type: number
                            optional_types?: number[]
                            count?: number
                            line_color?: number
                            text_size?: number
                            text_color?: number
                            text_x?: number
                            text_y?: number
                            text_w?: number
                            text_h?: number
                            rect_visible?: boolean
                            sub_text_visible?: boolean
                            sub_text_size?: number
                            sub_text_color?: number
                            sub_text_x?: number
                            sub_text_y?: number
                            sub_text_w?: number
                            sub_text_h?: number
                          }
                          styles?: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface SportDataWidget extends IHmUIWidget {
                name: string;
            }

            type CanvasPaintOptions = {
                        color?: number
                        line_width?: number
                      };
            type CanvasCoord = number | string;
            type CanvasDrawPointOptions = {
                        x: CanvasCoord
                        y: CanvasCoord
                        color?: number
                      };
            type CanvasDrawLineOptions = {
                        x1: CanvasCoord
                        y1: CanvasCoord
                        x2: CanvasCoord
                        y2: CanvasCoord
                        color?: number
                        line_width?: number
                      };
            type CanvasDrawRectOptions = {
                        x: CanvasCoord
                        y: CanvasCoord
                        w: CanvasCoord
                        h: CanvasCoord
                        color?: number
                        alpha?: number
                        line_width?: number
                        radius?: number
                      };
            type CanvasDrawArcOptions = {
                        x: CanvasCoord
                        y: CanvasCoord
                        w: CanvasCoord
                        h: CanvasCoord
                        color?: number
                        alpha?: number
                        line_width?: number
                        start_angle?: number
                        end_angle?: number
                      };
            type CanvasDrawCircleOptions = {
                        center_x: CanvasCoord
                        center_y: CanvasCoord
                        radius: CanvasCoord
                        color?: number
                        alpha?: number
                        line_width?: number
                      };
            type CanvasDrawEllipseOptions = {
                        center_x: CanvasCoord
                        center_y: CanvasCoord
                        radius_x: CanvasCoord
                        radius_y: CanvasCoord
                        color?: number
                        alpha?: number
                        line_width?: number
                      };
            type CanvasDrawTextOptions = {
                        cntr_coord_style?: boolean
                        x: CanvasCoord
                        y: CanvasCoord
                        text: string
                        color?: number
                        alpha?: number
                        text_size?: number
                      };
            type CanvasDrawImageOptions = {
                        x: CanvasCoord
                        y: CanvasCoord
                        w: CanvasCoord
                        h: CanvasCoord
                        image: string
                        alpha?: number
                      };
            type CanvasPolygonPoint = {
                        x: number
                        y: number
                      };
            type CanvasPolygonOptions = {
                        color?: number
                        data_array: Array<CanvasPolygonPoint>
                      };
            type CanvasTransformOptions = {
                        sx?: number
                        sy?: number
                        rotation?: number
                      };
            type CanvasClearOptions = {
                        x: CanvasCoord
                        y: CanvasCoord
                        w: CanvasCoord
                        h: CanvasCoord
                      };
            type CanvasWidgetOptions = extendsBase<
                        {
                          attrs?: {
                            cntr_coord_style?: boolean
                          }
                          styles?: IHmUIWidgetBasicOptions & {
                            alpha?: number
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface CanvasWidget extends IHmUIWidget {
                name: string;
                setPaint(opts: CanvasPaintOptions): void;
                drawPixel(opts: CanvasDrawPointOptions): void;
                drawLine(opts: CanvasDrawLineOptions): void;
                drawRect(opts: CanvasDrawRectOptions): void;
                drawCircle(opts: CanvasDrawCircleOptions): void;
                strokeCircle(opts: CanvasDrawCircleOptions): void;
                drawEllipse(opts: CanvasDrawEllipseOptions): void;
                strokeEllipse(opts: CanvasDrawEllipseOptions): void;
                drawArc(opts: CanvasDrawArcOptions): void;
                strokeArc(opts: CanvasDrawArcOptions): void;
                drawText(opts: CanvasDrawTextOptions): void;
                drawImage(opts: CanvasDrawImageOptions): void;
                drawPoly(opts: CanvasPolygonOptions): void;
                strokePoly(opts: CanvasPolygonOptions): void;
                clear(opts?: CanvasClearOptions): void;
                transform(opts: CanvasTransformOptions): void;
                addEventListener(eventType: HmUIEventType, listener: IHmUIEventListener): boolean;
            }

            namespace SCROLL_LIST {
                namespace view_type {
                    const TEXT: number;
                    const IMAGE: number;
                    const FILL: number;
                }

                namespace snap_type {
                    const SNAPCENTER_ALL: number;
                    const SNAPCENTER_EXCEPTTITLE: number;
                    const SNAP_TOP: number;
                    const SNAP_BOTTOM: number;
                }
            }

            type ScrollListDataItemOptions = Record<string, unknown> & {
                        type_id?: number
                      };
            type ScrollListLayoutViewOptions = {
                        layout: Record<string, unknown>
                      };
            type ScrollListLayoutConfigChildOptions = {
                        view_type: number
                        id: number
                      };
            type ScrollListLayoutConfigOptions = {
                        parent_id: number
                        children: Array<ScrollListLayoutConfigChildOptions>
                        child_cnt: number
                      };
            type ScrollListTextViewOptions = Partial<IHmUIWidgetBasicOptions> & {
                        key: string
                        color?: number
                        text_size?: number
                        action?: boolean
                        bg_color?: number
                        bg_alpha?: number
                        pos_x?: number
                        text_w?: number
                        bg_radius?: number
                        text_style?: number
                        line_space?: string
                        layout?: Record<string, unknown>
                      };
            type ScrollListImageViewOptions = Partial<IHmUIWidgetBasicOptions> & {
                        key: string
                        action?: boolean
                        layout?: Record<string, unknown>
                      };
            type ScrollListFillViewOptions = Partial<IHmUIWidgetBasicOptions> & {
                        key: string
                        action?: boolean
                        radius?: number
                        alpha?: number
                        layout?: Record<string, unknown>
                      };
            type ScrollListItemConfigOptions = {
                        type_id?: number
                        item_height: number
                        item_bg_color: number
                        item_bg_radius: number
                        text_view?: Array<ScrollListTextViewOptions>
                        text_view_count?: number
                        image_view?: Array<ScrollListImageViewOptions>
                        image_view_count?: number
                        fill_view?: Array<ScrollListFillViewOptions>
                        fill_view_count?: number
                        item_press_effect?: boolean
                        layout_view?: Array<ScrollListLayoutViewOptions>
                        layout_view_count?: number
                        layout_config?: Array<ScrollListLayoutConfigOptions>
                        layout_config_count?: number
                        ratio_flag?: boolean
                        system_focus_normal_color?: number
                        system_focus_normal_alpha?: number
                        item_common_focus?: boolean
                        layout?: Record<string, unknown>
                      };
            type ScrollListDataTypeConfigOptions = {
                        start: number
                        end: number
                        type_id: number
                      };
            type ScrollListOptions = extendsBase<
                        {
                          attrs: {
                            x: number
                            y: number
                            w: number
                            h: number
                            item_space?: number
                            item_config: Array<ScrollListItemConfigOptions>
                            item_config_count: number
                            data_array: Array<ScrollListDataItemOptions>
                            data_count: number
                            item_click_func?: IHmUIEventListener
                            data_type_config?: Array<ScrollListDataTypeConfigOptions>
                            data_type_config_count?: number
                            on_page?: number
                            snap_to_center?: boolean
                            item_focus_change_func?: IHmUIEventListener
                            item_enable_horizon_drag?: boolean
                            item_drag_max_distance?: number
                            snap_type?: number
                            item_common_focus?: boolean
                            item_key_focus_change_func?: IHmUIEventListener
                            enable_scroll_bar?: boolean
                            view_index?: number
                            pos_y?: number
                            system_focus_style?: boolean
                            system_focus_width?: number
                            auto_rtl?: boolean
                            focus_over_func?: IHmUIEventListener
                          }
                          styles: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface ScrollListWidget extends IHmUIWidget {
                name: string;
            }

            type SlideSwitchOptions = extendsBase<
                        {
                          attrs: {
                            checked?: boolean
                            select_bg: string
                            unselect_bg: string
                            slide_src: string
                          }
                          styles: IHmUIWidgetBasicOptions & {
                            slide_select_x: number
                            slide_un_select_x: number

                            slide_y?: number
                          }
                          on?: {
                            checked_change_func?: IHmUIEventListener
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface SlideSwitchWidget extends IHmUIWidget {
                name: string;
            }

            type CycleImageTextListDataItemOptions = {
                        src?: string
                        text: string
                      };
            type CycleImageListOptions = extendsBase<
                        {
                          attrs: {
                            data_array: Array<string>
                            data_size: number
                            item_bg_color?: number
                            item_height: number
                            item_click_func?: IHmUIEventListener
                            item_focus_change_func?: IHmUIEventListener
                          }
                          styles: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface CycleImageListWidget extends IHmUIWidget {
                name: string;
            }

            type CycleListOptions = extendsBase<
                        {
                          attrs: {
                            data_array: Array<CycleImageTextListDataItemOptions>
                            data_size: number
                            item_bg_color: number
                            item_height: number
                            item_text_color: number
                            item_text_size: number
                            item_text_x: number
                            item_text_y: number
                            item_text_width?: number
                            item_text_height?: number
                            item_text_align_h?: IHmUIAlign
                            item_text_align_v?: IHmUIAlign
                            item_image_x?: number
                            item_image_y?: number
                            item_click_func?: IHmUIEventListener
                            item_focus_change_func?: IHmUIEventListener
                          }
                          styles: IHmUIWidgetBasicOptions
                        },
                        IHmUIWidgetOptions
                      >;

            interface CycleListWidget extends IHmUIWidget {
                name: string;
            }

            type PointerOptions = extendsBase<
                        {
                          attrs: {
                            angle?: number
                            src: string
                          }
                          styles: {
                            x: number
                            y: number
                            center_x: number
                            center_y: number
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface PointerWidget extends IHmUIWidget {
                name: string;
            }

            type TextImgOptions = extendsBase<
                        {
                          attrs: {
                            font_array: Array<string>
                            type?: number
                            text?: string
                            unit_sc?: string
                            unit_src?: string
                            unit_en?: string
                            unit_tc?: string
                            imperial_unit_sc?: string
                            imperial_unit_en?: string
                            imperial_unit_tc?: string
                            negative_image?: string
                            dot_image?: string
                          }
                          styles: {
                            x: number
                            y: number
                            h_space?: number
                            align_h?: IHmUIAlign
                          }
                        },
                        IHmUIWidgetOptions
                      >;

            interface TextImgWidget extends IHmUIWidget {
                name: string;
            }

            interface HmUITagWidgetMap {
                group: [GroupWidgetOptions, GroupWidget];
                buttonGroup: [ButtonGroupWidgetOptions, ButtonGroupWidget];
                variantButton: [VariantButtonWidgetOptions, VariantButtonWidget];
                groupView: [GroupViewWidgetOptions, GroupViewWidget];
                canvas: [CanvasWidgetOptions, CanvasWidget];
                viewContainer: [ViewContainerWidgetOptions, ViewContainerWidget];
                virtualContainer: [VirtualContainerWidgetOptions, VirtualContainerWidget];
                pageIndicator: [PageIndicatorWidgetOptions, PageIndicatorWidget];
                pageScrollbar: [PageScrollbarWidgetOptions, PageScrollbarWidget];
                widgetPicker: [WidgetPickerWidgetOptions, WidgetPickerWidget];
                sportData: [SportDataWidgetOptions, SportDataWidget];
                checkboxGroup: [CheckBoxGroupWidgetOptions, CheckBoxGroupWidget];
                checkbox: [CheckBoxWidgetOptions, CheckBoxWidget];
                radioGroup: [RadioGroupWidgetOptions, RadioGroupWidget];
                radio: [RadioWidgetOptions, RadioWidget];
                text: [TextWidgetOptions, TextWidget];
                image: [ImageWidgetOptions, ImageWidget];
                button: [ButtonWidgetOptions, ButtonWidget];
                lineProgress: [LineProgressWidgetOptions, LineProgressWidget];
                imgText: [ImageWidgetOptions, ImgTextWidget];
                arcProgress: [ArcProgressWidgetOptions, ArcProgressWidget];
                imgProgress: [ImgProgressWidgetOptions, ImgProgressWidget];
                imgProgressLevel: [ImgProgressLevelWidgetOptions, ImgProgressLevelWidget];
                imgArcProgress: [ImgArcProgressWidgetOptions, ImgArcProgressWidget];
                imgAnimation: [ImgAnimationWidgetOptions, ImgAnimationWidget];
                scrollList: [ScrollListOptions, ScrollListWidget];
                slideSwitch: [SlideSwitchOptions, SlideSwitchWidget];
                cycleImageList: [CycleImageListOptions, CycleImageListWidget];
                cycleList: [CycleListOptions, CycleListWidget];
                pointer: [PointerOptions, PointerWidget];
                textImg: [TextImgOptions, TextImgWidget];
                qrcode: [QrcodeWidgetOptions, QrcodeWidget];
                strokeRect: [StrokeRectWidgetOptions, StrokeRectWidget];
                arc: [ArcWidgetOptions, ArcWidget];
                fillRect: [FillRectWidgetOptions, FillRectWidget];
                circle: [CircleWidgetOptions, CircleWidget];
                dialog: [DialogWidgetOptions, DialogWidget];
            }

            type IWidgetFactory = {
                        [k in keyof HmUITagWidgetMap]: (opts: HmUITagWidgetMap[k][0]) => HmUITagWidgetMap[k][1]
                      };
        }
    }
}


  
  interface IHmElement {}

  type PublicWidgetTypeToken<T extends string> = number & { readonly __widgetType?: T }
  type PublicPropTypeToken<T extends string> = number & { readonly __propType?: T }

  type PublicWidgetType = HmWearableProgram.DeviceSide.HmUI.IHmUIWidgetType & {
    readonly ARC: PublicWidgetTypeToken<'ARC'>
    readonly ARC_PROGRESS: PublicWidgetTypeToken<'ARC_PROGRESS'>
    readonly BUTTON: PublicWidgetTypeToken<'BUTTON'>
    readonly BUTTON_GROUP: PublicWidgetTypeToken<'BUTTON_GROUP'>
    readonly CANVAS: PublicWidgetTypeToken<'CANVAS'>
    readonly CHECKBOX_GROUP: PublicWidgetTypeToken<'CHECKBOX_GROUP'>
    readonly CIRCLE: PublicWidgetTypeToken<'CIRCLE'>
    readonly CYCLE_IMAGE_TEXT_LIST: PublicWidgetTypeToken<'CYCLE_IMAGE_TEXT_LIST'>
    readonly CYCLE_LIST: PublicWidgetTypeToken<'CYCLE_LIST'>
    readonly DIALOG: PublicWidgetTypeToken<'DIALOG'>
    readonly FILL_RECT: PublicWidgetTypeToken<'FILL_RECT'>
    readonly GROUP: PublicWidgetTypeToken<'GROUP'>
    readonly GROUP_VIEW: PublicWidgetTypeToken<'GROUP_VIEW'>
    readonly IMG: PublicWidgetTypeToken<'IMG'>
    readonly IMG_ANIM: PublicWidgetTypeToken<'IMG_ANIM'>
    readonly IMG_ARC_PROGRESS: PublicWidgetTypeToken<'IMG_ARC_PROGRESS'>
    readonly IMG_GROUP: PublicWidgetTypeToken<'IMG_GROUP'>
    readonly IMG_LEVEL: PublicWidgetTypeToken<'IMG_LEVEL'>
    readonly IMG_PROGRESS: PublicWidgetTypeToken<'IMG_PROGRESS'>
    readonly KEYBOARD: PublicWidgetTypeToken<'KEYBOARD'>
    readonly LINE_PROGRESS: PublicWidgetTypeToken<'LINE_PROGRESS'>
    readonly PAGE_INDICATOR: PublicWidgetTypeToken<'PAGE_INDICATOR'>
    readonly PAGE_SCROLLBAR: PublicWidgetTypeToken<'PAGE_SCROLLBAR'>
    readonly QRCODE: PublicWidgetTypeToken<'QRCODE'>
    readonly RADIO_GROUP: PublicWidgetTypeToken<'RADIO_GROUP'>
    readonly SCROLL_LIST: PublicWidgetTypeToken<'SCROLL_LIST'>
    readonly SLIDE_SWITCH: PublicWidgetTypeToken<'SLIDE_SWITCH'>
    readonly SPORT_DATA: PublicWidgetTypeToken<'SPORT_DATA'>
    readonly STROKE_RECT: PublicWidgetTypeToken<'STROKE_RECT'>
    readonly TEXT: PublicWidgetTypeToken<'TEXT'>
    readonly TEXT_IMG: PublicWidgetTypeToken<'TEXT_IMG'>
    readonly TIME_PICKER: PublicWidgetTypeToken<'TIME_PICKER'>
    readonly VARIANT_BUTTON: PublicWidgetTypeToken<'VARIANT_BUTTON'>
    readonly VIEW_CONTAINER: PublicWidgetTypeToken<'VIEW_CONTAINER'>
    readonly VIRTUAL_CONTAINER: PublicWidgetTypeToken<'VIRTUAL_CONTAINER'>
    readonly WIDGET_PICKER: PublicWidgetTypeToken<'WIDGET_PICKER'>
  }

  type UnbrandedWidgetType = HmWearableProgram.DeviceSide.HmUI.HmUIWidgetType & {
    readonly __widgetType?: never
  }

  type PublicPropType = HmWearableProgram.DeviceSide.HmUI.IHmUIPropertyType & {
    readonly MORE: PublicPropTypeToken<'MORE'>
  }

  type PublicHmUIWidget = Omit<
    Pick<HmWearableProgram.DeviceSide.HmUI.IHmUIWidget,
      | 'setAlpha'
      | 'setColor'
      | 'setEnable'
      | 'setProperties'
      | 'getProperties'
      | 'visible'
      | 'x'
      | 'y'
      | 'w'
      | 'h'
      | 'getId'
      | 'getType'
      | 'getProperty'
      | 'addEventListener'
      | 'removeEventListener'
    >,
    'setProperty'
  > & {
    setProperty(
      prop: PublicPropType['MORE'],
      val: Record<string, unknown>,
    ): boolean
  }

  type HmUIBaseCreateWidgetOptions = {
  id?: string
  dataset?: string
  parent?: HmWearableProgram.DeviceSide.HmUI.IHmUIWidget
  layout?: HmWearableProgram.DeviceSide.HmUI.ILayoutStyle
  enable?: boolean
}

  type HmUIArcCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  end_angle?: number
  h?: number
  id?: string
  line_width?: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  start_angle?: number
  w?: number
  x?: number
  y?: number
}

  type HmUIArcProgressCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  center_x: number
  center_y: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  color: number
  dataset?: string
  end_angle: number
  h?: number
  id?: string
  level?: number
  line_width: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  radius: number
  src_bg?: string
  start_angle: number
  w?: number
  x?: number
  y?: number
}

  type HmUIButtonCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  align_h?: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIAlign]
  align_v?: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIAlign]
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  color?: number
  dataset?: string
  font?: string
  h: number
  id?: string
  longpress_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  normal_color?: number
  normal_src?: string
  press_color?: number
  press_src?: string
  radius?: number
  text: string
  text_size?: number
  text_w?: number
  w: number
  x: number
  y: number
}

  type HmUIButtonGroupCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  enable?: boolean
  floating?: boolean
  focusChange?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  focusEnd?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  focusLoop?: boolean
  focusOver?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  h: number
  id?: string
  maxBtnCnt?: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  scrollEnable?: boolean
  target?: HmWearableProgram.DeviceSide.HmUI.IHmUIWidget
  w: number
  x: number
  y: number
  zIndex?: number
}

  type HmUICanvasCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  alpha?: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  cntr_coord_style?: boolean
  dataset?: string
  h?: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  w?: number
  x?: number
  y?: number
}

  type HmUICheckboxGroupCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  check_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  select_src: string
  unselect_src: string
  w: number
  x: number
  y: number
}

  type HmUICircleCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  alpha?: number
  center_x: number
  center_y: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  color: number
  dataset?: string
  h?: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  radius: number
  w?: number
  x?: number
  y?: number
}

  type HmUICycleImageTextListCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  data_array: Array<HmWearableProgram.DeviceSide.HmUI.CycleImageTextListDataItemOptions>
  data_size: number
  dataset?: string
  h: number
  id?: string
  item_bg_color: number
  item_click_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  item_focus_change_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  item_height: number
  item_image_x?: number
  item_image_y?: number
  item_text_align_h?: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIAlign]
  item_text_align_v?: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIAlign]
  item_text_color: number
  item_text_height?: number
  item_text_size: number
  item_text_width?: number
  item_text_x: number
  item_text_y: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  w: number
  x: number
  y: number
}

  type HmUICycleListCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  data_array: Array<string>
  data_size: number
  dataset?: string
  h: number
  id?: string
  item_bg_color?: number
  item_click_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  item_focus_change_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  item_height: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  w: number
  x: number
  y: number
}

  type HmUIDialogCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  cancel_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  cancel_normal_color?: number
  cancel_normal_src?: string
  cancel_press_color?: number
  cancel_press_src?: string
  cancel_text?: string
  cancel_text_color?: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  content_bg_color?: number
  content_text_align_h?: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIAlign]
  content_text_align_v?: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIAlign]
  content_text_color?: number
  content_text_size?: number
  dataset?: string
  dialog_align_h?: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIAlign]
  dialog_align_v?: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIAlign]
  h?: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  ok_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  ok_normal_color?: number
  ok_normal_src?: string
  ok_press_color?: number
  ok_press_src?: string
  ok_text?: string
  ok_text_color?: number
  text: string
  w?: number
  x?: number
  y?: number
}

  type HmUIFillRectCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  angle: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  color: number
  dataset?: string
  h: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  radius: number
  w: number
  x: number
  y: number
}

  type HmUIGroupCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h?: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  w?: number
  x?: number
  y?: number
}

  type HmUIGroupViewCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  btnClickFunc?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  count: number
  dataset?: string
  focusLoop?: boolean
  h: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  target?: HmWearableProgram.DeviceSide.HmUI.IHmUIWidget
  w: number
  x: number
  y: number
}

  type HmUIImgCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  alpha?: number
  angle?: number
  auto_scale?: boolean
  auto_scale_obj_fit?: boolean
  center_x?: number
  center_y?: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h?: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  pos_x?: number
  pos_y?: number
  src?: string
  w?: number
  x?: number
  y?: number
}

  type HmUIImgAnimCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  anim_complete_call: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  anim_ext: string
  anim_fps: number
  anim_path: string
  anim_prefix: string
  anim_size: number
  anim_status: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h?: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  repeat_count: number
  w?: number
  x: number
  y: number
}

  type HmUIImgArcProgressCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  arc_type: number
  center_x: number
  center_y: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  end_angle: number
  h?: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  pos_x?: number
  pos_y?: number
  radius: number
  src: string
  start_angle: number
  w?: number
  x?: number
  y?: number
}

  type HmUIImgGroupCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h?: number
  id?: string
  image_array: Array<string>
  image_length?: number
  mode?: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  show_level?: number
  src?: string
  w?: number
  x?: number
  y?: number
}

  type HmUIImgLevelCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h?: number
  id?: string
  image_array: Array<string>
  image_length: number
  level?: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  shortcut?: boolean
  type?: number
  w?: number
  x?: number
  y?: number
}

  type HmUIImgProgressCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h?: number
  id?: string
  image_array: Array<string>
  image_length: number
  level?: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  w?: number
  x?: number
  y?: number
}

  type HmUIKeyboardCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_func: (keyboard: HmWearableProgram.DeviceSide.HmUI.KeyboardWidget, id: number, value: number | string, mode: number) => void
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h?: number
  id?: string
  key_attr: HmWearableProgram.DeviceSide.HmUI.KeyboardKeyAttr[]
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  w?: number
  x?: number
  y?: number
}

  type HmUILineProgressCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  progress?: number
  progress_fill: {
              alpha?: number
              radius?: number
              color?: number
            }
  track_fill?: {
              alpha?: number
              radius?: number
              color?: number
            }
  type?: number
  w: number
  x: number
  y: number
}

  type HmUIPageIndicatorCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  align_h?: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIAlign]
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  element_height?: number
  element_radius?: number
  h?: number
  h_space?: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  select_color?: number
  select_src: string
  unselect_color?: number
  unselect_src: string
  use_color?: boolean
  v_space?: number
  w?: number
  x?: number
  y?: number
}

  type HmUIPageScrollbarCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h?: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  target?: HmWearableProgram.DeviceSide.HmUI.IHmUIWidget
  w?: number
  x?: number
  y?: number
}

  type HmUIQrcodeCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  bg_h?: number
  bg_radius?: number
  bg_w?: number
  bg_x?: number
  bg_y?: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  content: string
  dataset?: string
  h?: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  w?: number
  x?: number
  y?: number
}

  type HmUIRadioGroupCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  check_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  select_src: string
  unselect_src: string
  w: number
  x: number
  y: number
}

  type HmUIScrollListCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  auto_rtl?: boolean
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  data_array: Array<HmWearableProgram.DeviceSide.HmUI.ScrollListDataItemOptions>
  data_count: number
  data_type_config?: Array<HmWearableProgram.DeviceSide.HmUI.ScrollListDataTypeConfigOptions>
  data_type_config_count?: number
  dataset?: string
  enable_scroll_bar?: boolean
  focus_over_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  h: number
  id?: string
  item_click_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  item_common_focus?: boolean
  item_config: Array<HmWearableProgram.DeviceSide.HmUI.ScrollListItemConfigOptions>
  item_config_count: number
  item_drag_max_distance?: number
  item_enable_horizon_drag?: boolean
  item_focus_change_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  item_key_focus_change_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  item_space?: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  on_page?: number
  pos_y?: number
  snap_to_center?: boolean
  snap_type?: number
  system_focus_style?: boolean
  system_focus_width?: number
  view_index?: number
  w: number
  x: number
  y: number
}

  type HmUISlideSwitchCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  checked?: boolean
  checked_change_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  select_bg: string
  slide_select_x: number
  slide_src: string
  slide_un_select_x: number
  slide_y?: number
  unselect_bg: string
  w: number
  x: number
  y: number
}

  type HmUISportDataCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  category: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  count?: number
  dataset?: string
  default_type: number
  edit_id: number
  h?: number
  id?: string
  line_color?: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  optional_types?: number[]
  rect_visible?: boolean
  sub_text_color?: number
  sub_text_h?: number
  sub_text_size?: number
  sub_text_visible?: boolean
  sub_text_w?: number
  sub_text_x?: number
  sub_text_y?: number
  text_color?: number
  text_h?: number
  text_size?: number
  text_w?: number
  text_x?: number
  text_y?: number
  w?: number
  x?: number
  y?: number
}

  type HmUIStrokeRectCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  angle: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  color: number
  dataset?: string
  h: number
  id: string
  line_width: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  radius: number
  w: number
  x: number
  y: number
}

  type HmUITextCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  align_h?: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIAlign]
  align_v?: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIAlign]
  alpha?: number
  char_space?: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  color?: number
  dataset?: string
  end_angle?: number
  font?: string
  h?: number
  id?: string
  line_space?: number
  mode?: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  radius?: number
  start_angle?: number
  text?: string
  text_i18n?: Record<string, string>
  text_size?: number
  text_style?: HmWearableProgram.DeviceSide.HmUI.IHmUIWrapTextStyle[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIWrapTextStyle]
  w?: number
  x?: number
  y?: number
}

  type HmUITextImgCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  align_h?: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign[keyof HmWearableProgram.DeviceSide.HmUI.IHmUIAlign]
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  dot_image?: string
  font_array: Array<string>
  h?: number
  h_space?: number
  id?: string
  imperial_unit_en?: string
  imperial_unit_sc?: string
  imperial_unit_tc?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  negative_image?: string
  text?: string
  type?: number
  unit_en?: string
  unit_sc?: string
  unit_src?: string
  unit_tc?: string
  w?: number
  x: number
  y: number
}

  type HmUITimePickerCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  done_icon?: string
  endYear?: number
  font_size: number
  h?: number
  id?: string
  initDay?: number
  initHour?: number
  initMin?: number
  initMonth?: number
  initYear?: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  picker_cb?: (picker: HmWearableProgram.DeviceSide.HmUI.TimePickerWidget, event_type: number, column: number, value_index: number) => void
  select_font_size: number
  startYear?: number
  style: 1
  title?: string
  type: 0 | 1
  w?: number
  x?: number
  y?: number
}

  type HmUIVariantButtonCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  backImage?: string
  backVisible?: boolean
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_func?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h: number
  id?: string
  imageH?: number
  imageW?: number
  index?: number
  leftFocus?: boolean
  leftImage?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  rightFocus?: boolean
  rightImage?: string
  selectImage?: string
  selVisible?: boolean
  src?: string
  subText?: string
  systemStyle?: boolean
  text?: string
  type: number
  w: number
  x: number
  y: number
}

  type HmUIViewContainerCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  bounce?: number
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h?: number
  horizontal?: boolean
  id?: string
  modal?: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  page?: number
  pos_x?: number
  pos_y?: number
  scroll_complete_func?: (info: HmWearableProgram.DeviceSide.HmUI.ViewContainerScrollInfo) => void
  scroll_enable?: number
  scroll_frame_func?: (info: HmWearableProgram.DeviceSide.HmUI.ViewContainerScrollInfo) => void
  w?: number
  x?: number
  y?: number
  z_index?: number
}

  type HmUIVirtualContainerCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  dataset?: string
  h?: number
  id?: string
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  w?: number
  x?: number
  y?: number
}

  type HmUIWidgetPickerCreateWidgetOptions = HmUIBaseCreateWidgetOptions & {
  click_down?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  click_up?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  data_config: HmWearableProgram.DeviceSide.HmUI.WidgetPickerColumnConfig[]
  dataset?: string
  done_icon?: string
  h?: number
  id?: string
  init_col_index?: number
  move?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_in?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  move_out?: HmWearableProgram.DeviceSide.HmUI.IHmUIEventListener
  nb_of_columns: number
  normal_color?: number
  picker_cb?: (picker: HmWearableProgram.DeviceSide.HmUI.WidgetPickerWidget, event_type: number, column: number, value_index: number) => void
  select_color?: number
  subtitle?: string
  title?: string
  w?: number
  x?: number
  y?: number
}

  type PublicArcWidget = PublicHmUIWidget

  type PublicArcProgressWidget = PublicHmUIWidget

  type PublicButtonWidget = PublicHmUIWidget

  type PublicButtonGroupWidget = PublicHmUIWidget &
  Pick<HmWearableProgram.DeviceSide.HmUI.ButtonGroupWidget,
    | 'init'
  >

  type PublicCanvasWidget = PublicHmUIWidget &
  Pick<HmWearableProgram.DeviceSide.HmUI.CanvasWidget,
    | 'addEventListener'
    | 'clear'
    | 'drawArc'
    | 'drawCircle'
    | 'drawEllipse'
    | 'drawImage'
    | 'drawLine'
    | 'drawPixel'
    | 'drawPoly'
    | 'drawRect'
    | 'drawText'
    | 'setPaint'
    | 'strokeArc'
    | 'strokeCircle'
    | 'strokeEllipse'
    | 'strokePoly'
    | 'transform'
  >

  type PublicCheckBoxGroupWidget = PublicHmUIWidget

  type PublicCircleWidget = PublicHmUIWidget

  type PublicCycleListWidget = PublicHmUIWidget

  type PublicCycleImageListWidget = PublicHmUIWidget

  type PublicDialogWidget = PublicHmUIWidget

  type PublicFillRectWidget = PublicHmUIWidget

  type PublicGroupWidget = PublicHmUIWidget

  type PublicGroupViewWidget = PublicHmUIWidget &
  Pick<HmWearableProgram.DeviceSide.HmUI.GroupViewWidget,
    | 'addGroup'
    | 'addLine'
    | 'addPslIconButton'
    | 'addPslImageCapButton'
    | 'addPslNormalCapButton'
    | 'createLine'
    | 'init'
    | 'relayout'
    | 'setDirty'
    | 'setItemIsButton'
    | 'setItemTopMargin'
    | 'setItemToView'
    | 'setItemVisible'
  >

  type PublicImageWidget = PublicHmUIWidget

  type PublicImgAnimationWidget = PublicHmUIWidget

  type PublicImgArcProgressWidget = PublicHmUIWidget

  type PublicImgGroupWidget = PublicHmUIWidget

  type PublicImgProgressLevelWidget = PublicHmUIWidget

  type PublicImgProgressWidget = PublicHmUIWidget

  type PublicKeyboardWidget = PublicHmUIWidget

  type PublicLineProgressWidget = PublicHmUIWidget

  type PublicPageIndicatorWidget = PublicHmUIWidget

  type PublicPageScrollbarWidget = PublicHmUIWidget

  type PublicQrcodeWidget = PublicHmUIWidget

  type PublicRadioGroupWidget = PublicHmUIWidget

  type PublicScrollListWidget = PublicHmUIWidget

  type PublicSlideSwitchWidget = PublicHmUIWidget

  type PublicSportDataWidget = PublicHmUIWidget

  type PublicStrokeRectWidget = PublicHmUIWidget

  type PublicTextWidget = PublicHmUIWidget &
  Pick<HmWearableProgram.DeviceSide.HmUI.TextWidget,
    | 'deleteCharacter'
    | 'enableCursor'
    | 'getCursorHeight'
    | 'getCursorIndex'
    | 'getCursorPos'
    | 'getLineHeight'
    | 'getTextCount'
    | 'insertString'
    | 'setTextOutline'
  >

  type PublicTextImgWidget = PublicHmUIWidget

  type PublicTimePickerWidget = PublicHmUIWidget

  type PublicVariantButtonWidget = PublicHmUIWidget

  type PublicViewContainerWidget = PublicHmUIWidget

  type PublicVirtualContainerWidget = PublicHmUIWidget

  type PublicWidgetPickerWidget = PublicHmUIWidget

  interface CreateWidget {
    (
      widgetType: PublicWidgetType['ARC'],
      options: HmUIArcCreateWidgetOptions,
    ): PublicArcWidget
    (
      widgetType: PublicWidgetType['ARC_PROGRESS'],
      options: HmUIArcProgressCreateWidgetOptions,
    ): PublicArcProgressWidget
    (
      widgetType: PublicWidgetType['BUTTON'],
      options: HmUIButtonCreateWidgetOptions,
    ): PublicButtonWidget
    (
      widgetType: PublicWidgetType['BUTTON_GROUP'],
      options: HmUIButtonGroupCreateWidgetOptions,
    ): PublicButtonGroupWidget
    (
      widgetType: PublicWidgetType['CANVAS'],
      options: HmUICanvasCreateWidgetOptions,
    ): PublicCanvasWidget
    (
      widgetType: PublicWidgetType['CHECKBOX_GROUP'],
      options: HmUICheckboxGroupCreateWidgetOptions,
    ): PublicCheckBoxGroupWidget
    (
      widgetType: PublicWidgetType['CIRCLE'],
      options: HmUICircleCreateWidgetOptions,
    ): PublicCircleWidget
    (
      widgetType: PublicWidgetType['CYCLE_IMAGE_TEXT_LIST'],
      options: HmUICycleImageTextListCreateWidgetOptions,
    ): PublicCycleListWidget
    (
      widgetType: PublicWidgetType['CYCLE_LIST'],
      options: HmUICycleListCreateWidgetOptions,
    ): PublicCycleImageListWidget
    (
      widgetType: PublicWidgetType['DIALOG'],
      options: HmUIDialogCreateWidgetOptions,
    ): PublicDialogWidget
    (
      widgetType: PublicWidgetType['FILL_RECT'],
      options: HmUIFillRectCreateWidgetOptions,
    ): PublicFillRectWidget
    (
      widgetType: PublicWidgetType['GROUP'],
      options: HmUIGroupCreateWidgetOptions,
    ): PublicGroupWidget
    (
      widgetType: PublicWidgetType['GROUP_VIEW'],
      options: HmUIGroupViewCreateWidgetOptions,
    ): PublicGroupViewWidget
    (
      widgetType: PublicWidgetType['IMG'],
      options: HmUIImgCreateWidgetOptions,
    ): PublicImageWidget
    (
      widgetType: PublicWidgetType['IMG_ANIM'],
      options: HmUIImgAnimCreateWidgetOptions,
    ): PublicImgAnimationWidget
    (
      widgetType: PublicWidgetType['IMG_ARC_PROGRESS'],
      options: HmUIImgArcProgressCreateWidgetOptions,
    ): PublicImgArcProgressWidget
    (
      widgetType: PublicWidgetType['IMG_GROUP'],
      options: HmUIImgGroupCreateWidgetOptions,
    ): PublicImgGroupWidget
    (
      widgetType: PublicWidgetType['IMG_LEVEL'],
      options: HmUIImgLevelCreateWidgetOptions,
    ): PublicImgProgressLevelWidget
    (
      widgetType: PublicWidgetType['IMG_PROGRESS'],
      options: HmUIImgProgressCreateWidgetOptions,
    ): PublicImgProgressWidget
    (
      widgetType: PublicWidgetType['KEYBOARD'],
      options: HmUIKeyboardCreateWidgetOptions,
    ): PublicKeyboardWidget
    (
      widgetType: PublicWidgetType['LINE_PROGRESS'],
      options: HmUILineProgressCreateWidgetOptions,
    ): PublicLineProgressWidget
    (
      widgetType: PublicWidgetType['PAGE_INDICATOR'],
      options: HmUIPageIndicatorCreateWidgetOptions,
    ): PublicPageIndicatorWidget
    (
      widgetType: PublicWidgetType['PAGE_SCROLLBAR'],
      options: HmUIPageScrollbarCreateWidgetOptions,
    ): PublicPageScrollbarWidget
    (
      widgetType: PublicWidgetType['QRCODE'],
      options: HmUIQrcodeCreateWidgetOptions,
    ): PublicQrcodeWidget
    (
      widgetType: PublicWidgetType['RADIO_GROUP'],
      options: HmUIRadioGroupCreateWidgetOptions,
    ): PublicRadioGroupWidget
    (
      widgetType: PublicWidgetType['SCROLL_LIST'],
      options: HmUIScrollListCreateWidgetOptions,
    ): PublicScrollListWidget
    (
      widgetType: PublicWidgetType['SLIDE_SWITCH'],
      options: HmUISlideSwitchCreateWidgetOptions,
    ): PublicSlideSwitchWidget
    (
      widgetType: PublicWidgetType['SPORT_DATA'],
      options: HmUISportDataCreateWidgetOptions,
    ): PublicSportDataWidget
    (
      widgetType: PublicWidgetType['STROKE_RECT'],
      options: HmUIStrokeRectCreateWidgetOptions,
    ): PublicStrokeRectWidget
    (
      widgetType: PublicWidgetType['TEXT'],
      options: HmUITextCreateWidgetOptions,
    ): PublicTextWidget
    (
      widgetType: PublicWidgetType['TEXT_IMG'],
      options: HmUITextImgCreateWidgetOptions,
    ): PublicTextImgWidget
    (
      widgetType: PublicWidgetType['TIME_PICKER'],
      options: HmUITimePickerCreateWidgetOptions,
    ): PublicTimePickerWidget
    (
      widgetType: PublicWidgetType['VARIANT_BUTTON'],
      options: HmUIVariantButtonCreateWidgetOptions,
    ): PublicVariantButtonWidget
    (
      widgetType: PublicWidgetType['VIEW_CONTAINER'],
      options: HmUIViewContainerCreateWidgetOptions,
    ): PublicViewContainerWidget
    (
      widgetType: PublicWidgetType['VIRTUAL_CONTAINER'],
      options: HmUIVirtualContainerCreateWidgetOptions,
    ): PublicVirtualContainerWidget
    (
      widgetType: PublicWidgetType['WIDGET_PICKER'],
      options: HmUIWidgetPickerCreateWidgetOptions,
    ): PublicWidgetPickerWidget
    (
      widgetType: UnbrandedWidgetType,
      options: HmWearableProgram.DeviceSide.HmUI.HmUIWidgetOptions,
    ): PublicHmUIWidget
  }

  const createWidget: CreateWidget
  const widget: PublicWidgetType
  const align: HmWearableProgram.DeviceSide.HmUI.IHmUIAlign
  const prop: PublicPropType
  const text_style: HmWearableProgram.DeviceSide.HmUI.IHmUIWrapTextStyle
  const event: HmWearableProgram.DeviceSide.HmUI.IHmUIEventType
    const arc_type: HmWearableProgram.DeviceSide.HmUI.IHmUIArcType
    const data_type: HmWearableProgram.DeviceSide.HmUI.IHmUIDataType
    const sport_data: HmWearableProgram.DeviceSide.HmUI.IHmUISportDataType
    const edit_widget_group_type: HmWearableProgram.DeviceSide.HmUI.IHmUIEditWidgetGroupType
    const VARIANT_BUTTON: HmWearableProgram.DeviceSide.HmUI.IHmUIVariantButton

  
}
