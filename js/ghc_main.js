mui.init();
//主界面和侧滑菜单界面均支持区域滚动；
mui('#offCanvasSideScroll').scroll();
mui('#offCanvasContentScroll').scroll();
mui('.mui-scroll-wrapper').scroll();
//实现ios平台原生侧滑关闭页面；
if (mui.os.plus && mui.os.ios) {
    mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件
        plus.webview.currentWebview().setStyle({
            'popGesture': 'none'
        });
    });
}

mui('.list_wrap,.f_nav').on('tap', 'a', function() {
    window.top.location.href = this.href;
});

mui('.filter_nav').on('tap', 'a', function() {
    $(this).find("i").removeClass("icon_up");
    $(this).find("i").removeClass("icon_down");
    $(this).find("i").addClass("icon_up").parent().siblings().find("i").addClass("icon_down");
});