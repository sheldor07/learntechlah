$(()=>{

    $('#btnLogin').click(()=>{
        console.log('clicked')
        $("#content").load('components/user-profile.html')
    })

})