function myfunction1 () {
    const userid = document.getElementById('userid').value;
    const useridlength = userid.length;
    if (userid === "") {
        document.getElementById('error').style.display = "none";
    } else if (useridlength < 5 || useridlength > 12) {
        document.getElementById('error').style.display = "block";
    } else {
        document.getElementById('error').style.display = "none";
    }
}
function myfunction2 () {
    const password = document.getElementById('password').value;
    const passwordlength = password.length;
    if (password === "") {
        document.getElementById('error1').style.display = "none";
    } else if (passwordlength < 7 || passwordlength > 12) {
        document.getElementById('error1').style.display = "block";
    } else {
        document.getElementById('error1').style.display = "none";
    }
}
function myfunction3 () {
    const name = document.getElementById('name').value;
    const pattern = /^[a-zA-Z]+$/;
    if (name === "") {
        document.getElementById('error2').style.display = "none";
    } else if (!pattern.test(name)) {
        document.getElementById('error2').style.display = "block";
    } else{
        document.getElementById('error2').style.display = "none";
    }
}
function myfunction4 () {
    const address = document.getElementById('address').value;
    if (address ==="") {
        document.getElementById('error22').style.display = "block";
    } 
} 
function myfunction4a () {
    const address = document.getElementById('address').value;
    if (address ==="") {
        document.getElementById('error22').style.display = "none";
    } else {
    document.getElementById('error22').style.display = "block";
    }
} 
function myfunction5 () {
    const country = document.getElementById('country').value;
    if (country != "count") {
        document.getElementById('error3').style.display = "block";
    } else {
        document.getElementById('error3').style.display = "none";
    }   
}
function myfunction6 () {
    const zipcode = document.getElementById('zipcode').value;
    const pattern = /^[0-9]*$/;
    if (zipcode === "") {
        document.getElementById('error4').style.display = "none";
    } else if (!pattern.test(zipcode)) {
        document.getElementById('error4').style.display = "block";
    } else {
        document.getElementById('error4').style.display ="none";
    }
}
function myfunction7 () {
    const email = document.getElementById('email').value;
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "") {
        document.getElementById('error5').style.display = "none";
    } else if (!pattern.test(email)) {
        document.getElementById('error5').style.display = "block";
    } else {
        document.getElementById('error5').style.display = "none";
    }
}
function myfunction8 () {
    const male = document.getElementById('male').checked;
    const female = document.getElementById('female').checked;
    if (male || female) {
        document.getElementById('error6').style.display = "none";
    } else {
        document.getElementById('error6').style.display = "block";
    }
}
function myfunction9 () {
    const english = document.getElementById('english').checked;
    const nonenglish = document.getElementById('nonenglish').checked;
    if (english || nonenglish) {
        document.getElementById('error7').style.display = 'none';
    } else {
        document.getElementById('error7').style.display = 'block';
    }
}
function myfunction10 () {
    const about = document.getElementById('about').value;
    if (about === "") {
        document.getElementById('error8').style.display ="block";
    } 
}
function myfunction10a () {
    const about = document.getElementById('about').value;
    if (about === "") {
        document.getElementById('error8').style.display ="none";
    } else {
        document.getElementById('error8').style.display ="block";
    }
}
function myfunction () {
            const userid = document.getElementById('userid').value;
        const useridlength = userid.length;
        if (userid === "") {
            document.getElementById('error').style.display = "block";
        } else if (useridlength < 5 || useridlength > 12) {
            document.getElementById('error').style.display = "block";
        } else {
            document.getElementById('error').style.display = "none";
        }
            const password = document.getElementById('password').value;
        const passwordlength = password.length;
        if (password === "") {
            document.getElementById('error1').style.display = "block";
        } else if (passwordlength < 7 || passwordlength > 12) {
            document.getElementById('error1').style.display = "block";
        } else {
            document.getElementById('error1').style.display = "none";
        }
    }
    function myfunction3a () {
        const name = document.getElementById('name').value;
        const pattern = /^[a-zA-Z]+$/;
        if (name === "") {
            document.getElementById('error2').style.display = "block";
        } else if (!pattern.test(name)) {
            document.getElementById('error2').style.display = "block";
        } else{
            document.getElementById('error2').style.display = "none";
        }
    }
    function myfunction6a () {
        const zipcode = document.getElementById('zipcode').value;
        const pattern = /^[0-9]*$/;
        if (zipcode === "") {
            document.getElementById('error4').style.display = "block";
        } else if (!pattern.test(zipcode)) {
            document.getElementById('error4').style.display = "block";
        } else {
            document.getElementById('error4').style.display ="none";
        }
    }
    function myfunction7a () {
        const email = document.getElementById('email').value;
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email === "") {
            document.getElementById('error5').style.display = "block";
        } else if (!pattern.test(email)) {
            document.getElementById('error5').style.display = "block";
        } else {
            document.getElementById('error5').style.display = "none";
        }
    }
    form.addEventListener('submit', function myfunctionn(event) {
    event.preventDefault();
    myfunction();
    myfunction3a();
    myfunction5();
    myfunction6a();
    myfunction7a();
    myfunction8();
    myfunction9();
})