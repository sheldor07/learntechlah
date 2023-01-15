$(document).ready(()=>{
    console.log($('#btnGetStarted'))
    $('#btnGetStarted').click(()=>{
        $('#content').load('components/path-pick.html')
    })
})