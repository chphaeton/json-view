function buildArr(data, tab = 1, ftype) {
    const keys = Object.keys(data)
    // keys.sort()
    const domArr = []
    if (tab === 1) {
        ftype = Array.isArray(data) ? 'array' : typeof data
    }
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        const item = data[key]
        const isArr = Array.isArray(item)
        let type = typeof item
        if (isArr) {
            type = 'array'
        }
        const isObj = !isArr && type === 'object'
        const dom = {tab, key: `"${key}"`, type, ftype, hasColon: true}
        if (ftype === 'array') {
            dom.hideKey = true
            dom.hasColon = false
        }
        const len = typeof item === 'object' && item ? Object.keys(item).length : 0
        if (type === 'symbol') {
            dom.value = String(item)
        } else if (type === 'boolean') {
            dom.value = String(item)
            dom.type = 'boolean bolder'
        } else if (type === 'function') {
            dom.value = String(item)
        } else if (!item && item !== 0 && item !== '') {
            dom.value = String(item)
            dom.type = dom.value
        } else if (isArr) {
            dom.value = len ? '[' : '[]'
            dom.hasChildren = !!len
            // dom.noComma = true
        } else if (isObj) {
            dom.value = len ? '{' : '{}'
            dom.hasChildren = !!len
            // dom.noComma = true
        } else if (type === 'string') {
            dom.value = `"${data[key]}"`
        } else if (type === 'number') {
            dom.value = data[key]
        }
        domArr.push(dom)
        if (isArr && item.length || isObj && item && Object.keys(item).length) {
            domArr.push(...buildArr(item, tab + 1, type))
            if (isArr) {
                domArr.push({value: ']', tab, childrenEnd: true})
            } else {
                domArr.push({value: '}', tab, childrenEnd: true})
            }
        }
    }
    if (tab === 1) {
        if (Array.isArray(data)) {
            domArr.unshift({value: '[', tab: 0, noComma: true, hasChildren: true})
            domArr.push({value: ']', tab: 0, noComma: true, childrenEnd: true})
        } else if (typeof data === 'object') {
            domArr.unshift({value: '{', tab: 0, noComma: true, hasChildren: true})
            domArr.push({value: '}', tab: 0, noComma: true, childrenEnd: true})
        }
        for (let i = 1; i < domArr.length; i++) {
            const item = domArr[i]
            if ([']', '}', '],', '},'].includes(item.value)) {
                domArr[i - 1].noComma = true
            }
        }
    }
    return domArr
}

export default buildArr
