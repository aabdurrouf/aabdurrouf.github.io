---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

![fig1](/images/univev1.png)

Key Questions:

+ **When and how did the first galaxies form?**
+ **How do galaxies build their structures over cosmic time?**
+ **When the bulge and disk components form and how they evolve over cosmic time?**
+ **When did the first galaxies cease their star formation (quenching) and what drive the process?**

I am an observational astronomer investigating these fundamental questions about galaxy evolution. My research explores how galaxies form in the early universe and evolve throughout cosmic time, during which they transform from chaotic, clumpy structures into the well-defined systems (spiral and elliptical galaxies) we observe in the present-day universe. By examining galaxies' detailed internal structures across cosmic history, we can uncover the physical processes driving their evolution.

I approach this challenge by developing and applying innovative techniques for analyzing galaxies' spatially resolved properties. I developed [**piXedfit**,](https://github.com/aabdurrouf/piXedfit) a public software package that maps the spatial distribution of stellar population properties within galaxies. This tool has become particularly valuable given the abundance of deep, high-resolution imaging data from established observatories like the Hubble Space Telescope (HST) and new facilities like the James Webb Space Telescope (JWST) and Euclid, which provide unprecedented detailed views of distant galaxies.

![fig2](/images/galev1.png)

Gaze into this deep portrait of our cosmos, where each point of light tells a story spanning billions of years. This vast cosmic tapestry serves as a time machine, capturing galaxies frozen in different chapters of our universe's evolution. In the foreground, we see mature galaxies with their graceful spiral arms and stately elliptical forms, while deeper in the field, more distant galaxies appear smaller and redder, their light having traveled billions of light-years to reach us. This single frame, containing thousands of galaxies at different distances, offers a precious scientific time capsule that allows astronomers to piece together the grand story of galactic evolution, revealing how today's intricate and ordered galaxies emerged from the chaos of the early universe.

<div style="position: relative; width: 100%; padding-bottom: 56.25%">
<iframe src="https://www.youtube.com/embed/RH7S_ajUniM?si=fh9-pX_C4Wo4Amly" title="YouTube video player" 
        title="IllustrisTNG Galaxy formation simulation" frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        style="position: absolute; width: 100%; height: 100%;">
</iframe>
</div>

Unlike observations that give us static snapshots of different galaxies at various cosmic epochs, simulations like IllustrisTNG TNG50 (see movie above) reveal the intricate dance of dark matter, gas, stars, and supermassive black holes across time. These digital laboratories recreate billions of years of cosmic evolution, showing us how the first primitive galaxies emerged from cosmic filaments of dark matter and gas, and how they transformed into the magnificent structures we see today. This virtual universe serves as a crucial bridge between theory and observation, allowing us to test our understanding of fundamental physics against the real cosmos. When simulation predictions match observational data, we gain confidence in our understanding; when they differ, these discrepancies point us toward new physics yet to be discovered. By comparing these simulated galaxies with our observations across cosmic time, we can unravel the complex physics driving galaxy evolution and piece together the complete story of how galaxies like our Milky Way came to be.

Current projects
======

Formation of the first galaxies and physical conditions in the reionization epoch
------

![fig3](/images/macs0647jd.png)

The discovery and characterization of galaxies in the early universe, particularly during the epoch of reionization (z > 6), represents one of the most compelling frontiers in modern astronomy. While ground-based surveys and the Hubble Space Telescope have provided valuable insights into galaxy formation at z ∼ 6-8, our understanding of the earliest galaxies that emerged during the universe's first billion years has remained limited by observational capabilities. The launch of JWST has ushered in a transformative era in high-redshift galaxy studies, offering unprecedented sensitivity and resolution in the near- and mid-infrared wavelengths where these ancient galaxies' rest-frame ultraviolet and optical light is redshifted. JWST's remarkable capabilities have already led to the identification of numerous galaxy candidates at z > 10, challenging our existing models of early galaxy formation and evolution. Its advanced spectroscopic capabilities enable detailed studies of these galaxies' physical properties, providing crucial insights into how the first galaxies formed and contributed to cosmic reionization. 

In [Hsiao, Abdurro'uf et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024ApJ...973....8H/abstract), we observed the lensed galaxy MACS0647-JD at z = 10.17 using JWST NIRSpec prism spectroscopy as part of GO 1433 (PI: Coe). This observation led to the detection of seven emission lines in the rest-frame UV and blue optical, representing some of the earliest detections of these lines at z > 10 and providing an unprecedented glimpse into the interstellar medium (ISM) conditions of the early universe. In [Abdurro'uf et al. (2024)](https://ui.adsabs.harvard.edu/abs/2024ApJ...973...47A/abstract), we revisited MACS0647-JD with NIRSpec high-resolution spectroscopy as part of GO 4246, which I led, successfully resolving multiple emission lines, including the critical [O II] λλ3726, 3729 doublet, a sensitive tracer of electron density in the ISM. This marked the first resolved detection of the [O II] doublet at z > 10, enabling the first direct measurement of electron density in a galaxy from the reionization era and offering valuable new insights into ISM conditions in an early galaxy.


Spatially resolved studies of galaxy evolution across cosmic time
-------

![fig4](/images/maps2.png)

The present-day galaxy population exhibits remarkable structural diversity, shaped by a range of internal and external processes. However, the relative contributions of mechanisms such as secular evolution, mergers, low-angular-momentum gas accretion, violent disk instabilities, and AGN feedback remain uncertain. Recent advancements in the sensitivity and spatial resolution of astronomical instruments now make it possible to study galaxies in unprecedented detail across a wide range of redshifts. With the launch of JWST, we can analyze the rest-frame optical morphologies of galaxies up to z~9 with a resolution of ~1 kpc, providing an exceptional opportunity to investigate structural evolution over much of cosmic history. Despite these advancements, most studies in recent decades have concentrated on integrated (i.e., global) galaxy properties, yielding key insights into galaxy evolution on a large scale but often overlooking spatially resolved properties within galaxies, which are likely more fundamental and drive observed global behaviors. Although integral field spectroscopy (IFS) surveys are highly effective for probing a galaxy’s internal properties by capturing spectra across spatial regions within the galaxy, they remain prohibitively expensive for high-redshift studies.

Motivated by these, I developed [**piXedfit**,](https://github.com/aabdurrouf/piXedfit) a tool specifically designed for spatially resolved spectral energy distribution (SED) fitting of galaxies. By applying this code to the wealth of high-quality imaging data now available from JWST, HST, and Euclid, and forthcoming from observatories like Vera C. Rubin
Observatory’s LSST and the Nancy Grace Roman Space Telescope, I plan to conduct a systematic study of the spatially resolved stellar population properties of a large number of galaxies at a broad redshift range (0 < z < 8) with primary objectives of:
+ Tracing the assembly of galaxy structures over cosmic time, focusing on the diversity of stellar population radial profiles as functions of global galaxy properties and redshifts.
+ Investigating how star formation quenching occurs within galaxies with emphasis on examining the spatially resolved signatures of quenching.
+ Exploring the demographics of star-forming clumps at high redshifts and how their star-formation activities relate to the overall burstiness of the host galaxies.

My research has been focusing on the structural evolution of galaxies. As a pilot project, I applied piXedfit to multiple samples in both the local universe and high redshifts, utilizing multi-wavelength imaging data ranging from the far-ultraviolet (FUV) to the far-infrared (FIR), obtained from various ground- and space-based telescopes. I have been applying piXedfit to various galaxy samples. In [Abdurro’uf et al. (2022a)](https://ui.adsabs.harvard.edu/abs/2022ApJ...926...81A/abstract) and [Abdurro’uf et al. (2022c)](https://ui.adsabs.harvard.edu/abs/2022ApJ...935...98A/abstract), I investigated the structural properties of stars, dust, and gas in ten nearby galaxies to explore the interplay between these baryonic components. I used over 20 bands of imaging data, ranging from FUV to FIR, collected from GALEX, SDSS, 2MASS, WISE, Spitzer, and Herschel. The atomic and molecular gas maps were taken from CO and 21-cm HI data from the HERACLES and THINGS surveys. Some key findings include (1) the spatially resolved IRX–β relation; (2) evidence that old stellar populations contribute to dust heating; and (3) local kpc-scale scaling relations among stellar population, dust, and gas properties. In [Abdurro’uf et al. (2023)](https://ui.adsabs.harvard.edu/abs/2023ApJ...945..117A/abstract), I extended spatially resolved studies to higher redshifts by analyzing 444 galaxies at 0.3 < z < 6 in the sightlines
of the WHL0137-08 and MACS0647+70 clusters, utilizing combined HST/ACS and JWST/NIRCam data. This study provided supporting evidence for the inside-out growth and quenching scenarios.

![fig5](/images/maps1.png)

Looking ahead, my research will leverage the combined data from JWST, Euclid, and future telescopes, especially Vera C. Rubin Observatory and Nancy Grace Roman Space Telescope, to create detailed maps of stellar properties in galaxies across cosmic time. I'm particularly interested in addressing the key questions outlined above. 


Comparison between observational results and numerical simulations
-------

In hierarchical galaxy formation models within the ΛCDM cosmological framework, galaxies are predicted to build their structures from the inside out. This assembly process includes a sequence of gas accretions driven by mergers and filamentary inflows from the cosmic web. During gas-rich mergers, gas can rapidly flow into the galaxy’s center, leading to compaction and triggering a nuclear starburst. This starburst phase quickly consumes gas, causing depletion and potentially activating AGN feedback, both of which can suppress further star formation. High-redshift galaxies can undergo multiple compaction events, resulting in oscillations around the star-forming main sequence (SFMS) ridge line. These compaction and nuclear starburst processes are thought to play a key role in the formation of massive central bulges and leave distinct imprints on the spatially resolved stellar populations. At high redshifts, where merger rates are high and central starbursts are common, the radial profile of the specific star formation rate (sSFR) often shows a central peak with a flatter profile in the disk. When AGN feedback is triggered, star formation in the central region is significantly suppressed. However, rejuvenation events, often merger-driven, can reignite central star formation, causing an sSFR boost in the galaxy’s center. These imprints can only be effectively investigated through spatially resolved studies, which remain limited for high-redshift galaxies.

In addition to the observational studies described above, I integrate data from cosmological hydrodynamical simulations to conduct detailed comparative analyses, particularly using the IllustrisTNG/TNG50 simulations. These combined approaches will create a feedback loop, where simulations help interpret observations, and observational data, in turn, refine the simulation. Through this research, we're piecing together the story of how galaxies like our Milky Way came to be, helping us understand our cosmic origins and the fundamental processes that shape our universe.













