function hideDom (selector, delay) {
  setTimeout(function () {
    const dom = document.querySelector(selector)
    if (dom) {
      dom.style.opacity = 0
    }
  }, delay || 1000 * 5)
}

/**
 * 向上查找操作
 * @param dom {Element} -必选 初始dom元素
 * @param fn {function} -必选 每一级ParentNode的回调操作
 * 如果函数返回true则表示停止向上查找动作
 */
function eachParentNode (dom, fn) {
  let parent = dom.parentNode
  while (parent) {
    const isEnd = fn(parent, dom)
    parent = parent.parentNode
    if (isEnd) {
      break
    }
  }
}

/**
 * 根据节点的宽高获取其包裹节点
 * @param el {Element} -必选 要查找的节点
 * @returns {element}
 */
function getContainer (el) {
  if (!el || !el.getBoundingClientRect) return el

  const domBox = el.getBoundingClientRect()
  let container = el
  eachParentNode(el, function (parentNode) {
    if (!parentNode || !parentNode.getBoundingClientRect) return true
    const parentBox = parentNode.getBoundingClientRect()
    const isInsideTheBox = parentBox.width <= domBox.width && parentBox.height <= domBox.height
    if (isInsideTheBox) {
      container = parentNode
    } else {
      return true
    }
  })

  // 如果查找到的包裹节点指向自己，则尝试使用parentNode作为包裹节点再次查找
  if (container === el && el.parentNode) {
    container = getContainer(el.parentNode)
  }

  return container
}

function loadCSSText (cssText) {
  const style = document.createElement('style')
  const head = document.head || document.getElementsByTagName('head')[0]
  style.appendChild(document.createTextNode(cssText))
  head.appendChild(style)
}

export { hideDom, eachParentNode, loadCSSText, getContainer }
