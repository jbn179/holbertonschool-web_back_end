#!/usr/bin/env python3
"""Module for a function that sums a list of floats."""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Calculate the sum of a list of floats.

    Args:
        input_list: A list of float values

    Returns:
        The sum of all floats in the list
    """
    return sum(input_list)
