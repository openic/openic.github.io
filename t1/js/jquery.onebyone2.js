(function (a) {
    var b = ["rollIn", "fadeIn", "fadeInUp", "fadeInDown", "fadeInLeft", "fadeInRight", "bounceIn", "bounceInDown", "bounceInUp", "bounceInLeft", "bounceInRight", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight"],
        c = b.length;
    a.fn.oneByOne = function (d) {
        function D() {
            var a = h;
            a -= 1;
            a = a < 0 ? r - 1 : a;
            z(a)
        }
        function C() {
            var a = Number(h);
            a += 1;
            a = a >= r ? 0 : a;
            z(a)
        }
        function B() {
            clearInterval(g.data("interval"));
            slideShowInt = setInterval(function () {
                C()
            }, e.slideShowDelay);
            g.data("interval", slideShowInt)
        }
        function A() {
            clearInterval(g.data("interval"))
        }
        function z(d) {
            if (e.slideShow) {
                A()
            }
            g.stop(true, true).animate({
                left: -d * i
            }, e.delay, function () {
                if (d !== h) {
                    s = h;
                    if (q[s]) {
                        q[s].fadeOut();
                        a(".buttonArea a:eq(" + s + ")", f).removeClass("active")
                    }
                    a(".buttonArea a:eq(" + d + ")", f).addClass("active");
                    if (!e.randomEasing) {
                        q[d].show().children().each(function (b) {
                            p = a(this).attr("data-ease") !== undefined && a(this).attr("data-ease") !== "" ? a(this).attr("data-ease") : p;
                            if (a(this).hasClass(p)) {
                                a(this).removeClass(p).hide()
                            }
                            var c = b;
                            a(this).show().addClass("animate" + c + " " + p)
                        })
                    } else {
                        o = b[Math.floor(Math.random() * c)];
                        n[d] = o;
                        if (q[s]) {
                            q[s].children().each(function (b) {
                                if (a(this).hasClass(n[s])) {
                                    a(this).removeClass(n[s]);
                                    a(this).hide()
                                }
                            })
                        }
                        q[d].show().children().each(function (b) {
                            var c = b;
                            a(this).show().addClass("animate" + c + " " + o)
                        })
                    }
                    g.delay(q[d].children().length * 200).queue(function () {
                        if (e.slideShow) {
                            B()
                        }
                    });
                    if (v) {
                        v.css("cursor", "pointer")
                    }
                    h = d
                }
            })
        }
        var e = {
            className: "oneByOne",
            sliderClassName: "oneByOne_item",
            randomEasing: true,
            width: 940,
            height: 400,
            delay: 300,
            tolerance: .25,
            enableDrag: true,
            showArrow: true,
            showButton: true,
            slideShow: false,
            slideShowDelay: 4000
        };
        if (d) {
            a.extend(e, d)
        }
        var f = undefined,
            g = undefined,
            h = -1,
            i = e.width,
            j = e.height,
            k = 0,
            l = false,
            m = false,
            n = [],
            o = "",
            p = "rollIn",
            q = [],
            r = 0,
            s = 0,
            t = undefined,
            u = undefined,
            v = undefined;
        g = this;
        g.wrap('<div class="' + e.className + '"/>');
        f = g.parent();
        f.css("overflow", "hidden");
        g.find("." + e.sliderClassName).each(function (b) {
            a(this).hide();
            r += 1;
            a(this).css("left", i * b);
            q[b] = a(this)
        });
        g.bind("touchstart", function (a) {
            a.preventDefault();
            var b = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
            if (!l) {
                l = true;
                this.mouseX = b.pageX
            }
            //if (u) {u.fadeIn()}
            //if (v) {v.fadeIn()}
            return false
        });
        g.bind("touchmove", function (a) {
            a.preventDefault();
            var b = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
            if (l) {
                k = b.pageX - this.mouseX;
                g.css("left", -h * i + k);
                if (e.slideShow) {
                    A()
                }
            }
            return false
        });
        g.bind("touchend", function (a) {
            var b = h;
            a.preventDefault();
            var c = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
            l = false;
            if (!k) {
                return false
            }
            var d = parseInt(e.width),
                f = d / 2;
            if (-k > f - d * e.tolerance) {
                b += 1;
                b = b >= r ? r - 1 : b;
                z(b)
            } else if (k > f - d * e.tolerance) {
                b -= 1;
                b = b < 0 ? 0 : b;
                z(b)
            } else {
                z(b);
                if (e.slideShow) {
                    B()
                }
            }
            k = 0;
            if (u) {u.delay(400).fadeOut()}
            if (v) {v.delay(400).fadeOut()}
            return false
        });
        if (e.enableDrag) {
            g.mousedown(function (a) {
                if (!l) {
                    l = true;
                    this.mouseX = a.pageX
                }
                return false
            });
            g.mousemove(function (a) {
                if (l) {
                    k = a.pageX - this.mouseX;
                    g.css("left", -h * i + k);
                    if (e.slideShow) {
                        A()
                    }
                }
                return false
            });
            g.mouseup(function (a) {
                l = false;
                var b = h;
                if (!k) {
                    return false
                }
                var c = parseInt(e.width),
                    d = c / 2;
                if (-k > d - c * e.tolerance) {
                    b += 1;
                    b = b >= r ? r - 1 : b;
                    C()
                } else if (k > d - c * e.tolerance) {
                    b -= 1;
                    b = b < 0 ? 0 : b;
                    D()
                } else {
                    z(b);
                    if (e.slideShow) {
                        B()
                    }
                }
                k = 0;
                return false
            });
            g.mouseleave(function (b) {
                a(this).mouseup()
            })
        }
        /* f.mouseover(function (a) {
            if (u) {u.fadeIn()}
            if (v) {v.fadeIn()}
        });
        f.mouseleave(function (a) {
            if (u) {u.fadeOut()}
            if (v) {v.fadeOut()}
        }); */
        if (e.showButton) {
            t = a('<div class="buttonArea"><div class="buttonCon"></div></div>');
            f.append(t);
            u = t.find(".buttonCon");
            for (var w = 0; w < r; w += 1) {
                u.append('<a class="theButton" rel="' + w + '">' + (w + 1) + "</a>").css("cursor", "pointer")
            }
            a(".buttonCon a:eq(" + h + ")", t).addClass("active");
            a(".buttonCon a", t).bind("click", function (b) {
                if (a(this).hasClass("active")) {
                    return false
                }
                var c = a(this).attr("rel");
                z(c);
                return this
            })
        }
        if (e.showArrow) {
            v = a('<div class="arrowButton"><div class="prevArrow"></div><div class="nextArrow"></div></div>');
            f.append(v);
            var x = a(".nextArrow", v).bind("click", function (a) {
                C();
                return this
            });
            var y = a(".prevArrow", v).bind("click", function (a) {
                D();
                return this
            })
        }
        // if (u) {u.hide()}
        // if (v) {v.hide()}
		
        z(0);
        if (e.slideShow) {
            slideShowInt = setInterval(function () {
                C()
            }, e.slideShowDelay);
            g.data("interval", slideShowInt)
        }
    }
})(jQuery);