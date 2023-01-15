$(document).ready(()=>{
    console.log($('#btnWebDev'))
    $('#btnWebDev').click(()=>{
        $('#content').load('components/webdev-blog.html')
    })
})