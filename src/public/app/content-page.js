$(() => {
    $('#navbar').load('components/navbar.html')
    // Hide submenus
    $('#btnProjects').click(()=>{
        $('#content').load('components/content-page.js')
    })
})