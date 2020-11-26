/*------------scroll------------*/

function parallaxStart(){

    var features = "#wrapper > .features";
    var featuresb = "#wrapper > .features-b";
    var partners = "#wrapper > .partners";
    var brands = "#wrapper > .brands";

    $(features).removeClass('off');
    $(featuresb).removeClass('off');
    $(partners).removeClass('off');
    $(brands).removeClass('off');

    gsap.to(features, {
        scrollTrigger: {trigger:features,start:'top center'},
        className: 'features parallax'
    });

    gsap.to(featuresb, {
        scrollTrigger: {trigger:featuresb,start:'top center'},
        className: 'features-b parallax'
    });

    gsap.to(partners, {
        scrollTrigger: {trigger:partners,start:'top center'},
        className: 'partners parallax'
    });

    gsap.to(brands, {
        scrollTrigger: {trigger:brands,start:'top center'},
        className: 'brands parallax'
    });
    
}

/*------------/scroll------------*/


/*------------slide------------*/

    var slideOpt1 = [];

    $.each($('#wrapper .banner .profile .option.opt1 .img .img-container img'), function(i,val){
        slideOpt1.push({
            img: val,
            txt: $('#wrapper .banner .profile .option.opt1 .img figcaption p:eq('+i+')')
        });
    });

    var slideOpt2 = [];

    $.each($('#wrapper .banner .profile .option.opt2 .img .img-container img'), function(i,val){
        slideOpt2.push({
            img: val,
            txt: $('#wrapper .banner .profile .option.opt2 .img figcaption p:eq('+i+')')
        });
    });


    var slideBar = $('#wrapper .banner .profile .mockup strong').toArray();
    var slideBreadcrumb = $('#wrapper .banner .profile .mockup .breadcrumb li').toArray();

    var slideProduct = false;
    var slideProduct = [];

    slideProductArrayReset();

    function slideProductArrayReset(){
        slideProduct = [];
        $.each($('#wrapper .banner .profile .mockup .list-container ul li'), function(i, val){
            slideProduct.push({
                obj: val,
                order: $('#wrapper .banner .profile .mockup .list-container ul li:eq('+i+')').attr('data-order')
            });
        });
    }


    /*slide action*/
    var currentSlide = 0;
    var currentProduct = 2;
    var action = false;
    var actionLoop = false;

    function slideStart(){

        (function loop() {
            setTimeout(function () {
                var nextSlide = currentSlide == slideOpt1.length-1 ? 0 : currentSlide+1;

                slideNext(nextSlide);
            loop()
            }, 6000);
        }());

        $(document).on('click', '#wrapper .banner .profile .mockup .breadcrumb li', function(){
            actionLoop = false;

            if(!action){
                var $this = $(this);
                var index = $this.attr('data-index');
                if(index != currentSlide){slideNext(index)}
            
                actionLoop = true;
            }
        });
    }

    function slideNext(num){

        if(!actionLoop && document.hasFocus()){

            action = true;

            var nextSlide = num;

            $(slideBreadcrumb[currentSlide]).removeClass('selected');
            $(slideBreadcrumb[nextSlide]).addClass('selected');

            slideProductNext();

            setTimeout(function(){
                $(slideOpt1[currentSlide].img).addClass('out');
                setTimeout(function(){
                    $(slideOpt1[nextSlide].img).removeClass('in');
                    setTimeout(function(){
                        $(slideOpt1[currentSlide].img).addClass('in').removeClass('out');
                    }, 200);
                }, 400);
            }, 200);
            
            setTimeout(function(){
                $(slideOpt2[currentSlide].img).addClass('out');
                setTimeout(function(){
                    $(slideOpt2[nextSlide].img).removeClass('in');
                    setTimeout(function(){
                        $(slideOpt2[currentSlide].img).addClass('in').removeClass('out');

                        action = false;
                        currentSlide = currentSlide == slideOpt1.length-1 ? 0 : currentSlide+1;
                        currentProduct = currentProduct == slideProduct.length-1 ? 0 : currentProduct-1;
                        setTimeout(function () {
                            actionLoop = false;
                        }, 6000);

                    }, 200);
                }, 400);
            }, 600);
            
            setTimeout(function(){
                $(slideOpt1[currentSlide].txt[0]).addClass('out');
                setTimeout(function(){
                    $(slideOpt1[nextSlide].txt[0]).removeClass('in');
                    setTimeout(function(){
                        $(slideOpt1[currentSlide].txt[0]).addClass('in').removeClass('out');
                    }, 200);
                }, 400);
            }, 0);
            
            setTimeout(function(){
                $(slideOpt2[currentSlide].txt[0]).addClass('out');
                setTimeout(function(){
                    $(slideOpt2[nextSlide].txt[0]).removeClass('in');
                    setTimeout(function(){
                        $(slideOpt2[currentSlide].txt[0]).addClass('in').removeClass('out');
                    }, 200);
                }, 400);
            }, 400);
            
            setTimeout(function(){
                $(slideBar[currentSlide]).addClass('out');
                setTimeout(function(){
                    $(slideBar[nextSlide]).removeClass('in');
                    setTimeout(function(){
                        $(slideBar[currentSlide]).addClass('in').removeClass('out');
                    }, 200);
                }, 400);
            }, 500);
        }
    }

    function slideProductNext(){
        
        $.each(slideProduct, function(i,val){
            if(i==0){
                $(val.obj).attr('data-order', slideProduct[slideProduct.length-1].order);
            }else if(i==slideProduct.length){
                $(val.obj).attr('data-order', slideProduct[0].order);
            }else{
                $(val.obj).attr('data-order', slideProduct[i-1].order);
            }
        });

        slideProductArrayReset();
    }

    function introStart(){
        
        $('#wrapper .banner .profile .option.opt1 .img .img-container img.intro').removeClass('intro');
        setTimeout(function(){
            $('#wrapper .banner .profile .option.opt2 .img .img-container img.intro').removeClass('intro');
            setTimeout(function(){
                $('#wrapper .banner .profile').addClass('pro1');
                setTimeout(function(){
                    $('#wrapper .banner .profile .option.opt1 .img figcaption p.intro').removeClass('intro');
                    setTimeout(function(){
                        $('#wrapper .banner .profile').removeClass('pro1');
                        setTimeout(function(){
                            $('#wrapper .banner .profile').addClass('pro2');
                            setTimeout(function(){
                                $('#wrapper .banner .profile .option.opt2 .img figcaption p.intro').removeClass('intro');
                                setTimeout(function(){
                                    $('#wrapper .banner .profile').removeClass('pro2');
                                    setTimeout(function(){
                                        $('#wrapper .banner .profile .mockup p.intro').removeClass('intro');
                                        setTimeout(function(){
                                            $('#wrapper .banner .profile .option.opt1 .img figcaption a.intro').removeClass('intro');
                                            setTimeout(function(){
                                                $('#wrapper .banner .profile .option.opt2 .img figcaption a.intro').removeClass('intro');
                                                setTimeout(function(){
                                                    $('#wrapper .banner .profile .mockup .breadcrumb.intro').removeClass('intro');
                                                    setTimeout(function(){
                                                        parallaxStart();
                                                        setTimeout(function(){
                                                            slideNext(currentSlide+1);
                                                            slideStart();
                                                        }, 500);
                                                    }, 200);
                                                }, 500);
                                            }, 200);
                                        }, 800);
                                    }, 500);
                                }, 1800);
                            }, 500);
                        }, 500);
                    }, 1800);
                }, 500);
            }, 1000);
        }, 400);
    }

    $(document).ready(function(){
        introStart();
    });

/*------------/slide------------*/