$(()=>{
    $('#btnContentPage').click(()=>{
        console.log('hello')
        $('#content').load('components/content-page.html')
    })
})