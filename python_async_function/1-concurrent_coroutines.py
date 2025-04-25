#!/usr/bin/env python3
"""
Module for concurrent coroutines
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Asynchronous routine that spawns wait_random n times with the
    specified max_delay and returns the list of all the delays.
    Args:
        n: number of times to spawn wait_random
        max_delay: maximum delay
    Returns:
        List[float]: list of all the delays in ascending order
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    all_delays = await asyncio.gather(*tasks)
    return sorted(all_delays)
