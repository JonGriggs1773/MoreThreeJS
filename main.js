import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500)
camera.lookAt(0, 0, 0)
camera.position.set(0, 0, 10)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//? Creating a cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
const cube = new THREE.Mesh(geometry, material)

//? Creating a line
const lineMaterial = new THREE.LineBasicMaterial({color: 0x00ff00})
const points = []
points.push(new THREE.Vector3(-5, 0, 0))
points.push(new THREE.Vector3(0, 5, 0))
points.push(new THREE.Vector3(5, 0, 0))
const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
const line = new THREE.Line(lineGeometry, lineMaterial)


//? Any created shapes need to be added to the scene
scene.add(cube)
scene.add(line)

//? Moving camera out so shapes aren't inside the camera
//? By default, shapes are at 0,0,0 x,y,z coordinates on the screen, same as camera without line below
// camera.position.z = 5

//? To see any created shapes, you must add them to this method
const animate = () => {
    //? Creates recursive animation loop
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
}

animate()