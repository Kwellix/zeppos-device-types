declare module '@zos/ble' {

  namespace mstStartScan {
    /**
     * @en Callback function for receiving scan results
     * @zh 接收扫描结果回调函数
     */
    type Callback = (result: ScanResult, filter?: Filter, timeout?: Timeout) => void

    /**
     * @output
     */
    interface ScanResult {
      /**
       * @en Device name
       * @zh 设备名称
       */
      dev_name: string
      /**
       * @en Device MAC address, 6 bytes long, Uint8Array view recommended
       * @zh 设备 MAC 地址，长度 6 字节，建议使用 Uint8Array 视图
       */
      dev_addr: ArrayBuffer
      /**
       * @en RSSI Signal Strength
       * @zh RSSI 信号强度
       */
      rssi: number
      /**
       * @en Service UUID array in broadcast data
       * @zh 广播数据中的 Service UUID 数组
       */
      service_uuid_array: Array<string>
      /**
       * @en Array of Service Data Objects in Broadcast Data
       * @zh 广播数据中的 Service 数据对象数组
       */
      service_data_array: Array<ServiceData>
    }

    /**
     * @output
     */
    interface ServiceData {
      /**
       * @en Service UUID
       * @zh Service UUID
       */
      uuid: string
      /**
       * @en Service data
       * @zh Service 数据
       */
      service_data: ArrayBuffer
    }

    interface Filter {
      /**
       * @en Device name
       * @zh 设备名称
       */
      device_name?: string
      /**
       * @en Whether to use fuzzy mode for device name matching
       * @zh 设备名称匹配是否采用模糊模式
       */
      fuzzy_mode?: string
      /**
       * @en Service UUID
       * @zh Service UUID
       */
      service_uuid?: string
      /**
       * @en Service data UUID
       * @zh Service 数据 UUID
       */
      service_data_uuid?: string
      /**
       * @en Manufacturer ID
       * @zh 设备商 ID
       */
      manufacturer_id?: number
    }

    interface Timeout {
      /**
       * @en Scanning duration, in seconds. Scanning automatically stops when the given duration is reached
       * @zh 扫描持续时长，单位秒。到给定的时长后，扫描自动停止
       */
      duration?: number
      /**
       * @en Callback function after scanning stops
       * @zh 扫描停止后的回调函数
       */
      on_timeout?: () => void
    }

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Scan and discover Bluetooth peripherals, which can be filtered according to filter conditions
   * @zh 扫描并发现蓝牙外围设备，可以根据 filter 条件进行过滤
   * @version 3.0
   * @example
   * ```js
   * import { mstStartScan } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstStartScan(
    callback: mstStartScan.Callback,
    filter?: mstStartScan.Filter,
  ): mstStartScan.Result
  namespace mstStopScan {
    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Stop device scanning, used in conjunction with `mstStartScan`
   * @zh 停止设备扫描，与 `mstStartScan` 配套使用
   * @version 3.0
   * @example
   * ```js
   * import { mstStopScan } from '@zos/ble'
   *
   * mstStopScan()
   * ```
   */
  function mstStopScan(): mstStopScan.Result
  namespace mstConnect {
    /**
     * @en Device MAC address, 6 bytes long, Uint8Array view recommended
     * @zh 设备 MAC 地址，长度 6 字节，建议使用 Uint8Array 视图
     */
    type DeviceAddress = ArrayBuffer

    /**
     * @en Connection result callback function
     * @zh 连接结果回调函数
     */
    type Callback = (result: ConnectResult) => void

    /**
     * @output
     */
    interface ConnectResult {
      /**
       * @en Connection status, `0` - successful connection, `1` - failed connection, `2` - disconnected
       * @zh 连接状态，`0` - 连接成功、`1` - 连接失败、`2` - 断连
       */
      connected: number
      /**
       * @en The ID of the connection is returned when the connection is successful
       * @zh 连接成功时返回连接的 ID
       */
      connect_id: number
      /**
       * @en Device MAC address, 6 bytes long, Uint8Array view recommended
       * @zh 设备 MAC 地址，长度 6 字节，建议使用 Uint8Array 视图
       */
      dev_addr: ArrayBuffer
    }

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Connecting Devices
   * @zh 连接设备
   * @version 3.0
   * @example
   * ```js
   * import { mstConnect } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstConnect(
    deviceAddress: mstConnect.DeviceAddress,
    callback: mstConnect.Callback,
  ): mstConnect.Result
  namespace mstDisconnect {
    /**
     * @en The connection ID returned when the connection is successful using the `mstConnect` API
     * @zh 使用 `mstConnect` API 连接成功时返回的连接 ID
     */
    type ConnectId = number

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Disconnecting devices
   * @zh 断开设备连接
   * @version 3.0
   * @example
   * ```js
   * import { mstDisconnect } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstDisconnect(connectId: mstDisconnect.ConnectId): mstDisconnect.Result
  namespace mstPair {
    /**
     * @en The connection ID returned when the connection is successful using the `mstConnect` API
     * @zh 使用 `mstConnect` API 连接成功时返回的连接 ID
     */
    type ConnectId = number

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Pairing with devices via `connectId`
   * @zh 通过 `connectId` 与设备进行配对
   * @version 3.0
   * @example
   * ```js
   * import { mstPair } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstPair(connectId: mstPair.ConnectId): mstPair.Result
  namespace mstGetConnIdByRemoteAddr {
    /**
     * @en Device MAC address, 6 bytes long, Uint8Array view recommended
     * @zh 设备 MAC 地址，长度 6 字节，建议使用 Uint8Array 视图
     */
    type DeviceAddress = ArrayBuffer

    /**
     * @en The result of the function call returns `connectId` for a successful query and `undefined` for a failed query.
     * @zh 函数调用结果，查询成功返回 `connectId`，查询失败返回 `undefined`
     */
    type Result = number | undefined
  }

  /**
   * @en Look up the connection Id based on the Peripheral MAC address
   * @zh 根据从机 MAC 地址查询连接 Id
   * @version 3.0
   * @example
   * ```js
   * import { mstGetConnIdByRemoteAddr } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstGetConnIdByRemoteAddr(
    deviceAddress: mstGetConnIdByRemoteAddr.DeviceAddress,
  ): mstGetConnIdByRemoteAddr.Result
  namespace mstBuildProfile {
    interface ProfileObj {
      /**
       * @en Whether to pair automatically
       * @zh 是否自动配对
       */
      pair: boolean
      /**
       * @en Connection ID
       * @zh 连接 ID
       */
      id: number
      /**
       * @en Profile Name
       * @zh Profile 名称
       */
      profile: string
      /**
       * @en Device MAC address, 6 bytes long, Uint8Array view recommended
       * @zh 设备 MAC 地址，长度 6 字节，建议使用 Uint8Array 视图
       */
      dev: ArrayBuffer
      /**
       * @en `list` array length
       * @zh `list` 数组长度
       */
      len: number
      /**
       * @en Services list array
       * @zh Services list 数组
       */
      list: Array<ServicesObj>
    }

    interface ServicesObj {
      /**
       * @en `list` array length
       * @zh `list` 数组长度
       */
      len: number
      /**
       * @en Service array
       * @zh Service 数组
       */
      list: Array<ServiceObj>
    }

    interface ServiceObj {
      /**
       * @en Service UUID
       * @zh Service UUID
       */
      uuid: string
      /**
       * @en Permission control, default `0` No control
       * @zh 权限控制，默认 `0` 不控制
       * @defaultValue 0
       */
      permission?: number
      /**
       * @en Characteristic array length
       * @zh Characteristic 数组长度
       */
      len1: number
      /**
       * @en Characteristic length
       * @zh Characteristic 数组
       */
      list: Array<CharacteristicObj>
    }

    interface CharacteristicObj {
      /**
       * @en Characteristic UUID
       * @zh Characteristic UUID
       */
      uuid: string
      /**
       * @en Permission control, default `0` No control
       * @zh 权限控制，默认 `0` 不控制
       * @defaultValue 0
       */
      permission?: number
      /**
       * @en Descriptor array length
       * @zh Descriptor 数组长度
       */
      len: number
      /**
       * @en Descriptor array
       * @zh Descriptor 数组
       */
      list: Array<DescriptorObj>
    }

    interface DescriptorObj {
      /**
       * @en Descriptor UUID
       * @zh Descriptor UUID
       */
      uuid: string
      /**
       * @en Permission control, default `0` No control
       * @zh 权限控制，默认 `0` 不控制
       * @defaultValue 0
       */
      permission?: number
    }

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Creating a Profile connection
   * @zh 创建 Profile 连接
   * @version 3.0
   * @example
   * ```js
   * import { mstGetConnIdByRemoteAddr } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstBuildProfile(profile: mstBuildProfile.ProfileObj): mstBuildProfile.Result
  namespace mstOnPrepare {
    /**
     * @en Listening to the prepare event callback function
     * @zh 监听 prepare 事件回调函数
     */
    type Callback = (profile: Profile, status: Status) => void

    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en Status, `0` indicates success
     * @zh 状态，`0` 表示成功
     */
    type Status = number

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Register the prepare operation callback function
   * @zh 注册 prepare 操作回调函数
   * @version 3.0
   * @example
   * ```js
   * import { mstOnPrepare } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstOnPrepare(callback: mstOnPrepare.Callback): mstOnPrepare.Result
  namespace mstOnCharaReadComplete {
    /**
     * @en Read Characteristic Completion Callback Function
     * @zh 读取 Characteristic 完成回调函数
     */
    type Callback = (profile: Profile, uuid: UUID, status: Status) => void

    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en Characteristic UUID string
     * @zh Characteristic UUID 字符串
     */
    type UUID = string

    /**
     * @en Status, `0` indicates success
     * @zh 状态，`0` 表示成功
     */
    type Status = number

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Register the read Characteristic completion callback function
   * @zh 注册读取 Characteristic 完成回调函数
   * @version 3.0
   * @example
   * ```js
   * import { mstOnCharaReadComplete } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstOnCharaReadComplete(
    callback: mstOnCharaReadComplete.Callback,
  ): mstOnCharaReadComplete.Result
  namespace mstOnCharaValueArrived {
    /**
     * @en Read Characteristic data to the callback function
     * @zh 读取 Characteristic 数据到达回调函数
     */
    type Callback = (profile: Profile, uuid: UUID, data: Data, status: Status) => void

    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en Characteristic UUID string
     * @zh Characteristic UUID 字符串
     */
    type UUID = string

    /**
     * @en Reads the data using the Uint8Array view
     * @zh 读取到的数据，使用 Uint8Array 视图读取
     */
    type Data = ArrayBuffer

    /**
     * @en Status, `0` indicates success
     * @zh 状态，`0` 表示成功
     */
    type Status = number

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Register to read Characteristic data to the callback function
   * @zh 注册读取 Characteristic 数据到达回调函数
   * @version 3.0
   * @example
   * ```js
   * import { mstOnCharaValueArrived } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstOnCharaValueArrived(
    callback: mstOnCharaValueArrived.Callback,
  ): mstOnCharaValueArrived.Result
  namespace mstOnCharaWriteComplete {
    /**
     * @en Write Characteristic Data Completion Callback Function
     * @zh 写入 Characteristic 数据完成回调函数
     */
    type Callback = (profile: Profile, uuid: UUID, status: Status) => void

    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en Characteristic UUID string
     * @zh Characteristic UUID 字符串
     */
    type UUID = string

    /**
     * @en Status, `0` indicates success
     * @zh 状态，`0` 表示成功
     */
    type Status = number

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Register the Write Characteristic data completion callback function
   * @zh 注册写入 Characteristic 数据完成回调函数
   * @version 3.0
   * @example
   * ```js
   * import { mstOnCharaWriteComplete } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstOnCharaWriteComplete(
    callback: mstOnCharaWriteComplete.Callback,
  ): mstOnCharaWriteComplete.Result
  namespace mstOnDescValueArrived {
    /**
     * @en Read Descriptor data to the callback function
     * @zh 读取 Descriptor 数据到达回调函数
     */
    type Callback = (
      profile: Profile,
      uuid: UUID,
      descUUID: DescUUID,
      data: Data,
      status: Status,
    ) => void

    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en Characteristic UUID string
     * @zh Characteristic UUID 字符串
     */
    type UUID = string

    /**
     * @en Descriptor UUID string
     * @zh Descriptor UUID 字符串
     */
    type DescUUID = string

    /**
     * @en Reads the data using the Uint8Array view
     * @zh 读取到的数据，使用 Uint8Array 视图读取
     */
    type Data = ArrayBuffer

    /**
     * @en Status, `0` indicates success
     * @zh 状态，`0` 表示成功
     */
    type Status = number

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Register the Read Descriptor data arrival callback function
   * @zh 注册读取 Descriptor 数据到达回调函数
   * @version 3.0
   * @example
   * ```js
   * import { mstOnDescValueArrived } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstOnDescValueArrived(
    callback: mstOnDescValueArrived.Callback,
  ): mstOnDescValueArrived.Result
  namespace mstOnDescWriteComplete {
    /**
     * @en Descriptor Data write completion callback function
     * @zh Descriptor 数据写入完成回调函数
     */
    type Callback = (profile: Profile, uuid: UUID, descUUID: DescUUID, status: Status) => void

    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en Characteristic UUID string
     * @zh Characteristic UUID 字符串
     */
    type UUID = string

    /**
     * @en Descriptor UUID string
     * @zh Descriptor UUID 字符串
     */
    type DescUUID = string

    /**
     * @en Status, `0` indicates success
     * @zh 状态，`0` 表示成功
     */
    type Status = number

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Register Descriptor data write completion callback function
   * @zh 注册 Descriptor 数据写入完成回调函数
   * @version 3.0
   * @example
   * ```js
   * import { mstOnDescWriteComplete } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstOnDescWriteComplete(
    callback: mstOnDescWriteComplete.Callback,
  ): mstOnDescWriteComplete.Result
  namespace mstOnCharaNotification {
    /**
     * @en Characteristic Notification arrives at the callback function
     * @zh Characteristic Notification 到达回调函数
     */
    type Callback = (profile: Profile, uuid: UUID, data: Data, length: Length) => void

    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en Characteristic UUID string
     * @zh Characteristic UUID 字符串
     */
    type UUID = string

    /**
     * @en It is recommended to use the Uint8Array view to read the data
     * @zh 读取到的数据，使用 Uint8Array 视图读取
     */
    type Data = ArrayBuffer

    /**
     * @en Data length
     * @zh 数据长度
     */
    type Length = number

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Register Characteristic Notification to reach the callback function
   * @zh 注册 Characteristic Notification 到达回调函数
   * @version 3.0
   * @example
   * ```js
   * import { mstOnCharaNotification } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstOnCharaNotification(
    callback: mstOnCharaNotification.Callback,
  ): mstOnCharaNotification.Result
  namespace mstOnServiceChangeBegin {
    /**
     * @en Service start change callback function
     * @zh Service 开始变更回调函数
     */
    type Callback = (profile: Profile) => void

    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Register the Service start change callback function
   * @zh 注册 Service 开始变更回调函数
   * @version 3.0
   * @example
   * ```js
   * import { mstOnServiceChangeBegin } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstOnServiceChangeBegin(
    callback: mstOnServiceChangeBegin.Callback,
  ): mstOnServiceChangeBegin.Result
  namespace mstOnServiceChangeEnd {
    /**
     * @en Service change end callback function
     * @zh Service 变更结束回调函数
     */
    type Callback = (profile: Profile) => void

    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Register the Service change end callback function
   * @zh 注册 Service 变更结束回调函数
   * @version 3.0
   * @example
   * ```js
   * import { mstOnServiceChangeEnd } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstOnServiceChangeEnd(
    callback: mstOnServiceChangeEnd.Callback,
  ): mstOnServiceChangeEnd.Result
  /**
   * @en Unregister of all registered Bluetooth-related callback functions
   * @zh 注销所有注册的蓝牙相关回调函数
   * @version 3.0
   * @example
   * ```js
   * import { mstOffAllCb } from '@zos/ble'
   *
   * mstOffAllCb()
   * ```
   */
  function mstOffAllCb(): void
  namespace mstPrepare {
    /**
     * @en The `profile` pointer returned by `mstBuildProfile`
     * @zh `mstBuildProfile` 返回的 `profile` 指针
     */
    type Profile = number
  }

  /**
   * @en prepare interface
   * @zh prepare 接口
   * @version 3.0
   * @example
   * ```js
   * import { mstPrepare } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstPrepare(profile: mstPrepare.Profile): void
  namespace mstReadCharacteristic {
    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en Characteristic UUID string
     * @zh Characteristic UUID 字符串
     */
    type UUID = string
  }

  /**
   * @en Read Characteristic information
   * @zh 读 Characteristic 信息
   * @version 3.0
   * @example
   * ```js
   * import { mstReadCharacteristic } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstReadCharacteristic(
    profile: mstReadCharacteristic.Profile,
    uuid: mstReadCharacteristic.UUID,
  ): void
  namespace mstWriteCharacteristic {
    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en Characteristic UUID string
     * @zh Characteristic UUID 字符串
     */
    type UUID = string

    /**
     * @en Reads the data using the Uint8Array view
     * @zh 读取到的数据，使用 Uint8Array 视图读取
     */
    type Data = ArrayBuffer

    /**
     * @en Data length
     * @zh 数据长度
     */
    type Length = number
  }

  /**
   * @en Write Characteristic information
   * @zh 写 Characteristic 信息
   * @version 3.0
   * @example
   * ```js
   * import { mstWriteCharacteristic } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstWriteCharacteristic(
    profile: mstWriteCharacteristic.Profile,
    uuid: mstWriteCharacteristic.UUID,
    data: mstWriteCharacteristic.Data,
    length: mstWriteCharacteristic.Length,
  ): void
  namespace mstReadDescriptor {
    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en Characteristic UUID string
     * @zh Characteristic UUID 字符串
     */
    type UUID = string

    /**
     * @en Descriptor UUID string
     * @zh Descriptor UUID 字符串
     */
    type DescUUID = string
  }

  /**
   * @en Write characteristic information
   * @zh 写 characteristic 信息
   * @version 3.0
   * @example
   * ```js
   * import { mstReadDescriptor } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstReadDescriptor(
    profile: mstReadDescriptor.Profile,
    uuid: mstReadDescriptor.UUID,
    descUUID: mstReadDescriptor.DescUUID,
  ): void
  namespace mstWriteDescriptor {
    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number

    /**
     * @en Characteristic UUID string
     * @zh Characteristic UUID 字符串
     */
    type UUID = string

    /**
     * @en Descriptor UUID string
     * @zh Descriptor UUID 字符串
     */
    type DescUUID = string

    /**
     * @en Reads the data using the Uint8Array view
     * @zh 读取到的数据，使用 Uint8Array 视图读取
     */
    type Data = ArrayBuffer

    /**
     * @en Data length
     * @zh 数据长度
     */
    type Length = number

    /**
     * @en The result of the function call, `true` means success, `false` means failure
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     */
    type Result = boolean
  }

  /**
   * @en Register the Characteristic notification arrival callback function
   * @zh 注册 Characteristic notification 到达回调函数
   * @version 3.0
   * @example
   * ```js
   * import { mstOnCharaNotification } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstWriteDescriptor(
    profile: mstWriteDescriptor.Profile,
    uuid: mstWriteDescriptor.UUID,
    descUUID: mstWriteDescriptor.DescUUID,
    data: mstWriteDescriptor.Data,
    length: mstWriteDescriptor.Length,
  ): mstWriteDescriptor.Result
  namespace mstDestroyProfileInstance {
    /**
     * @en Profile pointer
     * @zh Profile 指针
     */
    type Profile = number
  }

  /**
   * @en Destroy Profile
   * @zh 销毁 Profile
   * @version 3.0
   * @example
   * ```js
   * import { mstDestroyProfileInstance } from '@zos/ble'
   *
   * mstDestroyProfileInstance()
   * ```
   */
  function mstDestroyProfileInstance(profile: mstDestroyProfileInstance.Profile): void
  namespace mstGetProfileInstance {
    /**
     * @en Profile name
     * @zh Profile 名称
     */
    type ProfileName = string

    /**
     * @en The ID returned on a successful connection
     * @zh 连接成功时返回的 ID
     */
    type ConnectId = number

    /**
     * @en A successful search returns the Profile pointer, a failed search returns `undefined`
     * @zh 查找成功返回 Profile 指针，失败返回 `undefined`
     */
    type Result = number | undefined
  }

  /**
   * @en Query Profile pointer based on Profile name and connection ID
   * @zh 根据 Profile name 和连接 ID 查询 Profile 指针
   * @version 3.0
   * @example
   * ```js
   * import { mstGetProfileInstance } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function mstGetProfileInstance(
    profileName: mstGetProfileInstance.ProfileName,
    connectId: mstGetProfileInstance.ConnectId,
  ): mstGetProfileInstance.Result
  namespace createConnect {
    /**
     * @en Connection callback function, `index` packet number, `data` data, `size` data length
     * @zh 连接回调函数，`index` 分包号、`data` 数据、`size` 数据长度
     */
    type Callback = (index?: number, data?: object, size?: number) => void
  }

  /**
   * @en Create connection
   * @zh 创建连接
   * @example
   * ```js
   * import { createConnect } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function createConnect(callback: createConnect.Callback): void
  /**
   * @en Disconnect
   * @zh 断开连接
   * @example
   * ```js
   * import { disConnect } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function disConnect(): void
  /**
   * @en Send message, `data` data to be sent, `size` length of data to be sent
   * @zh 发送消息，`data` 待发送数据，`size` 待发送数据长度
   * @example
   * ```js
   * import { send } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function send(data: object, size: number): void
  /**
   * @en Query connection status, `true` means connected, `false` means not connected
   * @zh 查询连接状态，`true` 表示连接，`false` 表示未连接
   * @example
   * ```js
   * import { connectStatus } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function connectStatus(): boolean
  namespace addListener {
    /**
     * @en Connection callback function, `status` Connection status
     * @zh 连接回调函数，`status` 连接状态
     */
    type Callback = (status?: boolean) => void
  }

  /**
   * @en Registering connection status listening callback function
   * @zh 注册连接状态监听回调函数
   * @example
   * ```js
   * import { addListener } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function addListener(callback: addListener.Callback): void
  /**
   * @en Cancel connection status listening callback function
   * @zh 取消连接状态监听回调函数
   * @example
   * ```js
   * import { removeListener } from '@zos/ble'
   *
   * // ...
   * ```
   */
  function removeListener(): void
}
