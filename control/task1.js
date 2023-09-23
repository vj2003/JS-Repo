for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write("<br>")
        document.write(i, "fizz buzz")
    }
    else if (i % 5 == 0) {
        document.write("<br>")
        document.write(i, "buzz")
    }
    else if (i % 3 == 0) {
        document.write("<br>")
        document.write(i, "fizz")
    }
    else {
        document.write("<br>")
        document.write(i)
    }

}