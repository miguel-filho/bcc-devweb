if (!Object.assign) {
    Object.assign = function (dest, org) {
        const keys = Object.keys(org)
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i]
            dest[key] = org[key]
        }

        return dest
    }
}