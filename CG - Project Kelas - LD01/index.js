var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 10, 1000);
var renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Untuk buat shapes sky box nya , kami menggunakan Cube Geometry
var geometry = new THREE.CubeGeometry(600, 600, 600)
//var geometry = new THREE.TorusGeometry(500 , 500, 500)

//Buat control nya menggunakan orbit control js ,
//agar kita bisa gerakin ke kanan kiri atas bawah 
controls = new THREE.OrbitControls(camera, renderer.domElement)
// posisi kamera pada saat awal buka project
camera.position.z = 5

//menyesuaikan viewport pada saat kita melakukan perubahan pada ukuran screen kita 
window.addEventListener('resize', function(){
    var width = window.innerWidth
    var height = window.innerHeight
    renderer.setSize(width, height)
    camera.aspect = width / height 
    camera.updateProjectionMatrix()
})

// VR untuk LKC Binus
// yang juga menggunakan texture map untuk melapisi cube geometry
var cubeMaterials = [
    new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load("Asset/LKC-Back.jpg"), side : THREE.DoubleSide
    }), // buat yang bagian belakang
    new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load("Asset/LKC-Front.jpg"), side : THREE.DoubleSide
    }), // buat yang bagian depan
    new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load("Asset/LKC-Up.jpg"), side : THREE.DoubleSide 
    }), // buat yang bagian atas
    new THREE.MeshBasicMaterial({
         map: new THREE.TextureLoader().load("Asset/LKC-Bot.jpg"), side : THREE.DoubleSide
    }), // buat yang bagian bawah
    new THREE.MeshBasicMaterial({
         map: new THREE.TextureLoader().load("Asset/LKC-Right.jpg"), side : THREE.DoubleSide
    }), // buat yang bagian kanan
    new THREE.MeshBasicMaterial({
         map: new THREE.TextureLoader().load("Asset/LKC-Left.jpg"), side : THREE.DoubleSide
    }) // buat yang bagian kiri
]

//VR untuk di are lift
// var cubeMaterials = [
//     new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("Asset/Lift-Back.jpeg"), side : THREE.DoubleSide
//     }), // buat yang bagian belakang
//     new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("Asset/Lift-Front.jpeg"), side : THREE.DoubleSide
//     }), // buat yang bagian depan
//     new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("Asset/Lift-Up.jpeg"), side : THREE.DoubleSide 
//     }), // buat yang bagian atas
//     new THREE.MeshBasicMaterial({
//          map: new THREE.TextureLoader().load("Asset/Lift-Bot.jpeg"), side : THREE.DoubleSide
//     }), // buat yang bagian bawah
//     new THREE.MeshBasicMaterial({
//          map: new THREE.TextureLoader().load("Asset/Lift-Right.jpeg"), side : THREE.DoubleSide
//     }), // buat yang bagian kanan
//     new THREE.MeshBasicMaterial({
//          map: new THREE.TextureLoader().load("Asset/Lift-Left.jpeg"), side : THREE.DoubleSide
//     }) // buat yang bagian kiri
// ]

//VR buat area di dalam Mall of alam sutera
// var cubeMaterials = [
//     new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("Asset/Moas-Back.jpeg"), side : THREE.DoubleSide
//     }), // buat yang bagian belakang
//     new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("Asset/Moas-Front.jpeg"), side : THREE.DoubleSide
//     }), // buat yang bagian depan
//     new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("Asset/Moas-Up.jpeg"), side : THREE.DoubleSide 
//     }), // buat yang bagian atas
//     new THREE.MeshBasicMaterial({
//          map: new THREE.TextureLoader().load("Asset/Moas-Bot.jpeg"), side : THREE.DoubleSide
//     }), // buat yang bagian bawah
//     new THREE.MeshBasicMaterial({
//          map: new THREE.TextureLoader().load("Asset/Moas-Right.jpeg"), side : THREE.DoubleSide
//     }), // buat yang bagian kanan
//     new THREE.MeshBasicMaterial({
//          map: new THREE.TextureLoader().load("Asset/Moas-Left.jpeg"), side : THREE.DoubleSide
//     }) // buat yang bagian kiri
// ]

// VR buat nampilin basement MOAS
// var cubeMaterials = [
//     new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("Asset/Base-Back.jpeg"), side : THREE.DoubleSide
//     }), // buat yang bagian belakang
//     new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("Asset/Base-Front.jpeg"), side : THREE.DoubleSide
//     }), // buat yang bagian depan
//     new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("Asset/Base-Up.jpeg"), side : THREE.DoubleSide 
//     }), // buat yang bagian atas
//     new THREE.MeshBasicMaterial({
//          map: new THREE.TextureLoader().load("Asset/Base-Bot.jpeg"), side : THREE.DoubleSide
//     }), // buat yang bagian bawah
//     new THREE.MeshBasicMaterial({
//          map: new THREE.TextureLoader().load("Asset/Base-Right.jpeg"), side : THREE.DoubleSide
//     }), // buat yang bagian kanan
//     new THREE.MeshBasicMaterial({
//          map: new THREE.TextureLoader().load("Asset/Base-Left.jpeg"), side : THREE.DoubleSide
//     }) // buat yang bagian kiri
// ]

//VR buat nampilin Area sekitar BINUS
// var cubeMaterials = [
//     new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("Asset/Binus-Back.jpg"), side : THREE.DoubleSide
//     }), // buat yang bagian belakang
//     new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("Asset/Binus-Front.jpg"), side : THREE.DoubleSide
//     }), // buat yang bagian depan
//     new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("Asset/Binus-Up.jpg"), side : THREE.DoubleSide 
//     }), // buat yang bagian atas
//     new THREE.MeshBasicMaterial({
//          map: new THREE.TextureLoader().load("Asset/Binus-Bot.jpg"), side : THREE.DoubleSide
//     }), // buat yang bagian bawah
//     new THREE.MeshBasicMaterial({
//          map: new THREE.TextureLoader().load("Asset/Binus-Right.jpg"), side : THREE.DoubleSide
//     }), // buat yang bagian kanan
//     new THREE.MeshBasicMaterial({
//          map: new THREE.TextureLoader().load("Asset/Binus-Left.jpg"), side : THREE.DoubleSide
//     }) // buat yang bagian kiri
// ]

// Ini untuk memberikan isi tampilan pada cube geometry yang kita buat tadi pada saat di load di scene
var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials)
var cube = new THREE.Mesh(geometry, cubeMaterial)
scene.add(cube)

// Buat pencahayaan nya
// var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1 )
// scene.add( ambientLight )

var pointLight = new THREE.PointLight("#F5E6CA", 1)
scene.add(pointLight)
pointLight.position.set(0, 100, 50)
pointLight.castShadow = true

//Animasi untuk berputar secara otomatis ke sumbu x ataupun y 
//dan kecepatanya rotasinya bisa diatur
var round = function(){
    //cube.rotation.x += 0.005
    //cube.rotation.y += 0.007;
    //cube.rotation.x += 0.0001;
    cube.rotation.y += 0;
}

//Rendering 
//Buat nampilin object yang udah kita buat ke dalam scene agar bisa muncul ,
//Yang muncul adalah isi nya geometri tersebut seperti  pencahayaan, 
//bayangan, size dan posisinya
var render = function(){
    renderer.render(scene, camera)
};

//rendering yang di loop agar scene kita bisa jalan terus
var VrLoop = function(){
    requestAnimationFrame(VrLoop)
    round()
    render()
}
VrLoop()