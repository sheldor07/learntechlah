$(() => {

    $('#navbar').load('./components/navbar.html') //callback cos otherwise it may get called before navbar is loaded
    $('#content').load('./components/content-page.html')
    //$('#footer').load('./components/footer.html')
    

})
