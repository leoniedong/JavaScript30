document.addEventListener('DOMContentLoaded', function(){
    console.log('content loaded')

    const inputs = document.querySelectorAll('.controls input')

    function handleUpdate(){
        const suffix = this.dataset.sizing || ''; //if doesn't have data-sizing, have nothing
        const name = this.name //'spacing'/'blur'/'base'
        const value = this.value
        document.documentElement.style.setProperty(`--${name}`, value + suffix)
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate))
    inputs.forEach(input => input.addEventListener('mouseover', handleUpdate))
})