piclist = ["images/quadcad.jpg", "images/dronegif.gif", "images/windshieldcad.jpg", "images/windshieldcleaner.JPG", "images/walker.gif"]
idlist = ["slide1", "slide2", "slide3", "slide4", "slide5"]
activeindex = 0
activeindex2 = 0

interval = setInterval(cycleimage, 5000)
interval2 = setInterval(cycleimage2, 5000)

function slides(buttonname) {
    clearInterval(interval)
    for (i = 0; i < idlist.length; i++) {
        document.getElementById(idlist[i]).className = ""
    };
    if (buttonname == "slide1") {
        activeindex = 0
        document.getElementById("slides").src = piclist[activeindex]
        document.getElementById("slide1").className = "activebutton"
        interval = setInterval(cycleimage, 5000)
    }
    else if (buttonname == "slide2") {
        activeindex = 1
        document.getElementById("slides").src = piclist[activeindex]
        document.getElementById("slide2").className = "activebutton"
        interval = setInterval(cycleimage, 5000)
    }
    else if (buttonname == "slide3") {
        activeindex = 2
        document.getElementById("slides").src = piclist[activeindex]
        document.getElementById("slide3").className = "activebutton"
        interval = setInterval(cycleimage, 5000)
    }
    else if (buttonname == "slide4") {
        activeindex = 3
        document.getElementById("slides").src = piclist[activeindex]
        document.getElementById("slide4").className = "activebutton"
        interval = setInterval(cycleimage, 5000)
    }
    else if (buttonname == "slide5") {
        activeindex = 4
        document.getElementById("slides").src = piclist[activeindex]
        document.getElementById("slide5").className = "activebutton"
        interval = setInterval(cycleimage, 7500)
    }

    return interval

}

function cycleimage() {
    listlength = piclist.length
    for (i = 0; i < idlist.length; i++) {
        document.getElementById(idlist[i]).className = ""
    };
    if (activeindex == listlength - 1) {
        activeindex = 0
    }
    else {
        activeindex = activeindex + 1
    }

    document.getElementById(idlist[activeindex]).className = "activebutton"
    document.getElementById("slides").src = piclist[activeindex]

    if (activeindex == 4) {
        clearInterval(interval)
        interval = setInterval(cycleimage, 7500)
    }
    else if (activeindex == 0) {
        clearInterval(interval)
        interval = setInterval(cycleimage, 5000)
    }

}

piclist2 = ["images/sleeperexposure.jpeg", "images/brickswerve.JPG"]
idlist2 = ["rightslide1", "rightslide2"]

function slides2(buttonname) {
    clearInterval(interval2)
    for (i = 0; i < idlist2.length; i++) {
        document.getElementById(idlist2[i]).className = ""
    };
    if (buttonname == "rightslide1") {
        activeindex2 = 0
        document.getElementById("rightslides").src = piclist2[activeindex2]
        document.getElementById("rightslide1").className = "activebutton"
        interval2 = setInterval(cycleimage2, 5000)
    }
    else if (buttonname == "rightslide2") {
        activeindex2 = 1
        document.getElementById("rightslides").src = piclist2[activeindex2]
        document.getElementById("rightslide2").className = "activebutton"
        interval2 = setInterval(cycleimage2, 5000)
    }

    return interval2
}

function cycleimage2() {
    listlength2 = piclist2.length
    for (i = 0; i < idlist2.length; i++) {
        document.getElementById(idlist2[i]).className = ""
    };
    if (activeindex2 == listlength2 - 1) {
        activeindex2 = 0
    }
    else {
        activeindex2 = activeindex2 + 1
    }

    document.getElementById(idlist2[activeindex2]).className = "activebutton"
    document.getElementById("rightslides").src = piclist2[activeindex2]

    clearInterval(interval2)
    interval2 = setInterval(cycleimage2, 5000)

}