#!/usr/bin/env python3
"""
Type-annotated function to_kv that takes a string k and
an int OR float v as arguments and returns a tuple.
"""
from typing import Union, Tuple 


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string k and an int or float v and returns a tuple.
    The first element is the string k.
    The second element is the square of v and is a float.

    Args:
        k: A string
        v: An integer or float

    Returns:
        A tuple containing k and the square of v as a float
    """
    return (k, float(v ** 2))
