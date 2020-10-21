#!/usr/bin/env python3.6
import os

def _stegano_encode(cover_img, output_stegano_img, msg, steg = os.path.join("/stegano_pretrained/", "dense")):


	from steganogan import SteganoGAN
	from steganogan.encoders import DenseEncoder

	steganogan = SteganoGAN.load(steg, cuda=False)

	steganogan.encode(cover_img, output_stegano_img, msg)
