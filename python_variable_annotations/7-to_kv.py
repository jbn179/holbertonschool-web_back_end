#!/usr/bin/env python3
"""Module for a function that creates a tuple from a string and number."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Create a tuple from a string and the square of a number.

    Args:
        k: A string to be the first element of the tuple
        v: An int or float to be squared for the second element

    Returns:
        A tuple with the string k and the square of v as a float
    """
    return (k, float(v ** 2))
