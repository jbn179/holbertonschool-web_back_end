#!/usr/bin/env python3
"""
Module for measuring runtime of async comprehensions in parallel.
This module demonstrates how asyncio.gather can be used to run
multiple async comprehensions concurrently.
"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Measures the total runtime of executing async_comprehension four times
    in parallel using asyncio.gather.

    Returns:
        float: The total runtime in seconds (approximately 10 seconds)
    """
    start_time = time.time()

    tasks = []
    for _ in range(4):
        tasks.append(asyncio.create_task(async_comprehension()))

    await asyncio.gather(*tasks)

    end_time = time.time()
    return end_time - start_time
