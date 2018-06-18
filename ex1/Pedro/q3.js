function EuclidDist(){
    /*
        (3, 7), (31, 42)
    */
    
    let d = Math.sqrt((Math.pow((3-31), 2)  +  Math.pow((7-42), 2)))
    alert("distância de (3, 7) a (31, 42) =" + d)
}

window.onload = EuclidDist
