

function changeText(){
    document.getElementById('image1').src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZPLqZPKk2HEf34WckPnhIBagPeISfHBw8Q&usqp=CAU';
    console.log('in image tag')
    document.getElementById('p1').innerHTML= 'its javascript';
    // document.getElementById('p1').style.backgroundColor='pink'
    // document.getElementById('p1').style.color='red'
    document.getElementById('p1').style.cssText = 'color:pink'
    // document.getElementById('image1').src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZPLqZPKk2HEf34WckPnhIBagPeISfHBw8Q&usqp=CAU';
    console.log('javascript');
}