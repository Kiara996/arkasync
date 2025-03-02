// Typing Text Js
$(document).on('DOMContentLoaded', function () {
    window.ityped.init(document.querySelector('.ityped'), {
        strings: ['HI THERE!', 'I’M KEVIN FAUZAN_', 'Technology Enthusiast!'],
        loop: true
    });
});
/*------------------------------------- Whole Page Scrolling Animation -------------------------------------*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
        target.classList.toggle('show', isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down');

document.addEventListener('DOMContentLoaded', () => {
    hiddenElements.forEach((el) => observer.observe(el));
});
/*------------------------------------- Preloader -------------------------------------*/
(function ($) {
    $(window).on('load', function () {
        const svg = document.getElementById("loade-svg");
        const tl = gsap.timeline();

        const shapes = {
            start: "M0 502S175 272 500 272s500 230 500 230V0H0Z",
            end: "M0 2S175 1 500 1s500 1 500 1V0H0Z"
        };

        tl.to(".loading", {
            delay: 1.2,
            y: -50,
            opacity: 0,
            duration: 0.6
        })
            .to(svg, {
                duration: 0.6,
                attr: { d: shapes.start },
                ease: "power1.easeIn"
            })
            .to(svg, {
                duration: 0.6,
                attr: { d: shapes.end },
                ease: "power1.easeOut"
            })
            .to(".preloader", {
                y: -1000,
                duration: 0.8
            })
            .set(".preloader", {
                zIndex: -1,
                display: "none"
            });
    });
}(jQuery));
/*------------------------------------- Menu Toggle -------------------------------------*/
$(document).ready(function () {
    const $menuToggle = $('#menu-toggle');
    const $sideMenu = $('.side-menu-main');
    const $hamburger = $('.hamburger');

    $(document).on('click', '.menu-list-main li', function (e) {
        e.preventDefault();

        const $link = $(this).find('a');
        const targetId = $link.attr('href') ? $link.attr('href').substring(1) : null;

        if (targetId && $('#' + targetId).length) {
            $('#' + targetId)[0].scrollIntoView({ behavior: 'smooth' });
        }

        $sideMenu.removeClass('show');
        $hamburger.removeClass('is-active');
    });

    $menuToggle.on('click', function () {
        $sideMenu.toggleClass('show');
        $hamburger.toggleClass('is-active', $sideMenu.hasClass('show'));
    });

    new MutationObserver(() => {
        if (!$sideMenu.hasClass('show')) {
            $hamburger.removeClass('is-active');
        }
    }).observe($sideMenu[0], { attributes: true, attributeFilter: ['class'] });
});

/*------------------------------------- Scroll counter -------------------------------------*/
var counted = 0;
$(window).on('scroll', function () {
    var oTop = $('.counter').offset()?.top - window.innerHeight;
    if (counted === 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 800,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
        });
        counted = 1;
    }
});

/*------------------------------------- Tabs -------------------------------------*/
$(function () {
    $(document).on('click', '.tab-btn-main a', function (e) {
        e.preventDefault();
        const tabId = $(this).data('tab');
        $('.tab-btn-main a, .Tabcondent').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('#' + tabId).addClass('tab-active');
    });
});

/*------------------------------------- Pop Videos -------------------------------------*/
$(document).ready(function () {
    $('.vimeo').magnificPopup({
        items: {
            src: 'https://vimeo.com/259411563'
        },
        type: 'iframe'
    });

    $('.youtube').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=PavYAOpVpJI'
        },
        type: 'iframe'
    });

    $('.soundcloud').magnificPopup({
        type: 'soundcloud',
        items: {
            src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163522130&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        type: 'iframe',
    });
});

var modalElement1 = document.getElementById('exampleModal1');
var videoContainer1 = document.querySelector('.video-container1');
var videoIframe1 = document.getElementById('videomodal1');

modalElement1.addEventListener('hidden.bs.modal', function () {
    videoIframe1.remove();
        setTimeout(function() {
            videoContainer1.innerHTML = '<iframe id="videomodal1" width="100%" height="393.75" src="https://www.youtube.com/embed/4O5T99lNzpg?si=ATDTCE4bTkaMnQDI" title="Realitas Semu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        }, 500);
    }
);

var modalElement2 = document.getElementById('exampleModal2');
var videoContainer2 = document.querySelector('.video-container2');
var videoIframe2 = document.getElementById('videomodal2');

modalElement2.addEventListener('hidden.bs.modal', function () {
    videoIframe2.remove();
        setTimeout(function() {
            videoContainer2.innerHTML = '<iframe width="100%" height="393.75" src="https://www.youtube.com/embed/GGA4S0P0F2Q?si=-m_zH3i2RBI7bCAO" title="Realitas Semu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        }, 500);
    }
);

var modalElement3 = document.getElementById('exampleModal3');
var videoContainer3 = document.querySelector('.video-container3');
var videoIframe3 = document.getElementById('videomodal3');

modalElement3.addEventListener('hidden.bs.modal', function () {
    videoIframe3.remove();
        setTimeout(function() {
            videoContainer3.innerHTML = '<iframe id="videomodal3" width="100%" height="393.75" src="https://www.youtube.com/embed/z5T41YWFlbQ?si=b72w2yOO60aJnmZL" title="Up" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        }, 500);
    }
);

var modalElement4 = document.getElementById('exampleModal4');
var videoContainer4 = document.querySelector('.video-container4');
var videoIframe4 = document.getElementById('videomodal4');

modalElement4.addEventListener('hidden.bs.modal', function () {
    videoIframe4.remove();
        setTimeout(function() {
            videoContainer4.innerHTML = '<iframe id="videomodal4" width="100%" height="393.75" src="https://www.youtube.com/embed/BcmKOYfvPEI?si=tQVNZ8NdtJ_CC9dw" title="Switch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        }, 500);
    }
);

var modalElement8 = document.getElementById('exampleModal8');
var videoContainer8 = document.querySelector('.video-container8');
var videoIframe8 = document.getElementById('videomodal8');

modalElement8.addEventListener('hidden.bs.modal', function () {
    videoIframe8.remove();
        setTimeout(function() {
            videoContainer8.innerHTML = '<iframe id="videomodal8" width="100%" height="393.75" src="https://www.youtube.com/embed/alTr5LkC1Ec?si=_AaAA58d4f_CR2S1" title="Gala Untuk Ibu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        }, 500);
    }
);

var modalElement9 = document.getElementById('exampleModal9');
var videoContainer9 = document.querySelector('.video-container9');
var videoIframe9 = document.getElementById('videomodal9');

modalElement9.addEventListener('hidden.bs.modal', function () {
    videoIframe9.remove();
        setTimeout(function() {
            videoContainer9.innerHTML = '<iframe id="videomodal8" width="100%" height="393.75" src="https://www.youtube.com/embed/alTr5LkC1Ec?si=_AaAA58d4f_CR2S1" title="Gala Untuk Ibu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        }, 500);
    }
);

var modalElement11 = document.getElementById('exampleModal11');
var videoContainer11 = document.querySelector('.video-container11');
var videoIframe11 = document.getElementById('videomodal11');

modalElement11.addEventListener('hidden.bs.modal', function () {
    videoIframe11.remove();
        setTimeout(function() {
            videoContainer11.innerHTML = '<iframe id="videomodal8" width="100%" height="393.75" src="https://www.youtube.com/embed/alTr5LkC1Ec?si=_AaAA58d4f_CR2S1" title="Gala Untuk Ibu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        }, 500);
    }
);
/*------------------------------------- Testimonial Slider -------------------------------------*/
$(document).ready(function () {
    $('.testimonial').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 1000,
    });
});
/*------------------------------------- Infinite Marquee -------------------------------------*/
document.querySelectorAll('.logos').forEach(function (logosContainer) {
    const copy = logosContainer.querySelector('.logos-slide').cloneNode(true);
    logosContainer.appendChild(copy);
});

/*------------------------------------- Skill Bar Circular -------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const progressItems = document.querySelectorAll(".progress-item");
    const colors = ['#bce70c', '#ff759c', '#00cc97', '#ffdb59', '#6f39fd'];

    // Add skill labels and initialize colors
    progressItems.forEach((item, index) => {
        const skillName = item.getAttribute("data-skill");
        const skillLabel = document.createElement("div");
        skillLabel.className = "skill-label";
        skillLabel.textContent = skillName;

        item.appendChild(skillLabel);

        const color = colors[index % colors.length];
        item.style.background = `conic-gradient(${color} 0%, #EDF0F4 0%)`;
    });

    const progressSection = document.querySelector("#progress");
    const observerOptions = { threshold: 0.3 };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                progressItems.forEach((item, index) => {
                    const skillValue = parseInt(item.getAttribute("data-value"));
                    const color = colors[index % colors.length];
                    let count = 0;
                    const interval = setInterval(() => {
                        if (count >= skillValue) {
                            clearInterval(interval);
                        } else {
                            count++;
                            item.style.background = `conic-gradient(${color} ${count}%, #EDF0F4 ${count}%)`;
                            item.setAttribute("data-value", count);
                        }
                    }, 20);
                });
                observer.unobserve(progressSection);
            }
        });
    }, observerOptions);
    observer.observe(progressSection);
});
/*------------------------------------- Bottom To Top Button -------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.bottom-top-button');
    window.addEventListener('scroll', () => {
        button.style.display = window.pageYOffset > 100 ? 'block' : 'none';
    });
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

/*------------------------------------- Fix Header Add Class -------------------------------------*/
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/*------------------------------------- Menu active button  -------------------------------------*/
const li = document.querySelectorAll(".menu-btn");
const sec = document.querySelectorAll(".active_menus");

function activeMenu() {
    let len = sec.length;
    while (len--) {
        if (window.scrollY + 97 >= sec[len].offsetTop) {
            li.forEach(ltx => ltx.classList.remove("active"));
            li[len].classList.add("active");
            break;
        }
    }
}
activeMenu();
window.addEventListener("scroll", activeMenu);

/*-------------------------------------main background slider-------------------------------------*/
$('.slider-main').slick({
    dots: false,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
})
