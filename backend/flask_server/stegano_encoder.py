#!/usr/bin/env python3.6
import os

def _stegano_encode(cover_img, output_stegano_img, msg, steg = "dense"):
	from stegano_model_ import SteganoGAN
	
	print("checkPoint before load")
	steganogan = SteganoGAN.load(steg, cuda=False)
	print("checkPoint after load")
	steganogan.encode(cover_img, output_stegano_img, msg)


#_stegano_encode("converted.png", "output____.png", "four hanggongdae")