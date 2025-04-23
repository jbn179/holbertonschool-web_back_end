#!/usr/bin/env python3
"""Module for a function that returns a multiplier function."""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Create a function that multiplies a float by a given multiplier.

    Args:
        multiplier: The float value to multiply by

    Returns:
        A function that takes a float and returns the product
        with the multiplier
    """
    def multiply_by_multiplier(n: float) -> float:
        return n * multiplier
    
    return multiply_by_multiplier
