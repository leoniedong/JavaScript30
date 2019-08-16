document.addEventListener('DOMContentLoaded', function(){
    console.log('content loaded')

    const inputs = document.querySelectorAll('.controls input')

    function handleUpdate(){
        console.log(this.value) 
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate))
})