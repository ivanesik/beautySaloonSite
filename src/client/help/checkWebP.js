export default function(resultCallback) {
    var kTestImages =  "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
    var img = new Image();
    img.onload = function () {
        resultCallback(true);
    };
    img.onerror = function () {
        resultCallback(false);
    };
    img.src = "data:image/webp;base64," + kTestImages;
};