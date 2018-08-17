$(document).ready(function() {
	$(".header__menu").click(function() {
		$(".sidebar-container").toggleClass("-isOpenSb");
		$(".bg-container").toggleClass("-isOpenBg");
    })

    $(".bg-container").click(function() {
		$(".sidebar-container").toggleClass("-isOpenSb");
		$(".bg-container").toggleClass("-isOpenBg");
    })

    $(".header__search").click(function() {
		$(".search-container").addClass("-isSearched");
		$(".bg-container-search").toggleClass("-isOpenBgs");
		$(".header__search").addClass('-isSearched2');
    })

    $(".bg-container-search").click(function() {
		$(".bg-container-search").removeClass("-isOpenBgs");
		$(".search-container").removeClass("-isSearched");
		$(".header__search").removeClass('-isSearched2');
    })

    $('.tab-content:first').show(0);
    $('.tab:first>span').addClass('selected');
    
    $('.tab>span').click(function() {
       $('.tab>span').removeClass('selected');
       $(this).addClass('selected'); 
       $('.tab-content').hide(0);   
       $(this).next('.tab-content').show(0);     
    });

    function test() {
	    if (screen.width > '425') {
			document.location.href = "headernew.html";
	    }
		
		if (screen.width <= '425') {
			document.location.href = "chrono.html"; 	 
		}
    };

})