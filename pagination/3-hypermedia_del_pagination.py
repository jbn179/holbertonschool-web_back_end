#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict, Any


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Return a dictionary with the hypermedia pagination data that is
        resilient to deletions.

        Args:
            index (int, optional): The current start index. Defaults to None.
            page_size (int, optional): The current page size. Defaults to 10.

        Returns:
            Dict: Dictionary with hypermedia pagination data
        """
        indexed_data = self.indexed_dataset()

        # Validate index
        assert index is None or (isinstance(index, int) and
               0 <= index < len(self.dataset()))

        if index is None:
            index = 0

        # Find valid data items starting from index
        data = []
        current_index = index

        # Collect page_size valid items or until we run out of items
        while len(data) < page_size and current_index < len(self.dataset()):
            if current_index in indexed_data:
                data.append(indexed_data[current_index])
            current_index += 1

        # Find next valid index for next_index
        next_index = current_index

        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': next_index
        }
