import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const AttractorBackground = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Basic Three.js setup: Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5); // Start camera position

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight); // Set the renderer to fill the window
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Create a starfield
    const starsGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      starVertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
    }
    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.x += 0.0005; // Rotate stars slowly
      starField.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing
    const handleResize = () => {
      const { clientWidth, clientHeight } = containerRef.current;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default AttractorBackground;
