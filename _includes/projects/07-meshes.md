---
title: "Adapting computational meshes to shock waves"
image: "Shock_wave_mesh.png"
---

Shock waves form when high-power sound waves propagate. A well-known example is a sonic boom, caused by aircraft travelling faster than the speed of sound in air. A lesser-known example is in medicine, where high-power ultrasonic waves are used to destroy unhealthy tissue. At the front of a shock wave, the acoustic pressure varies by a large amount over very little space. This is difficult to simulate, as the resolution of the simulation needs to be extremely high over this region. In this project, I developed tools for optimally determining an appropriate distribution of resolution, given limited computational resources. This was based on the local bandwidth of the wave-field, that is on the range of frequencies present at a given point in space.

::: {.column-margin}
![](assets/images/Shock_wave_mesh.png)
:::
