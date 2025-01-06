---
title: "Axisymmetric ultrasound simulation"
image: "axisymmetric_ultrasound.png"
---

Ultrasound plays an important role in medicine, with uses including imaging, drug delivery, and cancer therapy. This last application works by focussing high-power ultrasound waves onto a tumour, causing highly localised heating. Simulations are used to ensure that the sound waves focus as intended, and to determine the appropriate level of power that is applied. However, the high frequencies involved can make simulation prohibitively computationally expensive.

:::{.column-margin}
![](assets/images/axisymmetric_ultrasound.png)
:::

One way of mitigating these expenses is to exploit symmetry. Often, the ultrasound transducers are shaped like spherical bowls. The sound waves then have the same symmetry, and this can be exploited in the simulation, reducing a three-dimensional problem down to two-dimensions. To do so, discrete sine and cosine transforms are used. These represent the acoustic field in a using functions with certain symmetry properties.This brings computational costs down dramatically.
