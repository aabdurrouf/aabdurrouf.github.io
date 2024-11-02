---
title: "piXedfit: Pixelized Spectral Energy Distribution (SED) Fitting"
date: 2021-05-20
#order: 1
url: /pixedfit/
aliases: 
    - /pixedfit.html
tags: ["Image processing", "pixel binning", "Spatially resolved SED fitting", "Bayesian technique", "Galaxies"]
author: "Abdurro'uf"
#publisher: "Astrophysical Journal"
#publisher_abbrev: "ApJ"
summary: "piXedfit provides a compehensive set of tools for analyzing spatially resolved spectral energy distributions (SEDs) of galaxies and dissecting the spatially resolved properties of the stellar populations and dust in the galaxies. First, it can produce a pixel-matched 3D data cube from an input of a set of mutliband imaging data alone or in combination with an integral field spectroscopy (IFS) data. When IFS data is provided, it can produce a 3D spectrophotometric data cube in which spectra and photometric SEDs are combined on pixel level. Second, it has a unique pixel binning feature that can optimize the S/N ratio of SEDs on spatially resolved scales while retaining the spatial and spectral variations of the SEDs by accounting the similarity of SED shape of pixels in the binning process. This can be expected to reduce biases introduced by the binning process that combines pixels regardless of the variations in their SED shapes. Finally, piXedfit also provides a stand-alone SED fitting capability. It has two options of fitting methods: MCMC and random dense sampling of parameter space (RDSPS). Most of the modules in piXedfit have implemented MPI for parallel computation. A detailed description of piXedfit is presented in [Abdurro'uf et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021ApJS..254...15A/abstract). The documentation is given [here](https://pixedfit.readthedocs.io/en/latest/). Some examples of practical usages and tutorials can be found at folder examples and recent analysis with [JWST + HST images here](https://github.com/aabdurrouf/JWST-HST_resolvedSEDfits)."
cover:
    image: "/pixedfit.png"
    alt: "piXedfit: Pixelized Spectral Energy Distribution (SED) Fitting"
    relative: true

---

---

##### Links

+ [GitHub](https://github.com/aabdurrouf/piXedfit)
+ [Documentation](https://pixedfit.readthedocs.io/en/latest/index.html)

---

##### Abstract

"piXedfit provides a compehensive set of tools for analyzing spatially resolved spectral energy distributions (SEDs) of galaxies and dissecting the spatially resolved properties of the stellar populations and dust in the galaxies. First, it can produce a pixel-matched 3D data cube from an input of a set of mutliband imaging data alone or in combination with an integral field spectroscopy (IFS) data. When IFS data is provided, it can produce a 3D spectrophotometric data cube in which spectra and photometric SEDs are combined on pixel level. Second, it has a unique pixel binning feature that can optimize the S/N ratio of SEDs on spatially resolved scales while retaining the spatial and spectral variations of the SEDs by accounting the similarity of SED shape of pixels in the binning process. This can be expected to reduce biases introduced by the binning process that combines pixels regardless of the variations in their SED shapes. Finally, piXedfit also provides a stand-alone SED fitting capability. It has two options of fitting methods: MCMC and random dense sampling of parameter space (RDSPS). Most of the modules in piXedfit have implemented MPI for parallel computation. A detailed description of piXedfit is presented in [Abdurro'uf et al. (2021)](https://ui.adsabs.harvard.edu/abs/2021ApJS..254...15A/abstract). The documentation is given [here](https://pixedfit.readthedocs.io/en/latest/). Some examples of practical usages and tutorials can be found at folder examples and recent analysis with [JWST + HST images here](https://github.com/aabdurrouf/JWST-HST_resolvedSEDfits)."

---

##### Citation

```bibtex
@ARTICLE{2021ApJS..254...15A,
       author = {{Abdurro'uf} and {Lin}, Yen-Ting and {Wu}, Po-Feng and {Akiyama}, Masayuki},
        title = "{Introducing piXedfit: A Spectral Energy Distribution Fitting Code Designed for Resolved Sources}",
      journal = {\apjs},
     keywords = {Astronomical methods, Bayesian statistics, Galaxy evolution, Posterior distribution, 1043, 1900, 594, 1926, Astrophysics - Astrophysics of Galaxies},
         year = 2021,
        month = may,
       volume = {254},
       number = {1},
          eid = {15},
        pages = {15},
          doi = {10.3847/1538-4365/abebe2},
archivePrefix = {arXiv},
       eprint = {2101.09717},
 primaryClass = {astro-ph.GA},
       adsurl = {https://ui.adsabs.harvard.edu/abs/2021ApJS..254...15A},
      adsnote = {Provided by the SAO/NASA Astrophysics Data System}
}
```

```bibtex
@software{2022ascl.soft07033A,
       author = {{Abdurro'uf} and {Lin}, Yen-Ting and {Wu}, Po-Feng and {Akiyama}, Masayuki},
        title = "{piXedfit: Analyze spatially resolved SEDs of galaxies}",
 howpublished = {Astrophysics Source Code Library, record ascl:2207.033},
         year = 2022,
        month = jul,
          eid = {ascl:2207.033},
       adsurl = {https://ui.adsabs.harvard.edu/abs/2022ascl.soft07033A},
      adsnote = {Provided by the SAO/NASA Astrophysics Data System}
}
```

---

