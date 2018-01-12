
/**
 *
 * @param {string} id
 * @returns {Element}
 */
function getById(id) {
    return document.getElementById(id);
}

/**
 *
 * @param {string} class_name
 * @param {int} index
 * @returns {Element|NodeList}
 */
function getByClass(class_name, index) {
    var elements = document.getElementByClassName(class_name);

    if (typeof index === 'undefined') {
        return elements;
    } else {
        return elements[index];
    }
}

/**
 *
 * @param {string} tagName
 * @param {int} index
 * @returns {Element|NodeList}
 */
function getByTag(tagName, index) {
    var elements = document.getElementByTagName(tagName);

    if (typeof index === 'undefined') {
        return elements;
    } else {
        return elements[index];
    }
}

/**
 *
 * @param {string} name
 * @param {int} index
 * @returns {Element|NodeList}
 */
function getByName(name, index) {
    var elements = document.getElementByName(name);

    if (typeof index === 'undefined') {
        return elements;
    } else {
        return elements[index];
    }
}

/**
 *
 * @param {string|int} name_or_quantity
 * @param {string} opacity
 * @param {int} offset
 * @returns {Number|Array|getColors.result}
 */
function getColors(quantity, opacity, offset) {

    if (typeof opacity === "undefined") {
        opacity = "1.0";
    }

    if (typeof offset === 'undefined') {
        offset = 0;
    }

    var colors = [
        "rgba(216, 27, 96," + opacity + ")",
        "rgba(142, 36, 170," + opacity + ")",
        "rgba(94, 53, 177," + opacity + ")",
        "rgba(57, 73, 171," + opacity + ")",
        "rgba(30, 136, 229," + opacity + ")",
        "rgba(3, 155, 229," + opacity + ")",
        "rgba(0, 172, 193," + opacity + ")",
        "rgba(0, 137, 123," + opacity + ")",
        "rgba(67, 160, 71," + opacity + ")",
        "rgba(124, 179, 66," + opacity + ")",
        "rgba(192, 202, 51," + opacity + ")",
        "rgba(253, 216, 53," + opacity + ")",
        "rgba(255, 179, 0," + opacity + ")",
        "rgba(251, 140, 0," + opacity + ")",
        "rgba(244, 81, 30," + opacity + ")",
        "rgba(109, 76, 65," + opacity + ")",
        "rgba(117, 117, 117," + opacity + ")",
        "rgba(84, 110, 122," + opacity + ")",
        "rgba(26, 188, 156," + opacity + ")",
        "rgba(46, 204, 113," + opacity + ")",
        "rgba(155, 89, 182," + opacity + ")",
        "rgba(52, 152, 219," + opacity + ")",
        "rgba(22, 160, 133," + opacity + ")",
        "rgba(52, 73, 94," + opacity + ")",
        "rgba(39, 174, 96," + opacity + ")",
        "rgba(41, 128, 185," + opacity + ")",
        "rgba(142, 68, 173," + opacity + ")",
        "rgba(44, 62, 80," + opacity + ")",
        "rgba(241, 196, 15," + opacity + ")",
        "rgba(230, 126, 34," + opacity + ")",
        "rgba(231, 76, 60," + opacity + ")",
        "rgba(243, 156, 18," + opacity + ")",
        "rgba(211, 84, 0," + opacity + ")",
        "rgba(192, 57, 43," + opacity + ")",
        "rgba(30, 253, 230, " + opacity + ")",
        "rgba(83, 204, 17, " + opacity + ")",
        "rgba(134, 119, 202, " + opacity + ")",
        "rgba(63, 127, 154, " + opacity + ")",
        "rgba(1, 78, 7, " + opacity + ")",
        "rgba(101, 136, 115, " + opacity + ")",
        "rgba(184, 194, 130, " + opacity + ")",
        "rgba(182, 162, 42, " + opacity + ")",
        "rgba(172, 73, 147, " + opacity + ")",
        "rgba(55, 91, 24, " + opacity + ")",
        "rgba(97, 134, 123, " + opacity + ")",
        "rgba(57, 163, 37, " + opacity + ")",
        "rgba(235, 64, 228, " + opacity + ")",
        "rgba(229, 134, 2, " + opacity + ")",
        "rgba(115, 196, 196, " + opacity + ")",
        "rgba(126, 52, 250, " + opacity + ")",
        "rgba(53, 17, 160, " + opacity + ")",
        "rgba(117, 169, 88, " + opacity + ")",
        "rgba(26, 25, 139, " + opacity + ")",
        "rgba(108, 62, 107, " + opacity + ")",
        "rgba(136, 40, 239, " + opacity + ")",
        "rgba(26, 222, 135, " + opacity + ")",
        "rgba(201, 168, 157, " + opacity + ")",
        "rgba(234, 44, 197, " + opacity + ")",
        "rgba(234, 142, 44, " + opacity + ")",
        "rgba(141, 59, 217, " + opacity + ")",
        "rgba(223, 141, 246, " + opacity + ")",
        "rgba(149, 29, 38, " + opacity + ")",
        "rgba(241, 55, 226, " + opacity + ")",
        "rgba(236, 194, 189, " + opacity + ")",
        "rgba(29, 212, 211, " + opacity + ")",
        "rgba(45, 159, 83, " + opacity + ")",
        "rgba(195, 102, 193, " + opacity + ")",
        "rgba(243, 166, 158, " + opacity + ")",
        "rgba(193, 116, 129, " + opacity + ")",
        "rgba(200, 245, 111, " + opacity + ")",
        "rgba(247, 194, 72, " + opacity + ")",
        "rgba(128, 6, 180, " + opacity + ")",
        "rgba(146, 231, 51, " + opacity + ")",
        "rgba(128, 53, 21, " + opacity + ")",
        "rgba(60, 71, 13, " + opacity + ")",
        "rgba(49, 242, 74, " + opacity + ")",
        "rgba(123, 10, 192, " + opacity + ")",
        "rgba(168, 33, 178, " + opacity + ")",
        "rgba(17, 46, 41, " + opacity + ")",
        "rgba(103, 193, 253, " + opacity + ")",
        "rgba(167, 10, 29, " + opacity + ")",
        "rgba(10, 180, 11, " + opacity + ")",
        "rgba(143, 247, 89, " + opacity + ")",
        "rgba(244, 103, 25, " + opacity + ")",
        "rgba(165, 209, 146, " + opacity + ")",
        "rgba(82, 69, 164, " + opacity + ")",
        "rgba(238, 241, 160, " + opacity + ")",
        "rgba(42, 243, 199, " + opacity + ")",
        "rgba(52, 194, 21, " + opacity + ")",
        "rgba(128, 109, 55, " + opacity + ")",
        "rgba(49, 60, 126, " + opacity + ")",
        "rgba(204, 183, 25, " + opacity + ")",
        "rgba(142, 251, 239, " + opacity + ")",
        "rgba(226, 187, 59, " + opacity + ")",
        "rgba(225, 161, 220, " + opacity + ")",
        "rgba(45, 16, 190, " + opacity + ")",
        "rgba(161, 243, 218, " + opacity + ")",
        "rgba(50, 104, 77, " + opacity + ")",
        "rgba(132, 252, 84, " + opacity + ")",
        "rgba(75, 28, 170, " + opacity + ")",
        "rgba(137, 147, 207, " + opacity + ")",
        "rgba(206, 131, 26, " + opacity + ")",
        "rgba(163, 109, 95, " + opacity + ")",
        "rgba(22, 101, 55, " + opacity + ")"
    ];

    if(typeof offset === 'string') {
        var color_names = {
            green: "rgba(46, 204, 113," + opacity + ")",
            blue: "rgba(63, 82, 227, " + opacity + ")",
            yellow: "rgba(251, 140, 0," + opacity + ")",
            red: "rgba(220, 47, 47," + opacity + ")",
            dark: "rgba(0, 0, 0," + opacity + ")"
        };

        if(color_names.hasOwnProperty(offset)){
            return color_names[offset];
        } else {
            return "rgba(150, 150, 150, " + opacity + ")";
        }
    } else {
        var result = [];
        for (var i = 0; i < quantity; i++) {
            if (quantity === 1) {
                return colors[i + offset];
            } else {
                result.push(colors[i + offset]);
            }
        }

        return result;
    }
}