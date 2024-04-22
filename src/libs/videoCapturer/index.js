/*!
 * @name      videoCapturer.js
 * @version   0.0.1
 * @author    Blaze
 * @date      2019/9/21 12:03
 * @github    https://github.com/xxxily
 */

async function setClipboard (blob) {
  if (navigator.clipboard) {
    navigator.clipboard.write([
      // eslint-disable-next-line no-undef
      new ClipboardItem({
        [blob.type]: blob
      })
    ]).then(() => {
      console.info('[setClipboard] clipboard suc', blob.type)
    }).catch((e) => {
      console.error('[setClipboard] clipboard err', blob.type, e)
    })
  } else {
    console.error('当前网站不支持将数据写入到剪贴板里，见：\n https://developer.mozilla.org/en-US/docs/Web/API/Clipboard')
  }
}

var videoCapturer = {
  /**
   * 进行截图操作
   * @param video {dom} -必选 video dom 标签
   * @returns {boolean}
   */
  capture (video, download, title) {
    if (!video) return false
    const t = this
    const currentTime = `${Math.floor(video.currentTime / 60)}'${(video.currentTime % 60).toFixed(3)}''`
    const captureTitle = title || `${document.title}_${currentTime}`

    /* 截图核心逻辑 */
    video.setAttribute('crossorigin', 'anonymous')
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const context = canvas.getContext('2d')
    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    if (download) {
      t.download(canvas, captureTitle, video)
    } else {
      t.previe(canvas, captureTitle)
    }

    return canvas
  },
  /**
   * 预览截取到的画面内容
   * @param canvas
   */
  previe (canvas, title) {
    canvas.style = 'max-width:100%'
    const previewPage = window.open('', '_blank')
    previewPage.document.title = `capture previe - ${title || 'Untitled'}`
    previewPage.document.body.style.textAlign = 'center'
    previewPage.document.body.style.background = '#000'
    previewPage.document.body.appendChild(canvas)
  },
  /**
   * canvas 下载截取到的内容
   * @param canvas
   */
  download (canvas, title, video) {
    title = title || 'videoCapturer_' + Date.now()

    try {
      /**
       * 尝试复制到剪贴板
       * 注意部分浏览器不支持将'image/jpeg'类型的数据写入到剪贴板，image/jpg可以，但会导致toBlob的结果为png的数据，
       * 所以这里新起了'image/png'来尝试复制到剪贴板，而不能将setClipboard(blob)放到下面的try里
       * 另外由于下面的自动下载截图会导致页面失焦，也会造成复制到剪贴板失败，所以这里先复制到剪贴板，再进行下载
       */
      canvas.toBlob(function (blob) {
        setClipboard(blob)
      }, 'image/png', 0.99)
    } catch (e) {
      console.error('无法将截图复制到剪贴板。', e)
    }

    try {
      canvas.toBlob(function (blob) {
        const el = document.createElement('a')
        el.download = `${title}.jpg`
        el.href = URL.createObjectURL(blob)
        el.click()
      }, 'image/jpeg', 0.99)
    } catch (e) {
      videoCapturer.previe(canvas, title)
      console.error('视频源受CORS标识限制，无法直接下载截图，见：\n https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS')
      console.error(video, e)
    }
  }
}

export default videoCapturer
