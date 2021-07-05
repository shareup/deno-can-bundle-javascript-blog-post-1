let current = 0
let timeout = 0

export function periodiclyCount(cb) {
  timeout = setTimeout(() => {
    current += 1
    cb(current)

    periodiclyCount(cb)
  }, 1000)
}

export function stopCounting() {
  clearTimeout(timeout)
}