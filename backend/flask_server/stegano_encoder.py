#!/usr/bin/env python3.6
import os

def _stegano_encode(cover_img, output_stegano_img, msg, steg = os.path.join("./", "dense")):
	from stegano_model_ import SteganoGAN

	steganogan = SteganoGAN.load(steg, cuda=False)
	steganogan.encode(cover_img, output_stegano_img, msg)
