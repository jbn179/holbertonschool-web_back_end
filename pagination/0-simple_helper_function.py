#!/usr/bin/env python3
"""
Simple helper function for pagination
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple of size two containing a start index and an end index
    corresponding to the range of indexes to return in a list for those
    particular pagination parameters.

    Args:
        page (int): Page number (1-indexed)
        page_size (int): Number of items per page

    Returns:
        Tuple[int, int]: Tuple containing start and end indexes
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
