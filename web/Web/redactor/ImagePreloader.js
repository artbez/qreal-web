var ImagePreloader = (function () {
    function ImagePreloader() {
    }
    ImagePreloader.preloadImages = function (arrayOfImages) {
        arrayOfImages.forEach(function (image) {
            new Image().src = image;
        });
    };
    return ImagePreloader;
})();
//# sourceMappingURL=ImagePreloader.js.map