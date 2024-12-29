

let isJapan = true;

document.getElementById('changeFlag').addEventListener('click', function() {
    if (isJapan) {
        
        document.getElementById('currentFlag').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1920px-Flag_of_Bangladesh.svg.png';
        document.getElementById('flagName').innerText = 'Bangladesh'; 
    } else {
    
        document.getElementById('currentFlag').src = 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg';
        document.getElementById('flagName').innerText = 'Japan'; 
    }
    isJapan = !isJapan; 
});
