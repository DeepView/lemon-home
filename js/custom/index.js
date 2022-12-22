class ScriptError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
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
    var imgCssVal = 'url("img/background/' + sizeType + '/index01.webp")';
    $('body').css('background-image', imgCssVal);
}

function showTimeNow() {
    var t = new Date();
    var hours = t.getHours();
    var minutes = t.getMinutes();
    $('#time-container').html('<p>' + ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2) + '</p>');
}

function searchBoxFocusAction() {
    $('#mask').css('backdrop-filter', 'saturate(100%) blur(20px)');
    // $('#search-engine-icon').css('display', 'table');
    $('#search-input').css('width', '600px');
    $('#search-input').css('background-color', 'rgba(255, 255, 255, 0.75)');
    $('#search-input').hover(function() {
        $(this).css('width', '600px');
        $(this).css('background-color', 'rgba(255, 255, 255, 0.75)');
    }, function() {
        $(this).css('width', '600px');
        $(this).css('background-color', 'rgba(255, 255, 255, 0.75)');
    });
}

function searchBoxBlurAction() {
    $('#mask').css('backdrop-filter', '');
    // $('#search-engine-icon').css('display', 'none');
    $('#search-input').css('width', '200px');
    $('#search-input').css('box-shadow', '0 0 10px 5px rgba(0, 0, 0, 0.25)');
    $('#search-input').css('backdrop-filter', 'saturate(100%) blur(20px)');
    $('#search-input').css('background-color', 'rgba(192, 192, 192, 0.2)');
    $('#search-input').hover(function() {
        $(this).css('width', '600px');
        $(this).css('background-color', 'rgba(255, 255, 255, 0.75)');
    }, function() {
        $(this).css('width', '200px');
        $(this).css('background-color', 'rgba(192, 192, 192, 0.2)');
    });
}

function openEngineProviderList() {
    $('#search-engine-icon').hover(function() {
        $('#se-providers-container').css('display', 'block');
    }, function() {
        $('#se-providers-container').css('display', 'none');
    });
}
