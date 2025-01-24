import * as THREE from 'three';

const scene = new THREE.Scene();

const geo = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const sizes = {
    width: 800,
    height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 3;
scene.add(camera);

const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer(
    {
        canvas: canvas,
    }
);

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);