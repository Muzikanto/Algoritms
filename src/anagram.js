// Анаграммы
export function isAnagram(str1, str2) {
    if (str1.length !== str2.length)
        return false;
    let razn = str2.indexOf(str1[0]);
    let isAnagram = true;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[(i + razn) % str2.length]) {
            isAnagram = false;
            break;
        }
    }
    if (isAnagram)
        return true;
    razn = str2.length - 1 - str2.indexOf(str1[0]);
    let isAnagram2 = true;
    for (let i = 0, j = str1.length - 1; i < str1.length; i++, j--) {
        if (str1[i] !== str2[((j - razn) % str2.length + str2.length) % str2.length]) {
            isAnagram2 = false;
            break;
        }
    }
    return isAnagram2;
}