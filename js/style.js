$(function() {
    var menuHeader = function() {
        $("#menu-header").click(function() {
            $(".header-menu-wrapper").addClass("active");
            $("body").addClass("overflow-hidden");
        })
        $(".header-menu-wrapper .overlay").click(function() {
            $(".header-menu-wrapper").removeClass("active");
            $("body").removeClass("overflow-hidden");
        })
    };
    var closeDropdown = function() {
        $("#close-dropdown").click(function() {
            $(this).dropdown("toggle");
            return false;
        });
    };
    var maxHeight_desktop = function() {

        if ($(window).width() > 992) {
            $(document).ready(function() {

                arr = [];
                rowEle = $(".js_row");
                rowEle.each(function() {
                    var dataClass = $(this).attr('data-row');
                    var newClass = 'js_row_' + dataClass;
                    $(this).addClass(newClass);
                });

                var countRow = $('.js_max_data').attr("data-row");

                for (var i = 1; i < countRow + 1; i++) {
                    ar = [];
                    $(".js_row_" + [i]).each(function() {
                        ar.push($(this).height());
                    });

                    $(".js_row_" + [i]).height(Math.max(...ar));
                }
            });
        }

    };
    maxHeight_desktop();
    menuHeader();
    closeDropdown();

});