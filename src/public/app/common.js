$(() => {

    $('#navbar').load('./components/navbar.html') //callback cos otherwise it may get called before navbar is loaded
    $('#content').load('./components/landing.html')
    $('#footer').load('./components/footer.html')
    

})
