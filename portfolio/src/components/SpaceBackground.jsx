import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const SpaceBackground = () => {
  const containerRef = useRef();

  useEffect(() => {
    //setup scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    //controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    //static starfield background
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

    //arrays to hold shooting stars and trail particles
    const shootingStars = [];
    const trailParticles = [];

    //spawn a shooting star
    const spawnShootingStar = () => {
      const colors = [0x1E90FF, 0xDA70D6, 0xFF4500];
      const chosenColor = colors[Math.floor(Math.random() * colors.length)];
      const geometry = new THREE.SphereGeometry(0.05, 8, 8);
      const material = new THREE.MeshBasicMaterial({ color: chosenColor });
      const star = new THREE.Mesh(geometry, material);

      //set a random starting position
      star.position.set(
        (Math.random() - 0.5) * 200,
        Math.random() * 100 + 50,
        (Math.random() - 0.5) * 200
      );

      //set velocity
      star.userData.velocity = new THREE.Vector3(
        -Math.random() * 30 - 20,
        -Math.random() * 30 - 20,
        0
      );
      scene.add(star);
      shootingStars.push(star);
    };

    //spawn a trail particle at a given position with a given color
    const spawnTrailParticle = (position, color) => {
      const geometry = new THREE.SphereGeometry(0.09, 6, 6);
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 1,
      });
      const particle = new THREE.Mesh(geometry, material);
      particle.position.copy(position);
      //save age and lifetime in seconds
      particle.userData = { age: 0, lifetime: 0.3 };
      scene.add(particle);
      trailParticles.push(particle);
    };

    //animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      //slowly rotate the star field
      starField.rotation.x += 0.0005;
      starField.rotation.y += 0.001;
      controls.update();

      //randomly spawn shooting stars
      if (Math.random() < 0.05) {
        spawnShootingStar();
      }

      //update shooting stars
      shootingStars.forEach((star, index) => {
        //update position
        const delta = 0.016;
        star.position.add(star.userData.velocity.clone().multiplyScalar(delta));
        spawnTrailParticle(star.position, star.material.color.getHex());
        //rm if stars are out of bounds
        if (
          star.position.x < -200 ||
          star.position.y < -200 ||
          star.position.x > 200 ||
          star.position.y > 200
        ) {
          scene.remove(star);
          shootingStars.splice(index, 1);
        }
      });

      //fade trail particles over time
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const particle = trailParticles[i];
        particle.userData.age += 0.016;
        const t = particle.userData.age / particle.userData.lifetime;
        //fade the opacity over lifetime
        particle.material.opacity = 1 - t;
        //rm the particle when its lifetime is exceeded
        if (t >= 1) {
          scene.remove(particle);
          trailParticles.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    //handle resizing
    const handleResize = () => {
      const clientWidth = window.innerWidth;
      const clientHeight = window.innerHeight;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none" />
  );
};

export default SpaceBackground;
