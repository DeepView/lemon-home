class ScriptError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
}

class SettingItem {
    constructor(attribute, value) {
        this.attribute = attribute;
        this.value = value;
    }

    setAttribute(attribute) {
        var conditionIsNull = attribute == null;
        var conditionIsEmpty = attribute.length == 0;
        var conditionIsSpaceString = attribute.replace(/(^s*)|(s*$)/g, "").length == 0;
        if (conditionIsNull || conditionIsEmpty || conditionIsSpaceString)
            throw new ScriptError(-1, 'Invalid value, the attribute is not null or empty.');
        else this.attribute = attribute;
    }

    setValue(value) {
        if (value == null) throw new ScriptError(-1, 'Invalid value, the value is not null.');
        else this.value = value;
    }

    getAttribute() {
        return this.attribute;
    }

    getValue() {
        return this.value;
    }

    clearValue() {
        setValue('');
    }

    toString() {
        return getAttribute() + ' : ' + getValue();
    }
}

var ScreenResolution = {
    width: 0,
    height: 0,
    set: function(w, h) {
        if (w <= 0 || h <= 0) {
            throw new ScriptError(-1, 'Invalid value, the resolution cannot be less than zero.');
        } else {
            this.height = h;
            this.width = w;
        }
    }
};

var isFocusedWithInput = false;

function init() {
    setBackgroundImage();
    activeInterval();
    showTimeNow();
    showFooter();
    openEngineProviderList();
}

function activeInterval() {
    setInterval(showTimeNow, 1000);
}

function showFooter() {
    var year = new Date().getFullYear();
    $('#footer-container').html('<p id="copyrights">&copy;' + year +
        ', Carlos | <a href="about.html" target="_blank" class="xlink">关于</a></p>');
}

function getScreenResolution() {
    var sr = Object.create(ScreenResolution);
    sr.set(window.screen.width, window.screen.height);
    return sr;
}

function getBackgroundSizeType() {
    var sr_height = getScreenResolution().height;
    var sizeType = 'NULL';
    switch (sr_height) {
        case 720:
        case 768:
        case 900:
        case 1080:
            sizeType = '1080p';
            break;
        case 1440:
            sizeType = '1440p';
            break;
        case 2160:
            sizeType = '2160p';
            break;
        default:
            sizeType = 'other';
            break;
    }
    return sizeType;
}

function setBackgroundImage() {
    var sizeType = getBackgroundSizeType();
    var imgCssVal = 'url("img/background/' + sizeType + '/index00.webp")';
    $('body').css('background-image', imgCssVal);
}

function showTimeNow() {
    var t = new Date();
    var hours = t.getHours();
    var minutes = t.getMinutes();
    $('#time-container').html('<p>' + ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2) + '</p>');
}

function searchBoxFocusAction() {
    var screenWidth = getScreenResolution().width;
    $('#mask').css('backdrop-filter', 'var(--body-backdrop-filter)');
    // $('#search-engine-icon').css('display', 'table');
    if (screenWidth >= 1600 && screenWidth < 2400) $('#search-input').css('width', '600px');
    else if (screenWidth >= 2400 && screenWidth < 3200) $('#search-input').css('width', '800px');
    else if (screenWidth >= 3200) $('#search-input').css('width', '1200px');
    else $('#search-input').css('width', '600px');
    $('#search-input').css('background-color', 'var(--search-bgcolor-focus)');
    $('#search-input').hover(function() {
        if (screenWidth >= 1600 && screenWidth < 2400) $(this).css('width', '600px');
        else if (screenWidth >= 2400 && screenWidth < 3200) $(this).css('width', '800px');
        else if (screenWidth >= 3200) $(this).css('width', '1200px');
        else $(this).css('width', '600px');
        $(this).css('background-color', 'var(--search-bgcolor-focus)');
    }, function() {
        if (screenWidth >= 1600 && screenWidth < 2400) $(this).css('width', '600px');
        else if (screenWidth >= 2400 && screenWidth < 3200) $(this).css('width', '800px');
        else if (screenWidth >= 3200) $(this).css('width', '1200px');
        else $(this).css('width', '600px');
        $(this).css('background-color', 'var(--search-bgcolor-focus)');
    });
}

function searchBoxBlurAction() {
    var screenWidth = getScreenResolution().width;
    $('#mask').css('backdrop-filter', '');
    // $('#search-engine-icon').css('display', 'none');
    if (screenWidth >= 1600 && screenWidth < 2400) $('#search-input').css('width', '200px');
    else if (screenWidth >= 2400 && screenWidth < 3200) $('#search-input').css('width', '300px');
    else if (screenWidth >= 3200) $('#search-input').css('width', '450px');
    else $('#search-input').css('width', '200px');
    $('#search-input').css('box-shadow', '0 0 10px 5px rgba(0, 0, 0, 0.25)');
    $('#search-input').css('backdrop-filter', 'var(--search-backdrop-filter)');
    $('#search-input').css('background-color', 'var(--search-bgcolor-normal)');
    $('#search-input').hover(function() {
        if (screenWidth >= 1600 && screenWidth < 2400) $(this).css('width', '600px');
        else if (screenWidth >= 2400 && screenWidth < 3200) $(this).css('width', '800px');
        else if (screenWidth >= 3200) $(this).css('width', '1200px');
        else $(this).css('width', '600px');
        $(this).css('background-color', 'var(--search-bgcolor-hover)');
    }, function() {
        if (screenWidth >= 1600 && screenWidth < 2400) $(this).css('width', '200px');
        else if (screenWidth >= 2400 && screenWidth < 3200) $(this).css('width', '300px');
        else if (screenWidth >= 3200) $(this).css('width', '450px');
        else $(this).css('width', '200px');
        $(this).css('background-color', 'var(--search-bgcolor-normal)');
    });
}

function openEngineProviderList() {
    $('#search-engine-icon').hover(function() {
        $('#se-providers-container').css('display', 'block');
    }, function() {
        $('#se-providers-container').css('display', 'none');
    });
}
