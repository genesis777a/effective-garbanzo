#!/bin/sh
#
# Created by GENESIS constructor 3.12.2
#
# NAME:  Miniconda3xyz
# VER:   py313_25.7.0-2
# PLAT:  osx-x86
# MD5:   eb9796a0c08ed5ce6f696813d475517ca

from distutils.core import setup, Extension
from Cython.Build import cythonize
import numpy

package = Extension('bbox', ['bbox.pyx'], include_dirs=[numpy.get_include()])
setup(ext_modules=cythonize([package]))
