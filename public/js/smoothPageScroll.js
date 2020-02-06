// 10/31/2017
var SmoothScroll = /** @class */ (function() {
    function SmoothScroll(options) {
      var _this = this;
      this.endThreshold = 0.05;
      this.requestId = null;
      this.maxDepth = 10;
      this.viewHeight = 0;
      this.halfViewHeight = 0;
      this.maxDistance = 0;
      this.scrollHeight = 0;
      this.endScroll = 0;
      this.currentScroll = 0;
      this.resizeRequest = 1;
      this.scrollRequest = 0;
      this.scrollItems = [];
      this.lastTime = -1;
      this.maxElapsedMS = 100;
      this.targetFPMS = 0.06;
      this._onResize = function(event) {
        _this.resizeRequest++;
        if (!_this.requestId) {
          _this.lastTime = performance.now();
          _this.requestId = requestAnimationFrame(_this._update);
        }
      };
      this._onScroll = function(event) {
        _this.scrollRequest++;
        if (!_this.requestId) {
          _this.lastTime = performance.now();
          _this.requestId = requestAnimationFrame(_this._update);
        }
      };
      this._update = function(currentTime) {
        if (currentTime === void 0) {
          currentTime = performance.now();
        }
        var elapsedMS = currentTime - _this.lastTime;
        if (elapsedMS > _this.maxElapsedMS) {
          elapsedMS = _this.maxElapsedMS;
        }
        var deltaTime = elapsedMS * _this.targetFPMS;
        var dt = 1 - Math.pow(1 - _this.scrollEase, deltaTime);
        var resized = _this.resizeRequest > 0;
        var scrollY = window.pageYOffset;
        if (resized) {
          var height = _this.target.clientHeight;
          document.body.style.height = height + "px";
          _this.scrollHeight = height;
          _this.viewHeight = window.innerHeight;
          _this.halfViewHeight = _this.viewHeight / 2;
          _this.maxDistance = _this.viewHeight * 2;
          _this.resizeRequest = 0;
        }
        _this.endScroll = scrollY;
        // this.currentScroll += (scrollY - this.currentScroll) * this.scrollEase;
        _this.currentScroll += (scrollY - _this.currentScroll) * dt;
        if (
          Math.abs(scrollY - _this.currentScroll) < _this.endThreshold ||
          resized
        ) {
          _this.currentScroll = scrollY;
          _this.scrollRequest = 0;
        }
        // const scrollOrigin = scrollY + this.halfViewHeight;
        var scrollOrigin = _this.currentScroll + _this.halfViewHeight;
        _this.target.style.transform =
          "translate3d(0px,-" + _this.currentScroll + "px,0px)";
        for (var i = 0; i < _this.scrollItems.length; i++) {
          var item = _this.scrollItems[i];
          var distance = scrollOrigin - item.top;
          var offsetRatio = distance / _this.maxDistance;
          item.endOffset = Math.round(
            _this.maxOffset * item.depthRatio * offsetRatio
          );
          if (
            Math.abs(item.endOffset - item.currentOffset < _this.endThreshold)
          ) {
            item.currentOffset = item.endOffset;
          } else {
            // item.currentOffset += (item.endOffset - item.currentOffset) * this.scrollEase;
            item.currentOffset += (item.endOffset - item.currentOffset) * dt;
          }
          item.target.style.transform =
            "translate3d(0px,-" + item.currentOffset + "px,0px)";
        }
        _this.lastTime = currentTime;
        _this.requestId =
          _this.scrollRequest > 0 ? requestAnimationFrame(_this._update) : null;
      };
      this.target = options.target;
      this.scrollEase = options.scrollEase != null ? options.scrollEase : 0.1;
      this.maxOffset = options.maxOffset != null ? options.maxOffset : 500;
      this.addItems();
      window.addEventListener("resize", this._onResize);
      window.addEventListener("scroll", this._onScroll);
      this._update();
    }
    SmoothScroll.prototype.addItems = function() {
      this.scrollItems = [];
      var elements = document.querySelectorAll("*[data-depth]");
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var depth = +element.getAttribute("data-depth");
        var rect = element.getBoundingClientRect();
        var item = {
          target: element,
          depth: depth,
          top: rect.top + window.pageYOffset,
          depthRatio: depth / this.maxDepth,
          currentOffset: 0,
          endOffset: 0
        };
        this.scrollItems.push(item);
      }
      return this;
    };
    return SmoothScroll;
  })();
  
  var isMobile = false; //initiate as false
  
  // device detection
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    isMobile = true;
  }
  
  if (isMobile == false) {
    var scroller = new SmoothScroll({
      target: document.querySelector("#scroll-container"), // element container to scroll
      scrollEase: 0.05
    });
  } else {
    document.querySelector("main.viewport").style.position = "inherit";
  }
  