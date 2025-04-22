import { thumbnail, algorithms2024 } from "./assets";

import { Divider, VideoEmbed } from '../../../../components';

const header = {
  "title": "Boundary SPH for Robust Particle-Mesh Interaction in Three Dimensions",
  "icon_url": thumbnail,
  "description": "Accepted into MDPI Algorithms",
  "status": "Completed",
  "dates":[
    { header:'Published Online', dates:[{year:'2024',day:'May 16'}] }
  ],
  "latest_version": "2.0",
  "external_links": [
    { "text": "doi: 10.3390/a17050218", "url": "https://doi.org/10.3390/a17050218" },
    { "text": "Download PDF (18.9 mB)", "url": algorithms2024 },
  ],
  "platforms": [
    "Unity3D",
  ],
  "skills": [
    "C#/CSharp",
    "HLSL",
    "Unity3D",
  ],
  "categories": [ "Research Papers" ],
  "sub_category": "Particle Simulation"
};

const content = <>
  <Divider space={16} />
  <p>For full disclosure, I wasn't exactly familiar with particle simulation before this project. This was my first project where I had to handle parallelization schemes for large-scale particle simulations. And in <i>Unity3D</i> no less! Terrifying, to be sure. I first started this project as a collaborative measure to model realistic physics of underwater phenomena (i.e. underwater currents, pressure) in interaction with simulated underwater robots. When our collaborator left, I ended up taking over the project.</p>
  <Divider space={16} />
  <p>Smoothed Particle Hydrodynamics (SPH) is a well-established method for simulating weakly or non-compressible fluids. Its particle physics are driven by Navier-Stokes equations, which are commonly used to model pressure forces between particles. SPH relies on the idea of identifying neighbor particles for each particle, determining the overall pressure forces applied to said particles based on qualities such as mass, density, and temperature, and then enacting those forces in discrete timesteps. It's difficult to conduct SPH simulations on the CPU, however - imagine trying to replicate these steps for thousands, maybe millions, of individual particles. The overhead alone will lag the simulation significantly. To solve this, parallelization scemes are required. If you're using a game engine like <i>Unity3D</i>, then your likely solution would be to use HLSL compute shaders to drive GPU operations.</p>
  <Divider space={16} />
  <p>There are some issues with particle systems like SPH. Namely, they treat particles as point masses, which prevents rigidbody mesh-based collisions with meshed objects. If driven by parallelization using a GPU, then another bottleneck is in the communication between the CPU and GPU. I wanted to see if we could solve this by <strong>moving mesh data from the CPU to the GPU</strong> and <strong>using signed distance calculations and voronoi region logic to measure the intersection of particles with mesh surfaces</strong>.</p>
  <Divider space={16} />
  <p>
    This project effectively is an exploration of whether this method is not only possible but efficient in terms of FPS. If this method was achievable, then we could replicate mesh transformations by simply converting <i>Unity</i> matrix transformations from the CPU to the GPU, then conduct mesh transformations via matrix operations. 
    <span style={{color:"blue"}}><strong><i> My method - which I refer to as "boundary SPH" (BSPH) - successfully accomplishes these ideas.</i></strong> I have some samples below that demonstrate these. Keep in mind - these also include early implementations!</span>
  </p>
  <Divider space={16} />
  <VideoEmbed width={300} src="https://www.youtube.com/embed/4lrMEq30XFc?si=PAi2y2yf4ded49QP" title="Youtube Player - SPH Mesh Boundary Condition: Velocity #3" />
  <VideoEmbed width={300} src="https://www.youtube.com/embed/BBdeq4DBnpI?si=xrNudR_YvPDfiAsq" title="Youtube Player - SPH Mesh Boundary Condition: Velocity #4" />
  <VideoEmbed width={300} src="https://www.youtube.com/embed/lI-6UYjifcE?si=GymztakaXksKqnFg" title="Youtube Player - SPH Mesh Boundary Condition: 1-Way Coupling" />
  <VideoEmbed width={300} src="https://www.youtube.com/embed/7Iw38oPjQH0?si=sGmYOJr2XxV62p8M" title="Youtube Player - SPH Mesh Boundary Condition: Friction Condition" />
  <VideoEmbed width={300} src="https://www.youtube.com/embed/V9hmG78rsGs?si=J7BrDdLMVUtkjiso" title="Youtube Player - SPH Mesh Boundary Condition: No-Friction Condition" />
  <VideoEmbed width={300} src="https://www.youtube.com/embed/zgwAVeb45qg?si=ADVOLwlQGsmsNP3v" title="Youtube Player - SPH Mesh Boundary Condition: Flow Field Test (Cooking Pot)" />
  <VideoEmbed width={300} src="https://www.youtube.com/embed/y31-HR9x4tE?si=a1pxPAyZfn1uxW7x" title="Youtube Player - SPH Mesh Boundary Condition: Flow Field Test (Torus)" />
  <VideoEmbed width={300} src="https://www.youtube.com/embed/hmSPNgK-9zY?si=BBO9URivPFY2egND" title="Youtube Player - SPH Mesh Boundary Condition: Flow Field Test (Sphere)" />
  {/*}
  <hr />
  <Divider space={16} />
  <h3><strong>Abstract</strong></h3>
  <p>
    <span><i>This paper introduces an algorithm to tackle the boundary condition (BC) problem, which has long persisted in the numerical and computational treatment of smoothed particle hydrodynamics (SPH). Central to the BC problem is a need for an effective method to reconcile a numerical representation of particles with 2D or 3D geometry. We describe and evaluate an algorithmic solution—boundary SPH (BSPH)—drawn from a novel twist on the mesh-based boundary method, allowing SPH particles to interact (directly and implicitly) with either convex or concave 3D meshes. The method draws inspiration from existing works in graphics, particularly discrete signed distance fields, to determine whether particles are intersecting or submerged with mesh triangles. We evaluate the efficacy of BSPH through application to several simulation environments of varying mesh complexity, showing practical real-time implementation in Unity3D and its high-level shader language (HLSL), which we test in the parallelization of particle operations. To examine robustness, we portray slip and no-slip conditions in simulation, and we separately evaluate convex and concave meshes. To demonstrate empirical utility, we show pressure gradients as measured in simulated still water tank implementations of hydrodynamics. Our results identify that BSPH, despite producing irregular pressure values among particles close to the boundary manifolds of the meshes, successfully prevents particles from intersecting or submerging into the boundary manifold. Average FPS calculations for each simulation scenario show that the mesh boundary method can still be used effectively with simple simulation scenarios. We additionally point the reader to future works that could investigate the effect of simulation parameters and scene complexity on simulation performance, resolve abnormal pressure values along the mesh boundary, and test the method’s robustness on a wider variety of simulation environments.</i></span>
  </p>
  {*/}
</>

const BoundarySPHData = {
	umbrella:"Research Projects",
	key:"boundary_sph",
	thumbnail:thumbnail,
	title:"Boundary SPH for Robust Particle-Mesh Interaction in Three Dimensions",
	url:"boundary_sph",
  header:header,
	content:content
}

export default BoundarySPHData;