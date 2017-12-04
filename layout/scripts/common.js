var validationTime = 2500;

$(document).ready(function () {

    var scene = document.getElementById('js-hero-parallax');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true
    });

    $('.js-footer-parallax').parallax({imageSrc: '../images/footer-bg.jpg'});

    var scrollBlotter = $.scrollorama({
        blocks:'.js-page-parallax',
        enablePin:false
    });

    scrollBlotter.animate('.blotter--num1',{ delay: 500, duration: 3000, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num2',{ delay: 500, duration: 3300, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num3',{ delay: 700, duration: 2500, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num4',{ delay: 1200, duration: 2000, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num5',{ delay: 1400,duration: 2400, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num6',{ delay: 1400,duration: 1500, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num7',{ delay: 2100, duration: 2900, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num8',{ delay: 2100,duration: 2500, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num9',{ delay: 2300,duration: 2000, property:'top', end: -800});

    scrollBlotter.animate('.blotter--num10',{ delay: 2700, duration: 3300, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num11',{ delay: 2700, duration: 2500, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num12',{ delay: 2800, duration: 2000, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num13',{ delay: 3400,duration: 2400, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num14',{ delay: 3500,duration: 1500, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num15',{ delay: 3500, duration: 2900, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num16',{ delay: 4200,duration: 2500, property:'top', end: -800});
    scrollBlotter.animate('.blotter--num17',{ delay: 4200,duration: 2000, property:'top', end: -800});

    var scrollorama = $.scrollorama({
        blocks:'.js-junior-parallax',
        enablePin:false
    });

/*-------------JUNIOR PARALLAX----------------*/

    /*fruits are falling*/
    scrollorama.animate('.junior-juice__component--apple',{ duration: 340, property:'bottom', end: 200});
    scrollorama.animate('.junior-juice__component--blueberry',{ duration: 440, property:'bottom', end: 200});
    scrollorama.animate('.junior-juice__component--grape1',{ duration: 540, property:'bottom', end: 200});
    scrollorama.animate('.junior-juice__component--cherry',{ duration: 290, property:'bottom',  end: 200});
    scrollorama.animate('.junior-juice__component--kiwi',{ duration: 360, property:'bottom',  end: 200});
    scrollorama.animate('.junior-juice__component--lime',{ duration: 410, property:'bottom', end: 200});
    scrollorama.animate('.junior-juice__component--strawberry',{ duration: 320, property:'bottom',  end: 200});
    scrollorama.animate('.junior-juice__component--malina',{ duration: 520, property:'bottom',  end: 200});

    scrollorama.animate('.junior-juice__component--apple',{ duration: 450, property:'rotate', start: 150});
    scrollorama.animate('.junior-juice__component--blueberry',{ duration: 420, property:'rotate', start: 270});
    scrollorama.animate('.junior-juice__component--grape1',{ duration: 300, property:'rotate', start: 320});
    scrollorama.animate('.junior-juice__component--cherry',{ duration: 340, property:'rotate', start: 360});
    scrollorama.animate('.junior-juice__component--kiwi',{ duration: 440, property:'rotate', start: 280});
    scrollorama.animate('.junior-juice__component--lime',{ duration: 380, property:'rotate', start: 180});
    scrollorama.animate('.junior-juice__component--strawberry',{ duration: 350, property:'rotate', start: 250});
    scrollorama.animate('.junior-juice__component--malina',{ duration: 310, property:'rotate', start: 200});

    scrollorama.animate('.junior-juice__component',{ duration: 330, property:'opacity', end: 0});

    /*juice is creating*/
    scrollorama.animate('.junior-clip__juice',{duration: 400, property:'bottom', start:-500});
    scrollorama.animate('.junior-cup__component',{ delay: 200, duration: 400, property:'opacity', start:0, end: 1});
    scrollorama.animate('.junior-clip__top',{delay: 360, duration: 40, property:'top', end: 5});

    /*first hide ice*/
    scrollorama.animate('.junior-cup__component',{ delay: 200, duration: 300, property:'rotate', start:270});

    /*ice is falling*/
    scrollorama.animate('.junior-cup__component--ice-1',{ delay: 200, duration: 260, property:'bottom', start:1300});
    scrollorama.animate('.junior-cup__component--ice-2',{ delay: 200, duration: 280, property:'bottom',  start:1100 });
    scrollorama.animate('.junior-cup__component--ice-3',{ delay: 200, duration: 300, property:'bottom', start:1400});
    scrollorama.animate('.junior-cup__component--ice-4',{ delay: 200, duration: 290, property:'bottom',  start:1100 });
    scrollorama.animate('.junior-cup__component--ice-5',{ delay: 200, duration: 310, property:'bottom', start:1300});
    scrollorama.animate('.junior-cup__component--ice-6',{ delay: 200, duration: 310, property:'bottom',  start:1100 });
    scrollorama.animate('.junior-cup__component--ice-7',{ delay: 200, duration: 270, property:'bottom', start:1200});
    scrollorama.animate('.junior-cup__component--ice-8',{ delay: 200, duration: 280, property:'bottom',  start:1500 });
    scrollorama.animate('.junior-cup__component--ice-9',{ delay: 200, duration: 315, property:'bottom', start:1000});
    scrollorama.animate('.junior-cup__component--ice-10',{ delay: 200, duration: 320, property:'bottom', start:900});

    scrollorama.animate('.junior-cup__component--ice-2',{ delay: 200, duration: 280, property:'left',  start:-50 });
    scrollorama.animate('.junior-cup__component--ice-4',{ delay: 200, duration: 290, property:'left',  start:100 });
    scrollorama.animate('.junior-cup__component--ice-5',{ delay: 200, duration: 310, property:'left',  start:-100 });
    scrollorama.animate('.junior-cup__component--ice-6',{ delay: 200, duration: 310, property:'left',  start:200 });
    scrollorama.animate('.junior-cup__component--ice-10',{ delay: 200, duration: 320, property:'left', start:50});

    scrollorama.animate('.junior-cup__component',{ delay: 170, duration: 300, property:'rotate', start:270});

    /*tube in the end*/
    scrollorama.animate('.junior-cup__component--tube',{ delay: 420, duration: 100, property:'bottom', start:1600});


/*-------------MIDDLE PARALLAX----------------*/
    var scrolloramaMiddle = $.scrollorama({
        blocks:'.js-middle-parallax',
        enablePin:false
    });

    /*fruits are falling*/
    scrolloramaMiddle.animate('.middle-juice__component--apple',{ duration: 360, property:'bottom', end: 400});
    scrolloramaMiddle.animate('.middle-juice__component--peach',{ duration: 480, property:'bottom', end: 400});
    scrolloramaMiddle.animate('.middle-juice__component--orange',{ duration: 440, property:'bottom', end: 400});
    scrolloramaMiddle.animate('.middle-juice__component--cherry',{ duration: 300, property:'bottom',  end: 400});
    scrolloramaMiddle.animate('.middle-juice__component--lime',{ duration: 290, property:'bottom',  end: 400});
    scrolloramaMiddle.animate('.middle-juice__component--grape',{ duration: 350, property:'bottom', end: 400});
    scrolloramaMiddle.animate('.middle-juice__component--mandarin',{ duration: 300, property:'bottom',  end: 400});

    scrolloramaMiddle.animate('.middle-juice__component--apple',{ duration: 320, property:'rotate', start: 150});
    scrolloramaMiddle.animate('.middle-juice__component--peach',{ duration: 280, property:'rotate', start: 270});
    scrolloramaMiddle.animate('.middle-juice__component--orange',{ duration: 330, property:'rotate', start: 320});
    scrolloramaMiddle.animate('.middle-juice__component--cherry',{ duration: 380, property:'rotate', start: 360});
    scrolloramaMiddle.animate('.middle-juice__component--lime',{ duration: 430, property:'rotate', start: 50});
    scrolloramaMiddle.animate('.middle-juice__component--grape',{ duration: 410, property:'rotate', start: 310});
    scrolloramaMiddle.animate('.middle-juice__component--mandarin',{ duration: 370, property:'rotate', start: 320});

    scrolloramaMiddle.animate('.middle-juice__component',{ duration: 330, property:'opacity', end: 0});

    /*juice is creating*/
    scrolloramaMiddle.animate('.middle-clip__juice',{delay: 100, duration: 300, property:'bottom', start:-500});
    scrolloramaMiddle.animate('.middle-cup__component',{ delay: 200, duration: 400, property:'opacity', start:0, end: 1});
    scrolloramaMiddle.animate('.middle-clip__top',{delay: 380, duration: 20, property:'top', end: 5});

    /*first hide ice*/
    scrolloramaMiddle.animate('.middle-cup__component',{ delay: 200, duration: 300, property:'rotate', start:270});

    /*ice is falling*/
    scrolloramaMiddle.animate('.middle-cup__component--ice-1',{ delay: 200, duration: 260, property:'bottom', start:1300});
    scrolloramaMiddle.animate('.middle-cup__component--ice-2',{ delay: 200, duration: 270, property:'bottom',  start:1100 });
    scrolloramaMiddle.animate('.middle-cup__component--ice-3',{ delay: 200, duration: 310, property:'bottom', start:1400});
    scrolloramaMiddle.animate('.middle-cup__component--ice-4',{ delay: 200, duration: 280, property:'bottom',  start:1100 });
    scrolloramaMiddle.animate('.middle-cup__component--ice-5',{ delay: 200, duration: 310, property:'bottom', start:1300});
    scrolloramaMiddle.animate('.middle-cup__component--ice-6',{ delay: 200, duration: 320, property:'bottom',  start:1100 });
    scrolloramaMiddle.animate('.middle-cup__component--ice-7',{ delay: 200, duration: 280, property:'bottom', start:1200});
    scrolloramaMiddle.animate('.middle-cup__component--ice-8',{ delay: 200, duration: 300, property:'bottom',  start:1500 });
    scrolloramaMiddle.animate('.middle-cup__component--ice-9',{ delay: 200, duration: 320, property:'bottom', start:1000});
    scrolloramaMiddle.animate('.middle-cup__component--ice-10',{ delay: 200, duration: 320, property:'bottom', start:900});
    scrolloramaMiddle.animate('.middle-cup__component--ice-11',{ delay: 200, duration: 330, property:'bottom',  start:1400 });
    scrolloramaMiddle.animate('.middle-cup__component--ice-12',{ delay: 200, duration: 340, property:'bottom', start:1300});
    scrolloramaMiddle.animate('.middle-cup__component--ice-13',{ delay: 200, duration: 330, property:'bottom', start:1000});

    scrolloramaMiddle.animate('.middle-cup__component--ice-1',{ delay: 200, duration: 280, property:'left',  start:-10 });
    scrolloramaMiddle.animate('.middle-cup__component--ice-3',{ delay: 200, duration: 290, property:'left',  start:100 });
    scrolloramaMiddle.animate('.middle-cup__component--ice-4',{ delay: 200, duration: 310, property:'left',  start:-70 });
    scrolloramaMiddle.animate('.middle-cup__component--ice-6',{ delay: 200, duration: 310, property:'left',  start:200 });
    scrolloramaMiddle.animate('.middle-cup__component--ice-8',{ delay: 200, duration: 280, property:'left',  start:-20 });
    scrolloramaMiddle.animate('.middle-cup__component--ice-11',{ delay: 200, duration: 320, property:'left', start:50});

    scrolloramaMiddle.animate('.middle-cup__component',{ delay: 200, duration: 280, property:'rotate', start:270});

    /*tube in the end*/
    scrolloramaMiddle.animate('.middle-cup__component--tube',{ delay: 425, duration: 100, property:'bottom', start:1600});

/*-------------senior PARALLAX----------------*/
    var scrolloramaSenior = $.scrollorama({
        blocks:'.js-senior-parallax',
        enablePin:false
    });

    /*fruits are falling*/
    scrolloramaSenior.animate('.senior-juice__component--apple',{ duration: 360, property:'bottom', end: 200});
    scrolloramaSenior.animate('.senior-juice__component--grapefruit',{ duration: 480, property:'bottom', end: 200});
    scrolloramaSenior.animate('.senior-juice__component--merlot',{ duration: 440, property:'bottom', end: 200});
    scrolloramaSenior.animate('.senior-juice__component--strawberry',{ duration: 300, property:'bottom',  end: 200});
    scrolloramaSenior.animate('.senior-juice__component--lime',{ duration: 290, property:'bottom',  end: 200});
    scrolloramaSenior.animate('.senior-juice__component--orange',{ duration: 300, property:'bottom',  end: 200});
    scrolloramaSenior.animate('.senior-juice__component--malina',{ duration: 300, property:'bottom',  end: 200});

    scrolloramaSenior.animate('.senior-juice__component--apple',{ duration: 320, property:'rotate', start: 390});
    scrolloramaSenior.animate('.senior-juice__component--grapefruit',{ duration: 280, property:'rotate', start: 270});
    scrolloramaSenior.animate('.senior-juice__component--merlot',{ duration: 330, property:'rotate', start: 320});
    scrolloramaSenior.animate('.senior-juice__component--strawberry',{ duration: 380, property:'rotate', start: 360});
    scrolloramaSenior.animate('.senior-juice__component--lime',{ duration: 430, property:'rotate', start: 320});
    scrolloramaSenior.animate('.senior-juice__component--orange',{ duration: 370, property:'rotate', start: 350});
    scrolloramaSenior.animate('.senior-juice__component--malina',{ duration: 370, property:'rotate', start: 320});

    scrolloramaSenior.animate('.senior-juice__component',{ duration: 330, property:'opacity', end: 0});

    /*juice is creating*/
    scrolloramaSenior.animate('.senior-clip__juice',{delay: 100, duration: 300, property:'bottom', start:-500});
    scrolloramaSenior.animate('.senior-cup__component',{ delay: 200, duration: 400, property:'opacity', start:0, end: 1});
    scrolloramaSenior.animate('.senior-clip__top',{delay: 380, duration: 20, property:'top', end: 5});

    /*first hide ice*/
    scrolloramaSenior.animate('.senior-cup__component',{ delay: 200, duration: 300, property:'rotate', start:270});

    /*ice is falling*/
    scrolloramaSenior.animate('.senior-cup__component--ice-1',{ delay: 200, duration: 260, property:'bottom', start:1300});
    scrolloramaSenior.animate('.senior-cup__component--ice-2',{ delay: 200, duration: 270, property:'bottom',  start:1100 });
    scrolloramaSenior.animate('.senior-cup__component--ice-3',{ delay: 200, duration: 310, property:'bottom', start:1400});
    scrolloramaSenior.animate('.senior-cup__component--ice-4',{ delay: 200, duration: 280, property:'bottom',  start:1100 });
    scrolloramaSenior.animate('.senior-cup__component--ice-5',{ delay: 200, duration: 310, property:'bottom', start:1300});
    scrolloramaSenior.animate('.senior-cup__component--ice-6',{ delay: 200, duration: 300, property:'bottom',  start:1100 });
    scrolloramaSenior.animate('.senior-cup__component--ice-7',{ delay: 200, duration: 280, property:'bottom', start:1200});
    scrolloramaSenior.animate('.senior-cup__component--ice-8',{ delay: 200, duration: 300, property:'bottom',  start:1500 });
    scrolloramaSenior.animate('.senior-cup__component--ice-9',{ delay: 200, duration: 320, property:'bottom', start:1000});
    scrolloramaSenior.animate('.senior-cup__component--ice-10',{ delay: 200, duration: 320, property:'bottom', start:900});
    scrolloramaSenior.animate('.senior-cup__component--ice-11',{ delay: 200, duration: 330, property:'bottom',  start:1400 });
    scrolloramaSenior.animate('.senior-cup__component--ice-12',{ delay: 200, duration: 340, property:'bottom', start:1300});
    scrolloramaSenior.animate('.senior-cup__component--ice-13',{ delay: 200, duration: 330, property:'bottom', start:1000});
    scrolloramaSenior.animate('.senior-cup__component--ice-14',{ delay: 200, duration: 290, property:'bottom', start:1300});
    scrolloramaSenior.animate('.senior-cup__component--ice-15',{ delay: 200, duration: 300, property:'bottom', start:1000});

    scrolloramaSenior.animate('.senior-cup__component--ice-1',{ delay: 200, duration: 280, property:'left',  start:-30 });
    scrolloramaSenior.animate('.senior-cup__component--ice-3',{ delay: 200, duration: 290, property:'left',  start:100 });
    scrolloramaSenior.animate('.senior-cup__component--ice-4',{ delay: 200, duration: 310, property:'left',  start:-40 });
    scrolloramaSenior.animate('.senior-cup__component--ice-6',{ delay: 200, duration: 310, property:'left',  start:200 });
    scrolloramaSenior.animate('.senior-cup__component--ice-8',{ delay: 200, duration: 280, property:'left',  start:-20 });
    scrolloramaSenior.animate('.senior-cup__component--ice-11',{ delay: 200, duration: 320, property:'left', start:50});

    scrolloramaSenior.animate('.senior-cup__component',{ delay: 200, duration: 300, property:'rotate', start:270});

    /*tube in the end*/
    scrolloramaSenior.animate('.senior-cup__component--tube',{ delay: 430, duration: 100, property:'bottom', start:1600});

        var fortune = $.scrollorama({
            blocks:'.cubes',
            enablePin:false
        });
        fortune.animate('.cubes__wheel',{ duration: 800, property:'rotate', start: 2880});

        fortune.animate('.cube--red', { duration: 210, property:'top', start: -450 });
        fortune.animate('.cube--blue', { duration: 250, property:'top', start: -300 });
        fortune.animate('.cube--purple', { duration: 300, property:'top', start: -400 });

        fortune.animate('.cube', { duration: 200, property:'scale', start: 0, end: 1 });
        fortune.animate('.cube--red', { duration: 200, property:'left', start: 100, end: -100 });
        fortune.animate('.cube--purple', { duration: 200, property:'left', start: -100, end: 100 });

        fortune.animate('.cube__content',{ delay: 200, duration: 200, property:'opacity', start: 0, end: 1});
        fortune.animate('.cube__text',{ delay: 200, duration: 200, property:'scale', start: 1, end: 3});

        fortune.animate('.cube--red', { delay: 500, duration: 500, property:'opacity', end: 0 });
        fortune.animate('.cube--blue', { delay: 500, duration: 500, property:'opacity', end: 0 });
        fortune.animate('.cube--purple', { delay: 500, duration: 500, property:'opacity', end: 0 });

    });
