// Set up the scene and renderer
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
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

// Render the scene
renderer.render(scene, camera);