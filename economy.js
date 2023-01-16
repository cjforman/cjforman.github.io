// Set up the scene and renderer
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.setSize( 0.9 * window.innerWidth, 0.9 * window.innerHeight );
document.body.appendChild(renderer.domElement);

// Create some cubes to represent wealth
var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
var blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });
var redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
var greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
var yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });

var blueCube = new THREE.Mesh(cubeGeometry, blueMaterial);
var redCube = new THREE.Mesh(cubeGeometry, redMaterial);
var greenCube = new THREE.Mesh(cubeGeometry, greenMaterial);
var yellowCube = new THREE.Mesh(cubeGeometry, yellowMaterial);

scene.add(blueCube);
scene.add(redCube);
scene.add(greenCube);
scene.add(yellowCube);

// Position the cubes to represent ownership
blueCube.position.x = -1;
redCube.position.x = 1;
greenCube.position.y = 1;
yellowCube.position.y = -1;

// Add a light to the scene
var light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 5);
scene.add(light);

// add camera to the scene
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
scene.add(camera)

function animate() {
	requestAnimationFrame( animate );
	blueCube.rotation.y += 0.01;
        redCube.rotation.y += 0.01;
	yellowCube.rotation.y += 0.01;
	greenCube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();
