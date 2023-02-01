            let i = document.getElementById("user").value;
            let b = document.getElementById("a").value;
            let o = document.getElementById("r").value;
            let z;

            if (b == "-") {
                z = i - o;
            } else {
                if (b == "*") {
                    z = i * o;
                } else {
                    if (b == "/") {
                        z = i / o;
                    } else {
                        if (b == "+") {
                            z = i + o;
                        } else {
                            if (b == "%") {
                                z = i % o;
                            }
                        }
                    }
                }
            }
            alert(z);
            document.getElementById("in").innerHTML = z;