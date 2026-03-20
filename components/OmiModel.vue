<template>
  <div ref="container" class="omi-model-container"></div>
</template>

<script setup>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

const container = ref(null)
let scene, camera, renderer, animationId, model3D
let isDragging = false
let previousMouseX = 0
let previousMouseY = 0

const initScene = async () => {
  if (!container.value) return

  // Scene setup
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera(
    45,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000
  )
  camera.position.set(0, 0, -2.5)
  camera.lookAt(0, 0, 0)

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1
  container.value.appendChild(renderer.domElement)

  // Environment map for reflections
  const pmremGenerator = new THREE.PMREMGenerator(renderer)
  pmremGenerator.compileEquirectangularShader()
  const envMap = pmremGenerator.fromScene(new RoomEnvironment()).texture
  scene.environment = envMap

  // Lights for glass effect
  const ambientLight = new THREE.AmbientLight(0xffffff, 1)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
  directionalLight.position.set(5, 5, -5)
  scene.add(directionalLight)

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight2.position.set(-5, 5, -5)
  scene.add(directionalLight2)

  const backLight = new THREE.DirectionalLight(0xffffff, 0.5)
  backLight.position.set(0, -5, 5)
  scene.add(backLight)

  // Load GLB model
  loadGLBModel()

  // Animation loop
  animate()

  // Handle resize
  window.addEventListener('resize', onResize)

  // Mouse controls to rotate object
  renderer.domElement.addEventListener('mousedown', onMouseDown)
  renderer.domElement.addEventListener('mousemove', onMouseMove)
  renderer.domElement.addEventListener('mouseup', onMouseUp)
  renderer.domElement.addEventListener('mouseleave', onMouseUp)

  // Touch controls
  renderer.domElement.addEventListener('touchstart', onTouchStart)
  renderer.domElement.addEventListener('touchmove', onTouchMove)
  renderer.domElement.addEventListener('touchend', onMouseUp)
}

const onMouseDown = (event) => {
  isDragging = true
  previousMouseX = event.clientX
  previousMouseY = event.clientY
}

const onMouseMove = (event) => {
  if (!isDragging || !model3D) return

  const deltaX = event.clientX - previousMouseX
  const deltaY = event.clientY - previousMouseY

  model3D.rotation.y += deltaX * 0.005
  model3D.rotation.x += deltaY * 0.005

  previousMouseX = event.clientX
  previousMouseY = event.clientY
}

const onMouseUp = () => {
  isDragging = false
}

const onTouchStart = (event) => {
  if (event.touches.length === 1) {
    isDragging = true
    previousMouseX = event.touches[0].clientX
    previousMouseY = event.touches[0].clientY
  }
}

const onTouchMove = (event) => {
  if (!isDragging || !model3D || event.touches.length !== 1) return

  const deltaX = event.touches[0].clientX - previousMouseX
  const deltaY = event.touches[0].clientY - previousMouseY

  model3D.rotation.y += deltaX * 0.005
  model3D.rotation.x += deltaY * 0.005

  previousMouseX = event.touches[0].clientX
  previousMouseY = event.touches[0].clientY
}

const loadGLBModel = () => {
  console.log('Starting to load GLB model...')
  const loader = new GLTFLoader()

  loader.load(
    '/OMI.glb',
    (gltf) => {
      console.log('GLB loaded successfully:', gltf)
      const model = gltf.scene

      // Center and scale the model
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())

      console.log('Model size:', size)
      console.log('Model center:', center)

      model.position.sub(center)

      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 8 / maxDim
      model.scale.setScalar(scale)

      // Pas de rotation - teste l'orientation originale

      // Apply edges material (less lines than wireframe)
      model.traverse((child) => {
        if (child.isMesh) {
          // Hide original mesh
          child.material = new THREE.MeshBasicMaterial({
            visible: false
          })

          // Add edges only (angle threshold = 1 degree = more lines)
          const edges = new THREE.EdgesGeometry(child.geometry, 1)
          const line = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({ color: 0x333333, linewidth: 1 })
          )
          child.add(line)
        }
      })

      scene.add(model)
      model3D = model
      console.log('Model added to scene')
    },
    (progress) => {
      if (progress.total > 0) {
        console.log('Loading progress:', (progress.loaded / progress.total) * 100, '%')
      }
    },
    (error) => {
      console.error('Error loading GLB:', error)
      addFallbackSphere()
    }
  )
}

const addFallbackSphere = () => {
  const geometry = new THREE.SphereGeometry(1, 32, 32)
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.3,
    roughness: 0.4
  })
  const sphere = new THREE.Mesh(geometry, material)
  scene.add(sphere)
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

const onResize = () => {
  if (!container.value) return
  camera.aspect = container.value.clientWidth / container.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
}

onMounted(() => {
  console.log('OmiModel mounted, container:', container.value)
  initScene()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', onResize)
  if (renderer) {
    renderer.domElement.removeEventListener('mousedown', onMouseDown)
    renderer.domElement.removeEventListener('mousemove', onMouseMove)
    renderer.domElement.removeEventListener('mouseup', onMouseUp)
    renderer.domElement.removeEventListener('mouseleave', onMouseUp)
    renderer.domElement.removeEventListener('touchstart', onTouchStart)
    renderer.domElement.removeEventListener('touchmove', onTouchMove)
    renderer.domElement.removeEventListener('touchend', onMouseUp)
    renderer.dispose()
  }
})
</script>

<style scoped>
.omi-model-container {
  width: 500px;
  height: 400px;
}
</style>
