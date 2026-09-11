declare module '@zos/fs' {

  /**
   * @en Flag indicating to open a file for read-only access
   * @zh 指示打开文件以进行只读访问的标志
   */
  const O_RDONLY: number
  /**
   * @en Flag indicating to open a file for write-only access
   * @zh 指示打开文件以进行只写访问的标志
   */
  const O_WRONLY: number
  /**
   * @en Flag indicating to open a file for read-write access
   * @zh 指示打开文件以进行读写访问的标志
   */
  const O_RDWR: number
  /**
   * @en Flag indicating that data will be appended to the end of the file
   * @zh 指示数据将追加到文件末尾的标志
   */
  const O_APPEND: number
  /**
   * @en Flag indicating to create the file if it does not already exist
   * @zh 如果文件不存在则指示创建文件的标志
   */
  const O_CREAT: number
  /**
   * @en Flag indicating that opening a file should fail if the `O_CREAT` flag is set and the file already exists
   * @zh 如果设置了 `O_CREAT` 标志并且文件已经存在，则指示打开文件应该失败的标志
   */
  const O_EXCL: number
  /**
   * @en Flag indicating that if the file exists and the file is opened successfully for write access, its length shall be truncated to zero
   * @zh 标志表示如果文件存在并且该文件被成功打开以进行写访问，则其长度应被截断为零
   */
  const O_TRUNC: number
  namespace openSync {
    interface Option {
      /**
       * @en path
       * @zh 文件路径
       */
      path: string
      /**
       * @en Value refer to file open constants
       * @zh 值参考文件打开的常量
       * @defaultValue O_RDONLY
       */
      flag?: number
      /**
       * @en Other Options
       * @zh 其他选项
       * @version 3.0
       */
      options?: Options
    }

    interface Options {
      /**
       * @en Mini Program ID, you can open the file in the `/data` directory of the Mini Program with the corresponding ID
       * @zh 小程序 ID，可以打开对应 ID 小程序 `/data` 目录下的文件
       * @version 3.0
       */
      appId?: number
    }

    /**
     * @en The numeric file descriptor
     * @zh 文件句柄
     */
    type Result = number
  }

  /**
   * @en Open the file in the `/data` directory of the Mini Program synchronously and get the file handle
   * @zh 同步地打开小程序 `/data` 目录下的文件，获取文件句柄
   * @constants open
   * @example
   * ```js
   * import { openSync, O_RDONLY } from '@zos/fs'
   *
   * const fd = openSync({
   *   path: 'test.txt',
   *   flag: O_RDONLY
   * })
   * ```
   */
  function openSync(option: openSync.Option): openSync.Result
  namespace openAssetsSync {
    interface Option {
      /**
       * @en path
       * @zh 文件路径
       */
      path: string
      /**
       * @en Value refer to file open constants
       * @zh 值参考文件打开的常量
       * @defaultValue O_RDONLY
       */
      flag?: number
    }

    /**
     * @en The numeric file descriptor
     * @zh 文件句柄
     */
    type Result = number
  }

  /**
   * @en Open the file in the `/assets` directory of the Mini Program synchronously and get the file handle
   * @zh 同步地打开小程序 `/assets` 目录下的文件，获取文件句柄
   * @constants open
   * @example
   * ```js
   * import { openSync, O_RDONLY } from '@zos/fs'
   *
   * const fd = openAssetsSync({
   *   path: 'test.txt',
   *   flag: O_RDONLY
   * })
   * ```
   */
  function openAssetsSync(option: openAssetsSync.Option): openAssetsSync.Result
  namespace statSync {
    interface Option {
      /**
       * @en path
       * @zh 路径
       */
      path: string
    }

    /**
     * @en If `undefined` is returned, the target file does not exist, otherwise the file information object is returned
     * @zh 如果返回 `undefined` 则目标文件不存在，否则返回文件信息对象
     */
    type Result = FSStat | undefined

    /**
     * @output
     */
    interface FSStat {
      /**
       * @en The size of the file in bytes
       * @zh 文件大小（单位为字节）
       */
      size: number
    }
  }

  /**
   * @en Get information about the files in the `/data` directory of the Mini Program synchronously
   * @zh 同步地获取小程序 `/data` 目录下的文件信息
   * @example
   * ```js
   * import { statSync } from '@zos/fs'
   *
   * const result = statSync({
   *   path: 'test.txt',
   * })
   *
   * if (result) {
   *   const { size } = result
   *   console.log(size)
   * }
   * ```
   */
  function statSync(option: statSync.Option): statSync.Result
  namespace statAssetsSync {
    interface Option {
      /**
       * @en path
       * @zh 路径
       */
      path: string
    }

    /**
     * @en If `undefined` is returned, the target file does not exist, otherwise the file information object is returned
     * @zh 如果返回 `undefined` 则目标文件不存在，否则返回文件信息对象
     */
    type Result = FSStat | undefined

    /**
     * @output
     */
    interface FSStat {
      /**
       * @en The size of the file in bytes
       * @zh 文件大小（单位为字节）
       */
      size: number
    }
  }

  /**
   * @en Synchronously gets information about the files in the Mini Program `/assets` directory
   * @zh 同步地获取小程序 `/assets` 目录下的文件信息
   * @example
   * ```js
   * import { statAssetsSync } from '@zos/fs'
   *
   * const result = statAssetsSync({
   *   path: 'test.txt',
   * })
   *
   * if (result) {
   *   const { size } = result
   *   console.log(size)
   * }
   * ```
   */
  function statAssetsSync(option: statAssetsSync.Option): statAssetsSync.Result
  namespace closeSync {
    interface Option {
      /**
       * @en File handle, returned by the `openSync`, `openAssetsSync` and other APIs
       * @zh 文件句柄，由 `openSync`、`openAssetsSync` 等 API 返回
       */
      fd: number
    }

    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Close the file handle synchronously
   * @zh 同步地关闭文件句柄
   * @example
   * ```js
   * import { openSync, closeSync, O_RDONLY } from '@zos/fs'
   *
   * const fd = openSync({
   *   path: 'test.txt',
   *   flag: O_RDONLY
   * })
   * const result = closeSync({
   *   fd
   * })
   *
   * if (result === 0) {
   *   console.log('file descriptor closed')
   * }
   * ```
   */
  function closeSync(option: closeSync.Option): closeSync.Result
  function closeSync(fd: number): closeSync.Result
  namespace readSync {
    interface Option {
      /**
       * @en File handle, returned by the `openSync`, `openAssetsSync` and other APIs
       * @zh 文件句柄，由 `openSync`、`openAssetsSync` 等 API 返回
       */
      fd: number
      /**
       * @en The ArrayBuffer that the data will be written to
       * @zh 数据将写入的 ArrayBuffer
       */
      buffer: ArrayBuffer
      /**
       * @en Other Options
       * @zh 其他选项
       */
      options?: Options
    }

    interface Options {
      /**
       * @en The position in buffer to write the data to
       * @zh 要写入数据的 buffer 中的位置
       * @defaultValue 0
       */
      offset?: number
      /**
       * @en The number of bytes to read, the default is the number of bytes passed into the buffer
       * @zh 读取的字节数，默认为传入 buffer 的字节长度
       * @defaultValue buffer.byteLength
       */
      length?: number
      /**
       * @en Specifies the position from which to start reading from the file. If `position` is `null`, the data will be read from the current file position and the file position will be updated
       * @zh 指定从文件中开始读取的位置，如果 `position` 为 `null`，则将从当前文件位置读取数据，并更新文件位置
       * @defaultValue null
       */
      position?: number | null
    }

    /**
     * @en The number of bytes read
     * @zh 读取的字节数
     */
    type Result = number
  }

  /**
   * @en Synchronously reads the content from the file specified by the file handle into the given `ArrayBuffer`.
   * @zh 同步地从文件句柄指定的文件中读取内容，将内容读取到给定 `ArrayBuffer` 中
   * @example
   * ```js
   * import { openSync, readSync, O_RDONLY } from '@zos/fs'
   *
   * const fd = openSync({
   *   path: 'test.txt',
   *   flag: O_RDONLY
   * })
   *
   * const buffer = new ArrayBuffer(4)
   * const result = readSync({
   *   fd,
   *   buffer
   * })
   * ```
   */
  function readSync(option: readSync.Option): readSync.Result
  namespace writeSync {
    interface Option {
      /**
       * @en File handle, returned by the `openSync`, `openAssetsSync` and other APIs
       * @zh 文件句柄，由 `openSync`、`openAssetsSync` 等 API 返回
       */
      fd: number
      /**
       * @en The buffer that the data will be written to
       * @zh 将写入文件的 ArrayBuffer
       */
      buffer: ArrayBuffer
      /**
       * @en Other Options
       * @zh 其他选项
       */
      options?: Options
    }

    interface Options {
      /**
       * @en Based on first address offset in ArrayBuffer to write the data
       * @zh 基于要写入文件的 ArrayBuffer 首地址偏移量
       * @defaultValue 0
       */
      offset?: number
      /**
       * @en The number of bytes to write, the default is the length of the incoming buffer
       * @zh 写入的字节数，默认为传入 buffer 的字节长度
       * @defaultValue buffer.byteLength
       */
      length?: number
      /**
       * @en Position refers to the offset from the beginning of the file where this data should be written. If position is 'null', the data will be written at the and the file position will be updated
       * @zh 指定文件中开始写入的位置，表示从文件开头的偏移量。如果 `position` 为 `null`，则从当前文件位置写入数据，并更新文件位置
       * @defaultValue null
       */
      position?: number | null
    }

    /**
     * @en The number of bytes written
     * @zh 写入的字节数
     */
    type Result = number
  }

  /**
   * @en Synchronously write ArrayBuffer to the file specified by fd
   * @zh 同步地将 ArrayBuffer 写入文件句柄指定的文件
   * @example
   * ```js
   * import { openSync, writeSync, O_RDWR, O_CREAT } from '@zos/fs'
   *
   * const fd = openSync({
   *   path: 'test.txt',
   *   flag: O_RDWR | O_CREAT
   * })
   *
   * const buffer = new ArrayBuffer(4)
   * const result = writeSync({
   *   fd,
   *   buffer
   * })
   * ```
   */
  function writeSync(option: writeSync.Option): writeSync.Result
  namespace rmSync {
    interface Option {
      /**
       * @en path
       * @zh 文件路径
       */
      path: string
    }

    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Synchronously delete files in the `/data` directory of the Mini Program
   * @zh 同步地删除小程序 `/data` 目录下的文件
   * @example
   * ```js
   * import { rmSync } from '@zos/fs'
   *
   * const result = rmSync({
   *   path: 'test.txt',
   * })
   *
   * if (result === 0) {
   *   console.log('rmSync success')
   * }
   * ```
   */
  function rmSync(option: rmSync.Option): rmSync.Result
  function rmSync(path: string): rmSync.Result
  namespace renameSync {
    interface Option {
      /**
       * @en Old path
       * @zh 旧的文件路径
       */
      oldPath: string
      /**
       * @en New path
       * @zh 新的文件路径
       */
      newPath: string
    }

    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Rename the files in the `/data` directory of the Mini Program, renaming the files from `oldPath` to `newPath`
   * @zh 重命名小程序 `/data` 目录下的文件，将文件从 `oldPath` 重命名为 `newPath`
   * @example
   * ```js
   * import { renameSync } from '@zos/fs'
   *
   * const result = renameSync({
   *   oldPath: 'test.txt',
   *   newPath: 'new_test.txt'
   * })
   *
   * if (result === 0) {
   *   console.log('renameSync success')
   * }
   * ```
   */
  function renameSync(option: renameSync.Option): renameSync.Result
  namespace mkdirSync {
    interface Option {
      /**
       * @en Directory path
       * @zh 目录路径
       */
      path: string
    }

    /**
     * @en If `0` is returned, success is indicated
     * @zh 如果返回 `0` 则表明成功
     */
    type Result = number
  }

  /**
   * @en Synchronously create a directory in the `/data` directory of the Mini Program
   * @zh 同步地在小程序 `/data` 目录下创建目录
   * @example
   * ```js
   * import { mkdirSync } from '@zos/fs'
   *
   * const result = mkdirSync({
   *   path: 'content',
   * })
   *
   * if (result === 0) {
   *   console.log('mkdirSync success')
   * }
   * ```
   */
  function mkdirSync(option: mkdirSync.Option): mkdirSync.Result
  function mkdirSync(path: string): mkdirSync.Result
  namespace readdirSync {
    interface Option {
      /**
       * @en Directory path
       * @zh 目录路径
       */
      path: string
    }

    /**
     * @en If `undefined` is returned, the directory does not exist, otherwise an array of filenames is returned
     * @zh 如果返回 `undefined` 则目录不存在，否则返回文件名数组
     */
    type Result = Array<string> | undefined
  }

  /**
   * @en Read the directory under the `/data` directory of the Mini Program synchronously
   * @zh 同步地读取小程序 `/data` 目录下的目录
   * @example
   * ```js
   * import { readdirSync } from '@zos/fs'
   *
   * const result = readdirSync({
   *   path: 'content',
   * })
   * ```
   */
  function readdirSync(option: readdirSync.Option): readdirSync.Result
  namespace readFileSync {
    interface Option {
      /**
       * @en path
       * @zh 文件路径
       */
      path: string
      /**
       * @en Other Options
       * @zh 其他选项
       */
      options?: Options
    }

    interface Options {
      /**
       * @en When the encoding method is specified, the API returns `string` as the result
       * @zh 当指定了编码方式之后，API 返回结果为 `string`
       */
      encoding?: string
    }

    /**
     * @en File content. If `undefined` is returned, the file failed to be read
     * @zh 文件内容。如果返回 `undefined`，则表明读取文件失败
     */
    type Result = ArrayBuffer | string | undefined
  }

  /**
   * @en Returns the entire contents of the specified file in the `/data` directory of the Mini Program
   * @zh 返回小程序 `/data` 目录下指定文件的全部内容
   * @example
   * ```js
   * import { readFileSync } from '@zos/fs'
   *
   * const contentBuffer = readFileSync({
   *   path: 'test.txt',
   * })
   *
   * const contentString = readFileSync({
   *   path: 'test.txt',
   *   options: {
   *     encoding: 'utf8'
   *   }
   * })
   * ```
   */
  function readFileSync(option: readFileSync.Option): readFileSync.Result
  namespace writeFileSync {
    interface Option {
      /**
       * @en File path or file descriptor
       * @zh 文件路径或者文件句柄
       */
      path: string | number
      /**
       * @en Data to be written to the target file
       * @zh 写入目标文件的数据
       */
      data: ArrayBuffer | string | DataView
      /**
       * @en Other Options
       * @zh 其他选项
       */
      options?: Options
    }

    interface Options {
      /**
       * @en If the `data` format is `string`, you need to specify the encoding method
       * @zh 如果数据格式为 `string`，需要指定编码方式
       * @defaultValue utf8
       */
      encoding?: string
    }
  }

  /**
   * @en Synchronously write data to a file in the `/data` directory of the Mini Program, replacing the file if it already exists, or creating a new file if it doesn't
   * @zh 同步地将数据写入小程序 `/data` 目录下的文件，如果文件已存在则替换文件，不存在则新建文件
   * @example
   * ```js
   * import { writeFileSync } from '@zos/fs'
   *
   * const buffer = new ArrayBuffer(4)
   * writeFileSync({
   *   path: 'test.txt',
   *   data: buffer
   * })
   *
   * writeFileSync({
   *   path: 'content.txt',
   *   data: 'some content...',
   *   options: {
   *     encoding: 'utf8'
   *   }
   * })
   * ```
   */
  function writeFileSync(option: writeFileSync.Option): void
}
