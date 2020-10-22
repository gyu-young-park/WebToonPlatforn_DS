#!/usr/bin/env python3.6
import os

def _stegano_decode(stegano_img, steg="dense"):


    from stegano_model_ import SteganoGAN
    from decoders import DenseEncoder

    steganogan = SteganoGAN.load(steg, cuda=False)
    
    # Decode the message from stegano_img
    decoded_msg = steganogan.decode(stegano_img)


    return decoded_msg


#print(_stegano_decode("output+__.png"))



