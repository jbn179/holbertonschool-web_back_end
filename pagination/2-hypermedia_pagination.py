#!/usr/bin/env python3
"""
Hypermedia pagination module
"""
import csv
import math
from typing import List, Tuple, Dict, Any


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


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return a specific page of the dataset based on pagination parameters.

        Args:
            page (int, optional): Page number (1-indexed). Defaults to 1.
            page_size (int, optional): Number of items per page.
            Defaults to 10.

        Returns:
            List[List]: The specified page of the dataset.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        dataset = self.dataset()

        if not dataset:
            return []

        try:
            start_index, end_index = index_range(page, page_size)
            return dataset[start_index:end_index]
        except IndexError:
            return []

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        Return a dictionary containing hypermedia pagination metadata and data.

        Args:
            page (int, optional): Page number (1-indexed). Defaults to 1.
            page_size (int, optional): Number of items per page.
            Defaults to 10.

        Returns:
            Dict[str, Any]: Dictionary with pagination metadata and data
        """
        data = self.get_page(page, page_size)
        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size)

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': page + 1 if page < total_pages else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': total_pages
        }
