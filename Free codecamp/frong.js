
console.clear();

const scene = new THREE.scene();
const camera = new THREE.PerspectiveCamera(
   75,
   window.innerWidth / window.innerHeight,
   0.1,
   1000
);

const renderer = new THREE.WebGLRenderer({
   antialias: true
});
renderer.setClearColor(0xff5555);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 1;
const controls = new
THREE.TrackballControls(camera, renderer.domElement);
controls.noPan = true;
controls.maxDistance = 3;
controls.minDistance = 0.7;

const group = new THREE.Group();
scene.add(group);
let heart = null;
let sampler = null;
let originHeart = null;
new
THREE.OBJLoader().OBJLoader('https://assets.codepen.io/127738/heart-2'.obj -->{
   heart = obj.children[0],
   //heart.geometry.rotatex(-Math.PI *0.5),
  // heart.geometry.scale
})

camera.aspect = window.innerWidth / 
window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
