<template>
  <div id="threejs" ref="threejs" class="w-100"></div>
</template>

<script>
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from "three";

export default {
  name: "ThreeJsComponent",
  props: {
    geometry: {type: String, default: "hexagon"}
  },
  methods: {
    mountComponent() {
      const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
      renderer.setSize(this.$refs.threejs.offsetWidth, this.$refs.threejs.offsetHeight);
      document.getElementById("threejs").appendChild(renderer.domElement);
      renderer.setClearColor(0x000000, 0);

      const fov = 45;
      const aspect = this.$refs.threejs.offsetWidth / this.$refs.threejs.offsetHeight;
      const near = 0.1;
      const far = 100;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(0, 8, 0);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0, 0);
      // controls.minDistance = 8
      // controls.maxDistance = 12
      controls.enableZoom = false
      controls.smooth = true;
      controls.smoothspeed = 0.95;
      controls.update();

      const scene = new THREE.Scene();
      // scene.background = new THREE.Color('black');
      let mesh = null


      if (this.geometry === "hexagon") {
        const geometry = new THREE.IcosahedronGeometry(2.5, 0)
        const material = new THREE.MeshPhysicalMaterial({
          color: '#7092E0',
        });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
      } else if (this.geometry === "cubes") {
        const group = new THREE.Group()

        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
              const geometry = new THREE.BoxBufferGeometry(0.75, 0.75, 0.75)
              const material = new THREE.MeshPhysicalMaterial({
                color: '#7092E0',
              });
              mesh = new THREE.Mesh(geometry, material);
              mesh.position.set(x * 1.05, y * 1.05, z * 1.05)
              group.add(mesh);
            }
          }
        }
        mesh = group
        scene.add(group)
      } else if (this.geometry === "dodecahedron") {
        const geometry = new THREE.DodecahedronGeometry(2.3, 0)
        const material = new THREE.MeshPhysicalMaterial({
          color: '#7092E0',
        });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
      }

      {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, 0.4);
        light.position.set(10, 10, 5);
        light.target.position.set(0, 0, 0);
        scene.add(light);
        scene.add(light.target);

        const light2 = new THREE.DirectionalLight(color, 0.5);
        light2.position.set(-10, -10, 5);
        light2.target.position.set(0, 0, 0);
        scene.add(light2);
        scene.add(light2.target);


        const light3 = new THREE.PointLight(color, 0.3);
        light3.position.set(15, 15, 15);
        scene.add(light2);

        const light4 = new THREE.AmbientLight(color, 0.6);
        scene.add(light4);
      }

      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      }

      function render() {

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        if (mesh) {
          mesh.rotation.x += 0.005;
          mesh.rotation.y += 0.005;
        }

        renderer.render(scene, camera);

        requestAnimationFrame(render);
      }

      requestAnimationFrame(render);
    }
  },
  mounted() {
    if (document.readyState === "complete") {
      console.log("ThreeJS mounted immediate")
      this.mountComponent()
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        console.log("ThreeJS mounted after DOMContentLoaded")
        this.mountComponent()
      })
    }
  }
}
</script>

<style scoped>

</style>
