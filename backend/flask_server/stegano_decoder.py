#!/usr/bin/env python3.6
import os

def _stegano_decode(stegano_img, steg=os.path.join("./", "dense")):


    from stegano_moldel_ import SteganoGAN

    steganogan = SteganoGAN.load(steg, cuda=False)

    # Decode the message from stegano_img
    decoded_msg = steganogan.decode(stegano_img)


    return decoded_msg




